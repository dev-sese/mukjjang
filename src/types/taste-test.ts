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
  SWEET = "sweet",
  SALTY = "salty",
  SPICY = "spicy",
  EXOTIC = "exotic",
  POWER = "power",
}

export interface TasteProfile {
  userId?: string;
  traits: Record<TraitCategory, number>;
  normalizedTraits: Record<TraitCategory, number>;
  personalities: PersonalityGroup[];
  isMukjjangLeader: boolean;
  createdAt: Date;
}

export enum PersonalityGroup {
  SWEET_LOVER = "sweet_lover",
  SALTY_MASTER = "salty_master",
  SPICY_ADVENTURER = "spicy_adventurer",
  EXOTIC_EXPLORER = "exotic_explorer",
  MUKJJANG_LEADER = "mukjjang_leader",
  SOFT_HEALER = "soft_healer",
  INTENSE_TASTER = "intense_taster",
  WORLD_FOODIE = "world_foodie",
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
