/**
 * 100개 예제 완전한 답안 템플릿
 * S001 스타일로 모든 예제를 완벽하게 구현
 */

const completeAnswerTemplates = {

  // ========== S001-S010 (초급 - 레이아웃 & 컴포넌트 기초) ==========

  'S001': {
    html: `<header>
    <h1>웹사이트 헤더</h1>
    <nav>
      <a href="#">홈</a>
      <a href="#">소개</a>
      <a href="#">연락처</a>
    </nav>
  </header>

  <main>
    <h2>메인 콘텐츠</h2>
    <p>이것은 메인 콘텐츠 영역입니다. flex: 1 속성으로 인해 남은 공간을 모두 차지합니다.</p>
    <p>Header와 Footer 사이의 공간이 자동으로 확장됩니다.</p>
  </main>

  <footer>
    <p>&copy; 2024 웹 퍼블리싱 훈련</p>
  </footer>`,
    css: `/* Flexbox 레이아웃 적용 */
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }

    /* Header 스타일링 */
    header {
      background: var(--color-primary);
      color: var(--color-white);
      padding: var(--spacing-3);
      text-align: center;
    }

    header h1 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: var(--spacing-2);
    }

    /* Navigation 스타일링 */
    nav {
      display: flex;
      justify-content: center;
      gap: var(--spacing-2);
    }

    nav a {
      color: var(--color-white);
      text-decoration: none;
      padding: 0 var(--spacing-2);
      transition: var(--transition);
    }

    nav a:hover {
      text-decoration: underline;
      opacity: 0.8;
    }

    /* Main 스타일링 */
    main {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      padding: var(--spacing-6);
    }

    main h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: var(--spacing-2);
    }

    main p {
      margin-top: var(--spacing-2);
    }

    /* Footer 스타일링 */
    footer {
      background: var(--color-dark);
      color: var(--color-white);
      padding: var(--spacing-4);
      text-align: center;
    }

    footer p {
      font-size: 0.875rem;
    }`,
    js: ''
  },

  'S002': {
    html: `<div class="container">
    <div class="card">
      <h2>중앙 정렬 카드</h2>
      <p>Flexbox를 사용하여 화면 중앙에 배치된 카드입니다.</p>
      <button class="btn">자세히 보기</button>
    </div>
  </div>`,
    css: `/* Container 중앙 정렬 */
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: var(--color-light);
    }

    /* Card 스타일링 */
    .card {
      max-width: 400px;
      background: var(--color-white);
      padding: var(--spacing-4);
      border-radius: 12px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.1);
      text-align: center;
    }

    .card h2 {
      font-size: 1.75rem;
      margin-bottom: var(--spacing-2);
      color: var(--color-dark);
    }

    .card p {
      color: var(--color-gray);
      margin-bottom: var(--spacing-3);
      line-height: 1.6;
    }

    /* Button 스타일링 */
    .btn {
      background: var(--color-primary);
      color: var(--color-white);
      padding: 12px 24px;
      border: none;
      border-radius: var(--radius);
      font-size: 1rem;
      cursor: pointer;
      transition: var(--transition);
    }

    .btn:hover {
      background: #3730a3;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(79,70,229,0.3);
    }`,
    js: ''
  },

  'S003': {
    html: `<div class="layout">
    <aside class="sidebar">
      <h2>사이드바</h2>
      <nav>
        <a href="#">메뉴 1</a>
        <a href="#">메뉴 2</a>
        <a href="#">메뉴 3</a>
        <a href="#">메뉴 4</a>
      </nav>
    </aside>

    <main class="content">
      <h1>메인 콘텐츠</h1>
      <p>2단 컬럼 레이아웃입니다. Grid를 사용하여 Sidebar와 Content 영역을 구성했습니다.</p>
      <p>Sidebar는 250px 고정 너비, Content는 나머지 공간을 차지합니다.</p>
    </main>
  </div>`,
    css: `/* Grid 레이아웃 */
    .layout {
      display: grid;
      grid-template-columns: 250px 1fr;
      min-height: 100vh;
    }

    /* Sidebar 스타일링 */
    .sidebar {
      background: var(--color-dark);
      color: var(--color-white);
      padding: var(--spacing-3);
    }

    .sidebar h2 {
      font-size: 1.25rem;
      margin-bottom: var(--spacing-3);
      padding-bottom: var(--spacing-2);
      border-bottom: 1px solid rgba(255,255,255,0.2);
    }

    .sidebar nav {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-1);
    }

    .sidebar nav a {
      color: var(--color-white);
      text-decoration: none;
      padding: var(--spacing-2);
      border-radius: var(--radius);
      transition: var(--transition);
    }

    .sidebar nav a:hover {
      background: rgba(255,255,255,0.1);
    }

    /* Content 스타일링 */
    .content {
      padding: var(--spacing-6);
      background: var(--color-light);
    }

    .content h1 {
      font-size: 2rem;
      margin-bottom: var(--spacing-3);
      color: var(--color-dark);
    }

    .content p {
      margin-bottom: var(--spacing-2);
      line-height: 1.6;
      color: var(--color-gray);
    }

    /* 반응형 */
    @media (max-width: 768px) {
      .layout {
        grid-template-columns: 1fr;
      }
    }`,
    js: ''
  },

  'S004': {
    html: `<header class="header">
    <div class="logo">
      <h1>MyLogo</h1>
    </div>

    <nav class="nav">
      <a href="#">홈</a>
      <a href="#">서비스</a>
      <a href="#">소개</a>
      <a href="#">연락처</a>
    </nav>
  </header>

  <main style="padding: 48px; background: #F3F4F6; min-height: calc(100vh - 80px);">
    <h2>반응형 헤더 예제</h2>
    <p>로고와 네비게이션이 있는 반응형 헤더입니다.</p>
  </main>`,
    css: `/* Header 레이아웃 */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--color-white);
      padding: var(--spacing-3);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    /* Logo 스타일링 */
    .logo h1 {
      font-size: 1.5rem;
      color: var(--color-primary);
      font-weight: bold;
    }

    /* Navigation 스타일링 */
    .nav {
      display: flex;
      gap: var(--spacing-3);
    }

    .nav a {
      color: var(--color-dark);
      text-decoration: none;
      font-weight: 500;
      transition: var(--transition);
      padding: var(--spacing-1) var(--spacing-2);
      border-radius: var(--radius);
    }

    .nav a:hover {
      color: var(--color-primary);
      background: rgba(79,70,229,0.1);
    }

    /* 반응형 */
    @media (max-width: 768px) {
      .header {
        flex-direction: column;
        gap: var(--spacing-2);
      }

      .nav {
        flex-direction: column;
        width: 100%;
        text-align: center;
      }
    }`,
    js: ''
  },

  'S005': {
    html: `<div class="grid-container">
    <div class="card">
      <div class="icon">🎨</div>
      <h3>디자인</h3>
      <p>아름다운 UI/UX 디자인을 제공합니다.</p>
    </div>

    <div class="card">
      <div class="icon">💻</div>
      <h3>개발</h3>
      <p>최신 기술로 개발합니다.</p>
    </div>

    <div class="card">
      <div class="icon">🚀</div>
      <h3>배포</h3>
      <p>빠르고 안정적인 배포 서비스를 제공합니다.</p>
    </div>

    <div class="card">
      <div class="icon">📱</div>
      <h3>모바일</h3>
      <p>모바일 최적화된 반응형 디자인입니다.</p>
    </div>

    <div class="card">
      <div class="icon">🔒</div>
      <h3>보안</h3>
      <p>강력한 보안 시스템을 갖추고 있습니다.</p>
    </div>

    <div class="card">
      <div class="icon">⚡</div>
      <h3>성능</h3>
      <p>최고의 성능을 보장합니다.</p>
    </div>
  </div>`,
    css: `/* Grid Container */
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--spacing-3);
      padding: var(--spacing-6);
      background: var(--color-light);
      min-height: 100vh;
    }

    /* Card 스타일링 */
    .card {
      background: var(--color-white);
      padding: var(--spacing-4);
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      text-align: center;
      transition: var(--transition);
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    }

    .card .icon {
      font-size: 3rem;
      margin-bottom: var(--spacing-2);
    }

    .card h3 {
      font-size: 1.25rem;
      color: var(--color-dark);
      margin-bottom: var(--spacing-1);
    }

    .card p {
      color: var(--color-gray);
      font-size: 0.9rem;
      line-height: 1.5;
    }

    /* 반응형 */
    @media (max-width: 1024px) {
      .grid-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .grid-container {
        grid-template-columns: 1fr;
      }
    }`,
    js: ''
  }

};

module.exports = completeAnswerTemplates;
