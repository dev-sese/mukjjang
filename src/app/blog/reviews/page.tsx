import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제품 리뷰 | 먹짱',
  description: '직접 먹어본 솔직한 제품 리뷰 모음',
  keywords: '먹짱, 제품 리뷰, 음식 리뷰, 간식 리뷰',
  openGraph: {
    title: '제품 리뷰 | 먹짱',
    description: '직접 먹어본 솔직한 제품 리뷰 모음',
    url: 'https://mukjjang.com/blog/reviews',
    type: 'website',
  },
};

interface Review {
  slug: string;
  title: string;
  emoji: string;
  rating: number;
  date: string;
  excerpt: string;
}

const reviews: Review[] = [
  {
    slug: 'omg-mini-yakgwa-yuzu',
    title: '도시곳간|비비고 오마이갓 미니약과 유자맛',
    emoji: '🍋',
    rating: 1,
    date: '2025.12.08',
    excerpt: '최근 먹은 약과 중 가장 별로. 유자맛과 약과의 단맛이 따로 놀아서 이맛저맛도 아닌 맛이 남.',
  },
  {
    slug: 'hanul-sweet-potato-stick',
    title: '한울 촉촉 고구마스틱',
    emoji: '🍠',
    rating: 3.8,
    date: '2025.12.08',
    excerpt: '큼지막한 고구마 한 덩어리 스틱. 쫀득하고 부드럽고 달달함.',
  },
  {
    slug: 'hannip-wasak-seaweed-snack',
    title: '한닙와삭 김스낵',
    emoji: '⚡️',
    rating: 3.9,
    date: '2025.11.03',
    excerpt: '김을 겹쳐서 구워만든 스낵. 가벼운 식감에 아주 바삭해서 끝없이 들어감.',
  },
  {
    slug: 'tears-ssanghwa-tea-origin',
    title: '티어스 쌍화차 오리진',
    emoji: '♨️',
    rating: 4,
    date: '2025.11.03',
    excerpt: '진하고 맛있는 쌍화차. 오리진은 좀 달달해서 더 찐한 한약맛을 원하면 블랙으로 사면 됨.',
  },
  {
    slug: 'hyotan-mackerel-shimesaba',
    title: '효탄 고등어 초절임(시메사바)',
    emoji: '🐟',
    rating: 3,
    date: '2025.11.03',
    excerpt: '고등어 봉초밥을 집에서 해먹고싶어서 주문. 적당한 식초맛과 다양한 구성.',
  },
  {
    slug: 'breadenco-real-brownie-cookie',
    title: '브레댄코 리얼 브라우니 쿠키',
    emoji: '🍫',
    rating: 3.7,
    date: '2025.01.03',
    excerpt: '신라명과 브랜드라서 믿고 사먹음. 초코맛이 싸구려맛이 아니고 진함.',
  },
];

export default function ReviewsListPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">홈</Link>
        {' > '}
        <Link href="/blog" className="hover:text-blue-600">블로그</Link>
        {' > '}
        <span>제품 리뷰</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">제품 리뷰 ⭐</h1>
        <p className="text-lg text-gray-700">
          직접 먹어본 솔직한 제품 리뷰를 확인해보세요
        </p>
      </header>

      <div className="space-y-6">
        {reviews.map((review) => (
          <Link
            key={review.slug}
            href={`/blog/reviews/${review.slug}`}
            className="block group"
          >
            <article className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{review.emoji}</div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">
                    {review.title}
                  </h2>
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                    <span className="font-semibold">⭐️ {review.rating}/5</span>
                    <span>•</span>
                    <time>{review.date}</time>
                  </div>
                  <p className="text-gray-700 line-clamp-2">
                    {review.excerpt}
                  </p>
                  <span className="inline-block mt-3 text-blue-600 text-sm font-medium group-hover:underline">
                    자세히 보기 →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <footer className="mt-12 pt-8 border-t">
        <Link
          href="/blog"
          className="text-blue-600 hover:underline"
        >
          ← 블로그로 돌아가기
        </Link>
      </footer>
    </div>
  );
}
