export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  imageUrl?: string;
  description?: string;
  tasteProfile: ProductTasteProfile;
  createdAt: Date;
  updatedAt: Date;
}

export enum ProductCategory {
  RAMEN = 'ramen',
  SNACK = 'snack',
  BEVERAGE = 'beverage',
  FROZEN = 'frozen',
  CANDY = 'candy',
  COOKIE = 'cookie',
  CHIP = 'chip'
}

export interface ProductTasteProfile {
  id: string;
  productId: string;
  saltiness: number;    // 1-5
  sweetness: number;    // 1-5
  spiciness: number;    // 1-5
  texture: TextureType;
  richness: number;     // 1-5
  freshness: number;    // 1-5
}

export enum TextureType {
  CRISPY = 'crispy',
  SOFT = 'soft',
  CHEWY = 'chewy',
  SMOOTH = 'smooth',
  CRUNCHY = 'crunchy',
  TENDER = 'tender'
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;       // 1-5
  content: string;
  tasteTags: string[];
  recommendedFor: PersonalityGroup[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductWithReviews extends Product {
  reviews: Review[];
  averageRating: number;
  reviewCount: number;
}

export interface ProductFilter {
  category?: ProductCategory;
  minRating?: number;
  tasteTags?: string[];
  personalityGroups?: PersonalityGroup[];
}

// Re-export from taste-test.ts for convenience
export { PersonalityGroup } from './taste-test';