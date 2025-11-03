import { PersonalityGroup } from "@/types/taste-test";

export interface PersonalityContent {
  id: PersonalityGroup;
  title: string;
  shortDescription: string;
  fullDescription: string;
  characteristics: string[];
  recommendedFoods: string[];
  avoidFoods: string[];
  tips: string[];
  matchingPersonalities: PersonalityGroup[];
}

export const PERSONALITY_CONTENTS: Record<PersonalityGroup, PersonalityContent> = {
  [PersonalityGroup.SWEET_LOVER]: {
    id: PersonalityGroup.SWEET_LOVER,
    title: "달콤 애호가",
    shortDescription: "달콤한 맛을 사랑하는 당신, 디저트와 달콤한 음식에 행복을 느끼는 미각 성향입니다.",
    fullDescription: `달콤 애호가는 단맛을 가장 선호하는 미각 성향을 가진 사람들입니다.
    디저트, 과일, 달콤한 음료를 즐기며, 식사 후 디저트는 필수입니다.
    스트레스를 받을 때 초콜릿이나 케이크 같은 달콤한 음식으로 위안을 찾는 경향이 있습니다.
    음식을 선택할 때 단맛이 포함된 메뉴를 자연스럽게 선택하며,
    카페에서도 달콤한 음료를 주문하는 경우가 많습니다.`,
    characteristics: [
      "디저트를 매우 좋아함",
      "달콤한 음료를 선호 (바닐라 라떼, 과일 주스 등)",
      "식사에도 단맛이 가미된 메뉴를 선호",
      "스트레스 해소를 위해 단 음식을 찾음",
      "과일을 간식으로 자주 먹음"
    ],
    recommendedFoods: [
      "초콜릿 케이크",
      "마카롱",
      "과일 타르트",
      "바닐라 아이스크림",
      "불고기 피자",
      "고구마 라떼",
      "허니 브레드",
      "팬케이크"
    ],
    avoidFoods: [
      "매운 음식 (고추, 청양고추)",
      "지나치게 짠 음식",
      "쓴맛이 강한 음식 (커피, 다크 초콜릿)"
    ],
    tips: [
      "균형잡힌 식단을 위해 채소와 단백질 섭취도 신경쓰세요",
      "당 섭취량을 체크하며 건강한 단맛 (과일, 꿀)을 활용하세요",
      "간식 시간을 정해두고 과식을 피하세요",
      "운동 후 단백질과 함께 적당한 당분을 섭취하면 효과적입니다"
    ],
    matchingPersonalities: [
      PersonalityGroup.SOFT_HEALER,
      PersonalityGroup.MUKJJANG_LEADER
    ]
  },

  [PersonalityGroup.SALTY_MASTER]: {
    id: PersonalityGroup.SALTY_MASTER,
    title: "짭짤 마스터",
    shortDescription: "짭짤한 맛의 진정한 마스터, 감칠맛과 짠맛을 즐기는 미각 성향입니다.",
    fullDescription: `짭짤 마스터는 감칠맛과 짠맛을 가장 선호하는 미각 성향을 가진 사람들입니다.
    치킨, 피자, 짜장면 같은 짭짤한 음식을 즐기며,
    간이 잘 맞는 음식을 선호합니다.
    국물 요리나 찌개류를 좋아하고, 밥 한 그릇을 뚝딱 비울 수 있는
    밑반찬의 중요성을 잘 아는 성향입니다.
    야식으로는 치킨이나 라면을 자주 찾습니다.`,
    characteristics: [
      "짭짤한 음식을 매우 선호",
      "국물 요리와 찌개를 좋아함",
      "치킨, 피자 같은 패스트푸드를 즐김",
      "밥과 잘 어울리는 반찬을 선호",
      "간이 약한 음식은 싱겁다고 느낌"
    ],
    recommendedFoods: [
      "치킨 (후라이드, 양념)",
      "콤비네이션 피자",
      "짜장면",
      "김치찌개",
      "국물 라면",
      "바비큐 소스 요리",
      "고등어 구이",
      "멸치 볶음"
    ],
    avoidFoods: [
      "무염 식단",
      "저염 요리",
      "싱거운 샐러드"
    ],
    tips: [
      "나트륨 섭취량에 주의하며 건강한 소금 사용을 고려하세요",
      "채소와 함께 먹어 나트륨 배출을 돕는 칼륨을 섭취하세요",
      "물을 충분히 마시는 습관을 들이세요",
      "천연 조미료 (다시마, 멸치)를 활용하여 감칠맛을 내보세요"
    ],
    matchingPersonalities: [
      PersonalityGroup.INTENSE_TASTER,
      PersonalityGroup.MUKJJANG_LEADER
    ]
  },

  [PersonalityGroup.SPICY_ADVENTURER]: {
    id: PersonalityGroup.SPICY_ADVENTURER,
    title: "매운맛 모험가",
    shortDescription: "매운맛을 즐기는 도전적인 성향, 자극적인 맛에 희열을 느끼는 미각입니다.",
    fullDescription: `매운맛 모험가는 매운 음식을 즐기고 자극적인 맛에 매력을 느끼는 사람들입니다.
    불닭볶음면, 떡볶이, 마라탕 같은 매운 음식을 찾아다니며,
    매운맛의 단계를 높이는 것을 즐깁니다.
    매운 음식을 먹으면서 느끼는 엔도르핀의 쾌감을 좋아하고,
    친구들과 매운맛 도전을 즐기는 성향입니다.
    평범한 음식에도 고춧가루나 청양고추를 추가하는 경우가 많습니다.`,
    characteristics: [
      "매운 음식을 즐겨 찾음",
      "매운맛 단계를 올리는 것을 즐김",
      "고추, 고춧가루를 자주 사용",
      "매운 라면류를 선호",
      "맵지 않은 음식은 심심하다고 느낌"
    ],
    recommendedFoods: [
      "불닭볶음면",
      "떡볶이",
      "마라탕 (매운맛)",
      "닭발",
      "칠리 소스",
      "김치찌개",
      "매운 치킨",
      "청양고추 요리"
    ],
    avoidFoods: [
      "순한맛 음식",
      "크림 파스타",
      "담백한 수프"
    ],
    tips: [
      "위 건강을 위해 우유나 요거트를 함께 섭취하세요",
      "매운 음식 후 위 점막 보호를 위해 양배추나 감자를 먹어보세요",
      "과도한 매운맛은 위염을 유발할 수 있으니 적당히 조절하세요",
      "캡사이신은 신진대사를 높이지만, 매일 먹기보다 간격을 두세요"
    ],
    matchingPersonalities: [
      PersonalityGroup.INTENSE_TASTER,
      PersonalityGroup.MUKJJANG_LEADER
    ]
  },

  [PersonalityGroup.EXOTIC_EXPLORER]: {
    id: PersonalityGroup.EXOTIC_EXPLORER,
    title: "이국적 탐험가",
    shortDescription: "새로운 맛을 탐험하는 모험가, 세계 각국의 음식을 즐기는 미각 성향입니다.",
    fullDescription: `이국적 탐험가는 다양한 나라의 음식을 경험하고 새로운 맛을 탐험하는 것을 즐기는 사람들입니다.
    태국, 멕시코, 인도, 베트남 등 각국의 특색있는 음식을 찾아다니며,
    익숙하지 않은 향신료나 재료에도 거부감이 없습니다.
    여행을 가면 현지 음식을 꼭 먹어보고,
    새로운 레스토랑이나 팝업 스토어를 방문하는 것을 좋아합니다.
    음식을 통해 다양한 문화를 경험하는 것을 중요하게 생각합니다.`,
    characteristics: [
      "세계 각국의 음식에 관심이 많음",
      "새로운 맛과 향신료에 거부감이 없음",
      "맛집 탐방을 즐김",
      "요리 프로그램이나 음식 리뷰를 자주 봄",
      "일반적이지 않은 재료도 시도해봄"
    ],
    recommendedFoods: [
      "태국 똠양꿍",
      "멕시코 타코",
      "인도 커리",
      "베트남 쌀국수",
      "중동 팔라펠",
      "일본 우동",
      "스페인 파에야",
      "모로코 타진"
    ],
    avoidFoods: [
      "극단적으로 익숙한 음식만 먹는 식단"
    ],
    tips: [
      "새로운 음식을 시도할 때 알레르기 여부를 확인하세요",
      "처음 먹는 향신료는 소량부터 시작하세요",
      "현지 음식의 문화적 배경을 함께 공부하면 더 풍부한 경험이 됩니다",
      "친구들과 함께 나눠먹으며 다양한 메뉴를 경험해보세요"
    ],
    matchingPersonalities: [
      PersonalityGroup.WORLD_FOODIE,
      PersonalityGroup.MUKJJANG_LEADER
    ]
  },

  [PersonalityGroup.MUKJJANG_LEADER]: {
    id: PersonalityGroup.MUKJJANG_LEADER,
    title: "먹짱 리더",
    shortDescription: "음식에 대한 열정과 추진력을 가진 진정한 먹짱, 맛집을 찾아 나서는 리더형 미각입니다.",
    fullDescription: `먹짱 리더는 음식에 대한 강한 열정과 추진력을 가진 사람들입니다.
    SNS에서 화제가 된 맛집이나 음식 조합을 바로 시도해보고,
    친구들과 식사 약속을 잡을 때 맛집을 찾아 제안하는 역할을 합니다.
    새로운 레스토랑이 오픈하면 가장 먼저 방문하고,
    음식 리뷰나 평가에도 적극적입니다.
    단순히 음식을 좋아하는 것을 넘어서 음식 문화를 즐기고 공유하는 것을 좋아합니다.`,
    characteristics: [
      "맛집 정보에 매우 민감함",
      "새로운 음식이나 트렌드를 빠르게 시도",
      "친구들에게 맛집을 추천하는 역할",
      "음식 관련 SNS나 블로그를 자주 확인",
      "음식에 대한 결정권을 가지는 편"
    ],
    recommendedFoods: [
      "트렌디한 맛집 메뉴",
      "SNS 화제 음식",
      "시즌 한정 메뉴",
      "퓨전 요리",
      "파인 다이닝",
      "팝업 스토어 메뉴"
    ],
    avoidFoods: [],
    tips: [
      "맛집 탐방도 좋지만 건강한 식습관도 유지하세요",
      "음식 리뷰를 작성하여 다른 사람들과 정보를 공유해보세요",
      "예약이 필요한 맛집은 미리 계획을 세우세요",
      "음식 사진을 찍을 때 다른 손님에게 방해가 되지 않도록 주의하세요"
    ],
    matchingPersonalities: [
      PersonalityGroup.SWEET_LOVER,
      PersonalityGroup.SALTY_MASTER,
      PersonalityGroup.SPICY_ADVENTURER,
      PersonalityGroup.EXOTIC_EXPLORER
    ]
  },

  [PersonalityGroup.SOFT_HEALER]: {
    id: PersonalityGroup.SOFT_HEALER,
    title: "부드러운 힐러",
    shortDescription: "달콤하고 부드러운 음식으로 마음을 치유하는 성향, 편안한 맛을 추구합니다.",
    fullDescription: `부드러운 힐러는 달콤하고 부드러운 음식을 통해 심리적 안정과 위안을 얻는 사람들입니다.
    자극적이지 않은 맛을 선호하며, 디저트나 달콤한 음료로 스트레스를 해소합니다.
    따뜻한 수프, 크림 파스타, 부드러운 빵 같은 편안한 음식을 좋아하고,
    음식을 통해 감성적인 만족을 추구하는 성향입니다.
    베이킹이나 디저트 만들기를 취미로 가지는 경우도 많습니다.`,
    characteristics: [
      "부드럽고 달콤한 음식을 선호",
      "자극적인 맛(매운맛, 짠맛)을 피함",
      "디저트와 베이커리를 매우 좋아함",
      "따뜻한 음료를 즐김",
      "음식을 통한 감성적 만족을 중요시"
    ],
    recommendedFoods: [
      "크림 파스타",
      "치즈케이크",
      "부드러운 빵",
      "따뜻한 수프",
      "밀크티",
      "푸딩",
      "마시멜로",
      "커스터드 크림"
    ],
    avoidFoods: [
      "매운 음식",
      "지나치게 짠 음식",
      "자극적인 향신료가 강한 음식"
    ],
    tips: [
      "달콤한 음식 섭취 시 당 섭취량을 체크하세요",
      "홈메이드 디저트로 설탕양을 조절해보세요",
      "과일로 자연스러운 단맛을 즐기는 것도 좋습니다",
      "따뜻한 차와 함께 작은 디저트를 즐기는 시간을 가져보세요"
    ],
    matchingPersonalities: [
      PersonalityGroup.SWEET_LOVER
    ]
  },

  [PersonalityGroup.INTENSE_TASTER]: {
    id: PersonalityGroup.INTENSE_TASTER,
    title: "강렬한 미식가",
    shortDescription: "짜고 매운 강렬한 맛을 즐기는 미식가, 자극적인 맛의 조화를 추구합니다.",
    fullDescription: `강렬한 미식가는 짠맛과 매운맛이 조화를 이룬 자극적인 음식을 선호하는 사람들입니다.
    닭발, 마라탕, 곱창 같은 강렬한 맛의 음식을 즐기며,
    맛의 강도가 높은 음식에서 만족감을 느낍니다.
    야식으로 매운 치킨이나 떡볶이를 자주 찾고,
    맥주나 소주와 잘 어울리는 안주를 좋아합니다.
    평범한 음식에는 쉽게 질리는 경향이 있습니다.`,
    characteristics: [
      "짜고 매운 음식을 매우 선호",
      "자극적인 맛에 끌림",
      "야식을 자주 먹음",
      "술안주로 강한 맛의 음식을 선호",
      "순한맛은 심심하게 느낌"
    ],
    recommendedFoods: [
      "닭발",
      "마라탕",
      "곱창",
      "매운 떡볶이",
      "김치찌개",
      "매운 치킨",
      "불족발",
      "제육볶음"
    ],
    avoidFoods: [
      "순한맛 요리",
      "담백한 음식",
      "저염 식단"
    ],
    tips: [
      "위 건강을 위해 속 쓰림 방지 음식을 함께 섭취하세요",
      "나트륨과 캡사이신 과다 섭취에 주의하세요",
      "물을 충분히 마시고, 채소를 함께 먹어 균형을 맞추세요",
      "강렬한 맛 후에는 위를 쉬게 하는 시간을 가지세요"
    ],
    matchingPersonalities: [
      PersonalityGroup.SALTY_MASTER,
      PersonalityGroup.SPICY_ADVENTURER
    ]
  },

  [PersonalityGroup.WORLD_FOODIE]: {
    id: PersonalityGroup.WORLD_FOODIE,
    title: "세계 미식가",
    shortDescription: "세계 각국의 음식을 깊이있게 탐구하는 미식가, 글로벌한 미각을 가졌습니다.",
    fullDescription: `세계 미식가는 다양한 국가의 음식을 깊이있게 탐구하고 즐기는 사람들입니다.
    단순히 새로운 음식을 시도하는 것을 넘어, 각 나라의 음식 문화와 역사에 관심이 많습니다.
    정통 레시피를 따라 직접 요리해보기도 하고,
    현지 식재료를 구매하여 집에서 세계 각국의 요리를 재현합니다.
    여행의 주요 목적 중 하나가 현지 음식을 경험하는 것이며,
    음식 다큐멘터리나 요리책을 즐겨 봅니다.`,
    characteristics: [
      "세계 음식 문화에 깊은 관심",
      "다양한 향신료와 식재료에 익숙함",
      "직접 요리하는 것을 즐김",
      "음식 관련 지식이 풍부함",
      "여행과 음식을 연결지어 생각함"
    ],
    recommendedFoods: [
      "각국의 정통 요리",
      "에스닉 푸드",
      "퓨전 요리",
      "현지 식재료 요리",
      "전통 발효 음식",
      "향신료 요리"
    ],
    avoidFoods: [],
    tips: [
      "처음 접하는 식재료는 소량부터 시도하세요",
      "요리 클래스나 쿠킹 스튜디오를 방문해보세요",
      "현지 마켓에서 신선한 식재료를 구매하세요",
      "음식의 문화적 배경을 함께 공부하면 더욱 풍미있는 경험이 됩니다"
    ],
    matchingPersonalities: [
      PersonalityGroup.EXOTIC_EXPLORER,
      PersonalityGroup.MUKJJANG_LEADER
    ]
  }
};
