import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PersonalityGroup } from '@/types/taste-test';
import { PERSONALITY_CONTENTS } from '@/data/personality-content';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    type: string;
  }>;
}

// 모든 가능한 타입에 대해 정적 페이지 생성
export async function generateStaticParams() {
  return Object.values(PersonalityGroup).map((type) => ({
    type,
  }));
}

// 동적 메타데이터 생성
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type } = await params;
  const personality = PERSONALITY_CONTENTS[type as PersonalityGroup];

  if (!personality) {
    return {
      title: '페이지를 찾을 수 없습니다',
    };
  }

  const title = `${personality.title} - 미각 테스트 결과 | 먹짱`;
  const description = personality.shortDescription;
  const url = `https://mukjjang.com/blog/taste-types/${type}`;

  return {
    title,
    description,
    keywords: [
      personality.title,
      '미각 테스트',
      '음식 성향',
      '맛 취향',
      '먹짱',
      ...personality.recommendedFoods,
    ].join(', '),
    authors: [{ name: '먹짱' }],
    openGraph: {
      title,
      description,
      url,
      siteName: '먹짱',
      locale: 'ko_KR',
      type: 'article',
      images: [
        {
          url: `/og-images/taste-types/${type}.png`,
          width: 1200,
          height: 630,
          alt: personality.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/og-images/taste-types/${type}.png`],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function TasteTypePage({ params }: PageProps) {
  const { type } = await params;
  const personality = PERSONALITY_CONTENTS[type as PersonalityGroup];

  if (!personality) {
    notFound();
  }

  // 구조화된 데이터 (Schema.org)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${personality.title} - 미각 테스트 결과`,
    description: personality.shortDescription,
    author: {
      '@type': 'Organization',
      name: '먹짱',
    },
    publisher: {
      '@type': 'Organization',
      name: '먹짱',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mukjjang.com/logo.png',
      },
    },
    datePublished: '2025-01-01',
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://mukjjang.com/blog/taste-types/${type}`,
    },
  };

  const relatedPersonalities = personality.matchingPersonalities
    .map((id) => PERSONALITY_CONTENTS[id])
    .filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* 헤더 */}
        <header className="mb-12">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">
              홈
            </Link>
            {' > '}
            <Link href="/blog" className="text-blue-600 hover:underline">
              블로그
            </Link>
            {' > '}
            <Link href="/blog/taste-types" className="text-blue-600 hover:underline">
              미각 타입
            </Link>
            {' > '}
            <span className="text-gray-600">{personality.title}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {personality.title}
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            {personality.shortDescription}
          </p>
        </header>

        {/* 미각 테스트 CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-2">나의 미각 타입은?</h2>
          <p className="mb-4">10가지 질문으로 알아보는 나의 음식 취향</p>
          <Link
            href="/taste-test"
            className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            무료 미각 테스트 시작하기
          </Link>
        </div>

        {/* 상세 설명 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            {personality.title}란?
          </h2>
          <div className="prose prose-lg max-w-none">
            {personality.fullDescription.split('\n').map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index} className="mb-4 text-gray-800 leading-relaxed">
                  {paragraph.trim()}
                </p>
              )
            ))}
          </div>
        </section>

        {/* 주요 특징 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">주요 특징</h2>
          <ul className="space-y-3">
            {personality.characteristics.map((characteristic, index) => (
              <li
                key={index}
                className="flex items-start bg-gray-50 p-4 rounded-lg"
              >
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-gray-800">{characteristic}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 추천 음식 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">추천 음식</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {personality.recommendedFoods.map((food, index) => (
              <div
                key={index}
                className="bg-green-50 border border-green-200 p-4 rounded-lg text-center"
              >
                <span className="text-green-800 font-medium">{food}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 피해야 할 음식 */}
        {personality.avoidFoods.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">주의해야 할 음식</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personality.avoidFoods.map((food, index) => (
                <div
                  key={index}
                  className="bg-red-50 border border-red-200 p-4 rounded-lg"
                >
                  <span className="text-red-800">{food}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 건강 팁 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            {personality.title}를 위한 팁
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <ul className="space-y-3">
              {personality.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-600 mr-3">💡</span>
                  <span className="text-gray-800">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 관련 미각 타입 */}
        {relatedPersonalities.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">관련 미각 타입</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPersonalities.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/taste-types/${related.id}`}
                  className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold mb-2 text-blue-600">
                    {related.title}
                  </h3>
                  <p className="text-gray-700">{related.shortDescription}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 하단 CTA */}
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
