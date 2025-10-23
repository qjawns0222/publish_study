#!/usr/bin/env node

/**
 * 퍼블리싱 훈련 예제 자동 생성 스크립트
 * examples-data.js의 데이터를 기반으로 각 예제의 A-guide.html과 B-practice.html을 생성합니다.
 */

const fs = require('fs');
const path = require('path');
const { generateDefaultAnswerByCategory } = require('./generate-answer-templates');
const customGuideData = require('./custom-guide-data-full');

// 예제 데이터 (examples-data.js와 동일)
const examplesData = [
  // 초급 예제 (S001-S030)
  { id: 'S001', title: '기본 3단 레이아웃', desc: 'Header, Main, Footer 구조로 시맨틱 레이아웃 구성', difficulty: 'beginner', category: 'layout' },
  { id: 'S002', title: '중앙 정렬 카드', desc: 'Flexbox를 사용한 중앙 정렬 카드 컴포넌트', difficulty: 'beginner', category: 'layout' },
  { id: 'S003', title: '2단 컬럼 레이아웃', desc: 'Sidebar와 Content 영역을 Grid로 구성', difficulty: 'beginner', category: 'layout' },
  { id: 'S004', title: '반응형 헤더', desc: 'Logo와 Navigation이 있는 반응형 헤더', difficulty: 'beginner', category: 'layout' },
  { id: 'S005', title: '카드 그리드', desc: '3x3 그리드 형태의 카드 레이아웃', difficulty: 'beginner', category: 'layout' },
  { id: 'S006', title: '기본 버튼 스타일', desc: 'Primary, Secondary, Outline 버튼 디자인', difficulty: 'beginner', category: 'component' },
  { id: 'S007', title: '프로필 카드', desc: '이미지, 이름, 설명이 포함된 프로필 카드', difficulty: 'beginner', category: 'component' },
  { id: 'S008', title: '알림 배지', desc: '다양한 상태를 표현하는 배지 컴포넌트', difficulty: 'beginner', category: 'component' },
  { id: 'S009', title: '아이콘 버튼', desc: 'SVG 아이콘이 포함된 버튼 세트', difficulty: 'beginner', category: 'component' },
  { id: 'S010', title: '간단한 네비게이션 바', desc: '수평 정렬된 메뉴 네비게이션', difficulty: 'beginner', category: 'component' },
  { id: 'S011', title: '기본 입력 폼', desc: 'Text Input, Label, Button이 있는 기본 폼', difficulty: 'beginner', category: 'form' },
  { id: 'S012', title: '로그인 폼', desc: 'Email과 Password 입력이 있는 로그인 폼', difficulty: 'beginner', category: 'form' },
  { id: 'S013', title: '검색창', desc: '돋보기 아이콘이 있는 검색 입력창', difficulty: 'beginner', category: 'form' },
  { id: 'S014', title: '체크박스와 라디오', desc: '커스텀 스타일 체크박스와 라디오 버튼', difficulty: 'beginner', category: 'form' },
  { id: 'S015', title: '선택 박스', desc: '드롭다운 스타일 선택 박스', difficulty: 'beginner', category: 'form' },
  { id: 'S016', title: '히어로 섹션', desc: '배경 이미지와 타이틀이 있는 히어로 영역', difficulty: 'beginner', category: 'visual' },
  { id: 'S017', title: '이미지 갤러리', desc: '2x3 그리드 형태의 이미지 갤러리', difficulty: 'beginner', category: 'visual' },
  { id: 'S018', title: '상품 카드', desc: '이미지, 제목, 가격이 있는 상품 카드', difficulty: 'beginner', category: 'visual' },
  { id: 'S019', title: '푸터 디자인', desc: '로고, 링크, 저작권이 있는 푸터', difficulty: 'beginner', category: 'visual' },
  { id: 'S020', title: '컬러 팔레트', desc: '브랜드 컬러를 표시하는 팔레트 UI', difficulty: 'beginner', category: 'visual' },
  { id: 'S021', title: '호버 효과 버튼', desc: 'Hover 시 색상과 그림자가 변하는 버튼', difficulty: 'beginner', category: 'animation' },
  { id: 'S022', title: '페이드 인 카드', desc: 'CSS 애니메이션으로 나타나는 카드', difficulty: 'beginner', category: 'animation' },
  { id: 'S023', title: '로딩 스피너', desc: '회전하는 원형 로딩 애니메이션', difficulty: 'beginner', category: 'animation' },
  { id: 'S024', title: '슬라이드 인 메뉴', desc: '왼쪽에서 나타나는 사이드 메뉴', difficulty: 'beginner', category: 'animation' },
  { id: 'S025', title: '펄스 효과', desc: '주기적으로 크기가 변하는 펄스 애니메이션', difficulty: 'beginner', category: 'animation' },
  { id: 'S026', title: '테이블 스타일링', desc: '깔끔한 디자인의 데이터 테이블', difficulty: 'beginner', category: 'component' },
  { id: 'S027', title: '프로그레스 바', desc: '진행률을 표시하는 바', difficulty: 'beginner', category: 'component' },
  { id: 'S028', title: '툴팁', desc: 'Hover 시 나타나는 툴팁', difficulty: 'beginner', category: 'component' },
  { id: 'S029', title: '브레드크럼', desc: '페이지 경로를 표시하는 네비게이션', difficulty: 'beginner', category: 'component' },
  { id: 'S030', title: '태그 목록', desc: '클릭 가능한 태그 칩 리스트', difficulty: 'beginner', category: 'component' },
  // 중급 예제 (S031-S070)
  { id: 'S031', title: '대시보드 레이아웃', desc: 'Sidebar, Header, 위젯이 있는 대시보드', difficulty: 'intermediate', category: 'layout' },
  { id: 'S032', title: 'Holy Grail 레이아웃', desc: '헤더, 푸터, 좌우 사이드바, 메인 영역 구조', difficulty: 'intermediate', category: 'layout' },
  { id: 'S033', title: '매거진 레이아웃', desc: '비대칭 그리드 매거진 스타일 레이아웃', difficulty: 'intermediate', category: 'layout' },
  { id: 'S034', title: 'Masonry 그리드', desc: '높이가 다른 카드의 벽돌 배치 레이아웃', difficulty: 'intermediate', category: 'layout' },
  { id: 'S035', title: '스티키 사이드바', desc: '스크롤 시 고정되는 사이드바', difficulty: 'intermediate', category: 'layout' },
  { id: 'S036', title: '탭 인터페이스', desc: '클릭 시 컨텐츠가 전환되는 탭', difficulty: 'intermediate', category: 'component' },
  { id: 'S037', title: '아코디언 메뉴', desc: '접고 펼칠 수 있는 아코디언', difficulty: 'intermediate', category: 'component' },
  { id: 'S038', title: '드롭다운 메뉴', desc: 'Hover 시 나타나는 서브 메뉴', difficulty: 'intermediate', category: 'component' },
  { id: 'S039', title: '모달 팝업', desc: '오버레이와 함께 나타나는 모달', difficulty: 'intermediate', category: 'component' },
  { id: 'S040', title: '캐러셀 슬라이더', desc: '좌우 버튼으로 이동하는 이미지 슬라이더', difficulty: 'intermediate', category: 'component' },
  { id: 'S041', title: '토스트 알림', desc: '우측 하단에 나타나는 알림 메시지', difficulty: 'intermediate', category: 'component' },
  { id: 'S042', title: '페이지네이션', desc: '페이지 번호 네비게이션', difficulty: 'intermediate', category: 'component' },
  { id: 'S043', title: '카드 플립', desc: 'Hover 시 뒤집히는 카드', difficulty: 'intermediate', category: 'component' },
  { id: 'S044', title: '멀티 스텝 인디케이터', desc: '단계를 표시하는 진행 인디케이터', difficulty: 'intermediate', category: 'component' },
  { id: 'S045', title: '타임라인', desc: '시간 순서를 표시하는 타임라인 UI', difficulty: 'intermediate', category: 'component' },
  { id: 'S046', title: '회원가입 폼', desc: '다양한 입력 필드가 있는 회원가입 폼', difficulty: 'intermediate', category: 'form' },
  { id: 'S047', title: '파일 업로드', desc: '드래그 앤 드롭 파일 업로드 인터페이스', difficulty: 'intermediate', category: 'form' },
  { id: 'S048', title: '범위 슬라이더', desc: '값을 조정하는 range 슬라이더', difficulty: 'intermediate', category: 'form' },
  { id: 'S049', title: '토글 스위치', desc: 'On/Off를 전환하는 토글 UI', difficulty: 'intermediate', category: 'form' },
  { id: 'S050', title: '별점 평가', desc: '클릭으로 별점을 매기는 인터페이스', difficulty: 'intermediate', category: 'form' },
  { id: 'S051', title: '다단계 폼', desc: '여러 단계로 구성된 입력 폼', difficulty: 'intermediate', category: 'form' },
  { id: 'S052', title: '실시간 검증 폼', desc: '입력 중 유효성 검사가 되는 폼', difficulty: 'intermediate', category: 'form' },
  { id: 'S053', title: '태그 입력', desc: '동적으로 태그를 추가/삭제하는 입력창', difficulty: 'intermediate', category: 'form' },
  { id: 'S054', title: '날짜 선택기', desc: '날짜를 선택하는 달력 UI', difficulty: 'intermediate', category: 'form' },
  { id: 'S055', title: '색상 선택기', desc: '색상을 선택하는 컬러 피커', difficulty: 'intermediate', category: 'form' },
  { id: 'S056', title: '랜딩 페이지', desc: '히어로, 기능 소개, CTA가 있는 랜딩 페이지', difficulty: 'intermediate', category: 'visual' },
  { id: 'S057', title: '가격 표 (Pricing Table)', desc: '3단 가격 플랜 비교 테이블', difficulty: 'intermediate', category: 'visual' },
  { id: 'S058', title: '팀 멤버 소개', desc: '팀원 프로필 카드 갤러리', difficulty: 'intermediate', category: 'visual' },
  { id: 'S059', title: '통계 대시보드', desc: '숫자와 차트가 있는 통계 카드', difficulty: 'intermediate', category: 'visual' },
  { id: 'S060', title: '포트폴리오 갤러리', desc: '필터링 기능이 있는 포트폴리오', difficulty: 'intermediate', category: 'visual' },
  { id: 'S061', title: '블로그 카드 목록', desc: '썸네일, 제목, 요약이 있는 블로그 카드', difficulty: 'intermediate', category: 'visual' },
  { id: 'S062', title: '이벤트 배너', desc: '화려한 비주얼의 이벤트 프로모션 배너', difficulty: 'intermediate', category: 'visual' },
  { id: 'S063', title: '상품 상세 페이지', desc: '이미지, 설명, 옵션이 있는 상품 페이지', difficulty: 'intermediate', category: 'visual' },
  { id: 'S064', title: 'FAQ 섹션', desc: '자주 묻는 질문 아코디언 리스트', difficulty: 'intermediate', category: 'visual' },
  { id: 'S065', title: '고객 후기 슬라이더', desc: '자동 재생되는 리뷰 슬라이더', difficulty: 'intermediate', category: 'visual' },
  { id: 'S066', title: '스크롤 페이드 인', desc: '스크롤 시 순차적으로 나타나는 요소', difficulty: 'intermediate', category: 'animation' },
  { id: 'S067', title: '패럴랙스 스크롤', desc: '배경이 다른 속도로 움직이는 효과', difficulty: 'intermediate', category: 'animation' },
  { id: 'S068', title: '메뉴 햄버거 애니메이션', desc: '햄버거 아이콘이 X로 변하는 애니메이션', difficulty: 'intermediate', category: 'animation' },
  { id: 'S069', title: '카운터 애니메이션', desc: '숫자가 증가하는 카운팅 효과', difficulty: 'intermediate', category: 'animation' },
  { id: 'S070', title: '타이핑 효과', desc: '텍스트가 타이핑되는 듯한 애니메이션', difficulty: 'intermediate', category: 'animation' },
  // 고급 예제 (S071-S100)
  { id: 'S071', title: '풀스크린 섹션 스크롤', desc: '섹션별 풀스크린 스냅 스크롤', difficulty: 'advanced', category: 'layout' },
  { id: 'S072', title: '분할 화면 레이아웃', desc: '좌우 분할 인터랙티브 레이아웃', difficulty: 'advanced', category: 'layout' },
  { id: 'S073', title: '그리드 라인 오버레이', desc: '디자인 그리드가 보이는 레이아웃', difficulty: 'advanced', category: 'layout' },
  { id: 'S074', title: '반응형 대시보드', desc: '완전히 반응형인 관리자 대시보드', difficulty: 'advanced', category: 'layout' },
  { id: 'S075', title: '이모션 네비게이션', desc: '창의적인 네비게이션 패턴', difficulty: 'advanced', category: 'layout' },
  { id: 'S076', title: '드래그 앤 드롭 보드', desc: 'Kanban 스타일 드래그 보드', difficulty: 'advanced', category: 'component' },
  { id: 'S077', title: '무한 스크롤', desc: '자동 로딩되는 무한 스크롤 리스트', difficulty: 'advanced', category: 'component' },
  { id: 'S078', title: '가상 스크롤', desc: '대용량 데이터의 가상화 스크롤', difficulty: 'advanced', category: 'component' },
  { id: 'S079', title: '리사이즈 가능 패널', desc: '크기를 조정할 수 있는 분할 패널', difficulty: 'advanced', category: 'component' },
  { id: 'S080', title: '컨텍스트 메뉴', desc: '우클릭 시 나타나는 커스텀 메뉴', difficulty: 'advanced', category: 'component' },
  { id: 'S081', title: '트리 뷰', desc: '폴더 구조처럼 펼쳐지는 트리 메뉴', difficulty: 'advanced', category: 'component' },
  { id: 'S082', title: '데이터 테이블', desc: '정렬, 필터, 페이징이 있는 테이블', difficulty: 'advanced', category: 'component' },
  { id: 'S083', title: '차트 컴포넌트', desc: 'Canvas로 그리는 간단한 차트', difficulty: 'advanced', category: 'component' },
  { id: 'S084', title: '코드 에디터 UI', desc: '신택스 하이라이팅이 있는 에디터', difficulty: 'advanced', category: 'component' },
  { id: 'S085', title: '이미지 크롭 도구', desc: '이미지를 자르는 인터랙티브 도구', difficulty: 'advanced', category: 'component' },
  { id: 'S086', title: '결제 폼', desc: '카드 정보 입력과 유효성 검사', difficulty: 'advanced', category: 'form' },
  { id: 'S087', title: '위지윅 에디터', desc: '텍스트 포맷팅 에디터', difficulty: 'advanced', category: 'form' },
  { id: 'S088', title: '자동완성 검색', desc: '입력 시 추천 검색어가 나타나는 검색창', difficulty: 'advanced', category: 'form' },
  { id: 'S089', title: '폼 빌더', desc: '동적으로 필드를 추가하는 폼 생성기', difficulty: 'advanced', category: 'form' },
  { id: 'S090', title: '서명 패드', desc: 'Canvas로 구현한 서명 입력', difficulty: 'advanced', category: 'form' },
  { id: 'S091', title: '비디오 랜딩 페이지', desc: '풀스크린 배경 비디오가 있는 랜딩', difficulty: 'advanced', category: 'visual' },
  { id: 'S092', title: '3D 카드 효과', desc: 'CSS 3D transform을 활용한 카드', difficulty: 'advanced', category: 'visual' },
  { id: 'S093', title: '인터랙티브 지도', desc: 'SVG로 구현한 클릭 가능한 지도', difficulty: 'advanced', category: 'visual' },
  { id: 'S094', title: '머티리얼 디자인 UI', desc: 'Material Design 스타일 전체 페이지', difficulty: 'advanced', category: 'visual' },
  { id: 'S095', title: '뉴모피즘 UI', desc: 'Neumorphism 스타일 컴포넌트 세트', difficulty: 'advanced', category: 'visual' },
  { id: 'S096', title: '파티클 배경', desc: 'Canvas로 구현한 파티클 애니메이션', difficulty: 'advanced', category: 'animation' },
  { id: 'S097', title: 'SVG 패스 애니메이션', desc: 'SVG 경로를 따라 그려지는 애니메이션', difficulty: 'advanced', category: 'animation' },
  { id: 'S098', title: '페이지 전환 효과', desc: '부드러운 페이지 전환 애니메이션', difficulty: 'advanced', category: 'animation' },
  { id: 'S099', title: '모핑 효과', desc: '도형이 변형되는 모핑 애니메이션', difficulty: 'advanced', category: 'animation' },
  { id: 'S100', title: '인터랙티브 배경', desc: '마우스에 반응하는 동적 배경', difficulty: 'advanced', category: 'animation' }
];

