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
  S014: {
    title: '체크박스와 라디오',
    html: `<div class="form-container">
    <div class="form-section">
      <h3>체크박스</h3>
      <label class="checkbox"><input type="checkbox"><span>옵션 1</span></label>
      <label class="checkbox"><input type="checkbox" checked><span>옵션 2</span></label>
      <label class="checkbox"><input type="checkbox"><span>옵션 3</span></label>
    </div>
    <div class="form-section">
      <h3>라디오 버튼</h3>
      <label class="radio"><input type="radio" name="choice" checked><span>선택 1</span></label>
      <label class="radio"><input type="radio" name="choice"><span>선택 2</span></label>
      <label class="radio"><input type="radio" name="choice"><span>선택 3</span></label>
    </div>
  </div>`,
    css: `.form-container { display: flex; gap: var(--spacing-6); padding: var(--spacing-6); background: var(--color-light); min-height: 100vh; }
    .form-section { background: white; padding: var(--spacing-4); border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .form-section h3 { margin-bottom: var(--spacing-3); color: var(--color-dark); }
    .checkbox, .radio { display: flex; align-items: center; gap: var(--spacing-2); margin-bottom: var(--spacing-2); cursor: pointer; }
    .checkbox input, .radio input { width: 20px; height: 20px; cursor: pointer; }
    .checkbox:hover, .radio:hover { color: var(--color-primary); }`
  },
  S015: {
    title: '선택 박스',
    html: `<div class="select-container">
    <div class="select-wrapper">
      <label for="country">국가 선택</label>
      <select id="country">
        <option>대한민국</option>
        <option>미국</option>
        <option>일본</option>
        <option>중국</option>
      </select>
    </div>
  </div>`,
    css: `.select-container { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); }
    .select-wrapper { width: 300px; }
    label { display: block; margin-bottom: var(--spacing-1); font-weight: 500; }
    select { width: 100%; padding: 12px; border: 2px solid var(--color-light); border-radius: var(--radius); font-size: 1rem; background: white; cursor: pointer; transition: var(--transition); }
    select:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(79,70,229,0.1); }
    select:hover { border-color: var(--color-primary); }`
  },
  S016: {
    title: '히어로 섹션',
    html: `<section class="hero">
    <div class="hero-content">
      <h1>멋진 웹사이트 만들기</h1>
      <p>퍼블리싱 훈련으로 프론트엔드 개발자가 되어보세요</p>
      <button class="cta-button">시작하기</button>
    </div>
  </section>`,
    css: `.hero { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); background-size: cover; background-position: center; color: white; text-align: center; padding: var(--spacing-3); }
    .hero-content h1 { font-size: 3rem; margin-bottom: var(--spacing-3); }
    .hero-content p { font-size: 1.5rem; margin-bottom: var(--spacing-4); opacity: 0.9; }
    .cta-button { padding: 16px 48px; background: white; color: #667eea; border: none; border-radius: 32px; font-size: 1.25rem; font-weight: 600; cursor: pointer; transition: var(--transition); }
    .cta-button:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }`
  },
  S017: {
    title: '이미지 갤러리',
    html: `<div class="gallery">
    ${Array(6).fill(0).map((_, i) => `<div class="gallery-item"><img src="https://via.placeholder.com/300x200" alt="Image ${i+1}"></div>`).join('\n    ')}
  </div>`,
    css: `.gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-3); padding: var(--spacing-6); background: var(--color-light); min-height: 100vh; }
    .gallery-item { overflow: hidden; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: var(--transition); }
    .gallery-item:hover { transform: scale(1.05); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
    .gallery-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
    @media (max-width: 768px) { .gallery { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 480px) { .gallery { grid-template-columns: 1fr; } }`
  },
  S018: {
    title: '상품 카드',
    html: `<div class="product-container">
    <div class="product-card">
      <img src="https://via.placeholder.com/300x200" alt="상품" class="product-img">
      <div class="product-info">
        <h3>상품 이름</h3>
        <p class="price">₩49,900</p>
        <button class="buy-btn">구매하기</button>
      </div>
    </div>
  </div>`,
    css: `.product-container { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-3); }
    .product-card { width: 300px; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.1); transition: var(--transition); }
    .product-card:hover { transform: translateY(-8px); box-shadow: 0 12px 32px rgba(0,0,0,0.15); }
    .product-img { width: 100%; height: 200px; object-fit: cover; }
    .product-info { padding: var(--spacing-3); }
    .product-info h3 { margin-bottom: var(--spacing-2); color: var(--color-dark); }
    .price { font-size: 1.5rem; font-weight: bold; color: var(--color-primary); margin-bottom: var(--spacing-3); }
    .buy-btn { width: 100%; padding: 12px; background: var(--color-primary); color: white; border: none; border-radius: var(--radius); font-weight: 500; cursor: pointer; transition: var(--transition); }
    .buy-btn:hover { background: #3730a3; }`
  },
  S019: {
    title: '푸터 디자인',
    html: `<footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>회사명</h3>
        <p>최고의 서비스를 제공합니다</p>
      </div>
      <div class="footer-section">
        <h3>링크</h3>
        <a href="#">회사소개</a>
        <a href="#">서비스</a>
        <a href="#">블로그</a>
      </div>
      <div class="footer-section">
        <h3>연락처</h3>
        <p>Email: info@example.com</p>
        <p>Tel: 02-1234-5678</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 웹 퍼블리싱 훈련. All rights reserved.</p>
    </div>
  </footer>`,
    css: `.footer { background: var(--color-dark); color: white; padding: var(--spacing-6) var(--spacing-3); }
    .footer-content { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-4); max-width: 1200px; margin: 0 auto; margin-bottom: var(--spacing-4); }
    .footer-section h3 { margin-bottom: var(--spacing-2); color: var(--color-primary); }
    .footer-section a { display: block; color: rgba(255,255,255,0.8); text-decoration: none; margin-bottom: var(--spacing-1); transition: var(--transition); }
    .footer-section a:hover { color: white; padding-left: 4px; }
    .footer-section p { color: rgba(255,255,255,0.7); margin-bottom: var(--spacing-1); }
    .footer-bottom { text-align: center; padding-top: var(--spacing-3); border-top: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); }
    @media (max-width: 768px) { .footer-content { grid-template-columns: 1fr; } }`
  },
  S020: {
    title: '컬러 팔레트',
    html: `<div class="palette-container">
    <h2>브랜드 컬러</h2>
    <div class="palette">
      <div class="color-box" style="background: #4F46E5;"><span>Primary<br>#4F46E5</span></div>
      <div class="color-box" style="background: #10B981;"><span>Secondary<br>#10B981</span></div>
      <div class="color-box" style="background: #FF9800;"><span>Accent<br>#FF9800</span></div>
      <div class="color-box" style="background: #222222;"><span>Dark<br>#222222</span></div>
      <div class="color-box" style="background: #F3F4F6;"><span style="color: #222;">Light<br>#F3F4F6</span></div>
    </div>
  </div>`,
    css: `.palette-container { padding: var(--spacing-6); background: white; min-height: 100vh; }
    .palette-container h2 { text-align: center; margin-bottom: var(--spacing-6); color: var(--color-dark); }
    .palette { display: grid; grid-template-columns: repeat(5, 1fr); gap: var(--spacing-3); max-width: 1000px; margin: 0 auto; }
    .color-box { aspect-ratio: 1; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 500; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: var(--transition); cursor: pointer; }
    .color-box:hover { transform: scale(1.1); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
    @media (max-width: 768px) { .palette { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 480px) { .palette { grid-template-columns: 1fr; } }`
  }
};

let count = 0;
Object.entries(examples).forEach(([id, data]) => {
  const html = template(id, data.title, data.html, data.css, data.js || '');
  fs.writeFileSync(path.join(__dirname, id, 'C-answer.html'), html, 'utf-8');
  console.log(`✅ ${id} - ${data.title}`);
  count++;
});

console.log(`\n✨ ${count}개 예제 수정 완료!`);
