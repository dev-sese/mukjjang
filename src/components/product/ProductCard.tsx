'use client';

import { Product } from '@/types/product';
import { calculateAverageRating, getReviewsByProductId } from '@/data/reviews';
import { Star, StarIcon } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const averageRating = calculateAverageRating(product.id);
  const reviewCount = getReviewsByProductId(product.id).length;

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

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const getTasteProfileBadges = () => {
    const { tasteProfile } = product;
    const badges = [];

    if (tasteProfile.spiciness >= 4) badges.push('매운맛');
    if (tasteProfile.sweetness >= 4) badges.push('단맛');
    if (tasteProfile.saltiness >= 4) badges.push('짠맛');
    if (tasteProfile.richness >= 4) badges.push('진한맛');
    if (tasteProfile.freshness >= 4) badges.push('상큼한');

    return badges.slice(0, 2); // 최대 2개만 표시
  };

  return (
    <div 
      className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      {/* 제품 이미지 */}
      <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
        {product.imageUrl ? (
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="text-gray-400 text-sm">이미지 준비중</div>
        )}
      </div>

      {/* 제품 정보 */}
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">{product.name}</h3>
            <p className="text-gray-600 text-xs">{product.brand}</p>
          </div>
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
            {getCategoryLabel(product.category)}
          </span>
        </div>

        {/* 맛 프로파일 뱃지 */}
        <div className="flex gap-1 flex-wrap">
          {getTasteProfileBadges().map((badge, index) => (
            <span 
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* 평점 및 리뷰 수 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {renderStars(Math.round(averageRating))}
            <span className="text-sm text-gray-600">
              {averageRating > 0 ? averageRating.toFixed(1) : '0.0'}
            </span>
          </div>
          <span className="text-xs text-gray-500">
            리뷰 {reviewCount}개
          </span>
        </div>

        {/* 제품 설명 */}
        {product.description && (
          <p className="text-gray-600 text-xs line-clamp-2">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
}