// 카테고리별 세부 가이드 템플릿
const categoryGuides = {
  layout: {
    icon: '📐',
    focusAreas: ['시맨틱 HTML 구조', 'Flexbox 또는 Grid 레이아웃', '반응형 디자인', '요소 정렬과 배치'],
    requirements: [
      '시맨틱 태그 사용 (header, main, section, aside, footer 등)',
      'CSS Flexbox 또는 Grid로 레이아웃 구성',
      '요소 간 일관된 간격 유지 (8px scale)',
      '적절한 패딩과 마진 적용'
    ]
  },
  component: {
    icon: '🧩',
    focusAreas: ['컴포넌트 구조화', '재사용 가능한 디자인', '상태 표현', '인터랙션'],
    requirements: [
      'BEM 네이밍 또는 의미있는 클래스명 사용',
      '컴포넌트 내부 요소들의 관계 명확히 표현',
      '호버, 액티브 등 다양한 상태 스타일 정의',
      '일관된 디자인 토큰 사용'
    ]
  },
  form: {
    icon: '📝',
    focusAreas: ['폼 구조', '입력 검증', '사용자 피드백', '접근성'],
    requirements: [
      'label과 input의 올바른 연결 (for, id)',
      '적절한 input type 사용',
      '폼 검증 상태 표시 (success, error)',
      'placeholder와 도움말 텍스트 제공'
    ]
  },
  visual: {
    icon: '🎨',
    focusAreas: ['시각적 계층', '색상과 타이포그래피', '이미지 처리', '공간 활용'],
    requirements: [
      '명확한 시각적 계층 구조',
      '일관된 색상 팔레트 사용',
      '타이포그래피 스케일 적용',
      '이미지 최적화 (object-fit, aspect-ratio)'
    ]
  },
  animation: {
    icon: '✨',
    focusAreas: ['CSS 애니메이션', 'Transition', 'Transform', '성능 최적화'],
    requirements: [
      'CSS transition 또는 animation 사용',
      '적절한 duration과 easing 함수',
      'transform과 opacity만 애니메이션 (성능)',
      '접근성 고려 (prefers-reduced-motion)'
    ]
  }
};

// 난이도별 복잡도
const difficultyLevels = {
  beginner: {
    label: '초급',
    emoji: '🌱',
    description: '기본 개념과 핵심 기능에 집중합니다.',
    complexity: '단순한 구조와 스타일링'
  },
  intermediate: {
    label: '중급',
    emoji: '🚀',
    description: '여러 개념을 조합하고 인터랙션을 추가합니다.',
    complexity: '복합적인 레이아웃과 JavaScript 활용'
  },
  advanced: {
    label: '고급',
    emoji: '⚡',
    description: '고급 기술과 최적화를 고려합니다.',
    complexity: '복잡한 로직과 성능 최적화'
  }
};

// 카테고리별 레이아웃 다이어그램
const layoutDiagrams = {
  layout: (example) => `
    <div style="font-family: monospace; background: #F3F4F6; padding: 24px; border-radius: 8px; margin: 16px 0;">
      <pre style="margin: 0; line-height: 1.8; color: #222;">
┌─────────────────────────────────────┐
│           HEADER (헤더)              │
│   로고, 네비게이션, 메뉴 등          │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│                                     │
│           MAIN (메인 영역)           │
│        실제 콘텐츠가 들어감          │
│                                     │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│          FOOTER (푸터)               │
│   저작권, 링크, 소셜 미디어 등       │
└─────────────────────────────────────┘
      </pre>
    </div>`,
  component: (example) => `
    <div style="font-family: monospace; background: #F3F4F6; padding: 24px; border-radius: 8px; margin: 16px 0;">
      <pre style="margin: 0; line-height: 1.8; color: #222;">
┌──────────────────────┐
│   Component 영역     │
│  ┌────────────────┐  │
│  │   Icon/Image   │  │
│  └────────────────┘  │
│      제목 영역        │
│     설명 텍스트       │
│  [ 버튼 또는 액션 ]   │
└──────────────────────┘
      </pre>
    </div>`,
  form: (example) => `
    <div style="font-family: monospace; background: #F3F4F6; padding: 24px; border-radius: 8px; margin: 16px 0;">
      <pre style="margin: 0; line-height: 1.8; color: #222;">
┌────────────────────────┐
│      폼 제목/설명       │
├────────────────────────┤
│ Label: [Input Field]   │
│ Label: [Input Field]   │
│ Label: [Select/Radio]  │
├────────────────────────┤
│    [제출 버튼]          │
└────────────────────────┘
      </pre>
    </div>`,
  visual: (example) => `
    <div style="font-family: monospace; background: #F3F4F6; padding: 24px; border-radius: 8px; margin: 16px 0;">
      <pre style="margin: 0; line-height: 1.8; color: #222;">
┌──────────────────────────────┐
│     [배경 이미지/그래픽]      │
│                              │
│        메인 타이틀            │
│         설명 문구             │
│                              │
│      [ CTA 버튼 ]             │
└──────────────────────────────┘
      </pre>
    </div>`,
  animation: (example) => `
    <div style="font-family: monospace; background: #F3F4F6; padding: 24px; border-radius: 8px; margin: 16px 0;">
      <pre style="margin: 0; line-height: 1.8; color: #222;">
    초기 상태        →      애니메이션       →      최종 상태
┌──────────┐           ┌──────────┐           ┌──────────┐
│  요소A   │  ─────→   │  요소A   │  ─────→   │  요소A   │
│ (시작)   │  (변화)    │ (진행중) │  (완료)    │ (끝)     │
└──────────┘           └──────────┘           └──────────┘
      </pre>
    </div>`
};

