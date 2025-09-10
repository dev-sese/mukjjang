import { Review, PersonalityGroup } from '@/types/product';

export const SAMPLE_REVIEWS: Review[] = [
  // 신라면 리뷰
  {
    id: 'review-1',
    userId: 'user-1',
    productId: 'shin-ramyun',
    rating: 5,
    content: '역시 신라면! 매운맛이 정말 일품이에요. 국물도 진하고 면발도 쫄깃해서 최고입니다.',
    tasteTags: ['매운맛', '진한맛', '쫄깃한'],
    recommendedFor: [PersonalityGroup.SPICY_ADVENTURER, PersonalityGroup.BOLD_TASTER],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'review-2',
    userId: 'user-2',
    productId: 'shin-ramyun',
    rating: 4,
    content: '매운맛을 좋아하는 사람에게는 완벽! 다만 너무 짜서 국물을 다 마시기는 힘들어요.',
    tasteTags: ['매운맛', '짠맛'],
    recommendedFor: [PersonalityGroup.SPICY_ADVENTURER],
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },

  // 허니버터칩 리뷰
  {
    id: 'review-3',
    userId: 'user-3',
    productId: 'honey-butter-chip',
    rating: 5,
    content: '달콤한 맛이 중독적이에요! 한 번 먹기 시작하면 멈출 수가 없어요.',
    tasteTags: ['달콤한', '중독적인', '바삭한'],
    recommendedFor: [PersonalityGroup.SWEET_LOVER, PersonalityGroup.TEXTURE_EXPLORER],
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12')
  },
  {
    id: 'review-4',
    userId: 'user-4',
    productId: 'honey-butter-chip',
    rating: 3,
    content: '맛은 좋은데 너무 달아서 많이 먹으면 물려요. 가끔씩 먹기엔 좋아요.',
    tasteTags: ['달콤한', '기름진'],
    recommendedFor: [PersonalityGroup.SWEET_LOVER],
    createdAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-18')
  },

  // 밀키스 리뷰
  {
    id: 'review-5',
    userId: 'user-5',
    productId: 'milkis',
    rating: 4,
    content: '우유와 탄산의 조합이 신기해요. 부드럽면서도 상큼한 맛이 매력적입니다.',
    tasteTags: ['부드러운', '상큼한', '독특한'],
    recommendedFor: [PersonalityGroup.BALANCED_EATER, PersonalityGroup.SWEET_LOVER],
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25')
  },

  // 진라면 리뷰
  {
    id: 'review-6',
    userId: 'user-6',
    productId: 'jin-ramyun',
    rating: 4,
    content: '신라면보다는 덜 매콤하고 깔끔한 맛이에요. 국물이 시원해서 좋아요.',
    tasteTags: ['깔끔한', '시원한', '적당한매운맛'],
    recommendedFor: [PersonalityGroup.BALANCED_EATER, PersonalityGroup.SPICY_ADVENTURER],
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01')
  },

  // 꼬북칩 리뷰
  {
    id: 'review-7',
    userId: 'user-7',
    productId: 'turtle-chip',
    rating: 5,
    content: '4겹 바삭함이 정말 대단해요! 초콜릿 맛도 진하고 식감이 최고입니다.',
    tasteTags: ['바삭한', '진한맛', '독특한식감'],
    recommendedFor: [PersonalityGroup.TEXTURE_EXPLORER, PersonalityGroup.SWEET_LOVER],
    createdAt: new Date('2024-02-03'),
    updatedAt: new Date('2024-02-03')
  },

  // 초코파이 리뷰
  {
    id: 'review-8',
    userId: 'user-8',
    productId: 'choco-pie',
    rating: 5,
    content: '어릴 때부터 먹던 추억의 맛이에요. 부드러운 마시멜로와 초콜릿이 완벽해요.',
    tasteTags: ['부드러운', '달콤한', '추억의맛'],
    recommendedFor: [PersonalityGroup.COMFORT_FOODIE, PersonalityGroup.SWEET_LOVER],
    createdAt: new Date('2024-02-05'),
    updatedAt: new Date('2024-02-05')
  },

  // 바나나맛우유 리뷰
  {
    id: 'review-9',
    userId: 'user-9',
    productId: 'banana-milk',
    rating: 4,
    content: '국민 음료답게 달콤하고 맛있어요. 바나나향이 진해서 좋아해요.',
    tasteTags: ['달콤한', '진한향', '부드러운'],
    recommendedFor: [PersonalityGroup.SWEET_LOVER, PersonalityGroup.COMFORT_FOODIE],
    createdAt: new Date('2024-02-07'),
    updatedAt: new Date('2024-02-07')
  },

  // 뿌셔뿌셔 리뷰
  {
    id: 'review-10',
    userId: 'user-10',
    productId: 'ppushu-ppushu',
    rating: 4,
    content: '라면 과자의 원조! 바삭바삭한 식감과 매콤한 맛이 일품이에요.',
    tasteTags: ['바삭한', '매콤한', '짭짤한'],
    recommendedFor: [PersonalityGroup.TEXTURE_EXPLORER, PersonalityGroup.SPICY_ADVENTURER],
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-10')
  }
];

// 제품별 리뷰 조회 함수
export const getReviewsByProductId = (productId: string): Review[] => {
  return SAMPLE_REVIEWS.filter(review => review.productId === productId);
};

// 평균 평점 계산 함수
export const calculateAverageRating = (productId: string): number => {
  const reviews = getReviewsByProductId(productId);
  if (reviews.length === 0) return 0;
  
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((totalRating / reviews.length) * 10) / 10; // 소수점 1자리까지
};

// 모든 태그 추출 함수
export const getAllTasteTags = (): string[] => {
  const allTags = SAMPLE_REVIEWS.flatMap(review => review.tasteTags);
  return Array.from(new Set(allTags)).sort();
};