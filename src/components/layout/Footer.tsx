import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 브랜드 정보 */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">먹</span>
              </div>
              <span className="text-xl font-bold text-gray-900">먹짱</span>
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              당신의 미각 성향을 분석하여
              <br />
              맞춤형 식품을 추천해드립니다
            </p>
            <div className="text-sm text-gray-500">
              <p>이메일: contact@mukjjang.com</p>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">서비스</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/taste-test" className="text-gray-600 hover:text-blue-600">
                  미각 테스트
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-blue-600">
                  제품 탐색
                </Link>
              </li>
              <li>
                <Link href="/recommendations" className="text-gray-600 hover:text-blue-600">
                  맞춤 추천
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600">
                  블로그
                </Link>
              </li>
            </ul>
          </div>

          {/* 정보 */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">정보</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog/taste-types" className="text-gray-600 hover:text-blue-600">
                  미각 타입 가이드
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {currentYear} 먹짱. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-blue-600">
                개인정보처리방침
              </Link>
              <Link href="/blog" className="hover:text-blue-600">
                블로그
              </Link>
            </div>
          </div>
        </div>

        {/* AdSense 안내 */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            이 웹사이트는 Google AdSense를 사용하여 광고를 게재하고 있습니다.
            <br />
            Google과 제3자는 쿠키를 사용하여 사용자의 이전 방문 기록을 바탕으로 광고를 게재합니다.
            <br />
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              광고 설정
            </a>
            에서 맞춤 광고를 선택 해제할 수 있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
