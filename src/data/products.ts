import { Product, ProductCategory, TextureType, PersonalityGroup } from '@/types/product';

export const SAMPLE_PRODUCTS: Product[] = [
  // 라면
  {
    id: 'shin-ramyun',
    name: '신라면',
    brand: '농심',
    category: ProductCategory.RAMEN,
    imageUrl: '/images/products/shin-ramyun.jpg',
    description: '매콤한 국물이 일품인 대한민국 대표 라면',
    tasteProfile: {
      id: 'shin-ramyun-profile',
      productId: 'shin-ramyun',
      saltiness: 4,
      sweetness: 1,
      spiciness: 4,
      texture: TextureType.CHEWY,
      richness: 4,
      freshness: 1
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'jin-ramyun',
    name: '진라면 매운맛',
    brand: '오뚜기',
    category: ProductCategory.RAMEN,
    description: '깔끔하고 시원한 매운맛이 특징',
    tasteProfile: {
      id: 'jin-ramyun-profile',
      productId: 'jin-ramyun',
      saltiness: 3,
      sweetness: 1,
      spiciness: 4,
      texture: TextureType.CHEWY,
      richness: 3,
      freshness: 2
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'ansungtangmyun',
    name: '안성탕면',
    brand: '농심',
    category: ProductCategory.RAMEN,
    description: '구수한 사골 국물맛',
    tasteProfile: {
      id: 'ansungtangmyun-profile',
      productId: 'ansungtangmyun',
      saltiness: 3,
      sweetness: 2,
      spiciness: 1,
      texture: TextureType.CHEWY,
      richness: 4,
      freshness: 1
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  
  // 과자
  {
    id: 'honey-butter-chip',
    name: '허니버터칩',
    brand: '해태제과',
    category: ProductCategory.CHIP,
    description: '달콤한 꿀과 버터의 만남',
    tasteProfile: {
      id: 'honey-butter-chip-profile',
      productId: 'honey-butter-chip',
      saltiness: 2,
      sweetness: 4,
      spiciness: 1,
      texture: TextureType.CRISPY,
      richness: 4,
      freshness: 1
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'turtle-chip',
    name: '꼬북칩 초콜릿맛',
    brand: '오리온',
    category: ProductCategory.CHIP,
    description: '4겹의 바삭함과 진한 초콜릿',
    tasteProfile: {
      id: 'turtle-chip-profile',
      productId: 'turtle-chip',
      saltiness: 1,
      sweetness: 4,
      spiciness: 1,
      texture: TextureType.CRUNCHY,
      richness: 5,
      freshness: 1
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'ppushu-ppushu',
    name: '뿌셔뿌셔',
    brand: '오뚜기',
    category: ProductCategory.SNACK,
    description: '라면을 그대로 부순 과자의 원조',
    tasteProfile: {
      id: 'ppushu-ppushu-profile',
      productId: 'ppushu-ppushu',
      saltiness: 4,
      sweetness: 1,
      spiciness: 3,
      texture: TextureType.CRUNCHY,
      richness: 3,
      freshness: 1
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },

  // 음료
  {
    id: 'milkis',
    name: '밀키스',
    brand: '롯데칠성',
    category: ProductCategory.BEVERAGE,
    description: '우유와 탄산의 부드러운 만남',
    tasteProfile: {
      id: 'milkis-profile',
      productId: 'milkis',
      saltiness: 1,
      sweetness: 4,
      spiciness: 1,
      texture: TextureType.SMOOTH,
      richness: 3,
      freshness: 4
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'cider',
    name: '칠성사이다',
    brand: '롯데칠성',
    category: ProductCategory.BEVERAGE,
    description: '시원하고 상쾌한 탄산음료',
    tasteProfile: {
      id: 'cider-profile',
      productId: 'cider',
      saltiness: 1,
      sweetness: 3,
      spiciness: 1,
      texture: TextureType.SMOOTH,
      richness: 1,
      freshness: 5
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'banana-milk',
    name: '바나나맛우유',
    brand: '빙그레',
    category: ProductCategory.BEVERAGE,
    description: '달콤한 바나나향의 국민 음료',
    tasteProfile: {
      id: 'banana-milk-profile',
      productId: 'banana-milk',
      saltiness: 1,
      sweetness: 5,
      spiciness: 1,
      texture: TextureType.SMOOTH,
      richness: 4,
      freshness: 2
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },

  // 쿠키
  {
    id: 'choco-pie',
    name: '초코파이',
    brand: '오리온',
    category: ProductCategory.COOKIE,
    description: '부드러운 마시멜로와 진한 초콜릿',
    tasteProfile: {
      id: 'choco-pie-profile',
      productId: 'choco-pie',
      saltiness: 1,
      sweetness: 5,
      spiciness: 1,
      texture: TextureType.SOFT,
      richness: 5,
      freshness: 1
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
];

// 카테고리별 제품 필터링 함수
export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return SAMPLE_PRODUCTS.filter(product => product.category === category);
};

// 성향 그룹별 추천 제품 매핑
export const PERSONALITY_PRODUCT_MAPPING: Record<PersonalityGroup, string[]> = {
  [PersonalityGroup.SWEET_LOVER]: ['honey-butter-chip', 'turtle-chip', 'milkis', 'banana-milk', 'choco-pie'],
  [PersonalityGroup.SPICY_ADVENTURER]: ['shin-ramyun', 'jin-ramyun', 'ppushu-ppushu'],
  [PersonalityGroup.UMAMI_SEEKER]: ['ansungtangmyun', 'ppushu-ppushu'],
  [PersonalityGroup.TEXTURE_EXPLORER]: ['turtle-chip', 'honey-butter-chip', 'ppushu-ppushu'],
  [PersonalityGroup.BALANCED_EATER]: ['jin-ramyun', 'milkis', 'cider'],
  [PersonalityGroup.COMFORT_FOODIE]: ['ansungtangmyun', 'choco-pie', 'banana-milk'],
  [PersonalityGroup.BOLD_TASTER]: ['shin-ramyun', 'turtle-chip'],
  [PersonalityGroup.SIMPLE_PALATE]: ['cider', 'choco-pie', 'milkis']
};