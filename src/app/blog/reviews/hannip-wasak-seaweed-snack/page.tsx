import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '한닙와삭 김스낵 리뷰 | 먹짱',
  description: '한닙와삭 김스낵 리뷰. 김을 겹쳐서 구워만든 스낵. 가벼운 식감에 아주 바삭해서 끝없이 들어감.',
  keywords: '한닙와삭, 김스낵, 와사비, 김, 스낵, 먹짱, 제품 리뷰',
  openGraph: {
    title: '한닙와삭 김스낵 리뷰',
    description: '한닙와삭 김스낵 리뷰',
    url: 'https://mukjjang.com/blog/reviews/hannip-wasak-seaweed-snack',
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
      name: '한닙와삭 김스낵',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '3.9',
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
            [한닙와삭] 김스낵 ⚡️
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
            <span>⭐️ 3.9/5</span>
            <span>•</span>
            <time>2025.11.03</time>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="whitespace-pre-line leading-relaxed">
            김을 겹쳐서 구워만든 스낵. 가벼운 식감에 아주 바삭해서 끝없이 들어감{'\n'}
            칼로리도 낮고 와사비맛은 느끼하지도 않아서 만족스럽지만 가격이 살짝 부담스러움{'\n'}
            박람회에서 자만추하면 항상 구입. 박람회에서 사는게 가장 싸다
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
