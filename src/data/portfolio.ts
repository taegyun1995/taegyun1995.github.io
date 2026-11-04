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
      problem:
        '외부에서는 결제가 완료됐지만 내부 처리가 롤백되는 경우와, 검증 API와 중복 웹훅이 같은 주문을 동시에 처리하는 경우를 함께 다뤄야 했습니다.',
      contributions: [
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
      problem:
        '결제사, 물류사, 생산 시스템은 요청·응답 형식과 상태 전이 방식이 서로 달랐습니다. 외부 응답을 ODS의 결제·배송·생산 상태로 정확히 연결하고, 운영자가 후속 단계를 추적할 수 있는 연동 흐름이 필요했습니다.',
      contributions: [
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
      problem:
        '공정 유형마다 접수·보증·치료계획·생산 흐름이 달랐지만 기존 구조에는 공통 BASIC 경로와 V1 Before 엔티티·API가 함께 남아 있었습니다. 공정 유형별 상태를 유지하면서 레거시 의존을 단계적으로 걷어낼 필요가 있었습니다.',
      contributions: [
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
