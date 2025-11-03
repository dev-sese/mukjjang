import { Metadata } from 'next';
import Link from 'next/link';
import { PersonalityGroup } from '@/types/taste-test';
import { PERSONALITY_CONTENTS } from '@/data/personality-content';

export const metadata: Metadata = {
  title: '미각 타입 가이드 - 8가지 음식 성향 | 먹짱',
  description: '나의 미각 타입을 알아보세요. 달콤 애호가, 짭짤 마스터, 매운맛 모험가 등 8가지 음식 성향과 각 타입별 추천 음식을 확인하세요.',
  keywords: '미각 테스트, 음식 성향, 맛 취향, 미각 타입, 먹짱, 성격 테스트, 음식 추천',
  openGraph: {
    title: '미각 타입 가이드 - 8가지 음식 성향',
    description: '당신의 미각 타입은 무엇인가요? 8가지 음식 성향을 알아보고 맞춤 추천을 받아보세요.',
    url: 'https://mukjjang.com/blog/taste-types',
    siteName: '먹짱',
    locale: 'ko_KR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mukjjang.com/blog/taste-types',
  },
};

export default function TasteTypesIndexPage() {
  const allPersonalities = Object.values(PERSONALITY_CONTENTS);

  // 구조화된 데이터 (Schema.org)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '미각 타입 가이드',
    description: '8가지 음식 성향 타입에 대한 완벽 가이드',
    url: 'https://mukjjang.com/blog/taste-types',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: allPersonalities.map((personality, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          name: personality.title,
          description: personality.shortDescription,
          url: `https://mukjjang.com/blog/taste-types/${personality.id}`,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 헤더 */}
        <header className="mb-12 text-center">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">
              홈
            </Link>
            {' > '}
            <Link href="/blog" className="text-blue-600 hover:underline">
              블로그
            </Link>
            {' > '}
            <span className="text-gray-600">미각 타입</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            8가지 미각 타입 가이드
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            당신의 음식 취향은 어떤 타입인가요?
            <br />
            각 미각 타입의 특징과 추천 음식을 알아보고, 나에게 맞는 타입을 찾아보세요.
          </p>
        </header>

        {/* 미각 테스트 CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg mb-16 text-center">
          <h2 className="text-3xl font-bold mb-3">나의 미각 타입 알아보기</h2>
          <p className="text-lg mb-6">
            10가지 간단한 질문으로 나의 음식 성향을 분석해보세요
          </p>
          <Link
            href="/taste-test"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg"
          >
            무료 미각 테스트 시작하기
          </Link>
        </div>

        {/* 미각 타입 목록 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            모든 미각 타입 보기
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPersonalities.map((personality) => (
              <article
                key={personality.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <Link href={`/blog/taste-types/${personality.id}`}>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-blue-600">
                      {personality.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {personality.shortDescription}
                    </p>

                    {/* 주요 특징 미리보기 */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-600 mb-2">
                        주요 특징:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {personality.characteristics.slice(0, 3).map((char, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 추천 음식 미리보기 */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-600 mb-2">
                        추천 음식:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {personality.recommendedFoods.slice(0, 4).map((food, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded"
                          >
                            {food}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-blue-600 font-medium hover:underline">
                      자세히 보기 →
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* 미각 타입별 분류 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            카테고리별 미각 타입
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 기본 타입 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">
                기본 미각 타입
              </h3>
              <p className="text-gray-700 mb-4">
                하나의 주요 맛을 중심으로 형성된 기본 미각 타입입니다.
              </p>
              <ul className="space-y-2">
                {[
                  PersonalityGroup.SWEET_LOVER,
                  PersonalityGroup.SALTY_MASTER,
                  PersonalityGroup.SPICY_ADVENTURER,
                  PersonalityGroup.EXOTIC_EXPLORER,
                ].map((id) => {
                  const personality = PERSONALITY_CONTENTS[id];
                  return (
                    <li key={id}>
                      <Link
                        href={`/blog/taste-types/${id}`}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {personality.title}
                      </Link>
                      <span className="text-gray-600 text-sm ml-2">
                        - {personality.shortDescription}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* 복합 타입 */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-purple-800">
                복합 미각 타입
              </h3>
              <p className="text-gray-700 mb-4">
                여러 맛의 조화를 즐기는 복합적인 미각 타입입니다.
              </p>
              <ul className="space-y-2">
                {[
                  PersonalityGroup.SOFT_HEALER,
                  PersonalityGroup.INTENSE_TASTER,
                  PersonalityGroup.WORLD_FOODIE,
                ].map((id) => {
                  const personality = PERSONALITY_CONTENTS[id];
                  return (
                    <li key={id}>
                      <Link
                        href={`/blog/taste-types/${id}`}
                        className="text-purple-600 hover:underline font-medium"
                      >
                        {personality.title}
                      </Link>
                      <span className="text-gray-600 text-sm ml-2">
                        - {personality.shortDescription}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* 특별 타입 */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-yellow-800">
                특별 미각 타입
              </h3>
              <p className="text-gray-700 mb-4">
                음식에 대한 높은 열정과 추진력을 보유한 특별한 타입입니다.
              </p>
              <Link
                href={`/blog/taste-types/${PersonalityGroup.MUKJJANG_LEADER}`}
                className="text-yellow-700 hover:underline font-medium text-lg"
              >
                {PERSONALITY_CONTENTS[PersonalityGroup.MUKJJANG_LEADER].title}
              </Link>
              <span className="text-gray-600 ml-2">
                - {PERSONALITY_CONTENTS[PersonalityGroup.MUKJJANG_LEADER].shortDescription}
              </span>
            </div>
          </div>
        </section>

        {/* FAQ 섹션 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            자주 묻는 질문
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">
                미각 타입은 어떻게 결정되나요?
              </h3>
              <p className="text-gray-700">
                10가지 음식 관련 질문에 대한 답변을 분석하여, 단맛, 짠맛, 매운맛, 이국적인 맛,
                그리고 먹짱력(음식에 대한 열정)을 측정합니다. 이를 바탕으로 8가지 타입 중
                가장 적합한 성향을 도출합니다.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">
                미각 타입이 여러 개 나올 수 있나요?
              </h3>
              <p className="text-gray-700">
                네, 가능합니다. 복합적인 미각을 가진 경우 최대 2개의 타입이
                나올 수 있습니다. 예를 들어 짠맛과 매운맛을 모두 좋아한다면
                강렬한 미식가 타입으로 분류됩니다.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">
                미각 타입에 따른 음식 추천은 어떻게 이루어지나요?
              </h3>
              <p className="text-gray-700">
                각 타입별로 선호하는 맛의 특성을 분석하여 가장 잘 맞는 음식들을
                추천합니다. 또한 건강을 고려한 팁과 주의해야 할 음식도 함께 안내합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 하단 CTA */}
        <section className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            지금 바로 나의 미각 타입을 알아보세요!
          </h2>
          <p className="text-lg mb-8">
            단 5분이면 나의 음식 성향을 정확하게 파악할 수 있습니다.
            <br />
            개인 맞춤형 음식 추천도 받아보세요!
          </p>
          <Link
            href="/taste-test"
            className="inline-block bg-white text-purple-600 font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition text-lg"
          >
            무료 테스트 시작하기
          </Link>
        </section>
      </div>
    </>
  );
}
