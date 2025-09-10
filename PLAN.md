# 공산품 리뷰 피쳐 개발 계획

## 개발 목표
draft.md에 명시된 "공산품을 대상으로 한 미각 성향 기반 개인화 추천 시스템" 구현

## 1. 데이터 모델 설계

### Product (공산품)
```typescript
{
  id: string
  name: string           // 제품명
  brand: string          // 브랜드
  category: ProductCategory  // 카테고리 (라면, 과자, 음료 등)
  imageUrl?: string      // 제품 이미지
  description?: string   // 제품 설명
  tasteProfile: TasteProfile  // 맛 프로파일
  createdAt: Date
  updatedAt: Date
}
```

### TasteProfile (맛 프로파일)
```typescript
{
  id: string
  productId: string
  saltiness: number      // 짠맛 (1-5)
  sweetness: number      // 단맛 (1-5)
  spiciness: number      // 매운맛 (1-5)
  texture: TextureType   // 식감 (바삭한, 부드러운, 쫄깃한 등)
  richness: number       // 진한맛 (1-5)
  freshness: number      // 상큼함 (1-5)
}
```

### Review (리뷰)
```typescript
{
  id: string
  userId: string
  productId: string
  rating: number         // 1-5 별점
  content: string        // 리뷰 내용
  tasteTags: string[]    // 맛 태그 ["달콤한", "바삭한", "중독성있는"]
  recommendedFor: TraitCategory[]  // 추천 성향
  createdAt: Date
  updatedAt: Date
}
```

## 2. 핵심 기능 구현

### Phase 1: 기본 데이터 구조
- [ ] 공산품 데이터 모델 정의
- [ ] 맛 프로파일 시스템 구현
- [ ] 기본 시드 데이터 생성 (라면, 과자, 음료 샘플)

### Phase 2: 제품 탐색 기능
- [ ] 공산품 목록 조회 API
- [ ] 카테고리별 필터링
- [ ] 맛 성향별 검색 기능
- [ ] 제품 상세 페이지

### Phase 3: 리뷰 시스템
- [ ] 리뷰 작성 폼 (별점, 내용, 맛 태그)
- [ ] 리뷰 목록 조회
- [ ] 리뷰 통계 (평균 별점, 태그 빈도)

### Phase 4: 개인화 추천
- [ ] 미각 테스트 결과와 제품 매칭 로직
- [ ] "나와 비슷한 입맛 사용자" 추천
- [ ] 성향별 인기 제품 랭킹

## 3. UI/UX 구성

### 페이지 구조
- `/products` - 공산품 탐색 메인
- `/products/[id]` - 제품 상세 및 리뷰
- `/products/category/[category]` - 카테고리별 제품
- `/recommendations` - 개인화 추천 페이지

### 주요 컴포넌트
- ProductCard - 제품 카드
- TasteProfileChart - 맛 프로파일 차트
- ReviewForm - 리뷰 작성 폼
- RecommendationList - 추천 제품 목록

## 4. 기술 스택
- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **State**: 기존 미각 테스트와 연계
- **Data**: JSON 기반 시작, 추후 DB 확장 고려

## 5. 개발 순서 및 커밋 전략
1. 데이터 모델 및 타입 정의 → 커밋
2. 기본 시드 데이터 생성 → 커밋  
3. 제품 목록 API 및 UI → 커밋
4. 제품 상세 페이지 → 커밋
5. 리뷰 시스템 구현 → 커밋
6. 추천 로직 연계 → 커밋

## 6. 성공 지표
- 다양한 공산품 카테고리별 최소 10개 제품 데이터
- 미각 성향별 맞춤 추천 정확도 향상
- 사용자 리뷰 기반 제품 평가 시스템 완성