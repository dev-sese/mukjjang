# Tweet-to-Blog MCP Server

트위터 내용을 먹짱 블로그 포스트로 자동 변환하는 MCP 서버입니다.

## 설치

```bash
cd mcp-servers/tweet-to-blog
npm install
```

## Claude Desktop 설정

`~/Library/Application Support/Claude/claude_desktop_config.json`에 추가:

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

## 사용법

Claude에서 다음과 같이 사용:

```
트윗 내용으로 블로그 만들어줘:
제목: [브레댄코] 리얼 브라우니 쿠키 🍫
평점: 3.7
제품명: 브레댄코 리얼 브라우니 쿠키
내용:
신라명과 브랜드라서 믿고 사먹음. 초코맛이 싸구려맛이 아니고 진함
브라우니 바깥쪽이 두껍지 않아서 한입만 베어물어도 초코맛이 가득함
당류도 개당 6% 정도라 이정도면 괜찮다고 생각
신라명과 브라우니랑 같은거니 할인하는걸로 구매하시길
```

## 기능

- ✅ 트윗 원문 그대로 블로그 포스트 생성
- ✅ SEO 메타데이터 자동 추가
- ✅ Schema.org Review 구조화 데이터
- ✅ 자동 슬러그 생성
- ✅ Sitemap 자동 업데이트
- ✅ 간결한 디자인 유지

## 생성되는 파일

```
src/app/blog/reviews/[slug]/
└── page.tsx
```

## 자동 업데이트되는 파일

- `src/app/sitemap.ts` - 새 리뷰 페이지 추가

## 출력 예시

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
