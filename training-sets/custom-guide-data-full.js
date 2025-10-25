// 전체 100개 예제의 맞춤형 가이드 데이터
// 이 파일은 generate-examples.js에서 require하여 사용

const customGuideData = {
  // ========== S001-S010 (초급 - 레이아웃 & 컴포넌트 기초) ==========

  'S001': {
    learningPoints: [
      '<strong>&lt;header&gt;, &lt;main&gt;, &lt;footer&gt;</strong> 시맨틱 태그의 올바른 사용법',
      '<strong>Flexbox</strong>를 사용한 수직 레이아웃 (display: flex, flex-direction: column)',
      '<strong>flex: 1</strong>을 활용해 Main 영역이 남는 공간을 모두 차지하게 만들기',
      'Header와 Footer를 화면 상단/하단에 고정하는 방법'
    ],
    requirements: {
      html: [
        '<code>&lt;header&gt;</code> 태그 안에 제목과 <code>&lt;nav&gt;</code> 배치',
        '<code>&lt;nav&gt;</code> 안에 3개의 링크 (홈, 소개, 연락처) 포함',
        '<code>&lt;main&gt;</code> 태그로 주요 콘텐츠 영역 마크업',
        '<code>&lt;footer&gt;</code> 태그로 저작권 정보 표시'
      ],
      css: [
        '<strong>Body:</strong> <code>display: flex; flex-direction: column; min-height: 100vh;</code>',
        '<strong>Main:</strong> <code>flex: 1;</code> (남는 공간 모두 차지)',
        '<strong>Header:</strong> Primary 색상 배경 (#4F46E5), 중앙 정렬, 24px 패딩',
        '<strong>Footer:</strong> 어두운 배경 (#222), 중앙 정렬, 32px 패딩',
        '<strong>Main:</strong> 최대 너비 1200px, 좌우 중앙 정렬, 48px 패딩'
      ],
      details: [
        '네비게이션 링크: 흰색, 밑줄 없음, 좌우 16px 간격',
        'CSS 변수로 색상 정의 (--color-primary, --color-dark 등)',
        'Pretendard 폰트 사용, line-height: 1.6'
      ]
    },
    styles: {
      colors: [
        { name: 'Header 배경', value: '#4F46E5', desc: 'Primary - Indigo' },
        { name: 'Footer 배경', value: '#222222', desc: 'Dark' },
        { name: 'Header/Footer 텍스트', value: '#FFFFFF', desc: 'White' },
        { name: 'Main 텍스트', value: '#222222', desc: 'Dark' }
      ],
      typography: [
        { element: 'Header 제목', style: '1.5rem, 굵게 (font-weight: bold)' },
        { element: 'Navigation 링크', style: '1rem, 보통 (font-weight: normal)' },
        { element: 'Main 제목', style: '2rem, 굵게' },
        { element: 'Main 본문', style: '1rem, line-height: 1.6' },
        { element: 'Footer 텍스트', style: '0.875rem (14px)' }
      ],
      spacing: [
        { element: 'Header 패딩', value: '24px (상하좌우)' },
        { element: 'Main 패딩', value: '48px' },
        { element: 'Footer 패딩', value: '32px (상하좌우)' },
        { element: 'Navigation 링크 간격', value: '좌우 16px 마진' },
        { element: 'Main 문단 간격', value: '상단 16px 마진' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조 작성',
        code: `<body>
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
    <p>내용...</p>
  </main>
  <footer>
    <p>&copy; 2024 웹 퍼블리싱 훈련</p>
  </footer>
</body>`
      },
      {
        step: '2단계: CSS 변수 정의',
        code: `:root {
  --color-primary: #4F46E5;
  --color-dark: #222222;
  --color-white: #FFFFFF;
  --spacing-3: 24px;
  --spacing-4: 32px;
  --spacing-6: 48px;
}`
      },
      {
        step: '3단계: Flexbox 레이아웃 적용',
        code: `body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
}`
      },
      {
        step: '4단계: Header, Main, Footer 스타일링',
        description: '각 섹션에 배경색, 패딩, 중앙 정렬 적용'
      },
      {
        step: '5단계: Navigation 링크 hover 효과 추가',
        description: '위의 "인터랙션 상세 요구사항" 참고'
      }
    ],
    checklist: [
      '<code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code> 시맨틱 태그를 사용했나요?',
      'Body에 <code>display: flex; flex-direction: column; min-height: 100vh;</code>를 적용했나요?',
      'Main에 <code>flex: 1;</code>을 적용해 남는 공간을 차지하나요?',
      'Header 배경이 Primary 색상(#4F46E5)인가요?',
      'Footer 배경이 Dark 색상(#222)인가요?',
      'Navigation 링크에 hover 효과(밑줄, 투명도)가 있나요?',
      'Main 영역이 최대 너비 1200px이고 중앙 정렬되었나요?',
      'CSS 변수를 사용해 색상과 간격을 정의했나요?',
      '브라우저 높이가 작아도 Footer가 하단에 붙어있나요?'
    ]
  },

  'S002': {
    learningPoints: [
      '<strong>Flexbox</strong>를 활용한 완벽한 중앙 정렬 (수평 + 수직)',
      '<code>justify-content: center</code>와 <code>align-items: center</code>의 차이',
      '카드 컴포넌트의 기본 구조 (제목, 내용, 버튼)',
      'box-shadow를 사용한 깊이감 표현'
    ],
    requirements: {
      html: [
        '카드를 감싸는 Container <code>&lt;div&gt;</code> 생성',
        '카드 내부에 제목(<code>&lt;h2&gt;</code>), 설명(<code>&lt;p&gt;</code>), 버튼 포함',
        '버튼은 <code>&lt;button&gt;</code> 또는 <code>&lt;a class="btn"&gt;</code> 태그 사용'
      ],
      css: [
        '<strong>Container:</strong> <code>display: flex; justify-content: center; align-items: center; min-height: 100vh;</code>',
        '<strong>Card:</strong> 최대 너비 400px, 배경 흰색, 둥근 모서리 (border-radius: 12px)',
        '<strong>Card:</strong> 그림자 효과 (<code>box-shadow: 0 4px 16px rgba(0,0,0,0.1)</code>)',
        '<strong>Card 내부:</strong> 32px 패딩, 요소 간 16px 간격'
      ],
      details: [
        '버튼: Primary 색상 배경, 흰색 텍스트, 패딩 12px 24px',
        '버튼 hover: 배경색 진하게, 위로 2px 이동, 그림자 추가',
        'Container 배경: 연한 회색 (#F3F4F6)'
      ]
    },
    styles: {
      colors: [
        { name: 'Container 배경', value: '#F3F4F6', desc: 'Light Gray' },
        { name: 'Card 배경', value: '#FFFFFF', desc: 'White' },
        { name: '버튼 배경', value: '#4F46E5', desc: 'Primary' },
        { name: '버튼 텍스트', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '카드 제목', style: '1.5rem, 굵게, 색상 #222' },
        { element: '카드 설명', style: '1rem, 보통, 색상 #666, line-height: 1.6' },
        { element: '버튼 텍스트', style: '1rem, 중간 굵기 (font-weight: 500)' }
      ],
      spacing: [
        { element: 'Card 패딩', value: '32px' },
        { element: '제목-설명 간격', value: '16px (margin-top)' },
        { element: '설명-버튼 간격', value: '24px (margin-top)' },
        { element: '버튼 패딩', value: '12px 24px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="container">
  <div class="card">
    <h2>카드 제목</h2>
    <p>카드에 대한 설명이 들어갑니다.</p>
    <button class="btn">버튼</button>
  </div>
</div>`
      },
      {
        step: '2단계: Container 중앙 정렬',
        code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--color-light);
}`
      },
      {
        step: '3단계: Card 스타일링',
        code: `.card {
  max-width: 400px;
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}`
      },
      {
        step: '4단계: 버튼 스타일 및 hover',
        code: `.btn {
  background: var(--color-primary);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  transition: 0.3s ease;
}
.btn:hover {
  background: #3730a3;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}`
      }
    ],
    checklist: [
      'Container가 Flexbox로 설정되어 있나요?',
      'Container에 <code>justify-content: center; align-items: center;</code>가 있나요?',
      'Container의 최소 높이가 <code>100vh</code>인가요?',
      '카드가 화면 정중앙에 위치하나요?',
      '카드에 그림자 효과가 있나요?',
      '카드 모서리가 둥글게 처리되었나요 (border-radius: 12px)?',
      '버튼에 hover 효과(색상 변경, 위로 이동, 그림자)가 있나요?',
      '카드 내부 요소들의 간격이 일정한가요?'
    ]
  },

  'S003': {
    learningPoints: [
      '<strong>CSS Grid</strong>를 사용한 2단 컬럼 레이아웃',
      '<code>grid-template-columns</code>로 Sidebar와 Content 비율 조정',
      'Sidebar의 고정 너비 vs Content의 유동 너비',
      '<code>&lt;aside&gt;</code> 시맨틱 태그의 올바른 사용'
    ],
    requirements: {
      html: [
        'Container <code>&lt;div&gt;</code> 안에 <code>&lt;aside&gt;</code>와 <code>&lt;main&gt;</code> 배치',
        '<code>&lt;aside&gt;</code> 내부에 네비게이션 링크 리스트',
        '<code>&lt;main&gt;</code> 내부에 제목과 본문 콘텐츠'
      ],
      css: [
        '<strong>Container:</strong> <code>display: grid; grid-template-columns: 250px 1fr;</code>',
        '<strong>Sidebar(aside):</strong> 고정 너비 250px, 배경색 #F3F4F6, 패딩 24px',
        '<strong>Main:</strong> 남는 공간 모두 차지 (1fr), 패딩 48px',
        '<strong>최소 높이:</strong> <code>min-height: 100vh;</code>'
      ],
      details: [
        'Sidebar 링크: 세로 정렬, 각 링크마다 12px 간격',
        'Sidebar 링크 hover: 배경색 rgba(79, 70, 229, 0.1), 좌측 바 표시',
        'Main 콘텐츠: 최대 너비 800px'
      ]
    },
    styles: {
      colors: [
        { name: 'Sidebar 배경', value: '#F3F4F6', desc: 'Light Gray' },
        { name: 'Sidebar 링크 hover', value: 'rgba(79, 70, 229, 0.1)', desc: 'Primary 10%' },
        { name: 'Sidebar 좌측 바', value: '#FF9800', desc: 'Accent' },
        { name: 'Main 배경', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: 'Sidebar 링크', style: '1rem, 보통' },
        { element: 'Main 제목', style: '2rem, 굵게' },
        { element: 'Main 본문', style: '1rem, line-height: 1.6' }
      ],
      spacing: [
        { element: 'Sidebar 패딩', value: '24px' },
        { element: 'Sidebar 링크 간격', value: '12px (각 링크)' },
        { element: 'Main 패딩', value: '48px' },
        { element: 'Sidebar 너비', value: '250px (고정)' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="container">
  <aside class="sidebar">
    <nav>
      <a href="#">메뉴 1</a>
      <a href="#">메뉴 2</a>
      <a href="#">메뉴 3</a>
    </nav>
  </aside>
  <main>
    <h1>메인 콘텐츠</h1>
    <p>내용...</p>
  </main>
</div>`
      },
      {
        step: '2단계: Grid 레이아웃',
        code: `.container {
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
}`
      },
      {
        step: '3단계: Sidebar 스타일',
        code: `.sidebar {
  background: #F3F4F6;
  padding: 24px;
}
.sidebar a {
  display: block;
  padding: 12px;
  margin-bottom: 8px;
  color: #222;
  text-decoration: none;
  transition: 0.3s ease;
}
.sidebar a:hover {
  background: rgba(79, 70, 229, 0.1);
  color: var(--color-accent);
  border-left: 3px solid var(--color-accent);
  padding-left: 20px;
}`
      },
      {
        step: '4단계: Main 스타일',
        code: `main {
  padding: 48px;
  max-width: 800px;
}`
      }
    ],
    checklist: [
      'Container가 CSS Grid로 설정되어 있나요?',
      '<code>grid-template-columns: 250px 1fr;</code>를 사용했나요?',
      'Sidebar가 고정 너비 250px인가요?',
      'Main이 남는 공간(1fr)을 차지하나요?',
      'Sidebar 링크가 세로로 정렬되어 있나요?',
      'Sidebar 링크 hover 시 배경색이 변하나요?',
      'Sidebar 링크 hover 시 좌측에 accent 색상 바가 나타나나요?',
      '전체 높이가 최소 100vh인가요?'
    ]
  },

  'S004': {
    learningPoints: [
      '<strong>반응형 디자인</strong>의 기초 - 미디어 쿼리를 사용한 화면 크기별 대응',
      '<strong>Flexbox</strong>를 활용한 Header 내부 요소 배치 (로고 + 네비게이션)',
      '<code>justify-content: space-between</code>으로 양 끝 정렬하기',
      '모바일에서는 햄버거 메뉴로 전환하는 방법'
    ],
    requirements: {
      html: [
        '<code>&lt;header&gt;</code> 안에 로고와 <code>&lt;nav&gt;</code> 배치',
        '로고는 <code>&lt;h1&gt;</code> 또는 <code>&lt;div class="logo"&gt;</code>로 마크업',
        '<code>&lt;nav&gt;</code> 안에 5개의 링크 (홈, 소개, 서비스, 블로그, 연락처)',
        '모바일용 햄버거 버튼 추가 (선택사항)'
      ],
      css: [
        '<strong>Header:</strong> <code>display: flex; justify-content: space-between; align-items: center;</code>',
        '<strong>Header:</strong> 고정 높이 70px, 좌우 패딩 48px',
        '<strong>Navigation:</strong> 링크들 가로 정렬, 각 링크 간격 24px',
        '<strong>미디어 쿼리:</strong> 768px 이하에서 네비게이션 숨김 또는 세로 정렬'
      ],
      details: [
        'Header 배경: 흰색, 하단 보더 또는 그림자 추가',
        'Navigation 링크 hover: Primary 색상으로 변경',
        '로고: 1.5rem, 굵게, Primary 색상',
        '모바일(768px 이하): 네비게이션이 세로로 변경 또는 햄버거 메뉴로 전환'
      ]
    },
    styles: {
      colors: [
        { name: 'Header 배경', value: '#FFFFFF', desc: 'White' },
        { name: '로고', value: '#4F46E5', desc: 'Primary' },
        { name: '링크 기본', value: '#222222', desc: 'Dark' },
        { name: '링크 hover', value: '#4F46E5', desc: 'Primary' },
        { name: '보더', value: '#E5E7EB', desc: 'Light Gray' }
      ],
      typography: [
        { element: '로고', style: '1.5rem, 굵게 (font-weight: bold)' },
        { element: 'Navigation 링크', style: '1rem, 중간 굵기 (font-weight: 500)' }
      ],
      spacing: [
        { element: 'Header 높이', value: '70px' },
        { element: 'Header 좌우 패딩', value: '48px' },
        { element: 'Navigation 링크 간격', value: '24px' },
        { element: 'Header 하단 보더', value: '1px solid #E5E7EB' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<header>
  <div class="logo">MyLogo</div>
  <nav>
    <a href="#">홈</a>
    <a href="#">소개</a>
    <a href="#">서비스</a>
    <a href="#">블로그</a>
    <a href="#">연락처</a>
  </nav>
</header>`
      },
      {
        step: '2단계: Header Flexbox 배치',
        code: `header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 48px;
  background: white;
  border-bottom: 1px solid #E5E7EB;
}`
      },
      {
        step: '3단계: Navigation 스타일',
        code: `nav {
  display: flex;
  gap: 24px;
}
nav a {
  color: #222;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s ease;
}
nav a:hover {
  color: var(--color-primary);
}`
      },
      {
        step: '4단계: 반응형 미디어 쿼리',
        code: `@media (max-width: 768px) {
  header {
    padding: 0 24px;
  }
  nav {
    flex-direction: column;
    gap: 16px;
  }
}`
      }
    ],
    checklist: [
      'Header가 Flexbox로 설정되어 있나요?',
      '<code>justify-content: space-between</code>으로 로고와 네비게이션이 양 끝에 배치되었나요?',
      'Header 높이가 70px인가요?',
      'Navigation 링크가 가로로 정렬되어 있나요?',
      'Navigation 링크 hover 시 색상이 Primary로 변하나요?',
      'Header 하단에 보더 또는 그림자가 있나요?',
      '미디어 쿼리로 768px 이하에서 레이아웃이 변경되나요?',
      '로고가 Primary 색상(#4F46E5)인가요?'
    ]
  },

  'S005': {
    learningPoints: [
      '<strong>CSS Grid</strong>를 사용한 반응형 카드 레이아웃',
      '<code>grid-template-columns: repeat(3, 1fr)</code>로 3열 그리드 생성',
      '<code>gap</code> 속성으로 그리드 간격 조정',
      '반응형 그리드: 화면 크기에 따라 열 개수 변경하기'
    ],
    requirements: {
      html: [
        'Container <code>&lt;div&gt;</code> 안에 9개의 카드 배치',
        '각 카드는 <code>&lt;div class="card"&gt;</code>로 마크업',
        '카드 내부에 아이콘/이미지, 제목, 설명 포함'
      ],
      css: [
        '<strong>Container:</strong> <code>display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;</code>',
        '<strong>Card:</strong> 배경 흰색, 둥근 모서리 (border-radius: 12px), 패딩 24px',
        '<strong>Card:</strong> 그림자 효과 (<code>box-shadow: 0 2px 8px rgba(0,0,0,0.1)</code>)',
        '<strong>반응형:</strong> 768px 이하 2열, 480px 이하 1열'
      ],
      details: [
        'Container 배경: Light Gray (#F3F4F6)',
        'Container 패딩: 48px',
        'Card hover: 그림자 강화, 위로 2px 이동',
        '카드 제목: 1.25rem, 굵게, Dark 색상',
        '카드 설명: 1rem, 보통, 회색(#666)'
      ]
    },
    styles: {
      colors: [
        { name: 'Container 배경', value: '#F3F4F6', desc: 'Light Gray' },
        { name: 'Card 배경', value: '#FFFFFF', desc: 'White' },
        { name: '카드 제목', value: '#222222', desc: 'Dark' },
        { name: '카드 설명', value: '#666666', desc: 'Gray' }
      ],
      typography: [
        { element: '카드 제목', style: '1.25rem, 굵게' },
        { element: '카드 설명', style: '1rem, 보통, line-height: 1.6' }
      ],
      spacing: [
        { element: 'Container 패딩', value: '48px' },
        { element: 'Grid 간격 (gap)', value: '24px' },
        { element: 'Card 패딩', value: '24px' },
        { element: '카드 내부 요소 간격', value: '12px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="container">
  <div class="card">
    <div class="icon">🎨</div>
    <h3>카드 제목 1</h3>
    <p>카드 설명입니다.</p>
  </div>
  <!-- 8개 더 반복 -->
</div>`
      },
      {
        step: '2단계: Grid 레이아웃',
        code: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 48px;
  background: #F3F4F6;
}`
      },
      {
        step: '3단계: Card 스타일',
        code: `.card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: 0.3s ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}`
      },
      {
        step: '4단계: 반응형 미디어 쿼리',
        code: `@media (max-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .container {
    grid-template-columns: 1fr;
  }
}`
      }
    ],
    checklist: [
      'Container가 CSS Grid로 설정되어 있나요?',
      '<code>grid-template-columns: repeat(3, 1fr)</code>로 3열 그리드가 생성되었나요?',
      'Grid 간격(gap)이 24px인가요?',
      '카드가 총 9개 배치되어 있나요?',
      '카드에 그림자 효과가 있나요?',
      '카드 hover 시 위로 이동하고 그림자가 강화되나요?',
      '768px 이하에서 2열로 변경되나요?',
      '480px 이하에서 1열로 변경되나요?'
    ]
  },

  'S006': {
    learningPoints: [
      '<strong>버튼 컴포넌트</strong>의 기본 구조와 변형(variant) 디자인',
      'CSS 클래스를 활용한 다양한 버튼 스타일 정의',
      '<code>:hover</code>, <code>:active</code> 상태 스타일링',
      '버튼 접근성: <code>cursor: pointer</code>와 시각적 피드백'
    ],
    requirements: {
      html: [
        '3가지 버튼 타입을 각각 <code>&lt;button&gt;</code> 태그로 생성',
        'Primary 버튼: <code>&lt;button class="btn btn-primary"&gt;</code>',
        'Secondary 버튼: <code>&lt;button class="btn btn-secondary"&gt;</code>',
        'Outline 버튼: <code>&lt;button class="btn btn-outline"&gt;</code>'
      ],
      css: [
        '<strong>기본 버튼(.btn):</strong> 패딩 12px 24px, 둥근 모서리 8px, 폰트 1rem',
        '<strong>Primary:</strong> 배경 #4F46E5, 텍스트 흰색',
        '<strong>Secondary:</strong> 배경 #10B981, 텍스트 흰색',
        '<strong>Outline:</strong> 배경 투명, 테두리 2px solid #4F46E5, 텍스트 #4F46E5'
      ],
      details: [
        '모든 버튼에 <code>transition: 0.3s ease</code> 적용',
        'Primary hover: 배경색 진하게 (#3730a3)',
        'Secondary hover: 배경색 진하게 (#059669)',
        'Outline hover: 배경 Primary, 텍스트 흰색',
        '모든 버튼 active 상태: 약간 눌린 효과 (transform: scale(0.98))'
      ]
    },
    styles: {
      colors: [
        { name: 'Primary 배경', value: '#4F46E5', desc: 'Indigo' },
        { name: 'Primary hover', value: '#3730a3', desc: 'Dark Indigo' },
        { name: 'Secondary 배경', value: '#10B981', desc: 'Green' },
        { name: 'Secondary hover', value: '#059669', desc: 'Dark Green' },
        { name: 'Outline 테두리/텍스트', value: '#4F46E5', desc: 'Indigo' }
      ],
      typography: [
        { element: '버튼 텍스트', style: '1rem, 중간 굵기 (font-weight: 500)' }
      ],
      spacing: [
        { element: '버튼 패딩', value: '12px 24px' },
        { element: '버튼 간격', value: '16px (좌우 마진)' },
        { element: 'border-radius', value: '8px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="button-group">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-outline">Outline</button>
</div>`
      },
      {
        step: '2단계: 기본 버튼 스타일',
        code: `.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s ease;
}
.btn:active {
  transform: scale(0.98);
}`
      },
      {
        step: '3단계: Primary 버튼',
        code: `.btn-primary {
  background: var(--color-primary);
  color: white;
}
.btn-primary:hover {
  background: #3730a3;
}`
      },
      {
        step: '4단계: Secondary & Outline',
        code: `.btn-secondary {
  background: var(--color-secondary);
  color: white;
}
.btn-secondary:hover {
  background: #059669;
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
}
.btn-outline:hover {
  background: var(--color-primary);
  color: white;
}`
      }
    ],
    checklist: [
      '3가지 버튼 타입(Primary, Secondary, Outline)이 모두 있나요?',
      '기본 버튼 패딩이 12px 24px인가요?',
      'Primary 버튼 배경이 #4F46E5인가요?',
      'Secondary 버튼 배경이 #10B981인가요?',
      'Outline 버튼에 2px 테두리가 있나요?',
      '모든 버튼에 hover 효과(배경색 변경)가 있나요?',
      'Outline 버튼 hover 시 배경이 채워지나요?',
      '버튼 클릭(active) 시 눌린 효과가 있나요?'
    ]
  },

  'S007': {
    learningPoints: [
      '<strong>프로필 카드</strong> 컴포넌트의 구조 (이미지 + 정보)',
      '<code>border-radius: 50%</code>로 원형 이미지 만들기',
      'Flexbox 또는 일반 블록 구조로 카드 내부 정렬',
      '<code>object-fit: cover</code>로 이미지 비율 유지'
    ],
    requirements: {
      html: [
        '카드 Container <code>&lt;div class="profile-card"&gt;</code> 생성',
        '카드 내부에 이미지(<code>&lt;img&gt;</code>), 이름(<code>&lt;h3&gt;</code>), 직책(<code>&lt;p&gt;</code>), 설명(<code>&lt;p&gt;</code>) 배치',
        '이미지는 placeholder 이미지 사용 (예: https://via.placeholder.com/150)'
      ],
      css: [
        '<strong>Card:</strong> 최대 너비 300px, 배경 흰색, 중앙 정렬 (margin: 0 auto)',
        '<strong>Card:</strong> 둥근 모서리 (border-radius: 16px), 그림자 효과',
        '<strong>이미지:</strong> 너비/높이 120px, <code>border-radius: 50%</code>, 중앙 정렬',
        '<strong>텍스트:</strong> 중앙 정렬 (text-align: center)'
      ],
      details: [
        '카드 패딩: 32px',
        '이미지와 이름 간격: 16px',
        '이름: 1.5rem, 굵게, Dark 색상',
        '직책: 1rem, Primary 색상',
        '설명: 0.875rem, 회색(#666), line-height: 1.6'
      ]
    },
    styles: {
      colors: [
        { name: 'Card 배경', value: '#FFFFFF', desc: 'White' },
        { name: '이름', value: '#222222', desc: 'Dark' },
        { name: '직책', value: '#4F46E5', desc: 'Primary' },
        { name: '설명', value: '#666666', desc: 'Gray' }
      ],
      typography: [
        { element: '이름', style: '1.5rem, 굵게' },
        { element: '직책', style: '1rem, 중간 굵기 (font-weight: 500)' },
        { element: '설명', style: '0.875rem, line-height: 1.6' }
      ],
      spacing: [
        { element: 'Card 패딩', value: '32px' },
        { element: '이미지-이름 간격', value: '16px' },
        { element: '이름-직책 간격', value: '8px' },
        { element: '직책-설명 간격', value: '12px' },
        { element: '이미지 크기', value: '120px × 120px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="profile-card">
  <img src="https://via.placeholder.com/150" alt="프로필">
  <h3>홍길동</h3>
  <p class="role">Frontend Developer</p>
  <p class="desc">웹 퍼블리싱과 UI 개발을 담당하고 있습니다.</p>
</div>`
      },
      {
        step: '2단계: Card 스타일',
        code: `.profile-card {
  max-width: 300px;
  margin: 0 auto;
  padding: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  text-align: center;
}`
      },
      {
        step: '3단계: 이미지 스타일',
        code: `.profile-card img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
}`
      },
      {
        step: '4단계: 텍스트 스타일',
        code: `.profile-card h3 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}
.profile-card .role {
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: 12px;
}
.profile-card .desc {
  font-size: 0.875rem;
  color: #666;
  line-height: 1.6;
}`
      }
    ],
    checklist: [
      '카드가 최대 너비 300px이고 중앙 정렬되었나요?',
      '이미지가 원형(border-radius: 50%)인가요?',
      '이미지 크기가 120px × 120px인가요?',
      '모든 텍스트가 중앙 정렬되어 있나요?',
      '이름이 1.5rem 굵게 표시되나요?',
      '직책이 Primary 색상(#4F46E5)인가요?',
      '설명 텍스트가 회색(#666)이고 작은 크기(0.875rem)인가요?',
      '카드에 그림자 효과가 있나요?'
    ]
  },

  'S008': {
    learningPoints: [
      '<strong>배지(Badge)</strong> 컴포넌트의 다양한 상태 표현',
      'CSS 클래스를 활용한 색상 변형 (Success, Warning, Error, Info)',
      '<code>display: inline-block</code>과 패딩으로 배지 크기 조정',
      '작은 텍스트에 적합한 타이포그래피 설정'
    ],
    requirements: {
      html: [
        '4가지 배지를 각각 <code>&lt;span&gt;</code> 태그로 생성',
        'Success 배지: <code>&lt;span class="badge badge-success"&gt;성공&lt;/span&gt;</code>',
        'Warning 배지: <code>&lt;span class="badge badge-warning"&gt;경고&lt;/span&gt;</code>',
        'Error 배지: <code>&lt;span class="badge badge-error"&gt;오류&lt;/span&gt;</code>',
        'Info 배지: <code>&lt;span class="badge badge-info"&gt;정보&lt;/span&gt;</code>'
      ],
      css: [
        '<strong>기본 배지(.badge):</strong> <code>display: inline-block</code>, 패딩 6px 12px',
        '<strong>기본 배지:</strong> 폰트 0.875rem, 둥근 모서리 (border-radius: 12px)',
        '<strong>Success:</strong> 배경 #10B981, 텍스트 흰색',
        '<strong>Warning:</strong> 배경 #FF9800, 텍스트 흰색',
        '<strong>Error:</strong> 배경 #EF4444, 텍스트 흰색',
        '<strong>Info:</strong> 배경 #4F46E5, 텍스트 흰색'
      ],
      details: [
        '배지 간격: 좌우 8px 마진',
        '폰트 굵기: 500 (중간)',
        '모든 배지에 약간의 그림자 추가 (선택사항)'
      ]
    },
    styles: {
      colors: [
        { name: 'Success 배경', value: '#10B981', desc: 'Green' },
        { name: 'Warning 배경', value: '#FF9800', desc: 'Orange' },
        { name: 'Error 배경', value: '#EF4444', desc: 'Red' },
        { name: 'Info 배경', value: '#4F46E5', desc: 'Indigo' },
        { name: '모든 배지 텍스트', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '배지 텍스트', style: '0.875rem, 중간 굵기 (font-weight: 500)' }
      ],
      spacing: [
        { element: '배지 패딩', value: '6px 12px' },
        { element: '배지 간격', value: '좌우 8px 마진' },
        { element: 'border-radius', value: '12px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="badge-container">
  <span class="badge badge-success">성공</span>
  <span class="badge badge-warning">경고</span>
  <span class="badge badge-error">오류</span>
  <span class="badge badge-info">정보</span>
</div>`
      },
      {
        step: '2단계: 기본 배지 스타일',
        code: `.badge {
  display: inline-block;
  padding: 6px 12px;
  margin: 0 8px;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  border-radius: 12px;
}`
      },
      {
        step: '3단계: 배지 색상 변형',
        code: `.badge-success {
  background: #10B981;
}
.badge-warning {
  background: #FF9800;
}
.badge-error {
  background: #EF4444;
}
.badge-info {
  background: var(--color-primary);
}`
      }
    ],
    checklist: [
      '4가지 배지(Success, Warning, Error, Info)가 모두 있나요?',
      '배지 패딩이 6px 12px인가요?',
      '배지 폰트 크기가 0.875rem인가요?',
      'Success 배지가 녹색(#10B981)인가요?',
      'Warning 배지가 주황색(#FF9800)인가요?',
      'Error 배지가 빨간색(#EF4444)인가요?',
      'Info 배지가 Indigo(#4F46E5)인가요?',
      '모든 배지 텍스트가 흰색인가요?',
      '배지 모서리가 둥글게 처리되었나요?'
    ]
  },

  'S009': {
    learningPoints: [
      '<strong>SVG 아이콘</strong>을 버튼에 통합하는 방법',
      'Flexbox로 아이콘과 텍스트 정렬 (<code>display: flex; align-items: center;</code>)',
      '<code>gap</code> 속성으로 아이콘-텍스트 간격 조정',
      '아이콘 전용 버튼과 아이콘+텍스트 버튼 구분'
    ],
    requirements: {
      html: [
        '3가지 아이콘 버튼 생성 (다운로드, 좋아요, 공유)',
        '각 버튼에 SVG 아이콘 + 텍스트 포함',
        'SVG는 <code>&lt;svg&gt;</code> 태그 직접 사용 또는 이모지로 대체',
        '아이콘 전용 버튼 1개 추가 (텍스트 없이 아이콘만)'
      ],
      css: [
        '<strong>버튼:</strong> <code>display: flex; align-items: center; gap: 8px;</code>',
        '<strong>버튼:</strong> 패딩 12px 20px, 배경 Primary 색상',
        '<strong>아이콘:</strong> 크기 20px × 20px',
        '<strong>아이콘 전용 버튼:</strong> 정사각형 (40px × 40px), 중앙 정렬'
      ],
      details: [
        '버튼 hover: 배경색 진하게, 그림자 추가',
        '아이콘 색상: 흰색 (버튼 배경에 맞춰)',
        '버튼 둥근 모서리: 8px',
        '아이콘 전용 버튼: border-radius: 50% (원형)'
      ]
    },
    styles: {
      colors: [
        { name: '버튼 배경', value: '#4F46E5', desc: 'Primary' },
        { name: '버튼 hover', value: '#3730a3', desc: 'Dark Indigo' },
        { name: '아이콘/텍스트', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '버튼 텍스트', style: '1rem, 중간 굵기 (font-weight: 500)' }
      ],
      spacing: [
        { element: '버튼 패딩', value: '12px 20px' },
        { element: '아이콘-텍스트 간격 (gap)', value: '8px' },
        { element: '아이콘 크기', value: '20px × 20px' },
        { element: '아이콘 전용 버튼 크기', value: '40px × 40px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="button-group">
  <button class="icon-btn">
    <svg width="20" height="20"><!-- SVG 코드 --></svg>
    <span>다운로드</span>
  </button>
  <button class="icon-btn">
    <svg width="20" height="20"><!-- SVG 코드 --></svg>
    <span>좋아요</span>
  </button>
  <button class="icon-only-btn">
    <svg width="20" height="20"><!-- SVG 코드 --></svg>
  </button>
</div>`
      },
      {
        step: '2단계: 아이콘 버튼 스타일',
        code: `.icon-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;
}
.icon-btn:hover {
  background: #3730a3;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}`
      },
      {
        step: '3단계: 아이콘 전용 버튼',
        code: `.icon-only-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease;
}
.icon-only-btn:hover {
  background: #3730a3;
}`
      }
    ],
    checklist: [
      '버튼이 Flexbox로 설정되어 있나요?',
      '아이콘과 텍스트가 <code>gap: 8px</code>로 간격이 있나요?',
      '아이콘 크기가 20px × 20px인가요?',
      '버튼 배경이 Primary 색상(#4F46E5)인가요?',
      '버튼 hover 시 배경색이 진해지나요?',
      '아이콘 전용 버튼이 원형(border-radius: 50%)인가요?',
      '아이콘 전용 버튼 크기가 40px × 40px인가요?',
      '아이콘과 텍스트가 수직 중앙 정렬되어 있나요?'
    ]
  },

  'S010': {
    learningPoints: [
      '<strong>수평 네비게이션</strong>의 기본 구조',
      'Flexbox로 링크들 가로 정렬하기',
      '<code>&lt;nav&gt;</code> 시맨틱 태그의 올바른 사용',
      '현재 페이지 표시 (active 상태 스타일)'
    ],
    requirements: {
      html: [
        '<code>&lt;nav&gt;</code> 태그 안에 5개의 링크 배치 (홈, 소개, 서비스, 블로그, 연락처)',
        '현재 페이지를 나타내는 링크에 <code>class="active"</code> 추가',
        '각 링크는 <code>&lt;a href="#"&gt;</code> 태그 사용'
      ],
      css: [
        '<strong>Nav:</strong> <code>display: flex; gap: 24px;</code>',
        '<strong>Nav:</strong> 배경 Dark 색상(#222), 패딩 16px 48px',
        '<strong>링크:</strong> 흰색 텍스트, 밑줄 없음',
        '<strong>Active 링크:</strong> Primary 색상 또는 밑줄 표시'
      ],
      details: [
        '링크 hover: Primary 색상으로 변경',
        '링크 폰트: 1rem, 중간 굵기 (font-weight: 500)',
        'Active 링크: 하단 보더 2px solid Primary',
        'transition: 0.3s ease 적용'
      ]
    },
    styles: {
      colors: [
        { name: 'Nav 배경', value: '#222222', desc: 'Dark' },
        { name: '링크 기본', value: '#FFFFFF', desc: 'White' },
        { name: '링크 hover/active', value: '#4F46E5', desc: 'Primary' }
      ],
      typography: [
        { element: 'Navigation 링크', style: '1rem, 중간 굵기 (font-weight: 500)' }
      ],
      spacing: [
        { element: 'Nav 패딩', value: '16px 48px' },
        { element: '링크 간격 (gap)', value: '24px' },
        { element: 'Active 보더', value: '하단 2px solid Primary' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<nav class="navbar">
  <a href="#" class="active">홈</a>
  <a href="#">소개</a>
  <a href="#">서비스</a>
  <a href="#">블로그</a>
  <a href="#">연락처</a>
</nav>`
      },
      {
        step: '2단계: Nav 스타일',
        code: `.navbar {
  display: flex;
  gap: 24px;
  padding: 16px 48px;
  background: #222;
}`
      },
      {
        step: '3단계: 링크 스타일',
        code: `.navbar a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: 0.3s ease;
}
.navbar a:hover {
  color: var(--color-primary);
}
.navbar a.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}`
      }
    ],
    checklist: [
      'Nav가 Flexbox로 설정되어 있나요?',
      '링크들이 가로로 정렬되어 있나요?',
      '링크 간격(gap)이 24px인가요?',
      'Nav 배경이 Dark 색상(#222)인가요?',
      '링크 텍스트가 흰색인가요?',
      '링크 hover 시 Primary 색상으로 변하나요?',
      'Active 링크에 하단 보더가 있나요?',
      'Active 링크가 Primary 색상인가요?'
    ]
  },

  // 폼 기초 (S011-S015)
  'S011': {
    learningPoints: [
      '<strong>폼(Form)</strong>의 기본 구조와 접근성',
      '<code>&lt;label&gt;</code>과 <code>&lt;input&gt;</code>의 올바른 연결 (for/id 속성)',
      '폼 요소의 스타일링: border, padding, focus 상태',
      '<code>:focus</code> 상태에서 outline 대신 border 색상 변경하기'
    ],
    requirements: {
      html: [
        '<code>&lt;form&gt;</code> 태그로 전체 폼 감싸기',
        'Label + Input 세트 3개 (이름, 이메일, 메시지)',
        '각 Input에 <code>id</code> 속성, Label에 <code>for</code> 속성으로 연결',
        '제출 버튼 <code>&lt;button type="submit"&gt;</code> 추가'
      ],
      css: [
        '<strong>Form:</strong> 최대 너비 400px, 중앙 정렬, 배경 흰색',
        '<strong>Input:</strong> 전체 너비(100%), 패딩 12px, 테두리 1px solid #E5E7EB',
        '<strong>Input focus:</strong> 테두리 색상 Primary, outline 제거',
        '<strong>Button:</strong> Primary 배경, 전체 너비, 패딩 12px'
      ],
      details: [
        'Label: 굵게, 0.875rem, 상단 마진 16px',
        'Input: 둥근 모서리 8px, transition: 0.3s ease',
        'Button: 상단 마진 24px',
        '폼 요소 간격: 16px'
      ]
    },
    styles: {
      colors: [
        { name: 'Form 배경', value: '#FFFFFF', desc: 'White' },
        { name: 'Input 테두리', value: '#E5E7EB', desc: 'Light Gray' },
        { name: 'Input focus 테두리', value: '#4F46E5', desc: 'Primary' },
        { name: 'Button 배경', value: '#4F46E5', desc: 'Primary' },
        { name: 'Label 텍스트', value: '#222222', desc: 'Dark' }
      ],
      typography: [
        { element: 'Label', style: '0.875rem, 굵게' },
        { element: 'Input', style: '1rem, 보통' },
        { element: 'Button', style: '1rem, 중간 굵기 (font-weight: 500)' }
      ],
      spacing: [
        { element: 'Form 최대 너비', value: '400px' },
        { element: 'Input 패딩', value: '12px' },
        { element: 'Label-Input 간격', value: '8px (margin-bottom)' },
        { element: 'Input 간 간격', value: '16px' },
        { element: 'Button 상단 마진', value: '24px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<form class="basic-form">
  <label for="name">이름</label>
  <input type="text" id="name" placeholder="홍길동">

  <label for="email">이메일</label>
  <input type="email" id="email" placeholder="example@email.com">

  <label for="message">메시지</label>
  <textarea id="message" rows="4"></textarea>

  <button type="submit">제출하기</button>
</form>`
      },
      {
        step: '2단계: Form & Label 스타일',
        code: `.basic-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 32px;
  background: white;
}
label {
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 0.875rem;
  font-weight: bold;
}`
      },
      {
        step: '3단계: Input 스타일',
        code: `input, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 1rem;
  transition: 0.3s ease;
}
input:focus, textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}`
      },
      {
        step: '4단계: Button 스타일',
        code: `button {
  width: 100%;
  margin-top: 24px;
  padding: 12px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
}`
      }
    ],
    checklist: [
      'Form이 최대 너비 400px이고 중앙 정렬되었나요?',
      '모든 Label이 해당 Input과 for/id로 연결되었나요?',
      'Input 전체 너비가 100%인가요?',
      'Input 패딩이 12px인가요?',
      'Input focus 시 테두리 색상이 Primary로 변하나요?',
      'Input focus 시 기본 outline이 제거되었나요?',
      'Button이 전체 너비를 차지하나요?',
      'Label이 굵게 표시되나요?'
    ]
  },

  'S012': {
    learningPoints: [
      '<strong>로그인 폼</strong>의 전형적인 구조',
      'Password Input의 보안 처리 (<code>type="password"</code>)',
      '폼 타이틀과 폼 요소의 시각적 계층 구조',
      '"로그인 유지" 체크박스와 "비밀번호 찾기" 링크 배치'
    ],
    requirements: {
      html: [
        '폼 상단에 제목 (<code>&lt;h2&gt;로그인&lt;/h2&gt;</code>)',
        'Email Input (<code>type="email"</code>)',
        'Password Input (<code>type="password"</code>)',
        '체크박스 + 라벨 (로그인 유지)',
        '제출 버튼 + 하단 링크 (비밀번호 찾기)'
      ],
      css: [
        '<strong>Form:</strong> 최대 너비 400px, 중앙 정렬, 카드 스타일 (그림자 포함)',
        '<strong>제목:</strong> 중앙 정렬, 2rem, 굵게',
        '<strong>Input:</strong> 전체 너비, 패딩 12px, 테두리 스타일',
        '<strong>Button:</strong> 전체 너비, Primary 배경'
      ],
      details: [
        '체크박스와 라벨: Flexbox로 가로 정렬',
        '비밀번호 찾기 링크: 중앙 정렬, Primary 색상, 작은 크기',
        'Form 패딩: 40px',
        'Input 간격: 16px'
      ]
    },
    styles: {
      colors: [
        { name: 'Form 배경', value: '#FFFFFF', desc: 'White' },
        { name: 'Container 배경', value: '#F3F4F6', desc: 'Light Gray' },
        { name: '제목', value: '#222222', desc: 'Dark' },
        { name: 'Input 테두리', value: '#E5E7EB', desc: 'Light Gray' },
        { name: 'Button 배경', value: '#4F46E5', desc: 'Primary' },
        { name: '링크', value: '#4F46E5', desc: 'Primary' }
      ],
      typography: [
        { element: '제목', style: '2rem, 굵게' },
        { element: 'Label', style: '0.875rem, 굵게' },
        { element: 'Input', style: '1rem' },
        { element: '비밀번호 찾기 링크', style: '0.875rem' }
      ],
      spacing: [
        { element: 'Form 패딩', value: '40px' },
        { element: '제목 하단 마진', value: '32px' },
        { element: 'Input 간격', value: '16px' },
        { element: 'Button 상단 마진', value: '24px' },
        { element: '링크 상단 마진', value: '16px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="login-container">
  <form class="login-form">
    <h2>로그인</h2>
    <label for="email">이메일</label>
    <input type="email" id="email" placeholder="example@email.com">

    <label for="password">비밀번호</label>
    <input type="password" id="password" placeholder="••••••••">

    <div class="checkbox-wrapper">
      <input type="checkbox" id="remember">
      <label for="remember">로그인 유지</label>
    </div>

    <button type="submit">로그인</button>
    <a href="#" class="forgot-link">비밀번호를 잊으셨나요?</a>
  </form>
</div>`
      },
      {
        step: '2단계: Container & Form 스타일',
        code: `.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F3F4F6;
}
.login-form {
  max-width: 400px;
  padding: 40px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}`
      },
      {
        step: '3단계: 제목 & Input',
        code: `.login-form h2 {
  text-align: center;
  margin-bottom: 32px;
}
.login-form input[type="email"],
.login-form input[type="password"] {
  width: 100%;
  margin-bottom: 16px;
  padding: 12px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
}`
      },
      {
        step: '4단계: 체크박스 & 링크',
        code: `.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0;
}
.forgot-link {
  display: block;
  margin-top: 16px;
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-primary);
}`
      }
    ],
    checklist: [
      'Form이 화면 중앙에 위치하나요?',
      'Form에 카드 스타일(그림자, 둥근 모서리)이 있나요?',
      '제목이 중앙 정렬되어 있나요?',
      'Password Input이 type="password"인가요?',
      '체크박스와 라벨이 가로로 정렬되어 있나요?',
      '버튼이 전체 너비를 차지하나요?',
      '비밀번호 찾기 링크가 중앙 정렬되어 있나요?',
      '링크 색상이 Primary인가요?'
    ]
  },

  'S013': {
    learningPoints: [
      '<strong>검색창(Search Input)</strong>의 기본 구조',
      'Input 내부에 아이콘 배치하기 (상대/절대 위치)',
      '<code>position: relative/absolute</code>를 활용한 레이아웃',
      'Input padding 조정으로 아이콘 공간 확보'
    ],
    requirements: {
      html: [
        '검색창을 감싸는 Container <code>&lt;div class="search-box"&gt;</code>',
        'Input (<code>type="search"</code> 또는 <code>type="text"</code>)',
        '돋보기 아이콘 (SVG 또는 이모지 🔍)',
        'Placeholder: "검색어를 입력하세요"'
      ],
      css: [
        '<strong>Container:</strong> <code>position: relative</code>, 최대 너비 500px',
        '<strong>Input:</strong> 전체 너비, 좌측 패딩 40px (아이콘 공간)',
        '<strong>아이콘:</strong> <code>position: absolute; left: 12px;</code>',
        '<strong>Input:</strong> 둥근 모서리 24px (pill 모양)'
      ],
      details: [
        'Input 높이: 48px',
        'Input 테두리: 1px solid #E5E7EB',
        'Input focus: 테두리 Primary, 그림자 추가',
        '아이콘 색상: 회색 (#999)',
        'Container 중앙 정렬'
      ]
    },
    styles: {
      colors: [
        { name: 'Input 배경', value: '#FFFFFF', desc: 'White' },
        { name: 'Input 테두리', value: '#E5E7EB', desc: 'Light Gray' },
        { name: 'Input focus 테두리', value: '#4F46E5', desc: 'Primary' },
        { name: '아이콘', value: '#999999', desc: 'Gray' },
        { name: 'Placeholder', value: '#999999', desc: 'Gray' }
      ],
      typography: [
        { element: 'Input', style: '1rem' }
      ],
      spacing: [
        { element: 'Container 최대 너비', value: '500px' },
        { element: 'Input 높이', value: '48px' },
        { element: 'Input 좌측 패딩', value: '40px (아이콘 공간)' },
        { element: 'Input 우측 패딩', value: '16px' },
        { element: '아이콘 위치', value: 'left: 12px, top: 50% (transform: translateY(-50%))' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="search-container">
  <div class="search-box">
    <span class="search-icon">🔍</span>
    <input type="search" placeholder="검색어를 입력하세요">
  </div>
</div>`
      },
      {
        step: '2단계: Container & Search Box',
        code: `.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.search-box {
  position: relative;
  max-width: 500px;
  width: 100%;
}`
      },
      {
        step: '3단계: Input 스타일',
        code: `.search-box input {
  width: 100%;
  height: 48px;
  padding-left: 40px;
  padding-right: 16px;
  border: 1px solid #E5E7EB;
  border-radius: 24px;
  font-size: 1rem;
  transition: 0.3s ease;
}
.search-box input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}`
      },
      {
        step: '4단계: 아이콘 배치',
        code: `.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.25rem;
  color: #999;
  pointer-events: none;
}`
      }
    ],
    checklist: [
      'Search Box가 position: relative인가요?',
      'Input 좌측 패딩이 40px 이상인가요?',
      '아이콘이 position: absolute로 배치되었나요?',
      '아이콘이 Input 왼쪽 내부에 위치하나요?',
      'Input이 둥근 모서리(border-radius: 24px)인가요?',
      'Input focus 시 테두리와 그림자가 나타나나요?',
      '검색창이 화면 중앙에 위치하나요?',
      'Input 높이가 48px인가요?'
    ]
  },

  'S014': {
    learningPoints: [
      '<strong>커스텀 체크박스와 라디오 버튼</strong> 디자인',
      '기본 input을 숨기고 label로 스타일링하기',
      '<code>:checked</code> 선택자를 활용한 상태 표현',
      '<code>+ (인접 형제 선택자)</code>로 체크 상태 스타일 변경'
    ],
    requirements: {
      html: [
        '체크박스 3개 (과일 선택: 사과, 바나나, 오렌지)',
        '라디오 버튼 3개 (크기 선택: S, M, L)',
        '각 input에 id, label에 for 속성으로 연결',
        '라디오 버튼은 같은 name 속성 공유'
      ],
      css: [
        '<strong>기본 input:</strong> <code>appearance: none</code> 또는 숨김 처리',
        '<strong>Label:</strong> <code>::before</code> 가상 요소로 커스텀 박스/원 생성',
        '<strong>Checked 상태:</strong> 배경 Primary, 체크 표시',
        '<strong>체크박스:</strong> 사각형 (border-radius: 4px)',
        '<strong>라디오:</strong> 원형 (border-radius: 50%)'
      ],
      details: [
        'Label: 패딩 8px, cursor: pointer',
        'Checkbox 크기: 20px × 20px',
        'Radio 크기: 20px × 20px',
        'Checked 시 중앙에 작은 체크/점 표시'
      ]
    },
    styles: {
      colors: [
        { name: '기본 테두리', value: '#E5E7EB', desc: 'Light Gray' },
        { name: 'Checked 배경', value: '#4F46E5', desc: 'Primary' },
        { name: 'Checked 체크 표시', value: '#FFFFFF', desc: 'White' },
        { name: 'Label 텍스트', value: '#222222', desc: 'Dark' }
      ],
      typography: [
        { element: 'Label', style: '1rem, 보통' }
      ],
      spacing: [
        { element: 'Checkbox/Radio 크기', value: '20px × 20px' },
        { element: 'Label 패딩', value: '8px' },
        { element: 'Input-Label 간격', value: '8px' },
        { element: '각 옵션 간격', value: '12px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="form-group">
  <h3>과일 선택 (체크박스)</h3>
  <label>
    <input type="checkbox" id="apple">
    <span>사과</span>
  </label>
  <label>
    <input type="checkbox" id="banana">
    <span>바나나</span>
  </label>
</div>

<div class="form-group">
  <h3>크기 선택 (라디오)</h3>
  <label>
    <input type="radio" name="size" value="s">
    <span>S</span>
  </label>
  <label>
    <input type="radio" name="size" value="m">
    <span>M</span>
  </label>
</div>`
      },
      {
        step: '2단계: 기본 input 숨김',
        code: `input[type="checkbox"],
input[type="radio"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #E5E7EB;
  cursor: pointer;
  transition: 0.3s ease;
}
input[type="checkbox"] {
  border-radius: 4px;
}
input[type="radio"] {
  border-radius: 50%;
}`
      },
      {
        step: '3단계: Checked 상태',
        code: `input[type="checkbox"]:checked,
input[type="radio"]:checked {
  background: var(--color-primary);
  border-color: var(--color-primary);
}
input[type="checkbox"]:checked::after {
  content: '✓';
  color: white;
  display: block;
  text-align: center;
  line-height: 16px;
}
input[type="radio"]:checked::after {
  content: '';
  display: block;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  margin: 4px;
}`
      },
      {
        step: '4단계: Label 정렬',
        code: `label {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  cursor: pointer;
}`
      }
    ],
    checklist: [
      '체크박스가 사각형 모양인가요?',
      '라디오 버튼이 원형 모양인가요?',
      'Checked 상태에서 배경이 Primary 색상으로 변하나요?',
      '체크박스 checked 시 체크 표시가 나타나나요?',
      '라디오 checked 시 중앙에 작은 점이 나타나나요?',
      'Label 클릭 시 input이 토글되나요?',
      '라디오 버튼들이 같은 name으로 그룹화되었나요?',
      'Label과 input이 Flexbox로 정렬되었나요?'
    ]
  },

  'S015': {
    learningPoints: [
      '<strong>Select 드롭다운</strong>의 기본 사용법',
      'Select 커스텀 스타일링의 한계와 해결 방법',
      '<code>&lt;option&gt;</code> 태그로 선택지 구성',
      'Select 화살표 커스터마이징 (<code>appearance: none</code>)'
    ],
    requirements: {
      html: [
        'Label + Select 세트 생성',
        'Select 안에 5개 이상의 option',
        '첫 번째 option을 placeholder로 사용 (disabled selected)',
        'Container로 감싸서 화살표 아이콘 추가'
      ],
      css: [
        '<strong>Select:</strong> 전체 너비, 패딩 12px, 테두리 스타일',
        '<strong>Select:</strong> <code>appearance: none</code>으로 기본 화살표 제거',
        '<strong>Container:</strong> <code>position: relative</code>',
        '<strong>화살표:</strong> <code>position: absolute</code>로 우측에 배치'
      ],
      details: [
        'Select 둥근 모서리: 8px',
        'Select focus: 테두리 Primary 색상',
        '화살표 아이콘: ▼ 또는 SVG',
        '화살표 위치: right: 12px, 중앙 정렬'
      ]
    },
    styles: {
      colors: [
        { name: 'Select 배경', value: '#FFFFFF', desc: 'White' },
        { name: 'Select 테두리', value: '#E5E7EB', desc: 'Light Gray' },
        { name: 'Select focus 테두리', value: '#4F46E5', desc: 'Primary' },
        { name: '화살표', value: '#666666', desc: 'Gray' },
        { name: 'Placeholder', value: '#999999', desc: 'Gray' }
      ],
      typography: [
        { element: 'Label', style: '0.875rem, 굵게' },
        { element: 'Select', style: '1rem' }
      ],
      spacing: [
        { element: 'Select 패딩', value: '12px (좌), 40px (우, 화살표 공간)' },
        { element: 'Select 높이', value: '48px' },
        { element: '화살표 위치', value: 'right: 12px' },
        { element: 'Label-Select 간격', value: '8px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="form-group">
  <label for="country">국가 선택</label>
  <div class="select-wrapper">
    <select id="country">
      <option value="" disabled selected>국가를 선택하세요</option>
      <option value="kr">대한민국</option>
      <option value="us">미국</option>
      <option value="jp">일본</option>
      <option value="cn">중국</option>
    </select>
    <span class="select-arrow">▼</span>
  </div>
</div>`
      },
      {
        step: '2단계: Select Wrapper',
        code: `.select-wrapper {
  position: relative;
  width: 100%;
}`
      },
      {
        step: '3단계: Select 스타일',
        code: `select {
  width: 100%;
  height: 48px;
  padding: 12px;
  padding-right: 40px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 1rem;
  appearance: none;
  background: white;
  cursor: pointer;
  transition: 0.3s ease;
}
select:focus {
  outline: none;
  border-color: var(--color-primary);
}`
      },
      {
        step: '4단계: 화살표 아이콘',
        code: `.select-arrow {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  pointer-events: none;
  font-size: 0.75rem;
}`
      }
    ],
    checklist: [
      'Select가 appearance: none으로 기본 스타일이 제거되었나요?',
      '커스텀 화살표가 우측에 배치되었나요?',
      '화살표가 position: absolute로 배치되었나요?',
      'Select 우측 패딩이 화살표 공간을 확보하나요?',
      '첫 번째 option이 placeholder 역할을 하나요?',
      'Select focus 시 테두리 색상이 변하나요?',
      'Select 높이가 48px인가요?',
      'Label과 Select가 올바르게 연결되었나요?'
    ]
  },

  // 비주얼 기초 (S016-S020)
  'S016': {
    learningPoints: [
      '<strong>히어로 섹션(Hero Section)</strong>의 구조와 역할',
      '배경 이미지 위에 텍스트 배치하기',
      '<code>background-size: cover</code>와 <code>background-position: center</code>',
      '오버레이 효과로 텍스트 가독성 높이기 (<code>rgba</code> 배경)'
    ],
    requirements: {
      html: [
        'Hero 섹션 Container <code>&lt;section class="hero"&gt;</code>',
        '내부에 제목(<code>&lt;h1&gt;</code>), 부제목(<code>&lt;p&gt;</code>), CTA 버튼',
        '배경은 CSS로 처리 (이미지 URL 또는 그라디언트)'
      ],
      css: [
        '<strong>Hero:</strong> 높이 <code>min-height: 100vh</code>, Flexbox 중앙 정렬',
        '<strong>배경:</strong> <code>background-image: url(...)</code>, <code>background-size: cover</code>',
        '<strong>오버레이:</strong> <code>::before</code> 가상 요소로 어두운 배경 (rgba(0,0,0,0.5))',
        '<strong>텍스트:</strong> 흰색, 중앙 정렬, z-index로 오버레이 위에 배치'
      ],
      details: [
        '제목: 3rem, 굵게',
        '부제목: 1.25rem, line-height: 1.6',
        'CTA 버튼: Primary 배경, 패딩 16px 32px',
        '오버레이: position: absolute, width/height 100%'
      ]
    },
    styles: {
      colors: [
        { name: '오버레이', value: 'rgba(0, 0, 0, 0.5)', desc: 'Black 50% opacity' },
        { name: '텍스트', value: '#FFFFFF', desc: 'White' },
        { name: 'CTA 버튼', value: '#FF9800', desc: 'Accent' }
      ],
      typography: [
        { element: '제목', style: '3rem, 굵게' },
        { element: '부제목', style: '1.25rem, line-height: 1.6' },
        { element: 'CTA 버튼', style: '1rem, 중간 굵기' }
      ],
      spacing: [
        { element: 'Hero 높이', value: 'min-height: 100vh' },
        { element: '제목-부제목 간격', value: '24px' },
        { element: '부제목-버튼 간격', value: '32px' },
        { element: 'CTA 버튼 패딩', value: '16px 32px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<section class="hero">
  <div class="hero-content">
    <h1>웹 퍼블리싱의 시작</h1>
    <p>누구나 배울 수 있는 HTML, CSS, JavaScript</p>
    <button class="cta-btn">시작하기</button>
  </div>
</section>`
      },
      {
        step: '2단계: Hero 배경 & 레이아웃',
        code: `.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('hero-bg.jpg');
  background-size: cover;
  background-position: center;
}`
      },
      {
        step: '3단계: 오버레이',
        code: `.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}`
      },
      {
        step: '4단계: 콘텐츠 스타일',
        code: `.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
}
.hero h1 {
  font-size: 3rem;
  margin-bottom: 24px;
}
.hero p {
  font-size: 1.25rem;
  margin-bottom: 32px;
  line-height: 1.6;
}
.cta-btn {
  padding: 16px 32px;
  background: var(--color-accent);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
}`
      }
    ],
    checklist: [
      'Hero 섹션 높이가 100vh인가요?',
      '배경 이미지가 전체를 덮고 있나요 (background-size: cover)?',
      '오버레이가 배경 위에 있나요?',
      '오버레이 투명도가 50%인가요?',
      '텍스트가 흰색이고 중앙 정렬되었나요?',
      '텍스트가 오버레이 위에 표시되나요 (z-index)?',
      '제목 크기가 3rem인가요?',
      'CTA 버튼이 Accent 색상인가요?'
    ]
  },

  'S017': {
    learningPoints: [
      '<strong>이미지 갤러리</strong>의 Grid 레이아웃',
      '<code>object-fit: cover</code>로 이미지 비율 유지',
      '<code>aspect-ratio</code>로 이미지 높이 자동 조정',
      'Grid gap으로 이미지 간격 조정'
    ],
    requirements: {
      html: [
        'Container <code>&lt;div class="gallery"&gt;</code>',
        '6개의 이미지 (<code>&lt;img&gt;</code> 태그 또는 배경)',
        '각 이미지를 <code>&lt;div class="gallery-item"&gt;</code>로 감싸기',
        'Placeholder 이미지 사용 가능'
      ],
      css: [
        '<strong>Gallery:</strong> <code>display: grid; grid-template-columns: repeat(3, 1fr);</code>',
        '<strong>Gallery:</strong> <code>gap: 16px;</code>',
        '<strong>Gallery Item:</strong> <code>aspect-ratio: 1 / 1;</code> (정사각형)',
        '<strong>이미지:</strong> <code>width: 100%; height: 100%; object-fit: cover;</code>'
      ],
      details: [
        'Gallery 패딩: 48px',
        'Gallery Item: 둥근 모서리 12px, overflow: hidden',
        'Gallery Item hover: 확대 효과 (transform: scale(1.05))',
        '반응형: 768px 이하 2열, 480px 이하 1열'
      ]
    },
    styles: {
      colors: [
        { name: 'Gallery 배경', value: '#F3F4F6', desc: 'Light Gray' },
        { name: 'Gallery Item 배경', value: '#E5E7EB', desc: 'Placeholder' }
      ],
      typography: [],
      spacing: [
        { element: 'Gallery 패딩', value: '48px' },
        { element: 'Grid gap', value: '16px' },
        { element: 'Gallery Item 모서리', value: 'border-radius: 12px' },
        { element: 'Aspect ratio', value: '1 / 1 (정사각형)' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="gallery">
  <div class="gallery-item">
    <img src="https://via.placeholder.com/400" alt="이미지 1">
  </div>
  <div class="gallery-item">
    <img src="https://via.placeholder.com/400" alt="이미지 2">
  </div>
  <!-- 4개 더 반복 -->
</div>`
      },
      {
        step: '2단계: Gallery Grid',
        code: `.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 48px;
  background: #F3F4F6;
}`
      },
      {
        step: '3단계: Gallery Item',
        code: `.gallery-item {
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  overflow: hidden;
  transition: 0.3s ease;
}
.gallery-item:hover {
  transform: scale(1.05);
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}`
      },
      {
        step: '4단계: 반응형',
        code: `@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}`
      }
    ],
    checklist: [
      'Gallery가 CSS Grid로 설정되어 있나요?',
      '3열 그리드가 생성되었나요?',
      'Grid gap이 16px인가요?',
      '이미지가 정사각형(aspect-ratio: 1 / 1)인가요?',
      '이미지가 object-fit: cover로 설정되었나요?',
      'Gallery Item hover 시 확대되나요?',
      '768px 이하에서 2열로 변경되나요?',
      '480px 이하에서 1열로 변경되나요?'
    ]
  },

  'S018': {
    learningPoints: [
      '<strong>상품 카드(Product Card)</strong>의 구조',
      '이미지, 텍스트, 가격 정보의 레이아웃',
      '카드 hover 효과와 그림자',
      '가격 표시의 시각적 강조'
    ],
    requirements: {
      html: [
        '카드 Container <code>&lt;div class="product-card"&gt;</code>',
        '이미지 영역 <code>&lt;img&gt;</code>',
        '상품명 <code>&lt;h3&gt;</code>',
        '가격 <code>&lt;p class="price"&gt;</code>',
        '구매 버튼 (선택사항)'
      ],
      css: [
        '<strong>Card:</strong> 최대 너비 300px, 배경 흰색, 둥근 모서리',
        '<strong>이미지:</strong> 전체 너비, aspect-ratio: 4 / 3',
        '<strong>Card hover:</strong> 그림자 강화, 위로 이동',
        '<strong>가격:</strong> Primary 색상, 굵게, 큰 크기'
      ],
      details: [
        'Card 패딩: 16px (하단만)',
        '이미지: 상단 둥근 모서리만 적용',
        '상품명: 1.25rem, 굵게',
        '가격: 1.5rem, Primary 색상',
        'Card 그림자: 0 2px 8px rgba(0,0,0,0.1)'
      ]
    },
    styles: {
      colors: [
        { name: 'Card 배경', value: '#FFFFFF', desc: 'White' },
        { name: '상품명', value: '#222222', desc: 'Dark' },
        { name: '가격', value: '#4F46E5', desc: 'Primary' }
      ],
      typography: [
        { element: '상품명', style: '1.25rem, 굵게' },
        { element: '가격', style: '1.5rem, 굵게' }
      ],
      spacing: [
        { element: 'Card 최대 너비', value: '300px' },
        { element: 'Card 패딩 (하단)', value: '16px' },
        { element: '상품명-가격 간격', value: '8px' },
        { element: '이미지 aspect-ratio', value: '4 / 3' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="product-card">
  <img src="https://via.placeholder.com/400x300" alt="상품">
  <div class="card-content">
    <h3>상품명</h3>
    <p class="price">₩29,900</p>
  </div>
</div>`
      },
      {
        step: '2단계: Card 스타일',
        code: `.product-card {
  max-width: 300px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: 0.3s ease;
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}`
      },
      {
        step: '3단계: 이미지',
        code: `.product-card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}`
      },
      {
        step: '4단계: 콘텐츠',
        code: `.card-content {
  padding: 16px;
}
.card-content h3 {
  font-size: 1.25rem;
  margin-bottom: 8px;
}
.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-primary);
}`
      }
    ],
    checklist: [
      'Card 최대 너비가 300px인가요?',
      '이미지가 4:3 비율인가요?',
      '이미지가 전체 너비를 차지하나요?',
      'Card hover 시 위로 이동하나요?',
      'Card hover 시 그림자가 강화되나요?',
      '가격이 Primary 색상인가요?',
      '가격이 1.5rem 굵게 표시되나요?',
      'Card에 둥근 모서리가 있나요?'
    ]
  },

  'S019': {
    learningPoints: [
      '<strong>푸터(Footer)</strong>의 전형적인 구조',
      'Grid 또는 Flexbox로 다단 레이아웃 구성',
      '링크 그룹화와 시각적 구분',
      '저작권 정보와 소셜 미디어 링크 배치'
    ],
    requirements: {
      html: [
        '<code>&lt;footer&gt;</code> 태그 사용',
        '3개의 컬럼 (회사 정보, 링크, 소셜 미디어)',
        '각 컬럼에 제목과 링크/텍스트',
        '하단에 저작권 정보 <code>&lt;p&gt;</code>'
      ],
      css: [
        '<strong>Footer:</strong> 배경 Dark(#222), 텍스트 흰색',
        '<strong>컬럼:</strong> Grid 또는 Flexbox로 3단 분할',
        '<strong>링크:</strong> 세로 정렬, 간격 8px',
        '<strong>저작권:</strong> 중앙 정렬, 상단 보더'
      ],
      details: [
        'Footer 패딩: 48px',
        '컬럼 제목: 1.125rem, 굵게',
        '링크: 0.875rem, 투명도 80%',
        '링크 hover: 투명도 100%, Primary 색상',
        '저작권: 0.875rem, 상단 마진 32px'
      ]
    },
    styles: {
      colors: [
        { name: 'Footer 배경', value: '#222222', desc: 'Dark' },
        { name: '텍스트/링크', value: '#FFFFFF', desc: 'White' },
        { name: '링크 hover', value: '#4F46E5', desc: 'Primary' },
        { name: '저작권 보더', value: '#444444', desc: 'Dark Gray' }
      ],
      typography: [
        { element: '컬럼 제목', style: '1.125rem, 굵게' },
        { element: '링크', style: '0.875rem, 투명도 80%' },
        { element: '저작권', style: '0.875rem, 투명도 60%' }
      ],
      spacing: [
        { element: 'Footer 패딩', value: '48px' },
        { element: '컬럼 간격', value: '48px' },
        { element: '링크 간격', value: '8px' },
        { element: '저작권 상단 마진', value: '32px' },
        { element: '저작권 상단 보더', value: '1px solid #444' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<footer class="footer">
  <div class="footer-content">
    <div class="footer-column">
      <h4>회사 정보</h4>
      <p>웹 퍼블리싱 교육 플랫폼</p>
    </div>
    <div class="footer-column">
      <h4>바로가기</h4>
      <a href="#">소개</a>
      <a href="#">강의</a>
      <a href="#">문의</a>
    </div>
    <div class="footer-column">
      <h4>소셜 미디어</h4>
      <a href="#">Facebook</a>
      <a href="#">Twitter</a>
    </div>
  </div>
  <p class="copyright">&copy; 2024 웹 퍼블리싱. All rights reserved.</p>
</footer>`
      },
      {
        step: '2단계: Footer 스타일',
        code: `.footer {
  background: #222;
  color: white;
  padding: 48px;
}`
      },
      {
        step: '3단계: 컬럼 레이아웃',
        code: `.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
}
.footer-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.footer-column h4 {
  font-size: 1.125rem;
  margin-bottom: 8px;
}`
      },
      {
        step: '4단계: 링크 & 저작권',
        code: `.footer-column a {
  color: white;
  opacity: 0.8;
  text-decoration: none;
  font-size: 0.875rem;
  transition: 0.3s ease;
}
.footer-column a:hover {
  opacity: 1;
  color: var(--color-primary);
}
.copyright {
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid #444;
  text-align: center;
  font-size: 0.875rem;
  opacity: 0.6;
}`
      }
    ],
    checklist: [
      'Footer 배경이 Dark(#222)인가요?',
      '3개의 컬럼이 Grid로 정렬되어 있나요?',
      '컬럼 간격이 48px인가요?',
      '링크가 세로로 정렬되어 있나요?',
      '링크 hover 시 투명도가 100%가 되나요?',
      '링크 hover 시 Primary 색상으로 변하나요?',
      '저작권에 상단 보더가 있나요?',
      '저작권이 중앙 정렬되어 있나요?'
    ]
  },

  'S020': {
    learningPoints: [
      '<strong>컬러 팔레트</strong> UI 구성',
      '색상 정보 표시 (Hex, RGB, 이름)',
      'Flexbox 또는 Grid로 색상 카드 배치',
      '텍스트 대비를 고려한 색상 선택'
    ],
    requirements: {
      html: [
        'Container <code>&lt;div class="palette"&gt;</code>',
        '6개의 색상 카드 <code>&lt;div class="color-card"&gt;</code>',
        '각 카드에 색상 박스 + 색상 이름 + Hex 코드'
      ],
      css: [
        '<strong>Palette:</strong> Grid 또는 Flexbox, 3열',
        '<strong>Color Card:</strong> 중앙 정렬, 배경 흰색, 그림자',
        '<strong>Color Box:</strong> 정사각형 (120px × 120px), 둥근 모서리',
        '<strong>각 색상:</strong> 실제 브랜드 색상 사용'
      ],
      details: [
        '색상 카드 패딩: 24px',
        '색상 이름: 1rem, 굵게',
        'Hex 코드: 0.875rem, 회색',
        'Color Box: border-radius: 12px',
        'Container 패딩: 48px'
      ]
    },
    styles: {
      colors: [
        { name: 'Container 배경', value: '#F3F4F6', desc: 'Light Gray' },
        { name: 'Card 배경', value: '#FFFFFF', desc: 'White' },
        { name: 'Primary 예시', value: '#4F46E5', desc: 'Indigo' },
        { name: 'Secondary 예시', value: '#10B981', desc: 'Green' },
        { name: 'Accent 예시', value: '#FF9800', desc: 'Orange' },
        { name: 'Dark 예시', value: '#222222', desc: 'Dark' }
      ],
      typography: [
        { element: '색상 이름', style: '1rem, 굵게' },
        { element: 'Hex 코드', style: '0.875rem, 회색 (#666)' }
      ],
      spacing: [
        { element: 'Container 패딩', value: '48px' },
        { element: 'Card 패딩', value: '24px' },
        { element: 'Grid gap', value: '24px' },
        { element: 'Color Box 크기', value: '120px × 120px' },
        { element: 'Color Box 하단 마진', value: '16px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="palette">
  <div class="color-card">
    <div class="color-box" style="background: #4F46E5;"></div>
    <p class="color-name">Primary</p>
    <p class="color-hex">#4F46E5</p>
  </div>
  <div class="color-card">
    <div class="color-box" style="background: #10B981;"></div>
    <p class="color-name">Secondary</p>
    <p class="color-hex">#10B981</p>
  </div>
  <!-- 4개 더 반복 -->
</div>`
      },
      {
        step: '2단계: Palette Grid',
        code: `.palette {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 48px;
  background: #F3F4F6;
}`
      },
      {
        step: '3단계: Color Card',
        code: `.color-card {
  padding: 24px;
  background: white;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}`
      },
      {
        step: '4단계: Color Box & Text',
        code: `.color-box {
  width: 120px;
  height: 120px;
  margin: 0 auto 16px;
  border-radius: 12px;
}
.color-name {
  font-weight: bold;
  margin-bottom: 4px;
}
.color-hex {
  font-size: 0.875rem;
  color: #666;
}`
      }
    ],
    checklist: [
      'Palette가 Grid로 설정되어 있나요?',
      '3열 그리드가 생성되었나요?',
      'Color Card가 중앙 정렬되어 있나요?',
      'Color Box가 정사각형(120px × 120px)인가요?',
      'Color Box에 둥근 모서리가 있나요?',
      '색상 이름이 굵게 표시되나요?',
      'Hex 코드가 회색(#666)인가요?',
      'Card에 그림자 효과가 있나요?'
    ]
  },

  // 애니메이션 기초 (S021-S025)
  'S021': {
    learningPoints: [
      '<strong>Hover 효과</strong>의 기본 개념',
      '<code>:hover</code> 선택자 사용법',
      '<code>transition</code>으로 부드러운 애니메이션',
      '여러 속성을 동시에 애니메이션하기'
    ],
    requirements: {
      html: [
        '3가지 버튼 생성 (각각 다른 hover 효과)',
        '버튼 1: 배경색 변경',
        '버튼 2: 크기 확대',
        '버튼 3: 그림자 + 위로 이동'
      ],
      css: [
        '<strong>공통:</strong> <code>transition: 0.3s ease</code>',
        '<strong>버튼 1 hover:</strong> 배경색 Primary → Dark Indigo',
        '<strong>버튼 2 hover:</strong> <code>transform: scale(1.1)</code>',
        '<strong>버튼 3 hover:</strong> <code>transform: translateY(-4px)</code> + 그림자 강화'
      ],
      details: [
        '버튼 기본 스타일: 패딩 12px 24px, 둥근 모서리',
        '버튼 간격: 16px',
        '모든 버튼에 cursor: pointer'
      ]
    },
    styles: {
      colors: [
        { name: '버튼 기본 배경', value: '#4F46E5', desc: 'Primary' },
        { name: '버튼 hover 배경', value: '#3730a3', desc: 'Dark Indigo' }
      ],
      typography: [
        { element: '버튼 텍스트', style: '1rem, 중간 굵기' }
      ],
      spacing: [
        { element: '버튼 패딩', value: '12px 24px' },
        { element: '버튼 간격', value: '16px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="button-group">
  <button class="btn btn-1">색상 변경</button>
  <button class="btn btn-2">크기 확대</button>
  <button class="btn btn-3">떠오르기</button>
</div>`
      },
      {
        step: '2단계: 기본 버튼',
        code: `.btn {
  padding: 12px 24px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;
}`
      },
      {
        step: '3단계: Hover 효과들',
        code: `.btn-1:hover {
  background: #3730a3;
}
.btn-2:hover {
  transform: scale(1.1);
}
.btn-3:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
}`
      }
    ],
    checklist: [
      '모든 버튼에 transition이 있나요?',
      '버튼 1 hover 시 배경색이 변하나요?',
      '버튼 2 hover 시 크기가 확대되나요?',
      '버튼 3 hover 시 위로 이동하나요?',
      '버튼 3 hover 시 그림자가 나타나나요?',
      '애니메이션이 부드러운가요?'
    ]
  },

  'S022': {
    learningPoints: [
      '<strong>CSS 애니메이션</strong>의 기본 구조',
      '<code>@keyframes</code>로 애니메이션 정의',
      '<code>animation</code> 속성 사용법',
      'Fade-in 효과 구현하기'
    ],
    requirements: {
      html: [
        '카드 3개 생성',
        '각 카드에 다른 애니메이션 딜레이 적용'
      ],
      css: [
        '<strong>Keyframes:</strong> fadeIn (opacity: 0 → 1, translateY: 20px → 0)',
        '<strong>Animation:</strong> <code>animation: fadeIn 0.6s ease forwards</code>',
        '<strong>Delay:</strong> 각 카드마다 0.2s씩 증가 (0s, 0.2s, 0.4s)'
      ],
      details: [
        '카드 초기 상태: opacity: 0',
        '카드: 배경 흰색, 그림자, 둥근 모서리',
        '애니메이션 완료 후 상태 유지 (forwards)'
      ]
    },
    styles: {
      colors: [
        { name: 'Card 배경', value: '#FFFFFF', desc: 'White' },
        { name: 'Container 배경', value: '#F3F4F6', desc: 'Light Gray' }
      ],
      typography: [
        { element: '카드 제목', style: '1.25rem, 굵게' }
      ],
      spacing: [
        { element: 'Card 패딩', value: '24px' },
        { element: 'Card 간격', value: '16px' }
      ]
    },
    implementation: [
      {
        step: '1단계: Keyframes 정의',
        code: `@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`
      },
      {
        step: '2단계: Card 기본 스타일',
        code: `.card {
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  opacity: 0;
  animation: fadeIn 0.6s ease forwards;
}`
      },
      {
        step: '3단계: Delay 적용',
        code: `.card:nth-child(1) {
  animation-delay: 0s;
}
.card:nth-child(2) {
  animation-delay: 0.2s;
}
.card:nth-child(3) {
  animation-delay: 0.4s;
}`
      }
    ],
    checklist: [
      '@keyframes fadeIn이 정의되어 있나요?',
      '카드 초기 opacity가 0인가요?',
      'animation 속성이 있나요?',
      'forwards로 최종 상태가 유지되나요?',
      '각 카드가 순차적으로 나타나나요?',
      '페이지 로드 시 애니메이션이 실행되나요?'
    ]
  },

  'S023': {
    learningPoints: [
      '<strong>로딩 스피너</strong> 애니메이션',
      '<code>animation: rotate infinite</code>로 무한 회전',
      'border 트릭으로 원형 스피너 만들기',
      '<code>@keyframes rotate</code> 정의'
    ],
    requirements: {
      html: [
        '스피너 Container <code>&lt;div class="spinner"&gt;</code>',
        '중앙 정렬된 레이아웃'
      ],
      css: [
        '<strong>Spinner:</strong> 원형 (border-radius: 50%), 크기 60px',
        '<strong>Border:</strong> 4px solid, 상단만 Primary 색상',
        '<strong>Animation:</strong> <code>animation: rotate 1s linear infinite</code>',
        '<strong>Keyframes:</strong> 0도 → 360도 회전'
      ],
      details: [
        'Spinner border: 투명 + 상단만 색상',
        '화면 중앙 정렬 (Flexbox)',
        '회전 속도: 1초'
      ]
    },
    styles: {
      colors: [
        { name: 'Spinner border (상단)', value: '#4F46E5', desc: 'Primary' },
        { name: 'Spinner border (나머지)', value: 'transparent', desc: 'Transparent' },
        { name: 'Container 배경', value: '#F3F4F6', desc: 'Light Gray' }
      ],
      typography: [],
      spacing: [
        { element: 'Spinner 크기', value: '60px × 60px' },
        { element: 'Border 두께', value: '4px' }
      ]
    },
    implementation: [
      {
        step: '1단계: Keyframes',
        code: `@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`
      },
      {
        step: '2단계: Container',
        code: `.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #F3F4F6;
}`
      },
      {
        step: '3단계: Spinner',
        code: `.spinner {
  width: 60px;
  height: 60px;
  border: 4px solid transparent;
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: rotate 1s linear infinite;
}`
      }
    ],
    checklist: [
      'Spinner가 원형인가요?',
      'Spinner가 계속 회전하나요?',
      '회전 속도가 일정한가요 (linear)?',
      '상단 border만 색상이 있나요?',
      'Spinner가 화면 중앙에 있나요?',
      'animation이 무한 반복되나요 (infinite)?'
    ]
  },

  'S024': {
    learningPoints: [
      '<strong>슬라이드 애니메이션</strong>으로 메뉴 표시',
      '<code>transform: translateX</code>로 좌우 이동',
      'JavaScript 없이 CSS만으로 토글 효과 (체크박스 트릭)',
      '<code>:checked</code> 선택자 활용'
    ],
    requirements: {
      html: [
        '토글 버튼 (체크박스 + 라벨)',
        '사이드 메뉴 <code>&lt;div class="sidebar"&gt;</code>',
        '메뉴 내부에 링크 5개'
      ],
      css: [
        '<strong>Sidebar:</strong> 고정 위치 (position: fixed), 너비 250px',
        '<strong>초기:</strong> <code>transform: translateX(-100%)</code> (화면 밖)',
        '<strong>체크박스 checked 시:</strong> <code>transform: translateX(0)</code>',
        '<strong>Transition:</strong> <code>transition: transform 0.3s ease</code>'
      ],
      details: [
        'Sidebar: 배경 Dark, 텍스트 흰색, 높이 100vh',
        '체크박스 숨김 처리',
        '토글 버튼: 고정 위치 (top: 20px, left: 20px)'
      ]
    },
    styles: {
      colors: [
        { name: 'Sidebar 배경', value: '#222222', desc: 'Dark' },
        { name: 'Sidebar 링크', value: '#FFFFFF', desc: 'White' },
        { name: '토글 버튼 배경', value: '#4F46E5', desc: 'Primary' }
      ],
      typography: [
        { element: 'Sidebar 링크', style: '1rem' }
      ],
      spacing: [
        { element: 'Sidebar 너비', value: '250px' },
        { element: 'Sidebar 패딩', value: '24px' },
        { element: '링크 간격', value: '16px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<input type="checkbox" id="menu-toggle" hidden>
<label for="menu-toggle" class="toggle-btn">☰</label>
<div class="sidebar">
  <a href="#">홈</a>
  <a href="#">소개</a>
  <a href="#">서비스</a>
  <a href="#">블로그</a>
  <a href="#">연락처</a>
</div>`
      },
      {
        step: '2단계: Sidebar 기본',
        code: `.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background: #222;
  padding: 24px;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}`
      },
      {
        step: '3단계: 토글 기능',
        code: `#menu-toggle:checked ~ .sidebar {
  transform: translateX(0);
}
.toggle-btn {
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 12px 16px;
  background: var(--color-primary);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1000;
}`
      }
    ],
    checklist: [
      'Sidebar가 초기에 화면 밖에 있나요?',
      '토글 버튼 클릭 시 Sidebar가 나타나나요?',
      'Sidebar 이동이 부드러운가요 (transition)?',
      'Sidebar가 position: fixed인가요?',
      'Sidebar 높이가 100vh인가요?',
      '체크박스가 숨겨져 있나요?'
    ]
  },

  'S025': {
    learningPoints: [
      '<strong>펄스 애니메이션</strong> (확대/축소 반복)',
      '<code>animation-direction: alternate</code>로 왕복',
      '<code>transform: scale</code>로 크기 변경',
      '무한 반복 + 부드러운 easing'
    ],
    requirements: {
      html: [
        '펄스 효과가 적용될 원형 요소',
        '중앙 정렬'
      ],
      css: [
        '<strong>Keyframes:</strong> pulse (scale: 1 → 1.2)',
        '<strong>Animation:</strong> <code>animation: pulse 1.5s ease-in-out infinite alternate</code>',
        '<strong>원형 요소:</strong> 크기 100px, border-radius: 50%',
        '<strong>색상:</strong> Primary 배경'
      ],
      details: [
        'alternate로 확대/축소 반복',
        'ease-in-out으로 자연스러운 움직임',
        '추가 효과: opacity 변화 (선택사항)'
      ]
    },
    styles: {
      colors: [
        { name: '원형 요소 배경', value: '#4F46E5', desc: 'Primary' },
        { name: 'Container 배경', value: '#F3F4F6', desc: 'Light Gray' }
      ],
      typography: [],
      spacing: [
        { element: '원형 요소 크기', value: '100px × 100px' }
      ]
    },
    implementation: [
      {
        step: '1단계: Keyframes',
        code: `@keyframes pulse {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
}`
      },
      {
        step: '2단계: Container',
        code: `.pulse-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #F3F4F6;
}`
      },
      {
        step: '3단계: Pulse 요소',
        code: `.pulse {
  width: 100px;
  height: 100px;
  background: var(--color-primary);
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite alternate;
}`
      }
    ],
    checklist: [
      '@keyframes pulse가 정의되어 있나요?',
      '원형 요소가 확대/축소를 반복하나요?',
      'animation-direction: alternate가 있나요?',
      '애니메이션이 무한 반복되나요?',
      'ease-in-out으로 부드러운가요?',
      '원형 요소가 화면 중앙에 있나요?'
    ]
  },

  // 추가 초급 (S026-S030)
  'S026': {
    learningPoints: [
      '<strong>테이블</strong>의 기본 구조',
      '<code>&lt;thead&gt;, &lt;tbody&gt;, &lt;tr&gt;, &lt;th&gt;, &lt;td&gt;</code> 태그',
      '테이블 스타일링: border-collapse, 줄무늬 효과',
      'hover 효과로 행 강조하기'
    ],
    requirements: {
      html: [
        '<code>&lt;table&gt;</code> 태그 사용',
        '<code>&lt;thead&gt;</code>에 헤더 행 (이름, 이메일, 역할)',
        '<code>&lt;tbody&gt;</code>에 데이터 행 5개'
      ],
      css: [
        '<strong>Table:</strong> <code>border-collapse: collapse</code>, 전체 너비',
        '<strong>Header:</strong> 배경 Primary, 텍스트 흰색',
        '<strong>Cells:</strong> 패딩 12px, 테두리 1px',
        '<strong>Rows:</strong> 짝수 행 배경색 (nth-child), hover 효과'
      ],
      details: [
        '테이블 최대 너비: 800px, 중앙 정렬',
        '짝수 행: 연한 회색 배경 (#F3F4F6)',
        'Row hover: 배경색 Primary 10% 투명도'
      ]
    },
    styles: {
      colors: [
        { name: 'Header 배경', value: '#4F46E5', desc: 'Primary' },
        { name: '짝수 행 배경', value: '#F3F4F6', desc: 'Light Gray' },
        { name: 'Row hover', value: 'rgba(79, 70, 229, 0.1)', desc: 'Primary 10%' },
        { name: 'Border', value: '#E5E7EB', desc: 'Light Gray' }
      ],
      typography: [
        { element: 'Table 헤더', style: '1rem, 중간 굵기' },
        { element: 'Table 셀', style: '1rem' }
      ],
      spacing: [
        { element: 'Table 최대 너비', value: '800px' },
        { element: 'Cell 패딩', value: '12px' },
        { element: 'Border', value: '1px solid #E5E7EB' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<table>
  <thead>
    <tr>
      <th>이름</th>
      <th>이메일</th>
      <th>역할</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>홍길동</td>
      <td>hong@email.com</td>
      <td>개발자</td>
    </tr>
    <!-- 4개 더 반복 -->
  </tbody>
</table>`
      },
      {
        step: '2단계: Table 기본',
        code: `table {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
}
th, td {
  padding: 12px;
  text-align: left;
  border: 1px solid #E5E7EB;
}`
      },
      {
        step: '3단계: Header & 줄무늬',
        code: `thead {
  background: var(--color-primary);
  color: white;
}
tbody tr:nth-child(even) {
  background: #F3F4F6;
}
tbody tr:hover {
  background: rgba(79, 70, 229, 0.1);
}`
      }
    ],
    checklist: [
      'Table이 border-collapse: collapse인가요?',
      'Header 배경이 Primary인가요?',
      '짝수 행에 배경색이 있나요?',
      'Row hover 시 배경색이 변하나요?',
      'Cell에 패딩이 있나요?',
      'Table이 중앙 정렬되어 있나요?'
    ]
  },

  'S027': {
    learningPoints: [
      '<strong>프로그레스 바</strong> 구현',
      '<code>&lt;progress&gt;</code> 태그 vs DIV로 커스텀',
      '퍼센티지 표시 방법',
      '진행률에 따른 색상 변경'
    ],
    requirements: {
      html: [
        '프로그레스 바 Container <code>&lt;div class="progress"&gt;</code>',
        '내부에 채워지는 부분 <code>&lt;div class="progress-fill"&gt;</code>',
        '퍼센티지 텍스트 <code>&lt;span&gt;</code>',
        '3개의 프로그레스 바 (30%, 60%, 90%)'
      ],
      css: [
        '<strong>Container:</strong> 높이 24px, 배경 Light Gray, 둥근 모서리',
        '<strong>Fill:</strong> 높이 100%, 배경 Primary, width로 진행률 표시',
        '<strong>텍스트:</strong> position: absolute로 중앙 배치',
        '<strong>Transition:</strong> <code>transition: width 0.5s ease</code>'
      ],
      details: [
        'Progress 너비: 100%, 최대 600px',
        'Fill 색상: Primary',
        '텍스트: 흰색, 굵게, 가운데 정렬'
      ]
    },
    styles: {
      colors: [
        { name: 'Container 배경', value: '#E5E7EB', desc: 'Light Gray' },
        { name: 'Fill 배경', value: '#4F46E5', desc: 'Primary' },
        { name: '텍스트', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '퍼센티지', style: '0.875rem, 굵게' }
      ],
      spacing: [
        { element: 'Progress 높이', value: '24px' },
        { element: 'Progress 최대 너비', value: '600px' },
        { element: 'Progress 간격', value: '16px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="progress">
  <div class="progress-fill" style="width: 30%;">
    <span>30%</span>
  </div>
</div>
<div class="progress">
  <div class="progress-fill" style="width: 60%;">
    <span>60%</span>
  </div>
</div>
<div class="progress">
  <div class="progress-fill" style="width: 90%;">
    <span>90%</span>
  </div>
</div>`
      },
      {
        step: '2단계: Progress Container',
        code: `.progress {
  position: relative;
  max-width: 600px;
  height: 24px;
  background: #E5E7EB;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
}`
      },
      {
        step: '3단계: Progress Fill',
        code: `.progress-fill {
  height: 100%;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.5s ease;
}
.progress-fill span {
  color: white;
  font-size: 0.875rem;
  font-weight: bold;
}`
      }
    ],
    checklist: [
      'Progress Container 높이가 24px인가요?',
      'Fill이 Container 내부를 채우나요?',
      '퍼센티지 텍스트가 중앙에 있나요?',
      'Fill에 transition이 있나요?',
      'Progress가 둥근 모서리인가요?',
      '3개의 프로그레스 바가 다른 진행률을 표시하나요?'
    ]
  },

  'S028': {
    learningPoints: [
      '<strong>툴팁</strong> 구현 (CSS only)',
      '<code>::before</code> 또는 <code>::after</code> 가상 요소',
      '<code>:hover</code>로 툴팁 표시/숨김',
      'position: absolute로 위치 조정'
    ],
    requirements: {
      html: [
        '툴팁이 적용될 요소 (버튼 또는 텍스트)',
        'data-tooltip 속성에 툴팁 내용'
      ],
      css: [
        '<strong>툴팁:</strong> <code>::after</code> 가상 요소 사용',
        '<strong>내용:</strong> <code>content: attr(data-tooltip)</code>',
        '<strong>위치:</strong> position: absolute, 요소 상단',
        '<strong>초기:</strong> opacity: 0, visibility: hidden',
        '<strong>Hover:</strong> opacity: 1, visibility: visible'
      ],
      details: [
        '툴팁 배경: Dark, 텍스트 흰색',
        '툴팁 패딩: 8px 12px, 둥근 모서리',
        '작은 삼각형 화살표 추가 (::before)',
        'transition으로 부드러운 fade-in'
      ]
    },
    styles: {
      colors: [
        { name: '툴팁 배경', value: '#222222', desc: 'Dark' },
        { name: '툴팁 텍스트', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '툴팁', style: '0.875rem' }
      ],
      spacing: [
        { element: '툴팁 패딩', value: '8px 12px' },
        { element: '툴팁 위치', value: 'bottom: 100%, 상단 10px 간격' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<button class="tooltip-btn" data-tooltip="이것은 툴팁입니다">
  Hover me
</button>`
      },
      {
        step: '2단계: 버튼 & 툴팁 기본',
        code: `.tooltip-btn {
  position: relative;
  padding: 12px 24px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.tooltip-btn::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10px;
  padding: 8px 12px;
  background: #222;
  color: white;
  font-size: 0.875rem;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease;
}`
      },
      {
        step: '3단계: Hover 표시',
        code: `.tooltip-btn:hover::after {
  opacity: 1;
  visibility: visible;
}`
      }
    ],
    checklist: [
      '버튼이 position: relative인가요?',
      '툴팁이 ::after 가상 요소인가요?',
      '툴팁 내용이 data-tooltip에서 오나요?',
      '툴팁이 초기에 숨겨져 있나요?',
      'Hover 시 툴팁이 나타나나요?',
      '툴팁이 버튼 위쪽에 위치하나요?'
    ]
  },

  'S029': {
    learningPoints: [
      '<strong>브레드크럼(Breadcrumb)</strong> 네비게이션',
      '구분자(/)를 CSS로 추가하기 (<code>::after</code>)',
      'Flexbox로 가로 정렬',
      '현재 페이지 표시'
    ],
    requirements: {
      html: [
        '<code>&lt;nav class="breadcrumb"&gt;</code>',
        '4단계 경로 (홈 > 카테고리 > 서브카테고리 > 현재 페이지)',
        '각 단계는 <code>&lt;a&gt;</code> 또는 <code>&lt;span&gt;</code>'
      ],
      css: [
        '<strong>Container:</strong> Flexbox, 가로 정렬',
        '<strong>구분자:</strong> <code>::after { content: "/" }</code>',
        '<strong>마지막 항목:</strong> 구분자 없음, 색상 Dark',
        '<strong>링크:</strong> Primary 색상, hover 효과'
      ],
      details: [
        'Breadcrumb 패딩: 16px',
        '항목 간격: 8px',
        '마지막 항목: 굵게, 링크 아님'
      ]
    },
    styles: {
      colors: [
        { name: 'Breadcrumb 배경', value: '#F3F4F6', desc: 'Light Gray' },
        { name: '링크', value: '#4F46E5', desc: 'Primary' },
        { name: '현재 페이지', value: '#222222', desc: 'Dark' },
        { name: '구분자', value: '#999999', desc: 'Gray' }
      ],
      typography: [
        { element: 'Breadcrumb', style: '0.875rem' },
        { element: '현재 페이지', style: '0.875rem, 굵게' }
      ],
      spacing: [
        { element: 'Breadcrumb 패딩', value: '16px' },
        { element: '항목 간격', value: '8px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<nav class="breadcrumb">
  <a href="#">홈</a>
  <a href="#">카테고리</a>
  <a href="#">서브카테고리</a>
  <span>현재 페이지</span>
</nav>`
      },
      {
        step: '2단계: Breadcrumb 기본',
        code: `.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: #F3F4F6;
  border-radius: 8px;
}
.breadcrumb a {
  color: var(--color-primary);
  text-decoration: none;
  font-size: 0.875rem;
}
.breadcrumb a:hover {
  text-decoration: underline;
}`
      },
      {
        step: '3단계: 구분자 & 현재',
        code: `.breadcrumb a::after {
  content: '/';
  margin-left: 8px;
  color: #999;
}
.breadcrumb span {
  font-weight: bold;
  font-size: 0.875rem;
  color: #222;
}`
      }
    ],
    checklist: [
      'Breadcrumb이 Flexbox로 정렬되어 있나요?',
      '각 링크 뒤에 구분자(/)가 있나요?',
      '마지막 항목에 구분자가 없나요?',
      '현재 페이지가 굵게 표시되나요?',
      '링크 hover 시 밑줄이 나타나나요?',
      '항목 간격이 일정한가요?'
    ]
  },

  'S030': {
    learningPoints: [
      '<strong>태그(Tag) 칩</strong> 디자인',
      'inline-block으로 태그 배치',
      '삭제 버튼 (× 아이콘) 추가',
      'Flexbox로 태그 목록 정렬'
    ],
    requirements: {
      html: [
        'Container <code>&lt;div class="tags"&gt;</code>',
        '각 태그 <code>&lt;span class="tag"&gt;</code>',
        '태그 내부에 텍스트 + 삭제 버튼 <code>&lt;button&gt;×&lt;/button&gt;</code>'
      ],
      css: [
        '<strong>Tag:</strong> 배경 Light Gray, 둥근 모서리, 패딩 6px 12px',
        '<strong>삭제 버튼:</strong> 배경 투명, 색상 회색, hover 시 Primary',
        '<strong>Container:</strong> Flexbox wrap으로 여러 줄 가능',
        '<strong>간격:</strong> gap으로 태그 간격 조정'
      ],
      details: [
        'Tag 폰트: 0.875rem',
        '삭제 버튼: 크기 20px, 둥근',
        'Tag hover: 배경색 진하게'
      ]
    },
    styles: {
      colors: [
        { name: 'Tag 배경', value: '#E5E7EB', desc: 'Light Gray' },
        { name: 'Tag 텍스트', value: '#222222', desc: 'Dark' },
        { name: '삭제 버튼', value: '#999999', desc: 'Gray' },
        { name: '삭제 버튼 hover', value: '#4F46E5', desc: 'Primary' }
      ],
      typography: [
        { element: 'Tag', style: '0.875rem' }
      ],
      spacing: [
        { element: 'Tag 패딩', value: '6px 12px' },
        { element: 'Tags 간격 (gap)', value: '8px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<div class="tags">
  <span class="tag">
    HTML
    <button class="tag-remove">×</button>
  </span>
  <span class="tag">
    CSS
    <button class="tag-remove">×</button>
  </span>
  <span class="tag">
    JavaScript
    <button class="tag-remove">×</button>
  </span>
</div>`
      },
      {
        step: '2단계: Tags Container',
        code: `.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}`
      },
      {
        step: '3단계: Tag 스타일',
        code: `.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #E5E7EB;
  border-radius: 16px;
  font-size: 0.875rem;
}
.tag-remove {
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  color: #999;
  cursor: pointer;
  transition: 0.3s ease;
}
.tag-remove:hover {
  color: var(--color-primary);
}`
      }
    ],
    checklist: [
      'Tags가 Flexbox로 정렬되어 있나요?',
      'flex-wrap으로 여러 줄 가능한가요?',
      '각 Tag에 삭제 버튼이 있나요?',
      '삭제 버튼 hover 시 색상이 변하나요?',
      'Tag가 둥근 모서리인가요?',
      'Tag 간격이 일정한가요?'
    ]
  },

  // ========== 중급 예제 (S031-S070) ==========
  // 레이아웃 중급 (S031-S035)
  'S031': {
    learningPoints: [
      '<strong>대시보드 레이아웃</strong> 구조 (Sidebar + Header + Content Grid)',
      'Grid와 Flexbox의 조합 사용',
      '위젯 카드 레이아웃과 데이터 시각화',
      '고정 Sidebar와 스크롤 가능한 Content 영역'
    ],
    requirements: {
      html: [
        'Wrapper <code>&lt;div class="dashboard"&gt;</code>',
        '좌측 Sidebar (<code>&lt;aside&gt;</code>), 상단 Header, Main 영역',
        'Main 내부에 위젯 카드 6개 (Grid 3x2)',
        '각 위젯에 제목, 숫자, 아이콘/그래프'
      ],
      css: [
        '<strong>Dashboard:</strong> <code>display: grid; grid-template-areas</code>로 레이아웃',
        '<strong>Sidebar:</strong> 고정 너비 250px, 높이 100vh, 고정 위치',
        '<strong>Header:</strong> 전체 너비, 높이 60px, 고정',
        '<strong>Main:</strong> Grid 3열, gap: 24px, 스크롤 가능'
      ],
      details: [
        'Grid areas: "sidebar header" "sidebar main"',
        'Sidebar: 배경 Dark, 메뉴 링크 세로 정렬',
        'Header: 배경 흰색, 그림자, 검색창 + 프로필',
        '위젯: 배경 흰색, 둥근 모서리, 그림자, 패딩 24px'
      ]
    },
    styles: {
      colors: [
        { name: 'Sidebar 배경', value: '#222222', desc: 'Dark' },
        { name: 'Header 배경', value: '#FFFFFF', desc: 'White' },
        { name: 'Main 배경', value: '#F3F4F6', desc: 'Light Gray' },
        { name: '위젯 배경', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '위젯 제목', style: '0.875rem, 회색 (#666)' },
        { element: '위젯 숫자', style: '2rem, 굵게' }
      ],
      spacing: [
        { element: 'Sidebar 너비', value: '250px' },
        { element: 'Header 높이', value: '60px' },
        { element: 'Main 패딩', value: '24px' },
        { element: '위젯 Grid gap', value: '24px' }
      ]
    },
    implementation: [
      {
        step: '1단계: Grid Template Areas',
        code: `.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  height: 100vh;
}`
      },
      {
        step: '2단계: Sidebar & Header',
        code: `.sidebar {
  grid-area: sidebar;
  background: #222;
  color: white;
  padding: 24px;
}
.header {
  grid-area: header;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}`
      },
      {
        step: '3단계: Main & 위젯 Grid',
        code: `.main {
  grid-area: main;
  background: #F3F4F6;
  padding: 24px;
  overflow-y: auto;
}
.widgets {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.widget {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}`
      }
    ],
    checklist: [
      'Dashboard가 Grid Template Areas를 사용하나요?',
      'Sidebar가 고정 너비 250px인가요?',
      'Header가 Sidebar와 Main 위쪽을 차지하나요?',
      'Main 영역이 스크롤 가능한가요?',
      '위젯이 3열 Grid로 배치되어 있나요?',
      'Sidebar 높이가 100vh인가요?'
    ]
  },

  'S032': {
    learningPoints: [
      '<strong>Holy Grail 레이아웃</strong> (5구역 레이아웃)',
      'Header, Footer, 좌우 Sidebar, Main 영역 구성',
      'Grid로 복잡한 레이아웃 간단하게 구현',
      '각 영역의 역할과 콘텐츠 배치'
    ],
    requirements: {
      html: [
        'Container 안에 5개 영역 (header, left-sidebar, main, right-sidebar, footer)',
        '각 영역을 시맨틱 태그로 마크업',
        'Main 영역에 실제 콘텐츠'
      ],
      css: [
        '<strong>Container:</strong> Grid, 3열 (200px 1fr 200px)',
        '<strong>Grid areas:</strong> header/footer는 전체 너비 차지',
        '<strong>최소 높이:</strong> 100vh',
        '<strong>각 영역:</strong> 배경색, 패딩, 테두리'
      ],
      details: [
        'Header/Footer: 전체 너비, Primary 배경',
        'Left Sidebar: 200px, Light Gray 배경',
        'Right Sidebar: 200px, Light Gray 배경',
        'Main: 남는 공간, White 배경'
      ]
    },
    styles: {
      colors: [
        { name: 'Header/Footer', value: '#4F46E5', desc: 'Primary' },
        { name: 'Sidebar', value: '#F3F4F6', desc: 'Light Gray' },
        { name: 'Main', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: 'Header 제목', style: '1.5rem, 굵게, 흰색' },
        { element: 'Sidebar 제목', style: '1rem, 굵게' }
      ],
      spacing: [
        { element: 'Sidebar 너비', value: '200px' },
        { element: 'Header/Footer 높이', value: '60px' },
        { element: '패딩', value: '24px' }
      ]
    },
    implementation: [
      {
        step: '1단계: Grid 구조',
        code: `.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "left main right"
    "footer footer footer";
  min-height: 100vh;
}`
      },
      {
        step: '2단계: 영역 할당',
        code: `header { grid-area: header; }
.left-sidebar { grid-area: left; }
main { grid-area: main; }
.right-sidebar { grid-area: right; }
footer { grid-area: footer; }

header, footer {
  background: var(--color-primary);
  color: white;
  padding: 24px;
}
.left-sidebar, .right-sidebar {
  background: #F3F4F6;
  padding: 24px;
}
main {
  padding: 48px;
}`
      }
    ],
    checklist: [
      'Grid Template Areas가 올바르게 설정되었나요?',
      'Header와 Footer가 3열 모두 차지하나요?',
      '좌우 Sidebar가 각각 200px인가요?',
      'Main이 중앙의 남는 공간을 차지하나요?',
      '전체 높이가 최소 100vh인가요?',
      '각 영역이 올바른 배경색을 가지나요?'
    ]
  },

  'S033': {
    learningPoints: [
      '<strong>Masonry 레이아웃</strong> (Pinterest 스타일)',
      'CSS Grid의 <code>grid-auto-flow: dense</code>',
      '<code>grid-row: span</code>으로 높이 다르게',
      '불규칙한 카드 배치'
    ],
    requirements: {
      html: [
        'Container <code>&lt;div class="masonry"&gt;</code>',
        '12개의 카드, 각각 다른 높이 클래스',
        '카드에 이미지 + 텍스트'
      ],
      css: [
        '<strong>Container:</strong> <code>display: grid; grid-template-columns: repeat(3, 1fr);</code>',
        '<strong>Auto rows:</strong> <code>grid-auto-rows: 100px;</code>',
        '<strong>카드 높이:</strong> <code>grid-row: span 2/3/4</code>로 다양하게',
        '<strong>Gap:</strong> 16px'
      ],
      details: [
        '카드: 배경 흰색, 둥근 모서리, 그림자',
        '이미지: object-fit: cover, 전체 너비',
        '카드 클래스: .tall (span 3), .medium (span 2), .short (span 1)',
        'Grid auto-flow: dense로 빈 공간 채우기'
      ]
    },
    styles: {
      colors: [
        { name: 'Container 배경', value: '#F3F4F6', desc: 'Light Gray' },
        { name: '카드 배경', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '카드 제목', style: '1rem, 굵게' },
        { element: '카드 설명', style: '0.875rem, #666' }
      ],
      spacing: [
        { element: 'Grid gap', value: '16px' },
        { element: 'Auto rows', value: '100px' },
        { element: '카드 패딩', value: '16px' }
      ]
    },
    implementation: [
      {
        step: '1단계: Masonry Grid',
        code: `.masonry {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  grid-auto-flow: dense;
  gap: 16px;
  padding: 24px;
  background: #F3F4F6;
}`
      },
      {
        step: '2단계: 카드 높이 변형',
        code: `.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
}
.card.short { grid-row: span 2; }
.card.medium { grid-row: span 3; }
.card.tall { grid-row: span 4; }`
      },
      {
        step: '3단계: 카드 내용',
        code: `.card img {
  width: 100%;
  height: 60%;
  object-fit: cover;
}
.card-content {
  padding: 16px;
}
.card h3 {
  margin-bottom: 8px;
}
.card p {
  font-size: 0.875rem;
  color: #666;
}`
      }
    ],
    checklist: [
      'Grid가 3열로 설정되어 있나요?',
      'grid-auto-rows가 100px인가요?',
      'grid-auto-flow: dense가 있나요?',
      '카드들이 다른 높이를 가지나요?',
      '빈 공간이 자동으로 채워지나요?',
      '이미지가 카드에 맞게 조정되나요?'
    ]
  },

  'S034': {
    learningPoints: [
      '<strong>Sticky Header</strong> 구현',
      '<code>position: sticky</code>의 동작 원리',
      '스크롤 시 Header 고정 + 그림자 추가 (JS)',
      '네비게이션 활성화 상태 표시'
    ],
    requirements: {
      html: [
        'Header (<code>position: sticky</code>)',
        'Hero 섹션, Content 섹션 3개',
        'Header에 로고 + 네비게이션 링크 4개'
      ],
      css: [
        '<strong>Header:</strong> <code>position: sticky; top: 0; z-index: 100;</code>',
        '<strong>초기:</strong> 배경 투명 또는 반투명',
        '<strong>스크롤 시 (JS):</strong> 배경 흰색, 그림자 추가',
        '<strong>Transition:</strong> <code>transition: 0.3s ease</code>'
      ],
      details: [
        'Header 높이: 70px',
        'Content 섹션: 최소 높이 100vh (스크롤 테스트용)',
        '스크롤 감지 JavaScript 추가',
        'Header.scrolled 클래스로 스타일 변경'
      ]
    },
    styles: {
      colors: [
        { name: 'Header 기본 배경', value: 'rgba(255, 255, 255, 0.9)', desc: 'White 90%' },
        { name: 'Header 스크롤 배경', value: '#FFFFFF', desc: 'White' },
        { name: 'Section 배경들', value: '#F3F4F6, #E5E7EB, #D1D5DB', desc: 'Grays' }
      ],
      typography: [
        { element: 'Header 링크', style: '1rem, 중간 굵기' }
      ],
      spacing: [
        { element: 'Header 높이', value: '70px' },
        { element: 'Header 패딩', value: '0 48px' },
        { element: 'Section 최소 높이', value: '100vh' }
      ]
    },
    implementation: [
      {
        step: '1단계: Sticky Header',
        code: `header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 70px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  transition: 0.3s ease;
}
header.scrolled {
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}`
      },
      {
        step: '2단계: Scroll 감지 JS',
        code: `window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});`
      },
      {
        step: '3단계: Content 섹션',
        code: `.section {
  min-height: 100vh;
  padding: 80px 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.section:nth-child(odd) {
  background: #F3F4F6;
}
.section:nth-child(even) {
  background: #E5E7EB;
}`
      }
    ],
    checklist: [
      'Header가 position: sticky인가요?',
      'Header top이 0으로 설정되었나요?',
      'z-index가 100 이상인가요?',
      '스크롤 시 Header가 화면 상단에 고정되나요?',
      'JavaScript로 scrolled 클래스가 추가되나요?',
      'scrolled 상태에서 그림자가 나타나나요?',
      'Content 섹션들이 스크롤 가능한가요?'
    ]
  },

  'S035': {
    learningPoints: [
      '<strong>Full Page Scroll</strong> (섹션별 스크롤)',
      '<code>scroll-snap</code> 속성 사용',
      '각 섹션이 화면 전체를 차지',
      '부드러운 스크롤 스냅 효과'
    ],
    requirements: {
      html: [
        'Container <code>&lt;div class="scroll-container"&gt;</code>',
        '5개의 섹션, 각각 전체 화면 높이',
        '각 섹션에 다른 배경색과 콘텐츠'
      ],
      css: [
        '<strong>Container:</strong> <code>scroll-snap-type: y mandatory;</code>',
        '<strong>Container:</strong> <code>overflow-y: scroll; height: 100vh;</code>',
        '<strong>Section:</strong> <code>scroll-snap-align: start; height: 100vh;</code>',
        '<strong>각 섹션:</strong> Flexbox 중앙 정렬'
      ],
      details: [
        'Container: 스크롤바 숨김 (선택사항)',
        '각 섹션: 다른 배경색 (그라디언트 사용 가능)',
        '섹션 콘텐츠: 중앙 정렬, 제목 + 설명',
        'Scroll behavior: smooth'
      ]
    },
    styles: {
      colors: [
        { name: 'Section 1', value: '#4F46E5', desc: 'Primary' },
        { name: 'Section 2', value: '#10B981', desc: 'Secondary' },
        { name: 'Section 3', value: '#FF9800', desc: 'Accent' },
        { name: 'Section 4', value: '#EF4444', desc: 'Red' },
        { name: 'Section 5', value: '#8B5CF6', desc: 'Purple' }
      ],
      typography: [
        { element: 'Section 제목', style: '3rem, 굵게, 흰색' },
        { element: 'Section 설명', style: '1.25rem, 흰색 80%' }
      ],
      spacing: [
        { element: 'Section 높이', value: '100vh' },
        { element: 'Section 패딩', value: '48px' }
      ]
    },
    implementation: [
      {
        step: '1단계: Scroll Container',
        code: `.scroll-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}
/* 스크롤바 숨김 (선택사항) */
.scroll-container::-webkit-scrollbar {
  display: none;
}`
      },
      {
        step: '2단계: Section 스타일',
        code: `.section {
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  color: white;
  text-align: center;
}`
      },
      {
        step: '3단계: Section 배경색',
        code: `.section:nth-child(1) { background: #4F46E5; }
.section:nth-child(2) { background: #10B981; }
.section:nth-child(3) { background: #FF9800; }
.section:nth-child(4) { background: #EF4444; }
.section:nth-child(5) { background: #8B5CF6; }`
      }
    ],
    checklist: [
      'Container에 scroll-snap-type이 있나요?',
      'Container 높이가 100vh인가요?',
      '각 Section에 scroll-snap-align: start가 있나요?',
      '스크롤 시 섹션별로 스냅되나요?',
      '각 Section 높이가 100vh인가요?',
      '콘텐츠가 섹션 중앙에 정렬되어 있나요?'
    ]
  },

  // ========== S036-S050 (중급 - 컴포넌트 & 폼) ==========

  'S036': {
    learningPoints: [
      '<strong>탭 UI</strong> 구조와 상태 관리',
      'JavaScript로 <strong>탭 전환</strong> 구현',
      '<strong>active 클래스</strong>로 선택된 탭 표시',
      '탭 콘텐츠의 <strong>show/hide</strong> 로직'
    ],
    requirements: {
      html: [
        '<code>&lt;div class="tabs"&gt;</code> 컨테이너',
        '탭 버튼 리스트 <code>&lt;div class="tab-buttons"&gt;</code>',
        '3개의 탭 버튼 (Tab 1, Tab 2, Tab 3)',
        '탭 콘텐츠 컨테이너 <code>&lt;div class="tab-contents"&gt;</code>',
        '각 탭에 대응하는 콘텐츠 패널 3개'
      ],
      css: [
        '<strong>탭 버튼:</strong> 인라인 배치, 하단 보더로 구분',
        '<strong>Active 탭:</strong> Primary 색상 하단 보더 (3px)',
        '<strong>콘텐츠:</strong> 기본적으로 숨김 (display: none)',
        '<strong>Active 콘텐츠:</strong> display: block',
        '탭 전환 시 부드러운 페이드 효과'
      ],
      details: [
        'JavaScript: 각 탭 버튼에 click 이벤트 리스너',
        '클릭 시 모든 active 클래스 제거 후 선택된 탭에 추가',
        '해당 index의 콘텐츠만 표시',
        '탭 버튼 hover 시 배경색 변경'
      ]
    },
    styles: {
      colors: [
        { name: '탭 버튼 배경', value: '#F3F4F6', desc: 'Light gray' },
        { name: 'Active 탭 보더', value: '#4F46E5', desc: 'Primary' },
        { name: '콘텐츠 배경', value: '#FFFFFF', desc: 'White' },
        { name: 'Hover 배경', value: '#E5E7EB', desc: 'Light gray darker' }
      ],
      typography: [
        { element: '탭 버튼 텍스트', style: '1rem, 중간 굵기' },
        { element: '콘텐츠 제목', style: '1.5rem, 굵게' },
        { element: '콘텐츠 본문', style: '1rem, line-height 1.6' }
      ],
      spacing: [
        { element: '탭 버튼 패딩', value: '12px 24px' },
        { element: '탭 버튼 간격', value: '8px' },
        { element: '콘텐츠 패딩', value: '32px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="tabs">
  <div class="tab-buttons">
    <button class="tab-btn active" data-tab="0">Tab 1</button>
    <button class="tab-btn" data-tab="1">Tab 2</button>
    <button class="tab-btn" data-tab="2">Tab 3</button>
  </div>
  <div class="tab-contents">
    <div class="tab-panel active">콘텐츠 1</div>
    <div class="tab-panel">콘텐츠 2</div>
    <div class="tab-panel">콘텐츠 3</div>
  </div>
</div>`
      },
      {
        step: '2단계: 탭 버튼 스타일',
        code: `.tab-btn {
  padding: 12px 24px;
  background: #F3F4F6;
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  transition: 0.3s;
}
.tab-btn.active {
  border-bottom-color: #4F46E5;
}`
      },
      {
        step: '3단계: JavaScript 탭 전환',
        code: `const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // 모든 active 제거
    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));

    // 선택된 탭 활성화
    btn.classList.add('active');
    tabPanels[index].classList.add('active');
  });
});`
      }
    ],
    checklist: [
      '탭 버튼 클릭 시 콘텐츠가 전환되나요?',
      'Active 탭에 하단 보더가 표시되나요?',
      '한 번에 하나의 콘텐츠만 표시되나요?',
      '탭 버튼 hover 효과가 있나요?',
      'JavaScript로 동적으로 탭이 전환되나요?',
      '첫 번째 탭이 기본적으로 활성화되어 있나요?'
    ]
  },

  'S037': {
    learningPoints: [
      '<strong>아코디언 UI</strong> 구조',
      'JavaScript로 <strong>접기/펼치기</strong> 토글',
      '<strong>max-height 애니메이션</strong>으로 부드러운 전환',
      '여러 아코디언 항목 관리'
    ],
    requirements: {
      html: [
        '<code>&lt;div class="accordion"&gt;</code> 컨테이너',
        '3-4개의 아코디언 아이템',
        '각 아이템: 헤더(버튼) + 콘텐츠 영역',
        '헤더에 아이콘 (▼ 또는 +) 포함'
      ],
      css: [
        '<strong>콘텐츠:</strong> 기본 max-height: 0, overflow: hidden',
        '<strong>Open 상태:</strong> max-height: 500px (또는 auto)',
        '<strong>Transition:</strong> max-height 0.3s ease',
        '<strong>헤더:</strong> 클릭 가능한 버튼 스타일'
      ],
      details: [
        'JavaScript: 헤더 클릭 시 open 클래스 토글',
        '아이콘 회전 애니메이션 (▼ → ▲)',
        '다른 아코디언 닫기 옵션 (single-open)',
        'ARIA 속성으로 접근성 향상'
      ]
    },
    styles: {
      colors: [
        { name: '헤더 배경', value: '#F3F4F6', desc: 'Light' },
        { name: '헤더 hover', value: '#E5E7EB', desc: 'Light gray darker' },
        { name: '콘텐츠 배경', value: '#FFFFFF', desc: 'White' },
        { name: 'Border', value: '#D1D5DB', desc: 'Gray' }
      ],
      typography: [
        { element: '헤더 텍스트', style: '1rem, 중간 굵기' },
        { element: '콘텐츠 텍스트', style: '0.9375rem, line-height 1.6' }
      ],
      spacing: [
        { element: '헤더 패딩', value: '16px 20px' },
        { element: '콘텐츠 패딩', value: '16px 20px' },
        { element: '아이템 간격', value: '8px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">
      <span>섹션 1</span>
      <span class="icon">▼</span>
    </button>
    <div class="accordion-content">
      <p>콘텐츠 내용...</p>
    </div>
  </div>
  <!-- 추가 아이템들 -->
</div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.accordion-item.open .accordion-content {
  max-height: 500px;
}
.accordion-item.open .icon {
  transform: rotate(180deg);
}`
      },
      {
        step: '3단계: JavaScript 토글',
        code: `const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    item.classList.toggle('open');
  });
});`
      }
    ],
    checklist: [
      '헤더 클릭 시 콘텐츠가 펼쳐지나요?',
      '다시 클릭하면 접히나요?',
      '아이콘이 회전하나요?',
      '부드러운 애니메이션이 있나요?',
      '여러 아코디언을 동시에 열 수 있나요?',
      'Border와 간격이 적절히 설정되었나요?'
    ]
  },

  'S038': {
    learningPoints: [
      '<strong>드롭다운 메뉴</strong> 구조',
      '<strong>hover 또는 click</strong>으로 서브메뉴 표시',
      '<strong>position: absolute</strong>로 메뉴 배치',
      '키보드 접근성 고려'
    ],
    requirements: {
      html: [
        '<code>&lt;nav&gt;</code> 메인 네비게이션',
        '메뉴 아이템 중 일부에 서브메뉴 포함',
        '서브메뉴: <code>&lt;ul class="dropdown"&gt;</code>',
        '3-4개의 메인 메뉴, 2개는 드롭다운'
      ],
      css: [
        '<strong>서브메뉴:</strong> position: absolute, 기본 숨김',
        '<strong>Hover 시:</strong> opacity: 1, visibility: visible',
        '<strong>메인 메뉴:</strong> position: relative',
        '<strong>애니메이션:</strong> opacity, transform translateY'
      ],
      details: [
        '메인 메뉴 hover 시 서브메뉴 나타남',
        '서브메뉴 위치: 메인 메뉴 하단 정렬',
        '서브메뉴 배경: 흰색, 그림자 효과',
        '서브메뉴 아이템 hover 시 배경색 변경'
      ]
    },
    styles: {
      colors: [
        { name: '메인 메뉴 배경', value: '#4F46E5', desc: 'Primary' },
        { name: '서브메뉴 배경', value: '#FFFFFF', desc: 'White' },
        { name: '서브메뉴 hover', value: '#F3F4F6', desc: 'Light gray' },
        { name: '텍스트', value: '#222222', desc: 'Dark' }
      ],
      typography: [
        { element: '메인 메뉴', style: '1rem, 흰색' },
        { element: '서브메뉴', style: '0.9375rem, 검정' }
      ],
      spacing: [
        { element: '메인 메뉴 패딩', value: '16px 20px' },
        { element: '서브메뉴 패딩', value: '12px 20px' },
        { element: '서브메뉴 최소 너비', value: '200px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<nav class="nav">
  <ul class="menu">
    <li><a href="#">Home</a></li>
    <li class="has-dropdown">
      <a href="#">Products</a>
      <ul class="dropdown">
        <li><a href="#">Product 1</a></li>
        <li><a href="#">Product 2</a></li>
        <li><a href="#">Product 3</a></li>
      </ul>
    </li>
  </ul>
</nav>`
      },
      {
        step: '2단계: 드롭다운 스타일',
        code: `.has-dropdown {
  position: relative;
}
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: 0.3s;
}
.has-dropdown:hover .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}`
      }
    ],
    checklist: [
      'Hover 시 서브메뉴가 나타나나요?',
      '서브메뉴가 메인 메뉴 아래 정렬되었나요?',
      '부드러운 나타남/사라짐 효과가 있나요?',
      '서브메뉴 아이템에 hover 효과가 있나요?',
      '서브메뉴에 그림자가 적용되었나요?',
      '메뉴에서 마우스를 떼면 사라지나요?'
    ]
  },

  'S039': {
    learningPoints: [
      '<strong>모달 팝업</strong> 구조',
      '<strong>오버레이</strong>로 배경 어둡게',
      'JavaScript로 모달 <strong>열기/닫기</strong>',
      '<strong>ESC 키</strong>와 오버레이 클릭으로 닫기'
    ],
    requirements: {
      html: [
        '모달 트리거 버튼',
        '<code>&lt;div class="modal-overlay"&gt;</code> 배경',
        '<code>&lt;div class="modal"&gt;</code> 모달 컨테이너',
        '모달 내부: 헤더, 본문, 푸터 (닫기 버튼)'
      ],
      css: [
        '<strong>오버레이:</strong> position: fixed, 전체 화면, rgba 배경',
        '<strong>모달:</strong> position: fixed, 중앙 정렬',
        '<strong>기본 상태:</strong> display: none',
        '<strong>Open 상태:</strong> display: flex'
      ],
      details: [
        'JavaScript: 버튼 클릭 시 모달 표시',
        '오버레이 클릭 또는 닫기 버튼으로 닫기',
        'ESC 키로 닫기',
        '모달 열릴 때 body 스크롤 방지'
      ]
    },
    styles: {
      colors: [
        { name: '오버레이', value: 'rgba(0,0,0,0.5)', desc: 'Semi-transparent black' },
        { name: '모달 배경', value: '#FFFFFF', desc: 'White' },
        { name: 'Primary 버튼', value: '#4F46E5', desc: 'Primary' },
        { name: 'Close 버튼', value: '#EF4444', desc: 'Red' }
      ],
      typography: [
        { element: '모달 제목', style: '1.5rem, 굵게' },
        { element: '모달 본문', style: '1rem' }
      ],
      spacing: [
        { element: '모달 너비', value: '최대 500px' },
        { element: '모달 패딩', value: '32px' },
        { element: 'Border radius', value: '12px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<button id="openModal">모달 열기</button>

<div class="modal-overlay" id="modalOverlay">
  <div class="modal">
    <div class="modal-header">
      <h2>모달 제목</h2>
      <button class="close-btn">&times;</button>
    </div>
    <div class="modal-body">
      <p>모달 콘텐츠...</p>
    </div>
    <div class="modal-footer">
      <button class="btn-primary">확인</button>
    </div>
  </div>
</div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.modal-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-overlay.open {
  display: flex;
}
.modal {
  background: white;
  padding: 32px;
  border-radius: 12px;
  max-width: 500px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}`
      },
      {
        step: '3단계: JavaScript',
        code: `const openBtn = document.getElementById('openModal');
const overlay = document.getElementById('modalOverlay');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', () => {
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('open');
  }
});`
      }
    ],
    checklist: [
      '버튼 클릭 시 모달이 나타나나요?',
      '오버레이가 배경을 어둡게 만드나요?',
      '모달이 화면 중앙에 위치하나요?',
      '닫기 버튼으로 모달이 닫히나요?',
      '오버레이 클릭으로 모달이 닫히나요?',
      '모달 열릴 때 body 스크롤이 방지되나요?'
    ]
  },

  'S040': {
    learningPoints: [
      '<strong>캐러셀 슬라이더</strong> 구조',
      '<strong>transform translateX</strong>로 슬라이드 이동',
      'JavaScript로 <strong>이전/다음</strong> 버튼 제어',
      '<strong>인디케이터 dots</strong> 구현'
    ],
    requirements: {
      html: [
        '<code>&lt;div class="carousel"&gt;</code> 컨테이너',
        '<code>&lt;div class="carousel-track"&gt;</code> 슬라이드 트랙',
        '3-5개의 슬라이드 아이템 (이미지 + 캡션)',
        '이전/다음 버튼',
        '하단 인디케이터 dots'
      ],
      css: [
        '<strong>Track:</strong> display: flex, transition: transform',
        '<strong>슬라이드:</strong> flex: 0 0 100% (전체 너비)',
        '<strong>버튼:</strong> position: absolute, 좌우 배치',
        '<strong>Dots:</strong> 하단 중앙 정렬'
      ],
      details: [
        'JavaScript: currentIndex 변수로 현재 슬라이드 추적',
        '버튼 클릭 시 transform: translateX 변경',
        'Dots 클릭으로 특정 슬라이드 이동',
        'Active dot 표시'
      ]
    },
    styles: {
      colors: [
        { name: '슬라이드 배경', value: '#F3F4F6', desc: 'Light' },
        { name: '버튼 배경', value: 'rgba(0,0,0,0.5)', desc: 'Semi-transparent' },
        { name: 'Active dot', value: '#4F46E5', desc: 'Primary' },
        { name: 'Inactive dot', value: '#D1D5DB', desc: 'Gray' }
      ],
      typography: [
        { element: '캡션', style: '1.25rem, 중앙 정렬' }
      ],
      spacing: [
        { element: '슬라이드 높이', value: '400px' },
        { element: '버튼 크기', value: '40px × 40px' },
        { element: 'Dot 크기', value: '12px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="carousel">
  <div class="carousel-track">
    <div class="slide">슬라이드 1</div>
    <div class="slide">슬라이드 2</div>
    <div class="slide">슬라이드 3</div>
  </div>
  <button class="carousel-btn prev">&lt;</button>
  <button class="carousel-btn next">&gt;</button>
  <div class="carousel-dots">
    <span class="dot active"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</div>`
      },
      {
        step: '2단계: CSS 레이아웃',
        code: `.carousel {
  position: relative;
  overflow: hidden;
}
.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}
.slide {
  flex: 0 0 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}`
      },
      {
        step: '3단계: JavaScript 슬라이드',
        code: `let currentIndex = 0;
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function updateCarousel() {
  const offset = -currentIndex * 100;
  track.style.transform = \`translateX(\${offset}%)\`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});`
      }
    ],
    checklist: [
      '이전/다음 버튼으로 슬라이드가 이동하나요?',
      '부드러운 전환 애니메이션이 있나요?',
      'Dots가 현재 슬라이드를 표시하나요?',
      '첫 슬라이드에서 이전 버튼 클릭 시 마지막으로 가나요?',
      '마지막 슬라이드에서 다음 버튼 클릭 시 첫 번째로 가나요?',
      '버튼이 슬라이드 위에 적절히 배치되었나요?'
    ]
  },

  'S041': {
    learningPoints: [
      '<strong>토스트 알림</strong> UI',
      'JavaScript로 동적 알림 생성',
      '<strong>자동 사라짐</strong> (setTimeout)',
      '<strong>우측 하단</strong> position: fixed 배치'
    ],
    requirements: {
      html: [
        '토스트 트리거 버튼',
        '<code>&lt;div class="toast-container"&gt;</code> (우측 하단)',
        'JavaScript로 동적 토스트 생성'
      ],
      css: [
        '<strong>Container:</strong> position: fixed, right/bottom',
        '<strong>Toast:</strong> 배경, 패딩, 그림자, border-radius',
        '<strong>애니메이션:</strong> slideIn (from right)',
        '<strong>타입별 색상:</strong> success (green), error (red), info (blue)'
      ],
      details: [
        'JavaScript: 버튼 클릭 시 토스트 생성',
        '3초 후 자동으로 사라짐',
        '닫기 버튼으로 수동 닫기',
        '여러 토스트 쌓기 가능'
      ]
    },
    styles: {
      colors: [
        { name: 'Success', value: '#10B981', desc: 'Green' },
        { name: 'Error', value: '#EF4444', desc: 'Red' },
        { name: 'Info', value: '#3B82F6', desc: 'Blue' },
        { name: '텍스트', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '토스트 텍스트', style: '1rem, 흰색' }
      ],
      spacing: [
        { element: 'Container 위치', value: 'right: 20px, bottom: 20px' },
        { element: '토스트 패딩', value: '16px 20px' },
        { element: '토스트 간격', value: '12px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<button onclick="showToast('success', '성공!')">Success Toast</button>
<button onclick="showToast('error', '오류!')">Error Toast</button>

<div class="toast-container" id="toastContainer"></div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.toast-container {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 9999;
}
.toast {
  padding: 16px 20px;
  margin-bottom: 12px;
  border-radius: 8px;
  color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  animation: slideIn 0.3s ease;
}
.toast.success { background: #10B981; }
.toast.error { background: #EF4444; }
@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}`
      },
      {
        step: '3단계: JavaScript',
        code: `function showToast(type, message) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = \`toast \${type}\`;
  toast.textContent = message;

  container.appendChild(toast);

  // 3초 후 자동 제거
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}`
      }
    ],
    checklist: [
      '버튼 클릭 시 토스트가 나타나나요?',
      '토스트가 우측 하단에 위치하나요?',
      '3초 후 자동으로 사라지나요?',
      'slideIn 애니메이션이 작동하나요?',
      '여러 토스트를 동시에 표시할 수 있나요?',
      'Success/Error 타입별로 색상이 다른가요?'
    ]
  },

  'S042': {
    learningPoints: [
      '<strong>페이지네이션</strong> UI 구조',
      'JavaScript로 <strong>페이지 전환</strong>',
      '<strong>active 페이지</strong> 표시',
      '이전/다음 버튼 비활성화 로직'
    ],
    requirements: {
      html: [
        '<code>&lt;div class="pagination"&gt;</code>',
        '이전 버튼',
        '페이지 번호 버튼들 (1, 2, 3, ...)',
        '다음 버튼',
        '총 페이지 수 표시'
      ],
      css: [
        '<strong>버튼:</strong> 동일한 크기, 원형 또는 둥근 사각형',
        '<strong>Active:</strong> Primary 배경, 흰색 텍스트',
        '<strong>Disabled:</strong> 회색, cursor: not-allowed',
        '<strong>Hover:</strong> 배경색 변경'
      ],
      details: [
        'JavaScript: 현재 페이지 번호 추적',
        '페이지 번호 클릭 시 active 변경',
        '첫 페이지에서 이전 버튼 비활성화',
        '마지막 페이지에서 다음 버튼 비활성화'
      ]
    },
    styles: {
      colors: [
        { name: 'Active 페이지', value: '#4F46E5', desc: 'Primary' },
        { name: '일반 버튼', value: '#F3F4F6', desc: 'Light' },
        { name: 'Hover', value: '#E5E7EB', desc: 'Light gray darker' },
        { name: 'Disabled', value: '#D1D5DB', desc: 'Gray' }
      ],
      typography: [
        { element: '페이지 번호', style: '1rem, 중간 굵기' }
      ],
      spacing: [
        { element: '버튼 크기', value: '40px × 40px' },
        { element: '버튼 간격', value: '4px' },
        { element: 'Border radius', value: '8px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="pagination">
  <button class="page-btn" id="prevBtn">&lt;</button>
  <button class="page-btn active">1</button>
  <button class="page-btn">2</button>
  <button class="page-btn">3</button>
  <button class="page-btn">4</button>
  <button class="page-btn">5</button>
  <button class="page-btn" id="nextBtn">&gt;</button>
</div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.pagination {
  display: flex;
  gap: 4px;
  align-items: center;
}
.page-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: #F3F4F6;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}
.page-btn.active {
  background: #4F46E5;
  color: white;
}
.page-btn:disabled {
  background: #D1D5DB;
  cursor: not-allowed;
}`
      },
      {
        step: '3단계: JavaScript',
        code: `let currentPage = 1;
const totalPages = 5;
const pageBtns = document.querySelectorAll('.page-btn:not(#prevBtn):not(#nextBtn)');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updatePagination() {
  pageBtns.forEach((btn, index) => {
    btn.classList.toggle('active', index + 1 === currentPage);
  });
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

pageBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    currentPage = index + 1;
    updatePagination();
  });
});`
      }
    ],
    checklist: [
      '페이지 번호 클릭 시 active가 변경되나요?',
      '첫 페이지에서 이전 버튼이 비활성화되나요?',
      '마지막 페이지에서 다음 버튼이 비활성화되나요?',
      '버튼 hover 효과가 있나요?',
      '버튼 크기가 일정하나요?',
      'Active 페이지가 명확히 표시되나요?'
    ]
  },

  'S043': {
    learningPoints: [
      '<strong>3D 카드 플립</strong> 효과',
      '<strong>transform rotateY</strong> 사용',
      '<strong>backface-visibility</strong>로 뒷면 숨김',
      'Hover 시 카드 뒤집기'
    ],
    requirements: {
      html: [
        '<code>&lt;div class="card-flip"&gt;</code> 컨테이너',
        '<code>&lt;div class="card-inner"&gt;</code> 회전 요소',
        '<code>&lt;div class="card-front"&gt;</code> 앞면',
        '<code>&lt;div class="card-back"&gt;</code> 뒷면'
      ],
      css: [
        '<strong>Inner:</strong> transform-style: preserve-3d',
        '<strong>Front/Back:</strong> position: absolute, backface-visibility: hidden',
        '<strong>Back:</strong> transform: rotateY(180deg)',
        '<strong>Hover:</strong> Inner transform: rotateY(180deg)'
      ],
      details: [
        'Transition: transform 0.6s ease',
        '앞면: 이미지 + 제목',
        '뒷면: 설명 텍스트',
        'Perspective 효과로 3D 깊이 표현'
      ]
    },
    styles: {
      colors: [
        { name: '앞면 배경', value: '#4F46E5', desc: 'Primary' },
        { name: '뒷면 배경', value: '#10B981', desc: 'Secondary' },
        { name: '텍스트', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '앞면 제목', style: '1.5rem, 굵게' },
        { element: '뒷면 설명', style: '1rem' }
      ],
      spacing: [
        { element: '카드 크기', value: '300px × 400px' },
        { element: '카드 패딩', value: '32px' },
        { element: 'Border radius', value: '12px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="card-flip">
  <div class="card-inner">
    <div class="card-front">
      <h3>앞면</h3>
      <p>Hover me!</p>
    </div>
    <div class="card-back">
      <h3>뒷면</h3>
      <p>뒷면 내용입니다.</p>
    </div>
  </div>
</div>`
      },
      {
        step: '2단계: CSS 3D Transform',
        code: `.card-flip {
  perspective: 1000px;
  width: 300px;
  height: 400px;
}
.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}
.card-flip:hover .card-inner {
  transform: rotateY(180deg);
}
.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  padding: 32px;
}
.card-front {
  background: #4F46E5;
}
.card-back {
  background: #10B981;
  transform: rotateY(180deg);
}`
      }
    ],
    checklist: [
      'Hover 시 카드가 뒤집히나요?',
      '뒤집힐 때 뒷면이 보이나요?',
      '부드러운 3D 회전 애니메이션이 있나요?',
      '앞면과 뒷면이 겹쳐 보이지 않나요?',
      'Perspective 효과가 적용되었나요?',
      '카드 크기가 고정되어 있나요?'
    ]
  },

  'S044': {
    learningPoints: [
      '<strong>멀티 스텝 인디케이터</strong> UI',
      '단계별 <strong>진행 상태</strong> 표시',
      '<strong>완료/현재/대기</strong> 상태 구분',
      'CSS로 단계 연결선 표현'
    ],
    requirements: {
      html: [
        '<code>&lt;div class="stepper"&gt;</code>',
        '3-4개의 스텝 아이템',
        '각 스텝: 번호 + 라벨',
        '스텝 사이 연결선'
      ],
      css: [
        '<strong>스텝:</strong> Flexbox로 가로 배치',
        '<strong>번호:</strong> 원형, 중앙 정렬',
        '<strong>완료:</strong> Primary 배경, 체크 아이콘',
        '<strong>현재:</strong> Primary 보더, 흰색 배경',
        '<strong>대기:</strong> 회색'
      ],
      details: [
        '연결선: 가로 border 또는 pseudo-element',
        '완료된 스텝은 Primary 색상',
        '현재 스텝은 강조 표시',
        'JavaScript로 단계 전환'
      ]
    },
    styles: {
      colors: [
        { name: '완료 스텝', value: '#4F46E5', desc: 'Primary' },
        { name: '현재 스텝 보더', value: '#4F46E5', desc: 'Primary' },
        { name: '대기 스텝', value: '#D1D5DB', desc: 'Gray' },
        { name: '연결선', value: '#E5E7EB', desc: 'Light gray' }
      ],
      typography: [
        { element: '스텝 번호', style: '1.25rem, 굵게' },
        { element: '스텝 라벨', style: '0.875rem' }
      ],
      spacing: [
        { element: '스텝 번호 크기', value: '48px × 48px' },
        { element: '스텝 간격', value: '24px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="stepper">
  <div class="step completed">
    <div class="step-number">✓</div>
    <div class="step-label">Step 1</div>
  </div>
  <div class="step-line"></div>
  <div class="step active">
    <div class="step-number">2</div>
    <div class="step-label">Step 2</div>
  </div>
  <div class="step-line"></div>
  <div class="step">
    <div class="step-number">3</div>
    <div class="step-label">Step 3</div>
  </div>
</div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.stepper {
  display: flex;
  align-items: center;
  gap: 24px;
}
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.step-number {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 2px solid #D1D5DB;
  background: white;
}
.step.completed .step-number {
  background: #4F46E5;
  color: white;
  border-color: #4F46E5;
}
.step.active .step-number {
  border-color: #4F46E5;
  color: #4F46E5;
}
.step-line {
  flex: 1;
  height: 2px;
  background: #E5E7EB;
}`
      }
    ],
    checklist: [
      '스텝이 가로로 배치되었나요?',
      '완료된 스텝이 체크 마크로 표시되나요?',
      '현재 스텝이 명확히 강조되나요?',
      '연결선이 스텝 사이에 있나요?',
      '스텝 번호가 원형으로 표시되나요?',
      '각 스텝 상태가 명확히 구분되나요?'
    ]
  },

  'S045': {
    learningPoints: [
      '<strong>타임라인 UI</strong> 구조',
      '<strong>수직 연결선</strong>으로 시간 흐름 표현',
      '<strong>좌우 교차 배치</strong> (지그재그)',
      'CSS <strong>:nth-child</strong>로 교차 레이아웃'
    ],
    requirements: {
      html: [
        '<code>&lt;div class="timeline"&gt;</code>',
        '4-5개의 타임라인 아이템',
        '각 아이템: 날짜 + 제목 + 설명',
        '중앙 점(dot) 표시'
      ],
      css: [
        '<strong>Timeline:</strong> position: relative, 중앙 세로선',
        '<strong>Item:</strong> 좌우 교차 배치',
        '<strong>Dot:</strong> position: absolute, 중앙 정렬',
        '<strong>:nth-child(odd):</strong> 왼쪽, <strong>even:</strong> 오른쪽'
      ],
      details: [
        '중앙 세로선: border-left 또는 pseudo-element',
        'Dot: 원형, Primary 색상',
        '카드 스타일 콘텐츠 박스',
        'Hover 시 강조 효과'
      ]
    },
    styles: {
      colors: [
        { name: '세로선', value: '#E5E7EB', desc: 'Light gray' },
        { name: 'Dot', value: '#4F46E5', desc: 'Primary' },
        { name: '카드 배경', value: '#FFFFFF', desc: 'White' },
        { name: '날짜 텍스트', value: '#6B7280', desc: 'Gray' }
      ],
      typography: [
        { element: '제목', style: '1.25rem, 굵게' },
        { element: '날짜', style: '0.875rem, 회색' },
        { element: '설명', style: '1rem' }
      ],
      spacing: [
        { element: 'Item 간격', value: '48px' },
        { element: '카드 패딩', value: '20px' },
        { element: 'Dot 크기', value: '16px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-content">
      <span class="date">2024.01</span>
      <h3>이벤트 1</h3>
      <p>설명 내용...</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-content">
      <span class="date">2024.02</span>
      <h3>이벤트 2</h3>
      <p>설명 내용...</p>
    </div>
  </div>
</div>`
      },
      {
        step: '2단계: CSS 레이아웃',
        code: `.timeline {
  position: relative;
  padding: 40px 0;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #E5E7EB;
}
.timeline-item {
  position: relative;
  margin-bottom: 48px;
}
.timeline-item::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #4F46E5;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #4F46E5;
}
.timeline-item:nth-child(odd) .timeline-content {
  margin-left: auto;
  margin-right: calc(50% + 30px);
}
.timeline-item:nth-child(even) .timeline-content {
  margin-left: calc(50% + 30px);
}`
      }
    ],
    checklist: [
      '중앙에 세로선이 그려졌나요?',
      '타임라인 아이템이 좌우 교차 배치되었나요?',
      '각 아이템에 Dot가 표시되나요?',
      'Dot가 세로선 중앙에 위치하나요?',
      '카드에 그림자 효과가 있나요?',
      '날짜, 제목, 설명이 명확히 구분되나요?'
    ]
  },

  'S046': {
    learningPoints: [
      '<strong>회원가입 폼</strong> 구조',
      '다양한 <strong>input 타입</strong> 사용',
      '<strong>Form validation</strong> (HTML5)',
      '약관 동의 체크박스'
    ],
    requirements: {
      html: [
        '<code>&lt;form&gt;</code> 태그',
        '이름, 이메일, 비밀번호, 비밀번호 확인',
        '성별 선택 (라디오)',
        '약관 동의 (체크박스)',
        '제출 버튼'
      ],
      css: [
        '<strong>폼 컨테이너:</strong> 최대 너비 500px, 중앙 정렬',
        '<strong>Input:</strong> 전체 너비, 패딩, border',
        '<strong>Label:</strong> 위쪽 정렬, 폰트 굵게',
        '<strong>버튼:</strong> 전체 너비, Primary 색상'
      ],
      details: [
        'Input에 required, pattern 속성',
        'Email type으로 이메일 검증',
        '비밀번호: 최소 8자 이상',
        'Placeholder 텍스트 제공'
      ]
    },
    styles: {
      colors: [
        { name: 'Input border', value: '#D1D5DB', desc: 'Gray' },
        { name: 'Focus border', value: '#4F46E5', desc: 'Primary' },
        { name: '제출 버튼', value: '#4F46E5', desc: 'Primary' },
        { name: 'Label 텍스트', value: '#374151', desc: 'Dark gray' }
      ],
      typography: [
        { element: 'Label', style: '0.875rem, 굵게' },
        { element: 'Input', style: '1rem' },
        { element: '버튼', style: '1rem, 굵게' }
      ],
      spacing: [
        { element: 'Input 패딩', value: '12px' },
        { element: 'Field 간격', value: '20px' },
        { element: '버튼 패딩', value: '14px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<form class="signup-form">
  <div class="form-group">
    <label for="name">이름</label>
    <input type="text" id="name" required placeholder="홍길동">
  </div>
  <div class="form-group">
    <label for="email">이메일</label>
    <input type="email" id="email" required placeholder="example@email.com">
  </div>
  <div class="form-group">
    <label for="password">비밀번호</label>
    <input type="password" id="password" minlength="8" required>
  </div>
  <div class="form-group">
    <label for="confirm">비밀번호 확인</label>
    <input type="password" id="confirm" minlength="8" required>
  </div>
  <div class="form-group">
    <label>성별</label>
    <label><input type="radio" name="gender" value="male"> 남성</label>
    <label><input type="radio" name="gender" value="female"> 여성</label>
  </div>
  <div class="form-group">
    <label><input type="checkbox" required> 약관에 동의합니다</label>
  </div>
  <button type="submit">가입하기</button>
</form>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.signup-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 32px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 0.875rem;
  color: #374151;
}
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  font-size: 1rem;
}
input:focus {
  outline: none;
  border-color: #4F46E5;
}
button {
  width: 100%;
  padding: 14px;
  background: #4F46E5;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}`
      }
    ],
    checklist: [
      '모든 필드에 label이 연결되었나요?',
      'Email 필드가 이메일 형식만 받나요?',
      '비밀번호가 최소 8자 이상인가요?',
      '약관 동의가 required인가요?',
      'Focus 시 input 테두리 색이 변하나요?',
      '제출 버튼이 전체 너비를 차지하나요?'
    ]
  },

  'S047': {
    learningPoints: [
      '<strong>파일 업로드</strong> UI',
      '<strong>Drag & Drop</strong> 기능',
      '<strong>FileReader API</strong>로 미리보기',
      '드래그 영역 시각적 피드백'
    ],
    requirements: {
      html: [
        '<code>&lt;div class="upload-area"&gt;</code> 드롭 영역',
        '<code>&lt;input type="file"&gt;</code> (숨김)',
        '안내 텍스트와 아이콘',
        '업로드된 파일 목록 표시 영역'
      ],
      css: [
        '<strong>드롭 영역:</strong> 점선 border, 중앙 정렬',
        '<strong>Drag over:</strong> 배경색 변경, border 강조',
        '<strong>파일 목록:</strong> 파일명, 크기, 삭제 버튼',
        '미리보기 이미지 (선택사항)'
      ],
      details: [
        'JavaScript: dragover, drop 이벤트 리스너',
        'FileReader로 이미지 미리보기',
        '파일 크기, 확장자 검증',
        'Multiple 파일 업로드 지원'
      ]
    },
    styles: {
      colors: [
        { name: '드롭 영역 border', value: '#D1D5DB', desc: 'Gray dashed' },
        { name: 'Drag over 배경', value: '#E0E7FF', desc: 'Light primary' },
        { name: '파일 항목 배경', value: '#F3F4F6', desc: 'Light' },
        { name: '삭제 버튼', value: '#EF4444', desc: 'Red' }
      ],
      typography: [
        { element: '안내 텍스트', style: '1rem, 회색' },
        { element: '파일명', style: '0.875rem' }
      ],
      spacing: [
        { element: '드롭 영역 패딩', value: '48px' },
        { element: '파일 항목 패딩', value: '12px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="upload-container">
  <div class="upload-area" id="uploadArea">
    <input type="file" id="fileInput" multiple hidden>
    <p>파일을 드래그하거나 클릭하여 업로드</p>
    <button onclick="document.getElementById('fileInput').click()">파일 선택</button>
  </div>
  <div class="file-list" id="fileList"></div>
</div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.upload-area {
  border: 2px dashed #D1D5DB;
  border-radius: 12px;
  padding: 48px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
}
.upload-area.drag-over {
  background: #E0E7FF;
  border-color: #4F46E5;
}
.file-list {
  margin-top: 20px;
}
.file-item {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: #F3F4F6;
  border-radius: 8px;
  margin-bottom: 8px;
}`
      },
      {
        step: '3단계: JavaScript Drag & Drop',
        code: `const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');

uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.classList.add('drag-over');
});

uploadArea.addEventListener('dragleave', () => {
  uploadArea.classList.remove('drag-over');
});

uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.classList.remove('drag-over');
  const files = e.dataTransfer.files;
  handleFiles(files);
});

uploadArea.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', (e) => {
  handleFiles(e.target.files);
});

function handleFiles(files) {
  // 파일 처리 로직
  console.log('Files uploaded:', files);
}`
      }
    ],
    checklist: [
      '파일을 드래그하면 영역 스타일이 변하나요?',
      '파일을 드롭하면 업로드되나요?',
      '클릭으로도 파일을 선택할 수 있나요?',
      '업로드된 파일 목록이 표시되나요?',
      'Multiple 파일 업로드가 가능한가요?',
      '드래그 영역이 점선 border로 표시되나요?'
    ]
  },

  'S048': {
    learningPoints: [
      '<strong>Range 슬라이더</strong> 커스터마이징',
      '<strong>input[type="range"]</strong> 스타일링',
      'JavaScript로 <strong>값 표시</strong>',
      '슬라이더 트랙과 thumb 디자인'
    ],
    requirements: {
      html: [
        '<code>&lt;input type="range"&gt;</code>',
        '현재 값 표시 레이블',
        '최소/최대 값 표시',
        '여러 슬라이더 (볼륨, 밝기 등)'
      ],
      css: [
        '<strong>트랙:</strong> 높이, 배경색, border-radius',
        '<strong>Thumb:</strong> 원형, 크기, 그림자',
        '<strong>브라우저별 선택자:</strong> -webkit-slider, -moz-range',
        '<strong>채워진 영역:</strong> Primary 색상'
      ],
      details: [
        'JavaScript: input 이벤트로 값 업데이트',
        'Thumb 위치에 따라 배경 그라디언트',
        'Step 속성으로 증가 단위 설정',
        'ARIA label로 접근성 향상'
      ]
    },
    styles: {
      colors: [
        { name: '트랙 배경', value: '#E5E7EB', desc: 'Light gray' },
        { name: '채워진 영역', value: '#4F46E5', desc: 'Primary' },
        { name: 'Thumb', value: '#FFFFFF', desc: 'White with shadow' },
        { name: '값 표시', value: '#4F46E5', desc: 'Primary' }
      ],
      typography: [
        { element: '값 표시', style: '1.25rem, 굵게' },
        { element: '레이블', style: '0.875rem' }
      ],
      spacing: [
        { element: '트랙 높이', value: '8px' },
        { element: 'Thumb 크기', value: '24px' },
        { element: '슬라이더 간격', value: '32px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="slider-group">
  <label for="volume">볼륨</label>
  <div class="slider-container">
    <span class="value" id="volumeValue">50</span>
    <input type="range" id="volume" min="0" max="100" value="50">
  </div>
</div>`
      },
      {
        step: '2단계: CSS 커스텀 슬라이더',
        code: `input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: #E5E7EB;
  outline: none;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  cursor: pointer;
}
input[type="range"]::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  cursor: pointer;
  border: none;
}`
      },
      {
        step: '3단계: JavaScript 값 업데이트',
        code: `const volumeSlider = document.getElementById('volume');
const volumeValue = document.getElementById('volumeValue');

volumeSlider.addEventListener('input', (e) => {
  const value = e.target.value;
  volumeValue.textContent = value;

  // 채워진 영역 표시 (선택사항)
  const percent = (value / e.target.max) * 100;
  e.target.style.background = \`linear-gradient(to right, #4F46E5 \${percent}%, #E5E7EB \${percent}%)\`;
});`
      }
    ],
    checklist: [
      '슬라이더를 움직이면 값이 업데이트되나요?',
      'Thumb가 커스텀 스타일로 표시되나요?',
      '트랙이 적절한 높이와 색상인가요?',
      '채워진 영역이 Primary 색상인가요?',
      '현재 값이 명확히 표시되나요?',
      '여러 슬라이더가 일관된 스타일인가요?'
    ]
  },

  'S049': {
    learningPoints: [
      '<strong>토글 스위치</strong> UI',
      '<strong>Checkbox</strong>를 시각적으로 변환',
      'CSS로 <strong>슬라이드 애니메이션</strong>',
      'On/Off 상태 표현'
    ],
    requirements: {
      html: [
        '<code>&lt;input type="checkbox"&gt;</code>',
        '<code>&lt;label&gt;</code>로 감싸기',
        '스위치 배경과 토글 원',
        '3-4개의 토글 스위치 예시'
      ],
      css: [
        '<strong>Checkbox:</strong> display: none (숨김)',
        '<strong>Label:</strong> 스위치 배경 (둥근 사각형)',
        '<strong>::before:</strong> 토글 원',
        '<strong>Checked:</strong> 배경 Primary, 원 이동'
      ],
      details: [
        'Transition으로 부드러운 전환',
        'Checked 시 배경색 변경',
        'Checked 시 원이 오른쪽으로 이동',
        'Cursor: pointer로 클릭 가능 표시'
      ]
    },
    styles: {
      colors: [
        { name: 'Off 배경', value: '#D1D5DB', desc: 'Gray' },
        { name: 'On 배경', value: '#4F46E5', desc: 'Primary' },
        { name: '토글 원', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '레이블 텍스트', style: '1rem' }
      ],
      spacing: [
        { element: '스위치 크기', value: '60px × 32px' },
        { element: '원 크기', value: '24px' },
        { element: '스위치 간격', value: '20px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="toggle-group">
  <label class="toggle">
    <input type="checkbox">
    <span class="toggle-switch"></span>
    <span class="toggle-label">알림 받기</span>
  </label>
</div>`
      },
      {
        step: '2단계: CSS 토글 스위치',
        code: `.toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.toggle input {
  display: none;
}
.toggle-switch {
  position: relative;
  width: 60px;
  height: 32px;
  background: #D1D5DB;
  border-radius: 16px;
  transition: 0.3s;
  margin-right: 12px;
}
.toggle-switch::before {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  top: 4px;
  left: 4px;
  transition: 0.3s;
}
.toggle input:checked + .toggle-switch {
  background: #4F46E5;
}
.toggle input:checked + .toggle-switch::before {
  left: 32px;
}`
      }
    ],
    checklist: [
      '클릭 시 토글이 전환되나요?',
      'On 상태에서 배경이 Primary 색상인가요?',
      '토글 원이 부드럽게 이동하나요?',
      'Off 상태에서 배경이 회색인가요?',
      'Label 텍스트가 적절히 배치되었나요?',
      '여러 토글 스위치가 일관된 스타일인가요?'
    ]
  },

  'S050': {
    learningPoints: [
      '<strong>별점 평가</strong> UI',
      'JavaScript로 <strong>별 선택</strong> 처리',
      '<strong>Hover 효과</strong>로 미리보기',
      '선택된 별까지 색상 채우기'
    ],
    requirements: {
      html: [
        '<code>&lt;div class="rating"&gt;</code>',
        '5개의 별 (★ 또는 SVG)',
        '현재 평점 표시 (숫자)',
        '클릭 가능한 별'
      ],
      css: [
        '<strong>별:</strong> 기본 회색, 선택 시 노란색/금색',
        '<strong>Hover:</strong> 해당 별까지 색상 변경',
        '<strong>크기:</strong> font-size 또는 width/height',
        '<strong>간격:</strong> 별 사이 적절한 간격'
      ],
      details: [
        'JavaScript: 별 클릭 시 rating 값 업데이트',
        'Hover 시 임시로 색상 표시',
        'MouseLeave 시 선택된 평점으로 복원',
        '평점 숫자 표시 (5점 만점)'
      ]
    },
    styles: {
      colors: [
        { name: '빈 별', value: '#D1D5DB', desc: 'Gray' },
        { name: '채워진 별', value: '#FCD34D', desc: 'Yellow/Gold' },
        { name: '평점 텍스트', value: '#374151', desc: 'Dark gray' }
      ],
      typography: [
        { element: '별', style: '2rem (32px)' },
        { element: '평점 숫자', style: '1.25rem, 굵게' }
      ],
      spacing: [
        { element: '별 간격', value: '4px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="rating-container">
  <div class="rating" id="rating">
    <span class="star" data-value="1">★</span>
    <span class="star" data-value="2">★</span>
    <span class="star" data-value="3">★</span>
    <span class="star" data-value="4">★</span>
    <span class="star" data-value="5">★</span>
  </div>
  <p class="rating-text">평점: <span id="ratingValue">0</span>/5</p>
</div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.rating {
  display: flex;
  gap: 4px;
}
.star {
  font-size: 2rem;
  color: #D1D5DB;
  cursor: pointer;
  transition: 0.2s;
}
.star.active {
  color: #FCD34D;
}
.star:hover {
  transform: scale(1.1);
}`
      },
      {
        step: '3단계: JavaScript 별점 선택',
        code: `const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('ratingValue');
let currentRating = 0;

stars.forEach((star, index) => {
  // 클릭 시 평점 설정
  star.addEventListener('click', () => {
    currentRating = index + 1;
    updateRating(currentRating);
    ratingValue.textContent = currentRating;
  });

  // Hover 시 미리보기
  star.addEventListener('mouseenter', () => {
    updateRating(index + 1);
  });
});

// MouseLeave 시 원래 평점으로 복원
document.querySelector('.rating').addEventListener('mouseleave', () => {
  updateRating(currentRating);
});

function updateRating(rating) {
  stars.forEach((star, index) => {
    star.classList.toggle('active', index < rating);
  });
}`
      }
    ],
    checklist: [
      '별 클릭 시 평점이 설정되나요?',
      '선택된 별까지 색상이 채워지나요?',
      'Hover 시 미리보기가 표시되나요?',
      'MouseLeave 시 원래 평점으로 돌아오나요?',
      '평점 숫자가 업데이트되나요?',
      '별이 적절한 크기와 간격으로 배치되었나요?'
    ]
  },

  // ========== S051-S065 (중급 - 폼 & 비주얼) ==========

  'S051': {
    learningPoints: [
      '<strong>다단계 폼</strong> 구조',
      'JavaScript로 <strong>단계 전환</strong>',
      '<strong>진행 상태 표시</strong> (progress bar)',
      '이전/다음 단계 이동'
    ],
    requirements: {
      html: [
        '3-4개의 폼 단계 (step)',
        '각 단계별 입력 필드',
        '진행 바 (progress indicator)',
        '이전/다음 버튼',
        '최종 제출 버튼'
      ],
      css: [
        '<strong>단계:</strong> 기본 숨김, 현재 단계만 표시',
        '<strong>진행 바:</strong> 현재 단계에 따라 width 변경',
        '<strong>버튼:</strong> 단계에 따라 활성화/비활성화',
        '<strong>전환 효과:</strong> 페이드 인/아웃'
      ],
      details: [
        'JavaScript: 현재 단계(currentStep) 추적',
        '다음 버튼: 현재 단계 검증 후 이동',
        '이전 버튼: 이전 단계로 복귀',
        '마지막 단계: 제출 버튼 표시'
      ]
    },
    styles: {
      colors: [
        { name: '진행 바 배경', value: '#E5E7EB', desc: 'Light gray' },
        { name: '진행 바 채움', value: '#4F46E5', desc: 'Primary' },
        { name: '버튼', value: '#4F46E5', desc: 'Primary' },
        { name: 'Disabled 버튼', value: '#D1D5DB', desc: 'Gray' }
      ],
      typography: [
        { element: '단계 제목', style: '1.5rem, 굵게' },
        { element: 'Input', style: '1rem' }
      ],
      spacing: [
        { element: '폼 패딩', value: '40px' },
        { element: '필드 간격', value: '20px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="multi-step-form">
  <div class="progress-bar">
    <div class="progress" id="progress"></div>
  </div>

  <div class="step active" data-step="1">
    <h2>Step 1: 개인정보</h2>
    <input type="text" placeholder="이름" required>
    <input type="email" placeholder="이메일" required>
  </div>

  <div class="step" data-step="2">
    <h2>Step 2: 주소</h2>
    <input type="text" placeholder="주소" required>
  </div>

  <div class="buttons">
    <button id="prevBtn" disabled>이전</button>
    <button id="nextBtn">다음</button>
  </div>
</div>`
      },
      {
        step: '2단계: JavaScript 단계 전환',
        code: `let currentStep = 1;
const totalSteps = 2;
const steps = document.querySelectorAll('.step');
const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showStep(step) {
  steps.forEach((s, i) => {
    s.classList.toggle('active', i + 1 === step);
  });

  progress.style.width = \`\${(step / totalSteps) * 100}%\`;
  prevBtn.disabled = step === 1;
  nextBtn.textContent = step === totalSteps ? '제출' : '다음';
}

nextBtn.addEventListener('click', () => {
  if (currentStep < totalSteps) {
    currentStep++;
    showStep(currentStep);
  } else {
    // 제출 로직
    alert('폼 제출!');
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
});`
      }
    ],
    checklist: [
      '다음 버튼 클릭 시 다음 단계로 이동하나요?',
      '이전 버튼으로 이전 단계로 돌아가나요?',
      '진행 바가 현재 단계를 표시하나요?',
      '첫 단계에서 이전 버튼이 비활성화되나요?',
      '마지막 단계에서 제출 버튼이 표시되나요?',
      '각 단계의 입력 필드가 적절한가요?'
    ]
  },

  'S052': {
    learningPoints: [
      '<strong>실시간 폼 검증</strong>',
      'JavaScript로 <strong>input 이벤트</strong> 감지',
      '<strong>정규표현식</strong>으로 유효성 검사',
      '검증 메시지 표시 (성공/실패)'
    ],
    requirements: {
      html: [
        '이메일, 비밀번호, 전화번호 입력 필드',
        '각 필드 아래 검증 메시지 영역',
        '제출 버튼 (모든 필드 유효할 때 활성화)'
      ],
      css: [
        '<strong>유효한 입력:</strong> 초록 테두리',
        '<strong>유효하지 않은 입력:</strong> 빨간 테두리',
        '<strong>메시지:</strong> 작은 텍스트, 색상으로 구분',
        '<strong>비활성 버튼:</strong> 회색, cursor: not-allowed'
      ],
      details: [
        'JavaScript: input 이벤트로 실시간 검증',
        '이메일: 정규식 검증',
        '비밀번호: 최소 8자, 숫자 포함',
        '전화번호: 010-1234-5678 형식'
      ]
    },
    styles: {
      colors: [
        { name: '유효 테두리', value: '#10B981', desc: 'Green' },
        { name: '무효 테두리', value: '#EF4444', desc: 'Red' },
        { name: '성공 메시지', value: '#10B981', desc: 'Green' },
        { name: '오류 메시지', value: '#EF4444', desc: 'Red' }
      ],
      typography: [
        { element: 'Input', style: '1rem' },
        { element: '검증 메시지', style: '0.875rem' }
      ],
      spacing: [
        { element: 'Input 패딩', value: '12px' },
        { element: '필드 간격', value: '24px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<form class="validation-form">
  <div class="field">
    <input type="email" id="email" placeholder="이메일">
    <span class="message" id="emailMsg"></span>
  </div>
  <div class="field">
    <input type="password" id="password" placeholder="비밀번호">
    <span class="message" id="passwordMsg"></span>
  </div>
  <button type="submit" id="submitBtn" disabled>제출</button>
</form>`
      },
      {
        step: '2단계: JavaScript 검증',
        code: `const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

function validateEmail(email) {
  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  return password.length >= 8 && /\\d/.test(password);
}

emailInput.addEventListener('input', (e) => {
  const isValid = validateEmail(e.target.value);
  emailInput.classList.toggle('valid', isValid);
  emailInput.classList.toggle('invalid', !isValid);
  document.getElementById('emailMsg').textContent =
    isValid ? '✓ 유효한 이메일' : '✗ 이메일 형식이 잘못되었습니다';
  document.getElementById('emailMsg').className =
    \`message \${isValid ? 'success' : 'error'}\`;
  checkFormValidity();
});

function checkFormValidity() {
  const isFormValid =
    validateEmail(emailInput.value) &&
    validatePassword(passwordInput.value);
  submitBtn.disabled = !isFormValid;
}`
      }
    ],
    checklist: [
      '입력 중 실시간으로 검증되나요?',
      '유효한 입력 시 초록 테두리가 표시되나요?',
      '유효하지 않은 입력 시 빨간 테두리가 표시되나요?',
      '검증 메시지가 표시되나요?',
      '모든 필드가 유효할 때 제출 버튼이 활성화되나요?',
      '정규표현식이 올바르게 작동하나요?'
    ]
  },

  'S053': {
    learningPoints: [
      '<strong>태그 입력</strong> UI',
      'JavaScript로 <strong>동적 태그 추가/삭제</strong>',
      '<strong>Enter 키</strong>로 태그 추가',
      '중복 태그 방지'
    ],
    requirements: {
      html: [
        '<code>&lt;div class="tag-input"&gt;</code> 컨테이너',
        '태그 목록 표시 영역',
        '<code>&lt;input&gt;</code> 새 태그 입력',
        '각 태그에 삭제 버튼 (×)'
      ],
      css: [
        '<strong>태그:</strong> 인라인 배치, 둥근 배경',
        '<strong>삭제 버튼:</strong> 작은 원형, hover 효과',
        '<strong>Input:</strong> 태그 사이에 자연스럽게 배치',
        '<strong>전체 컨테이너:</strong> Border, 클릭 가능'
      ],
      details: [
        'JavaScript: Enter 키로 태그 추가',
        '공백만 있는 태그 무시',
        '중복 태그 방지',
        '삭제 버튼으로 태그 제거'
      ]
    },
    styles: {
      colors: [
        { name: '태그 배경', value: '#4F46E5', desc: 'Primary' },
        { name: '태그 텍스트', value: '#FFFFFF', desc: 'White' },
        { name: '컨테이너 테두리', value: '#D1D5DB', desc: 'Gray' },
        { name: '삭제 버튼 hover', value: '#EF4444', desc: 'Red' }
      ],
      typography: [
        { element: '태그 텍스트', style: '0.875rem' },
        { element: 'Input', style: '1rem' }
      ],
      spacing: [
        { element: '태그 패딩', value: '6px 12px' },
        { element: '태그 간격', value: '8px' },
        { element: '컨테이너 패딩', value: '12px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="tag-input-container">
  <div class="tags" id="tags"></div>
  <input type="text" id="tagInput" placeholder="태그를 입력하세요...">
</div>`
      },
      {
        step: '2단계: JavaScript 태그 관리',
        code: `const tagInput = document.getElementById('tagInput');
const tagsContainer = document.getElementById('tags');
const tags = [];

function addTag(text) {
  text = text.trim();
  if (!text || tags.includes(text)) return;

  tags.push(text);
  renderTags();
  tagInput.value = '';
}

function removeTag(index) {
  tags.splice(index, 1);
  renderTags();
}

function renderTags() {
  tagsContainer.innerHTML = tags.map((tag, i) => \`
    <span class="tag">
      \${tag}
      <button onclick="removeTag(\${i})" class="remove-tag">&times;</button>
    </span>
  \`).join('');
}

tagInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addTag(e.target.value);
  }
});`
      }
    ],
    checklist: [
      'Enter 키로 태그가 추가되나요?',
      '중복 태그가 추가되지 않나요?',
      '삭제 버튼으로 태그가 제거되나요?',
      '공백만 있는 태그가 무시되나요?',
      '태그가 적절한 스타일로 표시되나요?',
      'Input이 태그 추가 후 초기화되나요?'
    ]
  },

  'S054': {
    learningPoints: [
      '<strong>날짜 선택기</strong> (달력) UI',
      'JavaScript로 <strong>달력 생성</strong>',
      '<strong>월/년 이동</strong> 기능',
      '날짜 선택 및 표시'
    ],
    requirements: {
      html: [
        '월/년 헤더 (이전/다음 버튼)',
        '요일 헤더 (일~토)',
        '날짜 그리드 (7x6)',
        '선택된 날짜 표시 영역'
      ],
      css: [
        '<strong>그리드:</strong> 7열 (일주일)',
        '<strong>오늘:</strong> 파란 테두리',
        '<strong>선택된 날짜:</strong> Primary 배경',
        '<strong>다른 달 날짜:</strong> 회색, 흐리게'
      ],
      details: [
        'JavaScript: Date 객체로 달력 생성',
        '이전/다음 월 이동',
        '날짜 클릭 시 선택',
        '월의 첫날/마지막날 계산'
      ]
    },
    styles: {
      colors: [
        { name: '헤더 배경', value: '#4F46E5', desc: 'Primary' },
        { name: '선택 날짜', value: '#4F46E5', desc: 'Primary' },
        { name: '오늘', value: '#3B82F6', desc: 'Blue' },
        { name: '다른 달', value: '#9CA3AF', desc: 'Gray' }
      ],
      typography: [
        { element: '헤더 월/년', style: '1.25rem, 굵게' },
        { element: '날짜', style: '1rem' }
      ],
      spacing: [
        { element: '날짜 셀 크기', value: '40px × 40px' },
        { element: '셀 간격', value: '2px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="datepicker">
  <div class="calendar-header">
    <button id="prevMonth">&lt;</button>
    <span id="currentMonth"></span>
    <button id="nextMonth">&gt;</button>
  </div>
  <div class="calendar-grid" id="calendar"></div>
  <div class="selected-date" id="selectedDate">날짜를 선택하세요</div>
</div>`
      },
      {
        step: '2단계: JavaScript 달력 생성',
        code: `let currentDate = new Date();
let selectedDate = null;

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  document.getElementById('currentMonth').textContent =
    \`\${year}년 \${month + 1}월\`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let html = '<div class="weekdays">';
  ['일', '월', '화', '수', '목', '금', '토'].forEach(day => {
    html += \`<div>\${day}</div>\`;
  });
  html += '</div><div class="days">';

  for (let i = 0; i < firstDay; i++) {
    html += '<div class="empty"></div>';
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const isToday = date.toDateString() === new Date().toDateString();
    html += \`<div class="day \${isToday ? 'today' : ''}"
      onclick="selectDate(\${year}, \${month}, \${day})">\${day}</div>\`;
  }

  html += '</div>';
  document.getElementById('calendar').innerHTML = html;
}

function selectDate(year, month, day) {
  selectedDate = new Date(year, month, day);
  document.getElementById('selectedDate').textContent =
    selectedDate.toLocaleDateString('ko-KR');
  renderCalendar();
}

document.getElementById('prevMonth').onclick = () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
};

document.getElementById('nextMonth').onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
};

renderCalendar();`
      }
    ],
    checklist: [
      '달력이 올바르게 표시되나요?',
      '이전/다음 버튼으로 월이 이동하나요?',
      '날짜 클릭 시 선택되나요?',
      '오늘 날짜가 강조되나요?',
      '선택된 날짜가 표시되나요?',
      '월의 첫날이 올바른 요일에 시작하나요?'
    ]
  },

  'S055': {
    learningPoints: [
      '<strong>색상 선택기</strong> (Color Picker) UI',
      '<strong>input[type="color"]</strong> 활용',
      'JavaScript로 <strong>색상 값 표시</strong>',
      'HEX, RGB 형식 변환'
    ],
    requirements: {
      html: [
        '<code>&lt;input type="color"&gt;</code>',
        '현재 색상 미리보기 영역',
        'HEX 값 표시 (예: #4F46E5)',
        'RGB 값 표시 (예: rgb(79, 70, 229))',
        '색상 프리셋 팔레트 (선택사항)'
      ],
      css: [
        '<strong>미리보기:</strong> 큰 사각형, 선택 색상 배경',
        '<strong>Color Input:</strong> 커스텀 스타일 (가능하면)',
        '<strong>값 표시:</strong> 모노스페이스 폰트',
        '<strong>프리셋:</strong> 작은 색상 칩들'
      ],
      details: [
        'JavaScript: input 이벤트로 색상 변경 감지',
        'HEX to RGB 변환',
        '프리셋 클릭으로 색상 설정',
        '복사 기능 (선택사항)'
      ]
    },
    styles: {
      colors: [
        { name: '기본 색상', value: '#4F46E5', desc: 'Primary' },
        { name: '미리보기 테두리', value: '#D1D5DB', desc: 'Gray' }
      ],
      typography: [
        { element: '색상 값', style: 'Monospace, 1rem' }
      ],
      spacing: [
        { element: '미리보기 크기', value: '200px × 200px' },
        { element: '프리셋 칩', value: '40px × 40px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="color-picker">
  <div class="preview" id="preview"></div>
  <input type="color" id="colorInput" value="#4F46E5">
  <div class="values">
    <div>HEX: <span id="hexValue">#4F46E5</span></div>
    <div>RGB: <span id="rgbValue">rgb(79, 70, 229)</span></div>
  </div>
  <div class="presets">
    <div class="preset" style="background: #4F46E5" data-color="#4F46E5"></div>
    <div class="preset" style="background: #10B981" data-color="#10B981"></div>
    <div class="preset" style="background: #FF9800" data-color="#FF9800"></div>
  </div>
</div>`
      },
      {
        step: '2단계: JavaScript 색상 처리',
        code: `const colorInput = document.getElementById('colorInput');
const preview = document.getElementById('preview');
const hexValue = document.getElementById('hexValue');
const rgbValue = document.getElementById('rgbValue');

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return \`rgb(\${r}, \${g}, \${b})\`;
}

function updateColor(color) {
  preview.style.background = color;
  hexValue.textContent = color;
  rgbValue.textContent = hexToRgb(color);
}

colorInput.addEventListener('input', (e) => {
  updateColor(e.target.value);
});

document.querySelectorAll('.preset').forEach(preset => {
  preset.addEventListener('click', () => {
    const color = preset.dataset.color;
    colorInput.value = color;
    updateColor(color);
  });
});

updateColor(colorInput.value);`
      }
    ],
    checklist: [
      '색상 선택 시 미리보기가 업데이트되나요?',
      'HEX 값이 올바르게 표시되나요?',
      'RGB 값이 올바르게 변환되나요?',
      '프리셋 클릭으로 색상이 설정되나요?',
      '미리보기 영역이 충분히 큰가요?',
      '값들이 읽기 쉬운 형식인가요?'
    ]
  },

  'S056': {
    learningPoints: [
      '<strong>랜딩 페이지</strong> 구조',
      '<strong>히어로 섹션</strong> 디자인',
      '기능 소개 <strong>그리드 레이아웃</strong>',
      '<strong>CTA 버튼</strong> 배치'
    ],
    requirements: {
      html: [
        '히어로 섹션 (제목, 부제, CTA)',
        '기능 섹션 (3개 특징 카드)',
        '가격 또는 추가 CTA 섹션',
        '푸터'
      ],
      css: [
        '<strong>히어로:</strong> 전체 너비, 배경 이미지/그라디언트',
        '<strong>기능 카드:</strong> 3열 Grid',
        '<strong>CTA 버튼:</strong> 크고 눈에 띄는 스타일',
        '<strong>반응형:</strong> 모바일에서 1열로 변경'
      ],
      details: [
        '히어로: 큰 제목, 설명, 2개 버튼',
        '기능: 아이콘 + 제목 + 설명',
        'Smooth scroll to section',
        'Gradient background'
      ]
    },
    styles: {
      colors: [
        { name: '히어로 배경', value: 'linear-gradient(135deg, #4F46E5, #10B981)', desc: 'Gradient' },
        { name: 'Primary CTA', value: '#FF9800', desc: 'Accent' },
        { name: 'Secondary CTA', value: '#FFFFFF', desc: 'White outline' },
        { name: '기능 카드', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '히어로 제목', style: '3rem, 굵게, 흰색' },
        { element: '히어로 부제', style: '1.25rem, 흰색 80%' },
        { element: '기능 제목', style: '1.5rem, 굵게' }
      ],
      spacing: [
        { element: '히어로 높이', value: '최소 600px' },
        { element: '섹션 패딩', value: '80px 0' },
        { element: '기능 카드 gap', value: '32px' }
      ]
    },
    implementation: [
      {
        step: '1단계: 히어로 섹션',
        code: `<section class="hero">
  <div class="hero-content">
    <h1>당신의 비즈니스를 성장시키세요</h1>
    <p>최고의 솔루션으로 빠르고 효율적인 성과를 만드세요</p>
    <div class="cta-buttons">
      <button class="btn-primary">시작하기</button>
      <button class="btn-secondary">더 알아보기</button>
    </div>
  </div>
</section>`
      },
      {
        step: '2단계: 기능 섹션',
        code: `<section class="features">
  <h2>주요 기능</h2>
  <div class="feature-grid">
    <div class="feature-card">
      <div class="icon">🚀</div>
      <h3>빠른 속도</h3>
      <p>최적화된 성능으로 빠른 결과를 제공합니다.</p>
    </div>
    <!-- 추가 카드들 -->
  </div>
</section>`
      },
      {
        step: '3단계: CSS 스타일',
        code: `.hero {
  min-height: 600px;
  background: linear-gradient(135deg, #4F46E5, #10B981);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 80px 20px;
}
.hero h1 {
  font-size: 3rem;
  margin-bottom: 16px;
}
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}`
      }
    ],
    checklist: [
      '히어로 섹션이 전체 화면을 차지하나요?',
      'CTA 버튼이 눈에 잘 띄나요?',
      '기능 카드가 3열로 배치되었나요?',
      '모바일에서 1열로 변경되나요?',
      '배경 그라디언트가 적용되었나요?',
      '전체적인 시각적 계층이 명확한가요?'
    ]
  },

  'S057': {
    learningPoints: [
      '<strong>가격 표 (Pricing Table)</strong> 레이아웃',
      '<strong>3단 가격 플랜</strong> 구조',
      '추천 플랜 <strong>강조</strong> 표시',
      '기능 목록과 체크마크'
    ],
    requirements: {
      html: [
        '3개의 가격 카드 (Basic, Pro, Enterprise)',
        '각 카드: 플랜명, 가격, 기능 목록, 버튼',
        '추천 플랜에 "인기" 배지',
        '기능에 체크/X 마크'
      ],
      css: [
        '<strong>3열 Grid:</strong> 동일한 높이',
        '<strong>추천 플랜:</strong> 크기 확대, 그림자 강화',
        '<strong>가격:</strong> 큰 폰트, 굵게',
        '<strong>버튼:</strong> 플랜별 다른 스타일'
      ],
      details: [
        '추천 플랜: transform: scale(1.05)',
        '기능 목록: 체크마크 아이콘',
        'Hover 효과로 카드 강조',
        '반응형: 모바일에서 1열'
      ]
    },
    styles: {
      colors: [
        { name: 'Basic 버튼', value: '#6B7280', desc: 'Gray' },
        { name: 'Pro 버튼 (추천)', value: '#4F46E5', desc: 'Primary' },
        { name: 'Enterprise 버튼', value: '#10B981', desc: 'Secondary' },
        { name: '배지', value: '#FF9800', desc: 'Accent' }
      ],
      typography: [
        { element: '플랜명', style: '1.5rem, 굵게' },
        { element: '가격', style: '3rem, 굵게' },
        { element: '기능', style: '1rem' }
      ],
      spacing: [
        { element: '카드 패딩', value: '40px' },
        { element: '카드 간격', value: '32px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="pricing-table">
  <div class="pricing-card">
    <h3>Basic</h3>
    <div class="price">$9<span>/월</span></div>
    <ul class="features">
      <li>✓ 기능 1</li>
      <li>✓ 기능 2</li>
      <li>✗ 기능 3</li>
    </ul>
    <button class="btn-basic">선택하기</button>
  </div>

  <div class="pricing-card featured">
    <span class="badge">인기</span>
    <h3>Pro</h3>
    <div class="price">$29<span>/월</span></div>
    <ul class="features">
      <li>✓ 모든 Basic 기능</li>
      <li>✓ 기능 3</li>
      <li>✓ 기능 4</li>
    </ul>
    <button class="btn-pro">선택하기</button>
  </div>

  <div class="pricing-card">
    <h3>Enterprise</h3>
    <div class="price">$99<span>/월</span></div>
    <ul class="features">
      <li>✓ 모든 Pro 기능</li>
      <li>✓ 우선 지원</li>
      <li>✓ 커스텀 설정</li>
    </ul>
    <button class="btn-enterprise">문의하기</button>
  </div>
</div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.pricing-table {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}
.pricing-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  transition: 0.3s;
}
.pricing-card.featured {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(79,70,229,0.3);
  position: relative;
}
.badge {
  position: absolute;
  top: -12px;
  right: 20px;
  background: #FF9800;
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.875rem;
}
.price {
  font-size: 3rem;
  font-weight: bold;
  margin: 20px 0;
}
@media (max-width: 768px) {
  .pricing-table {
    grid-template-columns: 1fr;
  }
  .pricing-card.featured {
    transform: none;
  }
}`
      }
    ],
    checklist: [
      '3개의 가격 카드가 나란히 배치되었나요?',
      '추천 플랜이 강조되었나요?',
      '인기 배지가 표시되나요?',
      '기능 목록에 체크마크가 있나요?',
      '각 플랜의 버튼 스타일이 다른가요?',
      '모바일에서 1열로 변경되나요?'
    ]
  },

  'S058': {
    learningPoints: [
      '<strong>팀 멤버 소개</strong> 레이아웃',
      '<strong>프로필 카드</strong> 그리드',
      '이미지 + 정보 구조',
      'SNS 아이콘 링크'
    ],
    requirements: {
      html: [
        '4-6개의 팀원 카드',
        '각 카드: 사진, 이름, 직책, 설명',
        'SNS 아이콘 (링크)',
        'Hover 시 추가 정보 표시 (선택사항)'
      ],
      css: [
        '<strong>그리드:</strong> 3열 또는 4열',
        '<strong>이미지:</strong> 원형, 동일한 크기',
        '<strong>카드:</strong> 중앙 정렬, 그림자',
        '<strong>Hover:</strong> 카드 확대, 그림자 강화'
      ],
      details: [
        '이미지: object-fit: cover',
        'SNS 아이콘: 작은 원형 버튼',
        'Hover 시 transform: translateY(-8px)',
        '반응형: 모바일 2열 또는 1열'
      ]
    },
    styles: {
      colors: [
        { name: '카드 배경', value: '#FFFFFF', desc: 'White' },
        { name: '직책 텍스트', value: '#6B7280', desc: 'Gray' },
        { name: 'SNS hover', value: '#4F46E5', desc: 'Primary' }
      ],
      typography: [
        { element: '이름', style: '1.25rem, 굵게' },
        { element: '직책', style: '0.875rem, 회색' },
        { element: '설명', style: '1rem' }
      ],
      spacing: [
        { element: '이미지 크기', value: '150px' },
        { element: '카드 패딩', value: '32px' },
        { element: '카드 간격', value: '32px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="team-grid">
  <div class="team-card">
    <img src="member1.jpg" alt="홍길동" class="profile-img">
    <h3>홍길동</h3>
    <p class="role">CEO & Founder</p>
    <p class="bio">10년 경력의 비즈니스 리더</p>
    <div class="social-links">
      <a href="#"><i class="icon-twitter"></i></a>
      <a href="#"><i class="icon-linkedin"></i></a>
    </div>
  </div>
  <!-- 추가 멤버들 -->
</div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}
.team-card {
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  transition: 0.3s;
}
.team-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}
.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}
.role {
  color: #6B7280;
  font-size: 0.875rem;
  margin: 8px 0;
}
@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
}`
      }
    ],
    checklist: [
      '팀원 카드가 그리드로 배치되었나요?',
      '프로필 이미지가 원형인가요?',
      'Hover 시 카드가 위로 이동하나요?',
      'SNS 아이콘이 표시되나요?',
      '직책이 명확히 구분되나요?',
      '모바일에서 적절히 반응하나요?'
    ]
  },

  'S059': {
    learningPoints: [
      '<strong>통계 대시보드</strong> 카드',
      '<strong>숫자와 아이콘</strong> 표시',
      '증감률 표시 (▲/▼)',
      'Grid 레이아웃'
    ],
    requirements: {
      html: [
        '4개의 통계 카드',
        '각 카드: 아이콘, 라벨, 숫자, 증감률',
        '증감률에 색상 (증가: 초록, 감소: 빨강)',
        '카드별 다른 아이콘/색상'
      ],
      css: [
        '<strong>그리드:</strong> 4열 또는 2x2',
        '<strong>아이콘:</strong> 큰 아이콘, 배경 원형',
        '<strong>숫자:</strong> 매우 큰 폰트',
        '<strong>증감:</strong> 작은 텍스트, 화살표'
      ],
      details: [
        '아이콘: 각 카드마다 다른 색상',
        '증감률: 양수(▲ 초록), 음수(▼ 빨강)',
        'Counter animation (선택사항)',
        'Hover 효과'
      ]
    },
    styles: {
      colors: [
        { name: '카드 1 (사용자)', value: '#4F46E5', desc: 'Primary' },
        { name: '카드 2 (매출)', value: '#10B981', desc: 'Green' },
        { name: '카드 3 (주문)', value: '#FF9800', desc: 'Orange' },
        { name: '카드 4 (방문)', value: '#3B82F6', desc: 'Blue' },
        { name: '증가', value: '#10B981', desc: 'Green' },
        { name: '감소', value: '#EF4444', desc: 'Red' }
      ],
      typography: [
        { element: '숫자', style: '2.5rem, 굵게' },
        { element: '라벨', style: '1rem, 회색' },
        { element: '증감률', style: '0.875rem' }
      ],
      spacing: [
        { element: '카드 패딩', value: '24px' },
        { element: '아이콘 크기', value: '60px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-icon" style="background: #E0E7FF;">
      <i class="icon-users" style="color: #4F46E5;">👥</i>
    </div>
    <div class="stat-info">
      <p class="stat-label">총 사용자</p>
      <p class="stat-value">12,567</p>
      <p class="stat-change positive">▲ 12.5%</p>
    </div>
  </div>
  <!-- 추가 통계 카드들 -->
</div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.stat-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 16px;
}
.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}
.stat-value {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 4px 0;
}
.stat-label {
  color: #6B7280;
  font-size: 1rem;
}
.stat-change {
  font-size: 0.875rem;
}
.stat-change.positive {
  color: #10B981;
}
.stat-change.negative {
  color: #EF4444;
}
@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}`
      }
    ],
    checklist: [
      '4개의 통계 카드가 표시되나요?',
      '각 카드에 아이콘과 숫자가 있나요?',
      '증감률이 색상으로 구분되나요?',
      '아이콘 배경이 다른 색상인가요?',
      '반응형으로 그리드가 변경되나요?',
      '카드 레이아웃이 깔끔한가요?'
    ]
  },

  'S060': {
    learningPoints: [
      '<strong>포트폴리오 갤러리</strong>',
      '<strong>필터링 기능</strong> (카테고리)',
      'JavaScript로 <strong>항목 필터링</strong>',
      'Grid 레이아웃'
    ],
    requirements: {
      html: [
        '카테고리 필터 버튼들 (전체, Web, Mobile, Design)',
        '포트폴리오 아이템 그리드',
        '각 아이템: 이미지, 제목, 카테고리',
        'Hover 시 오버레이 정보'
      ],
      css: [
        '<strong>그리드:</strong> 3열, auto-fit',
        '<strong>필터 버튼:</strong> Active 상태 표시',
        '<strong>아이템:</strong> 이미지, hover 오버레이',
        '<strong>숨김:</strong> display: none 또는 opacity'
      ],
      details: [
        'JavaScript: 카테고리별 필터링',
        '전체 버튼: 모든 아이템 표시',
        'Hover: 어두운 오버레이 + 텍스트',
        'Transition으로 부드러운 전환'
      ]
    },
    styles: {
      colors: [
        { name: 'Active 필터', value: '#4F46E5', desc: 'Primary' },
        { name: '오버레이', value: 'rgba(0,0,0,0.7)', desc: 'Dark semi-transparent' },
        { name: '오버레이 텍스트', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '필터 버튼', style: '1rem' },
        { element: '아이템 제목', style: '1.25rem, 굵게' },
        { element: '카테고리', style: '0.875rem' }
      ],
      spacing: [
        { element: '그리드 gap', value: '24px' },
        { element: '필터 버튼 간격', value: '12px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="portfolio">
  <div class="filters">
    <button class="filter-btn active" data-filter="all">전체</button>
    <button class="filter-btn" data-filter="web">Web</button>
    <button class="filter-btn" data-filter="mobile">Mobile</button>
    <button class="filter-btn" data-filter="design">Design</button>
  </div>

  <div class="portfolio-grid">
    <div class="portfolio-item" data-category="web">
      <img src="project1.jpg" alt="프로젝트 1">
      <div class="overlay">
        <h3>프로젝트 1</h3>
        <p>Web Design</p>
      </div>
    </div>
    <!-- 추가 아이템들 -->
  </div>
</div>`
      },
      {
        step: '2단계: JavaScript 필터링',
        code: `const filterBtns = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Active 상태 변경
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    items.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});`
      },
      {
        step: '3단계: CSS 스타일',
        code: `.filters {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 40px;
}
.filter-btn {
  padding: 10px 24px;
  border: 1px solid #D1D5DB;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}
.filter-btn.active {
  background: #4F46E5;
  color: white;
  border-color: #4F46E5;
}
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
.portfolio-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}
.portfolio-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: 0.3s;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: 0.3s;
}
.portfolio-item:hover .overlay {
  opacity: 1;
}
.portfolio-item:hover img {
  transform: scale(1.1);
}`
      }
    ],
    checklist: [
      '필터 버튼 클릭 시 항목이 필터링되나요?',
      'Active 버튼이 강조되나요?',
      'Hover 시 오버레이가 나타나나요?',
      '전체 버튼으로 모든 항목이 표시되나요?',
      '그리드가 반응형으로 조정되나요?',
      '이미지가 hover 시 확대되나요?'
    ]
  },

  'S061': {
    learningPoints: [
      '<strong>블로그 카드</strong> 레이아웃',
      '<strong>썸네일 + 콘텐츠</strong> 구조',
      '날짜, 카테고리 메타데이터',
      'Grid 또는 List 형태'
    ],
    requirements: {
      html: [
        '4-6개의 블로그 카드',
        '각 카드: 썸네일, 제목, 요약, 날짜, 카테고리',
        '"더 보기" 버튼',
        'Hover 효과'
      ],
      css: [
        '<strong>그리드:</strong> 2열 또는 3열',
        '<strong>썸네일:</strong> aspect-ratio 16:9',
        '<strong>카드:</strong> 그림자, border-radius',
        '<strong>Hover:</strong> 그림자 강화, 이미지 확대'
      ],
      details: [
        '썸네일: object-fit: cover',
        '메타: 날짜 + 카테고리 배지',
        '요약: 2-3줄로 제한 (ellipsis)',
        'Read more 링크/버튼'
      ]
    },
    styles: {
      colors: [
        { name: '카드 배경', value: '#FFFFFF', desc: 'White' },
        { name: '카테고리 배지', value: '#4F46E5', desc: 'Primary' },
        { name: '날짜 텍스트', value: '#6B7280', desc: 'Gray' },
        { name: 'Read more', value: '#4F46E5', desc: 'Primary' }
      ],
      typography: [
        { element: '제목', style: '1.25rem, 굵게' },
        { element: '요약', style: '1rem, line-height 1.6' },
        { element: '날짜', style: '0.875rem, 회색' }
      ],
      spacing: [
        { element: '카드 패딩', value: '0 (이미지), 20px (콘텐츠)' },
        { element: '카드 간격', value: '32px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="blog-grid">
  <article class="blog-card">
    <img src="thumbnail.jpg" alt="블로그 제목" class="blog-thumbnail">
    <div class="blog-content">
      <div class="blog-meta">
        <span class="category">기술</span>
        <span class="date">2024.10.21</span>
      </div>
      <h3 class="blog-title">블로그 포스트 제목</h3>
      <p class="blog-excerpt">요약 내용이 여기에 표시됩니다. 2-3줄로 제한...</p>
      <a href="#" class="read-more">더 보기 →</a>
    </div>
  </article>
  <!-- 추가 카드들 -->
</div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.blog-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}
.blog-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: 0.3s;
}
.blog-card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  transform: translateY(-4px);
}
.blog-thumbnail {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: 0.3s;
}
.blog-card:hover .blog-thumbnail {
  transform: scale(1.05);
}
.blog-content {
  padding: 20px;
}
.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.category {
  background: #4F46E5;
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
}
.date {
  color: #6B7280;
  font-size: 0.875rem;
}
.blog-excerpt {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.read-more {
  color: #4F46E5;
  text-decoration: none;
  font-weight: 600;
}
@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}`
      }
    ],
    checklist: [
      '블로그 카드가 그리드로 배치되었나요?',
      '썸네일이 적절한 비율인가요?',
      '카테고리 배지가 표시되나요?',
      '요약이 2-3줄로 제한되나요?',
      'Hover 시 카드가 위로 이동하나요?',
      '"더 보기" 링크가 있나요?'
    ]
  },

  'S062': {
    learningPoints: [
      '<strong>이벤트 배너</strong> 디자인',
      '<strong>그라디언트</strong> 배경',
      '큰 타이포그래피와 <strong>CTA</strong>',
      '반응형 이미지'
    ],
    requirements: {
      html: [
        '배너 컨테이너',
        '큰 제목과 부제',
        'CTA 버튼',
        '배경 이미지 또는 그라디언트',
        '할인율/프로모션 배지 (선택사항)'
      ],
      css: [
        '<strong>배경:</strong> 그라디언트 또는 이미지',
        '<strong>제목:</strong> 매우 큰 폰트, 굵게',
        '<strong>CTA:</strong> 눈에 띄는 버튼',
        '<strong>반응형:</strong> 모바일에서 텍스트 크기 조정'
      ],
      details: [
        '그라디언트: 대각선 또는 방사형',
        '텍스트: 그림자로 가독성 향상',
        'CTA: 애니메이션 효과 (pulse)',
        '배지: 절대 위치, 회전'
      ]
    },
    styles: {
      colors: [
        { name: '배경 그라디언트', value: 'linear-gradient(135deg, #FF9800, #FF5722)', desc: 'Orange to Red' },
        { name: 'CTA 버튼', value: '#FFFFFF', desc: 'White' },
        { name: '배지', value: '#FFD700', desc: 'Gold' }
      ],
      typography: [
        { element: '메인 제목', style: '4rem, 굵게, 흰색' },
        { element: '부제', style: '1.5rem, 흰색' }
      ],
      spacing: [
        { element: '배너 높이', value: '500px' },
        { element: '배너 패딩', value: '60px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="event-banner">
  <div class="banner-content">
    <span class="badge">50% OFF</span>
    <h1>연말 특별 세일</h1>
    <p>지금 바로 최대 50% 할인 혜택을 받으세요!</p>
    <button class="cta-button">지금 쇼핑하기</button>
  </div>
</div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.event-banner {
  height: 500px;
  background: linear-gradient(135deg, #FF9800, #FF5722);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
}
.banner-content {
  max-width: 800px;
  padding: 60px 20px;
}
.badge {
  display: inline-block;
  background: #FFD700;
  color: #222;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 20px;
  transform: rotate(-5deg);
}
.event-banner h1 {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 16px;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
}
.event-banner p {
  font-size: 1.5rem;
  margin-bottom: 32px;
}
.cta-button {
  padding: 16px 48px;
  font-size: 1.25rem;
  background: white;
  color: #FF5722;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  animation: pulse 2s infinite;
}
.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}
@media (max-width: 768px) {
  .event-banner h1 {
    font-size: 2.5rem;
  }
  .event-banner p {
    font-size: 1.25rem;
  }
}`
      }
    ],
    checklist: [
      '배너가 전체 너비를 차지하나요?',
      '그라디언트 배경이 적용되었나요?',
      '제목이 충분히 크고 눈에 띄나요?',
      'CTA 버튼이 강조되나요?',
      '배지가 표시되나요?',
      '모바일에서 텍스트 크기가 조정되나요?'
    ]
  },

  'S063': {
    learningPoints: [
      '<strong>상품 상세 페이지</strong> 레이아웃',
      '<strong>이미지 갤러리</strong> + 정보 구조',
      '옵션 선택 (색상, 사이즈)',
      '수량 선택 및 장바구니'
    ],
    requirements: {
      html: [
        '좌측: 상품 이미지 (메인 + 썸네일)',
        '우측: 제품명, 가격, 설명, 옵션, 버튼',
        '옵션: 색상 선택, 사이즈 선택',
        '수량 조절 (+ -)',
        '장바구니/구매 버튼'
      ],
      css: [
        '<strong>레이아웃:</strong> 2열 Grid (50:50)',
        '<strong>이미지:</strong> 큰 메인 + 작은 썸네일',
        '<strong>옵션:</strong> 라디오 또는 커스텀 선택',
        '<strong>버튼:</strong> 큰 CTA 스타일'
      ],
      details: [
        'JavaScript: 썸네일 클릭으로 메인 이미지 변경',
        '수량: + - 버튼으로 조절',
        '옵션: 선택 시 시각적 피드백',
        '가격: 할인가 표시'
      ]
    },
    styles: {
      colors: [
        { name: '장바구니 버튼', value: '#4F46E5', desc: 'Primary' },
        { name: '구매 버튼', value: '#10B981', desc: 'Green' },
        { name: '원가', value: '#9CA3AF', desc: 'Gray (strikethrough)' },
        { name: '할인가', value: '#EF4444', desc: 'Red' }
      ],
      typography: [
        { element: '제품명', style: '2rem, 굵게' },
        { element: '가격', style: '1.5rem, 굵게' },
        { element: '설명', style: '1rem, line-height 1.6' }
      ],
      spacing: [
        { element: '레이아웃 gap', value: '48px' },
        { element: '섹션 간격', value: '32px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="product-detail">
  <div class="product-images">
    <img src="main.jpg" id="mainImage" class="main-image">
    <div class="thumbnails">
      <img src="thumb1.jpg" class="thumb active" onclick="changeImage(this)">
      <img src="thumb2.jpg" class="thumb" onclick="changeImage(this)">
      <img src="thumb3.jpg" class="thumb" onclick="changeImage(this)">
    </div>
  </div>

  <div class="product-info">
    <h1>프리미엄 스마트워치</h1>
    <div class="price">
      <span class="original">₩199,000</span>
      <span class="sale">₩149,000</span>
      <span class="discount">25% OFF</span>
    </div>
    <p class="description">최신 기술이 적용된 스마트워치...</p>

    <div class="options">
      <label>색상</label>
      <div class="color-options">
        <div class="color-option" style="background: #000" data-color="black"></div>
        <div class="color-option" style="background: #fff" data-color="white"></div>
      </div>

      <label>사이즈</label>
      <select class="size-select">
        <option>S</option>
        <option>M</option>
        <option>L</option>
      </select>

      <label>수량</label>
      <div class="quantity">
        <button onclick="changeQuantity(-1)">-</button>
        <span id="quantity">1</span>
        <button onclick="changeQuantity(1)">+</button>
      </div>
    </div>

    <div class="action-buttons">
      <button class="btn-cart">장바구니</button>
      <button class="btn-buy">바로 구매</button>
    </div>
  </div>
</div>`
      },
      {
        step: '2단계: JavaScript',
        code: `let quantity = 1;

function changeImage(thumb) {
  document.getElementById('mainImage').src = thumb.src.replace('thumb', 'main');
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function changeQuantity(delta) {
  quantity = Math.max(1, quantity + delta);
  document.getElementById('quantity').textContent = quantity;
}`
      }
    ],
    checklist: [
      '이미지와 정보가 2열로 배치되었나요?',
      '썸네일 클릭으로 메인 이미지가 변경되나요?',
      '옵션을 선택할 수 있나요?',
      '수량을 조절할 수 있나요?',
      '할인가가 강조되나요?',
      '장바구니/구매 버튼이 명확한가요?'
    ]
  },

  'S064': {
    learningPoints: [
      '<strong>FAQ 섹션</strong>',
      '<strong>아코디언</strong> 리스트 형태',
      '질문 클릭 시 답변 표시',
      '하나씩 열리거나 여러 개 동시 열기'
    ],
    requirements: {
      html: [
        '<code>&lt;div class="faq"&gt;</code>',
        '5-7개의 FAQ 아이템',
        '각 아이템: 질문 + 답변',
        '아이콘 (▼/▲) 또는 (+/-)'
      ],
      css: [
        '<strong>질문:</strong> 클릭 가능한 버튼 스타일',
        '<strong>답변:</strong> 기본 숨김, 열릴 때 표시',
        '<strong>전환:</strong> max-height 애니메이션',
        '<strong>아이콘:</strong> 회전 애니메이션'
      ],
      details: [
        'JavaScript: 클릭으로 open 클래스 토글',
        '답변: padding으로 여백',
        '구분선: border-bottom',
        '부드러운 열림/닫힘 효과'
      ]
    },
    styles: {
      colors: [
        { name: '질문 배경', value: '#F9FAFB', desc: 'Very light gray' },
        { name: 'Hover 배경', value: '#F3F4F6', desc: 'Light gray' },
        { name: '아이콘', value: '#4F46E5', desc: 'Primary' },
        { name: 'Border', value: '#E5E7EB', desc: 'Light gray' }
      ],
      typography: [
        { element: '질문', style: '1.125rem, 중간 굵기' },
        { element: '답변', style: '1rem, line-height 1.6' }
      ],
      spacing: [
        { element: '질문 패딩', value: '20px' },
        { element: '답변 패딩', value: '20px' },
        { element: '아이템 간격', value: '8px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="faq-section">
  <h2>자주 묻는 질문</h2>
  <div class="faq-list">
    <div class="faq-item">
      <button class="faq-question">
        <span>배송은 얼마나 걸리나요?</span>
        <span class="icon">▼</span>
      </button>
      <div class="faq-answer">
        <p>일반적으로 주문 후 2-3일 내에 배송됩니다.</p>
      </div>
    </div>
    <!-- 추가 FAQ 아이템들 -->
  </div>
</div>`
      },
      {
        step: '2단계: JavaScript',
        code: `const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const isOpen = item.classList.contains('open');

    // 모든 아이템 닫기 (single-open 모드)
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
    });

    // 클릭된 아이템 토글
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});`
      },
      {
        step: '3단계: CSS 스타일',
        code: `.faq-list {
  max-width: 800px;
  margin: 0 auto;
}
.faq-item {
  margin-bottom: 8px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  overflow: hidden;
}
.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #F9FAFB;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 1.125rem;
  transition: 0.3s;
}
.faq-question:hover {
  background: #F3F4F6;
}
.icon {
  color: #4F46E5;
  transition: 0.3s;
}
.faq-item.open .icon {
  transform: rotate(180deg);
}
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.faq-item.open .faq-answer {
  max-height: 500px;
}
.faq-answer p {
  padding: 20px;
  margin: 0;
}`
      }
    ],
    checklist: [
      '질문 클릭 시 답변이 나타나나요?',
      '아이콘이 회전하나요?',
      '부드러운 열림/닫힘 애니메이션이 있나요?',
      '한 번에 하나의 FAQ만 열리나요?',
      'Hover 시 배경색이 변하나요?',
      '구분선이 적절히 표시되나요?'
    ]
  },

  'S065': {
    learningPoints: [
      '<strong>후기 슬라이더</strong> (Testimonials)',
      '<strong>자동 재생</strong> 기능',
      '인디케이터 dots',
      '이전/다음 수동 제어'
    ],
    requirements: {
      html: [
        '3-5개의 후기 슬라이드',
        '각 슬라이드: 프로필 사진, 이름, 직책, 후기 내용',
        '인디케이터 dots',
        '이전/다음 버튼 (선택사항)'
      ],
      css: [
        '<strong>슬라이더:</strong> overflow: hidden',
        '<strong>슬라이드:</strong> flex, transform translateX',
        '<strong>Dots:</strong> 하단 중앙 정렬',
        '<strong>전환:</strong> 부드러운 애니메이션'
      ],
      details: [
        'JavaScript: setInterval로 자동 재생',
        'Dots 클릭으로 특정 슬라이드 이동',
        'Hover 시 자동 재생 일시정지',
        '5초마다 자동 전환'
      ]
    },
    styles: {
      colors: [
        { name: '슬라이드 배경', value: '#F9FAFB', desc: 'Very light gray' },
        { name: 'Active dot', value: '#4F46E5', desc: 'Primary' },
        { name: 'Inactive dot', value: '#D1D5DB', desc: 'Gray' },
        { name: '따옴표', value: '#4F46E5', desc: 'Primary' }
      ],
      typography: [
        { element: '후기 내용', style: '1.25rem, line-height 1.8' },
        { element: '이름', style: '1rem, 굵게' },
        { element: '직책', style: '0.875rem, 회색' }
      ],
      spacing: [
        { element: '슬라이드 패딩', value: '60px' },
        { element: 'Dot 크기', value: '12px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="testimonials-slider">
  <div class="slider-track" id="sliderTrack">
    <div class="testimonial-slide">
      <img src="avatar1.jpg" class="avatar">
      <p class="quote">"정말 훌륭한 서비스입니다!"</p>
      <h4>홍길동</h4>
      <p class="role">CEO, ABC Company</p>
    </div>
    <!-- 추가 슬라이드들 -->
  </div>
  <div class="dots" id="dots"></div>
</div>`
      },
      {
        step: '2단계: JavaScript 자동 재생',
        code: `let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const track = document.getElementById('sliderTrack');
const dotsContainer = document.getElementById('dots');
let autoplayInterval;

// Dots 생성
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.className = 'dot';
  dot.onclick = () => goToSlide(i);
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
  currentSlide = index;
  track.style.transform = \`translateX(-\${currentSlide * 100}%)\`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
}

// 자동 재생 시작
function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 5000);
}

// Hover 시 일시정지
document.querySelector('.testimonials-slider').addEventListener('mouseenter', () => {
  clearInterval(autoplayInterval);
});

document.querySelector('.testimonials-slider').addEventListener('mouseleave', () => {
  startAutoplay();
});

goToSlide(0);
startAutoplay();`
      },
      {
        step: '3단계: CSS 스타일',
        code: `.testimonials-slider {
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
.slider-track {
  display: flex;
  transition: transform 0.5s ease;
}
.testimonial-slide {
  min-width: 100%;
  padding: 60px;
  text-align: center;
  background: #F9FAFB;
  border-radius: 12px;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
}
.quote {
  font-size: 1.25rem;
  line-height: 1.8;
  color: #374151;
  margin: 20px 0;
}
.quote::before {
  content: '"';
  font-size: 3rem;
  color: #4F46E5;
}
.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #D1D5DB;
  cursor: pointer;
  transition: 0.3s;
}
.dot.active {
  background: #4F46E5;
  transform: scale(1.2);
}`
      }
    ],
    checklist: [
      '슬라이드가 자동으로 전환되나요?',
      'Dots가 현재 슬라이드를 표시하나요?',
      'Dots 클릭으로 슬라이드 이동이 가능한가요?',
      'Hover 시 자동 재생이 멈추나요?',
      '부드러운 전환 애니메이션이 있나요?',
      '후기 내용이 읽기 쉽게 배치되었나요?'
    ]
  },

  'S066': {
    learningPoints: [
      '<strong>Intersection Observer API</strong> 활용',
      '<strong>스크롤 이벤트</strong>로 요소 감지',
      '<strong>순차적 페이드 인</strong> 애니메이션',
      'CSS <strong>opacity + translateY</strong> 조합'
    ],
    requirements: {
      html: [
        '여러 개의 콘텐츠 섹션 (4-6개)',
        '각 섹션에 fade-in 클래스 추가',
        '섹션마다 다른 delay 적용'
      ],
      css: [
        '<strong>초기 상태:</strong> opacity: 0, translateY(30px)',
        '<strong>visible 클래스:</strong> opacity: 1, translateY(0)',
        '<strong>transition:</strong> 0.6s ease',
        '<strong>nth-child로 delay:</strong> 순차적 등장'
      ],
      details: [
        'Intersection Observer로 viewport 진입 감지',
        '요소가 보이면 visible 클래스 추가',
        '각 요소마다 0.1s씩 delay 증가',
        'threshold: 0.2 (20% 보이면 트리거)'
      ]
    },
    styles: {
      colors: [
        { name: '섹션 배경', value: '#FFFFFF', desc: 'White' },
        { name: '텍스트', value: '#222222', desc: 'Dark' },
        { name: '강조색', value: '#4F46E5', desc: 'Primary' }
      ],
      typography: [
        { element: '제목', style: '2rem, 굵게' },
        { element: '설명', style: '1rem, line-height 1.6' }
      ],
      spacing: [
        { element: '섹션 패딩', value: '80px 24px' },
        { element: '섹션 간격', value: '60px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<section class="fade-section">
  <h2>첫 번째 섹션</h2>
  <p>스크롤하면 나타납니다.</p>
</section>
<section class="fade-section">
  <h2>두 번째 섹션</h2>
  <p>순차적으로 등장합니다.</p>
</section>
<!-- 추가 섹션들 -->`
      },
      {
        step: '2단계: CSS 애니메이션',
        code: `.fade-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-section:nth-child(1) { transition-delay: 0s; }
.fade-section:nth-child(2) { transition-delay: 0.1s; }
.fade-section:nth-child(3) { transition-delay: 0.2s; }
.fade-section:nth-child(4) { transition-delay: 0.3s; }`
      },
      {
        step: '3단계: JavaScript - Intersection Observer',
        code: `const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // 한 번만 실행
    }
  });
}, {
  threshold: 0.2, // 20% 보이면 트리거
  rootMargin: '0px'
});

// 모든 섹션 관찰
document.querySelectorAll('.fade-section').forEach(section => {
  observer.observe(section);
});`
      }
    ],
    checklist: [
      '스크롤 시 요소가 페이드 인되나요?',
      '요소들이 순차적으로 나타나나요?',
      'Intersection Observer가 올바르게 작동하나요?',
      '부드러운 전환 애니메이션이 있나요?',
      '한 번 나타난 요소는 다시 사라지지 않나요?',
      '여러 섹션이 각각 다른 타이밍에 등장하나요?'
    ]
  },

  'S067': {
    learningPoints: [
      '<strong>패럴랙스 스크롤</strong> (Parallax Scrolling)',
      '<strong>배경과 전경</strong>의 다른 속도',
      '<strong>transform: translateY</strong> 활용',
      'scroll 이벤트와 성능 최적화'
    ],
    requirements: {
      html: [
        '배경 레이어 (느리게 움직임)',
        '전경 콘텐츠 (빠르게 움직임)',
        '여러 섹션으로 구성'
      ],
      css: [
        '<strong>배경:</strong> background-attachment: fixed 또는 transform',
        '<strong>레이어:</strong> position: absolute/relative',
        '<strong>z-index:</strong> 레이어 순서 정의'
      ],
      details: [
        'scroll 이벤트로 scrollY 값 가져오기',
        '배경: scrollY * 0.5 (느리게)',
        '전경: scrollY * 1.2 (빠르게)',
        'requestAnimationFrame으로 최적화'
      ]
    },
    styles: {
      colors: [
        { name: '배경 그라디언트', value: 'linear-gradient(#1E3A8A, #3B82F6)', desc: 'Blue gradient' },
        { name: '오버레이', value: 'rgba(0,0,0,0.3)', desc: 'Dark overlay' },
        { name: '텍스트', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '제목', style: '3rem, 굵게, 흰색' },
        { element: '부제목', style: '1.5rem, 흰색' }
      ],
      spacing: [
        { element: '섹션 높이', value: '100vh' },
        { element: '배경 이미지 높이', value: '120vh' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="parallax-container">
  <div class="parallax-bg" id="parallaxBg"></div>
  <div class="parallax-content">
    <h1>패럴랙스 스크롤 효과</h1>
    <p>배경이 천천히 움직입니다</p>
  </div>
</div>
<section class="content-section">
  <h2>다음 섹션</h2>
  <p>일반 콘텐츠</p>
</section>`
      },
      {
        step: '2단계: CSS 레이아웃',
        code: `.parallax-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120vh;
  background: linear-gradient(to bottom, #1E3A8A, #3B82F6);
  z-index: -1;
}

.parallax-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  text-align: center;
}`
      },
      {
        step: '3단계: JavaScript - Parallax 효과',
        code: `const parallaxBg = document.getElementById('parallaxBg');
let ticking = false;

function updateParallax() {
  const scrolled = window.scrollY;
  const rate = scrolled * 0.5; // 배경은 절반 속도로

  parallaxBg.style.transform = \`translateY(\${rate}px)\`;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
});`
      }
    ],
    checklist: [
      '배경이 전경보다 느리게 움직이나요?',
      '스크롤이 부드럽게 작동하나요?',
      'requestAnimationFrame으로 최적화했나요?',
      '패럴랙스 효과가 명확하게 보이나요?',
      '레이어의 z-index가 올바르게 설정되었나요?',
      '모바일에서도 정상 작동하나요?'
    ]
  },

  'S068': {
    learningPoints: [
      '<strong>햄버거 메뉴 아이콘</strong> 애니메이션',
      '<strong>3개의 선</strong>이 X 모양으로 변환',
      '<strong>CSS transform</strong>으로 회전',
      'JavaScript 토글 상태 관리'
    ],
    requirements: {
      html: [
        '햄버거 버튼 (3개의 span 라인)',
        '클릭 시 active 클래스 토글',
        '모바일 메뉴 (선택사항)'
      ],
      css: [
        '<strong>3개 라인:</strong> width, height, background',
        '<strong>active 상태:</strong> 첫 번째/마지막 라인 45도 회전',
        '<strong>중간 라인:</strong> opacity: 0',
        '<strong>transition:</strong> 0.3s ease'
      ],
      details: [
        '첫 번째 라인: rotate(45deg) + translateY',
        '중간 라인: opacity: 0 (사라짐)',
        '마지막 라인: rotate(-45deg) + translateY',
        '클릭 시 active 토글'
      ]
    },
    styles: {
      colors: [
        { name: '라인 색상', value: '#222222', desc: 'Dark' },
        { name: 'active 색상', value: '#4F46E5', desc: 'Primary' },
        { name: '버튼 배경', value: 'transparent', desc: 'Transparent' }
      ],
      typography: [
        { element: '라인 높이', style: '3px' },
        { element: '라인 너비', style: '30px' }
      ],
      spacing: [
        { element: '라인 간격', value: '6px' },
        { element: '버튼 패딩', value: '8px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<button class="hamburger" id="hamburger">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</button>`
      },
      {
        step: '2단계: CSS 기본 스타일',
        code: `.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.line {
  width: 100%;
  height: 3px;
  background: #222;
  transition: all 0.3s ease;
  border-radius: 2px;
}`
      },
      {
        step: '3단계: CSS Active 상태',
        code: `.hamburger.active .line:nth-child(1) {
  transform: rotate(45deg) translateY(10px);
  background: #4F46E5;
}

.hamburger.active .line:nth-child(2) {
  opacity: 0;
}

.hamburger.active .line:nth-child(3) {
  transform: rotate(-45deg) translateY(-10px);
  background: #4F46E5;
}`
      },
      {
        step: '4단계: JavaScript 토글',
        code: `const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');

  // 메뉴 토글 (선택사항)
  // const menu = document.querySelector('.mobile-menu');
  // menu.classList.toggle('open');
});`
      }
    ],
    checklist: [
      '3개의 라인이 명확하게 보이나요?',
      '클릭 시 X 모양으로 변하나요?',
      '부드러운 애니메이션이 있나요?',
      '다시 클릭하면 원래 모양으로 돌아가나요?',
      'active 상태에서 색상이 변하나요?',
      '중간 라인이 완전히 사라지나요?'
    ]
  },

  'S069': {
    learningPoints: [
      '<strong>카운터 애니메이션</strong> (Number Counting)',
      '<strong>setInterval</strong>로 숫자 증가',
      '<strong>Intersection Observer</strong>로 트리거',
      '목표값까지 부드럽게 증가'
    ],
    requirements: {
      html: [
        '3-4개의 통계 카드',
        '각 카드: 숫자, 라벨, 아이콘',
        'data-target 속성에 목표값 저장'
      ],
      css: [
        '<strong>카드:</strong> 중앙 정렬, 패딩',
        '<strong>숫자:</strong> 큰 폰트 (3rem), 굵게',
        '<strong>라벨:</strong> 작은 폰트, 회색',
        '<strong>그리드:</strong> 3-4열 배치'
      ],
      details: [
        'Intersection Observer로 뷰포트 진입 감지',
        'setInterval로 숫자 증가 (duration: 2s)',
        '목표값 도달 시 clearInterval',
        '한 번만 실행되도록 unobserve'
      ]
    },
    styles: {
      colors: [
        { name: '숫자 색상', value: '#4F46E5', desc: 'Primary' },
        { name: '라벨 색상', value: '#6B7280', desc: 'Gray' },
        { name: '카드 배경', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '숫자', style: '3rem, 굵게, Primary' },
        { element: '라벨', style: '1rem, 회색' },
        { element: '+ 기호', style: '3rem, Primary' }
      ],
      spacing: [
        { element: '카드 패딩', value: '40px' },
        { element: '카드 간격', value: '24px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="stats-container">
  <div class="stat-card">
    <div class="stat-number" data-target="1000">0</div>
    <p class="stat-label">프로젝트</p>
  </div>
  <div class="stat-card">
    <div class="stat-number" data-target="500">0</div>
    <p class="stat-label">고객</p>
  </div>
  <div class="stat-card">
    <div class="stat-number" data-target="50">0</div>
    <p class="stat-label">팀원</p>
  </div>
</div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.stats-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 24px;
}

.stat-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  color: #4F46E5;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 1rem;
  color: #6B7280;
}`
      },
      {
        step: '3단계: JavaScript - Counter',
        code: `function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 16);
}

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.target);
      animateCounter(entry.target, target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
  observer.observe(stat);
});`
      }
    ],
    checklist: [
      '숫자가 0에서 목표값까지 증가하나요?',
      '애니메이션이 부드럽게 작동하나요?',
      'Intersection Observer로 트리거되나요?',
      '목표값에 정확히 도달하나요?',
      '한 번만 실행되고 멈추나요?',
      '여러 카드가 동시에 카운팅되나요?'
    ]
  },

  'S070': {
    learningPoints: [
      '<strong>타이핑 효과</strong> (Typewriter Effect)',
      '<strong>setInterval</strong>로 한 글자씩 추가',
      '<strong>커서 깜빡임</strong> 애니메이션',
      '여러 문장 순환 (선택사항)'
    ],
    requirements: {
      html: [
        '텍스트를 표시할 컨테이너',
        '커서 요소 (|)',
        'data-text 속성에 전체 텍스트 저장'
      ],
      css: [
        '<strong>커서:</strong> border-right, blink 애니메이션',
        '<strong>@keyframes blink:</strong> opacity 0 ↔ 1',
        '<strong>폰트:</strong> monospace 또는 코드 스타일'
      ],
      details: [
        'setInterval로 한 글자씩 추가 (100ms 간격)',
        '전체 텍스트 완성 시 clearInterval',
        '커서는 CSS animation으로 깜빡임',
        '여러 문장 순환 시 setTimeout으로 딜레이'
      ]
    },
    styles: {
      colors: [
        { name: '텍스트', value: '#222222', desc: 'Dark' },
        { name: '커서', value: '#4F46E5', desc: 'Primary' },
        { name: '배경', value: '#F9FAFB', desc: 'Light gray' }
      ],
      typography: [
        { element: '타이핑 텍스트', style: '2rem, monospace' },
        { element: '커서', style: '2px solid, Primary' }
      ],
      spacing: [
        { element: '컨테이너 패딩', value: '60px 24px' },
        { element: '텍스트 높이', value: '80px (최소)' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="typing-container">
  <h1 class="typing-text" id="typingText"></h1>
  <span class="cursor">|</span>
</div>`
      },
      {
        step: '2단계: CSS 커서 애니메이션',
        code: `.typing-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #F9FAFB;
}

.typing-text {
  font-size: 2rem;
  font-family: 'Courier New', monospace;
  color: #222;
}

.cursor {
  font-size: 2rem;
  color: #4F46E5;
  animation: blink 0.7s infinite;
  margin-left: 4px;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}`
      },
      {
        step: '3단계: JavaScript - Typewriter',
        code: `const text = "안녕하세요, 웹 퍼블리싱 훈련입니다!";
const typingText = document.getElementById('typingText');
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // 100ms 간격
  }
}

typeWriter();

// 여러 문장 순환 (선택사항)
/*
const texts = [
  "안녕하세요!",
  "웹 퍼블리싱 훈련입니다.",
  "타이핑 효과를 만들어봅시다."
];
let textIndex = 0;

function typeText() {
  const currentText = texts[textIndex];
  let charIndex = 0;

  const typing = setInterval(() => {
    if (charIndex < currentText.length) {
      typingText.textContent += currentText.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(typing);
      setTimeout(() => {
        typingText.textContent = '';
        textIndex = (textIndex + 1) % texts.length;
        typeText();
      }, 2000);
    }
  }, 100);
}

typeText();
*/`
      }
    ],
    checklist: [
      '텍스트가 한 글자씩 타이핑되나요?',
      '커서가 깜빡이나요?',
      '타이핑 속도가 자연스러운가요?',
      '전체 텍스트가 완성되나요?',
      '커서 애니메이션이 부드러운가요?',
      '여러 문장 순환이 작동하나요? (선택사항)'
    ]
  },

  'S071': {
    learningPoints: [
      '<strong>풀스크린 섹션</strong> 레이아웃',
      '<strong>스냅 스크롤</strong> (Snap Scrolling)',
      '<strong>scroll-snap-type</strong> CSS 속성',
      '섹션별 100vh 높이'
    ],
    requirements: {
      html: [
        '4-5개의 풀스크린 섹션',
        '각 섹션마다 다른 배경색 또는 이미지',
        '섹션마다 제목과 설명'
      ],
      css: [
        '<strong>컨테이너:</strong> scroll-snap-type: y mandatory',
        '<strong>섹션:</strong> scroll-snap-align: start, height: 100vh',
        '<strong>overflow:</strong> scroll (컨테이너)',
        '<strong>섹션 스타일:</strong> 중앙 정렬, 배경'
      ],
      details: [
        'scroll-snap-type: y mandatory (세로 스크롤)',
        '각 섹션: scroll-snap-align: start',
        '스크롤 시 자동으로 섹션에 맞춰짐',
        '부드러운 스크롤: scroll-behavior: smooth'
      ]
    },
    styles: {
      colors: [
        { name: '섹션1 배경', value: '#4F46E5', desc: 'Primary' },
        { name: '섹션2 배경', value: '#10B981', desc: 'Green' },
        { name: '섹션3 배경', value: '#FF9800', desc: 'Orange' },
        { name: '텍스트', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '제목', style: '3rem, 굵게, 흰색' },
        { element: '설명', style: '1.5rem, 흰색' }
      ],
      spacing: [
        { element: '섹션 높이', value: '100vh' },
        { element: '콘텐츠 패딩', value: '48px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="snap-container">
  <section class="snap-section section1">
    <h1>첫 번째 섹션</h1>
    <p>풀스크린 스냅 스크롤</p>
  </section>
  <section class="snap-section section2">
    <h1>두 번째 섹션</h1>
    <p>자동으로 섹션에 맞춰집니다</p>
  </section>
  <section class="snap-section section3">
    <h1>세 번째 섹션</h1>
    <p>부드러운 스크롤 경험</p>
  </section>
</div>`
      },
      {
        step: '2단계: CSS - Snap Scroll',
        code: `.snap-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.snap-section {
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  color: white;
  text-align: center;
}

.section1 { background: #4F46E5; }
.section2 { background: #10B981; }
.section3 { background: #FF9800; }

.snap-section h1 {
  font-size: 3rem;
  margin-bottom: 16px;
}

.snap-section p {
  font-size: 1.5rem;
}`
      },
      {
        step: '3단계: JavaScript - 섹션 인디케이터 (선택사항)',
        code: `// 현재 섹션 표시 (선택사항)
const container = document.querySelector('.snap-container');
const sections = document.querySelectorAll('.snap-section');

container.addEventListener('scroll', () => {
  const scrollPos = container.scrollTop;
  const sectionHeight = window.innerHeight;
  const currentSection = Math.round(scrollPos / sectionHeight);

  console.log('Current section:', currentSection + 1);

  // 인디케이터 업데이트 로직
});`
      }
    ],
    checklist: [
      '각 섹션이 풀스크린(100vh)인가요?',
      '스크롤 시 섹션에 자동으로 맞춰지나요?',
      'scroll-snap-type이 올바르게 적용되었나요?',
      '부드러운 스크롤이 작동하나요?',
      '각 섹션마다 다른 배경색이 있나요?',
      '콘텐츠가 중앙 정렬되었나요?'
    ]
  },

  'S072': {
    learningPoints: [
      '<strong>분할 화면</strong> (Split Screen)',
      '<strong>좌우 50% 레이아웃</strong>',
      '<strong>Hover 시 확장</strong> 효과',
      'CSS Grid 또는 Flexbox'
    ],
    requirements: {
      html: [
        '좌/우 2개의 패널',
        '각 패널: 제목, 설명, 배경 이미지',
        '버튼 또는 링크'
      ],
      css: [
        '<strong>컨테이너:</strong> display: flex',
        '<strong>패널:</strong> flex: 1 (각각 50%)',
        '<strong>hover:</strong> flex: 2 (확장), 다른 패널 flex: 1 (축소)',
        '<strong>transition:</strong> flex 0.5s ease'
      ],
      details: [
        '기본: 각 패널 50% (flex: 1)',
        'Hover: 해당 패널 66% (flex: 2), 다른 패널 33% (flex: 1)',
        '배경 이미지 어둡게 오버레이',
        '부드러운 전환 애니메이션'
      ]
    },
    styles: {
      colors: [
        { name: '왼쪽 패널', value: '#4F46E5', desc: 'Primary' },
        { name: '오른쪽 패널', value: '#10B981', desc: 'Green' },
        { name: '오버레이', value: 'rgba(0,0,0,0.4)', desc: 'Dark overlay' },
        { name: '텍스트', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '제목', style: '2.5rem, 굵게, 흰색' },
        { element: '설명', style: '1.25rem, 흰색' }
      ],
      spacing: [
        { element: '화면 높이', value: '100vh' },
        { element: '패딩', value: '48px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="split-container">
  <div class="split-panel left">
    <div class="panel-content">
      <h2>왼쪽 패널</h2>
      <p>마우스를 올려보세요</p>
      <button>더 알아보기</button>
    </div>
  </div>
  <div class="split-panel right">
    <div class="panel-content">
      <h2>오른쪽 패널</h2>
      <p>확장 효과를 경험하세요</p>
      <button>더 알아보기</button>
    </div>
  </div>
</div>`
      },
      {
        step: '2단계: CSS - Split Layout',
        code: `.split-container {
  display: flex;
  height: 100vh;
}

.split-panel {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: flex 0.5s ease;
  color: white;
  text-align: center;
}

.split-panel::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  z-index: 0;
}

.left {
  background: linear-gradient(135deg, #4F46E5, #7C3AED);
}

.right {
  background: linear-gradient(135deg, #10B981, #059669);
}

.panel-content {
  position: relative;
  z-index: 1;
  padding: 48px;
}

.split-panel:hover {
  flex: 2;
}

.split-panel h2 {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.split-panel p {
  font-size: 1.25rem;
  margin-bottom: 24px;
}

.split-panel button {
  background: white;
  color: #222;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

.split-panel button:hover {
  transform: scale(1.05);
}`
      }
    ],
    checklist: [
      '좌우 패널이 각각 50%인가요?',
      'Hover 시 패널이 확장되나요?',
      '다른 패널은 축소되나요?',
      '부드러운 전환 애니메이션이 있나요?',
      '오버레이로 배경이 어두워졌나요?',
      '버튼 hover 효과가 있나요?'
    ]
  },

  'S073': {
    learningPoints: [
      '<strong>디자인 그리드</strong> 오버레이',
      '<strong>격자 가이드라인</strong> 표시',
      '<strong>position: fixed</strong>로 고정',
      'CSS Grid 시각화'
    ],
    requirements: {
      html: [
        '그리드 오버레이 컨테이너',
        '12개 또는 16개의 세로 컬럼',
        '토글 버튼 (그리드 표시/숨김)'
      ],
      css: [
        '<strong>오버레이:</strong> position: fixed, pointer-events: none',
        '<strong>컬럼:</strong> 세로 라인, 배경색 반투명',
        '<strong>Grid:</strong> display: grid, grid-template-columns: repeat(12, 1fr)',
        '<strong>z-index:</strong> 9999 (최상단)'
      ],
      details: [
        '12 컬럼 그리드 시스템 시각화',
        '토글 버튼으로 표시/숨김',
        'pointer-events: none (클릭 차단 안함)',
        '반투명 배경으로 컨텐츠 가이드'
      ]
    },
    styles: {
      colors: [
        { name: '그리드 라인', value: 'rgba(79, 70, 229, 0.1)', desc: 'Primary transparent' },
        { name: '그리드 테두리', value: 'rgba(79, 70, 229, 0.3)', desc: 'Primary border' },
        { name: '버튼', value: '#4F46E5', desc: 'Primary' }
      ],
      typography: [
        { element: '버튼 텍스트', style: '0.875rem, 흰색' }
      ],
      spacing: [
        { element: 'Gap', value: '24px' },
        { element: '좌우 패딩', value: '24px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<button class="grid-toggle" id="gridToggle">그리드 표시</button>

<div class="grid-overlay" id="gridOverlay">
  <div class="grid-container">
    <div class="grid-column"></div>
    <div class="grid-column"></div>
    <div class="grid-column"></div>
    <div class="grid-column"></div>
    <div class="grid-column"></div>
    <div class="grid-column"></div>
    <div class="grid-column"></div>
    <div class="grid-column"></div>
    <div class="grid-column"></div>
    <div class="grid-column"></div>
    <div class="grid-column"></div>
    <div class="grid-column"></div>
  </div>
</div>

<!-- 실제 콘텐츠 -->
<main class="content">
  <h1>디자인 그리드 예제</h1>
  <p>그리드 버튼을 눌러 가이드를 확인하세요</p>
</main>`
      },
      {
        step: '2단계: CSS - Grid Overlay',
        code: `.grid-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.grid-overlay.active {
  opacity: 1;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 0 24px;
}

.grid-column {
  background: rgba(79, 70, 229, 0.1);
  border-left: 1px solid rgba(79, 70, 229, 0.3);
  border-right: 1px solid rgba(79, 70, 229, 0.3);
}

.grid-toggle {
  position: fixed;
  top: 24px;
  right: 24px;
  background: #4F46E5;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  z-index: 10000;
  transition: 0.3s;
}

.grid-toggle:hover {
  background: #4338CA;
}`
      },
      {
        step: '3단계: JavaScript - Toggle',
        code: `const gridToggle = document.getElementById('gridToggle');
const gridOverlay = document.getElementById('gridOverlay');
let isGridVisible = false;

gridToggle.addEventListener('click', () => {
  isGridVisible = !isGridVisible;
  gridOverlay.classList.toggle('active', isGridVisible);
  gridToggle.textContent = isGridVisible ? '그리드 숨기기' : '그리드 표시';
});

// 키보드 단축키 (선택사항: G 키)
document.addEventListener('keydown', (e) => {
  if (e.key === 'g' || e.key === 'G') {
    gridToggle.click();
  }
});`
      }
    ],
    checklist: [
      '12개의 컬럼이 균등하게 나뉘나요?',
      '토글 버튼으로 표시/숨김이 되나요?',
      '그리드가 콘텐츠 클릭을 방해하지 않나요?',
      '반투명 배경이 적용되었나요?',
      '최대 너비가 제한되어 있나요?',
      '키보드 단축키가 작동하나요? (선택사항)'
    ]
  },

  'S074': {
    learningPoints: [
      '<strong>반응형 대시보드</strong> 레이아웃',
      '<strong>CSS Grid</strong> 복잡한 배치',
      '<strong>미디어 쿼리</strong>로 모바일 대응',
      '사이드바 + 메인 콘텐츠'
    ],
    requirements: {
      html: [
        '사이드바 네비게이션',
        '헤더 (검색, 알림, 프로필)',
        '대시보드 카드들 (통계, 차트 등)',
        '푸터 (선택사항)'
      ],
      css: [
        '<strong>Grid:</strong> grid-template-areas',
        '<strong>사이드바:</strong> 고정 너비 (250px)',
        '<strong>메인:</strong> 유연한 너비 (1fr)',
        '<strong>반응형:</strong> 768px 이하 사이드바 숨김'
      ],
      details: [
        'grid-template-areas로 레이아웃 정의',
        '사이드바: 네비게이션 메뉴',
        '헤더: 상단 고정',
        '모바일: 햄버거 메뉴로 사이드바 토글'
      ]
    },
    styles: {
      colors: [
        { name: '사이드바 배경', value: '#1F2937', desc: 'Dark gray' },
        { name: '헤더 배경', value: '#FFFFFF', desc: 'White' },
        { name: '메인 배경', value: '#F9FAFB', desc: 'Light gray' },
        { name: '카드 배경', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '사이드바 메뉴', style: '0.875rem, 흰색' },
        { element: '카드 제목', style: '1.25rem, 굵게' },
        { element: '통계 숫자', style: '2rem, 굵게, Primary' }
      ],
      spacing: [
        { element: '사이드바 너비', value: '250px' },
        { element: '헤더 높이', value: '64px' },
        { element: '카드 패딩', value: '24px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="dashboard">
  <aside class="sidebar">
    <h2>대시보드</h2>
    <nav>
      <a href="#" class="active">홈</a>
      <a href="#">통계</a>
      <a href="#">설정</a>
    </nav>
  </aside>

  <header class="header">
    <input type="search" placeholder="검색...">
    <div class="header-actions">
      <button>🔔</button>
      <div class="profile">프로필</div>
    </div>
  </header>

  <main class="main-content">
    <div class="dashboard-grid">
      <div class="stat-card">
        <h3>총 방문자</h3>
        <p class="stat-number">12,345</p>
      </div>
      <div class="stat-card">
        <h3>매출</h3>
        <p class="stat-number">$45,678</p>
      </div>
      <!-- 추가 카드들 -->
    </div>
  </main>
</div>`
      },
      {
        step: '2단계: CSS - Grid Layout',
        code: `.dashboard {
  display: grid;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  grid-template-columns: 250px 1fr;
  grid-template-rows: 64px 1fr;
  min-height: 100vh;
}

.sidebar {
  grid-area: sidebar;
  background: #1F2937;
  color: white;
  padding: 24px;
}

.header {
  grid-area: header;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-content {
  grid-area: main;
  background: #F9FAFB;
  padding: 24px;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.stat-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #4F46E5;
  margin-top: 8px;
}

/* 반응형 */
@media (max-width: 768px) {
  .dashboard {
    grid-template-areas:
      "header"
      "main";
    grid-template-columns: 1fr;
    grid-template-rows: 64px 1fr;
  }

  .sidebar {
    display: none; /* 모바일에서 숨김 */
  }
}`
      }
    ],
    checklist: [
      'grid-template-areas가 올바르게 설정되었나요?',
      '사이드바가 250px 고정 너비인가요?',
      '헤더가 상단에 고정되어 있나요?',
      '대시보드 카드들이 그리드로 배치되었나요?',
      '모바일에서 사이드바가 숨겨지나요?',
      '카드들이 반응형으로 재배치되나요?'
    ]
  },

  'S075': {
    learningPoints: [
      '<strong>창의적인 네비게이션</strong> 패턴',
      '<strong>원형 메뉴</strong> (Circular Menu)',
      '<strong>transform: rotate</strong>로 배치',
      'JavaScript로 메뉴 토글'
    ],
    requirements: {
      html: [
        '중앙 메인 버튼 (+)',
        '5-6개의 서브 메뉴 아이콘',
        '각 메뉴 아이템에 아이콘과 라벨'
      ],
      css: [
        '<strong>메인 버튼:</strong> 원형, 중앙 배치',
        '<strong>서브 메뉴:</strong> position: absolute, transform',
        '<strong>애니메이션:</strong> 확장/축소, rotate',
        '<strong>transition:</strong> transform 0.3s ease'
      ],
      details: [
        '메인 버튼 클릭 시 서브 메뉴 펼침',
        '서브 메뉴: 원형으로 배치 (360도 / 개수)',
        'transform: rotate + translateY로 위치 계산',
        '각 메뉴 순차적 애니메이션 (transition-delay)'
      ]
    },
    styles: {
      colors: [
        { name: '메인 버튼', value: '#4F46E5', desc: 'Primary' },
        { name: '서브 버튼', value: '#10B981', desc: 'Green' },
        { name: '아이콘', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '아이콘', style: '1.5rem, 흰색' },
        { element: '라벨', style: '0.75rem, 회색' }
      ],
      spacing: [
        { name: '메인 버튼 크기', value: '60px' },
        { name: '서브 버튼 크기', value: '50px' },
        { name: '반지름', value: '120px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="circular-menu">
  <button class="menu-toggle" id="menuToggle">+</button>
  <nav class="menu-items" id="menuItems">
    <a href="#" class="menu-item" style="--i: 0">🏠</a>
    <a href="#" class="menu-item" style="--i: 1">👤</a>
    <a href="#" class="menu-item" style="--i: 2">⚙️</a>
    <a href="#" class="menu-item" style="--i: 3">📧</a>
    <a href="#" class="menu-item" style="--i: 4">❤️</a>
  </nav>
</div>`
      },
      {
        step: '2단계: CSS - Circular Layout',
        code: `.circular-menu {
  position: fixed;
  bottom: 48px;
  right: 48px;
}

.menu-toggle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #4F46E5;
  color: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
  position: relative;
  z-index: 10;
}

.menu-toggle.active {
  transform: rotate(45deg);
}

.menu-items {
  position: absolute;
  bottom: 0;
  right: 0;
}

.menu-item {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #10B981;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  opacity: 0;
  transform: scale(0);
  bottom: 5px;
  right: 5px;
}

.menu-items.active .menu-item {
  opacity: 1;
  transform: scale(1);
}

/* 원형 배치 (5개 기준) */
.menu-items.active .menu-item:nth-child(1) {
  transform: rotate(0deg) translateY(-120px) rotate(0deg);
  transition-delay: 0.05s;
}
.menu-items.active .menu-item:nth-child(2) {
  transform: rotate(72deg) translateY(-120px) rotate(-72deg);
  transition-delay: 0.1s;
}
.menu-items.active .menu-item:nth-child(3) {
  transform: rotate(144deg) translateY(-120px) rotate(-144deg);
  transition-delay: 0.15s;
}
.menu-items.active .menu-item:nth-child(4) {
  transform: rotate(216deg) translateY(-120px) rotate(-216deg);
  transition-delay: 0.2s;
}
.menu-items.active .menu-item:nth-child(5) {
  transform: rotate(288deg) translateY(-120px) rotate(-288deg);
  transition-delay: 0.25s;
}

.menu-item:hover {
  transform: scale(1.1) !important;
  background: #059669;
}`
      },
      {
        step: '3단계: JavaScript - Toggle',
        code: `const menuToggle = document.getElementById('menuToggle');
const menuItems = document.getElementById('menuItems');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menuItems.classList.toggle('active');
});

// 외부 클릭 시 메뉴 닫기
document.addEventListener('click', (e) => {
  if (!e.target.closest('.circular-menu')) {
    menuToggle.classList.remove('active');
    menuItems.classList.remove('active');
  }
});`
      }
    ],
    checklist: [
      '메인 버튼 클릭 시 서브 메뉴가 펼쳐지나요?',
      '서브 메뉴가 원형으로 배치되었나요?',
      '각 메뉴가 순차적으로 나타나나요?',
      '메인 버튼이 45도 회전하나요?',
      '서브 메뉴 hover 효과가 있나요?',
      '외부 클릭 시 메뉴가 닫히나요?'
    ]
  },

  'S076': {
    learningPoints: [
      '<strong>드래그 앤 드롭</strong> (Drag and Drop)',
      '<strong>HTML5 Drag API</strong>',
      '<strong>Kanban 보드</strong> 스타일',
      '카드 이동과 상태 변경'
    ],
    requirements: {
      html: [
        '3개의 컬럼 (TODO, DOING, DONE)',
        '각 컬럼에 드래그 가능한 카드들',
        '카드: 제목, 설명, 태그',
        'draggable="true" 속성'
      ],
      css: [
        '<strong>컬럼:</strong> 세로 배치, 최소 높이',
        '<strong>카드:</strong> 드래그 중 opacity',
        '<strong>드롭 영역:</strong> 점선 테두리 (dragover)',
        '<strong>Grid:</strong> 3열 배치'
      ],
      details: [
        'dragstart: 드래그 시작, dataTransfer 설정',
        'dragover: 드롭 허용 (e.preventDefault())',
        'drop: 카드 이동 로직',
        'dragend: 드래그 종료 스타일 복원'
      ]
    },
    styles: {
      colors: [
        { name: 'TODO 컬럼', value: '#EF4444', desc: 'Red' },
        { name: 'DOING 컬럼', value: '#F59E0B', desc: 'Orange' },
        { name: 'DONE 컬럼', value: '#10B981', desc: 'Green' },
        { name: '카드 배경', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '카드 제목', style: '1rem, 굵게' },
        { element: '카드 설명', style: '0.875rem, 회색' },
        { element: '태그', style: '0.75rem, Primary' }
      ],
      spacing: [
        { element: '컬럼 패딩', value: '16px' },
        { element: '카드 간격', value: '12px' },
        { element: '카드 패딩', value: '16px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="kanban-board">
  <div class="column" data-status="todo">
    <h2 class="column-title">TODO</h2>
    <div class="cards-container" id="todoCards">
      <div class="card" draggable="true">
        <h3>작업 1</h3>
        <p>작업 설명입니다</p>
        <span class="tag">중요</span>
      </div>
      <!-- 더 많은 카드 -->
    </div>
  </div>

  <div class="column" data-status="doing">
    <h2 class="column-title">DOING</h2>
    <div class="cards-container" id="doingCards"></div>
  </div>

  <div class="column" data-status="done">
    <h2 class="column-title">DONE</h2>
    <div class="cards-container" id="doneCards"></div>
  </div>
</div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.kanban-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 24px;
  min-height: 100vh;
  background: #F3F4F6;
}

.column {
  background: #E5E7EB;
  border-radius: 12px;
  padding: 16px;
}

.column-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 16px;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
}

.column[data-status="todo"] .column-title { background: #FEE2E2; color: #DC2626; }
.column[data-status="doing"] .column-title { background: #FEF3C7; color: #D97706; }
.column[data-status="done"] .column-title { background: #D1FAE5; color: #059669; }

.cards-container {
  min-height: 200px;
  border-radius: 8px;
  transition: background 0.3s;
}

.cards-container.drag-over {
  background: rgba(79, 70, 229, 0.1);
  border: 2px dashed #4F46E5;
}

.card {
  background: white;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: move;
  transition: opacity 0.3s;
}

.card.dragging {
  opacity: 0.5;
}

.card h3 {
  font-size: 1rem;
  margin-bottom: 8px;
}

.card p {
  font-size: 0.875rem;
  color: #6B7280;
  margin-bottom: 12px;
}

.tag {
  display: inline-block;
  background: #EEF2FF;
  color: #4F46E5;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
}`
      },
      {
        step: '3단계: JavaScript - Drag and Drop',
        code: `let draggedCard = null;

// 모든 카드에 이벤트 리스너
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('dragstart', (e) => {
    draggedCard = card;
    card.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  });

  card.addEventListener('dragend', () => {
    card.classList.remove('dragging');
  });
});

// 모든 컨테이너에 drop 영역 설정
document.querySelectorAll('.cards-container').forEach(container => {
  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    container.classList.add('drag-over');
  });

  container.addEventListener('dragleave', () => {
    container.classList.remove('drag-over');
  });

  container.addEventListener('drop', (e) => {
    e.preventDefault();
    container.classList.remove('drag-over');

    if (draggedCard) {
      container.appendChild(draggedCard);
      draggedCard = null;
    }
  });
});`
      }
    ],
    checklist: [
      '카드를 드래그할 수 있나요?',
      '다른 컬럼으로 카드를 이동할 수 있나요?',
      '드래그 중 카드의 투명도가 변하나요?',
      '드롭 영역에 시각적 피드백이 있나요?',
      '카드 이동이 정상적으로 작동하나요?',
      '3개의 컬럼이 그리드로 배치되었나요?'
    ]
  },

  'S077': {
    learningPoints: [
      '<strong>무한 스크롤</strong> (Infinite Scroll)',
      '<strong>Intersection Observer</strong>로 감지',
      '<strong>동적 콘텐츠 로딩</strong>',
      '스크롤 페이징 구현'
    ],
    requirements: {
      html: [
        '초기 아이템 목록 (10-20개)',
        '로딩 인디케이터 (하단)',
        '센티넬 요소 (감지용)'
      ],
      css: [
        '<strong>리스트:</strong> 그리드 또는 플렉스',
        '<strong>로딩:</strong> 스피너 또는 텍스트',
        '<strong>아이템:</strong> 카드 스타일',
        '<strong>애니메이션:</strong> 페이드 인'
      ],
      details: [
        'Intersection Observer로 센티넬 감지',
        '센티넬 보이면 새 데이터 로드',
        'setTimeout으로 로딩 시뮬레이션',
        'page 변수로 페이지 추적'
      ]
    },
    styles: {
      colors: [
        { name: '카드 배경', value: '#FFFFFF', desc: 'White' },
        { name: '로딩 색상', value: '#4F46E5', desc: 'Primary' },
        { name: '배경', value: '#F9FAFB', desc: 'Light gray' }
      ],
      typography: [
        { element: '아이템 제목', style: '1.25rem, 굵게' },
        { element: '아이템 설명', style: '1rem, 회색' }
      ],
      spacing: [
        { element: '카드 패딩', value: '24px' },
        { element: '카드 간격', value: '16px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="infinite-scroll">
  <div class="items-grid" id="itemsGrid">
    <!-- 초기 아이템들 -->
    <div class="item">
      <h3>아이템 1</h3>
      <p>설명입니다</p>
    </div>
    <!-- 더 많은 아이템 -->
  </div>

  <div class="loading" id="loading">
    <div class="spinner"></div>
    <p>로딩 중...</p>
  </div>

  <div class="sentinel" id="sentinel"></div>
</div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.infinite-scroll {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  background: #F9FAFB;
  min-height: 100vh;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-bottom: 40px;
}

.item {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

.item h3 {
  font-size: 1.25rem;
  margin-bottom: 12px;
  color: #222;
}

.item p {
  color: #6B7280;
  line-height: 1.6;
}

.loading {
  text-align: center;
  padding: 40px;
  display: none;
}

.loading.active {
  display: block;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #E5E7EB;
  border-top-color: #4F46E5;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.sentinel {
  height: 1px;
}`
      },
      {
        step: '3단계: JavaScript - Infinite Scroll',
        code: `let page = 1;
let isLoading = false;

const itemsGrid = document.getElementById('itemsGrid');
const loading = document.getElementById('loading');
const sentinel = document.getElementById('sentinel');

function loadMoreItems() {
  if (isLoading) return;

  isLoading = true;
  loading.classList.add('active');

  // 로딩 시뮬레이션 (실제로는 API 호출)
  setTimeout(() => {
    page++;

    // 10개의 새 아이템 추가
    for (let i = 1; i <= 10; i++) {
      const itemNum = (page - 1) * 10 + i;
      const item = document.createElement('div');
      item.className = 'item';
      item.innerHTML = \`
        <h3>아이템 \${itemNum}</h3>
        <p>페이지 \${page}에서 로드된 아이템입니다. 스크롤을 계속하면 더 많은 아이템이 로드됩니다.</p>
      \`;
      itemsGrid.appendChild(item);
    }

    loading.classList.remove('active');
    isLoading = false;
  }, 1000);
}

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadMoreItems();
    }
  });
}, {
  rootMargin: '200px' // 200px 전에 미리 로드
});

observer.observe(sentinel);`
      }
    ],
    checklist: [
      '스크롤 하단에 도달하면 새 아이템이 로드되나요?',
      '로딩 인디케이터가 표시되나요?',
      'Intersection Observer가 올바르게 작동하나요?',
      '새 아이템이 페이드 인 되나요?',
      '중복 로딩이 방지되나요?',
      '그리드 레이아웃이 반응형인가요?'
    ]
  },

  'S078': {
    learningPoints: [
      '<strong>가상 스크롤</strong> (Virtual Scrolling)',
      '<strong>대용량 데이터</strong> 최적화',
      '<strong>보이는 영역만 렌더링</strong>',
      'scroll 이벤트 최적화'
    ],
    requirements: {
      html: [
        '스크롤 컨테이너',
        '가상 높이 설정 (전체 데이터)',
        '보이는 아이템만 렌더링'
      ],
      css: [
        '<strong>컨테이너:</strong> 고정 높이, overflow-y: scroll',
        '<strong>가상 높이:</strong> 전체 데이터 * 아이템 높이',
        '<strong>아이템:</strong> position: absolute',
        '<strong>transform:</strong> translateY로 위치 조정'
      ],
      details: [
        '10,000개 데이터 시뮬레이션',
        '보이는 영역 + 버퍼만 렌더링 (20-30개)',
        'scroll 이벤트로 표시 범위 계산',
        'requestAnimationFrame으로 최적화'
      ]
    },
    styles: {
      colors: [
        { name: '짝수 행', value: '#FFFFFF', desc: 'White' },
        { name: '홀수 행', value: '#F9FAFB', desc: 'Light gray' },
        { name: '텍스트', value: '#222222', desc: 'Dark' }
      ],
      typography: [
        { element: '아이템 텍스트', style: '1rem, 일반' }
      ],
      spacing: [
        { element: '아이템 높이', value: '50px' },
        { element: '컨테이너 높이', value: '600px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="virtual-scroll-container" id="container">
  <div class="virtual-scroll-spacer" id="spacer"></div>
  <div class="virtual-scroll-content" id="content"></div>
</div>

<div class="stats">
  <p>총 아이템: <span id="totalItems">10000</span></p>
  <p>렌더링된 아이템: <span id="renderedItems">0</span></p>
</div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.virtual-scroll-container {
  height: 600px;
  overflow-y: scroll;
  border: 2px solid #E5E7EB;
  border-radius: 8px;
  position: relative;
  background: white;
}

.virtual-scroll-spacer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  /* 높이는 JS로 동적 설정 */
}

.virtual-scroll-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.virtual-item {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid #E5E7EB;
  position: absolute;
  left: 0;
  right: 0;
}

.virtual-item:nth-child(even) {
  background: #F9FAFB;
}

.stats {
  margin-top: 24px;
  padding: 16px;
  background: #EEF2FF;
  border-radius: 8px;
  text-align: center;
}`
      },
      {
        step: '3단계: JavaScript - Virtual Scroll',
        code: `const TOTAL_ITEMS = 10000;
const ITEM_HEIGHT = 50;
const CONTAINER_HEIGHT = 600;
const BUFFER = 5; // 추가 렌더링 버퍼

const container = document.getElementById('container');
const spacer = document.getElementById('spacer');
const content = document.getElementById('content');

// 전체 높이 설정
spacer.style.height = \`\${TOTAL_ITEMS * ITEM_HEIGHT}px\`;

let ticking = false;

function renderVisibleItems() {
  const scrollTop = container.scrollTop;
  const visibleStart = Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER;
  const visibleEnd = Math.ceil((scrollTop + CONTAINER_HEIGHT) / ITEM_HEIGHT) + BUFFER;

  const start = Math.max(0, visibleStart);
  const end = Math.min(TOTAL_ITEMS, visibleEnd);

  // 기존 아이템 제거
  content.innerHTML = '';

  // 보이는 아이템만 렌더링
  for (let i = start; i < end; i++) {
    const item = document.createElement('div');
    item.className = 'virtual-item';
    item.style.transform = \`translateY(\${i * ITEM_HEIGHT}px)\`;
    item.textContent = \`아이템 #\${i + 1} - 가상 스크롤 최적화\`;
    content.appendChild(item);
  }

  // 통계 업데이트
  document.getElementById('renderedItems').textContent = end - start;

  ticking = false;
}

container.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(renderVisibleItems);
    ticking = true;
  }
});

// 초기 렌더링
renderVisibleItems();`
      }
    ],
    checklist: [
      '10,000개 아이템이 부드럽게 스크롤되나요?',
      '보이는 영역만 렌더링되나요?',
      '스크롤 성능이 최적화되었나요?',
      '통계가 정확하게 표시되나요?',
      'requestAnimationFrame으로 최적화했나요?',
      '버퍼로 깜빡임이 방지되나요?'
    ]
  },

  'S079': {
    learningPoints: [
      '<strong>리사이즈 가능 패널</strong>',
      '<strong>드래그로 크기 조절</strong>',
      '<strong>분할 레이아웃</strong>',
      'mousedown/mousemove 이벤트'
    ],
    requirements: {
      html: [
        '좌/우 또는 상/하 2개 패널',
        '리사이즈 핸들 (가운데)',
        '각 패널에 콘텐츠'
      ],
      css: [
        '<strong>컨테이너:</strong> display: flex',
        '<strong>패널:</strong> 동적 width/height',
        '<strong>핸들:</strong> 드래그 커서, 시각적 구분',
        '<strong>최소/최대:</strong> min-width, max-width'
      ],
      details: [
        'mousedown: 드래그 시작',
        'mousemove: 패널 크기 조정',
        'mouseup: 드래그 종료',
        'clientX 또는 clientY로 위치 계산'
      ]
    },
    styles: {
      colors: [
        { name: '왼쪽 패널', value: '#F9FAFB', desc: 'Light gray' },
        { name: '오른쪽 패널', value: '#FFFFFF', desc: 'White' },
        { name: '핸들', value: '#E5E7EB', desc: 'Gray' },
        { name: '핸들 hover', value: '#4F46E5', desc: 'Primary' }
      ],
      typography: [
        { element: '패널 제목', style: '1.5rem, 굵게' }
      ],
      spacing: [
        { element: '핸들 너비', value: '8px' },
        { element: '패널 패딩', value: '24px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="resizable-container">
  <div class="panel left-panel" id="leftPanel">
    <h2>왼쪽 패널</h2>
    <p>크기를 조절할 수 있습니다</p>
  </div>

  <div class="resize-handle" id="resizeHandle"></div>

  <div class="panel right-panel" id="rightPanel">
    <h2>오른쪽 패널</h2>
    <p>가운데 핸들을 드래그하세요</p>
  </div>
</div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.resizable-container {
  display: flex;
  height: 100vh;
}

.panel {
  padding: 24px;
  overflow: auto;
}

.left-panel {
  width: 50%;
  background: #F9FAFB;
  min-width: 200px;
  max-width: 80%;
}

.right-panel {
  flex: 1;
  background: white;
}

.resize-handle {
  width: 8px;
  background: #E5E7EB;
  cursor: col-resize;
  transition: background 0.3s;
  position: relative;
}

.resize-handle:hover {
  background: #4F46E5;
}

.resize-handle::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 3px;
  height: 40px;
  background: white;
  border-radius: 2px;
}

.resizable-container.resizing {
  cursor: col-resize;
  user-select: none;
}

.resizable-container.resizing .panel {
  pointer-events: none;
}`
      },
      {
        step: '3단계: JavaScript - Resize',
        code: `const container = document.querySelector('.resizable-container');
const leftPanel = document.getElementById('leftPanel');
const rightPanel = document.getElementById('rightPanel');
const resizeHandle = document.getElementById('resizeHandle');

let isResizing = false;

resizeHandle.addEventListener('mousedown', (e) => {
  isResizing = true;
  container.classList.add('resizing');
});

document.addEventListener('mousemove', (e) => {
  if (!isResizing) return;

  const containerRect = container.getBoundingClientRect();
  const newLeftWidth = e.clientX - containerRect.left;

  // 최소/최대 너비 체크
  const minWidth = 200;
  const maxWidth = containerRect.width * 0.8;

  if (newLeftWidth >= minWidth && newLeftWidth <= maxWidth) {
    leftPanel.style.width = \`\${newLeftWidth}px\`;
  }
});

document.addEventListener('mouseup', () => {
  if (isResizing) {
    isResizing = false;
    container.classList.remove('resizing');
  }
});`
      }
    ],
    checklist: [
      '핸들을 드래그하여 패널 크기를 조절할 수 있나요?',
      '최소/최대 너비가 제한되나요?',
      '드래그 중 커서가 변하나요?',
      '핸들 hover 효과가 있나요?',
      '리사이즈가 부드럽게 작동하나요?',
      '패널 콘텐츠가 오버플로우 처리되나요?'
    ]
  },

  'S080': {
    learningPoints: [
      '<strong>컨텍스트 메뉴</strong> (Context Menu)',
      '<strong>우클릭 이벤트</strong> (contextmenu)',
      '<strong>동적 위치 계산</strong>',
      '메뉴 표시/숨김 관리'
    ],
    requirements: {
      html: [
        '컨텍스트 메뉴 컨테이너',
        '메뉴 아이템 목록',
        '아이콘과 라벨',
        '구분선 (divider)'
      ],
      css: [
        '<strong>메뉴:</strong> position: fixed, 초기 display: none',
        '<strong>아이템:</strong> hover 효과',
        '<strong>그림자:</strong> box-shadow',
        '<strong>애니메이션:</strong> 페이드 인/스케일'
      ],
      details: [
        'contextmenu 이벤트로 기본 메뉴 방지',
        'e.clientX, e.clientY로 위치 설정',
        '화면 밖으로 나가지 않도록 조정',
        '외부 클릭 또는 메뉴 선택 시 닫기'
      ]
    },
    styles: {
      colors: [
        { name: '메뉴 배경', value: '#FFFFFF', desc: 'White' },
        { name: '아이템 hover', value: '#F3F4F6', desc: 'Light gray' },
        { name: '텍스트', value: '#222222', desc: 'Dark' },
        { name: '아이콘', value: '#6B7280', desc: 'Gray' }
      ],
      typography: [
        { element: '메뉴 아이템', style: '0.875rem, 일반' },
        { element: '아이콘', style: '1rem' }
      ],
      spacing: [
        { element: '메뉴 패딩', value: '8px' },
        { element: '아이템 패딩', value: '12px 16px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="context-area" id="contextArea">
  <p>이 영역에서 우클릭하세요</p>
</div>

<div class="context-menu" id="contextMenu">
  <div class="menu-item" data-action="copy">
    <span class="icon">📋</span>
    <span>복사</span>
  </div>
  <div class="menu-item" data-action="paste">
    <span class="icon">📄</span>
    <span>붙여넣기</span>
  </div>
  <div class="menu-divider"></div>
  <div class="menu-item" data-action="delete">
    <span class="icon">🗑️</span>
    <span>삭제</span>
  </div>
  <div class="menu-item" data-action="rename">
    <span class="icon">✏️</span>
    <span>이름 변경</span>
  </div>
</div>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.context-area {
  min-height: 400px;
  background: #F9FAFB;
  border: 2px dashed #D1D5DB;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: #6B7280;
  cursor: context-menu;
}

.context-menu {
  position: fixed;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  padding: 8px;
  min-width: 200px;
  display: none;
  z-index: 1000;
  transform-origin: top left;
}

.context-menu.active {
  display: block;
  animation: menuAppear 0.15s ease;
}

@keyframes menuAppear {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background 0.15s;
}

.menu-item:hover {
  background: #F3F4F6;
}

.menu-item .icon {
  font-size: 1rem;
}

.menu-divider {
  height: 1px;
  background: #E5E7EB;
  margin: 8px 0;
}`
      },
      {
        step: '3단계: JavaScript - Context Menu',
        code: `const contextArea = document.getElementById('contextArea');
const contextMenu = document.getElementById('contextMenu');

// 우클릭 이벤트
contextArea.addEventListener('contextmenu', (e) => {
  e.preventDefault();

  const { clientX, clientY } = e;

  // 메뉴 표시
  contextMenu.classList.add('active');

  // 위치 계산
  const menuWidth = contextMenu.offsetWidth;
  const menuHeight = contextMenu.offsetHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // 화면 밖으로 나가지 않도록 조정
  let x = clientX;
  let y = clientY;

  if (x + menuWidth > windowWidth) {
    x = windowWidth - menuWidth - 10;
  }

  if (y + menuHeight > windowHeight) {
    y = windowHeight - menuHeight - 10;
  }

  contextMenu.style.left = \`\${x}px\`;
  contextMenu.style.top = \`\${y}px\`;
});

// 메뉴 아이템 클릭
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    const action = item.dataset.action;
    console.log(\`Action: \${action}\`);

    // 실제 동작 구현
    switch(action) {
      case 'copy':
        alert('복사되었습니다');
        break;
      case 'paste':
        alert('붙여넣기');
        break;
      case 'delete':
        alert('삭제되었습니다');
        break;
      case 'rename':
        alert('이름 변경');
        break;
    }

    contextMenu.classList.remove('active');
  });
});

// 외부 클릭 시 메뉴 닫기
document.addEventListener('click', (e) => {
  if (!contextMenu.contains(e.target)) {
    contextMenu.classList.remove('active');
  }
});`
      }
    ],
    checklist: [
      '우클릭 시 커스텀 메뉴가 나타나나요?',
      '기본 브라우저 메뉴가 차단되나요?',
      '메뉴가 마우스 위치에 표시되나요?',
      '화면 밖으로 나가지 않도록 조정되나요?',
      '메뉴 아이템 hover 효과가 있나요?',
      '외부 클릭 시 메뉴가 닫히나요?'
    ]
  },

  'S081': {
    learningPoints: [
      '<strong>트리 뷰</strong> (Tree View)',
      '<strong>재귀적 구조</strong> 렌더링',
      '<strong>펼치기/접기</strong> 상태 관리',
      '폴더/파일 계층 구조'
    ],
    requirements: {
      html: [
        '중첩된 ul/li 구조',
        '폴더와 파일 아이콘',
        '펼치기/접기 토글 버튼',
        '들여쓰기로 계층 표시'
      ],
      css: [
        '<strong>들여쓰기:</strong> padding-left 증가',
        '<strong>아이콘:</strong> 폴더(📁), 파일(📄)',
        '<strong>토글 버튼:</strong> ▶ ▼ 회전',
        '<strong>transition:</strong> 부드러운 펼침/접힘'
      ],
      details: [
        '각 폴더에 toggle 버튼',
        '클릭 시 자식 요소 show/hide',
        'max-height transition으로 애니메이션',
        '재귀적으로 중첩된 구조 지원'
      ]
    },
    styles: {
      colors: [
        { name: '폴더', value: '#F59E0B', desc: 'Orange' },
        { name: '파일', value: '#6B7280', desc: 'Gray' },
        { name: 'hover 배경', value: '#F3F4F6', desc: 'Light gray' }
      ],
      typography: [
        { element: '항목 텍스트', style: '0.875rem, 일반' },
        { element: '아이콘', style: '1rem' }
      ],
      spacing: [
        { element: '들여쓰기', value: '20px' },
        { element: '항목 패딩', value: '8px 12px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<ul class="tree">
  <li class="tree-item">
    <span class="tree-toggle">▶</span>
    <span class="tree-label">📁 폴더 1</span>
    <ul class="tree-children">
      <li class="tree-item">
        <span class="tree-label">📄 파일 1.txt</span>
      </li>
      <li class="tree-item">
        <span class="tree-toggle">▶</span>
        <span class="tree-label">📁 하위 폴더</span>
        <ul class="tree-children">
          <li class="tree-item">
            <span class="tree-label">📄 파일 2.txt</span>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>`
      },
      {
        step: '2단계: CSS 스타일',
        code: `.tree {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tree-item {
  margin: 4px 0;
}

.tree-toggle {
  display: inline-block;
  width: 16px;
  cursor: pointer;
  transition: transform 0.3s;
  user-select: none;
}

.tree-toggle.open {
  transform: rotate(90deg);
}

.tree-label {
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s;
}

.tree-label:hover {
  background: #F3F4F6;
}

.tree-children {
  list-style: none;
  padding-left: 20px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.tree-children.open {
  max-height: 1000px;
}`
      },
      {
        step: '3단계: JavaScript',
        code: `document.querySelectorAll('.tree-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();

    const item = toggle.closest('.tree-item');
    const children = item.querySelector('.tree-children');

    if (children) {
      toggle.classList.toggle('open');
      children.classList.toggle('open');
    }
  });
});`
      }
    ],
    checklist: [
      '폴더를 클릭하면 하위 항목이 펼쳐지나요?',
      '토글 아이콘이 회전하나요?',
      '들여쓰기로 계층이 명확한가요?',
      '폴더와 파일 아이콘이 구분되나요?',
      'hover 효과가 있나요?',
      '중첩된 폴더 구조가 작동하나요?'
    ]
  },

  'S082': {
    learningPoints: [
      '<strong>데이터 테이블</strong>',
      '<strong>정렬</strong> (Sort)',
      '<strong>필터링</strong> (Filter)',
      '<strong>페이징</strong> (Pagination)'
    ],
    requirements: {
      html: [
        'table 태그로 구조 작성',
        '정렬 가능한 헤더',
        '검색 입력 필드',
        '페이지네이션 컨트롤'
      ],
      css: [
        '<strong>테이블:</strong> border-collapse, 줄무늬',
        '<strong>헤더:</strong> 클릭 가능, 정렬 아이콘',
        '<strong>행 hover:</strong> 배경색 변경'
      ],
      details: [
        '헤더 클릭 시 오름차순/내림차순 정렬',
        '검색어 입력 시 실시간 필터링',
        '페이지당 10개 항목 표시',
        'Array sort() 메서드 활용'
      ]
    },
    styles: {
      colors: [
        { name: '헤더 배경', value: '#F3F4F6', desc: 'Light gray' },
        { name: '짝수 행', value: '#FFFFFF', desc: 'White' },
        { name: '홀수 행', value: '#F9FAFB', desc: 'Very light gray' },
        { name: 'hover 행', value: '#EEF2FF', desc: 'Light blue' }
      ],
      typography: [
        { element: '헤더', style: '0.875rem, 굵게' },
        { element: '셀', style: '0.875rem, 일반' }
      ],
      spacing: [
        { element: '셀 패딩', value: '12px 16px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML 구조',
        code: `<div class="table-container">
  <input type="text" id="searchInput" placeholder="검색...">

  <table class="data-table">
    <thead>
      <tr>
        <th data-column="name">이름 ▲</th>
        <th data-column="email">이메일 ▲</th>
        <th data-column="role">역할 ▲</th>
      </tr>
    </thead>
    <tbody id="tableBody">
      <!-- 데이터 행들 -->
    </tbody>
  </table>

  <div class="pagination" id="pagination"></div>
</div>`
      },
      {
        step: '2단계: JavaScript - 정렬 & 필터',
        code: `const data = [
  { name: '홍길동', email: 'hong@example.com', role: '개발자' },
  { name: '김철수', email: 'kim@example.com', role: '디자이너' },
  // 더 많은 데이터...
];

let currentPage = 1;
let itemsPerPage = 10;
let currentSort = { column: 'name', order: 'asc' };
let filteredData = [...data];

// 정렬
function sortData(column) {
  if (currentSort.column === column) {
    currentSort.order = currentSort.order === 'asc' ? 'desc' : 'asc';
  } else {
    currentSort.column = column;
    currentSort.order = 'asc';
  }

  filteredData.sort((a, b) => {
    const aVal = a[column];
    const bVal = b[column];

    if (currentSort.order === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  renderTable();
}

// 검색 필터
document.getElementById('searchInput').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  filteredData = data.filter(item =>
    Object.values(item).some(val =>
      val.toLowerCase().includes(query)
    )
  );
  currentPage = 1;
  renderTable();
});

// 테이블 렌더링
function renderTable() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageData = filteredData.slice(start, end);

  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = pageData.map(item => \`
    <tr>
      <td>\${item.name}</td>
      <td>\${item.email}</td>
      <td>\${item.role}</td>
    </tr>
  \`).join('');

  renderPagination();
}

// 페이지네이션
function renderPagination() {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const pagination = document.getElementById('pagination');

  pagination.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.className = i === currentPage ? 'active' : '';
    btn.onclick = () => {
      currentPage = i;
      renderTable();
    };
    pagination.appendChild(btn);
  }
}

renderTable();`
      }
    ],
    checklist: [
      '헤더 클릭 시 정렬이 되나요?',
      '검색 시 실시간 필터링이 되나요?',
      '페이지네이션이 작동하나요?',
      '행에 hover 효과가 있나요?',
      '정렬 방향 표시가 있나요?',
      '데이터가 정확하게 표시되나요?'
    ]
  },

  'S083': {
    learningPoints: [
      '<strong>Canvas API</strong> 활용',
      '<strong>차트 그리기</strong> (Bar/Line)',
      '데이터 시각화',
      'Canvas 좌표 계산'
    ],
    requirements: {
      html: [
        'canvas 태그',
        '범례 (Legend)',
        '데이터 라벨'
      ],
      css: [
        '<strong>캔버스:</strong> 고정 크기',
        '<strong>범례:</strong> 색상 표시'
      ],
      details: [
        'canvas 2D context 사용',
        '막대 그래프 또는 선 그래프',
        '데이터 값에 따라 높이 계산',
        'fillRect(), strokeRect() 사용'
      ]
    },
    styles: {
      colors: [
        { name: '막대1', value: '#4F46E5', desc: 'Primary' },
        { name: '막대2', value: '#10B981', desc: 'Green' },
        { name: '막대3', value: '#F59E0B', desc: 'Orange' }
      ],
      typography: [
        { element: '라벨', style: '12px, sans-serif' }
      ],
      spacing: [
        { element: '캔버스 크기', value: '600x400' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<div class="chart-container">
  <canvas id="myChart" width="600" height="400"></canvas>
  <div class="legend" id="legend"></div>
</div>`
      },
      {
        step: '2단계: JavaScript - Bar Chart',
        code: `const canvas = document.getElementById('myChart');
const ctx = canvas.getContext('2d');

const data = [
  { label: '1월', value: 65, color: '#4F46E5' },
  { label: '2월', value: 59, color: '#10B981' },
  { label: '3월', value: 80, color: '#F59E0B' },
  { label: '4월', value: 81, color: '#EF4444' },
  { label: '5월', value: 56, color: '#8B5CF6' }
];

const padding = 40;
const chartWidth = canvas.width - padding * 2;
const chartHeight = canvas.height - padding * 2;
const barWidth = chartWidth / data.length - 10;
const maxValue = Math.max(...data.map(d => d.value));

// 배경
ctx.fillStyle = '#F9FAFB';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 막대 그리기
data.forEach((item, i) => {
  const x = padding + i * (barWidth + 10);
  const barHeight = (item.value / maxValue) * chartHeight;
  const y = canvas.height - padding - barHeight;

  // 막대
  ctx.fillStyle = item.color;
  ctx.fillRect(x, y, barWidth, barHeight);

  // 라벨
  ctx.fillStyle = '#222';
  ctx.font = '12px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(item.label, x + barWidth / 2, canvas.height - padding + 20);

  // 값
  ctx.fillText(item.value, x + barWidth / 2, y - 10);
});

// 축
ctx.strokeStyle = '#D1D5DB';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(padding, padding);
ctx.lineTo(padding, canvas.height - padding);
ctx.lineTo(canvas.width - padding, canvas.height - padding);
ctx.stroke();`
      }
    ],
    checklist: [
      'Canvas에 차트가 그려지나요?',
      '데이터 값에 따라 높이가 다른가요?',
      '라벨과 값이 표시되나요?',
      '색상이 구분되나요?',
      '축이 그려져 있나요?',
      '비율이 정확한가요?'
    ]
  },

  'S084': {
    learningPoints: [
      '<strong>코드 에디터 UI</strong>',
      '<strong>신택스 하이라이팅</strong>',
      '<strong>줄 번호</strong> 표시',
      'contenteditable 활용'
    ],
    requirements: {
      html: [
        '줄 번호 영역',
        '코드 입력 영역 (textarea 또는 contenteditable)',
        '언어 선택 드롭다운'
      ],
      css: [
        '<strong>monospace 폰트:</strong> Consolas, Monaco',
        '<strong>줄 번호:</strong> 고정 너비',
        '<strong>스크롤 동기화</strong>'
      ],
      details: [
        'textarea의 줄 수만큼 줄 번호 생성',
        '간단한 키워드 하이라이팅 (정규식)',
        '탭 키 지원 (들여쓰기)',
        '스크롤 동기화'
      ]
    },
    styles: {
      colors: [
        { name: '배경', value: '#1E293B', desc: 'Dark' },
        { name: '텍스트', value: '#E2E8F0', desc: 'Light' },
        { name: '키워드', value: '#F472B6', desc: 'Pink' },
        { name: '문자열', value: '#34D399', desc: 'Green' },
        { name: '줄번호', value: '#64748B', desc: 'Gray' }
      ],
      typography: [
        { element: '코드', style: '14px, Consolas, monospace' }
      ],
      spacing: [
        { element: '줄 높이', value: '1.5' },
        { element: '패딩', value: '16px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<div class="code-editor">
  <div class="line-numbers" id="lineNumbers"></div>
  <textarea id="codeInput" spellcheck="false"></textarea>
</div>`
      },
      {
        step: '2단계: CSS',
        code: `.code-editor {
  display: flex;
  background: #1E293B;
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 14px;
}

.line-numbers {
  background: #0F172A;
  color: #64748B;
  padding: 16px 8px;
  text-align: right;
  user-select: none;
  min-width: 40px;
  line-height: 1.5;
}

#codeInput {
  flex: 1;
  background: #1E293B;
  color: #E2E8F0;
  border: none;
  outline: none;
  padding: 16px;
  resize: none;
  line-height: 1.5;
  font-family: inherit;
  font-size: inherit;
}`
      },
      {
        step: '3단계: JavaScript',
        code: `const codeInput = document.getElementById('codeInput');
const lineNumbers = document.getElementById('lineNumbers');

function updateLineNumbers() {
  const lines = codeInput.value.split('\\n').length;
  lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join('\\n');
}

codeInput.addEventListener('input', updateLineNumbers);
codeInput.addEventListener('scroll', () => {
  lineNumbers.scrollTop = codeInput.scrollTop;
});

// 탭 키 지원
codeInput.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = codeInput.selectionStart;
    const end = codeInput.selectionEnd;
    codeInput.value = codeInput.value.substring(0, start) + '  ' + codeInput.value.substring(end);
    codeInput.selectionStart = codeInput.selectionEnd = start + 2;
    updateLineNumbers();
  }
});

updateLineNumbers();`
      }
    ],
    checklist: [
      '줄 번호가 표시되나요?',
      '스크롤이 동기화되나요?',
      '탭 키가 작동하나요?',
      'monospace 폰트가 적용되었나요?',
      '코드 입력이 자연스러운가요?',
      '다크 테마가 적용되었나요?'
    ]
  },

  'S085': {
    learningPoints: [
      '<strong>이미지 크롭</strong> 도구',
      '<strong>드래그로 영역 선택</strong>',
      'Canvas로 크롭 처리',
      'mousedown/mousemove 이벤트'
    ],
    requirements: {
      html: [
        '이미지 표시 영역',
        '크롭 영역 오버레이',
        '크롭 버튼',
        '미리보기 캔버스'
      ],
      css: [
        '<strong>크롭 영역:</strong> 점선 테두리',
        '<strong>오버레이:</strong> 반투명 배경',
        '<strong>핸들:</strong> 모서리 리사이즈'
      ],
      details: [
        'mousedown: 크롭 영역 시작',
        'mousemove: 영역 크기 조정',
        'mouseup: 크롭 완료',
        'canvas drawImage()로 크롭된 이미지 생성'
      ]
    },
    styles: {
      colors: [
        { name: '크롭 테두리', value: '#4F46E5', desc: 'Primary' },
        { name: '오버레이', value: 'rgba(0,0,0,0.5)', desc: 'Dark transparent' }
      ],
      typography: [],
      spacing: []
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<div class="image-cropper">
  <div class="crop-container" id="cropContainer">
    <img id="sourceImage" src="image.jpg">
    <div class="crop-area" id="cropArea"></div>
  </div>
  <button id="cropButton">크롭하기</button>
  <canvas id="resultCanvas"></canvas>
</div>`
      },
      {
        step: '2단계: JavaScript - Crop',
        code: `const container = document.getElementById('cropContainer');
const cropArea = document.getElementById('cropArea');
const sourceImage = document.getElementById('sourceImage');
const resultCanvas = document.getElementById('resultCanvas');
const ctx = resultCanvas.getContext('2d');

let isDragging = false;
let startX, startY;

container.addEventListener('mousedown', (e) => {
  const rect = container.getBoundingClientRect();
  startX = e.clientX - rect.left;
  startY = e.clientY - rect.top;

  cropArea.style.left = startX + 'px';
  cropArea.style.top = startY + 'px';
  cropArea.style.width = '0px';
  cropArea.style.height = '0px';
  cropArea.style.display = 'block';

  isDragging = true;
});

container.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const rect = container.getBoundingClientRect();
  const currentX = e.clientX - rect.left;
  const currentY = e.clientY - rect.top;

  const width = currentX - startX;
  const height = currentY - startY;

  cropArea.style.width = Math.abs(width) + 'px';
  cropArea.style.height = Math.abs(height) + 'px';
  cropArea.style.left = (width < 0 ? currentX : startX) + 'px';
  cropArea.style.top = (height < 0 ? currentY : startY) + 'px';
});

container.addEventListener('mouseup', () => {
  isDragging = false;
});

document.getElementById('cropButton').addEventListener('click', () => {
  const cropRect = cropArea.getBoundingClientRect();
  const imgRect = sourceImage.getBoundingClientRect();

  const scaleX = sourceImage.naturalWidth / imgRect.width;
  const scaleY = sourceImage.naturalHeight / imgRect.height;

  const cropX = (cropRect.left - imgRect.left) * scaleX;
  const cropY = (cropRect.top - imgRect.top) * scaleY;
  const cropWidth = cropRect.width * scaleX;
  const cropHeight = cropRect.height * scaleY;

  resultCanvas.width = cropWidth;
  resultCanvas.height = cropHeight;

  ctx.drawImage(sourceImage, cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
});`
      }
    ],
    checklist: [
      '드래그로 크롭 영역을 선택할 수 있나요?',
      '크롭 버튼 클릭 시 이미지가 잘리나요?',
      '크롭된 이미지가 캔버스에 표시되나요?',
      '비율이 정확하게 유지되나요?',
      '크롭 영역이 시각적으로 명확한가요?'
    ]
  },

  'S086': {
    learningPoints: [
      '<strong>결제 폼</strong>',
      '<strong>카드 번호 포맷팅</strong>',
      '<strong>유효성 검사</strong>',
      'Luhn 알고리즘 (선택사항)'
    ],
    requirements: {
      html: [
        '카드 번호 입력 (16자리)',
        '만료일 (MM/YY)',
        'CVV (3자리)',
        '카드 소지자 이름'
      ],
      css: [
        '<strong>카드 미리보기:</strong> 실제 카드 모양',
        '<strong>입력 필드:</strong> 포맷팅',
        '<strong>에러 메시지:</strong> 빨간색'
      ],
      details: [
        '카드 번호 자동 포맷 (4자리마다 공백)',
        '만료일 자동 슬래시 삽입',
        '유효성 검사: 빈 값, 형식',
        '카드 타입 감지 (Visa, MasterCard)'
      ]
    },
    styles: {
      colors: [
        { name: '카드 배경', value: 'linear-gradient(135deg, #667eea, #764ba2)', desc: 'Gradient' },
        { name: '입력 테두리', value: '#D1D5DB', desc: 'Gray' },
        { name: '에러', value: '#EF4444', desc: 'Red' }
      ],
      typography: [
        { element: '카드 번호', style: '1.25rem, monospace' },
        { element: '라벨', style: '0.875rem, 굵게' }
      ],
      spacing: [
        { element: '카드 크기', value: '340x200px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<form class="payment-form">
  <div class="card-preview">
    <div class="card-number" id="cardNumberDisplay">•••• •••• •••• ••••</div>
    <div class="card-info">
      <span id="cardNameDisplay">CARD HOLDER</span>
      <span id="cardExpiryDisplay">MM/YY</span>
    </div>
  </div>

  <div class="form-group">
    <label>카드 번호</label>
    <input type="text" id="cardNumber" maxlength="19" placeholder="1234 5678 9012 3456">
  </div>

  <div class="form-row">
    <div class="form-group">
      <label>만료일</label>
      <input type="text" id="expiry" maxlength="5" placeholder="MM/YY">
    </div>
    <div class="form-group">
      <label>CVV</label>
      <input type="text" id="cvv" maxlength="3" placeholder="123">
    </div>
  </div>

  <div class="form-group">
    <label>카드 소지자</label>
    <input type="text" id="cardName" placeholder="HONG GIL DONG">
  </div>

  <button type="submit">결제하기</button>
</form>`
      },
      {
        step: '2단계: JavaScript - 포맷팅',
        code: `const cardNumberInput = document.getElementById('cardNumber');
const expiryInput = document.getElementById('expiry');
const cvvInput = document.getElementById('cvv');
const cardNameInput = document.getElementById('cardName');

// 카드 번호 포맷팅
cardNumberInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\\s/g, '');
  let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
  e.target.value = formattedValue;
  document.getElementById('cardNumberDisplay').textContent = formattedValue || '•••• •••• •••• ••••';
});

// 만료일 포맷팅
expiryInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\\//g, '');
  if (value.length >= 2) {
    value = value.slice(0, 2) + '/' + value.slice(2);
  }
  e.target.value = value;
  document.getElementById('cardExpiryDisplay').textContent = value || 'MM/YY';
});

// CVV (숫자만)
cvvInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\\D/g, '');
});

// 카드 소지자 이름
cardNameInput.addEventListener('input', (e) => {
  document.getElementById('cardNameDisplay').textContent = e.target.value.toUpperCase() || 'CARD HOLDER';
});

// 유효성 검사
document.querySelector('.payment-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const cardNumber = cardNumberInput.value.replace(/\\s/g, '');
  const expiry = expiryInput.value;
  const cvv = cvvInput.value;
  const name = cardNameInput.value;

  if (cardNumber.length !== 16) {
    alert('카드 번호는 16자리여야 합니다');
    return;
  }

  if (!/^\\d{2}\\/\\d{2}$/.test(expiry)) {
    alert('만료일 형식이 올바르지 않습니다');
    return;
  }

  if (cvv.length !== 3) {
    alert('CVV는 3자리여야 합니다');
    return;
  }

  if (!name.trim()) {
    alert('카드 소지자 이름을 입력하세요');
    return;
  }

  alert('결제가 완료되었습니다!');
});`
      }
    ],
    checklist: [
      '카드 번호가 자동 포맷팅되나요?',
      '만료일에 슬래시가 자동 삽입되나요?',
      '카드 미리보기가 실시간 업데이트되나요?',
      '유효성 검사가 작동하나요?',
      'CVV는 숫자만 입력되나요?',
      '카드 소지자 이름이 대문자로 표시되나요?'
    ]
  },

  'S087': {
    learningPoints: [
      '<strong>WYSIWYG 에디터</strong>',
      '<strong>contenteditable</strong> 활용',
      '<strong>document.execCommand()</strong>',
      '텍스트 포맷팅 도구'
    ],
    requirements: {
      html: [
        '도구 모음 (굵게, 기울임, 밑줄 등)',
        'contenteditable 편집 영역',
        '미리보기 모드'
      ],
      css: [
        '<strong>도구 모음:</strong> 아이콘 버튼',
        '<strong>편집 영역:</strong> 테두리, 패딩',
        '<strong>버튼 active 상태</strong>'
      ],
      details: [
        'execCommand("bold"), execCommand("italic")',
        'execCommand("insertUnorderedList")',
        '색상 선택, 링크 삽입',
        'getSelection()으로 현재 상태 감지'
      ]
    },
    styles: {
      colors: [
        { name: '도구 모음', value: '#F3F4F6', desc: 'Light gray' },
        { name: 'active 버튼', value: '#4F46E5', desc: 'Primary' }
      ],
      typography: [
        { element: '에디터 텍스트', style: '1rem, line-height 1.6' }
      ],
      spacing: [
        { element: '에디터 패딩', value: '16px' },
        { element: '최소 높이', value: '300px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<div class="wysiwyg-editor">
  <div class="toolbar">
    <button onclick="format('bold')" title="굵게"><b>B</b></button>
    <button onclick="format('italic')" title="기울임"><i>I</i></button>
    <button onclick="format('underline')" title="밑줄"><u>U</u></button>
    <button onclick="format('insertUnorderedList')" title="목록">•</button>
    <button onclick="format('insertOrderedList')" title="번호 목록">1.</button>
    <button onclick="createLink()" title="링크">🔗</button>
  </div>
  <div class="editor-area" id="editor" contenteditable="true">
    <p>여기에 텍스트를 입력하세요...</p>
  </div>
</div>`
      },
      {
        step: '2단계: JavaScript',
        code: `function format(command, value = null) {
  document.execCommand(command, false, value);
  document.getElementById('editor').focus();
}

function createLink() {
  const url = prompt('링크 URL을 입력하세요:');
  if (url) {
    format('createLink', url);
  }
}

// 텍스트 색상
function changeColor() {
  const color = prompt('색상 코드를 입력하세요 (예: #FF0000):');
  if (color) {
    format('foreColor', color);
  }
}

// 현재 포맷 상태 감지
document.getElementById('editor').addEventListener('mouseup', updateToolbar);
document.getElementById('editor').addEventListener('keyup', updateToolbar);

function updateToolbar() {
  const commands = ['bold', 'italic', 'underline'];
  commands.forEach(cmd => {
    const isActive = document.queryCommandState(cmd);
    const button = document.querySelector(\`button[onclick="format('\${cmd}')"]\`);
    if (button) {
      button.style.background = isActive ? '#4F46E5' : '';
      button.style.color = isActive ? 'white' : '';
    }
  });
}`
      }
    ],
    checklist: [
      '굵게, 기울임, 밑줄이 작동하나요?',
      '목록 삽입이 되나요?',
      '링크 삽입이 되나요?',
      '도구 버튼의 active 상태가 표시되나요?',
      '텍스트 편집이 자연스러운가요?',
      'HTML 출력이 올바른가요?'
    ]
  },

  'S088': {
    learningPoints: [
      '<strong>자동완성 검색</strong>',
      '<strong>디바운싱</strong> (Debouncing)',
      '<strong>추천 검색어</strong> 표시',
      '키보드 네비게이션'
    ],
    requirements: {
      html: [
        '검색 입력 필드',
        '추천 검색어 드롭다운',
        '검색 버튼'
      ],
      css: [
        '<strong>드롭다운:</strong> position: absolute',
        '<strong>항목 hover:</strong> 배경색',
        '<strong>선택된 항목:</strong> 강조'
      ],
      details: [
        '입력 시 300ms 디바운싱',
        '필터링된 추천어 목록 표시',
        '방향키로 항목 선택',
        'Enter로 선택 확정'
      ]
    },
    styles: {
      colors: [
        { name: '드롭다운 배경', value: '#FFFFFF', desc: 'White' },
        { name: 'hover 배경', value: '#F3F4F6', desc: 'Light gray' },
        { name: '선택 배경', value: '#EEF2FF', desc: 'Light blue' }
      ],
      typography: [
        { element: '검색어', style: '1rem' },
        { element: '추천어', style: '0.875rem' }
      ],
      spacing: [
        { element: '항목 패딩', value: '12px 16px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<div class="autocomplete-search">
  <input type="text" id="searchInput" placeholder="검색어를 입력하세요">
  <ul class="suggestions" id="suggestions"></ul>
</div>`
      },
      {
        step: '2단계: JavaScript',
        code: `const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');

const data = [
  '자바스크립트', '자바', '파이썬', '타입스크립트',
  'React', 'Vue', 'Angular', 'Node.js',
  'HTML', 'CSS', 'Sass', 'Tailwind CSS'
];

let debounceTimer;
let selectedIndex = -1;

searchInput.addEventListener('input', (e) => {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    const query = e.target.value.toLowerCase();

    if (!query) {
      suggestions.innerHTML = '';
      suggestions.style.display = 'none';
      return;
    }

    const filtered = data.filter(item =>
      item.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      suggestions.innerHTML = '<li class="no-results">결과 없음</li>';
      suggestions.style.display = 'block';
      return;
    }

    suggestions.innerHTML = filtered.map(item =>
      \`<li class="suggestion-item">\${item}</li>\`
    ).join('');
    suggestions.style.display = 'block';
    selectedIndex = -1;

    // 클릭 이벤트
    document.querySelectorAll('.suggestion-item').forEach((item, i) => {
      item.addEventListener('click', () => {
        searchInput.value = item.textContent;
        suggestions.innerHTML = '';
        suggestions.style.display = 'none';
      });
    });
  }, 300);
});

// 키보드 네비게이션
searchInput.addEventListener('keydown', (e) => {
  const items = suggestions.querySelectorAll('.suggestion-item');

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
    updateSelection(items);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    selectedIndex = Math.max(selectedIndex - 1, -1);
    updateSelection(items);
  } else if (e.key === 'Enter' && selectedIndex >= 0) {
    e.preventDefault();
    searchInput.value = items[selectedIndex].textContent;
    suggestions.innerHTML = '';
    suggestions.style.display = 'none';
  }
});

function updateSelection(items) {
  items.forEach((item, i) => {
    item.classList.toggle('selected', i === selectedIndex);
  });
}

// 외부 클릭 시 닫기
document.addEventListener('click', (e) => {
  if (!e.target.closest('.autocomplete-search')) {
    suggestions.style.display = 'none';
  }
});`
      }
    ],
    checklist: [
      '입력 시 추천 검색어가 표시되나요?',
      '디바운싱이 적용되었나요?',
      '방향키로 항목 선택이 가능한가요?',
      'Enter로 선택 확정이 되나요?',
      '클릭으로도 선택이 되나요?',
      '외부 클릭 시 드롭다운이 닫히나요?'
    ]
  },

  'S089': {
    learningPoints: [
      '<strong>폼 빌더</strong>',
      '<strong>동적 필드 추가</strong>',
      'JSON 데이터 구조',
      '드래그 앤 드롭 (선택사항)'
    ],
    requirements: {
      html: [
        '필드 타입 선택 (텍스트, 이메일, 체크박스 등)',
        '필드 추가 버튼',
        '미리보기 영역',
        '폼 데이터 출력'
      ],
      css: [
        '<strong>필드 목록:</strong> 카드 스타일',
        '<strong>삭제 버튼:</strong> 각 필드마다'
      ],
      details: [
        '필드 추가 시 동적으로 DOM 생성',
        '각 필드 설정 (라벨, placeholder, 필수 여부)',
        '필드 순서 변경 (드래그)',
        'JSON으로 폼 구조 저장'
      ]
    },
    styles: {
      colors: [
        { name: '필드 배경', value: '#FFFFFF', desc: 'White' },
        { name: '추가 버튼', value: '#4F46E5', desc: 'Primary' },
        { name: '삭제 버튼', value: '#EF4444', desc: 'Red' }
      ],
      typography: [],
      spacing: [
        { element: '필드 간격', value: '16px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<div class="form-builder">
  <div class="builder-controls">
    <select id="fieldType">
      <option value="text">텍스트</option>
      <option value="email">이메일</option>
      <option value="number">숫자</option>
      <option value="textarea">긴 텍스트</option>
      <option value="checkbox">체크박스</option>
    </select>
    <button onclick="addField()">필드 추가</button>
  </div>

  <div class="form-preview" id="formPreview"></div>

  <button onclick="exportForm()">JSON 출력</button>
</div>`
      },
      {
        step: '2단계: JavaScript',
        code: `let fields = [];
let fieldIdCounter = 0;

function addField() {
  const type = document.getElementById('fieldType').value;
  const label = prompt('필드 라벨:') || '새 필드';

  const field = {
    id: fieldIdCounter++,
    type: type,
    label: label,
    required: confirm('필수 입력 필드인가요?')
  };

  fields.push(field);
  renderForm();
}

function removeField(id) {
  fields = fields.filter(f => f.id !== id);
  renderForm();
}

function renderForm() {
  const preview = document.getElementById('formPreview');

  preview.innerHTML = fields.map(field => \`
    <div class="form-field" data-id="\${field.id}">
      <label>
        \${field.label}
        \${field.required ? '<span style="color: red">*</span>' : ''}
      </label>
      \${renderInput(field)}
      <button onclick="removeField(\${field.id})" class="delete-btn">삭제</button>
    </div>
  \`).join('');
}

function renderInput(field) {
  switch(field.type) {
    case 'textarea':
      return \`<textarea placeholder="\${field.label}" \${field.required ? 'required' : ''}></textarea>\`;
    case 'checkbox':
      return \`<input type="checkbox" \${field.required ? 'required' : ''}>\`;
    default:
      return \`<input type="\${field.type}" placeholder="\${field.label}" \${field.required ? 'required' : ''}>\`;
  }
}

function exportForm() {
  const json = JSON.stringify(fields, null, 2);
  alert(json);
  console.log(json);
}`
      }
    ],
    checklist: [
      '필드를 동적으로 추가할 수 있나요?',
      '다양한 필드 타입이 지원되나요?',
      '필드 삭제가 되나요?',
      '필수 입력 표시가 있나요?',
      'JSON으로 출력이 되나요?',
      '미리보기가 정확한가요?'
    ]
  },

  'S090': {
    learningPoints: [
      '<strong>서명 패드</strong>',
      '<strong>Canvas 드로잉</strong>',
      '<strong>터치/마우스 이벤트</strong>',
      '서명 저장 (이미지)'
    ],
    requirements: {
      html: [
        'canvas 태그',
        '지우기 버튼',
        '저장 버튼'
      ],
      css: [
        '<strong>캔버스:</strong> 테두리',
        '<strong>버튼:</strong> 하단 배치'
      ],
      details: [
        'mousedown/touchstart: 그리기 시작',
        'mousemove/touchmove: 선 그리기',
        'mouseup/touchend: 그리기 종료',
        'canvas.toDataURL()로 이미지 저장'
      ]
    },
    styles: {
      colors: [
        { name: '캔버스 배경', value: '#FFFFFF', desc: 'White' },
        { name: '선 색상', value: '#000000', desc: 'Black' }
      ],
      typography: [],
      spacing: [
        { element: '캔버스 크기', value: '500x300' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<div class="signature-pad">
  <canvas id="signatureCanvas" width="500" height="300"></canvas>
  <div class="controls">
    <button onclick="clearSignature()">지우기</button>
    <button onclick="saveSignature()">저장</button>
  </div>
  <img id="savedSignature" style="display: none;">
</div>`
      },
      {
        step: '2단계: JavaScript',
        code: `const canvas = document.getElementById('signatureCanvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// 캔버스 배경
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 선 스타일
ctx.strokeStyle = '#000';
ctx.lineWidth = 2;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

// 마우스 이벤트
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// 터치 이벤트
canvas.addEventListener('touchstart', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  lastX = touch.clientX - rect.left;
  lastY = touch.clientY - rect.top;
  isDrawing = true;
});

canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  if (!isDrawing) return;

  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();

  lastX = x;
  lastY = y;
});

canvas.addEventListener('touchend', () => {
  isDrawing = false;
});

function startDrawing(e) {
  isDrawing = true;
  const rect = canvas.getBoundingClientRect();
  lastX = e.clientX - rect.left;
  lastY = e.clientY - rect.top;
}

function draw(e) {
  if (!isDrawing) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();

  lastX = x;
  lastY = y;
}

function stopDrawing() {
  isDrawing = false;
}

function clearSignature() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function saveSignature() {
  const dataURL = canvas.toDataURL('image/png');
  const img = document.getElementById('savedSignature');
  img.src = dataURL;
  img.style.display = 'block';

  // 다운로드 링크 생성
  const link = document.createElement('a');
  link.download = 'signature.png';
  link.href = dataURL;
  link.click();
}`
      }
    ],
    checklist: [
      '마우스로 서명을 그릴 수 있나요?',
      '터치로도 작동하나요?',
      '지우기 버튼이 작동하나요?',
      '서명을 이미지로 저장할 수 있나요?',
      '선이 부드럽게 그려지나요?',
      '캔버스 배경이 흰색인가요?'
    ]
  },

  'S091': {
    learningPoints: [
      '<strong>비디오 랜딩 페이지</strong>',
      '<strong>풀스크린 배경 비디오</strong>',
      '<strong>video 태그</strong>',
      '오버레이와 CTA'
    ],
    requirements: {
      html: [
        'video 태그 (autoplay, loop, muted)',
        '오버레이 콘텐츠',
        'CTA 버튼'
      ],
      css: [
        '<strong>비디오:</strong> object-fit: cover, 100vw x 100vh',
        '<strong>오버레이:</strong> position: absolute, z-index',
        '<strong>콘텐츠:</strong> 중앙 정렬'
      ],
      details: [
        'video autoplay muted loop',
        '비디오가 화면 전체를 덮도록',
        '어두운 오버레이로 텍스트 가독성',
        'CTA 버튼 강조'
      ]
    },
    styles: {
      colors: [
        { name: '오버레이', value: 'rgba(0,0,0,0.5)', desc: 'Dark transparent' },
        { name: '텍스트', value: '#FFFFFF', desc: 'White' },
        { name: 'CTA 버튼', value: '#4F46E5', desc: 'Primary' }
      ],
      typography: [
        { element: '제목', style: '3rem, 굵게, 흰색' },
        { element: '부제목', style: '1.5rem, 흰색' }
      ],
      spacing: [
        { element: '화면 높이', value: '100vh' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<div class="video-landing">
  <video class="bg-video" autoplay muted loop playsinline>
    <source src="background.mp4" type="video/mp4">
  </video>

  <div class="overlay"></div>

  <div class="content">
    <h1>혁신적인 솔루션</h1>
    <p>비즈니스의 성장을 가속화하세요</p>
    <button class="cta-button">시작하기</button>
  </div>
</div>`
      },
      {
        step: '2단계: CSS',
        code: `.video-landing {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.bg-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  text-align: center;
  padding: 48px;
}

.content h1 {
  font-size: 3rem;
  margin-bottom: 24px;
  animation: fadeInUp 1s ease;
}

.content p {
  font-size: 1.5rem;
  margin-bottom: 40px;
  animation: fadeInUp 1s ease 0.2s backwards;
}

.cta-button {
  background: #4F46E5;
  color: white;
  border: none;
  padding: 16px 48px;
  font-size: 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  animation: fadeInUp 1s ease 0.4s backwards;
}

.cta-button:hover {
  background: #4338CA;
  transform: scale(1.05);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`
      }
    ],
    checklist: [
      '비디오가 풀스크린으로 표시되나요?',
      '비디오가 자동 재생되나요?',
      '오버레이로 텍스트가 잘 보이나요?',
      'CTA 버튼이 눈에 띄나요?',
      '콘텐츠가 중앙 정렬되었나요?',
      '애니메이션이 순차적으로 나타나나요?'
    ]
  },

  'S092': {
    learningPoints: [
      '<strong>3D 카드 효과</strong>',
      '<strong>transform: perspective</strong>',
      '<strong>rotateX, rotateY</strong>',
      '마우스 위치에 따른 회전'
    ],
    requirements: {
      html: [
        '카드 컨테이너',
        '카드 콘텐츠'
      ],
      css: [
        '<strong>perspective:</strong> 1000px',
        '<strong>transform-style:</strong> preserve-3d',
        '<strong>transform:</strong> rotateX, rotateY',
        '<strong>transition:</strong> 부드러운 회전'
      ],
      details: [
        '마우스 위치 계산 (중심 기준)',
        'rotateY: (x - 중심) / 너비 * 각도',
        'rotateX: (y - 중심) / 높이 * 각도',
        'mouseleave 시 원위치'
      ]
    },
    styles: {
      colors: [
        { name: '카드 배경', value: 'linear-gradient(135deg, #667eea, #764ba2)', desc: 'Gradient' },
        { name: '텍스트', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [],
      spacing: [
        { element: '카드 크기', value: '300x400px' }
      ]
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<div class="card-3d" id="card3d">
  <div class="card-content">
    <h2>3D 카드</h2>
    <p>마우스를 올려보세요</p>
  </div>
</div>`
      },
      {
        step: '2단계: CSS',
        code: `.card-3d {
  width: 300px;
  height: 400px;
  perspective: 1000px;
  cursor: pointer;
}

.card-content {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 16px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  transform-style: preserve-3d;
  transition: transform 0.1s;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.card-content h2 {
  font-size: 2rem;
  margin-bottom: 16px;
}

.card-content p {
  font-size: 1.25rem;
}`
      },
      {
        step: '3단계: JavaScript',
        code: `const card = document.getElementById('card3d');
const cardContent = card.querySelector('.card-content');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (y - centerY) / centerY * -10; // -10 ~ 10도
  const rotateY = (x - centerX) / centerX * 10;

  cardContent.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
});

card.addEventListener('mouseleave', () => {
  cardContent.style.transform = 'rotateX(0deg) rotateY(0deg)';
});`
      }
    ],
    checklist: [
      '마우스 위치에 따라 카드가 회전하나요?',
      '3D 효과가 자연스러운가요?',
      'mouseleave 시 원위치로 돌아가나요?',
      'perspective가 적용되었나요?',
      '그림자가 입체감을 주나요?',
      '부드러운 transition이 있나요?'
    ]
  },

  'S093': {
    learningPoints: [
      '<strong>SVG 지도</strong>',
      '<strong>클릭 가능한 영역</strong>',
      '<strong>path 또는 polygon</strong>',
      '인터랙티브 툴팁'
    ],
    requirements: {
      html: [
        'svg 태그',
        '각 지역별 path 또는 polygon',
        '툴팁 요소'
      ],
      css: [
        '<strong>path hover:</strong> 색상 변경',
        '<strong>툴팁:</strong> position: absolute',
        '<strong>transition:</strong> 부드러운 효과'
      ],
      details: [
        '각 path에 클릭 이벤트',
        'hover 시 툴팁 표시',
        '클릭 시 해당 지역 정보 표시',
        'fill, stroke 속성 활용'
      ]
    },
    styles: {
      colors: [
        { name: '기본 지역', value: '#D1D5DB', desc: 'Gray' },
        { name: 'hover 지역', value: '#4F46E5', desc: 'Primary' },
        { name: '선택 지역', value: '#10B981', desc: 'Green' }
      ],
      typography: [],
      spacing: []
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<div class="map-container">
  <svg id="mapSvg" viewBox="0 0 800 600">
    <path id="region1" d="M 100,100 L 200,100 L 200,200 L 100,200 Z" fill="#D1D5DB" stroke="#FFF" stroke-width="2" data-name="서울"></path>
    <path id="region2" d="M 220,100 L 320,100 L 320,200 L 220,200 Z" fill="#D1D5DB" stroke="#FFF" stroke-width="2" data-name="경기"></path>
    <!-- 더 많은 지역 -->
  </svg>
  <div class="tooltip" id="tooltip"></div>
</div>`
      },
      {
        step: '2단계: CSS',
        code: `.map-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

svg path {
  cursor: pointer;
  transition: fill 0.3s;
}

svg path:hover {
  fill: #4F46E5;
}

svg path.selected {
  fill: #10B981;
}

.tooltip {
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  pointer-events: none;
  display: none;
  z-index: 10;
}`
      },
      {
        step: '3단계: JavaScript',
        code: `const paths = document.querySelectorAll('svg path');
const tooltip = document.getElementById('tooltip');

paths.forEach(path => {
  path.addEventListener('mouseenter', (e) => {
    const name = e.target.dataset.name;
    tooltip.textContent = name;
    tooltip.style.display = 'block';
  });

  path.addEventListener('mousemove', (e) => {
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px';
  });

  path.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });

  path.addEventListener('click', (e) => {
    paths.forEach(p => p.classList.remove('selected'));
    e.target.classList.add('selected');

    const name = e.target.dataset.name;
    alert(\`\${name} 지역이 선택되었습니다\`);
  });
});`
      }
    ],
    checklist: [
      'SVG 지도가 표시되나요?',
      'hover 시 색상이 변하나요?',
      '툴팁이 마우스를 따라다니나요?',
      '클릭 시 지역이 선택되나요?',
      '선택된 지역이 다른 색으로 표시되나요?',
      '여러 지역이 있나요?'
    ]
  },

  'S094': {
    learningPoints: [
      '<strong>Material Design</strong> 스타일',
      '<strong>Elevation (그림자)</strong>',
      '<strong>Ripple 효과</strong>',
      'FAB (Floating Action Button)'
    ],
    requirements: {
      html: [
        'Card 컴포넌트들',
        'FAB 버튼',
        'App Bar (헤더)'
      ],
      css: [
        '<strong>Elevation:</strong> box-shadow 단계별',
        '<strong>Ripple:</strong> ::after 가상 요소',
        '<strong>둥근 모서리:</strong> border-radius',
        '<strong>색상:</strong> Material color palette'
      ],
      details: [
        'elevation-1, elevation-2, elevation-3',
        '버튼 클릭 시 ripple 애니메이션',
        'FAB: position: fixed, 우하단',
        'Material Design 가이드 준수'
      ]
    },
    styles: {
      colors: [
        { name: 'Primary', value: '#6200EE', desc: 'Purple' },
        { name: 'Secondary', value: '#03DAC6', desc: 'Teal' },
        { name: 'Surface', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [
        { element: '제목', style: 'Roboto, 2rem, 굵게' }
      ],
      spacing: []
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<div class="material-page">
  <header class="app-bar">
    <h1>Material Design</h1>
  </header>

  <main class="content">
    <div class="card elevation-2">
      <h2>카드 1</h2>
      <p>Material Design 스타일 카드입니다</p>
      <button class="btn-primary ripple">확인</button>
    </div>

    <div class="card elevation-2">
      <h2>카드 2</h2>
      <p>Elevation과 Ripple 효과를 확인하세요</p>
      <button class="btn-primary ripple">확인</button>
    </div>
  </main>

  <button class="fab elevation-6">+</button>
</div>`
      },
      {
        step: '2단계: CSS',
        code: `.material-page {
  font-family: 'Roboto', sans-serif;
  background: #F5F5F5;
  min-height: 100vh;
}

.app-bar {
  background: #6200EE;
  color: white;
  padding: 16px 24px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 24px;
}

/* Elevation */
.elevation-2 {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1);
}

.elevation-6 {
  box-shadow: 0 6px 10px rgba(0,0,0,0.15), 0 12px 24px rgba(0,0,0,0.15);
}

/* Button */
.btn-primary {
  background: #6200EE;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
}

.btn-primary:hover {
  background: #3700B3;
}

/* Ripple 효과 */
.ripple {
  position: relative;
  overflow: hidden;
}

.ripple::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.ripple:active::after {
  width: 300px;
  height: 300px;
}

/* FAB */
.fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #03DAC6;
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  transition: 0.3s;
}

.fab:hover {
  background: #018786;
  transform: scale(1.1);
}`
      }
    ],
    checklist: [
      'Material Design 스타일이 적용되었나요?',
      'Elevation (그림자)이 단계별로 있나요?',
      'Ripple 효과가 작동하나요?',
      'FAB가 우하단에 고정되어 있나요?',
      'Material 색상 팔레트를 사용했나요?',
      '카드가 그리드로 배치되었나요?'
    ]
  },

  'S095': {
    learningPoints: [
      '<strong>뉴모피즘</strong> (Neumorphism)',
      '<strong>소프트 그림자</strong>',
      '<strong>엠보싱 효과</strong>',
      'inset box-shadow'
    ],
    requirements: {
      html: [
        '카드, 버튼, 입력 필드',
        '다양한 컴포넌트'
      ],
      css: [
        '<strong>배경:</strong> 단색 (보통 회색)',
        '<strong>box-shadow:</strong> 밝은/어두운 그림자',
        '<strong>pressed 상태:</strong> inset shadow',
        '<strong>부드러운 모서리</strong>'
      ],
      details: [
        '밝은 그림자: -8px -8px 16px rgba(255,255,255,0.7)',
        '어두운 그림자: 8px 8px 16px rgba(0,0,0,0.15)',
        'pressed: inset 그림자',
        '배경과 비슷한 색상 사용'
      ]
    },
    styles: {
      colors: [
        { name: '배경', value: '#E0E5EC', desc: 'Light gray' },
        { name: '텍스트', value: '#4A5568', desc: 'Dark gray' }
      ],
      typography: [],
      spacing: []
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<div class="neuro-container">
  <div class="neuro-card">
    <h2>뉴모피즘 카드</h2>
    <p>소프트한 그림자 효과</p>
  </div>

  <button class="neuro-button">버튼</button>
  <button class="neuro-button pressed">Pressed</button>

  <input type="text" class="neuro-input" placeholder="입력 필드">
</div>`
      },
      {
        step: '2단계: CSS',
        code: `.neuro-container {
  background: #E0E5EC;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 48px;
}

.neuro-card {
  background: #E0E5EC;
  padding: 48px;
  border-radius: 24px;
  box-shadow:
    -8px -8px 16px rgba(255, 255, 255, 0.7),
    8px 8px 16px rgba(0, 0, 0, 0.15);
  color: #4A5568;
  text-align: center;
}

.neuro-button {
  background: #E0E5EC;
  color: #4A5568;
  border: none;
  padding: 16px 48px;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow:
    -8px -8px 16px rgba(255, 255, 255, 0.7),
    8px 8px 16px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
}

.neuro-button:hover {
  box-shadow:
    -4px -4px 8px rgba(255, 255, 255, 0.7),
    4px 4px 8px rgba(0, 0, 0, 0.15);
}

.neuro-button:active,
.neuro-button.pressed {
  box-shadow:
    inset -4px -4px 8px rgba(255, 255, 255, 0.7),
    inset 4px 4px 8px rgba(0, 0, 0, 0.15);
}

.neuro-input {
  background: #E0E5EC;
  border: none;
  padding: 16px 24px;
  border-radius: 16px;
  font-size: 1rem;
  color: #4A5568;
  box-shadow:
    inset -4px -4px 8px rgba(255, 255, 255, 0.7),
    inset 4px 4px 8px rgba(0, 0, 0, 0.15);
  outline: none;
  width: 300px;
}

.neuro-input::placeholder {
  color: #A0AEC0;
}`
      }
    ],
    checklist: [
      '뉴모피즘 스타일이 적용되었나요?',
      '소프트 그림자가 양쪽에 있나요?',
      '버튼 클릭 시 pressed 효과가 있나요?',
      '입력 필드가 inset 그림자인가요?',
      '배경색과 컴포넌트 색상이 비슷한가요?',
      '부드러운 느낌이 나나요?'
    ]
  },

  'S096': {
    learningPoints: [
      '<strong>파티클 배경</strong>',
      '<strong>Canvas 애니메이션</strong>',
      '<strong>requestAnimationFrame</strong>',
      '랜덤 파티클 생성'
    ],
    requirements: {
      html: [
        'canvas 태그 (풀스크린)'
      ],
      css: [
        '<strong>canvas:</strong> position: fixed, z-index: -1'
      ],
      details: [
        '파티클 객체 배열 생성',
        '각 파티클: x, y, vx, vy, size',
        'requestAnimationFrame으로 애니메이션',
        '파티클 간 연결선 (거리 기반)'
      ]
    },
    styles: {
      colors: [
        { name: '배경', value: '#0A0E27', desc: 'Dark blue' },
        { name: '파티클', value: '#FFFFFF', desc: 'White' }
      ],
      typography: [],
      spacing: []
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<canvas id="particleCanvas"></canvas>
<div class="content">
  <h1>파티클 배경 효과</h1>
  <p>마우스를 움직여보세요</p>
</div>`
      },
      {
        step: '2단계: JavaScript',
        code: `const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.size = Math.random() * 3 + 1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }

  draw() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const particles = Array.from({ length: 100 }, () => new Particle());

function animate() {
  ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.update();
    p.draw();
  });

  // 파티클 간 연결선
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        ctx.strokeStyle = \`rgba(255, 255, 255, \${1 - distance / 150})\`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animate);
}

animate();`
      }
    ],
    checklist: [
      '파티클이 움직이나요?',
      '파티클 간 연결선이 그려지나요?',
      '거리에 따라 선의 투명도가 변하나요?',
      '파티클이 화면 경계에서 반사되나요?',
      '애니메이션이 부드러운가요?',
      '배경이 어두운가요?'
    ]
  },

  'S097': {
    learningPoints: [
      '<strong>SVG Path 애니메이션</strong>',
      '<strong>stroke-dasharray</strong>',
      '<strong>stroke-dashoffset</strong>',
      'CSS animation'
    ],
    requirements: {
      html: [
        'svg 태그',
        'path 요소'
      ],
      css: [
        '<strong>stroke-dasharray:</strong> 경로 길이',
        '<strong>stroke-dashoffset:</strong> 애니메이션',
        '<strong>@keyframes:</strong> dashoffset 0으로'
      ],
      details: [
        'path의 getTotalLength() 구하기',
        'dasharray = dashoffset = 길이',
        '애니메이션: dashoffset 0으로',
        'stroke-linecap: round'
      ]
    },
    styles: {
      colors: [
        { name: 'stroke', value: '#4F46E5', desc: 'Primary' }
      ],
      typography: [],
      spacing: []
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<svg id="pathSvg" width="600" height="400" viewBox="0 0 600 400">
  <path id="animatedPath"
        d="M 50,200 Q 150,50 250,200 T 450,200 L 550,100"
        fill="none"
        stroke="#4F46E5"
        stroke-width="4"
        stroke-linecap="round">
  </path>
</svg>
<button onclick="animatePath()">애니메이션 시작</button>`
      },
      {
        step: '2단계: JavaScript',
        code: `const path = document.getElementById('animatedPath');
const length = path.getTotalLength();

// 초기 설정
path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

function animatePath() {
  path.style.transition = 'none';
  path.style.strokeDashoffset = length;

  setTimeout(() => {
    path.style.transition = 'stroke-dashoffset 3s ease';
    path.style.strokeDashoffset = '0';
  }, 10);
}

// 자동 시작
setTimeout(animatePath, 500);`
      },
      {
        step: '3단계: CSS 애니메이션 (대안)',
        code: `@keyframes drawPath {
  to {
    stroke-dashoffset: 0;
  }
}

#animatedPath {
  stroke-dasharray: 1000; /* 경로 길이 */
  stroke-dashoffset: 1000;
  animation: drawPath 3s ease forwards;
}`
      }
    ],
    checklist: [
      'SVG 경로가 그려지나요?',
      '경로를 따라 선이 그려지나요?',
      '애니메이션이 부드러운가요?',
      'stroke-linecap이 둥근가요?',
      '경로가 완전히 그려지나요?',
      '반복 버튼이 작동하나요?'
    ]
  },

  'S098': {
    learningPoints: [
      '<strong>페이지 전환 효과</strong>',
      '<strong>슬라이드/페이드 애니메이션</strong>',
      'History API',
      '라우팅 시뮬레이션'
    ],
    requirements: {
      html: [
        '여러 페이지 섹션',
        '네비게이션 링크'
      ],
      css: [
        '<strong>전환 효과:</strong> slide, fade, scale',
        '<strong>position:</strong> absolute 또는 fixed',
        '<strong>@keyframes</strong>'
      ],
      details: [
        '링크 클릭 시 전환 애니메이션',
        'slideIn, slideOut 클래스 토글',
        'setTimeout으로 타이밍 제어',
        '여러 전환 스타일 구현'
      ]
    },
    styles: {
      colors: [
        { name: '페이지1', value: '#4F46E5', desc: 'Primary' },
        { name: '페이지2', value: '#10B981', desc: 'Green' },
        { name: '페이지3', value: '#F59E0B', desc: 'Orange' }
      ],
      typography: [],
      spacing: []
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<nav class="page-nav">
  <a href="#" data-page="page1">페이지 1</a>
  <a href="#" data-page="page2">페이지 2</a>
  <a href="#" data-page="page3">페이지 3</a>
</nav>

<div class="pages">
  <div class="page active" id="page1">
    <h1>페이지 1</h1>
    <p>첫 번째 페이지입니다</p>
  </div>
  <div class="page" id="page2">
    <h1>페이지 2</h1>
    <p>두 번째 페이지입니다</p>
  </div>
  <div class="page" id="page3">
    <h1>페이지 3</h1>
    <p>세 번째 페이지입니다</p>
  </div>
</div>`
      },
      {
        step: '2단계: CSS',
        code: `.pages {
  position: relative;
  min-height: 100vh;
}

.page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.5s ease;
}

.page.active {
  opacity: 1;
  transform: translateX(0);
}

.page.exit {
  opacity: 0;
  transform: translateX(-100%);
}

#page1 { background: #4F46E5; }
#page2 { background: #10B981; }
#page3 { background: #F59E0B; }

.page-nav {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 12px 24px;
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 100;
  display: flex;
  gap: 16px;
}

.page-nav a {
  color: #222;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 12px;
  transition: 0.3s;
}

.page-nav a:hover {
  background: #F3F4F6;
}`
      },
      {
        step: '3단계: JavaScript',
        code: `const navLinks = document.querySelectorAll('.page-nav a');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.dataset.page;
    const targetPage = document.getElementById(targetId);

    // 현재 active 페이지 찾기
    const currentPage = document.querySelector('.page.active');

    if (currentPage === targetPage) return;

    // 전환 애니메이션
    currentPage.classList.add('exit');
    currentPage.classList.remove('active');

    setTimeout(() => {
      currentPage.classList.remove('exit');
      targetPage.classList.add('active');
    }, 500);
  });
});`
      }
    ],
    checklist: [
      '페이지 전환이 부드럽게 작동하나요?',
      '슬라이드 애니메이션이 있나요?',
      '네비게이션이 고정되어 있나요?',
      '여러 페이지 간 이동이 가능한가요?',
      '전환 타이밍이 적절한가요?',
      '각 페이지 색상이 다른가요?'
    ]
  },

  'S099': {
    learningPoints: [
      '<strong>모핑 효과</strong> (Morphing)',
      '<strong>SVG path 변형</strong>',
      '<strong>transition</strong>',
      'd 속성 애니메이션'
    ],
    requirements: {
      html: [
        'svg 태그',
        'path 요소 (변형될 도형)'
      ],
      css: [
        '<strong>transition:</strong> d 속성 (CSS 또는 JS)'
      ],
      details: [
        '여러 도형의 path d 값 준비',
        '클릭 시 d 속성 변경',
        'CSS transition 또는 Web Animations API',
        '원 → 사각형 → 별 등'
      ]
    },
    styles: {
      colors: [
        { name: 'fill', value: '#4F46E5', desc: 'Primary' }
      ],
      typography: [],
      spacing: []
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<svg width="400" height="400" viewBox="0 0 400 400">
  <path id="morphPath" d="M 200,100 A 100,100 0 1,1 199.9,100" fill="#4F46E5"></path>
</svg>
<button onclick="morphToSquare()">사각형</button>
<button onclick="morphToCircle()">원</button>
<button onclick="morphToStar()">별</button>`
      },
      {
        step: '2단계: JavaScript',
        code: `const path = document.getElementById('morphPath');

const shapes = {
  circle: 'M 200,100 A 100,100 0 1,1 199.9,100',
  square: 'M 100,100 L 300,100 L 300,300 L 100,300 Z',
  star: 'M 200,100 L 220,180 L 300,180 L 235,230 L 260,310 L 200,260 L 140,310 L 165,230 L 100,180 L 180,180 Z'
};

function morphTo(shape) {
  path.style.transition = 'd 0.5s ease';
  path.setAttribute('d', shapes[shape]);
}

function morphToCircle() {
  morphTo('circle');
}

function morphToSquare() {
  morphTo('square');
}

function morphToStar() {
  morphTo('star');
}

// CSS로 d 전환 (일부 브라우저만 지원)
// 또는 Web Animations API 사용
function morphWithAnimation(newPath) {
  path.animate([
    { d: path.getAttribute('d') },
    { d: newPath }
  ], {
    duration: 500,
    easing: 'ease',
    fill: 'forwards'
  });

  setTimeout(() => {
    path.setAttribute('d', newPath);
  }, 500);
}`
      }
    ],
    checklist: [
      '도형이 다른 도형으로 변하나요?',
      '변형이 부드러운가요?',
      '여러 도형 간 전환이 가능한가요?',
      'SVG path가 올바르게 그려지나요?',
      '버튼 클릭 시 즉시 반응하나요?'
    ]
  },

  'S100': {
    learningPoints: [
      '<strong>인터랙티브 배경</strong>',
      '<strong>마우스 추적</strong>',
      '<strong>Gradient 애니메이션</strong>',
      'mousemove 이벤트'
    ],
    requirements: {
      html: [
        '배경 요소',
        'gradient 레이어'
      ],
      css: [
        '<strong>gradient:</strong> radial-gradient',
        '<strong>transition:</strong> background-position'
      ],
      details: [
        'mousemove 이벤트로 마우스 위치 추적',
        'gradient center를 마우스 위치로',
        '부드러운 전환 효과',
        '다중 gradient 레이어'
      ]
    },
    styles: {
      colors: [
        { name: 'gradient1', value: '#4F46E5', desc: 'Primary' },
        { name: 'gradient2', value: '#10B981', desc: 'Green' }
      ],
      typography: [],
      spacing: []
    },
    implementation: [
      {
        step: '1단계: HTML',
        code: `<div class="interactive-bg" id="interactiveBg">
  <div class="content">
    <h1>마우스를 움직여보세요</h1>
    <p>배경이 따라 움직입니다</p>
  </div>
</div>`
      },
      {
        step: '2단계: CSS',
        code: `.interactive-bg {
  width: 100vw;
  height: 100vh;
  background: #0A0E27;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
}

.content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  text-align: center;
}

.content h1 {
  font-size: 3rem;
  margin-bottom: 16px;
}

.content p {
  font-size: 1.5rem;
  opacity: 0.8;
}`
      },
      {
        step: '3단계: JavaScript',
        code: `const bg = document.getElementById('interactiveBg');

bg.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  bg.style.background = \`
    radial-gradient(circle at \${x}% \${y}%,
      rgba(79, 70, 229, 0.3) 0%,
      transparent 50%),
    radial-gradient(circle at \${100 - x}% \${100 - y}%,
      rgba(16, 185, 129, 0.3) 0%,
      transparent 50%),
    #0A0E27
  \`;
});

// 마우스 움직임에 따른 파티클 효과 (선택사항)
bg.addEventListener('mousemove', (e) => {
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.left = e.clientX + 'px';
  particle.style.top = e.clientY + 'px';
  particle.style.width = '5px';
  particle.style.height = '5px';
  particle.style.background = 'rgba(255, 255, 255, 0.5)';
  particle.style.borderRadius = '50%';
  particle.style.pointerEvents = 'none';
  particle.style.animation = 'fadeOut 1s forwards';

  bg.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 1000);
});

// 페이드 아웃 애니메이션
const style = document.createElement('style');
style.textContent = \`
  @keyframes fadeOut {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
\`;
document.head.appendChild(style);`
      }
    ],
    checklist: [
      '마우스 위치에 따라 배경이 변하나요?',
      'gradient가 마우스를 따라다니나요?',
      '여러 gradient 레이어가 있나요?',
      '전환이 부드러운가요?',
      '파티클 효과가 있나요? (선택사항)',
      '성능이 괜찮나요?'
    ]
  }
};

module.exports = customGuideData;
