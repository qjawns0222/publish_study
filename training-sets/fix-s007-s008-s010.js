const fs = require('fs');
const path = require('path');

const examples = {
  'S007': {
    title: '프로필 카드',
    html: `<div class="profile-card">
    <img src="https://via.placeholder.com/120" alt="프로필 이미지" class="profile-img">
    <h3>김철수</h3>
    <p class="role">프론트엔드 개발자</p>
    <p class="description">React와 TypeScript를 사용하여 사용자 친화적인 웹 애플리케이션을 만듭니다.</p>
  </div>`,
    css: `/* Container */
    .profile-card {
      max-width: 300px;
      background: var(--color-white);
      padding: var(--spacing-4);
      border-radius: 16px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.1);
      margin: var(--spacing-6) auto;
      text-align: center;
      transition: var(--transition);
    }

    .profile-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    }

    /* Profile Image */
    .profile-img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid var(--color-light);
      margin-bottom: var(--spacing-2);
    }

    /* Name */
    .profile-card h3 {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--color-dark);
      margin-bottom: var(--spacing-1);
    }

    /* Role */
    .profile-card .role {
      font-size: 1rem;
      color: var(--color-primary);
      font-weight: 500;
      margin-bottom: var(--spacing-2);
    }

    /* Description */
    .profile-card .description {
      font-size: 0.875rem;
      color: #666;
      line-height: 1.6;
    }`,
    js: ''
  },

  'S008': {
    title: '알림 배지',
    html: `<div class="badge-container">
    <span class="badge badge-success">성공</span>
    <span class="badge badge-warning">경고</span>
    <span class="badge badge-error">오류</span>
    <span class="badge badge-info">정보</span>
  </div>`,
    css: `/* Container */
    .badge-container {
      display: flex;
      gap: var(--spacing-2);
      padding: var(--spacing-6);
      background: var(--color-light);
      min-height: 100vh;
      align-items: flex-start;
      flex-wrap: wrap;
    }

    /* 기본 배지 스타일 */
    .badge {
      display: inline-block;
      padding: 6px 12px;
      font-size: 0.875rem;
      font-weight: 500;
      border-radius: 12px;
      transition: var(--transition);
    }

    .badge:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    /* Success 배지 */
    .badge-success {
      background: var(--color-secondary);
      color: var(--color-white);
    }

    /* Warning 배지 */
    .badge-warning {
      background: var(--color-accent);
      color: var(--color-white);
    }

    /* Error 배지 */
    .badge-error {
      background: #EF4444;
      color: var(--color-white);
    }

    /* Info 배지 */
    .badge-info {
      background: var(--color-primary);
      color: var(--color-white);
    }`,
    js: ''
  },

  'S010': {
    title: '간단한 네비게이션 바',
    html: `<nav class="navbar">
    <a href="#" class="active">홈</a>
    <a href="#">소개</a>
    <a href="#">서비스</a>
    <a href="#">블로그</a>
    <a href="#">연락처</a>
  </nav>`,
    css: `/* Navigation Bar */
    .navbar {
      display: flex;
      gap: var(--spacing-3);
      padding: var(--spacing-2) var(--spacing-6);
      background: var(--color-dark);
    }

    /* Links */
    .navbar a {
      color: var(--color-white);
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      padding-bottom: 4px;
      border-bottom: 2px solid transparent;
      transition: var(--transition);
    }

    .navbar a:hover {
      color: var(--color-primary);
    }

    .navbar a.active {
      color: var(--color-primary);
      border-bottom-color: var(--color-primary);
    }`,
    js: ''
  }
};

// Generate HTML file
function generateHTML(id, example, data) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${id} - ${example.title} | 완성 예시</title>
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

${data.css}

  </style>
</head>
<body>
  <!-- ========================================
       완성 예시 HTML
       ======================================== -->
  ${data.html}

  <!-- 안내 배너 (하단 고정) -->
  <div style="position: fixed; bottom: 24px; right: 24px; background: #10B981; color: white; padding: 16px 24px; text-align: center; font-size: 0.875rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 9999; border-radius: 12px; max-width: 400px;">
    <strong>✅ ${id} 완성 예시</strong>
    <div style="margin-top: 8px;">
      <a href="A-guide.html" style="color: white; text-decoration: none; border: 1px solid white; padding: 6px 12px; border-radius: 6px; display: inline-block; margin-right: 8px;">← 가이드</a>
      <a href="B-practice.html" style="color: white; text-decoration: none; border: 1px solid white; padding: 6px 12px; border-radius: 6px; display: inline-block;">실습하기 →</a>
    </div>
  </div>

  <script>
${data.js}

    console.log('✅ ${id} - ${example.title} 완성 예시');
  </script>
</body>
</html>`;
}

// Process each example
Object.keys(examples).forEach(id => {
  const data = examples[id];
  const filePath = path.join(__dirname, id, 'C-answer.html');
  const htmlContent = generateHTML(id, data, data);

  fs.writeFileSync(filePath, htmlContent, 'utf-8');
  console.log(`✅ ${id} - ${data.title} 수정 완료`);
});

console.log('\n✨ S007, S008, S010 수정 완료!');
