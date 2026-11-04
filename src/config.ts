export const SITE = {
  title: 'Taegyun.log',
  description: '백엔드 개발자 이태균의 이력서와 포트폴리오, 기술 글과 개발 회고를 담은 개인 사이트입니다.',
  author: '이태균',
  role: 'Backend Engineer',
  url: 'https://taegyun1995.github.io',
  github: 'https://github.com/taegyun1995',
} as const;

export const CATEGORY_NAMES = [
  'QueryDSL',
  '구현/개발',
  '트러블슈팅',
  'CS',
  '개발 회고',
] as const;

export type CategoryName = (typeof CATEGORY_NAMES)[number];

export const RETROSPECTIVE_CATEGORY = '개발 회고' as const;

export const CATEGORIES: ReadonlyArray<{
  name: CategoryName;
  slug: string;
  description: string;
}> = [
  {
    name: 'QueryDSL',
    slug: 'querydsl',
    description: '조회 조건과 쿼리 설계를 다룹니다.',
  },
  {
    name: '구현/개발',
    slug: 'implementation',
    description: '기능을 설계하고 구현한 과정을 기록합니다.',
  },
  {
    name: '트러블슈팅',
    slug: 'troubleshooting',
    description: '문제의 원인을 찾고 해결한 과정을 남깁니다.',
  },
  {
    name: 'CS',
    slug: 'cs',
    description: '구현의 근거가 되는 컴퓨터 과학을 공부합니다.',
  },
  {
    name: '개발 회고',
    slug: 'retrospective',
    description: '선택과 협업에서 배운 점을 돌아봅니다.',
  },
];

export const TECHNICAL_CATEGORIES = CATEGORIES.filter(
  (category) => category.name !== RETROSPECTIVE_CATEGORY,
);

export function getCategoryMeta(name: CategoryName) {
  return CATEGORIES.find((category) => category.name === name) ?? CATEGORIES[0];
}
