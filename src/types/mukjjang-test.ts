export interface MukjjangQuestion {
  id: string;
  imageUrl?: string;
  question: string;
  options: string[];
  correctAnswer: number;
  timeLimit: number; // in seconds
}

export interface MukjjangTestResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  avgResponseTime: number;
  level: MukjjangLevel;
  shareCard: ShareCard;
}

export enum MukjjangLevel {
  BEGINNER = 'beginner',      // 0-30%
  AMATEUR = 'amateur',        // 31-50%  
  INTERMEDIATE = 'intermediate', // 51-70%
  EXPERT = 'expert',          // 71-85%
  MASTER = 'master',          // 86-95%
  MUKJJANG_GOD = 'mukjjang_god' // 96-100%
}

export interface ShareCard {
  title: string;
  description: string;
  backgroundColor: string;
  emoji: string;
}

export interface MukjjangResponse {
  questionId: string;
  selectedAnswer: number;
  responseTime: number; // in milliseconds
}