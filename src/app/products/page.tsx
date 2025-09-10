'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { ProductFilter } from '@/types/product';
import { ProductService } from '@/lib/product-service';
import ProductCard from '@/components/product/ProductCard';
import ProductFilterComponent from '@/components/product/ProductFilter';

export default function ProductsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<ProductFilter>({});

  // 검색 및 필터링된 제품 목록
  const filteredProducts = useMemo(() => {
    let products = ProductService.getAllProducts();

    // 검색어 적용
    if (searchQuery.trim()) {
      products = ProductService.searchProducts(searchQuery.trim());
    }

    // 필터 적용
    if (Object.keys(filter).length > 0) {
      const searchResults = searchQuery.trim() 
        ? ProductService.searchProducts(searchQuery.trim())
        : ProductService.getAllProducts();
      
      products = ProductService.getFilteredProducts({
        ...filter,
        // 검색 결과와 필터 결과의 교집합
      }).filter(product => 
        searchQuery.trim() 
          ? searchResults.some(p => p.id === product.id)
          : true
      );
    }

    return products;
  }, [searchQuery, filter]);

  const handleProductClick = (productId: string) => {
    router.push(`/products/${productId}`);
  };

  const getResultSummary = () => {
    const total = filteredProducts.length;
    const hasSearch = searchQuery.trim();
    const hasFilter = Object.keys(filter).length > 0;

    if (hasSearch && hasFilter) {
      return `"${searchQuery}" 검색 및 필터 결과: ${total}개`;
    } else if (hasSearch) {
      return `"${searchQuery}" 검색 결과: ${total}개`;
    } else if (hasFilter) {
      return `필터 결과: ${total}개`;
    }
    return `전체 제품: ${total}개`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto p-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">공산품 탐색</h1>
          
          {/* 검색바 */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="제품명, 브랜드로 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* 필터 */}
      <ProductFilterComponent
        currentFilter={filter}
        onFilterChange={setFilter}
      />

      {/* 결과 */}
      <div className="max-w-6xl mx-auto p-4">
        {/* 결과 요약 */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            {getResultSummary()}
          </h2>
        </div>

        {/* 제품 그리드 */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">검색 결과가 없습니다</div>
            <div className="text-gray-500">
              다른 검색어나 필터 조건을 시도해보세요
            </div>
          </div>
        )}
      </div>
    </div>
  );
}