// 예제별 맞춤 인터랙션 가이드 생성
function generateInteractionGuide(example) {
  // 예제별 인터랙션 대상과 코드를 정의
  const interactionGuides = {
    // ===== 초급 예제 (S001-S030) =====

    // S001: 기본 3단 레이아웃
    'S001': {
      targets: [
        { name: 'Header 네비게이션 링크', selector: 'header nav a', effects: ['밑줄 표시', '투명도 80%'] }
      ],
      code: `header nav a {
  transition: 0.3s ease;
}
header nav a:hover {
  text-decoration: underline;
  opacity: 0.8;
}`
    },

    // S002: 중앙 정렬 카드
    'S002': {
      targets: [
        { name: '카드 내부 버튼', selector: '.btn', effects: ['배경색 진하게', '위로 이동', '그림자 강화'] }
      ],
      code: `.btn {
  transition: 0.3s ease;
}
.btn:hover {
  background: #3730a3;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}`
    },

    // S003: 2단 컬럼 레이아웃
    'S003': {
      targets: [
        { name: 'Sidebar 메뉴 링크', selector: '.sidebar a', effects: ['색상 변경', '밑줄 없음'] }
      ],
      code: `.sidebar a {
  transition: 0.3s ease;
}
.sidebar a:hover {
  color: var(--color-accent);
}`
    },

    // S004: 반응형 헤더
    'S004': {
      targets: [
        { name: 'Navigation 링크', selector: '.nav a', effects: ['투명도 80%'] }
      ],
      code: `.nav a {
  transition: 0.3s ease;
}
.nav a:hover {
  opacity: 0.8;
}`
    },

    // S005: 카드 그리드
    'S005': {
      targets: [
        { name: '그리드 카드', selector: '.card', effects: ['위로 이동', '그림자 강화'] }
      ],
      code: `.card {
  transition: 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}`
    },

    // S006: 기본 버튼 스타일
    'S006': {
      targets: [
        { name: 'Primary 버튼', selector: '.btn-primary', effects: ['배경색 진하게', '위로 이동'] },
        { name: 'Secondary 버튼', selector: '.btn-secondary', effects: ['배경색 진하게', '위로 이동'] },
        { name: 'Outline 버튼', selector: '.btn-outline', effects: ['배경 채우기', '텍스트 흰색'] }
      ],
      code: `.btn-primary:hover {
  background: #3730a3;
  transform: translateY(-2px);
}
.btn-secondary:hover {
  background: #059669;
  transform: translateY(-2px);
}
.btn-outline:hover {
  background: var(--color-primary);
  color: white;
}`
    },

    // S007: 프로필 카드
    'S007': {
      targets: [
        { name: '프로필 카드', selector: '.profile-card', effects: ['위로 이동', '그림자 강화'] }
      ],
      code: `.profile-card {
  transition: 0.3s ease;
}
.profile-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}`
    },

    // S008: 알림 배지
    'S008': {
      targets: [
        { name: '배지', selector: '.badge', effects: ['확대', '그림자 추가'] }
      ],
      code: `.badge {
  transition: 0.3s ease;
}
.badge:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}`
    },

    // S009: 아이콘 버튼
    'S009': {
      targets: [
        { name: '아이콘 버튼', selector: '.icon-btn', effects: ['배경색 변경', '회전 효과'] }
      ],
      code: `.icon-btn {
  transition: 0.3s ease;
}
.icon-btn:hover {
  background: var(--color-primary);
  color: white;
  transform: rotate(15deg);
}`
    },

    // S010: 간단한 네비게이션 바
    'S010': {
      targets: [
        { name: 'Navigation 메뉴 항목', selector: '.nav-item', effects: ['하단 밑줄', '색상 변경'] }
      ],
      code: `.nav-item {
  transition: 0.3s ease;
  position: relative;
}
.nav-item:hover {
  color: var(--color-primary);
}
.nav-item:hover::after {
  width: 100%;
}`
    },

    // S011: 기본 입력 폼
    'S011': {
      targets: [
        { name: 'Input 필드', selector: 'input', effects: ['테두리 색상 변경 (focus)'] },
        { name: '제출 버튼', selector: '.submit-btn', effects: ['배경색 진하게'] }
      ],
      code: `input:focus {
  border-color: var(--color-primary);
  outline: none;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}
.submit-btn:hover {
  background: #3730a3;
}`
    },

    // S012: 로그인 폼
    'S012': {
      targets: [
        { name: 'Input 필드', selector: 'input', effects: ['테두리 강조 (focus)'] },
        { name: '로그인 버튼', selector: '.login-btn', effects: ['배경색 진하게', '위로 이동'] }
      ],
      code: `input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}
.login-btn:hover {
  background: #3730a3;
  transform: translateY(-2px);
}`
    },

    // S013: 검색창
    'S013': {
      targets: [
        { name: '검색 Input', selector: '.search-input', effects: ['테두리 강조', '그림자 추가'] },
        { name: '검색 버튼', selector: '.search-btn', effects: ['배경색 변경'] }
      ],
      code: `.search-input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.15);
}
.search-btn:hover {
  background: #3730a3;
}`
    },

    // S014: 체크박스와 라디오
    'S014': {
      targets: [
        { name: '커스텀 체크박스', selector: '.checkbox', effects: ['테두리 강조 (hover)'] },
        { name: '커스텀 라디오', selector: '.radio', effects: ['테두리 강조 (hover)'] }
      ],
      code: `.checkbox:hover, .radio:hover {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}`
    },

    // S015: 선택 박스
    'S015': {
      targets: [
        { name: 'Select 박스', selector: 'select', effects: ['테두리 강조 (focus)'] }
      ],
      code: `select:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}`
    },

    // S016: 히어로 섹션
    'S016': {
      targets: [
        { name: 'CTA 버튼', selector: '.cta-btn', effects: ['배경색 진하게', '확대'] }
      ],
      code: `.cta-btn {
  transition: 0.3s ease;
}
.cta-btn:hover {
  background: #3730a3;
  transform: scale(1.05);
}`
    },

    // S017: 이미지 갤러리
    'S017': {
      targets: [
        { name: '갤러리 이미지', selector: '.gallery-img', effects: ['확대', '밝기 조정'] }
      ],
      code: `.gallery-img {
  transition: 0.3s ease;
}
.gallery-img:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
}`
    },

    // S018: 상품 카드
    'S018': {
      targets: [
        { name: '상품 카드', selector: '.product-card', effects: ['위로 이동', '그림자 강화'] },
        { name: '구매 버튼', selector: '.buy-btn', effects: ['배경색 변경'] }
      ],
      code: `.product-card {
  transition: 0.3s ease;
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}
.buy-btn:hover {
  background: var(--color-secondary);
}`
    },

    // S019: 푸터 디자인
    'S019': {
      targets: [
        { name: '푸터 링크', selector: 'footer a', effects: ['색상 변경', '밑줄'] }
      ],
      code: `footer a {
  transition: 0.3s ease;
}
footer a:hover {
  color: var(--color-accent);
  text-decoration: underline;
}`
    },

    // S020: 컬러 팔레트
    'S020': {
      targets: [
        { name: '컬러 칩', selector: '.color-chip', effects: ['확대', '그림자'] }
      ],
      code: `.color-chip {
  transition: 0.3s ease;
}
.color-chip:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}`
    },

    // S021: 호버 효과 버튼
    'S021': {
      targets: [
        { name: '버튼', selector: '.hover-btn', effects: ['색상 변경', '그림자 확대', '위로 이동'] }
      ],
      code: `.hover-btn {
  transition: all 0.3s ease;
}
.hover-btn:hover {
  background: var(--color-secondary);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
  transform: translateY(-4px);
}`
    },

    // S022: 페이드 인 카드
    'S022': {
      targets: [
        { name: '카드', selector: '.fade-card', effects: ['투명도 변화 (애니메이션)'] }
      ],
      code: `.fade-card {
  animation: fadeIn 1s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}`
    },

    // S023: 로딩 스피너
    'S023': {
      targets: [
        { name: '스피너', selector: '.spinner', effects: ['회전 애니메이션'] }
      ],
      code: `.spinner {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}`
    },

    // S024: 슬라이드 인 메뉴
    'S024': {
      targets: [
        { name: '메뉴 토글 버튼', selector: '.menu-toggle', effects: ['배경색 변경'] },
        { name: '메뉴 항목', selector: '.menu-item', effects: ['배경색 변경 (hover)'] }
      ],
      code: `.menu-toggle:hover {
  background: var(--color-primary);
}
.menu-item:hover {
  background: rgba(79, 70, 229, 0.1);
}`
    },

    // S025: 펄스 효과
    'S025': {
      targets: [
        { name: '펄스 요소', selector: '.pulse', effects: ['크기 변화 (애니메이션)'] }
      ],
      code: `.pulse {
  animation: pulse 2s ease infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}`
    },

    // S026: 테이블 스타일링
    'S026': {
      targets: [
        { name: '테이블 행', selector: 'tbody tr', effects: ['배경색 변경'] }
      ],
      code: `tbody tr {
  transition: 0.3s ease;
}
tbody tr:hover {
  background: rgba(79, 70, 229, 0.05);
}`
    },

    // S027: 프로그레스 바
    'S027': {
      targets: [
        { name: '프로그레스 바', selector: '.progress-bar', effects: ['그림자 강화'] }
      ],
      code: `.progress-bar:hover {
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.3);
}`
    },

    // S028: 툴팁
    'S028': {
      targets: [
        { name: '툴팁 트리거', selector: '.tooltip-trigger', effects: ['색상 변경', '툴팁 표시'] }
      ],
      code: `.tooltip-trigger:hover {
  color: var(--color-primary);
}
.tooltip-trigger:hover .tooltip {
  opacity: 1;
  visibility: visible;
}`
    },

    // S029: 브레드크럼
    'S029': {
      targets: [
        { name: '브레드크럼 링크', selector: '.breadcrumb a', effects: ['색상 변경', '밑줄'] }
      ],
      code: `.breadcrumb a {
  transition: 0.3s ease;
}
.breadcrumb a:hover {
  color: var(--color-primary);
  text-decoration: underline;
}`
    },

    // S030: 태그 목록
    'S030': {
      targets: [
        { name: '태그', selector: '.tag', effects: ['배경색 변경', '확대'] }
      ],
      code: `.tag {
  transition: 0.3s ease;
}
.tag:hover {
  background: var(--color-primary);
  color: white;
  transform: scale(1.05);
}`
    },

    // ===== 중급 예제 (S031-S070) =====

    // S031: 대시보드 레이아웃
    'S031': {
      targets: [
        { name: 'Sidebar 메뉴', selector: '.sidebar-menu a', effects: ['배경색 변경', '좌측 테두리'] },
        { name: '위젯 카드', selector: '.widget', effects: ['그림자 강화'] }
      ],
      code: `.sidebar-menu a:hover {
  background: rgba(79, 70, 229, 0.1);
  border-left: 4px solid var(--color-primary);
}
.widget:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}`
    },

    // S032: Holy Grail 레이아웃
    'S032': {
      targets: [
        { name: '좌측 사이드바 링크', selector: '.left-sidebar a', effects: ['배경색 변경'] },
        { name: '우측 사이드바 링크', selector: '.right-sidebar a', effects: ['배경색 변경'] }
      ],
      code: `.left-sidebar a:hover, .right-sidebar a:hover {
  background: rgba(79, 70, 229, 0.08);
  padding-left: 20px;
}`
    },

    // S033: 매거진 레이아웃
    'S033': {
      targets: [
        { name: '아티클 카드', selector: '.article-card', effects: ['위로 이동', '그림자 강화'] },
        { name: '더보기 링크', selector: '.read-more', effects: ['색상 변경', '화살표 이동'] }
      ],
      code: `.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}
.read-more:hover {
  color: var(--color-primary);
}
.read-more:hover::after {
  transform: translateX(5px);
}`
    },

    // S034: Masonry 그리드
    'S034': {
      targets: [
        { name: 'Masonry 아이템', selector: '.masonry-item', effects: ['확대', '그림자'] }
      ],
      code: `.masonry-item {
  transition: 0.3s ease;
}
.masonry-item:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  z-index: 10;
}`
    },

    // S035: 스티키 사이드바
    'S035': {
      targets: [
        { name: '사이드바 링크', selector: '.sticky-sidebar a', effects: ['배경색 변경', '좌측 바'] }
      ],
      code: `.sticky-sidebar a {
  transition: 0.3s ease;
}
.sticky-sidebar a:hover {
  background: rgba(79, 70, 229, 0.1);
  border-left: 3px solid var(--color-primary);
  padding-left: 20px;
}`
    },

    // S036: 탭 인터페이스
    'S036': {
      targets: [
        { name: '탭 버튼', selector: '.tab-btn', effects: ['배경색 변경', '하단 밑줄'] }
      ],
      code: `.tab-btn {
  transition: 0.3s ease;
}
.tab-btn:hover {
  background: rgba(79, 70, 229, 0.1);
}
.tab-btn.active {
  border-bottom: 3px solid var(--color-primary);
}`
    },

    // S037: 아코디언 메뉴
    'S037': {
      targets: [
        { name: '아코디언 헤더', selector: '.accordion-header', effects: ['배경색 변경'] }
      ],
      code: `.accordion-header {
  transition: 0.3s ease;
}
.accordion-header:hover {
  background: rgba(79, 70, 229, 0.08);
}`
    },

    // S038: 드롭다운 메뉴
    'S038': {
      targets: [
        { name: '메뉴 항목', selector: '.menu-item', effects: ['배경색 변경'] },
        { name: '서브메뉴 항목', selector: '.submenu-item', effects: ['배경색 변경', '들여쓰기'] }
      ],
      code: `.menu-item:hover {
  background: rgba(79, 70, 229, 0.1);
}
.submenu-item:hover {
  background: rgba(79, 70, 229, 0.15);
  padding-left: 24px;
}`
    },

    // S039: 모달 팝업
    'S039': {
      targets: [
        { name: '모달 열기 버튼', selector: '.open-modal', effects: ['배경색 변경', '위로 이동'] },
        { name: '닫기 버튼', selector: '.close-btn', effects: ['회전', '색상 변경'] }
      ],
      code: `.open-modal:hover {
  background: #3730a3;
  transform: translateY(-2px);
}
.close-btn:hover {
  transform: rotate(90deg);
  color: var(--color-accent);
}`
    },

    // S040: 캐러셀 슬라이더
    'S040': {
      targets: [
        { name: '좌우 화살표 버튼', selector: '.arrow-btn', effects: ['배경색 변경', '확대'] },
        { name: '인디케이터 점', selector: '.dot', effects: ['확대', '색상 변경'] }
      ],
      code: `.arrow-btn:hover {
  background: rgba(79, 70, 229, 0.9);
  transform: scale(1.1);
}
.dot:hover {
  transform: scale(1.3);
  background: var(--color-primary);
}`
    },

    // S041: 토스트 알림
    'S041': {
      targets: [
        { name: '토스트 닫기 버튼', selector: '.toast-close', effects: ['배경색 변경'] }
      ],
      code: `.toast-close:hover {
  background: rgba(255, 255, 255, 0.2);
}`
    },

    // S042: 페이지네이션
    'S042': {
      targets: [
        { name: '페이지 번호', selector: '.page-num', effects: ['배경색 변경', '확대'] },
        { name: '이전/다음 버튼', selector: '.page-arrow', effects: ['배경색 변경'] }
      ],
      code: `.page-num:hover {
  background: var(--color-primary);
  color: white;
  transform: scale(1.1);
}
.page-arrow:hover {
  background: rgba(79, 70, 229, 0.1);
}`
    },

    // S043: 카드 플립
    'S043': {
      targets: [
        { name: '플립 카드', selector: '.flip-card', effects: ['180도 회전 (3D)'] }
      ],
      code: `.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}`
    },

    // S044: 멀티 스텝 인디케이터
    'S044': {
      targets: [
        { name: '스텝 원', selector: '.step', effects: ['확대', '그림자'] }
      ],
      code: `.step:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}`
    },

    // S045: 타임라인
    'S045': {
      targets: [
        { name: '타임라인 아이템', selector: '.timeline-item', effects: ['배경색 변경', '확대'] }
      ],
      code: `.timeline-item {
  transition: 0.3s ease;
}
.timeline-item:hover {
  background: rgba(79, 70, 229, 0.05);
  transform: scale(1.02);
}`
    },

    // S046: 회원가입 폼
    'S046': {
      targets: [
        { name: 'Input 필드', selector: 'input', effects: ['테두리 강조 (focus)'] },
        { name: '가입 버튼', selector: '.signup-btn', effects: ['배경색 변경', '위로 이동'] }
      ],
      code: `input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}
.signup-btn:hover {
  background: #3730a3;
  transform: translateY(-2px);
}`
    },

    // S047: 파일 업로드
    'S047': {
      targets: [
        { name: '드롭 영역', selector: '.drop-zone', effects: ['테두리 강조', '배경색 변경'] }
      ],
      code: `.drop-zone:hover {
  border-color: var(--color-primary);
  background: rgba(79, 70, 229, 0.05);
}`
    },

    // S048: 범위 슬라이더
    'S048': {
      targets: [
        { name: 'Range 슬라이더', selector: 'input[type="range"]', effects: ['Thumb 확대'] }
      ],
      code: `input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}`
    },

    // S049: 토글 스위치
    'S049': {
      targets: [
        { name: '토글 스위치', selector: '.toggle', effects: ['배경색 밝게'] }
      ],
      code: `.toggle:hover {
  background: rgba(79, 70, 229, 0.7);
}`
    },

    // S050: 별점 평가
    'S050': {
      targets: [
        { name: '별 아이콘', selector: '.star', effects: ['색상 변경', '확대'] }
      ],
      code: `.star:hover {
  color: var(--color-accent);
  transform: scale(1.2);
}`
    },

    // S051: 다단계 폼
    'S051': {
      targets: [
        { name: '다음/이전 버튼', selector: '.step-btn', effects: ['배경색 변경'] },
        { name: '스텝 인디케이터', selector: '.step-indicator', effects: ['확대'] }
      ],
      code: `.step-btn:hover {
  background: #3730a3;
}
.step-indicator:hover {
  transform: scale(1.1);
}`
    },

    // S052: 실시간 검증 폼
    'S052': {
      targets: [
        { name: 'Input 필드', selector: 'input', effects: ['테두리 색상 (유효성)'] }
      ],
      code: `input:focus {
  border-color: var(--color-primary);
}
input.valid:focus {
  border-color: var(--color-secondary);
}
input.invalid:focus {
  border-color: #EF4444;
}`
    },

    // S053: 태그 입력
    'S053': {
      targets: [
        { name: '태그', selector: '.tag', effects: ['확대'] },
        { name: '태그 삭제 버튼', selector: '.tag-remove', effects: ['배경색 변경'] }
      ],
      code: `.tag:hover {
  transform: scale(1.05);
}
.tag-remove:hover {
  background: #EF4444;
}`
    },

    // S054: 날짜 선택기
    'S054': {
      targets: [
        { name: '날짜 셀', selector: '.date-cell', effects: ['배경색 변경', '확대'] }
      ],
      code: `.date-cell:hover {
  background: rgba(79, 70, 229, 0.1);
  transform: scale(1.1);
}`
    },

    // S055: 색상 선택기
    'S055': {
      targets: [
        { name: '색상 칩', selector: '.color-option', effects: ['확대', '테두리 강조'] }
      ],
      code: `.color-option:hover {
  transform: scale(1.15);
  border: 3px solid #333;
}`
    },

    // S056: 랜딩 페이지
    'S056': {
      targets: [
        { name: 'CTA 버튼', selector: '.cta-btn', effects: ['배경색 변경', '확대'] },
        { name: '기능 카드', selector: '.feature-card', effects: ['위로 이동', '그림자'] }
      ],
      code: `.cta-btn:hover {
  background: #3730a3;
  transform: scale(1.05);
}
.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(0,0,0,0.15);
}`
    },

    // S057: 가격 표
    'S057': {
      targets: [
        { name: '가격 카드', selector: '.price-card', effects: ['위로 이동', '그림자 강화', '테두리 강조'] },
        { name: '선택 버튼', selector: '.select-btn', effects: ['배경색 변경'] }
      ],
      code: `.price-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(79, 70, 229, 0.2);
  border-color: var(--color-primary);
}
.select-btn:hover {
  background: #3730a3;
}`
    },

    // S058: 팀 멤버 소개
    'S058': {
      targets: [
        { name: '멤버 카드', selector: '.member-card', effects: ['위로 이동', '이미지 확대'] },
        { name: '소셜 아이콘', selector: '.social-icon', effects: ['색상 변경', '회전'] }
      ],
      code: `.member-card:hover {
  transform: translateY(-4px);
}
.member-card:hover img {
  transform: scale(1.05);
}
.social-icon:hover {
  color: var(--color-primary);
  transform: rotate(15deg);
}`
    },

    // S059: 통계 대시보드
    'S059': {
      targets: [
        { name: '통계 카드', selector: '.stat-card', effects: ['확대', '그림자 강화'] }
      ],
      code: `.stat-card {
  transition: 0.3s ease;
}
.stat-card:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}`
    },

    // S060: 포트폴리오 갤러리
    'S060': {
      targets: [
        { name: '필터 버튼', selector: '.filter-btn', effects: ['배경색 변경', '확대'] },
        { name: '포트폴리오 아이템', selector: '.portfolio-item', effects: ['확대', '오버레이 표시'] }
      ],
      code: `.filter-btn:hover {
  background: var(--color-primary);
  color: white;
  transform: scale(1.05);
}
.portfolio-item:hover {
  transform: scale(1.02);
}
.portfolio-item:hover .overlay {
  opacity: 1;
}`
    },

    // S061: 블로그 카드 목록
    'S061': {
      targets: [
        { name: '블로그 카드', selector: '.blog-card', effects: ['위로 이동', '그림자 강화'] },
        { name: '더보기 버튼', selector: '.read-more', effects: ['화살표 이동'] }
      ],
      code: `.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}
.read-more:hover::after {
  transform: translateX(5px);
}`
    },

    // S062: 이벤트 배너
    'S062': {
      targets: [
        { name: '배너', selector: '.event-banner', effects: ['확대', '밝기 증가'] },
        { name: '참여하기 버튼', selector: '.join-btn', effects: ['배경색 변경', '펄스 효과'] }
      ],
      code: `.event-banner:hover {
  transform: scale(1.02);
  filter: brightness(1.05);
}
.join-btn:hover {
  background: var(--color-accent);
  animation: pulse 1s infinite;
}`
    },

    // S063: 상품 상세 페이지
    'S063': {
      targets: [
        { name: '썸네일 이미지', selector: '.thumbnail', effects: ['테두리 강조'] },
        { name: '옵션 버튼', selector: '.option-btn', effects: ['배경색 변경', '테두리 강조'] },
        { name: '장바구니 버튼', selector: '.cart-btn', effects: ['배경색 변경', '위로 이동'] }
      ],
      code: `.thumbnail:hover {
  border-color: var(--color-primary);
}
.option-btn:hover {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}
.cart-btn:hover {
  background: #3730a3;
  transform: translateY(-2px);
}`
    },

    // S064: FAQ 섹션
    'S064': {
      targets: [
        { name: 'FAQ 질문', selector: '.faq-question', effects: ['배경색 변경'] }
      ],
      code: `.faq-question {
  transition: 0.3s ease;
}
.faq-question:hover {
  background: rgba(79, 70, 229, 0.05);
}`
    },

    // S065: 고객 후기 슬라이더
    'S065': {
      targets: [
        { name: '후기 카드', selector: '.review-card', effects: ['확대'] },
        { name: '화살표 버튼', selector: '.slider-arrow', effects: ['배경색 변경'] }
      ],
      code: `.review-card:hover {
  transform: scale(1.02);
}
.slider-arrow:hover {
  background: rgba(79, 70, 229, 0.9);
}`
    },

    // S066: 스크롤 페이드 인
    'S066': {
      targets: [
        { name: '페이드 요소', selector: '.fade-element', effects: ['투명도 변화 (스크롤)'] }
      ],
      code: `.fade-element {
  opacity: 0;
  transform: translateY(30px);
  transition: 1s ease;
}
.fade-element.visible {
  opacity: 1;
  transform: translateY(0);
}`
    },

    // S067: 패럴랙스 스크롤
    'S067': {
      targets: [
        { name: '패럴랙스 레이어', selector: '.parallax-layer', effects: ['스크롤에 따른 이동'] }
      ],
      code: `.parallax-layer {
  transition: transform 0.3s ease;
}
/* JavaScript로 스크롤 위치에 따라 transform 조정 */`
    },

    // S068: 메뉴 햄버거 애니메이션
    'S068': {
      targets: [
        { name: '햄버거 버튼', selector: '.hamburger', effects: ['X자 변형 (클릭 시)'] }
      ],
      code: `.hamburger:hover {
  background: rgba(79, 70, 229, 0.1);
}
.hamburger.active .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}
.hamburger.active .line2 {
  opacity: 0;
}
.hamburger.active .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}`
    },

    // S069: 카운터 애니메이션
    'S069': {
      targets: [
        { name: '카운터 숫자', selector: '.counter', effects: ['숫자 증가 애니메이션'] }
      ],
      code: `.counter {
  animation: countUp 2s ease;
}
/* JavaScript로 숫자 카운팅 구현 */`
    },

    // S070: 타이핑 효과
    'S070': {
      targets: [
        { name: '타이핑 텍스트', selector: '.typing-text', effects: ['글자별 나타나기'] }
      ],
      code: `.typing-text {
  border-right: 2px solid var(--color-primary);
  animation: blink 0.7s infinite;
}
@keyframes blink {
  50% { border-color: transparent; }
}`
    },

    // ===== 고급 예제 (S071-S100) =====

    // S071: 풀스크린 섹션 스크롤
    'S071': {
      targets: [
        { name: '섹션', selector: '.section', effects: ['스냅 스크롤'] }
      ],
      code: `.section {
  scroll-snap-align: start;
  transition: 0.3s ease;
}
.section:hover {
  background: rgba(255,255,255,0.05);
}`
    },

    // S072: 분할 화면 레이아웃
    'S072': {
      targets: [
        { name: '좌측 패널', selector: '.left-panel', effects: ['확대 (hover)'] },
        { name: '우측 패널', selector: '.right-panel', effects: ['확대 (hover)'] }
      ],
      code: `.left-panel:hover, .right-panel:hover {
  flex: 1.2;
  filter: brightness(1.1);
}`
    },

    // S073: 그리드 라인 오버레이
    'S073': {
      targets: [
        { name: '그리드 토글 버튼', selector: '.grid-toggle', effects: ['배경색 변경'] }
      ],
      code: `.grid-toggle:hover {
  background: var(--color-primary);
  color: white;
}`
    },

    // S074: 반응형 대시보드
    'S074': {
      targets: [
        { name: '위젯', selector: '.dashboard-widget', effects: ['그림자 강화', '테두리 강조'] },
        { name: '사이드 메뉴', selector: '.side-menu-item', effects: ['배경색 변경', '좌측 바'] }
      ],
      code: `.dashboard-widget:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  border-color: var(--color-primary);
}
.side-menu-item:hover {
  background: rgba(79, 70, 229, 0.1);
  border-left: 4px solid var(--color-primary);
}`
    },

    // S075: 이모션 네비게이션
    'S075': {
      targets: [
        { name: '네비게이션 아이템', selector: '.emotion-nav-item', effects: ['확대', '회전', '색상 변경'] }
      ],
      code: `.emotion-nav-item:hover {
  transform: scale(1.2) rotate(5deg);
  color: var(--color-accent);
  background: rgba(255, 152, 0, 0.1);
}`
    },

    // S076: 드래그 앤 드롭 보드
    'S076': {
      targets: [
        { name: '보드 카드', selector: '.board-card', effects: ['그림자 강화 (dragging)'] },
        { name: '드롭 영역', selector: '.drop-zone', effects: ['배경색 강조 (dragover)'] }
      ],
      code: `.board-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  cursor: grab;
}
.board-card.dragging {
  opacity: 0.5;
  cursor: grabbing;
}
.drop-zone.drag-over {
  background: rgba(79, 70, 229, 0.1);
  border: 2px dashed var(--color-primary);
}`
    },

    // S077: 무한 스크롤
    'S077': {
      targets: [
        { name: '리스트 아이템', selector: '.scroll-item', effects: ['배경색 변경'] },
        { name: '로딩 스피너', selector: '.loader', effects: ['회전 애니메이션'] }
      ],
      code: `.scroll-item:hover {
  background: rgba(79, 70, 229, 0.05);
}
.loader {
  animation: spin 1s linear infinite;
}`
    },

    // S078: 가상 스크롤
    'S078': {
      targets: [
        { name: '가상 스크롤 아이템', selector: '.virtual-item', effects: ['배경색 변경'] }
      ],
      code: `.virtual-item:hover {
  background: rgba(79, 70, 229, 0.05);
}`
    },

    // S079: 리사이즈 가능 패널
    'S079': {
      targets: [
        { name: '리사이저 핸들', selector: '.resizer', effects: ['배경색 강조'] }
      ],
      code: `.resizer:hover {
  background: var(--color-primary);
}`
    },

    // S080: 컨텍스트 메뉴
    'S080': {
      targets: [
        { name: '컨텍스트 메뉴 아이템', selector: '.context-menu-item', effects: ['배경색 변경'] }
      ],
      code: `.context-menu-item:hover {
  background: var(--color-primary);
  color: white;
}`
    },

    // S081: 트리 뷰
    'S081': {
      targets: [
        { name: '트리 노드', selector: '.tree-node', effects: ['배경색 변경'] },
        { name: '확장/축소 아이콘', selector: '.expand-icon', effects: ['회전'] }
      ],
      code: `.tree-node:hover {
  background: rgba(79, 70, 229, 0.08);
}
.tree-node.expanded .expand-icon {
  transform: rotate(90deg);
}`
    },

    // S082: 데이터 테이블
    'S082': {
      targets: [
        { name: '테이블 행', selector: 'tbody tr', effects: ['배경색 변경'] },
        { name: '정렬 헤더', selector: '.sortable-header', effects: ['배경색 변경', '화살표 표시'] }
      ],
      code: `tbody tr:hover {
  background: rgba(79, 70, 229, 0.05);
}
.sortable-header:hover {
  background: rgba(79, 70, 229, 0.1);
  cursor: pointer;
}`
    },

    // S083: 차트 컴포넌트
    'S083': {
      targets: [
        { name: '차트 바', selector: '.chart-bar', effects: ['확대', '그림자'] }
      ],
      code: `.chart-bar:hover {
  transform: scaleY(1.05);
  filter: brightness(1.1);
  box-shadow: 0 -4px 12px rgba(79, 70, 229, 0.3);
}`
    },

    // S084: 코드 에디터 UI
    'S084': {
      targets: [
        { name: '툴바 버튼', selector: '.toolbar-btn', effects: ['배경색 변경'] }
      ],
      code: `.toolbar-btn:hover {
  background: rgba(79, 70, 229, 0.1);
}`
    },

    // S085: 이미지 크롭 도구
    'S085': {
      targets: [
        { name: '크롭 핸들', selector: '.crop-handle', effects: ['확대', '배경색 변경'] }
      ],
      code: `.crop-handle:hover {
  transform: scale(1.3);
  background: var(--color-primary);
}`
    },

    // S086: 결제 폼
    'S086': {
      targets: [
        { name: 'Input 필드', selector: 'input', effects: ['테두리 강조 (focus)'] },
        { name: '결제 버튼', selector: '.pay-btn', effects: ['배경색 변경', '위로 이동'] }
      ],
      code: `input:focus {
  border-color: var(--color-secondary);
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}
.pay-btn:hover {
  background: #059669;
  transform: translateY(-2px);
}`
    },

    // S087: 위지윅 에디터
    'S087': {
      targets: [
        { name: '포맷 버튼', selector: '.format-btn', effects: ['배경색 변경', '확대'] }
      ],
      code: `.format-btn:hover {
  background: rgba(79, 70, 229, 0.1);
  transform: scale(1.05);
}`
    },

    // S088: 자동완성 검색
    'S088': {
      targets: [
        { name: '검색 Input', selector: '.search-input', effects: ['테두리 강조'] },
        { name: '자동완성 아이템', selector: '.autocomplete-item', effects: ['배경색 변경'] }
      ],
      code: `.search-input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}
.autocomplete-item:hover {
  background: var(--color-primary);
  color: white;
}`
    },

    // S089: 폼 빌더
    'S089': {
      targets: [
        { name: '필드 추가 버튼', selector: '.add-field-btn', effects: ['배경색 변경'] },
        { name: '필드 항목', selector: '.field-item', effects: ['테두리 강조'] }
      ],
      code: `.add-field-btn:hover {
  background: var(--color-primary);
  color: white;
}
.field-item:hover {
  border-color: var(--color-primary);
}`
    },

    // S090: 서명 패드
    'S090': {
      targets: [
        { name: '지우기 버튼', selector: '.clear-btn', effects: ['배경색 변경'] },
        { name: '저장 버튼', selector: '.save-btn', effects: ['배경색 변경', '위로 이동'] }
      ],
      code: `.clear-btn:hover {
  background: #EF4444;
}
.save-btn:hover {
  background: #059669;
  transform: translateY(-2px);
}`
    },

    // S091: 비디오 랜딩 페이지
    'S091': {
      targets: [
        { name: '재생/일시정지 버튼', selector: '.play-btn', effects: ['확대', '그림자'] },
        { name: 'CTA 버튼', selector: '.cta-btn', effects: ['배경색 변경', '펄스'] }
      ],
      code: `.play-btn:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 16px rgba(255,255,255,0.5);
}
.cta-btn:hover {
  background: var(--color-accent);
  animation: pulse 1s infinite;
}`
    },

    // S092: 3D 카드 효과
    'S092': {
      targets: [
        { name: '3D 카드', selector: '.card-3d', effects: ['3D 회전 (마우스 위치)'] }
      ],
      code: `.card-3d:hover {
  transform: perspective(1000px) rotateX(var(--rotateX)) rotateY(var(--rotateY));
}
/* JavaScript로 마우스 위치에 따라 회전 각도 조정 */`
    },

    // S093: 인터랙티브 지도
    'S093': {
      targets: [
        { name: '지도 영역', selector: '.map-region', effects: ['색상 변경', '확대'] }
      ],
      code: `.map-region:hover {
  fill: var(--color-primary);
  transform: scale(1.05);
  cursor: pointer;
}`
    },

    // S094: 머티리얼 디자인 UI
    'S094': {
      targets: [
        { name: 'FAB 버튼', selector: '.fab', effects: ['확대', '그림자 강화'] },
        { name: '카드', selector: '.md-card', effects: ['그림자 변화'] }
      ],
      code: `.fab:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 24px rgba(79, 70, 229, 0.4);
}
.md-card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}`
    },

    // S095: 뉴모피즘 UI
    'S095': {
      targets: [
        { name: '뉴모피즘 버튼', selector: '.neu-btn', effects: ['그림자 반전 (pressed)'] },
        { name: '뉴모피즘 카드', selector: '.neu-card', effects: ['그림자 강화'] }
      ],
      code: `.neu-btn:hover {
  box-shadow: inset 5px 5px 10px rgba(0,0,0,0.1),
              inset -5px -5px 10px rgba(255,255,255,0.7);
}
.neu-card:hover {
  box-shadow: 10px 10px 20px rgba(0,0,0,0.15),
              -10px -10px 20px rgba(255,255,255,0.7);
}`
    },

    // S096: 파티클 배경
    'S096': {
      targets: [
        { name: '파티클', selector: '.particle', effects: ['마우스 반응 이동'] }
      ],
      code: `.particle {
  transition: transform 0.3s ease;
}
/* JavaScript로 마우스 위치에 따라 파티클 이동 */`
    },

    // S097: SVG 패스 애니메이션
    'S097': {
      targets: [
        { name: 'SVG 패스', selector: 'path', effects: ['그리기 애니메이션'] }
      ],
      code: `path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 3s ease forwards;
}
@keyframes draw {
  to { stroke-dashoffset: 0; }
}`
    },

    // S098: 페이지 전환 효과
    'S098': {
      targets: [
        { name: '페이지', selector: '.page', effects: ['슬라이드 전환'] }
      ],
      code: `.page.exit {
  animation: slideOut 0.5s ease;
}
.page.enter {
  animation: slideIn 0.5s ease;
}
@keyframes slideOut {
  to { transform: translateX(-100%); opacity: 0; }
}
@keyframes slideIn {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`
    },

    // S099: 모핑 효과
    'S099': {
      targets: [
        { name: '모핑 도형', selector: '.morph-shape', effects: ['도형 변형'] }
      ],
      code: `.morph-shape {
  animation: morph 5s ease infinite;
}
@keyframes morph {
  0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
  50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
  75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
}`
    },

    // S100: 인터랙티브 배경
    'S100': {
      targets: [
        { name: '배경 요소', selector: '.bg-element', effects: ['마우스 따라 이동', '색상 변화'] }
      ],
      code: `.bg-element {
  transition: transform 0.3s ease, background 0.5s ease;
}
/* JavaScript로 마우스 위치에 따라 transform 및 색상 조정 */`
    }
  };

  // 해당 예제의 가이드가 있으면 반환, 없으면 카테고리 기반 기본 가이드
  if (interactionGuides[example.id]) {
    const guide = interactionGuides[example.id];
    return `
      <h3>🎨 인터랙션 상세 요구사항</h3>
      <div style="background: #E0F2FE; border-left: 4px solid #0EA5E9; padding: 16px; border-radius: 4px; margin-top: 12px;">
        <p style="margin-bottom: 12px;"><strong>⚠️ 이 예제에서 반드시 hover 효과를 적용해야 할 요소:</strong></p>

        <h4 style="margin-top: 16px; color: #0369a1;">📌 인터랙션 대상</h4>
        <ul style="margin-left: 20px; margin-bottom: 16px;">
${guide.targets.map(target => `          <li><strong>${target.name}</strong> (<code>${target.selector}</code>): ${target.effects.join(', ')}</li>`).join('\n')}
        </ul>

        <h4 style="margin-top: 16px; color: #0369a1;">💻 구현 코드</h4>
        <pre style="background: #fff; padding: 16px; border-radius: 4px; margin-top: 12px; font-size: 0.9rem; overflow-x: auto;"><code>${guide.code}</code></pre>

        <div style="background: #FEF3C7; border: 1px solid #F59E0B; padding: 12px; border-radius: 4px; margin-top: 16px;">
          <strong>💡 팁:</strong> 위 요소들에 <code>transition: 0.3s ease</code>를 먼저 설정한 후 hover 효과를 적용하세요!
        </div>
      </div>`;
  }

  // 기본 카테고리별 가이드 (예제별 가이드가 없는 경우)
  const categoryDefaults = {
    layout: {
      targets: '헤더의 네비게이션 링크, 사이드바 메뉴 링크',
      example: 'header nav a, .sidebar a'
    },
    component: {
      targets: '버튼, 카드 (해당되는 경우)',
      example: '.btn, .card'
    },
    form: {
      targets: '입력 필드 (focus), 제출 버튼',
      example: 'input:focus, .btn'
    },
    visual: {
      targets: 'CTA 버튼, 이미지 (해당되는 경우)',
      example: '.btn, img'
    },
    animation: {
      targets: '모든 애니메이션 요소',
      example: '.animated-element'
    }
  };

  const defaultGuide = categoryDefaults[example.category] || categoryDefaults.component;

  return `
      <h3>🎨 인터랙션 상세 요구사항</h3>
      <div style="background: #E0F2FE; border-left: 4px solid #0EA5E9; padding: 16px; border-radius: 4px; margin-top: 12px;">
        <p style="margin-bottom: 12px;"><strong>⚠️ 이 예제에서 hover/focus 효과를 적용할 대상:</strong></p>
        <p style="margin-left: 20px; margin-bottom: 16px;"><strong>${defaultGuide.targets}</strong> (예: <code>${defaultGuide.example}</code>)</p>

        <h4 style="margin-top: 16px; color: #0369a1;">💻 기본 코드 패턴</h4>
        <pre style="background: #fff; padding: 16px; border-radius: 4px; margin-top: 12px; font-size: 0.9rem;"><code>/* 클릭 가능한 요소 */
.element {
  transition: 0.3s ease;
}

.element:hover {
  /* 효과: 색상 변경, transform, 그림자 등 */
}</code></pre>

        <div style="background: #FEF3C7; border: 1px solid #F59E0B; padding: 12px; border-radius: 4px; margin-top: 16px;">
          <strong>💡 참고:</strong> C-answer.html 파일에서 정확한 인터랙션 구현을 확인하세요!
        </div>
      </div>`;
}

