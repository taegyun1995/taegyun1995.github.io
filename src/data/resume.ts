export const RESUME = {
  name: '이태균',
  title: '백엔드 개발자',
  experienceLabel: '3년차',
  summary:
    'Java와 Spring을 중심으로 운영 서비스의 데이터 정합성, 조회 성능, 비동기 처리 문제를 해결해 왔습니다. 기능 구현에 그치지 않고 실패 시 남는 상태와 운영 환경의 제약까지 함께 고려합니다.',
  resumeSummary:
    'Java와 Spring을 중심으로 결제 데이터 정합성, 외부 시스템 연동, 조회 성능 문제를 해결해 온 3년차 백엔드 개발자입니다. 기술을 선택할 때 구현 편의보다 실패 시 남는 상태와 운영 환경의 제약을 함께 고려합니다.',
  contacts: [
    {
      label: 'Email',
      value: 'needle12s@gmail.com',
      href: 'mailto:needle12s@gmail.com',
    },
    {
      label: 'GitHub',
      value: 'github.com/taegyun1995',
      href: 'https://github.com/taegyun1995',
    },
    {
      label: 'Blog',
      value: 'gyunny.tistory.com',
      href: 'https://gyunny.tistory.com/',
    },
  ],
  experiences: [
    {
      company: '위데이터랩',
      organization: '인공지능연구소 AI기술팀',
      role: '선임연구원',
      period: '2025.08 - 현재',
      description:
        '글로벌 치과 교정 플랫폼의 코어 API를 개발하며 결제, 외부 시스템 연동과 주요 도메인 개선을 담당하고 있습니다.',
      additionalContributions: [
        {
          title: '관리자·사용자 채팅 API 구축',
          description:
            '채팅방·메시지 모델을 설계하고 읽음 상태, 파일 첨부, 검색·페이징과 접근 권한을 포함한 API를 구현했습니다.',
        },
        {
          title: '콘텐츠·알림 다국어 기반 구축',
          description:
            '콘텐츠별 번역 모델과 언어 선택 규칙을 구현하고 이메일·SMS 알림에 같은 다국어 기준을 적용했습니다.',
        },
        {
          title: '레거시 정리와 도메인 경계 재구성',
          description:
            '사용하지 않는 API·테이블을 단계적으로 제거하고 주요 도메인을 모듈러 모놀리스 구조로 이전했습니다.',
        },
        {
          title: '조회·엑셀 처리 경량화',
          description:
            'JPA 조회를 프로젝션 중심으로 개선하고 SXSSFWorkbook 기반 공정 현황 다운로드를 안정화했습니다.',
        },
      ],
    },
    {
      company: '지오아이티',
      organization: '서비스사업부',
      role: '팀원',
      period: '2023.11 - 2025.08',
      description:
        'B2B·B2G 운영 서비스의 유지보수와 신규 기능 개발을 담당하며 데이터베이스와 외부 연동 문제를 개선했습니다.',
      additionalContributions: [
        {
          title: '고정 IP 제약 외부 API 연동',
          description:
            '고정 IP 허용 정책에 대응하기 위해 Spring Boot와 Netty 기반 프록시 통신 구조를 구축했습니다.',
        },
        {
          title: '운영 회의록 대시보드 도입',
          description:
            '서비스 개선안과 진행 상태를 기록·공유하는 대시보드를 도입해 협업 과정의 정보 누락을 줄였습니다.',
        },
      ],
    },
  ],
  strengths: [
    {
      title: '데이터 정합성',
      description: '트랜잭션 경계, 동시성 제어, 멱등성을 함께 설계합니다.',
      detail: '결제 검증 · 웹훅 · 상태 전이',
    },
    {
      title: '성능 개선',
      description: '실행 계획과 측정 결과를 기준으로 병목을 좁혀 갑니다.',
      detail: '쿼리 · 인덱스 · 배치 처리',
    },
    {
      title: '운영 안정성',
      description: '실패 범위와 리소스 경합을 줄이는 구조를 선택합니다.',
      detail: '비동기 처리 · 격리 · 복구 흐름',
    },
  ],
  projects: [
    {
      company: '위데이터랩',
      period: '2026.03 - 2026.05',
      title: 'PortOne 기반 국내외 결제 시스템 구축',
      context: '위데이터랩 · ODS',
      description:
        '국내·해외 PG 연동 구조를 통합하고 외부 결제 상태와 내부 DB 상태의 정합성을 보강했습니다.',
      highlights: [
        'PG별 응답을 매핑 계층과 공통 결제 DTO로 분리해 결제 도메인의 외부 API 의존성을 낮췄습니다.',
        'TransactionTemplate로 외부 호출과 DB 트랜잭션을 분리하고 금액·통화 검증과 보상 취소를 구현했습니다.',
        '비관적 락과 결제 상태 재검증으로 검증 API와 중복 웹훅의 동시 처리를 멱등하게 구성했습니다.',
      ],
      keywords: ['TransactionTemplate', 'JPA Lock', 'Webhook', 'Idempotency'],
      href: '/portfolio/#payment-consistency',
    },
    {
      company: '위데이터랩',
      period: '2025.09 - 2026.03',
      title: '물류·생산 외부 시스템 인터페이스 구축',
      context: '위데이터랩 · ODS',
      description:
        '배송·생산 API를 내부 공정 상태와 연결하고 웹훅·재시도를 포함한 양방향 연동 흐름을 구축했습니다.',
      highlights: [
        '외부 시스템별 요청·응답 매핑과 상태 정의를 내부 공정 모델에서 분리했습니다.',
        '배송 추적 웹훅과 조회 재시도, 생산 계획 전송·상태 콜백 API를 구현했습니다.',
        '외부 계약·출고지 정보의 DB 동기화와 비정상 콜백 방어 로직을 구성했습니다.',
      ],
      keywords: ['WebClient', 'Webhook', 'Retry', 'State Mapping'],
      href: '/portfolio/#external-integrations',
    },
    {
      company: '지오아이티',
      period: '2024.04 - 2024.05',
      title: '해양 대기질 데이터 조회 성능 개선',
      context: '지오아이티 · 운영 서비스',
      description:
        '실행 계획과 인덱스를 재설계해 월 단위 조회 시간을 약 460초에서 3.4초로 단축했습니다.',
      highlights: [
        '실행 계획에서 Full Table Scan과 날짜 컬럼의 함수 적용으로 인덱스를 활용하지 못하는 원인을 확인했습니다.',
        '날짜 조건과 복합 인덱스 순서를 재설계하고 데이터 가공 책임을 애플리케이션으로 분리해 조회 시간을 99.25% 줄였습니다.',
      ],
      keywords: ['PostgreSQL', 'Explain Plan', 'Composite Index'],
      href: '/portfolio/#additional-work',
    },
  ],
  personalProjects: [
    {
      title: 'Twincle 북마크 피드 백엔드 개발',
      context: 'Twincle · 개인 프로젝트',
      period: '2023.04 - 2023.10',
      role: '백엔드 파트장',
      description:
        '검색 조건이 조합되는 북마크 피드에 QueryDSL과 커서 기반 페이지네이션을 적용했습니다.',
      highlights: [
        '검색 조건을 독립적인 QueryDSL predicate로 분리해 필요한 조건만 조합하도록 구성했습니다.',
        '정렬 기준과 마지막 조회 값을 커서로 사용해 다음 페이지를 조회하는 API를 구현했습니다.',
      ],
      keywords: ['QueryDSL', 'Cursor Pagination', 'Spring Data JPA'],
      href: '/portfolio/#additional-work',
    },
  ],
  skills: [
    {
      label: 'Backend',
      items: ['Java', 'Spring Boot', 'Spring Data JPA', 'QueryDSL', 'WebClient', 'Flyway'],
    },
    {
      label: 'Database',
      items: ['MySQL', 'MariaDB', 'PostgreSQL'],
    },
    {
      label: 'Test / Library',
      items: ['JUnit', 'Mockito', 'REST Docs', 'Apache POI'],
    },
    {
      label: 'Infra / Delivery',
      items: ['AWS EC2', 'S3', 'Docker', 'GitHub Actions', 'Linux'],
    },
  ],
} as const;
