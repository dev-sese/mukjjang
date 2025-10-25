import { NextRequest, NextResponse } from 'next/server';
import { TestResponse, TasteProfile, TraitCategory, PersonalityGroup } from '@/types/taste-test';
import { TASTE_TEST_QUESTIONS } from '@/data/taste-test-questions';

export async function POST(request: NextRequest) {
  try {
    const { responses }: { responses: TestResponse[] } = await request.json();

    if (!responses || responses.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No responses provided' },
        { status: 400 }
      );
    }

    // 응답을 분석하여 미각 프로필 생성
    const profile = analyzeResponses(responses);

    // TODO: 데이터베이스에 저장

    return NextResponse.json({
      success: true,
      data: {
        profile,
        recommendations: [] // TODO: 추천 시스템 구현 후 추가
      }
    });
  } catch (error) {
    console.error('Error processing taste test:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process test results' },
      { status: 500 }
    );
  }
}

function analyzeResponses(responses: TestResponse[]): TasteProfile {
  // 1. 각 항목별 총점 계산
  const traitScores: Record<TraitCategory, number> = {
    [TraitCategory.SWEET]: 0,
    [TraitCategory.SALTY]: 0,
    [TraitCategory.SPICY]: 0,
    [TraitCategory.EXOTIC]: 0,
    [TraitCategory.POWER]: 0,
  };

  // 응답을 기반으로 점수 계산
  responses.forEach(response => {
    const question = TASTE_TEST_QUESTIONS.find(q => q.id === response.questionId);
    if (question) {
      const selectedOption = question.options.find(opt => opt.id === response.selectedOptionId);
      if (selectedOption) {
        selectedOption.traits.forEach(trait => {
          traitScores[trait.category] += trait.weight;
        });
      }
    }
  });

  // 2. 정규화 (0~1 사이)
  // 각 trait별 최대 점수 정의
  const maxScores: Record<TraitCategory, number> = {
    [TraitCategory.SWEET]: 4,
    [TraitCategory.SALTY]: 6,
    [TraitCategory.SPICY]: 6,
    [TraitCategory.EXOTIC]: 5,
    [TraitCategory.POWER]: 6,
  };

  const normalizedTraits: Record<TraitCategory, number> = {
    [TraitCategory.SWEET]: traitScores[TraitCategory.SWEET] / maxScores[TraitCategory.SWEET],
    [TraitCategory.SALTY]: traitScores[TraitCategory.SALTY] / maxScores[TraitCategory.SALTY],
    [TraitCategory.SPICY]: traitScores[TraitCategory.SPICY] / maxScores[TraitCategory.SPICY],
    [TraitCategory.EXOTIC]: traitScores[TraitCategory.EXOTIC] / maxScores[TraitCategory.EXOTIC],
    [TraitCategory.POWER]: traitScores[TraitCategory.POWER] / maxScores[TraitCategory.POWER],
  };

  // 3. 최종 성향 산출 (먹짱력 제외)
  const personalities = determinePersonalities(normalizedTraits);

  // 4. 먹짱 리더 체크 (먹짱력 raw score 5 이상)
  const isMukjjangLeader = traitScores[TraitCategory.POWER] >= 5;

  return {
    traits: traitScores,
    normalizedTraits,
    personalities,
    isMukjjangLeader,
    createdAt: new Date()
  };
}

function determinePersonalities(normalizedTraits: Record<TraitCategory, number>): PersonalityGroup[] {
  // 먹짱력을 제외한 나머지 4가지 trait만 사용
  const tasteTraits = Object.entries(normalizedTraits)
    .filter(([category]) => category !== TraitCategory.POWER)
    .map(([category, score]) => ({ category: category as TraitCategory, score }))
    .sort((a, b) => b.score - a.score);

  const personalities: PersonalityGroup[] = [];
  const topTrait = tasteTraits[0];
  const secondTrait = tasteTraits[1];

  // 복합 성향 체크 (메인+서브가 모두 높은 경우)
  if (secondTrait.score >= 0.7) {
    // 특정 복합 성향
    if (topTrait.category === TraitCategory.SWEET &&
        normalizedTraits[TraitCategory.SALTY] < 0.5 &&
        normalizedTraits[TraitCategory.SPICY] < 0.5) {
      personalities.push(PersonalityGroup.SOFT_HEALER);
    } else if (topTrait.category === TraitCategory.SALTY &&
               secondTrait.category === TraitCategory.SPICY) {
      personalities.push(PersonalityGroup.INTENSE_TASTER);
    } else if (topTrait.category === TraitCategory.EXOTIC &&
               secondTrait.score >= 0.7) {
      personalities.push(PersonalityGroup.WORLD_FOODIE);
    } else {
      // 단일 성향이지만 서브도 추가 (최대 2개)
      personalities.push(getTasteCategoryPersonality(topTrait.category));
      personalities.push(getTasteCategoryPersonality(secondTrait.category));
    }
  } else {
    // 단일 성향만 (1개)
    personalities.push(getTasteCategoryPersonality(topTrait.category));
  }

  return personalities;
}

function getTasteCategoryPersonality(category: TraitCategory): PersonalityGroup {
  switch (category) {
    case TraitCategory.SWEET:
      return PersonalityGroup.SWEET_LOVER;
    case TraitCategory.SALTY:
      return PersonalityGroup.SALTY_MASTER;
    case TraitCategory.SPICY:
      return PersonalityGroup.SPICY_ADVENTURER;
    case TraitCategory.EXOTIC:
      return PersonalityGroup.EXOTIC_EXPLORER;
    default:
      return PersonalityGroup.SWEET_LOVER;
  }
}