# 먹짱(Mukjjang) 프로젝트 컨텍스트

## 프로젝트 개요
- **프로젝트명**: 먹짱 (Mukjjang)
- **목적**: 미각 기반 개인화 추천 서비스
- **기술 스택**: Next.js 15.5.2 (App Router), TypeScript, Tailwind CSS, Prisma
- **패키지 매니저**: Yarn
- **배포**: Cloudflare (DNS 인증 완료)

## 최근 작업 내역 (2025년 11월 3일)

### 1. Google AdSense 승인을 위한 SEO 블로그 구축 ✅
**커밋**: `20c310a` - "Add SEO-optimized blog pages and privacy policy for AdSense approval"

#### 생성된 페이지 구조
```
src/app/
├── blog/
│   ├── page.tsx                              # 블로그 메인
│   ├── taste-types/
│   │   ├── page.tsx                          # 미각 타입 목록
│   │   └── [type]/page.tsx                   # 미각 타입 상세 (8개 SSG)
│   └── reviews/
│       └── breadenco-real-brownie-cookie/
│           └── page.tsx                      # 제품 리뷰
├── privacy/
│   └── page.tsx                              # 개인정보처리방침
├── sitemap.ts                                # 동적 사이트맵
└── layout.tsx                                # 글로벌 레이아웃 (SEO 메타데이터 강화)
```

#### 데이터 파일
```
src/
├── data/
│   └── personality-content.ts                # 8가지 미각 타입 상세 콘텐츠
└── components/
    └── layout/
        └── Footer.tsx                        # Footer 컴포넌트 (개인정보처리방침 링크)
```

#### SEO 파일
```
public/
└── robots.txt                                # 검색엔진 크롤러 허용
```

#### 8가지 미각 타입 (PersonalityGroup)
1. `SWEET_LOVER` - 달콤 애호가
2. `SALTY_MASTER` - 짭짤 마스터
3. `SPICY_ADVENTURER` - 매운맛 모험가
4. `EXOTIC_EXPLORER` - 이국적 탐험가
5. `MUKJJANG_LEADER` - 먹짱 리더
6. `SOFT_HEALER` - 부드러운 힐러
7. `INTENSE_TASTER` - 강렬한 미식가
8. `WORLD_FOODIE` - 세계 미식가

#### SEO 최적화 요소
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph & Twitter Card
- ✅ Schema.org 구조화 데이터 (Article, CollectionPage, Review)
- ✅ robots.txt
- ✅ sitemap.xml (동적 생성, 총 25개 페이지)
- ✅ 내부 링크 구조
- ✅ 각 페이지 500+ 단어 콘텐츠

### 2. 트위터 게시물을 블로그 포스트로 변환 ✅
**커밋**:
- `8dd9139` - 초기 긴 버전 생성
- `59f0ca9` - 트윗 원문 그대로 간결하게 수정

#### 트위터 계정
- **계정**: @mukjjang_power
- **트윗 URL**: https://x.com/mukjjang_power/status/1985356106324148618

#### 변환된 리뷰
- **제품**: 브레댄코 리얼 브라우니 쿠키
- **평점**: 3.7/5
- **내용**: 트윗 원문 4줄 그대로 사용
```
신라명과 브랜드라서 믿고 사먹음. 초코맛이 싸구려맛이 아니고 진함
브라우니 바깥쪽이 두껍지 않아서 한입만 베어물어도 초코맛이 가득함
당류도 개당 6% 정도라 이정도면 괜찮다고 생각
신라명과 브라우니랑 같은거니 할인하는걸로 구매하시길
```

## 현재 사이트 구조 (총 25개 페이지)

### 정적 페이지
1. `/` - 홈
2. `/taste-test` - 미각 테스트
3. `/products` - 제품 탐색
4. `/recommendations` - 맞춤 추천
5. `/blog` - 블로그 메인
6. `/blog/taste-types` - 미각 타입 목록
7. `/privacy` - 개인정보처리방침

### 동적/SSG 페이지
8-15. `/blog/taste-types/[type]` - 8개 미각 타입 상세 (SSG)
16. `/blog/reviews/breadenco-real-brownie-cookie` - 제품 리뷰

### API 라우트
- `/api/taste-test/questions` - 미각 테스트 질문
- `/api/taste-test/submit` - 미각 테스트 제출
- `/api/mukjjang-test/questions`
- `/api/mukjjang-test/submit`

