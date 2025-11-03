import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "먹짱 - 미각 기반 개인화 추천",
  description: "당신의 미각 성향을 분석하여 맞춤형 식품을 추천해드립니다",
  metadataBase: new URL('https://mukjjang.com'),
  keywords: '미각 테스트, 음식 추천, 맛 취향, 성격 테스트, 먹짱, 음식 성향',
  authors: [{ name: '먹짱' }],
  creator: '먹짱',
  publisher: '먹짱',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '먹짱 - 미각 기반 개인화 추천',
    description: '당신의 미각 성향을 분석하여 맞춤형 식품을 추천해드립니다',
    url: 'https://mukjjang.com',
    siteName: '먹짱',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '먹짱 - 미각 기반 개인화 추천',
    description: '당신의 미각 성향을 분석하여 맞춤형 식품을 추천해드립니다',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pb-16 md:pb-0 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
