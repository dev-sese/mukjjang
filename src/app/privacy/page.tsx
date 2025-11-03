import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '개인정보처리방침 | 먹짱',
  description: '먹짱의 개인정보처리방침을 확인하세요.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-blue-600 hover:underline">
          홈
        </Link>
        {' > '}
        <span className="text-gray-600">개인정보처리방침</span>
      </nav>

      <h1 className="text-4xl font-bold mb-8 text-center">개인정보처리방침</h1>

      <div className="prose prose-lg max-w-none">
        <p className="mb-6">
          먹짱(이하 &quot;회사&quot;)은 이용자의 개인정보를 중요시하며,
          &quot;개인정보보호법&quot;을 준수하고 있습니다.
          회사는 개인정보처리방침을 통하여 이용자께서 제공하시는 개인정보가
          어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해
          어떠한 조치가 취해지고 있는지 알려드립니다.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. 수집하는 개인정보의 항목</h2>
        <p className="mb-4">
          회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>이름, 이메일 주소</li>
          <li>미각 테스트 결과 데이터</li>
          <li>서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보</li>
          <li>결제 정보 (결제 시)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. 개인정보의 수집 및 이용 목적</h2>
        <p className="mb-4">회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
        <ul className="list-disc ml-6 mb-6">
          <li>서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산</li>
          <li>회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지</li>
          <li>마케팅 및 광고에 활용: 이벤트 등 광고성 정보 전달, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재</li>
          <li>서비스 개선 및 신규 서비스 개발</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. 개인정보의 보유 및 이용기간</h2>
        <p className="mb-6">
          회사는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
          단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이
          관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
          <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법)</li>
          <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)</li>
          <li>웹사이트 방문기록: 3개월 (통신비밀보호법)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. 개인정보의 파기절차 및 방법</h2>
        <p className="mb-4">
          회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는
          해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>
            <strong>파기절차:</strong> 이용자가 회원가입 등을 위해 입력한 정보는
            목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 의한
            정보보호 사유에 따라 일정 기간 저장된 후 파기됩니다.
          </li>
          <li>
            <strong>파기방법:</strong> 전자적 파일형태로 저장된 개인정보는
            기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. 개인정보 제공</h2>
        <p className="mb-6">
          회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
          다만, 아래의 경우에는 예외로 합니다.
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>이용자들이 사전에 동의한 경우</li>
          <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. 이용자 및 법정대리인의 권리와 그 행사방법</h2>
        <p className="mb-4">
          이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의
          개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. 쿠키(Cookie)의 운영 및 활용</h2>
        <p className="mb-4">
          회사는 이용자에 대한 정보를 저장하고 수시로 찾아내는 &apos;쿠키(cookie)&apos;를 사용합니다.
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>
            <strong>쿠키의 사용 목적:</strong> 이용자의 접속 빈도나 방문 시간 등을 분석하여
            이용자의 취향과 관심분야를 파악하여 서비스 개선에 활용
          </li>
          <li>
            <strong>쿠키의 설치/운영 및 거부:</strong> 웹브라우저 상단의 도구 &gt; 인터넷 옵션 &gt;
            개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부할 수 있습니다.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">8. Google AdSense 및 광고 관련 정책</h2>
        <p className="mb-4">
          본 웹사이트는 Google AdSense를 통해 광고를 게재하고 있습니다.
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>
            Google 등의 외부 애드서버 제휴업체는 쿠키를 사용해 사용자가 이전에 방문한
            웹사이트를 토대로 광고를 게재합니다.
          </li>
          <li>
            Google의 광고 쿠키 사용으로 Google과 파트너는 사용자의 게시자 사이트 방문
            또는 인터넷상의 다른 사이트 방문 기록을 토대로 광고를 게재할 수 있습니다.
          </li>
          <li>
            사용자는{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              광고 설정
            </a>
            에서 맞춤 광고를 선택 해제할 수 있습니다.
          </li>
          <li>
            또는{' '}
            <a
              href="http://www.aboutads.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.aboutads.info
            </a>
            에서 외부 애드서버 제휴업체의 맞춤 광고를 위한 쿠키 사용을 차단할 수 있습니다.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">9. 개인정보보호 책임자</h2>
        <p className="mb-4">
          회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
          개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여
          아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <p className="mb-2">
            <strong>개인정보 보호책임자</strong>
          </p>
          <p className="mb-1">이메일: contact@mukjjang.com</p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">10. 개인정보처리방침 변경</h2>
        <p className="mb-6">
          이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의
          추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을
          통하여 고지할 것입니다.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">11. 기타</h2>
        <p className="mb-4">
          회사가 운영하는 웹사이트에 링크되어 있는 외부 웹사이트에서는
          회사의 개인정보처리방침이 적용되지 않습니다.
        </p>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            <strong>공고일자:</strong> 2025년 1월 1일
            <br />
            <strong>시행일자:</strong> 2025년 1월 1일
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
