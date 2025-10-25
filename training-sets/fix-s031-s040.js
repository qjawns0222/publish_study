const fs = require('fs');
const path = require('path');

const template = (id, title, html, css, js='') => `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${id} - ${title} | 완성 예시</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.6; color: #222; }
    :root {
      --color-primary: #4F46E5; --color-secondary: #10B981; --color-accent: #FF9800;
      --color-dark: #222222; --color-gray: #6B7280; --color-light: #F3F4F6; --color-white: #FFFFFF;
      --spacing-1: 8px; --spacing-2: 16px; --spacing-3: 24px; --spacing-4: 32px; --spacing-5: 40px; --spacing-6: 48px;
      --radius: 8px; --transition: 0.3s ease;
    }
${css}
  </style>
</head>
<body>
  ${html}
  <div style="position: fixed; bottom: 24px; right: 24px; background: #10B981; color: white; padding: 16px 24px; text-align: center; font-size: 0.875rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 9999; border-radius: 12px; max-width: 400px;">
    <strong>✅ ${id} 완성 예시</strong>
    <div style="margin-top: 8px;">
      <a href="A-guide.html" style="color: white; text-decoration: none; border: 1px solid white; padding: 6px 12px; border-radius: 6px; display: inline-block; margin-right: 8px;">← 가이드</a>
      <a href="B-practice.html" style="color: white; text-decoration: none; border: 1px solid white; padding: 6px 12px; border-radius: 6px; display: inline-block;">실습하기 →</a>
    </div>
  </div>
  <script>${js}\n    console.log('✅ ${id} - ${title} 완성 예시');</script>
</body>
</html>`;

