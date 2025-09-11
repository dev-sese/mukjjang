import { TasteTestQuestion, TraitCategory } from '@/types/taste-test';

export const TASTE_TEST_QUESTIONS: TasteTestQuestion[] = [
  {
    id: '1',
    scenario: '친구와 카페에 갔는데, 어떤 음료를 주문하시겠어요?',
    options: [
      {
        id: '1a',
        text: '달콤한 카라멜 마키아토',
        traits: [
          { category: TraitCategory.SWEET, weight: 3 }
        ]
      },
      {
        id: '1b', 
        text: '진한 아메리카노',
        traits: [
          { category: TraitCategory.BITTER, weight: 3 }
        ]
      },
      {
        id: '1c',
        text: '상큼한 레몬 에이드',
        traits: [
          { category: TraitCategory.SOUR, weight: 3 }
        ]
      }
    ]
  },
  {
    id: '2', 
    scenario: '야식으로 뭔가 매운 걸 먹고 싶어요. 어떤 걸 선택하시겠어요?',
    options: [
      {
        id: '2a',
        text: '불닭볶음면 (극매운맛)',
        traits: [
          { category: TraitCategory.SPICY, weight: 4 }
        ]
      },
      {
        id: '2b',
        text: '떡볶이 (중간 매운맛)', 
        traits: [
          { category: TraitCategory.SPICY, weight: 2 },
          { category: TraitCategory.SWEET, weight: 1 }
        ]
      },
      {
        id: '2c',
        text: '매운 게 부담스러워서 치킨',
        traits: [
          { category: TraitCategory.SALTY, weight: 2 },
          { category: TraitCategory.UMAMI, weight: 1 }
        ]
      }
    ]
  },
  {
    id: '3',
    scenario: '라면을 끓일 때 어떤 스타일을 선호하세요?',
    options: [
      {
        id: '3a',
        text: '국물 많이, 싱겁게',
        traits: [
          { category: TraitCategory.SALTY, weight: 1 }
        ]
      },
      {
        id: '3b',
        text: '국물 적게, 진하고 짭짤하게',
        traits: [
          { category: TraitCategory.SALTY, weight: 4 },
          { category: TraitCategory.UMAMI, weight: 2 }
        ]
      },
      {
        id: '3c',
        text: '계란이나 치즈 추가해서 부드럽게',
        traits: [
          { category: TraitCategory.UMAMI, weight: 3 },
          { category: TraitCategory.TEXTURE_SOFT, weight: 2 }
        ]
      }
    ]
  },
  {
    id: '4',
    scenario: '과자를 고를 때 가장 끌리는 것은?',
    options: [
      {
        id: '4a',
        text: '바삭바삭한 감자칩',
        traits: [
          { category: TraitCategory.SALTY, weight: 3 },
          { category: TraitCategory.TEXTURE_CRISPY, weight: 4 }
        ]
      },
      {
        id: '4b',
        text: '부드러운 초콜릿 쿠키',
        traits: [
          { category: TraitCategory.SWEET, weight: 4 },
          { category: TraitCategory.TEXTURE_SOFT, weight: 3 }
        ]
      },
      {
        id: '4c',
        text: '새콤달콤한 젤리',
        traits: [
          { category: TraitCategory.SWEET, weight: 3 },
          { category: TraitCategory.SOUR, weight: 2 }
        ]
      }
    ]
  },
  {
    id: '5',
    scenario: '치킨을 시킬 때 어떤 맛을 선택하시겠어요?',
    options: [
      {
        id: '5a',
        text: '후라이드 (기본맛)',
        traits: [
          { category: TraitCategory.SALTY, weight: 2 },
          { category: TraitCategory.UMAMI, weight: 2 }
        ]
      },
      {
        id: '5b',
        text: '양념치킨 (달콤한 소스)',
        traits: [
          { category: TraitCategory.SWEET, weight: 3 },
          { category: TraitCategory.SPICY, weight: 1 }
        ]
      },
      {
        id: '5c',
        text: '매운맛 치킨',
        traits: [
          { category: TraitCategory.SPICY, weight: 4 }
        ]
      }
    ]
  },
  {
    id: '6',
    scenario: '아침식사로 무엇을 선택하시겠어요?',
    options: [
      {
        id: '6a',
        text: '달콤한 팬케이크',
        traits: [
          { category: TraitCategory.SWEET, weight: 4 },
          { category: TraitCategory.TEXTURE_SOFT, weight: 2 }
        ]
      },
      {
        id: '6b',
        text: '바삭한 토스트와 계란',
        traits: [
          { category: TraitCategory.TEXTURE_CRISPY, weight: 3 },
          { category: TraitCategory.UMAMI, weight: 2 }
        ]
      },
      {
        id: '6c',
        text: '시원한 요거트와 과일',
        traits: [
          { category: TraitCategory.SOUR, weight: 2 },
          { category: TraitCategory.SWEET, weight: 1 }
        ]
      }
    ]
  },
  {
    id: '7',
    scenario: '피자 토핑으로 무엇을 선택하시겠어요?',
    options: [
      {
        id: '7a',
        text: '치즈만 듬뿍 (마르게리타)',
        traits: [
          { category: TraitCategory.UMAMI, weight: 3 },
          { category: TraitCategory.SALTY, weight: 2 }
        ]
      },
      {
        id: '7b',
        text: '페퍼로니와 살라미',
        traits: [
          { category: TraitCategory.SALTY, weight: 4 },
          { category: TraitCategory.UMAMI, weight: 3 }
        ]
      },
      {
        id: '7c',
        text: '파인애플 하와이안',
        traits: [
          { category: TraitCategory.SWEET, weight: 3 },
          { category: TraitCategory.SOUR, weight: 2 }
        ]
      }
    ]
  },
  {
    id: '8',
    scenario: '아이스크림을 고를 때 어떤 맛을 선호하세요?',
    options: [
      {
        id: '8a',
        text: '진한 초콜릿',
        traits: [
          { category: TraitCategory.SWEET, weight: 3 },
          { category: TraitCategory.BITTER, weight: 1 }
        ]
      },
      {
        id: '8b',
        text: '상큼한 레몬 셔벗',
        traits: [
          { category: TraitCategory.SOUR, weight: 4 }
        ]
      },
      {
        id: '8c',
        text: '부드러운 바닐라',
        traits: [
          { category: TraitCategory.SWEET, weight: 2 },
          { category: TraitCategory.TEXTURE_SOFT, weight: 3 }
        ]
      }
    ]
  },
  {
    id: '9',
    scenario: '김치찌개를 먹을 때 어떤 스타일을 좋아하세요?',
    options: [
      {
        id: '9a',
        text: '신김치로 시큼하고 매콤하게',
        traits: [
          { category: TraitCategory.SOUR, weight: 3 },
          { category: TraitCategory.SPICY, weight: 3 }
        ]
      },
      {
        id: '9b',
        text: '돼지고기 넣어서 구수하게',
        traits: [
          { category: TraitCategory.UMAMI, weight: 4 },
          { category: TraitCategory.SALTY, weight: 2 }
        ]
      },
      {
        id: '9c',
        text: '두부 넣어서 부드럽게',
        traits: [
          { category: TraitCategory.TEXTURE_SOFT, weight: 3 },
          { category: TraitCategory.UMAMI, weight: 2 }
        ]
      }
    ]
  },
  {
    id: '10',
    scenario: '샐러드 드레싱으로 무엇을 선택하시겠어요?',
    options: [
      {
        id: '10a',
        text: '상큼한 발사믹 식초',
        traits: [
          { category: TraitCategory.SOUR, weight: 4 }
        ]
      },
      {
        id: '10b',
        text: '고소한 참깨 드레싱',
        traits: [
          { category: TraitCategory.UMAMI, weight: 3 },
          { category: TraitCategory.SWEET, weight: 1 }
        ]
      },
      {
        id: '10c',
        text: '크리미한 시저 드레싱',
        traits: [
          { category: TraitCategory.SALTY, weight: 3 },
          { category: TraitCategory.TEXTURE_SOFT, weight: 2 }
        ]
      }
    ]
  },
  {
    id: '11',
    scenario: '술안주로 무엇을 선택하시겠어요?',
    options: [
      {
        id: '11a',
        text: '짭짤한 육포나 오징어',
        traits: [
          { category: TraitCategory.SALTY, weight: 4 },
          { category: TraitCategory.UMAMI, weight: 2 }
        ]
      },
      {
        id: '11b',
        text: '바삭한 견과류',
        traits: [
          { category: TraitCategory.TEXTURE_CRISPY, weight: 4 },
          { category: TraitCategory.UMAMI, weight: 2 }
        ]
      },
      {
        id: '11c',
        text: '달콤한 과일 안주',
        traits: [
          { category: TraitCategory.SWEET, weight: 3 },
          { category: TraitCategory.SOUR, weight: 1 }
        ]
      }
    ]
  },
  {
    id: '12',
    scenario: '국물 요리 중에 가장 좋아하는 것은?',
    options: [
      {
        id: '12a',
        text: '진한 사골 곰탕',
        traits: [
          { category: TraitCategory.UMAMI, weight: 4 },
          { category: TraitCategory.SALTY, weight: 2 }
        ]
      },
      {
        id: '12b',
        text: '시원한 냉면 육수',
        traits: [
          { category: TraitCategory.SOUR, weight: 2 },
          { category: TraitCategory.SWEET, weight: 1 }
        ]
      },
      {
        id: '12c',
        text: '얼큰한 해물탕',
        traits: [
          { category: TraitCategory.SPICY, weight: 3 },
          { category: TraitCategory.UMAMI, weight: 3 }
        ]
      }
    ]
  },
  {
    id: '13',
    scenario: '디저트로 무엇을 선택하시겠어요?',
    options: [
      {
        id: '13a',
        text: '진한 티라미수',
        traits: [
          { category: TraitCategory.SWEET, weight: 3 },
          { category: TraitCategory.BITTER, weight: 2 },
          { category: TraitCategory.TEXTURE_SOFT, weight: 3 }
        ]
      },
      {
        id: '13b',
        text: '바삭한 마카롱',
        traits: [
          { category: TraitCategory.SWEET, weight: 4 },
          { category: TraitCategory.TEXTURE_CRISPY, weight: 3 }
        ]
      },
      {
        id: '13c',
        text: '새콤한 레몬 타르트',
        traits: [
          { category: TraitCategory.SOUR, weight: 4 },
          { category: TraitCategory.SWEET, weight: 2 }
        ]
      }
    ]
  },
  {
    id: '14',
    scenario: '한식 반찬 중에 가장 좋아하는 것은?',
    options: [
      {
        id: '14a',
        text: '아삭한 무생채',
        traits: [
          { category: TraitCategory.TEXTURE_CRISPY, weight: 3 },
          { category: TraitCategory.SOUR, weight: 2 }
        ]
      },
      {
        id: '14b',
        text: '부드러운 계란찜',
        traits: [
          { category: TraitCategory.TEXTURE_SOFT, weight: 4 },
          { category: TraitCategory.UMAMI, weight: 2 }
        ]
      },
      {
        id: '14c',
        text: '짭짤한 멸치볶음',
        traits: [
          { category: TraitCategory.SALTY, weight: 4 },
          { category: TraitCategory.UMAMI, weight: 3 }
        ]
      }
    ]
  },
  {
    id: '15',
    scenario: '마지막 질문! 새로운 음식을 시도할 때 어떤 기준으로 선택하세요?',
    options: [
      {
        id: '15a',
        text: '익숙하고 안전한 맛 위주',
        traits: [
          { category: TraitCategory.SWEET, weight: 1 },
          { category: TraitCategory.SALTY, weight: 1 }
        ]
      },
      {
        id: '15b',
        text: '독특하고 자극적인 맛',
        traits: [
          { category: TraitCategory.SPICY, weight: 2 },
          { category: TraitCategory.SOUR, weight: 2 },
          { category: TraitCategory.BITTER, weight: 1 }
        ]
      },
      {
        id: '15c',
        text: '균형 잡힌 다양한 맛',
        traits: [
          { category: TraitCategory.SWEET, weight: 1 },
          { category: TraitCategory.SALTY, weight: 1 },
          { category: TraitCategory.UMAMI, weight: 1 }
        ]
      }
    ]
  }
];