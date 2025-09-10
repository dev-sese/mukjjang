'use client';

import { useState } from 'react';
import { Star, X } from 'lucide-react';
import { PersonalityGroup } from '@/types/product';

interface ReviewFormProps {
  productId: string;
  productName: string;
  onClose: () => void;
  onSubmit: (reviewData: {
    rating: number;
    content: string;
    tasteTags: string[];
    recommendedFor: PersonalityGroup[];
  }) => void;
}

export default function ReviewForm({ productId, productName, onClose, onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<PersonalityGroup[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const popularTags = [
    '달콤한', '매운맛', '짭짤한', '바삭한', '부드러운', '쫄깃한',
    '진한맛', '상큼한', '고소한', '중독적인', '깔끔한', '시원한'
  ];

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

  const handleRatingClick = (clickedRating: number) => {
    setRating(clickedRating);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleGroupToggle = (group: PersonalityGroup) => {
    setSelectedGroups(prev =>
      prev.includes(group)
        ? prev.filter(g => g !== group)
        : [...prev, group]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!rating || !content.trim()) {
      alert('평점과 리뷰 내용을 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSubmit({
        rating,
        content: content.trim(),
        tasteTags: selectedTags,
        recommendedFor: selectedGroups
      });
      
      // 폼 초기화
      setRating(0);
      setContent('');
      setSelectedTags([]);
      setSelectedGroups([]);
      onClose();
    } catch (error) {
      alert('리뷰 작성에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = () => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-8 h-8 cursor-pointer transition-colors ${
              star <= (hoveredRating || rating)
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300 hover:text-yellow-200'
            }`}
            onClick={() => handleRatingClick(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* 헤더 */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">리뷰 작성</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* 제품 정보 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900">{productName}</h3>
          </div>

          {/* 평점 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              평점 <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              {renderStars()}
              <span className="text-gray-600 ml-2">
                {rating > 0 ? `${rating}점` : '평점을 선택하세요'}
              </span>
            </div>
          </div>

          {/* 리뷰 내용 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              리뷰 내용 <span className="text-red-500">*</span>
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="이 제품에 대한 솔직한 후기를 작성해주세요."
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              maxLength={500}
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {content.length}/500
            </div>
          </div>

          {/* 맛 태그 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              맛 특성 (선택사항)
            </label>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            {selectedTags.length > 0 && (
              <div className="text-sm text-gray-600 mt-2">
                선택된 태그: {selectedTags.join(', ')}
              </div>
            )}
          </div>

          {/* 추천 성향 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              어떤 입맛의 사람들에게 추천하시나요? (선택사항)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {personalityGroups.map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleGroupToggle(key)}
                  className={`px-3 py-2 rounded-lg text-sm border text-left transition-colors ${
                    selectedGroups.includes(key)
                      ? 'bg-green-500 text-white border-green-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* 버튼 */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={!rating || !content.trim() || isSubmitting}
              className={`px-4 py-2 rounded-lg font-medium ${
                !rating || !content.trim() || isSubmitting
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? '작성 중...' : '리뷰 작성'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}