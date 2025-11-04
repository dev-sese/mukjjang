#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import fs from 'fs/promises';
import path from 'path';

const PROJECT_ROOT = '/Users/sese/project/mukjjang';

// 슬러그 생성 함수
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// 현재 날짜 (YYYY-MM-DD)
function getCurrentDate() {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

// 블로그 페이지 생성
async function createBlogPost(title, rating, content, productName) {
  const slug = createSlug(productName || title);
  const date = getCurrentDate();

  const blogDir = path.join(PROJECT_ROOT, 'src/app/blog/reviews', slug);
  await fs.mkdir(blogDir, { recursive: true });

  const pageContent = `import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${title} | 먹짱',
  description: '${content.split('\\n')[0]}',
  keywords: '${productName}, 제품 리뷰, 먹짱, 음식 리뷰',
  openGraph: {
    title: '${title}',
    description: '${content.split('\\n')[0]}',
    url: 'https://mukjjang.com/blog/reviews/${slug}',
    type: 'article',
    publishedTime: '${date}',
  },
};

export default function ReviewPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: '${productName || title}',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '${rating}',
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
            ${title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
            <span>⭐️ ${rating}/5</span>
            <span>•</span>
            <time>${date}</time>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="whitespace-pre-line leading-relaxed">
            ${content}
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
`;

  const pagePath = path.join(blogDir, 'page.tsx');
  await fs.writeFile(pagePath, pageContent);

  return {
    slug,
    path: pagePath,
    url: `/blog/reviews/${slug}`,
  };
}

// sitemap 업데이트
async function updateSitemap(slug) {
  const sitemapPath = path.join(PROJECT_ROOT, 'src/app/sitemap.ts');
  let content = await fs.readFile(sitemapPath, 'utf-8');

  const newEntry = `    {
      url: \`\${baseUrl}/blog/reviews/${slug}\`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },`;

  // privacy 항목 뒤에 추가
  content = content.replace(
    /(\{\s+url: `\${baseUrl}\/privacy`,[\s\S]+?\},)/,
    `$1\n${newEntry}`
  );

  await fs.writeFile(sitemapPath, content);
}

// MCP 서버 설정
const server = new Server(
  {
    name: 'tweet-to-blog',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// 도구 목록
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'create_blog_from_tweet',
        description: '트위터 내용을 블로그 포스트로 변환합니다. 트윗 원문 그대로 간결하게 유지합니다.',
        inputSchema: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              description: '블로그 포스트 제목 (예: [브레댄코] 리얼 브라우니 쿠키 🍫)',
            },
            rating: {
              type: 'string',
              description: '평점 (예: 3.7)',
            },
            content: {
              type: 'string',
              description: '트윗 원문 내용 (줄바꿈 포함)',
            },
            productName: {
              type: 'string',
              description: '제품명 (URL 슬러그 생성용, 예: 브레댄코 리얼 브라우니 쿠키)',
            },
          },
          required: ['title', 'rating', 'content', 'productName'],
        },
      },
    ],
  };
});

// 도구 실행
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === 'create_blog_from_tweet') {
    const { title, rating, content, productName } = request.params.arguments;

    try {
      // 블로그 포스트 생성
      const result = await createBlogPost(title, rating, content, productName);

      // sitemap 업데이트
      await updateSitemap(result.slug);

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              success: true,
              message: '블로그 포스트가 생성되었습니다!',
              details: {
                slug: result.slug,
                path: result.path,
                url: result.url,
              },
            }, null, 2),
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              success: false,
              error: error.message,
            }, null, 2),
          },
        ],
        isError: true,
      };
    }
  }

  throw new Error(`Unknown tool: ${request.params.name}`);
});

// 서버 시작
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Tweet-to-Blog MCP server running on stdio');
}

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});