// A-guide.html 템플릿 생성
function generateGuideHTML(example) {
  const categoryGuide = categoryGuides[example.category];
  const difficultyInfo = difficultyLevels[example.difficulty];
  const diagram = layoutDiagrams[example.category] ? layoutDiagrams[example.category](example) : '';
  const interactionGuide = generateInteractionGuide(example);

  // custom-guide-data-full.js에서 맞춤형 데이터 가져오기
  const customData = customGuideData[example.id];

  // 맞춤형 데이터가 있으면 사용, 없으면 기본 데이터 사용
  const learningPoints = customData?.learningPoints || categoryGuide.focusAreas;
  const htmlReqs = customData?.requirements?.html || [];
  const cssReqs = customData?.requirements?.css || [];
  const detailReqs = customData?.requirements?.details || [];
  const implementationSteps = customData?.implementation || [];
  const checklist = customData?.checklist || [];
  const stylesData = customData?.styles || null;

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${example.id} - ${example.title} | 가이드</title>
  <link rel="stylesheet" href="../assets/css/common.css">
</head>
<body>
  <div class="guide-container">
    <header class="guide-header">
      <span class="set-id">${example.id}</span>
      <h1>${categoryGuide.icon} ${example.title}</h1>
      <p>${example.desc}</p>
      <p style="margin-top: 8px; opacity: 0.9;">${difficultyInfo.emoji} ${difficultyInfo.label} | ${difficultyInfo.complexity}</p>
    </header>

    <section class="guide-section">
      <h2>📋 목표</h2>
      <p>${example.desc}</p>
      <p style="margin-top: 12px;">${difficultyInfo.description}</p>
    </section>

    <section class="guide-section">
      <h2>🖼️ 완성 예시 미리보기</h2>
      <p>아래는 이번 예제의 완성된 모습입니다. 이 구조를 참고하여 코드를 작성해보세요!</p>
      ${diagram}
      <div style="background: #FFF9E6; border-left: 4px solid #FF9800; padding: 16px; border-radius: 4px; margin-top: 16px;">
        <strong>💡 참고:</strong> 완성된 정답 코드는 <code>C-answer.html</code> 파일에서 확인할 수 있습니다.<br>
        먼저 스스로 도전해보고, 막힐 때만 참고하세요!
      </div>
    </section>

    <section class="guide-section">
      <h2>🎯 주요 학습 포인트</h2>
      <ul>
${Array.isArray(learningPoints) ? learningPoints.map(point => `        <li>${point}</li>`).join('\n') : ''}
      </ul>
    </section>

    <section class="guide-section">
      <h2>📐 퍼블리싱 요구사항</h2>

      ${htmlReqs.length > 0 ? `<h3>HTML 구조</h3>
      <ul>
${htmlReqs.map(req => `        <li>${req}</li>`).join('\n')}
      </ul>` : ''}

      ${cssReqs.length > 0 ? `<h3>CSS 레이아웃</h3>
      <ul>
${cssReqs.map(req => `        <li>${req}</li>`).join('\n')}
      </ul>` : ''}

      ${detailReqs.length > 0 ? `<h3>스타일링 세부사항</h3>
      <ul>
${detailReqs.map(req => `        <li>${req}</li>`).join('\n')}
      </ul>` : ''}

${!customData ? `
      <h3>기본 요구사항</h3>
      <ul>
${categoryGuide.requirements.map(req => `        <li>${req}</li>`).join('\n')}
      </ul>

      <h3>추가 요구사항</h3>
      <ul>
        <li>모든 인터랙티브 요소에 적절한 hover 효과 적용</li>
        <li>transition은 0.3s ease 기본값 사용</li>
        <li>색상은 CSS 변수로 정의하여 일관성 유지</li>
        <li>8px 간격 시스템 준수</li>
      </ul>
` : ''}

${interactionGuide}
    </section>

    ${stylesData ? `<section class="guide-section">
      <h2>🎨 스타일 가이드 (이 예제 전용)</h2>

      ${stylesData.colors ? `<h3>색상 팔레트</h3>
      <ul>
${stylesData.colors.map(color => `        <li><strong>${color.name}:</strong> <code>${color.value}</code> - ${color.desc}</li>`).join('\n')}
      </ul>` : ''}

      ${stylesData.typography ? `<h3>타이포그래피</h3>
      <ul>
${stylesData.typography.map(typo => `        <li><strong>${typo.element}:</strong> ${typo.style}</li>`).join('\n')}
      </ul>` : ''}

      ${stylesData.spacing ? `<h3>간격</h3>
      <ul>
${stylesData.spacing.map(space => `        <li><strong>${space.element}:</strong> ${space.value}</li>`).join('\n')}
      </ul>` : ''}
    </section>` : `<section class="guide-section">
      <h2>🎨 스타일 가이드</h2>

      <h3>색상 팔레트</h3>
      <div class="color-palette">
        <div class="color-swatch" style="background: #4F46E5;">#4F46E5</div>
        <div class="color-swatch" style="background: #10B981;">#10B981</div>
        <div class="color-swatch" style="background: #FF9800;">#FF9800</div>
        <div class="color-swatch" style="background: #FFFFFF; border: 2px solid #E5E7EB;">#FFFFFF</div>
        <div class="color-swatch" style="background: #F3F4F6; color: #222;">#F3F4F6</div>
        <div class="color-swatch" style="background: #222222; color: #FFF;">#222222</div>
      </div>

      <h3>타이포그래피</h3>
      <ul>
        <li>폰트: Pretendard, -apple-system, BlinkMacSystemFont, sans-serif</li>
        <li>제목 크기: 2.5rem (large), 2rem (medium), 1.5rem (small)</li>
        <li>본문 크기: 1rem (기본), 0.875rem (작게)</li>
        <li>행간: 1.6 (본문), 1.2 (제목)</li>
      </ul>

      <h3>간격 시스템 (8px scale)</h3>
      <ul>
        <li>8px, 16px, 24px, 32px, 40px, 48px</li>
        <li>요소 간 간격은 위 값들을 조합하여 사용</li>
      </ul>
    </section>`}

    ${implementationSteps.length > 0 ? `<section class="guide-section">
      <h2>💡 단계별 구현 가이드</h2>

${implementationSteps.map(step => {
  if (step.code) {
    return `      <h3>${step.step}</h3>
      <div style="background: #F3F4F6; padding: 16px; border-radius: 8px; margin: 12px 0;">
        <pre><code>${step.code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
      </div>`;
  } else if (step.description) {
    return `      <h3>${step.step}</h3>
      <p style="margin-left: 20px; color: #666;">${step.description}</p>`;
  }
  return '';
}).join('\n\n')}
    </section>` : `<section class="guide-section">
      <h2>💡 구현 힌트</h2>
      <ul>
        <li>먼저 HTML 구조를 시맨틱하게 작성하세요</li>
        <li>CSS는 레이아웃 → 타이포그래피 → 색상 → 인터랙션 순서로 작성하세요</li>
        <li>JavaScript가 필요한 경우, 이벤트 리스너를 명확히 분리하세요</li>
        <li>크롬 개발자 도구로 요소를 검사하며 조정하세요</li>
        <li>모바일 반응형을 고려하세요 (필요시 미디어 쿼리 사용)</li>
      </ul>
    </section>`}

    <section class="guide-section">
      <h2>✅ 완성 체크리스트</h2>
      <ul>
${checklist.length > 0 ? checklist.map(item => `        <li>□ ${item}</li>`).join('\n') : `        <li>□ HTML 구조가 시맨틱하고 명확한가?</li>
        <li>□ CSS 클래스명이 의미있고 일관적인가?</li>
        <li>□ 레이아웃이 의도한 대로 배치되었는가?</li>
        <li>□ 모든 인터랙션이 부드럽게 작동하는가?</li>
        <li>□ 색상과 타이포그래피가 일관적인가?</li>
        <li>□ 코드가 깔끔하고 주석이 적절한가?</li>`}
      </ul>
    </section>

    <div class="button-group">
      <a href="../index.html" class="btn btn-secondary">← 목록으로</a>
      <a href="B-practice.html" class="btn btn-primary">실습 시작하기 →</a>
    </div>
  </div>
</body>
</html>`;
}

// 예제별 완성 코드 (C-answer.html용)
// 모든 예제는 custom-guide-data-full.js의 implementation을 사용합니다
const answerTemplates = {};

// 아래는 더 이상 사용하지 않음 - custom-guide-data-full.js로 통합
/*
const answerTemplates_OLD = {
  'S001': {
    html: `
  <header>
    <h1>웹사이트 헤더</h1>
    <nav>
      <a href="#">홈</a>
      <a href="#">소개</a>
      <a href="#">연락처</a>
    </nav>
  </header>

  <main>
    <h2>메인 콘텐츠</h2>
    <p>이곳에 주요 콘텐츠가 들어갑니다. Header, Main, Footer로 구성된 기본 3단 레이아웃입니다.</p>
    <p>시맨틱 HTML을 사용하여 구조를 명확하게 표현했습니다.</p>
  </main>

  <footer>
    <p>&copy; 2024 웹 퍼블리싱 훈련. All rights reserved.</p>
  </footer>`,
    css: `
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    header {
      background: var(--color-primary);
      color: white;
      padding: var(--spacing-3);
      text-align: center;
    }

    header h1 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    header nav {
      display: flex;
      justify-content: center;
      gap: var(--spacing-2);
    }

    header nav a {
      color: white;
      text-decoration: none;
      padding: 0 var(--spacing-2);
      transition: var(--transition);
    }

    header nav a:hover {
      text-decoration: underline;
      opacity: 0.8;
    }

    main {
      flex: 1;
      padding: var(--spacing-6);
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }

    main h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: var(--spacing-2);
    }

    main p {
      margin-top: var(--spacing-2);
      line-height: 1.6;
    }

    footer {
      background: var(--color-dark);
      color: white;
      padding: var(--spacing-4);
      text-align: center;
    }

    footer p {
      font-size: 0.875rem;
    }`
  },
  'S002': {
    html: `
  <div class="card-container">
    <div class="card">
      <h2>중앙 정렬 카드</h2>
      <p>Flexbox를 사용하여 화면 중앙에 배치된 카드입니다.</p>
      <button class="btn">자세히 보기</button>
    </div>
  </div>`,
    css: `
    .card-container {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--color-light);
    }

    .card {
      background: white;
      padding: var(--spacing-5);
      border-radius: var(--radius);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      text-align: center;
    }

    .card h2 {
      color: var(--color-primary);
      margin-bottom: var(--spacing-2);
    }

    .btn {
      background: var(--color-primary);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: var(--radius);
      cursor: pointer;
      font-size: 1rem;
      transition: var(--transition);
    }

    .btn:hover {
      background: #3730a3;
      transform: translateY(-2px);
    }`
  },
  'S003': {
    html: `
  <div class="layout">
    <aside class="sidebar">
      <h2>사이드바</h2>
      <nav>
        <ul>
          <li><a href="#">메뉴 1</a></li>
          <li><a href="#">메뉴 2</a></li>
          <li><a href="#">메뉴 3</a></li>
          <li><a href="#">메뉴 4</a></li>
        </ul>
      </nav>
    </aside>
    <main class="content">
      <h1>메인 콘텐츠</h1>
      <p>Grid를 사용한 2단 컬럼 레이아웃입니다.</p>
      <p style="margin-top: 16px;">Sidebar와 Content 영역이 나란히 배치되어 있습니다.</p>
    </main>
  </div>`,
    css: `
    .layout {
      display: grid;
      grid-template-columns: 250px 1fr;
      min-height: 100vh;
      gap: 0;
    }

    .sidebar {
      background: var(--color-dark);
      color: white;
      padding: var(--spacing-4);
    }

    .sidebar h2 {
      margin-bottom: var(--spacing-3);
      font-size: 1.5rem;
    }

    .sidebar ul {
      list-style: none;
    }

    .sidebar li {
      margin-bottom: var(--spacing-2);
    }

    .sidebar a {
      color: white;
      text-decoration: none;
      transition: var(--transition);
    }

    .sidebar a:hover {
      color: var(--color-accent);
    }

    .content {
      padding: var(--spacing-6);
      background: white;
    }

    .content h1 {
      color: var(--color-primary);
      margin-bottom: var(--spacing-3);
    }`
  },
  'S004': {
    html: `
  <header class="header">
    <div class="container">
      <div class="logo">MyBrand</div>
      <nav class="nav">
        <a href="#">홈</a>
        <a href="#">서비스</a>
        <a href="#">소개</a>
        <a href="#">연락처</a>
      </nav>
    </div>
  </header>
  <main style="padding: 48px 24px; text-align: center;">
    <h1>반응형 헤더 예시</h1>
    <p>화면 크기를 조절해보세요!</p>
  </main>`,
    css: `
    .header {
      background: var(--color-primary);
      color: white;
      padding: var(--spacing-2) 0;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 var(--spacing-3);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .nav {
      display: flex;
      gap: var(--spacing-3);
    }

    .nav a {
      color: white;
      text-decoration: none;
      transition: var(--transition);
    }

    .nav a:hover {
      opacity: 0.8;
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        gap: var(--spacing-2);
      }

      .nav {
        flex-direction: column;
        text-align: center;
        gap: var(--spacing-1);
      }
    }`
  },
  'S005': {
    html: `
  <div class="container">
    <h1 style="text-align: center; margin-bottom: 32px; color: var(--color-dark);">카드 그리드</h1>
    <div class="grid">
      <div class="card">
        <div class="card-icon">📱</div>
        <h3>카드 1</h3>
        <p>Grid 레이아웃으로 구성된 카드입니다.</p>
      </div>
      <div class="card">
        <div class="card-icon">💻</div>
        <h3>카드 2</h3>
        <p>반응형으로 배치됩니다.</p>
      </div>
      <div class="card">
        <div class="card-icon">🎨</div>
        <h3>카드 3</h3>
        <p>일관된 간격을 유지합니다.</p>
      </div>
      <div class="card">
        <div class="card-icon">🚀</div>
        <h3>카드 4</h3>
        <p>Grid gap으로 간격 조정</p>
      </div>
      <div class="card">
        <div class="card-icon">⭐</div>
        <h3>카드 5</h3>
        <p>hover 효과가 있습니다.</p>
      </div>
      <div class="card">
        <div class="card-icon">🎯</div>
        <h3>카드 6</h3>
        <p>그림자로 입체감 표현</p>
      </div>
    </div>
  </div>`,
    css: `
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--spacing-6);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--spacing-3);
    }

    .card {
      background: white;
      padding: var(--spacing-4);
      border-radius: var(--radius);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      text-align: center;
      transition: var(--transition);
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    }

    .card-icon {
      font-size: 3rem;
      margin-bottom: var(--spacing-2);
    }

    .card h3 {
      color: var(--color-primary);
      margin-bottom: var(--spacing-1);
    }

    @media (max-width: 768px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }`
  },
  'S006': {
    html: `
  <div class="container">
    <h1 style="text-align: center; margin-bottom: 32px;">기본 버튼 스타일</h1>
    <div class="button-group">
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-outline">Outline</button>
    </div>
  </div>`,
    css: `
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: var(--spacing-6);
      text-align: center;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .button-group {
      display: flex;
      gap: var(--spacing-2);
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      padding: 12px 32px;
      border: none;
      border-radius: var(--radius);
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: var(--transition);
    }

    .btn-primary {
      background: var(--color-primary);
      color: white;
    }

    .btn-primary:hover {
      background: #3730a3;
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: var(--color-secondary);
      color: white;
    }

    .btn-secondary:hover {
      background: #059669;
      transform: translateY(-2px);
    }

    .btn-outline {
      background: transparent;
      color: var(--color-primary);
      border: 2px solid var(--color-primary);
    }

    .btn-outline:hover {
      background: var(--color-primary);
      color: white;
    }`
  }
};
*/

// C-answer.html 템플릿 생성
function generateAnswerHTML(example) {
  // custom-guide-data-full.js에서 implementation 데이터 확인
  const customData = customGuideData[example.id];

  let answer;

  // 1순위: 수동으로 정의된 answerTemplates (S001-S006 등)
  if (answerTemplates[example.id]) {
    answer = answerTemplates[example.id];
  }
  // 2순위: custom implementation 데이터가 있으면 조합해서 사용
  else if (customData && customData.implementation && customData.implementation.length > 0) {
    const htmlStep = customData.implementation.find(step => step.step.includes('HTML') && step.code);
    const jsStep = customData.implementation.find(step => step.step.includes('JavaScript') && step.code);

    // CSS 단계: HTML과 JavaScript가 아닌 모든 code가 있는 단계
    const cssSteps = customData.implementation.filter(step =>
      step.code &&
      !step.step.includes('HTML') &&
      !step.step.includes('JavaScript')
    );

    // HTML 단계가 있는 경우 (CSS 유무 상관없이)
    if (htmlStep) {
      const html = htmlStep.code;
      const css = cssSteps.length > 0 ? cssSteps.map(step => step.code).join('\n\n    ') : '';
      const js = jsStep ? jsStep.code : '';
      answer = { html, css, js };
    }
    // HTML 단계가 없지만 CSS는 있고, requirements에 html 정보가 있는 경우
    // requirements에서 기본 HTML 구조 생성
    else if (!htmlStep && cssSteps.length > 0 && customData.requirements && customData.requirements.html) {
      const css = cssSteps.map(step => step.code).join('\n\n    ');
      const js = jsStep ? jsStep.code : '';

      // CSS에서 모든 클래스명 추출 (반드시 문자로 시작)
      const classMatches = css.matchAll(/\.([a-zA-Z][a-zA-Z0-9_-]*)/g);
      const classes = [...new Set(Array.from(classMatches, m => m[1]))];

      // "container", "wrapper" 등으로 끝나는 클래스를 컨테이너로, 나머지를 내부 요소로 판단
      const containerClass = classes.find(c => c.includes('container') || c.includes('wrapper')) || classes[0];
      const innerClasses = classes.filter(c =>
        c !== containerClass &&
        !c.includes('active') &&
        !c.includes('hover') &&
        !c.includes('placeholder') &&
        !c.includes('disabled')
      );

      // 기본 HTML 구조 생성
      if (innerClasses.length > 0) {
        const innerElements = innerClasses.slice(0, 2).map(c => `  <div class="${c}"></div>`).join('\n');
        html = `<div class="${containerClass}">\n${innerElements}\n</div>`;
      } else {
        html = `<div class="${containerClass}"></div>`;
      }

      answer = { html, css, js };
    }
    else {
      // HTML도 CSS도 충분하지 않으면 기본 생성기 사용
      answer = generateDefaultAnswerByCategory(example);
    }
  }
  // 3순위: 카테고리 기반 자동 생성
  else {
    answer = generateDefaultAnswerByCategory(example);
  }

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${example.id} - ${example.title} | 완성 예시</title>
  <style>
    /* 기본 리셋 */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      line-height: 1.6;
      color: #222;
    }

    /* CSS 변수 정의 */
    :root {
      /* 색상 */
      --color-primary: #4F46E5;
      --color-secondary: #10B981;
      --color-accent: #FF9800;
      --color-dark: #222222;
      --color-gray: #6B7280;
      --color-light: #F3F4F6;
      --color-white: #FFFFFF;

      /* 간격 (8px scale) */
      --spacing-1: 8px;
      --spacing-2: 16px;
      --spacing-3: 24px;
      --spacing-4: 32px;
      --spacing-5: 40px;
      --spacing-6: 48px;

      /* 기타 */
      --radius: 8px;
      --transition: 0.3s ease;
    }

    /* ========================================
       완성 예시 CSS
       ======================================== */
${answer.css || ''}

  </style>
</head>
<body>
  <!-- ========================================
       완성 예시 HTML
       ======================================== -->
${answer.html || ''}

  <!-- 안내 배너 (하단 고정) -->
  <div style="position: fixed; bottom: 24px; right: 24px; background: #10B981; color: white; padding: 16px 24px; text-align: center; font-size: 0.875rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 9999; border-radius: 12px; max-width: 400px;">
    <strong>✅ ${example.id} 완성 예시</strong>
    <div style="margin-top: 8px;">
      <a href="A-guide.html" style="color: white; text-decoration: none; border: 1px solid white; padding: 6px 12px; border-radius: 6px; display: inline-block; margin-right: 8px;">← 가이드</a>
      <a href="B-practice.html" style="color: white; text-decoration: none; border: 1px solid white; padding: 6px 12px; border-radius: 6px; display: inline-block;">실습하기 →</a>
    </div>
  </div>

  <script>
    // ========================================
    // 완성 예시 JavaScript (필요시)
    // ========================================
${answer.js ? answer.js : ''}

    console.log('✅ ${example.id} - ${example.title} 완성 예시');
  </script>
</body>
</html>`;
}

