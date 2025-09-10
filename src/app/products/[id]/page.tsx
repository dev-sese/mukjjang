'use client';

import { useState, useMemo, use } from 'react';
import { useRouter } from 'next/navigation';
import { Star, ArrowLeft, Plus } from 'lucide-react';
import { ProductService } from '@/lib/product-service';
import { PersonalityGroup } from '@/types/product';
import ReviewForm from '@/components/product/ReviewForm';

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const router = useRouter();
  const [showReviewForm, setShowReviewForm] = useState(false);
  
  const resolvedParams = use(params);
  const productWithReviews = ProductService.getProductWithReviews(resolvedParams.id);
  const similarProducts = ProductService.getSimilarProducts(resolvedParams.id, 3);

  const handleReviewSubmit = async (reviewData: {
    rating: number;
    content: string;
    tasteTags: string[];
    recommendedFor: PersonalityGroup[];
  }) => {
    // TODO: 실제로는 API를 통해 서버에 저장
    console.log('리뷰 데이터:', reviewData);
    alert('리뷰가 작성되었습니다! (실제 구현에서는 서버에 저장됩니다)');
    // 페이지를 새로고침하여 업데이트된 데이터를 보여줌
    window.location.reload();
  };

  if (!productWithReviews) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">제품을 찾을 수 없습니다</h2>
          <button
            onClick={() => router.push('/products')}
            className="text-blue-600 hover:text-blue-800"
          >
            제품 목록으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  const { product, reviews, averageRating, reviewCount } = productWithReviews;

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      'ramen': '라면',
      'snack': '스낵',
      'beverage': '음료',
      'frozen': '냉동식품',
      'candy': '캔디',
      'cookie': '쿠키',
      'chip': '칩'
    };
    return labels[category] || category;
  };

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

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const getTasteProfileChart = () => {
    const { tasteProfile } = product;
    const factors = [
      { name: '짠맛', value: tasteProfile.saltiness, color: 'bg-red-500' },
      { name: '단맛', value: tasteProfile.sweetness, color: 'bg-pink-500' },
      { name: '매운맛', value: tasteProfile.spiciness, color: 'bg-orange-500' },
      { name: '진한맛', value: tasteProfile.richness, color: 'bg-purple-500' },
      { name: '상큼함', value: tasteProfile.freshness, color: 'bg-green-500' }
    ];

    return (
      <div className="space-y-3">
        {factors.map((factor) => (
          <div key={factor.name} className="flex items-center gap-3">
            <span className="w-12 text-sm text-gray-600">{factor.name}</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className={`${factor.color} h-2 rounded-full transition-all`}
                style={{ width: `${(factor.value / 5) * 100}%` }}
              />
            </div>
            <span className="w-8 text-sm text-gray-500">{factor.value}/5</span>
          </div>
        ))}
      </div>
    );
  };

  // 모든 리뷰의 태그를 모아서 빈도수 계산
  const tasteTagFrequency = useMemo(() => {
    const tagCount: Record<string, number> = {};
    reviews.forEach(review => {
      review.tasteTags.forEach(tag => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    });
    
    return Object.entries(tagCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10); // 상위 10개만
  }, [reviews]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto p-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            뒤로가기
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* 제품 기본 정보 */}
        <div className="bg-white rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* 제품 이미지 */}
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              {product.imageUrl ? (
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="text-gray-400">이미지 준비중</div>
              )}
            </div>

            {/* 제품 정보 */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                    {getCategoryLabel(product.category)}
                  </span>
                </div>
                <p className="text-gray-600">{product.brand}</p>
              </div>

              {/* 평점 */}
              <div className="flex items-center gap-4">
                {renderStars(Math.round(averageRating))}
                <span className="text-xl font-semibold">
                  {averageRating > 0 ? averageRating.toFixed(1) : '0.0'}
                </span>
                <span className="text-gray-500">({reviewCount}개 리뷰)</span>
              </div>

              {/* 제품 설명 */}
              {product.description && (
                <p className="text-gray-700">{product.description}</p>
              )}

              {/* 리뷰 작성 버튼 */}
              <button
                onClick={() => setShowReviewForm(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-5 h-5" />
                리뷰 작성하기
              </button>
            </div>
          </div>
        </div>

        {/* 맛 프로파일 */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">맛 프로파일</h2>
          {getTasteProfileChart()}
          <div className="mt-4 text-sm text-gray-500">
            식감: {product.tasteProfile.texture === 'crispy' ? '바삭한' : 
                   product.tasteProfile.texture === 'soft' ? '부드러운' :
                   product.tasteProfile.texture === 'chewy' ? '쫄깃한' :
                   product.tasteProfile.texture === 'smooth' ? '부드러운' :
                   product.tasteProfile.texture === 'crunchy' ? '바삭한' : '부드러운'}
          </div>
        </div>

        {/* 주요 맛 태그 */}
        {tasteTagFrequency.length > 0 && (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">주요 맛 특성</h2>
            <div className="flex flex-wrap gap-2">
              {tasteTagFrequency.map(([tag, count]) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag} ({count})
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 리뷰 목록 */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">리뷰 ({reviewCount})</h2>
          </div>

          {reviews.length > 0 ? (
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {renderStars(review.rating)}
                      <span className="text-sm text-gray-500">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-2">{review.content}</p>
                  
                  {/* 맛 태그 */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {review.tasteTags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 추천 성향 */}
                  {review.recommendedFor.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      <span className="text-xs text-gray-500">추천:</span>
                      {review.recommendedFor.map((group, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs"
                        >
                          {getPersonalityGroupLabel(group)}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              아직 리뷰가 없습니다. 첫 번째 리뷰를 작성해보세요!
            </div>
          )}
        </div>

        {/* 비슷한 제품 */}
        {similarProducts.length > 0 && (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">비슷한 맛의 제품</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {similarProducts.map((similarProduct) => (
                <div
                  key={similarProduct.id}
                  onClick={() => router.push(`/products/${similarProduct.id}`)}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md cursor-pointer transition-shadow"
                >
                  <h3 className="font-semibold text-sm mb-1">{similarProduct.name}</h3>
                  <p className="text-gray-600 text-xs mb-2">{similarProduct.brand}</p>
                  <p className="text-gray-500 text-xs line-clamp-2">
                    {similarProduct.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 리뷰 작성 폼 모달 */}
      {showReviewForm && (
        <ReviewForm
          productId={resolvedParams.id}
          productName={product.name}
          onClose={() => setShowReviewForm(false)}
          onSubmit={handleReviewSubmit}
        />
      )}
    </div>
  );
}