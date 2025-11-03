import { MetadataRoute } from 'next';
import { PersonalityGroup } from '@/types/taste-test';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mukjjang.com';
  const currentDate = new Date();

  // 기본 페이지들
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/taste-test`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/taste-types`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  // 미각 타입별 페이지들
  const tasteTypePages = Object.values(PersonalityGroup).map((type) => ({
    url: `${baseUrl}/blog/taste-types/${type}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...tasteTypePages];
}
