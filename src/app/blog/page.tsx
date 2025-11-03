import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '먹짱 블로그 - 음식과 미각에 관한 모든 것',
  description: '미각 테스트, 음식 추천, 맛집 정보 등 음식과 관련된 유익한 콘텐츠를 만나보세요.',
  keywords: '먹짱, 음식 블로그, 미각 테스트, 맛집, 음식 추천, 요리',
  openGraph: {
    title: '먹짱 블로그',
    description: '음식과 미각에 관한 모든 것',
    url: 'https://mukjjang.com/blog',
    siteName: '먹짱',
    locale: 'ko_KR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mukjjang.com/blog',
  },
};

export default function BlogPage() {
  const categories = [
    {
      title: '미각 타입 가이드',
      description: '8가지 음식 성향 타입에 대한 완벽한 가이드',
      href: '/blog/taste-types',
      color: 'from-blue-500 to-purple-600',
      icon: '🍽️',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* 헤더 */}
      <header className="mb-12 text-center">
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">
            홈
          </Link>
          {' > '}
          <span className="text-gray-600">블로그</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          먹짱 블로그
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          음식과 미각에 관한 모든 것을 알아보세요
        </p>
      </header>

      {/* 카테고리 그리드 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">인기 카테고리</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="block group"
            >
              <div className={`bg-gradient-to-br ${category.color} text-white rounded-lg p-8 hover:shadow-xl transition`}>
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-3">
                  {category.title}
                </h3>
                <p className="text-white/90 mb-4">
                  {category.description}
                </p>
                <span className="inline-block text-white font-medium group-hover:underline">
                  자세히 보기 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          나의 미각 타입이 궁금하다면?
        </h2>
        <p className="text-lg mb-8">
          10가지 간단한 질문으로 나의 음식 성향을 알아보세요
        </p>
        <Link
          href="/taste-test"
          className="inline-block bg-white text-green-600 font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition text-lg"
        >
          무료 미각 테스트 시작하기
        </Link>
      </section>
    </div>
  );
}
