import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '한울 촉촉 고구마스틱 리뷰 | 먹짱',
  description: '한울 촉촉 고구마스틱 리뷰. 큼지막한 고구마 한 덩어리 스틱. 쫀득하고 부드럽고 달달함.',
  keywords: '한울, 촉촉 고구마스틱, 고구마, 간식, 먹짱, 제품 리뷰',
  openGraph: {
    title: '한울 촉촉 고구마스틱 리뷰',
    description: '한울 촉촉 고구마스틱 리뷰',
    url: 'https://mukjjang.com/blog/reviews/hanul-sweet-potato-stick',
    type: 'article',
    publishedTime: '2025-12-08',
  },
};

export default function ReviewPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: '한울 촉촉 고구마스틱',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '3.8',
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
            [한울] 촉촉 고구마스틱 🍠
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
            <span>⭐️ 3.8/5</span>
            <span>•</span>
            <time>2025.12.08</time>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="whitespace-pre-line leading-relaxed">
            큼지막한 고구마 한 덩어리 스틱. 쫀득하고 부드럽고 달달함{'\n'}
            입이 심심할 때 먹기 좋은 간식. 일반 말랭이보다 크기가 커서 씹는 맛도 좋은데 부드러움{'\n'}
            아침 대용으로 자주 구매하는데 개당 천원꼴이라 막 사서 먹긴 가격이 조금 아쉬움
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
