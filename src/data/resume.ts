export const RESUME = {
  name: '이태균',
  title: '백엔드 개발자',
  experienceLabel: '3년차',
  summary:
    'Java와 Spring을 중심으로 운영 서비스의 데이터 정합성, 조회 성능, 비동기 처리 문제를 해결해 왔습니다. 기능 구현에 그치지 않고 실패 시 남는 상태와 운영 환경의 제약까지 함께 고려합니다.',
  resumeSummary:
    '결제와 외부 시스템이 맞물리는 서비스에서 데이터 정합성과 실패 복구 흐름을 설계해 온 3년차 백엔드 개발자입니다. Java/Spring으로 트랜잭션·동시성·재시도를 다루고, 운영 데이터를 근거로 병목을 개선합니다.',
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
        '글로벌 치과 교정 플랫폼 ODS의 Java/Spring 백엔드를 개발합니다. 결제·물류·생산 흐름, 환자 공정 도메인과 사용자·관리자 운영 API를 담당했습니다.',
      additionalContributions: [
        {
          title: '관리자·사용자 통합 채팅 API',
          description:
            '채팅방 생성·검색·목록, 메시지 전송·조회, 읽음 처리, 파일 첨부와 권한 검증을 구현하고 뷰어 채팅을 환자 단위로 통합했습니다.',
        },
        {
          title: '콘텐츠·알림 다국어 기반',
          description:
            '언어별 콘텐츠 모델과 언어 선택·대체 규칙을 구현하고 이메일·SMS 알림 및 주요 운영 콘텐츠에 다국어 기준을 적용했습니다.',
        },
        {
          title: '조회·운영 도구 경량화',
          description:
            'JPA 오버페치 경로를 프로젝션 기반 조회로 바꾸고 SXSSFWorkbook 스트리밍, 다국어 헤더와 최대 행 검증을 적용해 공정 현황 엑셀 다운로드를 안정화했습니다.',
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
      title: 'PortOne 국내외 결제 통합 및 정합성 강화',
      context: '위데이터랩 · ODS',
      description:
        'PortOne EasyPay와 PayPal을 연동하고 외부 결제 상태와 ODS 주문·결제 상태가 어긋나지 않도록 결제 수명 주기와 실패 흐름을 재설계했습니다.',
      highlights: [
        'EasyPay V1 클라이언트와 PayPal V2 연동을 결제 도메인에서 분리해 PG별 요청·응답 차이를 매핑 계층에 격리했습니다.',
        '외부 PG 호출과 DB 트랜잭션을 분리하고 금액·통화·결제 소유권 검증 및 실패 시 보상 취소를 구현했습니다.',
        'PayPal 웹훅 서명 검증, EasyPay·PayPal 이벤트 멱등성, 비관적 락과 상태 재검증으로 중복·동시 처리를 방어하고 MDC 추적 정보를 전파했습니다.',
      ],
      keywords: ['PortOne', 'EasyPay', 'PayPal', 'TransactionTemplate', 'JPA Lock', 'Webhook', 'MDC'],
      href: '/portfolio/#payment-consistency',
    },
    {
      company: '위데이터랩',
      period: '2025.09 - 현재',
      title: 'ODS 외부 시스템 연동 (PG·GoodsFlow·MES)',
      context: '위데이터랩 · ODS',
      description:
        'PortOne, GoodsFlow, MES를 ODS의 결제·배송·생산 흐름에 연결하고 시스템별 API와 상태 규격을 내부 도메인에 맞게 매핑했습니다.',
      highlights: [
        'PortOne EasyPay·PayPal을 결제 흐름에 연결하고 PG별 API 계약을 분리했습니다. 결제 검증·멱등성·실패 처리는 별도 결제 정합성 사례로 정리했습니다.',
        'GoodsFlow 출고·송장·추적 API와 웹훅을 연동하고 배송 이력, 주소 스냅샷, 추적 재시도를 구현했습니다.',
        'MES 생산계획과 상태 콜백을 연동하고 쉘 단위 Stage/Step·PairShell 규격을 적용해 생산 상태를 ODS 공정에 반영했습니다.',
      ],
      keywords: ['PortOne', 'GoodsFlow', 'MES', 'WebClient', 'Webhook', 'State Mapping'],
      href: '/portfolio/#external-integrations',
    },
    {
      company: '위데이터랩',
      period: '2025.12 - 2026.10',
      title: 'ODS 공정 모델 V2 전환과 도메인 모듈화',
      context: '위데이터랩 · ODS',
      description:
        '추가 공정을 독립된 생명주기로 다루도록 모델과 API를 전환하고, 레거시 구조를 정리하면서 여러 백엔드 도메인을 모듈러 모놀리스로 이전했습니다.',
      highlights: [
        'DPAT·Retainer·Refinement 공정의 요구사항과 상태 흐름을 정리하고 V2 엔티티·API·DB 마이그레이션을 구현했습니다.',
        '접수·보증·치료계획서·쉘 디자인·생산 API에서 공정 유형별 진입 조건과 상태 처리를 분리했습니다.',
        '파일·병원·지역·계약 등 여러 도메인의 경계를 모듈러 모놀리스 패키지로 옮기고 사용하지 않는 V1 API·엔티티·테이블을 정리했습니다.',
      ],
      keywords: ['Domain Modeling', 'Modular Monolith', 'Spring Boot', 'JPA', 'Flyway'],
      href: '/portfolio/#process-modernization',
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
      href: '/portfolio/#query-performance',
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
