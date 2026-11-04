export const RESUME = {
  name: '이태균',
  title: '백엔드 개발자',
  experienceLabel: '3년차',
  summary:
    'Java/Spring 기반 B2B 플랫폼에서 PG 결제 정합성, 물류·생산 시스템 연동, 환자 공정 V2 전환을 담당해 왔습니다. 외부 시스템 상태와 내부 업무 흐름이 어긋나지 않도록 데이터와 도메인 경계를 설계하고 검증합니다.',
  resumeSummary:
    'PG 결제 정합성, 외부 시스템 연동, 환자 공정 모델 전환을 수행해 온 3년차 백엔드 개발자입니다. Java/Spring으로 상태 전이와 동시성, DB 변경을 구현하고 실패 시나리오까지 검증합니다.',
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
      title: '외부 시스템 연동',
      description: '파트너별 API와 상태 규격을 ODS 업무 흐름에 맞게 연결합니다.',
      detail: 'PortOne · GoodsFlow · MES',
    },
    {
      title: '도메인 모델링',
      description: '공정별 생명주기와 API·데이터 경계를 분리합니다.',
      detail: 'DPAT · Retainer · Refinement · V2',
    },
  ],
  projects: [
    {
      company: '위데이터랩',
      period: '2026.03 - 2026.05',
      title: 'PortOne 국내외 결제 통합 및 정합성 강화',
      context: '위데이터랩 · ODS',
      situation:
        'PG 결제 성공 후 ODS 저장이 실패하거나 중복 웹훅이 동시에 처리되면 외부 결제와 내부 주문 상태가 어긋날 수 있었습니다.',
      task:
        'EasyPay·PayPal을 결제 수명 주기에 통합하고, 중복 이벤트와 PG 성공 후 내부 실패를 안전하게 처리하는 역할을 맡았습니다.',
      highlights: [
        'EasyPay V1 클라이언트와 PayPal V2 연동을 결제 도메인에서 분리해 PG별 요청·응답 차이를 매핑 계층에 격리했습니다.',
        '외부 PG 호출과 DB 트랜잭션을 분리하고 금액·통화·결제 소유권 검증 및 실패 시 보상 취소를 구현했습니다.',
        'PayPal 웹훅 서명 검증, EasyPay·PayPal 이벤트 멱등성, 비관적 락과 상태 재검증으로 중복·동시 처리를 방어하고 MDC 추적 정보를 전파했습니다.',
      ],
      result:
        'PG별 API 차이를 매핑 경계에 두고, 외부 결제 성공 후 내부 저장 실패와 중복 이벤트에 대한 명시적인 처리 경로를 마련했습니다.',
      keywords: ['PortOne', 'EasyPay', 'PayPal', 'TransactionTemplate', 'JPA Lock', 'Webhook', 'MDC'],
      href: '/portfolio/#payment-consistency',
    },
    {
      company: '위데이터랩',
      period: '2025.09 - 현재',
      title: 'ODS 외부 시스템 연동 (PG·GoodsFlow·MES)',
      context: '위데이터랩 · ODS',
      situation:
        '결제·출고·생산 상태가 PortOne, GoodsFlow, MES에 나뉘어 있고 시스템별 API와 상태 규격이 달랐습니다.',
      task:
        '세 파트너를 ODS 업무 흐름에 연결하고 외부 상태를 내부 결제·배송·생산 상태에 반영하는 일을 담당했습니다.',
      highlights: [
        'PortOne EasyPay·PayPal을 결제 흐름에 연결하고 PG별 API 계약을 분리했습니다. 결제 검증·멱등성·실패 처리는 별도 결제 정합성 사례로 정리했습니다.',
        'GoodsFlow 출고·송장·추적 API와 웹훅을 연동하고 배송 이력, 주소 스냅샷, 추적 재시도를 구현했습니다.',
        'MES 생산계획과 상태 콜백을 연동하고 쉘 단위 Stage/Step·PairShell 규격을 적용해 생산 상태를 ODS 공정에 반영했습니다.',
      ],
      result:
        '결제·배송·생산 진행 상태를 ODS 운영 흐름에서 이어서 확인할 수 있도록 외부 응답과 콜백의 매핑 경로를 구성했습니다.',
      keywords: ['PortOne', 'GoodsFlow', 'MES', 'WebClient', 'Webhook', 'State Mapping'],
      href: '/portfolio/#external-integrations',
    },
    {
      company: '위데이터랩',
      period: '2025.12 - 2026.10',
      title: 'ODS 공정 모델 V2 전환과 도메인 모듈화',
      context: '위데이터랩 · ODS',
      situation:
        '추가 공정의 상태 흐름이 BASIC 공정과 달랐고 V1·V2 엔티티와 API가 함께 남아 있었습니다.',
      task:
        '추가 공정의 독립된 V2 생명주기를 만들고 도메인 코드를 이전한 뒤 미사용 V1 구조를 정리하는 일을 맡았습니다.',
      highlights: [
        'DPAT·Retainer·Refinement 공정의 요구사항과 상태 흐름을 정리하고 V2 엔티티·API·DB 마이그레이션을 구현했습니다.',
        '접수·보증·치료계획서·쉘 디자인·생산 API에서 공정 유형별 진입 조건과 상태 처리를 분리했습니다.',
        '파일·병원·지역·계약 등 여러 도메인의 경계를 모듈러 모놀리스 패키지로 옮기고 사용하지 않는 V1 API·엔티티·테이블을 정리했습니다.',
      ],
      result:
        'DPAT·Retainer·Refinement의 생명주기를 BASIC과 분리하고, 도메인 경계를 코드 구조에 반영하면서 이전이 끝난 V1 구조를 정리했습니다.',
      keywords: ['Domain Modeling', 'Modular Monolith', 'Spring Boot', 'JPA', 'Flyway'],
      href: '/portfolio/#process-modernization',
    },
    {
      company: '지오아이티',
      period: '2024.04 - 2024.05',
      title: '해양 대기질 데이터 조회 성능 개선',
      context: '지오아이티 · 운영 서비스',
      situation:
        '월평균 12만 건 이상 쌓인 해양 대기질 데이터의 월 단위 조회가 약 460초 걸렸고, 날짜 컬럼에 함수를 적용해 인덱스를 활용하지 못했습니다.',
      task:
        '동일한 조회 범위와 결과를 유지하면서 쿼리 병목을 줄이고 변경 효과를 측정하는 일을 맡았습니다.',
      highlights: [
        '실행 계획에서 Full Table Scan과 날짜 컬럼의 함수 적용으로 인덱스를 활용하지 못하는 원인을 확인했습니다.',
        '날짜 조건과 복합 인덱스 순서를 재설계하고 데이터 가공 책임을 애플리케이션으로 분리해 조회 시간을 99.25% 줄였습니다.',
      ],
      result: '같은 월 범위 조회를 약 460초에서 3.4초로 단축해 99.25% 개선했습니다.',
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
      situation:
        '북마크 피드에서 사용자가 여러 검색 조건을 조합하고 무한 스크롤로 결과를 더 불러와야 했습니다.',
      task:
        '백엔드 파트장으로 조건 조합과 커서 기반 페이지 조회 구조를 설계하고 구현했습니다.',
      highlights: [
        '검색 조건을 독립적인 QueryDSL predicate로 분리해 필요한 조건만 조합하도록 구성했습니다.',
        '정렬 기준과 마지막 조회 값을 커서로 사용해 다음 페이지를 조회하는 API를 구현했습니다.',
      ],
      result: '검색 조건을 독립적으로 조합하고 커서 기반으로 다음 페이지를 조회할 수 있게 했습니다.',
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
