export const PORTFOLIO = {
  summary:
    '이력서의 핵심 프로젝트를 기준으로 결제 정합성, 외부 시스템 연동, 조회 성능 문제를 해결한 과정을 정리했습니다. 맡았던 기능보다 문제를 어떻게 확인하고 어떤 기준으로 구현했는지에 초점을 두었습니다.',
  cases: [
    {
      id: 'payment-consistency',
      number: '01',
      navLabel: '결제 정합성',
      context: '위데이터랩 · ODS',
      period: '2026.03 - 2026.05',
      title: '국내외 결제 연동과 데이터 정합성 강화',
      summary:
        '결제망마다 다른 응답과 웹훅 규칙을 공통 결제 모델로 격리하고, 외부 결제 상태와 내부 DB 상태가 어긋나지 않도록 실패 흐름을 재설계했습니다.',
      problem:
        '외부에서는 결제가 완료됐지만 내부 처리가 롤백되는 경우와, 검증 API와 중복 웹훅이 같은 주문을 동시에 처리하는 경우를 함께 다뤄야 했습니다.',
      contributions: [
        '결제망별 응답을 매퍼와 공통 결제 DTO 뒤로 격리했습니다.',
        'TransactionTemplate로 DB 작업만 짧게 묶고 외부 API 호출은 트랜잭션 밖으로 분리했습니다.',
        '금액·통화 교차 검증, 보상 취소, 비관적 락과 결제 상태 재확인으로 멱등성을 구성했습니다.',
        'MDC를 요청·비동기 실행·WebClient 구간에 전파하고 주요 실패 시나리오를 테스트로 고정했습니다.',
      ],
      result:
        '결제 제공자가 추가되어도 도메인 처리와의 경계를 유지할 수 있게 됐고, 중복 처리와 외부·내부 상태 불일치를 예방하는 기준을 명확히 만들었습니다.',
      keywords: ['Java', 'Spring Boot', 'TransactionTemplate', 'JPA Lock', 'Webhook', 'MDC'],
    },
    {
      id: 'external-integrations',
      number: '02',
      navLabel: '외부 시스템 연동',
      context: '위데이터랩 · ODS',
      period: '2025.09 - 2026.03',
      title: '물류·생산 외부 시스템 연동',
      summary:
        '주문 이후의 출고·배송·생산 흐름을 외부 시스템과 연결하고, 웹훅과 재시도를 포함한 운영 시나리오를 구성했습니다.',
      problem:
        '외부 시스템별로 API 규격과 상태 정의가 달랐고, 요청 성공만으로는 실제 물류·생산 상태를 확정할 수 없었습니다. 콜백 누락과 일시적 통신 실패도 고려해야 했습니다.',
      contributions: [
        '로컬·운영 환경의 외부 클라이언트를 분리하고 요청·응답 매핑 경계를 정리했습니다.',
        '배송 등록·송장·추적과 생산 계획 전송 API를 도메인 상태 변경과 연결했습니다.',
        '실시간 상태 웹훅, 배송 조회 재시도, 계약·출고지 정보의 DB 동기화를 구현했습니다.',
        '외부 콜백의 비정상 데이터를 방어하고 주요 구간에 추적 로그를 보강했습니다.',
      ],
      result:
        '외부 시스템의 응답과 내부 공정 상태를 직접 결합하지 않고, 재시도·웹훅·동기화 경계를 나눠 운영 중 복구 가능성을 높였습니다.',
      keywords: ['WebClient', 'Webhook', 'Retry', 'State Mapping', 'Integration Test'],
    },
    {
      id: 'query-performance',
      number: '03',
      navLabel: '조회 성능 개선',
      context: '지오아이티 · 운영 서비스',
      period: '2024.04 - 2024.05',
      title: '해양 대기질 데이터 조회 성능 개선',
      summary:
        '월평균 12만 건 이상 누적되는 데이터의 실행 계획과 인덱스를 재설계해 월 단위 조회 시간을 약 460초에서 3.4초로 단축했습니다.',
      problem:
        '5분 간격으로 적재되는 해양 대기질 데이터가 누적되면서 한 달 조회에 약 460초가 걸렸습니다. 요청 처리 시간이 길어 사용자 대기뿐 아니라 서버 스레드와 DB 리소스 점유에도 영향을 주는 상황이었습니다.',
      contributions: [
        '실행 계획을 확인해 Full Table Scan과 날짜 컬럼의 함수 기반 조건을 주요 병목으로 좁혔습니다.',
        '조회 조건에 맞춰 날짜 컬럼을 복합 인덱스의 선두로 재배치하고 범위 검색이 가능하도록 조건을 정리했습니다.',
        'DB에서 반복하던 날짜·표시 가공 책임을 애플리케이션으로 분리해 인덱스 사용을 방해하는 연산을 줄였습니다.',
        '동일한 조회 범위와 데이터 건수를 기준으로 변경 전후 시간을 다시 측정했습니다.',
      ],
      result:
        '월 단위 조회 시간을 약 460초에서 3.4초로 줄여 99.25% 개선했고, 실행 계획과 측정값을 기준으로 쿼리 변경 효과를 확인했습니다.',
      keywords: ['PostgreSQL', 'Explain Plan', 'Composite Index'],
    },
  ],
  additionalWork: [
    {
      context: '위데이터랩 · ODS',
      title: '관리자·사용자 채팅 API 구축',
      description:
        '일반·업무 채팅방을 모델링하고 메시지, 읽음 상태, 파일 첨부, 검색·페이징과 접근 권한을 포함한 API를 구현했습니다.',
      keywords: ['Spring Data JPA', 'QueryDSL', 'REST Docs', 'Authorization'],
    },
    {
      context: '위데이터랩 · ODS',
      title: '복수 공정 도메인 V2 전환',
      description:
        '기본 공정의 조건문으로 확장되던 추가 공정을 전용 모델로 분리하고 진입 조건, 보증, 상태 전이를 API와 테스트로 이전했습니다.',
      keywords: ['Domain Modeling', 'JPA', 'Flyway', 'Integration Test'],
    },
    {
      context: '위데이터랩 · ODS',
      title: '콘텐츠·알림 다국어 기반 구축',
      description:
        '콘텐츠별 번역 모델과 언어 선택 규칙을 구현하고 동일한 기준을 이메일·SMS 알림까지 적용했습니다.',
      keywords: ['i18n', 'Locale Resolver', 'JPA', 'Validation'],
    },
    {
      context: '위데이터랩 · ODS',
      title: '레거시 정리와 도메인 경계 재구성',
      description:
        '사용하지 않는 API·테이블을 단계적으로 제거하고 주요 도메인을 모듈러 모놀리스 구조로 이전했습니다.',
      keywords: ['Modular Monolith', 'Flyway', 'JaCoCo', 'Refactoring'],
    },
    {
      context: '위데이터랩 · ODS',
      title: 'JPA Over-fetch 조회 경량화',
      description:
        '복잡한 공정 엔티티 전체를 로딩하던 경로를 프로젝션과 lookup resolver로 분리하고, 필요한 정보만 조회하도록 개선했습니다.',
      keywords: ['JPA', 'Projection', 'QueryDSL'],
    },
    {
      context: '위데이터랩 · ODS',
      title: '대용량 엑셀 다운로드 개선',
      description:
        'SXSSFWorkbook을 활용한 스트리밍 작성, 다국어 헤더, 최대 행 검증을 적용해 공정 현황 다운로드를 안정화했습니다.',
      keywords: ['Apache POI', 'SXSSFWorkbook', 'QueryDSL'],
    },
    {
      context: '지오아이티 · 운영 서비스',
      title: '고정 IP 제약 외부 API 연동',
      description:
        '고정 IP 허용 정책에 대응하기 위해 Spring Boot와 Netty 기반 프록시 통신 구조를 구축했습니다.',
      keywords: ['Spring Boot', 'Netty', 'Proxy'],
    },
    {
      context: '지오아이티 · 협업 개선',
      title: '운영 회의록 대시보드 도입',
      description:
        '서비스 개선안과 진행 상태를 기록·공유하는 대시보드를 도입해 협업 과정의 정보 누락을 줄였습니다.',
      keywords: ['Dashboard', 'Workflow'],
    },
    {
      context: '개인 프로젝트 · Twincle',
      title: '북마크 피드 백엔드 개발',
      description:
        '북마크 피드의 조합되는 검색 조건을 QueryDSL predicate로 분리하고, 커서 기반 무한 스크롤 API를 구현했습니다.',
      keywords: ['QueryDSL', 'Cursor Pagination', 'Spring Data JPA'],
    },
  ],
} as const;
