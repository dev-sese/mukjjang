# MCP 서버 설정 가이드

## Tweet-to-Blog MCP 서버

트위터 내용을 자동으로 먹짱 블로그 포스트로 변환하는 MCP 서버입니다.

## 설치 완료 ✅

MCP 서버가 이미 설치되었습니다:
- 위치: `/Users/sese/project/mukjjang/mcp-servers/tweet-to-blog/`
- 의존성: 설치 완료

## Claude Desktop 연동

1. Claude Desktop 설정 파일 열기:
```bash
open ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

2. 다음 내용 추가:
```json
{
  "mcpServers": {
    "tweet-to-blog": {
      "command": "node",
      "args": ["/Users/sese/project/mukjjang/mcp-servers/tweet-to-blog/index.js"]
    }
  }
}
```

3. Claude Desktop 재시작

## 사용 방법

### 기본 사용법

Claude에게 이렇게 요청하세요:

```
트윗으로 블로그 만들어줘:

제목: [브레댄코] 리얼 브라우니 쿠키 🍫
평점: 3.7
제품명: 브레댄코 리얼 브라우니 쿠키
내용:
신라명과 브랜드라서 믿고 사먹음. 초코맛이 싸구려맛이 아니고 진함
브라우니 바깥쪽이 두껍지 않아서 한입만 베어물어도 초코맛이 가득함
당류도 개당 6% 정도라 이정도면 괜찮다고 생각
신라명과 브라우니랑 같은거니 할인하는걸로 구매하시길
```

### MCP 도구 직접 호출

```
create_blog_from_tweet 도구를 사용해서:
- title: [브레댄코] 리얼 브라우니 쿠키 🍫
- rating: 3.7
- productName: 브레댄코 리얼 브라우니 쿠키
- content: (트윗 내용)
```

## 자동으로 수행되는 작업

1. ✅ 블로그 포스트 페이지 생성
   - 경로: `src/app/blog/reviews/[slug]/page.tsx`
   - 슬러그는 제품명에서 자동 생성

2. ✅ SEO 메타데이터 추가
   - title, description, keywords
   - Open Graph tags
   - Schema.org Review 구조화 데이터

3. ✅ Sitemap 자동 업데이트
   - `src/app/sitemap.ts`에 새 페이지 추가

4. ✅ 날짜 자동 설정
   - 현재 날짜로 자동 설정

## 출력 예시

성공 시:
```json
{
  "success": true,
  "message": "블로그 포스트가 생성되었습니다!",
  "details": {
    "slug": "breadenco-real-brownie-cookie",
    "path": "/Users/sese/project/mukjjang/src/app/blog/reviews/breadenco-real-brownie-cookie/page.tsx",
    "url": "/blog/reviews/breadenco-real-brownie-cookie"
  }
}
```

## 생성되는 페이지 구조

```tsx
// 간결한 리뷰 페이지
- 네비게이션 breadcrumb
- 제목
- 평점 + 날짜
- 트윗 원문 (그대로)
- 블로그로 돌아가기 링크
```

## 주의사항

- ⚠️ **트윗 내용은 절대 확장하지 않고 원문 그대로 사용**
- ⚠️ **제품명(productName)은 URL 슬러그 생성에 사용됨**
- ⚠️ **생성 후 반드시 빌드 테스트**: `yarn build`

## 빌드 후 확인

```bash
cd /Users/sese/project/mukjjang
yarn build
```

## 트러블슈팅

### MCP 서버가 인식되지 않는 경우
1. Claude Desktop 완전 종료
2. 설정 파일 확인
3. Claude Desktop 재시작
4. Claude 새 대화 시작

### 파일 생성 오류
- 프로젝트 루트 경로 확인: `/Users/sese/project/mukjjang`
- 권한 확인
- 디렉토리 존재 여부 확인

## 업데이트

MCP 서버 코드 수정 후:
```bash
cd mcp-servers/tweet-to-blog
# 코드 수정
# Claude Desktop 재시작
```

## 파일 구조

```
mcp-servers/tweet-to-blog/
├── package.json          # 의존성
├── index.js              # MCP 서버 메인 코드
├── README.md             # 사용 설명서
├── .gitignore
└── node_modules/         # 의존성 (설치됨)
```
