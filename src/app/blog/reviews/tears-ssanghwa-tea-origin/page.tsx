import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '티어스 쌍화차 오리진 리뷰 | 먹짱',
  description: '티어스 쌍화차 오리진 리뷰. 진하고 맛있는 쌍화차. 오리진은 좀 달달해서 더 찐한 한약맛을 원하면 블랙으로 사면 됨.',
  keywords: '티어스, 쌍화차, 오리진, 한약차, 먹짱, 제품 리뷰',
  openGraph: {
    title: '티어스 쌍화차 오리진 리뷰',
    description: '티어스 쌍화차 오리진 리뷰',
    url: 'https://mukjjang.com/blog/reviews/tears-ssanghwa-tea-origin',
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
      name: '티어스 쌍화차 오리진',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4',
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
            [티어스] 쌍화차 오리진 ♨️
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
            <span>⭐️ 4/5</span>
            <span>•</span>
            <time>2025.11.03</time>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="whitespace-pre-line leading-relaxed">
            진하고 맛있는 쌍화차. 오리진은 좀 달달해서 더 찐한 한약맛을 원하면 블랙으로 사면 됨{'\n'}
            겨울이 오면 슬슬 생각나는 맛{'\n'}
            다만 물을 진짜 이만큼만 넣는다고?싶을 정도로 적게 넣어야 해서 양이 아쉬움{'\n'}
            가격이 착하진 않으나 맛있어서 항상 사먹음
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
