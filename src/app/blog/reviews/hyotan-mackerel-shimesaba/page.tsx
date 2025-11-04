import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '효탄 고등어 초절임(시메사바) 리뷰 | 먹짱',
  description: '효탄 고등어 초절임 시메사바 리뷰. 고등어 봉초밥을 집에서 해먹고싶어서 주문. 적당한 식초맛과 다양한 구성.',
  keywords: '효탄, 고등어 초절임, 시메사바, 봉초밥, 먹짱, 제품 리뷰',
  openGraph: {
    title: '효탄 고등어 초절임(시메사바) 리뷰',
    description: '효탄 고등어 초절임 시메사바 리뷰',
    url: 'https://mukjjang.com/blog/reviews/hyotan-mackerel-shimesaba',
    type: 'article',
    publishedTime: '2025-11-03',
  },
};

export default function ReviewPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: '효탄 고등어 초절임',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '3',
      bestRating: '5',
    },
    author: {
      '@type': 'Organization',
      name: '먹짱',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <nav className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">홈</Link>
          {' > '}
          <Link href="/blog" className="hover:text-blue-600">블로그</Link>
          {' > '}
          <span>제품 리뷰</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            [효탄] 고등어 초절임(시메사바) 🐟
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
            <span>⭐️ 3/5</span>
            <span>•</span>
            <time>2025.11.03</time>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="whitespace-pre-line leading-relaxed">
            고등어 봉초밥을 집에서 해먹고싶어서 주문.{'\n'}
            적당한 식초맛과 다양한 구성(와사비, 초생강, 깨, 간장, 페스토)은 마음에 들었으나 너무 푸석함.{'\n'}
            봉초밥을 해먹을 거라면 꼭 토치질 하는 것을 추천. 가격대비 해먹는 메리트가 크지 않아 재구매는 없음
          </p>
        </div>

        <footer className="mt-12 pt-8 border-t">
          <Link
            href="/blog"
            className="text-blue-600 hover:underline"
          >
            ← 블로그로 돌아가기
          </Link>
        </footer>
      </article>
    </>
  );
}