const examples = {
  S031: {
    title: '대시보드 레이아웃',
    html: `<div class="dashboard">
    <aside class="sidebar">
      <h2>Dashboard</h2>
      <nav>
        <a href="#" class="active">📊 대시보드</a>
        <a href="#">👥 사용자</a>
        <a href="#">📈 분석</a>
        <a href="#">⚙️ 설정</a>
      </nav>
    </aside>
    <header class="header">
      <h1>대시보드</h1>
      <div class="user-info">Admin</div>
    </header>
    <main class="main">
      <div class="widgets">
        <div class="widget">
          <h3>총 사용자</h3>
          <p class="stat">1,234</p>
        </div>
        <div class="widget">
          <h3>총 매출</h3>
          <p class="stat">₩5,432,100</p>
        </div>
        <div class="widget">
          <h3>신규 주문</h3>
          <p class="stat">89</p>
        </div>
      </div>
    </main>
  </div>`,
    css: `    .dashboard { display: grid; grid-template-columns: 250px 1fr; grid-template-rows: 60px 1fr; grid-template-areas: "sidebar header" "sidebar main"; height: 100vh; }
    .sidebar { grid-area: sidebar; background: var(--color-dark); color: white; padding: var(--spacing-3); }
    .sidebar h2 { margin-bottom: var(--spacing-4); color: var(--color-primary); }
    .sidebar nav { display: flex; flex-direction: column; gap: var(--spacing-2); }
    .sidebar nav a { color: rgba(255,255,255,0.8); text-decoration: none; padding: var(--spacing-2); border-radius: var(--radius); transition: var(--transition); }
    .sidebar nav a:hover, .sidebar nav a.active { background: rgba(79,70,229,0.2); color: white; }
    .header { grid-area: header; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 0 var(--spacing-3); display: flex; align-items: center; justify-content: space-between; }
    .user-info { font-weight: 500; color: var(--color-gray); }
    .main { grid-area: main; background: var(--color-light); padding: var(--spacing-3); overflow-y: auto; }
    .widgets { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-3); }
    .widget { background: white; padding: var(--spacing-4); border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: var(--transition); }
    .widget:hover { transform: translateY(-4px); box-shadow: 0 8px 16px rgba(0,0,0,0.15); }
    .widget h3 { font-size: 0.875rem; color: var(--color-gray); margin-bottom: var(--spacing-2); }
    .stat { font-size: 2rem; font-weight: bold; color: var(--color-primary); }
    @media (max-width: 768px) { .widgets { grid-template-columns: 1fr; } }`
  },
  S032: {
    title: 'Holy Grail 레이아웃',
    html: `<div class="holy-grail">
    <header class="hg-header">
      <h1>Holy Grail Layout</h1>
    </header>
    <div class="hg-body">
      <nav class="hg-nav">
        <h3>Navigation</h3>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </nav>
      <main class="hg-main">
        <h2>Main Content</h2>
        <p>이것은 Holy Grail 레이아웃입니다. 헤더, 푸터, 좌우 사이드바, 그리고 중앙의 메인 컨텐츠 영역으로 구성됩니다.</p>
        <p>메인 영역은 flex: 1 속성으로 남은 공간을 모두 차지합니다.</p>
      </main>
      <aside class="hg-aside">
        <h3>Sidebar</h3>
        <p>광고 또는 추가 정보</p>
      </aside>
    </div>
    <footer class="hg-footer">
      <p>&copy; 2024 Holy Grail Layout</p>
    </footer>
  </div>`,
    css: `    .holy-grail { display: flex; flex-direction: column; min-height: 100vh; }
    .hg-header { background: var(--color-primary); color: white; padding: var(--spacing-3); text-align: center; }
    .hg-body { display: flex; flex: 1; }
    .hg-nav { width: 200px; background: var(--color-light); padding: var(--spacing-3); display: flex; flex-direction: column; gap: var(--spacing-2); }
    .hg-nav h3 { margin-bottom: var(--spacing-2); color: var(--color-dark); }
    .hg-nav a { color: var(--color-primary); text-decoration: none; padding: var(--spacing-1); border-radius: var(--radius); transition: var(--transition); }
    .hg-nav a:hover { background: rgba(79,70,229,0.1); }
    .hg-main { flex: 1; padding: var(--spacing-4); background: white; }
    .hg-main h2 { margin-bottom: var(--spacing-3); color: var(--color-dark); }
    .hg-main p { margin-bottom: var(--spacing-2); color: var(--color-gray); line-height: 1.8; }
    .hg-aside { width: 250px; background: var(--color-light); padding: var(--spacing-3); }
    .hg-aside h3 { margin-bottom: var(--spacing-2); color: var(--color-dark); }
    .hg-footer { background: var(--color-dark); color: white; padding: var(--spacing-3); text-align: center; }
    @media (max-width: 768px) { .hg-body { flex-direction: column; } .hg-nav, .hg-aside { width: 100%; } }`
  },
  S033: {
    title: '매거진 레이아웃',
    html: `<div class="magazine">
    <article class="featured">
      <img src="https://via.placeholder.com/800x600" alt="Featured">
      <div class="content">
        <h2>Featured Article</h2>
        <p>메인 스토리 영역입니다</p>
      </div>
    </article>
    <article class="secondary">
      <img src="https://via.placeholder.com/400x300" alt="Article">
      <h3>Secondary Story</h3>
    </article>
    <article class="secondary">
      <img src="https://via.placeholder.com/400x300" alt="Article">
      <h3>Secondary Story</h3>
    </article>
    <article class="tertiary">
      <img src="https://via.placeholder.com/300x200" alt="Small">
      <h4>Small Article</h4>
    </article>
    <article class="tertiary">
      <img src="https://via.placeholder.com/300x200" alt="Small">
      <h4>Small Article</h4>
    </article>
  </div>`,
    css: `    .magazine { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 250px; gap: var(--spacing-3); padding: var(--spacing-6); background: var(--color-light); min-height: 100vh; }
    .featured { grid-column: span 2; grid-row: span 2; position: relative; overflow: hidden; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.15); transition: var(--transition); }
    .featured:hover { transform: scale(1.02); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
    .featured img { width: 100%; height: 100%; object-fit: cover; }
    .featured .content { position: absolute; bottom: 0; left: 0; right: 0; padding: var(--spacing-4); background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); color: white; }
    .featured h2 { font-size: 2rem; margin-bottom: var(--spacing-2); }
    .secondary { grid-column: span 2; grid-row: span 1; position: relative; overflow: hidden; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: var(--transition); }
    .secondary:hover { transform: translateY(-4px); box-shadow: 0 8px 16px rgba(0,0,0,0.15); }
    .secondary img { width: 100%; height: 100%; object-fit: cover; }
    .secondary h3 { position: absolute; bottom: 0; left: 0; right: 0; padding: var(--spacing-3); background: rgba(0,0,0,0.7); color: white; margin: 0; }
    .tertiary { grid-column: span 1; position: relative; overflow: hidden; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: var(--transition); }
    .tertiary:hover { transform: translateY(-4px); }
    .tertiary img { width: 100%; height: 100%; object-fit: cover; }
    .tertiary h4 { position: absolute; bottom: 0; left: 0; right: 0; padding: var(--spacing-2); background: rgba(0,0,0,0.7); color: white; margin: 0; font-size: 0.875rem; }
    @media (max-width: 768px) { .magazine { grid-template-columns: 1fr; grid-auto-rows: 200px; } .featured, .secondary, .tertiary { grid-column: span 1; } }`
  },
  S034: {
    title: 'Masonry 그리드',
    html: `<div class="masonry">
    <div class="masonry-item" style="height: 200px;"><div class="card"><h3>Card 1</h3><p>Short content</p></div></div>
    <div class="masonry-item" style="height: 350px;"><div class="card"><h3>Card 2</h3><p>Tall content with more text to fill the space nicely</p></div></div>
    <div class="masonry-item" style="height: 250px;"><div class="card"><h3>Card 3</h3><p>Medium height content</p></div></div>
    <div class="masonry-item" style="height: 300px;"><div class="card"><h3>Card 4</h3><p>Another tall item</p></div></div>
    <div class="masonry-item" style="height: 220px;"><div class="card"><h3>Card 5</h3><p>Short item</p></div></div>
    <div class="masonry-item" style="height: 280px;"><div class="card"><h3>Card 6</h3><p>Medium-tall content</p></div></div>
  </div>`,
    css: `    body { background: var(--color-light); padding: var(--spacing-6); }
    .masonry { column-count: 3; column-gap: var(--spacing-3); }
    .masonry-item { break-inside: avoid; margin-bottom: var(--spacing-3); }
    .card { background: white; padding: var(--spacing-4); border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); height: 100%; display: flex; flex-direction: column; justify-content: center; transition: var(--transition); }
    .card:hover { transform: translateY(-4px); box-shadow: 0 8px 16px rgba(0,0,0,0.15); }
    .card h3 { font-size: 1.25rem; margin-bottom: var(--spacing-2); color: var(--color-primary); }
    .card p { color: var(--color-gray); line-height: 1.6; }
    @media (max-width: 1024px) { .masonry { column-count: 2; } }
    @media (max-width: 640px) { .masonry { column-count: 1; } }`
  },
  S035: {
    title: '스티키 사이드바',
    html: `<div class="sticky-layout">
    <aside class="sticky-sidebar">
      <h3>Sticky Sidebar</h3>
      <nav>
        <a href="#section1">Section 1</a>
        <a href="#section2">Section 2</a>
        <a href="#section3">Section 3</a>
        <a href="#section4">Section 4</a>
      </nav>
    </aside>
    <main class="content">
      <section id="section1">
        <h2>Section 1</h2>
        <p>스크롤을 내려도 사이드바는 고정됩니다.</p>
        ${Array(5).fill('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>').join('')}
      </section>
      <section id="section2">
        <h2>Section 2</h2>
        ${Array(5).fill('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>').join('')}
      </section>
      <section id="section3">
        <h2>Section 3</h2>
        ${Array(5).fill('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>').join('')}
      </section>
    </main>
  </div>`,
    css: `    .sticky-layout { display: flex; gap: var(--spacing-4); padding: var(--spacing-6); background: var(--color-light); min-height: 100vh; }
    .sticky-sidebar { width: 250px; background: white; padding: var(--spacing-4); border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); position: sticky; top: 24px; height: fit-content; }
    .sticky-sidebar h3 { margin-bottom: var(--spacing-3); color: var(--color-dark); }
    .sticky-sidebar nav { display: flex; flex-direction: column; gap: var(--spacing-2); }
    .sticky-sidebar nav a { color: var(--color-primary); text-decoration: none; padding: var(--spacing-2); border-radius: var(--radius); transition: var(--transition); }
    .sticky-sidebar nav a:hover { background: rgba(79,70,229,0.1); }
    .content { flex: 1; }
    .content section { background: white; padding: var(--spacing-6); border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: var(--spacing-4); }
    .content h2 { margin-bottom: var(--spacing-3); color: var(--color-primary); }
    .content p { margin-bottom: var(--spacing-2); color: var(--color-gray); line-height: 1.8; }
    @media (max-width: 768px) { .sticky-layout { flex-direction: column; } .sticky-sidebar { width: 100%; position: static; } }`
  },
  S036: {
    title: '탭 인터페이스',
    html: `<div class="tabs-container">
    <div class="tabs">
      <button class="tab active" onclick="openTab(event, 'tab1')">HTML</button>
      <button class="tab" onclick="openTab(event, 'tab2')">CSS</button>
      <button class="tab" onclick="openTab(event, 'tab3')">JavaScript</button>
    </div>
    <div class="tab-content active" id="tab1">
      <h3>HTML</h3>
      <p>HTML은 웹 페이지의 구조를 정의하는 마크업 언어입니다.</p>
    </div>
    <div class="tab-content" id="tab2">
      <h3>CSS</h3>
      <p>CSS는 웹 페이지의 스타일을 지정하는 스타일시트 언어입니다.</p>
    </div>
    <div class="tab-content" id="tab3">
      <h3>JavaScript</h3>
      <p>JavaScript는 웹 페이지에 동적 기능을 추가하는 프로그래밍 언어입니다.</p>
    </div>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-3); }
    .tabs-container { max-width: 600px; width: 100%; background: white; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); overflow: hidden; }
    .tabs { display: flex; background: var(--color-light); }
    .tab { flex: 1; padding: var(--spacing-3); background: none; border: none; cursor: pointer; font-size: 1rem; font-weight: 500; color: var(--color-gray); transition: var(--transition); border-bottom: 3px solid transparent; }
    .tab:hover { background: rgba(79,70,229,0.05); }
    .tab.active { color: var(--color-primary); border-bottom-color: var(--color-primary); background: white; }
    .tab-content { display: none; padding: var(--spacing-6); }
    .tab-content.active { display: block; }
    .tab-content h3 { margin-bottom: var(--spacing-3); color: var(--color-primary); }
    .tab-content p { color: var(--color-gray); line-height: 1.8; }`,
    js: `    function openTab(evt, tabId) {
      const contents = document.querySelectorAll('.tab-content');
      contents.forEach(c => c.classList.remove('active'));
      const tabs = document.querySelectorAll('.tab');
      tabs.forEach(t => t.classList.remove('active'));
      document.getElementById(tabId).classList.add('active');
      evt.currentTarget.classList.add('active');
    }`
  },
  S037: {
    title: '아코디언 메뉴',
    html: `<div class="accordion-container">
    <div class="accordion-item">
      <button class="accordion-header" onclick="toggleAccordion(this)">
        <span>HTML이란?</span>
        <span class="icon">+</span>
      </button>
      <div class="accordion-body">
        <p>HTML(HyperText Markup Language)은 웹 페이지의 구조를 정의하는 마크업 언어입니다.</p>
      </div>
    </div>
    <div class="accordion-item">
      <button class="accordion-header" onclick="toggleAccordion(this)">
        <span>CSS란?</span>
        <span class="icon">+</span>
      </button>
      <div class="accordion-body">
        <p>CSS(Cascading Style Sheets)는 웹 페이지의 스타일을 지정하는 언어입니다.</p>
      </div>
    </div>
    <div class="accordion-item">
      <button class="accordion-header" onclick="toggleAccordion(this)">
        <span>JavaScript란?</span>
        <span class="icon">+</span>
      </button>
      <div class="accordion-body">
        <p>JavaScript는 웹 페이지에 동적 기능을 추가하는 프로그래밍 언어입니다.</p>
      </div>
    </div>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-3); }
    .accordion-container { max-width: 600px; width: 100%; }
    .accordion-item { background: white; margin-bottom: var(--spacing-2); border-radius: var(--radius); box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden; }
    .accordion-header { width: 100%; padding: var(--spacing-3); background: white; border: none; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-size: 1rem; font-weight: 500; color: var(--color-dark); transition: var(--transition); }
    .accordion-header:hover { background: var(--color-light); }
    .accordion-header.active { background: var(--color-primary); color: white; }
    .accordion-header.active .icon { transform: rotate(45deg); }
    .icon { font-size: 1.5rem; transition: var(--transition); }
    .accordion-body { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
    .accordion-body.active { max-height: 200px; }
    .accordion-body p { padding: var(--spacing-3); color: var(--color-gray); line-height: 1.8; margin: 0; }`,
    js: `    function toggleAccordion(btn) {
      const body = btn.nextElementSibling;
      const isActive = btn.classList.contains('active');
      document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));
      document.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('active'));
      if (!isActive) {
        btn.classList.add('active');
        body.classList.add('active');
      }
    }`
  },
  S038: {
    title: '드롭다운 메뉴',
    html: `<nav class="dropdown-nav">
    <div class="dropdown">
      <button class="dropdown-btn">Products</button>
      <div class="dropdown-menu">
        <a href="#">Web Development</a>
        <a href="#">Mobile Apps</a>
        <a href="#">Cloud Services</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropdown-btn">Services</button>
      <div class="dropdown-menu">
        <a href="#">Consulting</a>
        <a href="#">Training</a>
        <a href="#">Support</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropdown-btn">Company</button>
      <div class="dropdown-menu">
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </nav>`,
    css: `    body { background: var(--color-light); padding-top: 100px; }
    .dropdown-nav { display: flex; gap: var(--spacing-3); justify-content: center; background: white; padding: var(--spacing-3); box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .dropdown { position: relative; }
    .dropdown-btn { padding: 12px 24px; background: var(--color-primary); color: white; border: none; border-radius: var(--radius); cursor: pointer; font-weight: 500; transition: var(--transition); }
    .dropdown-btn:hover { background: #3730a3; }
    .dropdown-menu { position: absolute; top: calc(100% + 8px); left: 0; min-width: 200px; background: white; border-radius: var(--radius); box-shadow: 0 4px 16px rgba(0,0,0,0.15); opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.3s ease; z-index: 100; }
    .dropdown:hover .dropdown-menu { opacity: 1; visibility: visible; transform: translateY(0); }
    .dropdown-menu a { display: block; padding: var(--spacing-2) var(--spacing-3); color: var(--color-dark); text-decoration: none; transition: var(--transition); }
    .dropdown-menu a:hover { background: var(--color-light); color: var(--color-primary); }
    .dropdown-menu a:first-child { border-radius: var(--radius) var(--radius) 0 0; }
    .dropdown-menu a:last-child { border-radius: 0 0 var(--radius) var(--radius); }`
  },
  S039: {
    title: '모달 팝업',
    html: `<div class="modal-demo">
    <button class="open-modal-btn" onclick="openModal()">모달 열기</button>
  </div>
  <div class="modal-overlay" id="modalOverlay" onclick="closeModal()">
    <div class="modal" onclick="event.stopPropagation()">
      <button class="close-btn" onclick="closeModal()">✕</button>
      <h2>모달 타이틀</h2>
      <p>이것은 모달 팝업입니다. 오버레이를 클릭하거나 X 버튼을 눌러 닫을 수 있습니다.</p>
      <div class="modal-actions">
        <button class="btn-cancel" onclick="closeModal()">취소</button>
        <button class="btn-confirm" onclick="closeModal()">확인</button>
      </div>
    </div>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); }
    .open-modal-btn { padding: 16px 32px; background: var(--color-primary); color: white; border: none; border-radius: var(--radius); font-size: 1rem; font-weight: 500; cursor: pointer; transition: var(--transition); }
    .open-modal-btn:hover { background: #3730a3; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(79,70,229,0.3); }
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; opacity: 0; visibility: hidden; transition: all 0.3s ease; z-index: 1000; }
    .modal-overlay.active { opacity: 1; visibility: visible; }
    .modal { background: white; padding: var(--spacing-6); border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.2); max-width: 500px; width: 90%; position: relative; transform: scale(0.9); transition: transform 0.3s ease; }
    .modal-overlay.active .modal { transform: scale(1); }
    .close-btn { position: absolute; top: 16px; right: 16px; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--color-gray); transition: var(--transition); }
    .close-btn:hover { color: var(--color-dark); transform: rotate(90deg); }
    .modal h2 { margin-bottom: var(--spacing-3); color: var(--color-dark); }
    .modal p { margin-bottom: var(--spacing-4); color: var(--color-gray); line-height: 1.8; }
    .modal-actions { display: flex; gap: var(--spacing-2); justify-content: flex-end; }
    .modal-actions button { padding: 12px 24px; border: none; border-radius: var(--radius); font-weight: 500; cursor: pointer; transition: var(--transition); }
    .btn-cancel { background: var(--color-light); color: var(--color-dark); }
    .btn-cancel:hover { background: #E5E7EB; }
    .btn-confirm { background: var(--color-primary); color: white; }
    .btn-confirm:hover { background: #3730a3; }`,
    js: `    function openModal() {
      document.getElementById('modalOverlay').classList.add('active');
    }
    function closeModal() {
      document.getElementById('modalOverlay').classList.remove('active');
    }`
  },
  S040: {
    title: '캐러셀 슬라이더',
    html: `<div class="carousel-container">
    <div class="carousel">
      <button class="carousel-btn prev" onclick="moveSlide(-1)">❮</button>
      <div class="carousel-track" id="carouselTrack">
        <div class="carousel-slide active">
          <img src="https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Slide+1" alt="Slide 1">
          <h3>Slide 1</h3>
        </div>
        <div class="carousel-slide">
          <img src="https://via.placeholder.com/800x400/10B981/FFFFFF?text=Slide+2" alt="Slide 2">
          <h3>Slide 2</h3>
        </div>
        <div class="carousel-slide">
          <img src="https://via.placeholder.com/800x400/FF9800/FFFFFF?text=Slide+3" alt="Slide 3">
          <h3>Slide 3</h3>
        </div>
      </div>
      <button class="carousel-btn next" onclick="moveSlide(1)">❯</button>
    </div>
    <div class="carousel-dots">
      <span class="dot active" onclick="currentSlide(0)"></span>
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
    </div>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-3); }
    .carousel-container { max-width: 800px; width: 100%; }
    .carousel { position: relative; overflow: hidden; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.15); }
    .carousel-track { display: flex; transition: transform 0.5s ease; }
    .carousel-slide { min-width: 100%; position: relative; }
    .carousel-slide img { width: 100%; display: block; }
    .carousel-slide h3 { position: absolute; bottom: 0; left: 0; right: 0; padding: var(--spacing-4); background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); color: white; margin: 0; font-size: 1.5rem; }
    .carousel-btn { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.9); border: none; width: 48px; height: 48px; border-radius: 50%; cursor: pointer; font-size: 1.5rem; color: var(--color-dark); transition: var(--transition); z-index: 10; }
    .carousel-btn:hover { background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
    .carousel-btn.prev { left: 16px; }
    .carousel-btn.next { right: 16px; }
    .carousel-dots { display: flex; justify-content: center; gap: var(--spacing-2); margin-top: var(--spacing-3); }
    .dot { width: 12px; height: 12px; border-radius: 50%; background: #D1D5DB; cursor: pointer; transition: var(--transition); }
    .dot:hover { background: #9CA3AF; }
    .dot.active { background: var(--color-primary); width: 32px; border-radius: 6px; }`,
    js: `    let currentIndex = 0;
    function moveSlide(direction) {
      const slides = document.querySelectorAll('.carousel-slide');
      const dots = document.querySelectorAll('.dot');
      currentIndex = (currentIndex + direction + slides.length) % slides.length;
      document.getElementById('carouselTrack').style.transform = \`translateX(-\${currentIndex * 100}%)\`;
      dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    }
    function currentSlide(index) {
      const slides = document.querySelectorAll('.carousel-slide');
      const dots = document.querySelectorAll('.dot');
      currentIndex = index;
      document.getElementById('carouselTrack').style.transform = \`translateX(-\${currentIndex * 100}%)\`;
      dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    }`
  }
};

let count = 0;
Object.entries(examples).forEach(([id, data]) => {
  const html = template(id, data.title, data.html, data.css, data.js || '');
  fs.writeFileSync(path.join(__dirname, id, 'C-answer.html'), html, 'utf-8');
  console.log(`✅ ${id} - ${data.title}`);
  count++;
});

console.log(`\n✨ S031-S040 ${count}개 예제 수정 완료!`);