// B-practice.html 템플릿 생성
function generatePracticeHTML(example) {
  const categoryGuide = categoryGuides[example.category];

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${example.id} - ${example.title} | 실습</title>
  <style>
    /* 기본 리셋 */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      line-height: 1.6;
      color: #222;
    }

    /* ========================================
       여기에 CSS를 작성하세요
       ======================================== */

    /* 1. CSS 변수 정의 */
    :root {
      /* 색상 */
      --color-primary: #4F46E5;
      --color-secondary: #10B981;
      --color-accent: #FF9800;
      --color-dark: #222222;
      --color-gray: #6B7280;
      --color-light: #F3F4F6;
      --color-white: #FFFFFF;

      /* 간격 (8px scale) */
      --spacing-1: 8px;
      --spacing-2: 16px;
      --spacing-3: 24px;
      --spacing-4: 32px;
      --spacing-5: 40px;
      --spacing-6: 48px;

      /* 기타 */
      --radius: 8px;
      --transition: 0.3s ease;
    }

    /* 2. 레이아웃 스타일 */
    /* TODO: 메인 레이아웃 구성 */


    /* 3. 컴포넌트 스타일 */
    /* TODO: 주요 컴포넌트 디자인 */


    /* 4. 타이포그래피 */
    /* TODO: 텍스트 스타일 */


    /* 5. 인터랙션 */
    /* TODO: hover, active, focus 등 */


    /* 6. 반응형 (선택사항) */
    @media (max-width: 768px) {
      /* 모바일 스타일 */
    }

  </style>
