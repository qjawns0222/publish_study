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
  S021: {
    title: '호버 효과 버튼',
    html: `<div class="btn-container">
    <button class="btn btn-shadow">그림자 효과</button>
    <button class="btn btn-glow">빛나는 효과</button>
    <button class="btn btn-3d">3D 효과</button>
  </div>`,
    css: `    .btn-container { display: flex; gap: var(--spacing-3); justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); flex-wrap: wrap; padding: var(--spacing-3); }
    .btn { padding: 16px 32px; font-size: 1rem; font-weight: 600; border: none; border-radius: var(--radius); cursor: pointer; transition: all 0.3s ease; }
    .btn-shadow { background: var(--color-primary); color: white; }
    .btn-shadow:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(79, 70, 229, 0.4); }
    .btn-glow { background: var(--color-secondary); color: white; }
    .btn-glow:hover { box-shadow: 0 0 20px var(--color-secondary); transform: scale(1.05); }
    .btn-3d { background: linear-gradient(to bottom, var(--color-accent), #e68900); color: white; box-shadow: 0 4px 0 #c67100; }
    .btn-3d:hover { transform: translateY(2px); box-shadow: 0 2px 0 #c67100; }
    .btn-3d:active { transform: translateY(4px); box-shadow: none; }`
  },
  S022: {
    title: '페이드 인 카드',
    html: `<div class="card-container">
    <div class="fade-card">
      <h3>페이드 인 카드</h3>
      <p>CSS 애니메이션으로 부드럽게 나타납니다</p>
    </div>
  </div>`,
    css: `    .card-container { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-3); }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-card { max-width: 400px; background: white; padding: var(--spacing-6); border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); text-align: center; animation: fadeIn 1s ease-out; }
    .fade-card h3 { font-size: 1.75rem; margin-bottom: var(--spacing-2); color: var(--color-primary); }
    .fade-card p { color: var(--color-gray); line-height: 1.6; }`
  },
  S023: {
    title: '로딩 스피너',
    html: `<div class="spinner-container">
    <div class="spinner"></div>
    <p>로딩 중...</p>
  </div>`,
    css: `    .spinner-container { display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); gap: var(--spacing-3); }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .spinner { width: 60px; height: 60px; border: 6px solid rgba(79, 70, 229, 0.1); border-top-color: var(--color-primary); border-radius: 50%; animation: spin 1s linear infinite; }
    .spinner-container p { font-size: 1.125rem; color: var(--color-gray); font-weight: 500; }`
  },
  S024: {
    title: '슬라이드 인 메뉴',
    html: `<div class="slide-menu-container">
    <button class="toggle-btn" onclick="toggleMenu()">메뉴 열기</button>
    <div class="side-menu" id="sideMenu">
      <button class="close-btn" onclick="toggleMenu()">✕</button>
      <nav>
        <a href="#">홈</a>
        <a href="#">소개</a>
        <a href="#">서비스</a>
        <a href="#">블로그</a>
        <a href="#">연락처</a>
      </nav>
    </div>
    <div class="overlay" id="overlay" onclick="toggleMenu()"></div>
  </div>`,
    css: `    .slide-menu-container { min-height: 100vh; background: var(--color-light); padding: var(--spacing-3); }
    .toggle-btn { padding: 12px 24px; background: var(--color-primary); color: white; border: none; border-radius: var(--radius); cursor: pointer; font-weight: 500; }
    .side-menu { position: fixed; top: 0; left: -300px; width: 300px; height: 100%; background: white; box-shadow: 2px 0 12px rgba(0,0,0,0.1); padding: var(--spacing-4); transition: 0.3s ease; z-index: 1000; }
    .side-menu.active { left: 0; }
    .close-btn { position: absolute; top: 16px; right: 16px; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--color-gray); }
    .side-menu nav { margin-top: 60px; display: flex; flex-direction: column; gap: var(--spacing-2); }
    .side-menu nav a { color: var(--color-dark); text-decoration: none; padding: var(--spacing-2); border-radius: var(--radius); transition: var(--transition); }
    .side-menu nav a:hover { background: var(--color-light); color: var(--color-primary); }
    .overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); opacity: 0; pointer-events: none; transition: 0.3s ease; z-index: 999; }
    .overlay.active { opacity: 1; pointer-events: all; }`,
    js: `    function toggleMenu() {
      document.getElementById('sideMenu').classList.toggle('active');
      document.getElementById('overlay').classList.toggle('active');
    }`
  },
  S025: {
    title: '펄스 효과',
    html: `<div class="pulse-container">
    <div class="pulse-circle"></div>
  </div>`,
    css: `    .pulse-container { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-dark); }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.2); opacity: 0.7; }
    }
    .pulse-circle { width: 120px; height: 120px; background: var(--color-primary); border-radius: 50%; animation: pulse 2s ease-in-out infinite; box-shadow: 0 0 40px var(--color-primary); }`
  },
  S026: {
    title: '테이블 스타일링',
    html: `<div class="table-container">
    <table class="styled-table">
      <thead>
        <tr><th>이름</th><th>직책</th><th>이메일</th></tr>
      </thead>
      <tbody>
        <tr><td>김철수</td><td>개발자</td><td>kim@example.com</td></tr>
        <tr><td>이영희</td><td>디자이너</td><td>lee@example.com</td></tr>
        <tr><td>박민수</td><td>기획자</td><td>park@example.com</td></tr>
      </tbody>
    </table>
  </div>`,
    css: `    .table-container { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-3); }
    .styled-table { border-collapse: collapse; width: 100%; max-width: 800px; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
    .styled-table thead { background: var(--color-primary); color: white; }
    .styled-table th, .styled-table td { padding: 16px; text-align: left; }
    .styled-table tbody tr { border-bottom: 1px solid var(--color-light); transition: var(--transition); }
    .styled-table tbody tr:hover { background: rgba(79, 70, 229, 0.05); }
    .styled-table tbody tr:last-child { border-bottom: none; }`
  },
  S027: {
    title: '프로그레스 바',
    html: `<div class="progress-container">
    <div class="progress-item">
      <label>HTML</label>
      <div class="progress-bar"><div class="progress-fill" style="width: 90%;"></div></div>
      <span>90%</span>
    </div>
    <div class="progress-item">
      <label>CSS</label>
      <div class="progress-bar"><div class="progress-fill" style="width: 85%;"></div></div>
      <span>85%</span>
    </div>
    <div class="progress-item">
      <label>JavaScript</label>
      <div class="progress-bar"><div class="progress-fill" style="width: 75%;"></div></div>
      <span>75%</span>
    </div>
  </div>`,
    css: `    .progress-container { display: flex; flex-direction: column; gap: var(--spacing-4); justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-6); max-width: 600px; margin: 0 auto; }
    .progress-item { width: 100%; }
    .progress-item label { display: block; margin-bottom: var(--spacing-1); font-weight: 500; color: var(--color-dark); }
    .progress-bar { width: 100%; height: 24px; background: #E5E7EB; border-radius: 12px; overflow: hidden; margin-bottom: var(--spacing-1); }
    .progress-fill { height: 100%; background: linear-gradient(90deg, var(--color-primary), var(--color-secondary)); border-radius: 12px; transition: width 1s ease; }
    .progress-item span { font-size: 0.875rem; color: var(--color-gray); font-weight: 500; }`
  },
  S028: {
    title: '툴팁',
    html: `<div class="tooltip-container">
    <button class="tooltip-btn">
      Hover me
      <span class="tooltip">이것은 툴팁입니다!</span>
    </button>
  </div>`,
    css: `    .tooltip-container { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); }
    .tooltip-btn { position: relative; padding: 12px 24px; background: var(--color-primary); color: white; border: none; border-radius: var(--radius); font-weight: 500; cursor: pointer; }
    .tooltip { position: absolute; bottom: calc(100% + 10px); left: 50%; transform: translateX(-50%); padding: 8px 12px; background: var(--color-dark); color: white; font-size: 0.875rem; border-radius: 6px; white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; }
    .tooltip::after { content: ''; position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border: 5px solid transparent; border-top-color: var(--color-dark); }
    .tooltip-btn:hover .tooltip { opacity: 1; }`
  },
  S029: {
    title: '브레드크럼',
    html: `<div class="breadcrumb-container">
    <nav class="breadcrumb">
      <a href="#">홈</a>
      <span class="separator">/</span>
      <a href="#">카테고리</a>
      <span class="separator">/</span>
      <span class="current">현재 페이지</span>
    </nav>
  </div>`,
    css: `    .breadcrumb-container { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); }
    .breadcrumb { display: flex; align-items: center; gap: var(--spacing-2); padding: var(--spacing-3) var(--spacing-4); background: white; border-radius: var(--radius); box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .breadcrumb a { color: var(--color-primary); text-decoration: none; font-weight: 500; transition: var(--transition); }
    .breadcrumb a:hover { text-decoration: underline; color: #3730a3; }
    .separator { color: var(--color-gray); }
    .current { color: var(--color-dark); font-weight: 600; }`
  },
  S030: {
    title: '태그 목록',
    html: `<div class="tags-container">
    <div class="tag">HTML<button class="remove-btn">×</button></div>
    <div class="tag">CSS<button class="remove-btn">×</button></div>
    <div class="tag">JavaScript<button class="remove-btn">×</button></div>
    <div class="tag">React<button class="remove-btn">×</button></div>
  </div>`,
    css: `    .tags-container { display: flex; gap: var(--spacing-2); flex-wrap: wrap; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-3); }
    .tag { display: inline-flex; align-items: center; gap: var(--spacing-1); padding: 8px 12px; background: var(--color-primary); color: white; border-radius: 16px; font-size: 0.875rem; font-weight: 500; transition: var(--transition); }
    .tag:hover { background: #3730a3; }
    .remove-btn { background: none; border: none; color: white; font-size: 1.25rem; cursor: pointer; padding: 0 4px; transition: var(--transition); }
    .remove-btn:hover { transform: scale(1.2); }`
  }
};

let count = 0;
Object.entries(examples).forEach(([id, data]) => {
  const html = template(id, data.title, data.html, data.css, data.js || '');
  fs.writeFileSync(path.join(__dirname, id, 'C-answer.html'), html, 'utf-8');
  console.log(`✅ ${id} - ${data.title}`);
  count++;
});

console.log(`\n✨ S021-S030 ${count}개 예제 수정 완료!`);
