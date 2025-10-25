import { TasteTestQuestion, TraitCategory } from "@/types/taste-test";

export const TASTE_TEST_QUESTIONS: TasteTestQuestion[] = [
  {
    id: "1",
    scenario: "내가 좋아하는 피자 토핑은?",
    options: [
      {
        id: "1a",
        text: "콤비네이션",
        traits: [{ category: TraitCategory.SALTY, weight: 1 }],
      },
      {
        id: "1b",
        text: "불고기",
        traits: [{ category: TraitCategory.SWEET, weight: 1 }],
      },
      {
        id: "1c",
        text: "감자/고구마",
        traits: [{ category: TraitCategory.SWEET, weight: 1 }],
      },
      {
        id: "1d",
        text: "치즈",
        traits: [{ category: TraitCategory.SALTY, weight: 1 }],
      },
    ],
  },
  {
    id: "2",
    scenario: "야식을 먹는다면 내가 보통 먹는 야식은?",
    options: [
      {
        id: "2a",
        text: "치킨",
        traits: [{ category: TraitCategory.SALTY, weight: 1 }],
      },
      {
        id: "2b",
        text: "닭발/마라/곱창",
        traits: [
          { category: TraitCategory.SPICY, weight: 1 },
          { category: TraitCategory.SALTY, weight: 1 },
        ],
      },
      {
        id: "2c",
        text: "피자/햄버거",
        traits: [{ category: TraitCategory.SALTY, weight: 1 }],
      },
      {
        id: "2d",
        text: "회/ 초밥",
        traits: [{ category: TraitCategory.SALTY, weight: 0 }],
      },
    ],
  },
  {
    id: "3",
    scenario: "내가 보통 사먹는 아이스크림은?",
    options: [
      {
        id: "3a",
        text: "초코맛",
        traits: [{ category: TraitCategory.SWEET, weight: 1 }],
      },
      {
        id: "3b",
        text: "바닐라맛",
        traits: [{ category: TraitCategory.SWEET, weight: 4 }],
      },
      {
        id: "3c",
        text: "샤베트/과일맛",
        traits: [{ category: TraitCategory.SWEET, weight: 0 }],
      },
      {
        id: "3d",
        text: "팥/흑임자맛",
        traits: [{ category: TraitCategory.SWEET, weight: 0 }],
      },
    ],
  },
  {
    id: "4",
    scenario: "샐러드나 샌드위치에 뿌릴 수 있는 소스를 딱 한개만 고른다면?",
    options: [
      {
        id: "4a",
        text: "스위트 어니언",
        traits: [{ category: TraitCategory.SWEET, weight: 1 }],
      },
      {
        id: "4b",
        text: "바베큐",
        traits: [{ category: TraitCategory.SALTY, weight: 1 }],
      },
      {
        id: "4c",
        text: "칠리",
        traits: [{ category: TraitCategory.SPICY, weight: 1 }],
      },
      {
        id: "4d",
        text: "후추",
        traits: [{ category: TraitCategory.SALTY, weight: 0 }],
      },
    ],
  },
  {
    id: "5",
    scenario: "마라탕 먹을 때 내가 주로 주문하는 단게는?",
    options: [
      {
        id: "5a",
        text: "아예 안맵게. 마라0, 맵기0",
        traits: [{ category: TraitCategory.SALTY, weight: 0 }],
      },
      {
        id: "5b",
        text: "적당히 맵고 마라맛 있게. 마라 2, 맵기2",
        traits: [
          { category: TraitCategory.SALTY, weight: 1 },
          { category: TraitCategory.SPICY, weight: 1 },
          { category: TraitCategory.EXOTIC, weight: 1 },
        ],
      },
      {
        id: "5c",
        text: "최고로 맵고 얼얼하게. 마라 max, 맵기 max",
        traits: [
          { category: TraitCategory.SALTY, weight: 2 },
          { category: TraitCategory.SPICY, weight: 2 },
          { category: TraitCategory.EXOTIC, weight: 2 },
        ],
      },
      {
        id: "5d",
        text: "마라탕 무슨 맛으로 먹는건지 모르겠다",
        traits: [{ category: TraitCategory.SALTY, weight: 0 }],
      },
    ],
  },
  {
    id: "6",
    scenario: "이국적인 음식 메뉴를 먹자고 했을 때 내가 가장 먹고 싶은 메뉴는?",
    options: [
      {
        id: "6a",
        text: "태국 똠양꿍",
        traits: [{ category: TraitCategory.EXOTIC, weight: 2 }],
      },
      {
        id: "6b",
        text: "멕시코 타코",
        traits: [{ category: TraitCategory.EXOTIC, weight: 1 }],
      },
      {
        id: "6c",
        text: "인도 커리",
        traits: [{ category: TraitCategory.EXOTIC, weight: 1 }],
      },
      {
        id: "6d",
        text: "베트남 쌀국수",
        traits: [{ category: TraitCategory.EXOTIC, weight: 0 }],
      },
    ],
  },
  {
    id: "7",
    scenario: "카페에서 음료를 주문할 때 내가 보통 마시는 음료는?",
    options: [
      {
        id: "7a",
        text: "아메리카노/라떼",
        traits: [{ category: TraitCategory.SWEET, weight: 0 }],
      },
      {
        id: "7b",
        text: "바닐라 라떼/마키야또",
        traits: [{ category: TraitCategory.SWEET, weight: 1 }],
      },
      {
        id: "7c",
        text: "고구마라떼/과일주스",
        traits: [{ category: TraitCategory.SWEET, weight: 1 }],
      },
      {
        id: "7d",
        text: "말차라떼/홍차",
        traits: [{ category: TraitCategory.SWEET, weight: 0 }],
      },
    ],
  },
  {
    id: "8",
    scenario: "내가 주로 먹는 라면 종류는?",
    options: [
      {
        id: "8a",
        text: "진라면/신라면 등 국물라면",
        traits: [{ category: TraitCategory.SALTY, weight: 1 }],
      },
      {
        id: "8b",
        text: "불닭/틈새라면 등 매운라면",
        traits: [
          { category: TraitCategory.SALTY, weight: 1 },
          { category: TraitCategory.SPICY, weight: 2 },
        ],
      },
      {
        id: "8c",
        text: "사골곰탕/튀김우동 등 마일드라면",
        traits: [{ category: TraitCategory.SALTY, weight: 0 }],
      },
      {
        id: "8d",
        text: "쌀국수/우육면 등 외국라면",
        traits: [{ category: TraitCategory.EXOTIC, weight: 1 }],
      },
    ],
  },
  {
    id: "9",
    scenario: "SNS에서 맛있다고 난리난 맛조합을 발견했을 때 나는?",
    options: [
      {
        id: "9a",
        text: "당장 해먹어보거나 최대한 빨리 먹어본다",
        traits: [{ category: TraitCategory.POWER, weight: 3 }],
      },
      {
        id: "9b",
        text: "저장했다가 언젠가는 먹어본다",
        traits: [{ category: TraitCategory.POWER, weight: 2 }],
      },
      {
        id: "9c",
        text: "누가 해주면 먹어볼 의향은 있다",
        traits: [{ category: TraitCategory.POWER, weight: 1 }],
      },
      {
        id: "9d",
        text: "크게 관심은 없다",
        traits: [{ category: TraitCategory.POWER, weight: 0 }],
      },
    ],
  },
  {
    id: "10",
    scenario: "같이 밥먹을 일이 생겼을 때 내 포지션은?",
    options: [
      {
        id: "10a",
        text: "대충 근처 맛집 1~2개 알아본다",
        traits: [{ category: TraitCategory.POWER, weight: 2 }],
      },
      {
        id: "10b",
        text: "뭐든 좋다",
        traits: [{ category: TraitCategory.POWER, weight: 0 }],
      },
      {
        id: "10c",
        text: "찾진 않지만 결정권은 나에게 있다",
        traits: [{ category: TraitCategory.POWER, weight: 1 }],
      },
      {
        id: "10d",
        text: "최대한 맛있는 집을 찾아 거기로 간다",
        traits: [{ category: TraitCategory.POWER, weight: 3 }],
      },
    ],
  },
];
