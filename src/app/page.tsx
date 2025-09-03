import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            먹짱 🍽️
          </h1>
          <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
            미각 성향 기반 개인화 추천 서비스
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            당신만의 미각 성향을 발견하고, 
            <br />
            완벽하게 맞는 음식을 추천받아보세요!
          </p>
        </div>

        {/* Test Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 미각 테스트 카드 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border">
            <div className="text-center">
              <div className="text-6xl mb-4">👅</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                미각 성향 테스트
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                15-20개의 시나리오형 질문을 통해
                <br />
                당신의 미각 성향을 8개 그룹으로 분석해요
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <span>⏱️</span>
                  <span>소요시간: 3-5분</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <span>🎯</span>
                  <span>8개 성향 그룹 분석</span>
                </div>
              </div>
              <Link href="/taste-test">
                <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  테스트 시작하기 ✨
                </button>
              </Link>
            </div>
          </div>

          {/* 먹짱력 테스트 카드 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border">
            <div className="text-center">
              <div className="text-6xl mb-4">🧠</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                먹짱력 테스트
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                7초 제한 시간 안에 음식을 맞히는
                <br />
                스피드 퀴즈로 먹짱력을 측정해보세요
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <span>⚡</span>
                  <span>문제당 7초 제한</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <span>🏆</span>
                  <span>먹짱 레벨 측정</span>
                </div>
              </div>
              <button 
                className="bg-gray-200 text-gray-500 px-6 py-3 rounded-xl font-semibold cursor-not-allowed"
                disabled
              >
                곧 출시 예정 🚧
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            먹짱의 특별한 점
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">정확한 분석</h3>
              <p className="text-gray-600 text-sm">심리학 기반 시나리오로 정확한 성향 분석</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">맞춤 추천</h3>
              <p className="text-gray-600 text-sm">공산품부터 맛집까지 개인화된 추천</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">간편한 공유</h3>
              <p className="text-gray-600 text-sm">결과 카드를 SNS로 쉽게 공유</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
