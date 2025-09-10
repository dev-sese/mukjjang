'use client';

import { useState } from 'react';
import { ProductCategory, ProductFilter, PersonalityGroup } from '@/types/product';
import { ProductService } from '@/lib/product-service';
import { Filter, X } from 'lucide-react';

interface ProductFilterProps {
  onFilterChange: (filter: ProductFilter) => void;
  currentFilter: ProductFilter;
}

export default function ProductFilterComponent({ onFilterChange, currentFilter }: ProductFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const categories = ProductService.getAllCategories();
  const popularTags = ['매운맛', '달콤한', '바삭한', '부드러운', '진한맛', '상큼한'];
  
  const personalityGroups = [
    { key: PersonalityGroup.SWEET_LOVER, label: '달콤한 맛 애호가' },
    { key: PersonalityGroup.SPICY_ADVENTURER, label: '매운맛 모험가' },
    { key: PersonalityGroup.UMAMI_SEEKER, label: '감칠맛 탐구가' },
    { key: PersonalityGroup.TEXTURE_EXPLORER, label: '식감 탐험가' },
    { key: PersonalityGroup.BALANCED_EATER, label: '균형 잡힌 입맛' },
    { key: PersonalityGroup.COMFORT_FOODIE, label: '편안한 맛 추구' },
    { key: PersonalityGroup.BOLD_TASTER, label: '대담한 미식가' },
    { key: PersonalityGroup.SIMPLE_PALATE, label: '단순한 입맛' }
  ];

  const getCategoryLabel = (category: ProductCategory) => {
    const labels: Record<ProductCategory, string> = {
      [ProductCategory.RAMEN]: '라면',
      [ProductCategory.SNACK]: '스낵',
      [ProductCategory.BEVERAGE]: '음료',
      [ProductCategory.FROZEN]: '냉동식품',
      [ProductCategory.CANDY]: '캔디',
      [ProductCategory.COOKIE]: '쿠키',
      [ProductCategory.CHIP]: '칩'
    };
    return labels[category];
  };

  const handleCategoryChange = (category: ProductCategory | undefined) => {
    onFilterChange({
      ...currentFilter,
      category
    });
  };

  const handleMinRatingChange = (minRating: number | undefined) => {
    onFilterChange({
      ...currentFilter,
      minRating
    });
  };

  const handleTasteTagToggle = (tag: string) => {
    const currentTags = currentFilter.tasteTags || [];
    const newTags = currentTags.includes(tag)
      ? currentTags.filter(t => t !== tag)
      : [...currentTags, tag];
    
    onFilterChange({
      ...currentFilter,
      tasteTags: newTags.length > 0 ? newTags : undefined
    });
  };

  const handlePersonalityGroupToggle = (group: PersonalityGroup) => {
    const currentGroups = currentFilter.personalityGroups || [];
    const newGroups = currentGroups.includes(group)
      ? currentGroups.filter(g => g !== group)
      : [...currentGroups, group];
    
    onFilterChange({
      ...currentFilter,
      personalityGroups: newGroups.length > 0 ? newGroups : undefined
    });
  };

  const clearAllFilters = () => {
    onFilterChange({});
  };

  const hasActiveFilters = !!(
    currentFilter.category ||
    currentFilter.minRating ||
    (currentFilter.tasteTags && currentFilter.tasteTags.length > 0) ||
    (currentFilter.personalityGroups && currentFilter.personalityGroups.length > 0)
  );

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <Filter className="w-4 h-4" />
          <span>필터</span>
          {hasActiveFilters && (
            <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1">
              필터 적용중
            </span>
          )}
        </button>

        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            초기화
          </button>
        )}
      </div>

      {isOpen && (
        <div className="space-y-6">
          {/* 카테고리 필터 */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">카테고리</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryChange(undefined)}
                className={`px-3 py-1 rounded-full text-sm border ${
                  !currentFilter.category
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                전체
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 py-1 rounded-full text-sm border ${
                    currentFilter.category === category
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {getCategoryLabel(category)}
                </button>
              ))}
            </div>
          </div>

          {/* 평점 필터 */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">최소 평점</h4>
            <div className="flex gap-2">
              {[undefined, 3, 4, 5].map(rating => (
                <button
                  key={rating || 'all'}
                  onClick={() => handleMinRatingChange(rating)}
                  className={`px-3 py-1 rounded-full text-sm border ${
                    currentFilter.minRating === rating
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {rating ? `${rating}점 이상` : '전체'}
                </button>
              ))}
            </div>
          </div>

          {/* 맛 태그 필터 */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">맛 특성</h4>
            <div className="flex flex-wrap gap-2">
              {popularTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTasteTagToggle(tag)}
                  className={`px-3 py-1 rounded-full text-sm border ${
                    currentFilter.tasteTags?.includes(tag)
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* 성향 그룹 필터 */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">추천 성향</h4>
            <div className="grid grid-cols-2 gap-2">
              {personalityGroups.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => handlePersonalityGroupToggle(key)}
                  className={`px-3 py-2 rounded-lg text-sm border text-left ${
                    currentFilter.personalityGroups?.includes(key)
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}