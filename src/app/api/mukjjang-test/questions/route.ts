import { NextResponse } from 'next/server';
import { MukjjangQuestion } from '@/types/mukjjang-test';

const sampleQuestions: MukjjangQuestion[] = [
  {
    id: '1',
    question: '이 라면의 이름은?',
    options: ['신라면', '너구리', '진라면', '안성탕면'],
    correctAnswer: 0,
    timeLimit: 7,
    imageUrl: '/images/questions/shin-ramyun.jpg'
  },
  {
    id: '2', 
    question: '다음 중 롯데에서 만든 과자는?',
    options: ['새우깡', '포카칩', '초코파이', '빼빼로'],
    correctAnswer: 3,
    timeLimit: 7
  },
  {
    id: '3',
    question: '이 음료의 정확한 이름은?',
    options: ['환타 오렌지', '미닛메이드 오렌지', '오렌지나무', '썬키스트'],
    correctAnswer: 1,
    timeLimit: 7,
    imageUrl: '/images/questions/orange-drink.jpg'
  }
];

export async function GET() {
  try {
    // 실제로는 랜덤하게 문제를 선택하거나 난이도별로 제공
    const shuffledQuestions = sampleQuestions.sort(() => Math.random() - 0.5);
    
    return NextResponse.json({
      success: true,
      data: shuffledQuestions.slice(0, 10) // 10문제 제공
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch questions' },
      { status: 500 }
    );
  }
}