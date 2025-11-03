import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '브레댄코 리얼 브라우니 쿠키 솔직 리뷰 - 신라명과의 숨은 명작 | 먹짱',
  description: '신라명과 브레댄코의 리얼 브라우니 쿠키를 직접 먹어본 솔직한 리뷰입니다. 진한 초코맛과 적당한 당도, 가격대비 만족도까지 자세히 알려드립니다.',
  keywords: '브레댄코, 리얼 브라우니 쿠키, 신라명과, 브라우니 쿠키, 초코 쿠키, 쿠키 추천, 디저트 리뷰, 먹짱',
  openGraph: {
    title: '브레댄코 리얼 브라우니 쿠키 솔직 리뷰',
    description: '신라명과 브레댄코의 리얼 브라우니 쿠키를 직접 먹어본 솔직한 리뷰',
    url: 'https://mukjjang.com/blog/reviews/breadenco-real-brownie-cookie',
    type: 'article',
    publishedTime: '2025-01-03',
  },
  twitter: {
    card: 'summary_large_image',
    title: '브레댄코 리얼 브라우니 쿠키 솔직 리뷰',
    description: '신라명과의 숨은 명작, 브레댄코 리얼 브라우니 쿠키 리뷰',
  },
};

export default function BreadencoReviewPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: '브레댄코 리얼 브라우니 쿠키',
      brand: {
        '@type': 'Brand',
        name: '신라명과',
      },
      description: '진한 초코맛이 특징인 브라우니 쿠키',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '3.7',
      bestRating: '5',
    },
    author: {
      '@type': 'Organization',
      name: '먹짱',
    },
    reviewBody: '신라명과 브레댄코의 리얼 브라우니 쿠키는 진한 초코맛과 적당한 당도가 특징인 제품입니다.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">
            홈
          </Link>
          {' > '}
          <Link href="/blog" className="text-blue-600 hover:underline">
            블로그
          </Link>
          {' > '}
          <span className="text-gray-600">제품 리뷰</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
              제품 리뷰
            </span>
            <span className="text-gray-500 text-sm">2025년 1월 3일</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            브레댄코 리얼 브라우니 쿠키 🍫
          </h1>
          <p className="text-xl text-gray-700">
            신라명과의 숨은 명작, 진한 초코맛이 일품인 브라우니 쿠키
          </p>

          <div className="flex items-center gap-2 mt-6">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-blue-600">3.7</span>
              <span className="text-gray-500 ml-2">/ 5</span>
            </div>
            <div className="flex gap-1 ml-2">
              {[1, 2, 3].map((star) => (
                <span key={star} className="text-yellow-400 text-2xl">★</span>
              ))}
              <span className="text-yellow-400 text-2xl opacity-70">★</span>
              <span className="text-gray-300 text-2xl">★</span>
            </div>
          </div>
        </header>

        {/* 한줄평 */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h2 className="text-xl font-bold mb-2 text-blue-900">한줄평</h2>
          <p className="text-lg text-gray-800">
            신라명과 브랜드라서 믿고 사먹었는데, 진한 초코맛과 적당한 당도가 기대 이상!
          </p>
        </div>

        {/* 제품 소개 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">제품 소개</h2>
          <p className="text-lg leading-relaxed mb-4">
            브레댄코(Breadenco)는 신라명과에서 출시한 프리미엄 베이커리 브랜드입니다.
            리얼 브라우니 쿠키는 브레댄코의 대표 제품 중 하나로, 진한 초코맛과
            브라우니 특유의 촉촉한 식감이 특징입니다.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            신라명과는 오랜 전통을 가진 제과 브랜드로, 품질에 대한 신뢰도가 높습니다.
            브레댄코 라인은 특히 프리미엄 재료를 사용하여 만든 고급 베이커리 제품으로,
            선물용으로도 인기가 많습니다.
          </p>
        </section>

        {/* 맛 평가 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">맛 평가</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">🍫</span>
                진한 초코맛
              </h3>
              <p className="text-gray-700 leading-relaxed">
                가장 인상적인 부분은 초코맛의 깊이입니다. 싸구려 초코 특유의
                인공적인 맛이 전혀 나지 않고, 진짜 초콜릿을 먹는 듯한
                풍부한 카카오 향이 입안 가득 퍼집니다. 다크 초콜릿의 쌉싸름한 맛과
                밀크 초콜릿의 부드러움이 적절히 조화를 이루고 있습니다.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">🧁</span>
                완벽한 두께감
              </h3>
              <p className="text-gray-700 leading-relaxed">
                브라우니 쿠키의 바깥쪽이 두껍지 않아서 한입만 베어물어도
                바로 초코맛이 느껴집니다. 일부 브라우니 제품들은 겉면이 너무
                두껍고 딱딱해서 초코맛이 제대로 느껴지지 않는 경우가 있는데,
                브레댄코 제품은 그런 문제가 전혀 없습니다.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                적당히 바삭한 겉면과 촉촉한 속살의 대비가 훌륭하며,
                씹는 맛이 매우 만족스럽습니다.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">🍬</span>
                적당한 당도
              </h3>
              <p className="text-gray-700 leading-relaxed">
                당류가 개당 6% 정도로, 요즘 건강을 중시하는 트렌드에
                잘 맞는 수준입니다. 초코맛이 진한 제품임에도 불구하고
                지나치게 달지 않아서 부담 없이 즐길 수 있습니다.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                커피나 우유와 함께 먹으면 더욱 좋으며, 한 개만 먹어도
                충분한 만족감을 느낄 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 영양 정보 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">영양 정보</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-medium">당류 (개당)</span>
                <span className="text-blue-600 font-bold">약 6%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-medium">카테고리</span>
                <span className="font-bold">쿠키/브라우니</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              ※ 당류 6%는 일일 권장 섭취량 대비 낮은 수준으로, 건강을 생각하는
              분들도 부담 없이 즐기실 수 있습니다.
            </p>
          </div>
        </section>

        {/* 장점과 단점 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">장점과 단점</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-green-800 flex items-center gap-2">
                <span>✓</span>장점
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>신라명과 브랜드의 믿을 수 있는 품질</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>진한 초코맛이 일품 (싸구려맛 NO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>한입에 초코맛이 가득 느껴지는 완벽한 두께</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>적당한 당도 (개당 6%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>촉촉하면서도 바삭한 식감</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-amber-800 flex items-center gap-2">
                <span>!</span>아쉬운 점
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>정가는 다소 비싼 편 (할인 구매 권장)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>한 개 먹으면 더 먹고 싶어지는 중독성</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 구매 팁 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">구매 팁</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <span className="text-3xl">💡</span>
              <div>
                <h3 className="text-xl font-bold mb-3">할인 구매가 정답!</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  브레댄코 리얼 브라우니 쿠키는 신라명과 브라우니와 같은 제품입니다.
                  따라서 할인 행사를 잘 활용하면 더욱 합리적인 가격에 구매할 수 있습니다.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>대형마트 정기 할인 행사 체크</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>온라인 쇼핑몰 프로모션 활용</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>신라명과 공식몰 이벤트 확인</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>대용량 구매로 단가 낮추기</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 추천 대상 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">이런 분께 추천합니다</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
              <span className="text-3xl">🍫</span>
              <span>진한 초코맛을 좋아하는 분</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
              <span className="text-3xl">☕</span>
              <span>커피와 함께 즐길 디저트를 찾는 분</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
              <span className="text-3xl">🎁</span>
              <span>선물용 디저트를 찾는 분</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3">
              <span className="text-3xl">💪</span>
              <span>당 섭취를 조절하는 분</span>
            </div>
          </div>
        </section>

        {/* 함께 먹으면 좋은 음료 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">함께 먹으면 좋은 음료</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg p-6 mb-3">
                <span className="text-5xl">☕</span>
              </div>
              <h3 className="font-bold mb-2">아메리카노</h3>
              <p className="text-sm text-gray-600">
                쌉싸름한 커피와 달콤한 브라우니의 완벽한 조합
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 mb-3">
                <span className="text-5xl">🥛</span>
              </div>
              <h3 className="font-bold mb-2">우유</h3>
              <p className="text-sm text-gray-600">
                부드러운 우유가 초코맛을 더욱 풍부하게
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-6 mb-3">
                <span className="text-5xl">🍵</span>
              </div>
              <h3 className="font-bold mb-2">녹차 라떼</h3>
              <p className="text-sm text-gray-600">
                녹차의 쌉싸름함과 브라우니의 단맛이 조화
              </p>
            </div>
          </div>
        </section>

        {/* 최종 평가 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">최종 평가</h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-5xl font-bold text-blue-600">3.7</span>
                <span className="text-gray-500 text-xl ml-2">/ 5</span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3].map((star) => (
                  <span key={star} className="text-yellow-400 text-3xl">★</span>
                ))}
                <span className="text-yellow-400 text-3xl opacity-70">★</span>
                <span className="text-gray-300 text-3xl">★</span>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-gray-800 mb-4">
              브레댄코 리얼 브라우니 쿠키는 신라명과의 믿을 수 있는 품질과
              진한 초코맛이 조화를 이룬 훌륭한 제품입니다.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              가격이 다소 부담스러울 수 있지만, 할인 행사를 활용하면
              가성비까지 갖춘 완벽한 디저트가 됩니다. 초코를 사랑하는 분들에게
              강력히 추천하는 제품입니다!
            </p>
          </div>
        </section>

        {/* 관련 콘텐츠 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">관련 콘텐츠</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/blog/taste-types/sweet_lover"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">
                달콤 애호가 미각 타입
              </h3>
              <p className="text-gray-700">
                달콤한 디저트를 좋아한다면? 나의 미각 타입을 알아보세요.
              </p>
            </Link>
            <Link
              href="/taste-test"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">
                미각 테스트 하기
              </h3>
              <p className="text-gray-700">
                나에게 맞는 음식 추천을 받아보세요.
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-gray-200 pt-12">
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              나의 미각 타입이 궁금하다면?
            </h2>
            <p className="text-gray-700 mb-6">
              간단한 테스트로 나만의 미각 프로필을 확인하고,
              <br />
              맞춤형 음식 추천을 받아보세요!
            </p>
            <Link
              href="/taste-test"
              className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-700 transition"
            >
              무료로 테스트 시작하기
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
