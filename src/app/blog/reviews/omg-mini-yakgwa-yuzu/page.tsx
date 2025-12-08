import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '도시곳간|비비고 오마이갓 미니약과 유자맛 리뷰 | 먹짱',
  description: '도시곳간|비비고 오마이갓 미니약과 유자맛 리뷰. 최근 먹은 약과 중 가장 별로. 유자맛과 약과의 단맛이 따로 놀아서 이맛저맛도 아닌 맛이 남.',
  keywords: '도시곳간, 비비고, 오마이갓, 미니약과, 유자맛, 약과, 먹짱, 제품 리뷰',
  openGraph: {
    title: '도시곳간|비비고 오마이갓 미니약과 유자맛 리뷰',
    description: '도시곳간|비비고 오마이갓 미니약과 유자맛 리뷰',
    url: 'https://mukjjang.com/blog/reviews/omg-mini-yakgwa-yuzu',
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
      name: '도시곳간|비비고 오마이갓 미니약과 유자맛',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '1',
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
            [도시곳간|비비고] 오마이갓 미니약과 유자맛🍋
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
            <span>⭐️ 1/5</span>
            <span>•</span>
            <time>2025.12.08</time>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="whitespace-pre-line leading-relaxed">
            최근 먹은 약과 중 가장 별로{'\n'}
            유자맛과 약과의 단맛이 따로 놀아서 이맛저맛도 아닌 맛이 남{'\n'}
            하나 먹고 나머지는 먹을 생각이 들지 않음
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
