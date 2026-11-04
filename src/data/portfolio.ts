export const PORTFOLIO = {
  summary:
    'PG·물류·생산 시스템 연동, 결제 정합성, 공정 모델 전환과 조회 성능 개선을 중심으로 운영 시스템의 문제를 해결한 과정을 정리했습니다. 문제를 확인한 근거와 구현 기준, 실제로 바뀐 구조를 담았습니다.',
  cases: [
    {
      id: 'payment-consistency',
      number: '01',
      navLabel: '결제 정합성',
      context: '위데이터랩 · ODS',
      period: '2026.03 - 2026.05',
      title: 'PortOne EasyPay·PayPal 결제 연동과 데이터 정합성 강화',
      summary:
        'EasyPay V1과 PayPal V2를 ODS 결제 흐름에 연결하고, PG별 응답과 웹훅 차이를 분리해 외부 결제 상태와 내부 주문 상태의 정합성을 보강했습니다.',
      situation:
        'PG별 API와 상태 전이 방식이 다른 가운데, PG 결제 성공 후 ODS 저장이 실패하거나 검증 요청과 웹훅이 동시에 들어오면 외부·내부 결제 상태가 어긋날 수 있었습니다.',
      task:
        'EasyPay와 PayPal을 기존 결제 수명 주기에 통합하면서 중복 이벤트, 동시 처리, 외부 결제 성공 후 내부 실패를 안전하게 처리하는 역할을 맡았습니다.',
      decisions: [
        'PG별 API 계약은 각 클라이언트에 격리하고 결제 수명 주기는 공통 도메인에서 처리했습니다. 제공자별 차이를 분리하는 대신 각 클라이언트의 매핑과 검증이 필요합니다.',
        '외부 PG 호출은 DB 트랜잭션 밖에서 수행하고 DB 변경만 짧게 묶었습니다. 잠금 점유를 줄이는 대신 PG 성공 후 내부 저장 실패를 보상 취소로 처리해야 합니다.',
        '같은 결제의 동시 상태 변경에는 비관적 락과 멱등성 검사를 적용했습니다. 중복 반영을 막는 대신 같은 결제에 대한 처리는 직렬화됩니다.',
      ],
      actions: [
        'EasyPay 클라이언트와 PayPal V2 연동을 결제 도메인에서 분리하고, PG별 요청·응답을 매핑 계층과 공통 DTO로 정리했습니다.',
        'TransactionTemplate로 DB 작업만 짧게 묶고 외부 API 호출은 트랜잭션 밖으로 분리했습니다.',
        '금액·통화·결제 소유권을 검증하고 실패 시 보상 취소를 적용해 외부 결제 성공 후 내부 저장이 실패하는 상황을 처리했습니다.',
        'PayPal 웹훅 서명 검증, EasyPay·PayPal 이벤트 멱등성, 비관적 락과 결제 상태 재확인으로 중복·동시 처리를 방어했습니다.',
        'MDC를 요청·비동기 실행·WebClient 구간에 전파하고 주요 결제 실패 시나리오를 통합 테스트로 고정했습니다.',
      ],
      result:
        '결제 제공자가 추가되어도 도메인 처리와의 경계를 유지할 수 있게 됐고, 중복 처리와 외부·내부 상태 불일치를 예방하는 기준을 명확히 만들었습니다.',
      keywords: ['Java', 'Spring Boot', 'PortOne', 'EasyPay', 'PayPal', 'TransactionTemplate', 'JPA Lock', 'Webhook', 'MDC'],
    },
    {
      id: 'external-integrations',
      number: '02',
      navLabel: '외부 시스템 연동',
      context: '위데이터랩 · ODS',
      period: '2025.09 - 현재',
      title: 'ODS 결제·물류·생산 외부 시스템 연동',
      summary:
        'PortOne EasyPay·PayPal, GoodsFlow, MES를 ODS에 연결해 결제부터 출고·배송·생산까지 이어지는 흐름을 구성했습니다. 각 시스템의 API와 상태 규격을 ODS 도메인에 맞게 매핑했습니다.',
      situation:
        '주문 이후 결제·배송·생산 상태가 PortOne, GoodsFlow, MES에 나뉘어 있고, 각 시스템은 서로 다른 API 계약과 상태 표현을 사용했습니다.',
      task:
        '세 외부 시스템을 ODS 업무 흐름에 연결하고, 외부 응답과 콜백을 운영자가 확인할 수 있는 내부 결제·배송·생산 상태로 반영하는 일을 담당했습니다.',
      decisions: [
        '파트너별 클라이언트와 상태 매핑을 분리해 각 계약 변경의 영향 범위를 줄였습니다. 공통 추상화를 과하게 만들지 않는 대신 시스템별 어댑터와 테스트를 유지합니다.',
        '요청 수락만으로 후속 상태를 확정하지 않고 파트너가 제공하는 콜백·조회 흐름을 사용했습니다. 배송 추적 재시도는 일시 오류에 한정해 적용했습니다.',
      ],
      actions: [
        'PortOne EasyPay V1과 PayPal V2를 ODS 결제 흐름에 연결하고, PG별 API 계약을 각 연동 클라이언트에 분리했습니다. 결제 정합성 처리는 별도 사례에서 상세히 다룹니다.',
        'GoodsFlow 계약·출고지·배송 등록·송장·추적 API를 연동하고, 주소 스냅샷·배송 이력·웹훅과 배송 추적 재시도 흐름을 구현했습니다.',
        'MES 생산계획 전송과 상태 콜백을 연동하고 쉘 단위 Stage/Step 및 PairShell 정보를 포함하도록 생산 데이터 규격을 정리했습니다.',
        '파트너별 응답과 상태를 ODS 내부 흐름으로 변환하고 추적 로그와 운영 조회 경로를 보강했습니다.',
      ],
      result:
        '결제·배송·생산 파트너별 연동을 ODS 안에서 이어지는 운영 흐름으로 구성하고, 외부 상태를 내부 공정에서 확인할 수 있도록 했습니다.',
      keywords: ['PortOne', 'EasyPay', 'PayPal', 'GoodsFlow', 'MES', 'WebClient', 'Webhook', 'State Mapping'],
    },
    {
      id: 'process-modernization',
      number: '03',
      navLabel: '공정 V2·도메인 전환',
      context: '위데이터랩 · ODS',
      period: '2025.12 - 2026.10',
      title: '환자 공정 V2 전환과 백엔드 도메인 모듈화',
      summary:
        'DPAT·Retainer·Refinement 등 추가 공정을 독립된 생명주기로 전환하고, 여러 레거시 도메인을 모듈러 모놀리스 구조로 이전했습니다.',
      situation:
        'DPAT·Retainer·Refinement 공정은 BASIC과 다른 생명주기를 요구했지만 기존 코드에는 공통 BASIC 경로와 V1/V2 API·엔티티가 함께 남아 있었습니다. 여러 백엔드 도메인의 코드도 레이어별로 흩어져 있었습니다.',
      task:
        '추가 공정의 상태와 API를 분리하고, 기존 운영 데이터를 보존하면서 사용하지 않는 V1 구조를 정리하는 작업을 맡았습니다.',
      decisions: [
        '배포·DB 구조는 단일 서버로 유지하고 패키지 경계를 도메인 기준으로 정리했습니다. 분산 시스템 도입 비용을 피하는 대신 경계 준수는 우선 코드 규칙과 리뷰로 관리합니다.',
        '기능 이전과 레거시 제거를 데이터 마이그레이션 단계로 나눴습니다. 전환 위험을 줄이는 대신 이전 기간에는 V1과 V2 구조가 함께 유지됩니다.',
      ],
      actions: [
        'DPAT·Retainer·Refinement 공정의 요구사항과 생명주기를 정리하고 V2 엔티티, 사용자·관리자 API, DB 마이그레이션을 구현했습니다.',
        '접수 진입 조건, 보증 횟수, 치료계획서, 쉘 디자인과 생산계획 API를 공정 유형별 상태 흐름에 맞게 분리했습니다.',
        '기본 공정에 조건문으로 누적되던 추가 공정을 전용 모델로 옮기고, 주요 상태 전이를 API와 통합 테스트로 검증했습니다.',
        '파일·병원·지역·계약·FAQ·공지 등 여러 도메인을 모듈러 모놀리스 패키지 경계로 이전했습니다.',
        'V1 Before API·엔티티·테이블을 단계적으로 정리해 레거시와 신규 공정 모델이 함께 남는 범위를 줄였습니다.',
      ],
      result:
        '추가 공정의 데이터 모델과 생명주기를 BASIC 공정과 분리하고, 여러 백엔드 도메인의 소유 경계를 코드 구조에 반영했습니다. 기능 이전과 레거시 제거를 데이터 마이그레이션으로 나누어 진행했습니다.',
      keywords: ['Java', 'Spring Boot', 'JPA', 'Flyway', 'Domain Modeling', 'Modular Monolith', 'Integration Test'],
    },
    {
      id: 'query-performance',
      number: '04',
      navLabel: '조회 성능 개선',
      context: '지오아이티 · 운영 서비스',
      period: '2024.04 - 2024.05',
      title: '해양 대기질 데이터 조회 성능 개선',
      summary:
        '월평균 12만 건 이상 누적되는 데이터의 실행 계획과 인덱스를 재설계해 월 단위 조회 시간을 약 460초에서 3.4초로 단축했습니다.',
      situation:
        '5분 간격으로 쌓이는 해양 대기질 데이터가 월평균 12만 건을 넘었고, 월 단위 조회에 약 460초가 걸렸습니다. 날짜 컬럼에 함수를 적용한 조건으로 인덱스가 활용되지 않고 있었습니다.',
      task:
        '동일한 조회 범위와 결과를 유지하면서 월 단위 조회 시간을 줄이고, 실행 계획과 측정값으로 변경 효과를 확인하는 일을 맡았습니다.',
      decisions: [
        '날짜 컬럼의 함수를 제거하고 범위 검색과 복합 인덱스를 사용했습니다. DB가 인덱스로 대상 행을 먼저 줄이는 대신 날짜 표시 가공은 애플리케이션에서 처리합니다.',
        '변경 전후를 같은 조회 범위와 데이터 건수로 측정해 실행 계획 변화와 실제 응답 시간을 함께 비교했습니다.',
      ],
      actions: [
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
      title: '콘텐츠·알림 다국어 기반 구축',
      description:
        '콘텐츠별 번역 모델과 언어 선택 규칙을 구현하고 동일한 기준을 이메일·SMS 알림까지 적용했습니다.',
      keywords: ['i18n', 'Locale Resolver', 'JPA', 'Validation'],
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
