# 구글 애드센스 승인을 위한 SEO 최적화 가이드

## 생성된 콘텐츠 페이지

### 1. 블로그 메인 페이지
- URL: `/blog`
- 설명: 블로그 카테고리 목록 페이지

### 2. 미각 타입 인덱스 페이지
- URL: `/blog/taste-types`
- 설명: 8가지 미각 타입 전체 목록과 소개

### 3. 미각 타입별 상세 페이지 (총 8개)
각 미각 타입에 대한 상세 콘텐츠 페이지가 자동 생성됩니다:

1. `/blog/taste-types/sweet_lover` - 달콤 애호가
2. `/blog/taste-types/salty_master` - 짭짤 마스터
3. `/blog/taste-types/spicy_adventurer` - 매운맛 모험가
4. `/blog/taste-types/exotic_explorer` - 이국적 탐험가
5. `/blog/taste-types/mukjjang_leader` - 먹짱 리더
6. `/blog/taste-types/soft_healer` - 부드러운 힐러
7. `/blog/taste-types/intense_taster` - 강렬한 미식가
8. `/blog/taste-types/world_foodie` - 세계 미식가

## SEO 최적화 적용 항목

### 1. 메타 태그 최적화
- ✅ Title 태그: 각 페이지별 고유한 제목
- ✅ Description: 상세한 페이지 설명 (150-160자)
- ✅ Keywords: 관련 키워드 포함
- ✅ Canonical URL: 중복 콘텐츠 방지
- ✅ Author 정보

### 2. Open Graph 태그
- ✅ og:title
- ✅ og:description
- ✅ og:url
- ✅ og:type
- ✅ og:locale (ko_KR)
- ✅ og:site_name

### 3. Twitter Card 태그
- ✅ twitter:card
- ✅ twitter:title
- ✅ twitter:description
- ✅ twitter:image

### 4. 구조화된 데이터 (Schema.org)
- ✅ Article schema (개별 미각 타입 페이지)
- ✅ CollectionPage schema (미각 타입 목록 페이지)
- ✅ ItemList schema
- ✅ Organization schema

### 5. 검색엔진 크롤링 최적화
- ✅ robots.txt 파일 생성
- ✅ sitemap.xml 자동 생성
- ✅ 구글봇 허용 설정
- ✅ Googlebot 최적화 설정

### 6. 콘텐츠 품질
- ✅ 각 페이지당 500+ 단어의 고유 콘텐츠
- ✅ 명확한 헤딩 구조 (h1, h2, h3)
- ✅ 내부 링크 연결
- ✅ 관련 콘텐츠 추천
- ✅ FAQ 섹션 포함

### 7. 사용자 경험
- ✅ 모바일 반응형 디자인
- ✅ 명확한 네비게이션
- ✅ 빠른 페이지 로딩 (Static Generation)
- ✅ 읽기 쉬운 폰트 및 레이아웃

## 애드센스 승인 전 체크리스트

### 필수 설정 사항

1. **도메인 설정**
   - [ ] 실제 도메인 연결 (mukjjang.com)
   - [ ] HTTPS 설정

2. **Google Search Console 설정**
   ```
   1. Google Search Console 접속
   2. 도메인 추가
   3. DNS 또는 파일 업로드로 소유권 확인
   4. sitemap.xml 제출 (https://mukjjang.com/sitemap.xml)
   ```

   layout.tsx의 54번째 줄에서 verification 코드를 실제 코드로 교체하세요:
   ```typescript
   verification: {
     google: 'your-actual-google-verification-code',
   }
   ```

3. **필수 페이지 추가**
   - [ ] 개인정보처리방침 페이지
   - [ ] 이용약관 페이지
   - [ ] 연락처/회사 정보 페이지

4. **콘텐츠 요구사항**
   - ✅ 10개 이상의 고품질 페이지 (현재 11개)
   - ✅ 각 페이지당 500+ 단어
   - ✅ 고유한 콘텐츠 (중복 없음)
   - ✅ 정기적인 콘텐츠 업데이트 계획

5. **트래픽 확보**
   - [ ] 최소 2-4주간의 사이트 운영
   - [ ] 일일 방문자 수 확보
   - [ ] SNS, 블로그 등을 통한 자연스러운 유입

## 추가 최적화 권장사항

### 1. 이미지 최적화
각 미각 타입별 OG 이미지를 추가하세요:
```
/public/og-images/taste-types/
  ├── sweet_lover.png (1200x630)
  ├── salty_master.png (1200x630)
  ├── spicy_adventurer.png (1200x630)
  └── ... (나머지 타입들)
```

### 2. 성능 최적화
- [ ] 이미지 최적화 (WebP 포맷)
- [ ] Core Web Vitals 개선
- [ ] 캐싱 전략 구성

### 3. 분석 도구 설정
- [ ] Google Analytics 설치
- [ ] Google Tag Manager 설치
- [ ] Search Console 연동

### 4. 콘텐츠 확장
- [ ] 블로그 포스트 추가 (주간 1-2개)
- [ ] 음식 관련 가이드 작성
- [ ] 계절별 음식 추천 콘텐츠

## 빌드 및 배포

### 로컬 테스트
```bash
yarn build
yarn start
```

### 프로덕션 배포 후
1. robots.txt 확인: `https://mukjjang.com/robots.txt`
2. sitemap.xml 확인: `https://mukjjang.com/sitemap.xml`
3. 구조화된 데이터 테스트: [Google Rich Results Test](https://search.google.com/test/rich-results)
4. 모바일 친화성 테스트: [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 애드센스 신청 절차

1. **준비 완료 확인**
   - 모든 체크리스트 항목 완료
   - 최소 2주 이상 사이트 운영
   - 일일 트래픽 확보

2. **Google AdSense 신청**
   ```
   1. https://www.google.com/adsense 접속
   2. 사이트 URL 입력
   3. 계정 정보 입력
   4. 사이트 연결 코드 삽입
   5. 승인 대기 (보통 1-2주)
   ```

3. **승인 후 광고 배치**
   - 블로그 포스트 중간
   - 사이드바
   - 페이지 하단

## 주의사항

1. **콘텐츠 정책 준수**
   - 저작권 침해 금지
   - 성인 콘텐츠 금지
   - 폭력적 콘텐츠 금지
   - 허위 정보 금지

2. **광고 정책 준수**
   - 자신의 광고 클릭 금지
   - 광고 클릭 유도 금지
   - 부적절한 광고 배치 금지

3. **품질 유지**
   - 정기적인 콘텐츠 업데이트
   - 깨진 링크 확인 및 수정
   - 사용자 피드백 반영

## 도움이 되는 리소스

- [Google Search Console](https://search.google.com/search-console)
- [Google AdSense 정책](https://support.google.com/adsense/answer/48182)
- [구조화된 데이터 테스트](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
