import { NextRequest, NextResponse } from 'next/server';
import { MukjjangResponse, MukjjangTestResult, MukjjangLevel, ShareCard } from '@/types/mukjjang-test';

export async function POST(request: NextRequest) {
  try {
    const { responses }: { responses: MukjjangResponse[] } = await request.json();

    if (!responses || responses.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No responses provided' },
        { status: 400 }
      );
    }

    const result = calculateMukjjangResult(responses);
    
    // TODO: 데이터베이스에 저장
    
    return NextResponse.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('Error processing mukjjang test:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process test results' },
      { status: 500 }
    );
  }
}

function calculateMukjjangResult(responses: MukjjangResponse[]): MukjjangTestResult {
  const totalQuestions = responses.length;
  
  // 정답 개수 계산 (임시 로직 - 실제로는 정답과 비교 필요)
  const correctAnswers = responses.filter((response, index) => {
    // TODO: 실제 정답과 비교
    return Math.random() > 0.5; // 임시로 50% 확률로 정답 처리
  }).length;
  
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  
  // 평균 응답 시간 계산
  const totalResponseTime = responses.reduce((total, response) => total + response.responseTime, 0);
  const avgResponseTime = totalResponseTime / responses.length;
  
  // 레벨 결정
  const level = determineMukjjangLevel(score);
  
  // 공유 카드 생성
  const shareCard = generateShareCard(level, score);
  
  return {
    score,
    totalQuestions,
    correctAnswers,
    avgResponseTime,
    level,
    shareCard
  };
}

function determineMukjjangLevel(score: number): MukjjangLevel {
  if (score >= 96) return MukjjangLevel.MUKJJANG_GOD;
  if (score >= 86) return MukjjangLevel.MASTER;
  if (score >= 71) return MukjjangLevel.EXPERT;
  if (score >= 51) return MukjjangLevel.INTERMEDIATE;
  if (score >= 31) return MukjjangLevel.AMATEUR;
  return MukjjangLevel.BEGINNER;
}

function generateShareCard(level: MukjjangLevel, score: number): ShareCard {
  const cardData = {
    [MukjjangLevel.MUKJJANG_GOD]: {
      title: '먹짱신 👑',
      description: `${score}점! 당신은 먹짱의 신입니다!`,
      backgroundColor: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      emoji: '👑'
    },
    [MukjjangLevel.MASTER]: {
      title: '먹짱마스터 🥇',
      description: `${score}점! 거의 완벽한 먹짱력!`,
      backgroundColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
      emoji: '🥇'
    },
    [MukjjangLevel.EXPERT]: {
      title: '먹짱전문가 🎯',
      description: `${score}점! 상당한 먹짱 실력자!`,
      backgroundColor: 'bg-gradient-to-br from-blue-500 to-purple-500',
      emoji: '🎯'
    },
    [MukjjangLevel.INTERMEDIATE]: {
      title: '먹짱중급자 📚',
      description: `${score}점! 꽤 괜찮은 먹짱력!`,
      backgroundColor: 'bg-gradient-to-br from-green-500 to-blue-500',
      emoji: '📚'
    },
    [MukjjangLevel.AMATEUR]: {
      title: '먹짱아마추어 🌱',
      description: `${score}점! 앞으로 더 성장 가능성 무한!`,
      backgroundColor: 'bg-gradient-to-br from-yellow-400 to-green-500',
      emoji: '🌱'
    },
    [MukjjangLevel.BEGINNER]: {
      title: '먹짱초보 🐣',
      description: `${score}점! 이제 시작이에요!`,
      backgroundColor: 'bg-gradient-to-br from-pink-400 to-red-400',
      emoji: '🐣'
    }
  };

  return cardData[level];
}