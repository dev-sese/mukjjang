import { Product, ProductCategory, ProductWithReviews, ProductFilter, PersonalityGroup, ProductTasteProfile } from '@/types/product';
import { SAMPLE_PRODUCTS, PERSONALITY_PRODUCT_MAPPING } from '@/data/products';
import { SAMPLE_REVIEWS, getReviewsByProductId, calculateAverageRating } from '@/data/reviews';

export class ProductService {
  // 모든 제품 조회
  static getAllProducts(): Product[] {
    return SAMPLE_PRODUCTS;
  }

  // 제품 ID로 조회
  static getProductById(id: string): Product | null {
    return SAMPLE_PRODUCTS.find(product => product.id === id) || null;
  }

  // 리뷰 포함 제품 조회
  static getProductWithReviews(id: string): ProductWithReviews | null {
    const product = this.getProductById(id);
    if (!product) return null;

    const reviews = getReviewsByProductId(id);
    const averageRating = calculateAverageRating(id);

    return {
      ...product,
      reviews,
      averageRating,
      reviewCount: reviews.length
    };
  }

  // 필터링된 제품 조회
  static getFilteredProducts(filter: ProductFilter): Product[] {
    let filteredProducts = SAMPLE_PRODUCTS;

    // 카테고리 필터
    if (filter.category) {
      filteredProducts = filteredProducts.filter(
        product => product.category === filter.category
      );
    }

    // 최소 평점 필터
    if (filter.minRating) {
      filteredProducts = filteredProducts.filter(product => {
        const avgRating = calculateAverageRating(product.id);
        return avgRating >= filter.minRating!;
      });
    }

    // 맛 태그 필터
    if (filter.tasteTags && filter.tasteTags.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        const productReviews = getReviewsByProductId(product.id);
        const productTags = productReviews.flatMap(review => review.tasteTags);
        return filter.tasteTags!.some(tag => 
          productTags.some(productTag => 
            productTag.toLowerCase().includes(tag.toLowerCase())
          )
        );
      });
    }

    // 성향 그룹 필터
    if (filter.personalityGroups && filter.personalityGroups.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        return filter.personalityGroups!.some(group => 
          PERSONALITY_PRODUCT_MAPPING[group]?.includes(product.id)
        );
      });
    }

    return filteredProducts;
  }

  // 카테고리별 제품 조회
  static getProductsByCategory(category: ProductCategory): Product[] {
    return SAMPLE_PRODUCTS.filter(product => product.category === category);
  }

  // 성향 그룹 기반 추천 제품
  static getRecommendedProducts(personalityGroup: PersonalityGroup): Product[] {
    const recommendedIds = PERSONALITY_PRODUCT_MAPPING[personalityGroup] || [];
    return SAMPLE_PRODUCTS.filter(product => recommendedIds.includes(product.id));
  }

  // 인기 제품 (평점순)
  static getPopularProducts(limit: number = 5): ProductWithReviews[] {
    return SAMPLE_PRODUCTS
      .map(product => this.getProductWithReviews(product.id))
      .filter((product): product is ProductWithReviews => product !== null)
      .sort((a, b) => b.averageRating - a.averageRating)
      .slice(0, limit);
  }

  // 제품 검색 (이름, 브랜드 기반)
  static searchProducts(query: string): Product[] {
    const lowerQuery = query.toLowerCase();
    return SAMPLE_PRODUCTS.filter(product => 
      product.name.toLowerCase().includes(lowerQuery) ||
      product.brand.toLowerCase().includes(lowerQuery) ||
      product.description?.toLowerCase().includes(lowerQuery)
    );
  }

  // 비슷한 맛 프로파일의 제품 추천
  static getSimilarProducts(productId: string, limit: number = 3): Product[] {
    const targetProduct = this.getProductById(productId);
    if (!targetProduct) return [];

    const otherProducts = SAMPLE_PRODUCTS.filter(p => p.id !== productId);
    
    // 맛 프로파일 유사도 계산
    const productsWithSimilarity = otherProducts.map(product => {
      const similarity = this.calculateTasteSimilarity(
        targetProduct.tasteProfile,
        product.tasteProfile
      );
      return { product, similarity };
    });

    // 유사도 순으로 정렬하고 제한된 수만 반환
    return productsWithSimilarity
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, limit)
      .map(item => item.product);
  }

  // 맛 프로파일 유사도 계산 (0-1 범위)
  private static calculateTasteSimilarity(profile1: ProductTasteProfile, profile2: ProductTasteProfile): number {
    const factors = ['saltiness', 'sweetness', 'spiciness', 'richness', 'freshness'];
    let totalDifference = 0;

    factors.forEach(factor => {
      const diff = Math.abs((profile1 as any)[factor] - (profile2 as any)[factor]);
      totalDifference += diff;
    });

    // 최대 차이값은 5 * 4 = 20이므로, 1에서 (차이/20)을 뺀 값으로 유사도 계산
    return Math.max(0, 1 - (totalDifference / 20));
  }

  // 모든 제품 카테고리 조회
  static getAllCategories(): ProductCategory[] {
    return Object.values(ProductCategory);
  }

  // 카테고리별 제품 수 조회
  static getProductCountByCategory(): Record<ProductCategory, number> {
    const counts = {} as Record<ProductCategory, number>;
    
    Object.values(ProductCategory).forEach(category => {
      counts[category] = this.getProductsByCategory(category).length;
    });

    return counts;
  }
}