### 기타
- `/sitemap.xml` - 사이트맵
- `/products/[id]` - 제품 상세 (동적)

## 미각 테스트 로직

### 질문 데이터
- **위치**: `src/data/taste-test-questions.ts`
- **총 질문 수**: 10개
- **커밋**: `6ed9f5c` (2025-09-11)

### 결과 계산 로직
- **위치**: `src/app/api/taste-test/submit/route.ts`
- **측정 항목**: 5가지 TraitCategory
  - SWEET (달콤) - 최대 4점
  - SALTY (짭짤) - 최대 6점
  - SPICY (매운맛) - 최대 6점
  - EXOTIC (이국적) - 최대 5점
  - POWER (먹짱력) - 최대 6점

### 성향 판정 알고리즘
1. 각 trait별 점수 계산
2. 0-1 사이로 정규화
3. 먹짱력 제외한 4가지 trait 정렬
4. 복합 성향 체크 (두 번째 trait >= 0.7)
5. 먹짱 리더 체크 (먹짱력 raw score >= 5)

## Git 작업 규칙

### ⚠️ 중요한 변경사항
**커밋은 사용자가 명시적으로 요청할 때만 수행**
- 자동 커밋 금지
- 사용자가 "커밋해줘", "올려줘" 등 명시적으로 요청할 때만 커밋

### 커밋 메시지 포맷
```
<Title>

- Bullet point 1
- Bullet point 2

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

## 개발 환경

### 빌드 명령어
```bash
yarn build          # 프로덕션 빌드
yarn dev            # 개발 서버
yarn start          # 프로덕션 서버
```

### 주요 의존성
- Next.js 15.5.2 (Turbopack)
- React 19.1.0
- Prisma 6.15.0
- Tailwind CSS 4
- lucide-react 0.543.0

## AdSense 승인 준비 체크리스트

### 완료된 사항 ✅
- [x] 10개 이상 고품질 페이지 (현재 25개)
- [x] 각 페이지 500+ 단어 콘텐츠
- [x] 개인정보처리방침 페이지
- [x] SEO 최적화 (메타 태그, 구조화 데이터)
- [x] robots.txt & sitemap.xml
- [x] 모바일 반응형
- [x] Cloudflare 인증 완료
- [x] Footer에 개인정보처리방침 링크
- [x] AdSense 관련 쿠키 정책 명시

### 해야 할 사항 📋
- [ ] 2-4주 사이트 운영 및 트래픽 확보
- [ ] Google Search Console 사이트맵 제출
- [ ] 정기적인 콘텐츠 업데이트 (트위터 리뷰 추가)
- [ ] Google AdSense 신청

## 트위터 → 블로그 변환 가이드

### 원칙
- **간결함 유지**: 트윗 원문 그대로 사용
- **SEO는 유지**: Meta tags, Schema.org는 자동 추가
- **최소한의 구조**: 제목, 평점, 내용, 날짜만 표시

### 변환 프로세스
1. 사용자가 트윗 내용 제공
2. `/blog/reviews/[slug]/page.tsx` 생성
3. 트윗 원문 그대로 사용 (4-5줄 정도)
4. SEO 메타데이터 자동 생성
5. Schema.org Review 추가
6. 블로그 메인 페이지 업데이트 (선택)
7. Sitemap 업데이트

### 파일 구조
```typescript
// 간결한 리뷰 페이지 구조
<article>
  <nav>breadcrumb</nav>
  <header>
    <h1>제품명</h1>
    <rating>평점</rating>
  </header>
  <div>
    <p>트윗 원문 그대로</p>
  </div>
  <footer>블로그로 돌아가기</footer>
</article>
```

## 참고 문서
- `SEO_GUIDE.md` - AdSense 승인 가이드
- `src/types/taste-test.ts` - 타입 정의
- `src/data/personality-content.ts` - 미각 타입 콘텐츠

## 다음 작업 예정
1. 추가 트위터 리뷰를 블로그 포스트로 변환
2. 트래픽 모니터링
3. Google Search Console 연동
4. 2-4주 후 AdSense 신청

## 노트
- 모든 페이지는 Static Generation (SSG/SSR)으로 빠른 로딩
- Cloudflare를 통한 도메인 인증으로 Google verification 코드 불필요
- 트윗 내용은 절대 확장하지 말고 원문 그대로 유지
