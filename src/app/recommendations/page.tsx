'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Heart, TrendingUp, Users, Sparkles } from 'lucide-react';
import { ProductService } from '@/lib/product-service';
import { PersonalityGroup } from '@/types/product';
import { TasteProfile } from '@/types/taste-test';
import ProductCard from '@/components/product/ProductCard';

export default function RecommendationsPage() {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<TasteProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // localStorage에서 사용자의 미각 테스트 결과 가져오기
    const savedProfile = localStorage.getItem('tasteTestResult');
    if (savedProfile) {
      try {
        const profile = JSON.parse(savedProfile);
        setUserProfile(profile.profile || profile);
      } catch (error) {
        console.error('프로파일 파싱 오류:', error);
      }
    }
    setLoading(false);
  }, []);

  const getPersonalityGroupLabel = (group: PersonalityGroup) => {
    const labels: Record<PersonalityGroup, string> = {
      [PersonalityGroup.SWEET_LOVER]: '달콤한 맛 애호가',
      [PersonalityGroup.SPICY_ADVENTURER]: '매운맛 모험가',
      [PersonalityGroup.UMAMI_SEEKER]: '감칠맛 탐구가',
      [PersonalityGroup.TEXTURE_EXPLORER]: '식감 탐험가',
      [PersonalityGroup.BALANCED_EATER]: '균형 잡힌 입맛',
      [PersonalityGroup.COMFORT_FOODIE]: '편안한 맛 추구',
      [PersonalityGroup.BOLD_TASTER]: '대담한 미식가',
      [PersonalityGroup.SIMPLE_PALATE]: '단순한 입맛'
    };
    return labels[group] || group;
  };

  const getPersonalizedRecommendations = () => {
    if (!userProfile) return [];
    return ProductService.getRecommendedProducts(userProfile.personalityGroup);
  };

  const getPopularProducts = () => {
    return ProductService.getPopularProducts(6);
  };

  const getCategoryRecommendations = () => {
    if (!userProfile) return [];
    
    const personalityGroup = userProfile.personalityGroup;
    const allRecommended = ProductService.getRecommendedProducts(personalityGroup);
    
    // 카테고리별로 그룹화
    const byCategory: Record<string, any[]> = {};
    allRecommended.forEach(product => {
      if (!byCategory[product.category]) {
        byCategory[product.category] = [];
      }
      byCategory[product.category].push(product);
    });

    return Object.entries(byCategory).map(([category, products]) => ({
      category,
      products: products.slice(0, 3) // 카테고리당 최대 3개
    }));
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/${productId}`);
  };

  const handleTakeTest = () => {
    router.push('/taste-test');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">추천 정보를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* 헤더 */}
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-gray-900">맞춤 추천</h1>
          </div>
        </div>

        {/* 테스트 유도 */}
        <div className="max-w-4xl mx-auto p-4">
          <div className="bg-white rounded-lg p-8 text-center">
            <Sparkles className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              미각 테스트를 먼저 완료해주세요
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              당신의 입맛을 분석하여 취향에 맞는 제품을 추천해드립니다.
              간단한 테스트로 개인화된 추천을 받아보세요!
            </p>
            <button
              onClick={handleTakeTest}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
            >
              미각 테스트 시작하기
            </button>
          </div>

          {/* 인기 제품 미리보기 */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">인기 제품 미리보기</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getPopularProducts().slice(0, 3).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleProductClick(product.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const personalizedProducts = getPersonalizedRecommendations();
  const popularProducts = getPopularProducts();
  const categoryRecommendations = getCategoryRecommendations();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto p-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">맞춤 추천</h1>
          <p className="text-gray-600">
            {getPersonalityGroupLabel(userProfile.personalityGroup)} 타입에게 추천하는 제품들
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 space-y-8">
        {/* 개인화 추천 */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-red-500" />
            <h2 className="text-xl font-semibold">당신을 위한 추천</h2>
          </div>
          
          {personalizedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {personalizedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleProductClick(product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg p-6 text-center">
              <p className="text-gray-500">아직 추천할 제품이 없습니다.</p>
            </div>
          )}
        </section>

        {/* 카테고리별 추천 */}
        {categoryRecommendations.map(({ category, products }) => (
          <section key={category}>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold">
                {category === 'ramen' ? '라면' :
                 category === 'snack' ? '스낵' :
                 category === 'beverage' ? '음료' :
                 category === 'chip' ? '칩' :
                 category === 'cookie' ? '쿠키' : category} 추천
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleProductClick(product.id)}
                />
              ))}
            </div>
          </section>
        ))}

        {/* 인기 제품 */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-green-500" />
            <h2 className="text-xl font-semibold">인기 제품</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product.id)}
              />
            ))}
          </div>
        </section>

        {/* 미각 프로파일 요약 */}
        <section className="bg-white rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-6 h-6 text-purple-500" />
            <h2 className="text-xl font-semibold">내 미각 프로파일</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">성향 타입</h4>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg inline-block">
                {getPersonalityGroupLabel(userProfile.personalityGroup)}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">주요 성향</h4>
              <div className="space-y-2">
                {Object.entries(userProfile.traits)
                  .sort(([,a], [,b]) => b - a)
                  .slice(0, 3)
                  .map(([trait, score]) => (
                    <div key={trait} className="flex items-center justify-between">
                      <span className="text-sm capitalize">
                        {trait === 'sweet' ? '단맛' :
                         trait === 'salty' ? '짠맛' :
                         trait === 'spicy' ? '매운맛' :
                         trait === 'sour' ? '신맛' :
                         trait === 'umami' ? '감칠맛' :
                         trait === 'bitter' ? '쓴맛' :
                         trait === 'texture_soft' ? '부드러운 식감' :
                         trait === 'texture_crispy' ? '바삭한 식감' : trait}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-purple-500 h-2 rounded-full"
                            style={{ width: `${score * 20}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 w-8">
                          {score.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={handleTakeTest}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              테스트 다시 하기 →
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}