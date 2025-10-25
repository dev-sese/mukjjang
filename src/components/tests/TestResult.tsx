'use client';

import { TasteProfile, PersonalityGroup } from '@/types/taste-test';

interface TestResultProps {
  profile: TasteProfile;
  onRetakeTest: () => void;
  onShareResult: () => void;
}

const personalityGroupInfo = {
  [PersonalityGroup.SWEET_LOVER]: {
    title: '단맛 애호가 🍰',
    description: '달콤함에서 행복을 찾는 당신! 스트레스를 달달한 음식으로 해소하는 감성적인 성향이에요.',
    bgColor: 'from-pink-200 to-rose-200',
    textColor: 'text-pink-700',
    emoji: '🍰'
  },
  [PersonalityGroup.SALTY_MASTER]: {
    title: '짠맛 장인 🧂',
    description: '깊고 짭조름한 맛의 진가를 아는 당신! 감칠맛나는 음식을 즐기는 세련된 입맛의 소유자에요.',
    bgColor: 'from-amber-200 to-yellow-200',
    textColor: 'text-amber-700',
    emoji: '🧂'
  },
  [PersonalityGroup.SPICY_ADVENTURER]: {
    title: '매운맛 모험가 🌶️',
    description: '자극적이고 강렬한 맛을 좋아하는 모험가! 새로운 도전을 즐기는 당신의 성격이 음식 취향에도 반영되어 있어요.',
    bgColor: 'from-red-200 to-orange-200',
    textColor: 'text-red-700',
    emoji: '🌶️'
  },
  [PersonalityGroup.EXOTIC_EXPLORER]: {
    title: '향신료 탐험가 🌿',
    description: '이국적이고 특별한 향신료의 매력을 아는 당신! 세계 각국의 다양한 맛을 탐험하는 미식가에요.',
    bgColor: 'from-green-200 to-emerald-200',
    textColor: 'text-green-700',
    emoji: '🌿'
  },
  [PersonalityGroup.MUKJJANG_LEADER]: {
    title: '먹짱 리더 👑',
    description: '맛집을 찾고 새로운 음식을 시도하는 선구자! 친구들의 먹방 리더로서 적극적인 성향이에요.',
    bgColor: 'from-purple-200 to-pink-200',
    textColor: 'text-purple-700',
    emoji: '👑'
  },
  [PersonalityGroup.SOFT_HEALER]: {
    title: '부드러운 힐링러 🌸',
    description: '달콤하고 부드러운 맛을 선호하는 힐러! 자극적인 맛보다는 은은한 맛에서 위로를 찾는 감성적인 성향이에요.',
    bgColor: 'from-pink-100 to-purple-100',
    textColor: 'text-pink-600',
    emoji: '🌸'
  },
  [PersonalityGroup.INTENSE_TASTER]: {
    title: '강렬한 미각러 🔥',
    description: '짜고 매운 강한 맛을 즐기는 당신! 강렬한 자극을 추구하는 대담한 미각의 소유자에요.',
    bgColor: 'from-red-300 to-yellow-300',
    textColor: 'text-red-800',
    emoji: '🔥'
  },
  [PersonalityGroup.WORLD_FOODIE]: {
    title: '세계 미식가 🌍',
    description: '세계 각국의 음식을 탐험하는 글로벌 미식가! 이국적인 향신료와 새로운 음식을 적극적으로 즐기는 성향이에요.',
    bgColor: 'from-blue-200 to-green-200',
    textColor: 'text-blue-700',
    emoji: '🌍'
  }
};

const TestResult = ({ profile, onRetakeTest, onShareResult }: TestResultProps) => {
  const traitLabels: Record<string, string> = {
    sweet: '단맛',
    salty: '짠맛',
    spicy: '매운맛',
    exotic: '향신료',
    power: '먹짱력'
  };

  // 메인 성향과 서브 성향 분리
  const mainPersonality = profile.personalities[0];
  const subPersonality = profile.personalities.length > 1 ? profile.personalities[1] : null;

  const mainGroupInfo = personalityGroupInfo[mainPersonality];
  const subGroupInfo = subPersonality ? personalityGroupInfo[subPersonality] : null;
  const mukjjangInfo = profile.isMukjjangLeader ? personalityGroupInfo[PersonalityGroup.MUKJJANG_LEADER] : null;

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Main Result Card */}
      <div className={`bg-gradient-to-br ${mainGroupInfo.bgColor} rounded-2xl p-8 mb-6`}>
        <div className="text-center">
          <div className="text-sm font-semibold text-gray-600 mb-2">메인 성향</div>
          <div className="text-6xl mb-4">{mainGroupInfo.emoji}</div>
          <h1 className={`text-3xl font-bold ${mainGroupInfo.textColor} mb-4`}>
            {mainGroupInfo.title}
          </h1>
          <p className={`text-lg ${mainGroupInfo.textColor} leading-relaxed`}>
            {mainGroupInfo.description}
          </p>
        </div>
      </div>

      {/* Sub Result Card (if exists) */}
      {subGroupInfo && (
        <div className={`bg-gradient-to-br ${subGroupInfo.bgColor} rounded-2xl p-6 mb-6`}>
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-600 mb-2">서브 성향</div>
            <div className="text-4xl mb-2">{subGroupInfo.emoji}</div>
            <h2 className={`text-xl font-bold ${subGroupInfo.textColor} mb-2`}>
              {subGroupInfo.title}
            </h2>
            <p className={`text-sm ${subGroupInfo.textColor}`}>
              {subGroupInfo.description}
            </p>
          </div>
        </div>
      )}

      {/* Mukjjang Leader Card (if qualified) */}
      {mukjjangInfo && (
        <div className={`bg-gradient-to-br ${mukjjangInfo.bgColor} rounded-2xl p-6 mb-8`}>
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-600 mb-2">특별 성향</div>
            <div className="text-4xl mb-2">{mukjjangInfo.emoji}</div>
            <h2 className={`text-xl font-bold ${mukjjangInfo.textColor} mb-2`}>
              {mukjjangInfo.title}
            </h2>
            <p className={`text-sm ${mukjjangInfo.textColor}`}>
              {mukjjangInfo.description}
            </p>
          </div>
        </div>
      )}

      {/* Taste Traits Chart */}
      <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border">
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
          나의 미각 성향 분석
        </h2>
        <div className="space-y-4">
          {Object.entries(profile.normalizedTraits).map(([trait, score]) => (
            <div key={trait} className="flex items-center">
              <div className="w-20 text-sm text-gray-600">
                {traitLabels[trait] || trait}
              </div>
              <div className="flex-1 mx-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-400 to-pink-500 h-2 rounded-full"
                    style={{ width: `${score * 100}%` }}
                  />
                </div>
              </div>
              <div className="text-sm text-gray-600 w-12 text-right">
                {(score * 100).toFixed(0)}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations Preview */}
      <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          🎯 추천 음식 (곧 추가 예정!)
        </h2>
        <p className="text-gray-600">
          당신의 미각 성향에 맞는 맞춤 추천을 준비 중이에요!
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <button
          onClick={onShareResult}
          className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-4 rounded-xl font-bold text-lg hover:from-orange-500 hover:to-pink-600 transition-all duration-300"
        >
          결과 공유하기 📤
        </button>

        <button
          onClick={onRetakeTest}
          className="w-full bg-gray-100 text-gray-700 py-4 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300"
        >
          다시 테스트하기 🔄
        </button>
      </div>
    </div>
  );
};

export default TestResult;
