// 모든 100개 예제의 정답 템플릿을 자동 생성하는 헬퍼 함수

function generateDefaultAnswerByCategory(example) {
  const templates = {
    layout: {
      html: `
  <div class="layout-example">
    <header style="background: var(--color-primary); color: white; padding: var(--spacing-3); text-align: center;">
      <h2>${example.title}</h2>
    </header>
    <main style="padding: var(--spacing-6); max-width: 1200px; margin: 0 auto;">
      <p>${example.desc}</p>
      <p style="margin-top: 16px;">이 예제는 레이아웃 구조를 연습합니다.</p>
    </main>
  </div>`,
      css: `
    body {
      margin: 0;
      background: var(--color-light);
    }`
    },
    component: {
      html: `
  <div class="container">
    <div class="component" style="background: white; padding: var(--spacing-5); border-radius: var(--radius); box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 500px; margin: 0 auto; text-align: center;">
      <h2 style="color: var(--color-primary);">${example.title}</h2>
      <p style="margin-top: var(--spacing-2);">${example.desc}</p>
      <button style="background: var(--color-primary); color: white; padding: 12px 24px; border: none; border-radius: var(--radius); margin-top: var(--spacing-3); cursor: pointer;">버튼 예시</button>
    </div>
  </div>`,
      css: `
    .container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--spacing-4);
      background: var(--color-light);
    }`
    },
    form: {
      html: `
  <div class="form-container">
    <form style="background: white; padding: var(--spacing-5); border-radius: var(--radius); max-width: 500px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      <h2 style="color: var(--color-dark); margin-bottom: var(--spacing-3);">${example.title}</h2>
      <div style="margin-bottom: var(--spacing-3);">
        <label style="display: block; margin-bottom: 8px; font-weight: 500;">이름</label>
        <input type="text" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: var(--radius);" placeholder="이름을 입력하세요">
      </div>
      <div style="margin-bottom: var(--spacing-3);">
        <label style="display: block; margin-bottom: 8px; font-weight: 500;">이메일</label>
        <input type="email" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: var(--radius);" placeholder="email@example.com">
      </div>
      <button type="submit" style="width: 100%; background: var(--color-primary); color: white; padding: 12px; border: none; border-radius: var(--radius); cursor: pointer; font-size: 1rem;">제출하기</button>
    </form>
  </div>`,
      css: `
    .form-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--spacing-4);
      background: var(--color-light);
    }`
    },
    visual: {
      html: `
  <div class="visual-section" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); min-height: 100vh; display: flex; align-items: center; justify-content: center; color: white; text-align: center; padding: var(--spacing-6);">
    <div>
      <h1 style="font-size: 3rem; margin-bottom: var(--spacing-3);">${example.title}</h1>
      <p style="font-size: 1.25rem; margin-bottom: var(--spacing-4);">${example.desc}</p>
      <button style="background: white; color: var(--color-primary); padding: 16px 32px; border: none; border-radius: var(--radius); font-size: 1.1rem; cursor: pointer;">더 알아보기</button>
    </div>
  </div>`,
      css: `
    body {
      margin: 0;
    }`
    },
    animation: {
      html: `
  <div class="animation-demo" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--color-light);">
    <div class="animated-element" style="background: var(--color-primary); color: white; padding: var(--spacing-5); border-radius: var(--radius); text-align: center;">
      <h2>${example.title}</h2>
      <p style="margin-top: var(--spacing-2);">${example.desc}</p>
    </div>
  </div>`,
      css: `
    .animated-element {
      animation: fadeInUp 1s ease;
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
  };

  return templates[example.category] || templates.component;
}

// 모든 예제 데이터를 받아서 answerTemplates 객체 생성
function generateAllAnswerTemplates(examplesData) {
  const templates = {};

  examplesData.forEach(example => {
    templates[example.id] = generateDefaultAnswerByCategory(example);
  });

  return templates;
}

module.exports = { generateDefaultAnswerByCategory, generateAllAnswerTemplates };
