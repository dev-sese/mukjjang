import { NextRequest, NextResponse } from 'next/server';
import { TestResponse, TasteProfile, TraitCategory, PersonalityGroup } from '@/types/taste-test';

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
  // 임시 분석 로직 - 실제로는 더 정교한 알고리즘 필요
  const traitScores: Record<TraitCategory, number> = {
    [TraitCategory.SWEET]: 0,
    [TraitCategory.SALTY]: 0,
    [TraitCategory.SOUR]: 0,
    [TraitCategory.BITTER]: 0,
    [TraitCategory.UMAMI]: 0,
    [TraitCategory.SPICY]: 0,
    [TraitCategory.TEXTURE_SOFT]: 0,
    [TraitCategory.TEXTURE_CRISPY]: 0
  };

  // 샘플 데이터를 기반으로 점수 계산
  // TODO: 실제 질문 데이터와 매칭하여 정확한 점수 계산

  responses.forEach(response => {
    // 샘플 로직: 선택된 옵션에 따라 점수 부여
    if (response.selectedOptionId === '1a') {
      traitScores[TraitCategory.SWEET] += 3;
    } else if (response.selectedOptionId === '1b') {
      traitScores[TraitCategory.BITTER] += 3;
    } else if (response.selectedOptionId === '2a') {
      traitScores[TraitCategory.SPICY] += 4;
    }
    // ... 더 많은 로직 필요
  });

  // 가장 높은 점수를 기반으로 성격 그룹 결정
  const personalityGroup = determinePersonalityGroup(traitScores);

  return {
    traits: traitScores,
    personalityGroup,
    createdAt: new Date()
  };
}

function determinePersonalityGroup(traits: Record<TraitCategory, number>): PersonalityGroup {
  const maxTrait = Object.entries(traits).reduce((max, [trait, score]) => 
    score > max.score ? { trait: trait as TraitCategory, score } : max
  , { trait: TraitCategory.SWEET, score: 0 });

  // 간단한 매핑 로직 - 실제로는 더 복잡한 분석 필요
  switch (maxTrait.trait) {
    case TraitCategory.SWEET:
      return PersonalityGroup.SWEET_LOVER;
    case TraitCategory.SPICY:
      return PersonalityGroup.SPICY_ADVENTURER;
    case TraitCategory.UMAMI:
      return PersonalityGroup.UMAMI_SEEKER;
    case TraitCategory.BITTER:
      return PersonalityGroup.BOLD_TASTER;
    default:
      return PersonalityGroup.BALANCED_EATER;
  }
}