</head>
<body>
  <!-- ========================================
       여기에 HTML을 작성하세요
       ======================================== -->

  <!--
    실습 과제: ${example.title}
    설명: ${example.desc}

    주요 학습 포인트:
${categoryGuide.focusAreas.map(area => `    - ${area}`).join('\n')}
  -->

  <!-- 여기서부터 코드를 작성하세요 -->


  <!-- 힌트 영역 (완성 후 삭제 가능) -->
  <div style="position: fixed; bottom: 24px; right: 24px; background: #4F46E5; color: white; padding: 16px 24px; border-radius: 12px; font-size: 0.875rem; box-shadow: 0 4px 12px rgba(0,0,0,0.15); max-width: 300px; z-index: 9999;">
    <strong>💡 실습 힌트</strong><br>
    막힐 때는 A-guide.html을 참고하세요!<br>
    개발자 도구(F12)로 요소를 검사해보세요.
  </div>

  <script>
    // ========================================
    // 여기에 JavaScript를 작성하세요 (필요시)
    // ========================================

    // 예시: DOM 요소 선택
    // const element = document.querySelector('.your-class');

    // 예시: 이벤트 리스너
    // element.addEventListener('click', function() {
    //   // 동작 코드
    // });

  </script>
</body>
</html>`;
}

// 예제 생성 함수
function generateExample(example) {
  const folderPath = path.join(__dirname, example.id);

  // 폴더가 없으면 생성
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // A-guide.html 생성
  const guideHTML = generateGuideHTML(example);
  fs.writeFileSync(path.join(folderPath, 'A-guide.html'), guideHTML, 'utf-8');

  // B-practice.html 생성
  const practiceHTML = generatePracticeHTML(example);
  fs.writeFileSync(path.join(folderPath, 'B-practice.html'), practiceHTML, 'utf-8');

  // C-answer.html 생성
  const answerHTML = generateAnswerHTML(example);
  fs.writeFileSync(path.join(folderPath, 'C-answer.html'), answerHTML, 'utf-8');

  console.log(`✅ ${example.id} - ${example.title} 생성 완료 (A-guide, B-practice, C-answer)`);
}

// 모든 예제 생성
console.log('🚀 퍼블리싱 훈련 예제 생성 시작...\n');

examplesData.forEach((example, index) => {
  try {
    generateExample(example);
  } catch (error) {
    console.error(`❌ ${example.id} 생성 실패:`, error.message);
  }
});

console.log(`\n✨ 총 ${examplesData.length}개 예제 생성 완료!`);
console.log('📁 각 폴더에 A-guide.html과 B-practice.html이 생성되었습니다.');
console.log('🌐 index.html을 브라우저에서 열어 확인하세요!');
