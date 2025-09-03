'use client';

import { TasteProfile, PersonalityGroup } from '@/types/taste-test';

interface TestResultProps {
  profile: TasteProfile;
  onRetakeTest: () => void;
  onShareResult: () => void;
}

const personalityGroupInfo = {
  [PersonalityGroup.SWEET_LOVER]: {
    title: '달콤한 행복추구자 🍰',
    description: '달콤함에서 위로를 찾는 당신! 스트레스를 달달한 음식으로 해소하는 감성적인 성향이에요.',
    bgColor: 'from-pink-200 to-rose-200',
    textColor: 'text-pink-700',
    emoji: '🍰'
  },
  [PersonalityGroup.SPICY_ADVENTURER]: {
    title: '매운맛 모험가 🌶️',
    description: '자극적이고 강렬한 맛을 좋아하는 모험가! 새로운 도전을 즐기는 당신의 성격이 음식 취향에도 반영되어 있어요.',
    bgColor: 'from-red-200 to-orange-200',
    textColor: 'text-red-700',
    emoji: '🌶️'
  },
  [PersonalityGroup.UMAMI_SEEKER]: {
    title: '감칠맛 탐구자 🍄',
    description: '깊고 풍부한 맛의 진가를 아는 미식가! 복잡하고 섬세한 맛의 조화를 즐기는 세련된 입맛의 소유자에요.',
    bgColor: 'from-amber-200 to-yellow-200',
    textColor: 'text-amber-700',
    emoji: '🍄'
  },
  [PersonalityGroup.TEXTURE_EXPLORER]: {
    title: '식감 탐험가 🥨',
    description: '바�삭, 쫄깃, 부드러운... 다양한 식감을 통해 음식의 재미를 찾는 당신! 먹는 즐거움을 아는 감각적인 미식가에요.',
    bgColor: 'from-purple-200 to-pink-200',
    textColor: 'text-purple-700',
    emoji: '🥨'
  },
  [PersonalityGroup.BALANCED_EATER]: {
    title: '균형잡힌 미식가 ⚖️',
    description: '어떤 맛이든 잘 즐기는 만능 입맛! 편식없이 다양한 음식을 즐기는 건강한 식습관의 소유자에요.',
    bgColor: 'from-green-200 to-teal-200',
    textColor: 'text-green-700',
    emoji: '⚖️'
  },
  [PersonalityGroup.COMFORT_FOODIE]: {
    title: '위로음식 애호가 🍲',
    description: '익숙하고 따뜻한 맛에서 안정감을 찾는 당신! 엄마의 손맛 같은 정겨운 음식을 좋아하는 감성적인 성향이에요.',
    bgColor: 'from-orange-200 to-amber-200',  
    textColor: 'text-orange-700',
    emoji: '🍲'
  },
  [PersonalityGroup.BOLD_TASTER]: {
    title: '대담한 미각가 🎯',
    description: '강하고 뚜렷한 맛을 선호하는 도전가! 확실한 개성이 있는 음식을 좋아하는 결단력 있는 성향이에요.',
    bgColor: 'from-blue-200 to-indigo-200',
    textColor: 'text-blue-700',
    emoji: '🎯'
  },
  [PersonalityGroup.SIMPLE_PALATE]: {
    title: '심플한 클래식러버 🥛',
    description: '깔끔하고 단순한 맛을 선호하는 당신! 복잡한 양념보다는 재료 본연의 맛을 즐기는 순수한 미각의 소유자에요.',
    bgColor: 'from-gray-200 to-slate-200',
    textColor: 'text-gray-700',
    emoji: '🥛'
  }
};

const TestResult = ({ profile, onRetakeTest, onShareResult }: TestResultProps) => {
  const groupInfo = personalityGroupInfo[profile.personalityGroup];

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Result Card */}
      <div className={`bg-gradient-to-br ${groupInfo.bgColor} rounded-2xl p-8 mb-8`}>
        <div className="text-center">
          <div className="text-6xl mb-4">{groupInfo.emoji}</div>
          <h1 className={`text-3xl font-bold ${groupInfo.textColor} mb-4`}>
            {groupInfo.title}
          </h1>
          <p className={`text-lg ${groupInfo.textColor} leading-relaxed`}>
            {groupInfo.description}
          </p>
        </div>
      </div>

      {/* Taste Traits Chart */}
      <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border">
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
          나의 미각 성향 분석
        </h2>
        <div className="space-y-4">
          {Object.entries(profile.traits).map(([trait, score]) => (
            <div key={trait} className="flex items-center">
              <div className="w-20 text-sm text-gray-600 capitalize">
                {trait.replace('_', ' ')}
              </div>
              <div className="flex-1 mx-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-orange-400 to-pink-500 h-2 rounded-full"
                    style={{ width: `${(score / 10) * 100}%` }}
                  />
                </div>
              </div>
              <div className="text-sm text-gray-600 w-8 text-right">
                {score}
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