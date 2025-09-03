export interface TasteTestQuestion {
  id: string;
  scenario: string;
  options: TasteOption[];
}

export interface TasteOption {
  id: string;
  text: string;
  traits: TasteTrait[];
}

export interface TasteTrait {
  category: TraitCategory;
  weight: number;
}

export enum TraitCategory {
  SWEET = 'sweet',
  SALTY = 'salty', 
  SOUR = 'sour',
  BITTER = 'bitter',
  UMAMI = 'umami',
  SPICY = 'spicy',
  TEXTURE_SOFT = 'texture_soft',
  TEXTURE_CRISPY = 'texture_crispy'
}

export interface TasteProfile {
  userId?: string;
  traits: Record<TraitCategory, number>;
  personalityGroup: PersonalityGroup;
  createdAt: Date;
}

export enum PersonalityGroup {
  SWEET_LOVER = 'sweet_lover',
  SPICY_ADVENTURER = 'spicy_adventurer', 
  UMAMI_SEEKER = 'umami_seeker',
  TEXTURE_EXPLORER = 'texture_explorer',
  BALANCED_EATER = 'balanced_eater',
  COMFORT_FOODIE = 'comfort_foodie',
  BOLD_TASTER = 'bold_taster',
  SIMPLE_PALATE = 'simple_palate'
}

export interface TestResponse {
  questionId: string;
  selectedOptionId: string;
}

export interface TestResult {
  profile: TasteProfile;
  recommendations: ProductRecommendation[];
}

export interface ProductRecommendation {
  id: string;
  name: string;
  category: string;
  matchScore: number;
  reason: string;
}