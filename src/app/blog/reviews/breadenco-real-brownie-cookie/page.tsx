import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '브레댄코 리얼 브라우니 쿠키 리뷰 | 먹짱',
  description: '신라명과 브레댄코 리얼 브라우니 쿠키 리뷰. 초코맛이 싸구려맛이 아니고 진함. 당류 개당 6% 정도.',
  keywords: '브레댄코, 리얼 브라우니 쿠키, 신라명과, 브라우니 쿠키, 초코 쿠키, 먹짱',
  openGraph: {
    title: '브레댄코 리얼 브라우니 쿠키 리뷰',
    description: '신라명과 브레댄코 리얼 브라우니 쿠키 리뷰',
    url: 'https://mukjjang.com/blog/reviews/breadenco-real-brownie-cookie',
    type: 'article',
    publishedTime: '2025-01-03',
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
            [브레댄코] 리얼 브라우니 쿠키 🍫
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
            <span>⭐️ 3.7/5</span>
            <span>•</span>
            <time>2025.01.03</time>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="whitespace-pre-line leading-relaxed">
            신라명과 브랜드라서 믿고 사먹음. 초코맛이 싸구려맛이 아니고 진함{'\n'}
            브라우니 바깥쪽이 두껍지 않아서 한입만 베어물어도 초코맛이 가득함{'\n'}
            당류도 개당 6% 정도라 이정도면 괜찮다고 생각{'\n'}
            신라명과 브라우니랑 같은거니 할인하는걸로 구매하시길
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
