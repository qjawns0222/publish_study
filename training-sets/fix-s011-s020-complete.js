const fs = require('fs');
const path = require('path');

const completeExamples = {
  'S011': {
    title: '기본 입력 폼',
    html: `<div class="form-container">
    <form class="basic-form">
      <div class="form-group">
        <label for="name">이름</label>
        <input type="text" id="name" placeholder="홍길동" required>
      </div>

      <div class="form-group">
        <label for="email">이메일</label>
        <input type="email" id="email" placeholder="example@email.com" required>
      </div>

      <div class="form-group">
        <label for="message">메시지</label>
        <textarea id="message" rows="4" placeholder="메시지를 입력하세요"></textarea>
      </div>

      <button type="submit" class="submit-btn">제출하기</button>
    </form>
  </div>`,
    css: `/* Container */
    .form-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: var(--color-light);
      padding: var(--spacing-3);
    }

    /* Form */
    .basic-form {
      width: 100%;
      max-width: 500px;
      background: var(--color-white);
      padding: var(--spacing-6);
      border-radius: 12px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.1);
    }

    /* Form Group */
    .form-group {
      margin-bottom: var(--spacing-3);
    }

    /* Label */
    label {
      display: block;
      margin-bottom: var(--spacing-1);
      font-weight: 500;
      color: var(--color-dark);
    }

    /* Input & Textarea */
    input, textarea {
      width: 100%;
      padding: 12px;
      border: 2px solid var(--color-light);
      border-radius: var(--radius);
      font-size: 1rem;
      font-family: inherit;
      transition: var(--transition);
    }

    input:focus, textarea:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    }

    /* Button */
    .submit-btn {
      width: 100%;
      padding: 12px;
      background: var(--color-primary);
      color: var(--color-white);
      border: none;
      border-radius: var(--radius);
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: var(--transition);
    }

    .submit-btn:hover {
      background: #3730a3;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
    }`,
    js: ''
  },

  'S012': {
    title: '로그인 폼',
    html: `<div class="login-container">
    <form class="login-form">
      <h2>로그인</h2>

      <div class="form-group">
        <label for="email">이메일</label>
        <input type="email" id="email" placeholder="email@example.com" required>
      </div>

      <div class="form-group">
        <label for="password">비밀번호</label>
        <input type="password" id="password" placeholder="••••••••" required>
      </div>

      <div class="remember">
        <input type="checkbox" id="remember">
        <label for="remember">로그인 상태 유지</label>
      </div>

      <button type="submit" class="login-btn">로그인</button>

      <p class="signup-link">계정이 없으신가요? <a href="#">회원가입</a></p>
    </form>
  </div>`,
    css: `/* Container */
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: var(--spacing-3);
    }

    /* Form */
    .login-form {
      width: 100%;
      max-width: 400px;
      background: var(--color-white);
      padding: var(--spacing-6);
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }

    .login-form h2 {
      margin-bottom: var(--spacing-4);
      text-align: center;
      color: var(--color-dark);
    }

    /* Form Group */
    .form-group {
      margin-bottom: var(--spacing-3);
    }

    label {
      display: block;
      margin-bottom: var(--spacing-1);
      font-weight: 500;
      color: var(--color-dark);
    }

    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 12px;
      border: 2px solid var(--color-light);
      border-radius: var(--radius);
      font-size: 1rem;
      transition: var(--transition);
    }

    input:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    }

    /* Remember Me */
    .remember {
      display: flex;
      align-items: center;
      gap: var(--spacing-1);
      margin-bottom: var(--spacing-3);
    }

    .remember input[type="checkbox"] {
      width: auto;
    }

    /* Login Button */
    .login-btn {
      width: 100%;
      padding: 12px;
      background: var(--color-primary);
      color: var(--color-white);
      border: none;
      border-radius: var(--radius);
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: var(--transition);
    }

    .login-btn:hover {
      background: #3730a3;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
    }

    /* Signup Link */
    .signup-link {
      margin-top: var(--spacing-3);
      text-align: center;
      font-size: 0.875rem;
      color: var(--color-gray);
    }

    .signup-link a {
      color: var(--color-primary);
      text-decoration: none;
      font-weight: 500;
    }

    .signup-link a:hover {
      text-decoration: underline;
    }`,
    js: ''
  },

  'S013': {
    title: '검색창',
    html: `<div class="search-container">
    <div class="search-box">
      <span class="search-icon">🔍</span>
      <input type="search" placeholder="검색어를 입력하세요" class="search-input">
    </div>
  </div>`,
    css: `/* Container */
    .search-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: var(--color-light);
      padding: var(--spacing-3);
    }

    /* Search Box */
    .search-box {
      position: relative;
      width: 100%;
      max-width: 600px;
    }

    /* Search Icon */
    .search-icon {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.25rem;
      color: #999;
      pointer-events: none;
    }

    /* Search Input */
    .search-input {
      width: 100%;
      padding: 14px 16px 14px 48px;
      border: 2px solid var(--color-light);
      border-radius: 24px;
      font-size: 1rem;
      transition: var(--transition);
      background: var(--color-white);
    }

    .search-input:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
    }

    .search-input:focus + .search-icon,
    .search-input:not(:placeholder-shown) + .search-icon {
      color: var(--color-primary);
    }`,
    js: ''
  }

  // S014-S020은 다음 메시지에서 계속...
};

// Generate HTML template
function generateHTML(id, data) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${id} - ${data.title} | 완성 예시</title>
  <style>
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

    :root {
      --color-primary: #4F46E5;
      --color-secondary: #10B981;
      --color-accent: #FF9800;
      --color-dark: #222222;
      --color-gray: #6B7280;
      --color-light: #F3F4F6;
      --color-white: #FFFFFF;
      --spacing-1: 8px;
      --spacing-2: 16px;
      --spacing-3: 24px;
      --spacing-4: 32px;
      --spacing-5: 40px;
      --spacing-6: 48px;
      --radius: 8px;
      --transition: 0.3s ease;
    }

${data.css}

  </style>
</head>
<body>
  ${data.html}

  <div style="position: fixed; bottom: 24px; right: 24px; background: #10B981; color: white; padding: 16px 24px; text-align: center; font-size: 0.875rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 9999; border-radius: 12px; max-width: 400px;">
    <strong>✅ ${id} 완성 예시</strong>
    <div style="margin-top: 8px;">
      <a href="A-guide.html" style="color: white; text-decoration: none; border: 1px solid white; padding: 6px 12px; border-radius: 6px; display: inline-block; margin-right: 8px;">← 가이드</a>
      <a href="B-practice.html" style="color: white; text-decoration: none; border: 1px solid white; padding: 6px 12px; border-radius: 6px; display: inline-block;">실습하기 →</a>
    </div>
  </div>

  <script>
${data.js}
    console.log('✅ ${id} - ${data.title} 완성 예시');
  </script>
</body>
</html>`;
}

// Process examples
let count = 0;
Object.keys(completeExamples).forEach(id => {
  const data = completeExamples[id];
  const filePath = path.join(__dirname, id, 'C-answer.html');
  const htmlContent = generateHTML(id, data);

  fs.writeFileSync(filePath, htmlContent, 'utf-8');
  count++;
  console.log(`✅ ${id} - ${data.title} 수정 완료`);
});

console.log(`\n✨ ${count}개 예제 수정 완료!`);
console.log('📝 다음: S014-S020도 계속 수정합니다...');
