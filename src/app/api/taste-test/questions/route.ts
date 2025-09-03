import { NextResponse } from 'next/server';
import { TasteTestQuestion, TraitCategory } from '@/types/taste-test';

const sampleQuestions: TasteTestQuestion[] = [
  {
    id: '1',
    scenario: '친구와 카페에 갔는데, 어떤 음료를 주문하시겠어요?',
    options: [
      {
        id: '1a',
        text: '달콤한 카라멜 마키아토',
        traits: [
          { category: TraitCategory.SWEET, weight: 3 }
        ]
      },
      {
        id: '1b', 
        text: '진한 아메리카노',
        traits: [
          { category: TraitCategory.BITTER, weight: 3 },
          { category: TraitCategory.SIMPLE_PALATE, weight: 2 }
        ]
      },
      {
        id: '1c',
        text: '상큼한 레몬 에이드',
        traits: [
          { category: TraitCategory.SOUR, weight: 3 }
        ]
      }
    ]
  },
  {
    id: '2', 
    scenario: '야식으로 뭔가 매운 걸 먹고 싶어요. 어떤 걸 선택하시겠어요?',
    options: [
      {
        id: '2a',
        text: '불닭볶음면 (극매운맛)',
        traits: [
          { category: TraitCategory.SPICY, weight: 4 }
        ]
      },
      {
        id: '2b',
        text: '떡볶이 (중간 매운맛)', 
        traits: [
          { category: TraitCategory.SPICY, weight: 2 },
          { category: TraitCategory.SWEET, weight: 1 }
        ]
      },
      {
        id: '2c',
        text: '매운 게 부담스러워서 치킨',
        traits: [
          { category: TraitCategory.SALTY, weight: 2 },
          { category: TraitCategory.UMAMI, weight: 1 }
        ]
      }
    ]
  }
];

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: sampleQuestions
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch questions' },
      { status: 500 }
    );
  }
}