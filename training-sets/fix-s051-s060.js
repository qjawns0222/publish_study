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
  S051: {
    title: '다단계 폼',
    html: `<div class="multistep-container">
    <div class="progress-bar">
      <div class="progress" id="progress"></div>
    </div>
    <form class="multistep-form">
      <div class="form-step active">
        <h2>Step 1: 기본 정보</h2>
        <div class="form-group">
          <label>이름</label>
          <input type="text" required>
        </div>
        <div class="form-group">
          <label>이메일</label>
          <input type="email" required>
        </div>
      </div>
      <div class="form-step">
        <h2>Step 2: 주소</h2>
        <div class="form-group">
          <label>주소</label>
          <input type="text" required>
        </div>
        <div class="form-group">
          <label>도시</label>
          <input type="text" required>
        </div>
      </div>
      <div class="form-step">
        <h2>Step 3: 완료</h2>
        <p>모든 정보가 입력되었습니다.</p>
      </div>
      <div class="form-buttons">
        <button type="button" id="prevBtn" onclick="changeStep(-1)">이전</button>
        <button type="button" id="nextBtn" onclick="changeStep(1)">다음</button>
      </div>
    </form>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-3); }
    .multistep-container { max-width: 600px; width: 100%; }
    .progress-bar { height: 6px; background: #E5E7EB; border-radius: 3px; margin-bottom: var(--spacing-6); overflow: hidden; }
    .progress { height: 100%; background: var(--color-primary); width: 33.33%; transition: width 0.3s ease; }
    .multistep-form { background: white; padding: var(--spacing-6); border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
    .form-step { display: none; }
    .form-step.active { display: block; }
    .form-step h2 { margin-bottom: var(--spacing-4); color: var(--color-dark); }
    .form-group { margin-bottom: var(--spacing-3); }
    .form-group label { display: block; margin-bottom: var(--spacing-1); font-weight: 500; color: var(--color-dark); }
    .form-group input { width: 100%; padding: 12px; border: 2px solid var(--color-light); border-radius: var(--radius); font-size: 1rem; transition: var(--transition); }
    .form-group input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(79,70,229,0.1); }
    .form-buttons { display: flex; gap: var(--spacing-2); margin-top: var(--spacing-4); }
    .form-buttons button { flex: 1; padding: 12px; border: none; border-radius: var(--radius); font-weight: 500; cursor: pointer; transition: var(--transition); }
    #prevBtn { background: var(--color-light); color: var(--color-dark); }
    #nextBtn { background: var(--color-primary); color: white; }
    #prevBtn:hover { background: #E5E7EB; }
    #nextBtn:hover { background: #3730a3; }`,
    js: `    let currentStep = 1;
    const totalSteps = 3;
    function changeStep(n) {
      const steps = document.querySelectorAll('.form-step');
      currentStep += n;
      if (currentStep > totalSteps) currentStep = totalSteps;
      if (currentStep < 1) currentStep = 1;
      steps.forEach((step, i) => {
        step.classList.toggle('active', i + 1 === currentStep);
      });
      document.getElementById('progress').style.width = ((currentStep / totalSteps) * 100) + '%';
      document.getElementById('prevBtn').style.display = currentStep === 1 ? 'none' : 'block';
      document.getElementById('nextBtn').textContent = currentStep === totalSteps ? '완료' : '다음';
    }
    changeStep(0);`
  },
  S052: {
    title: '실시간 검증 폼',
    html: `<div class="validation-container">
    <form class="validation-form">
      <h2>실시간 검증 폼</h2>
      <div class="form-group">
        <label>이메일</label>
        <input type="email" id="email" placeholder="example@email.com">
        <span class="error-msg" id="emailError"></span>
      </div>
      <div class="form-group">
        <label>비밀번호 (8자 이상)</label>
        <input type="password" id="password">
        <span class="error-msg" id="passwordError"></span>
      </div>
      <div class="form-group">
        <label>비밀번호 확인</label>
        <input type="password" id="confirmPassword">
        <span class="error-msg" id="confirmError"></span>
      </div>
      <button type="submit">가입하기</button>
    </form>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-3); }
    .validation-form { max-width: 500px; width: 100%; background: white; padding: var(--spacing-6); border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
    .validation-form h2 { margin-bottom: var(--spacing-4); text-align: center; color: var(--color-dark); }
    .form-group { margin-bottom: var(--spacing-3); }
    .form-group label { display: block; margin-bottom: var(--spacing-1); font-weight: 500; color: var(--color-dark); }
    .form-group input { width: 100%; padding: 12px; border: 2px solid var(--color-light); border-radius: var(--radius); font-size: 1rem; transition: var(--transition); }
    .form-group input:focus { outline: none; border-color: var(--color-primary); }
    .form-group input.error { border-color: #EF4444; }
    .form-group input.success { border-color: var(--color-secondary); }
    .error-msg { display: block; margin-top: var(--spacing-1); color: #EF4444; font-size: 0.875rem; min-height: 20px; }
    button { width: 100%; padding: 14px; background: var(--color-primary); color: white; border: none; border-radius: var(--radius); font-size: 1rem; font-weight: 600; cursor: pointer; transition: var(--transition); }
    button:hover { background: #3730a3; }`,
    js: `    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirmPassword');
    emailInput.addEventListener('input', () => {
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      const isValid = emailRegex.test(emailInput.value);
      emailInput.classList.toggle('error', !isValid && emailInput.value);
      emailInput.classList.toggle('success', isValid);
      document.getElementById('emailError').textContent = !isValid && emailInput.value ? '올바른 이메일 형식이 아닙니다' : '';
    });
    passwordInput.addEventListener('input', () => {
      const isValid = passwordInput.value.length >= 8;
      passwordInput.classList.toggle('error', !isValid && passwordInput.value);
      passwordInput.classList.toggle('success', isValid);
      document.getElementById('passwordError').textContent = !isValid && passwordInput.value ? '비밀번호는 8자 이상이어야 합니다' : '';
    });
    confirmInput.addEventListener('input', () => {
      const isValid = confirmInput.value === passwordInput.value;
      confirmInput.classList.toggle('error', !isValid && confirmInput.value);
      confirmInput.classList.toggle('success', isValid && confirmInput.value);
      document.getElementById('confirmError').textContent = !isValid && confirmInput.value ? '비밀번호가 일치하지 않습니다' : '';
    });`
  },
  S053: {
    title: '태그 입력',
    html: `<div class="tag-input-container">
    <div class="tag-input-box">
      <h2>태그 입력</h2>
      <div class="tags" id="tags"></div>
      <input type="text" id="tagInput" placeholder="태그를 입력하고 Enter를 누르세요">
    </div>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-3); }
    .tag-input-box { max-width: 600px; width: 100%; background: white; padding: var(--spacing-6); border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
    .tag-input-box h2 { margin-bottom: var(--spacing-4); color: var(--color-dark); }
    .tags { display: flex; flex-wrap: wrap; gap: var(--spacing-2); margin-bottom: var(--spacing-3); min-height: 40px; }
    .tag { display: inline-flex; align-items: center; gap: var(--spacing-1); padding: 8px 12px; background: var(--color-primary); color: white; border-radius: 16px; font-size: 0.875rem; font-weight: 500; }
    .tag-remove { background: none; border: none; color: white; font-size: 1.125rem; cursor: pointer; padding: 0 4px; }
    .tag-remove:hover { transform: scale(1.2); }
    #tagInput { width: 100%; padding: 12px; border: 2px solid var(--color-light); border-radius: var(--radius); font-size: 1rem; transition: var(--transition); }
    #tagInput:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(79,70,229,0.1); }`,
    js: `    const tagInput = document.getElementById('tagInput');
    const tagsContainer = document.getElementById('tags');
    const tags = [];
    tagInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && tagInput.value.trim()) {
        e.preventDefault();
        const tagText = tagInput.value.trim();
        tags.push(tagText);
        renderTags();
        tagInput.value = '';
      }
    });
    function renderTags() {
      tagsContainer.innerHTML = tags.map((tag, index) => \`
        <span class="tag">
          \${tag}
          <button class="tag-remove" onclick="removeTag(\${index})">×</button>
        </span>
      \`).join('');
    }
    function removeTag(index) {
      tags.splice(index, 1);
      renderTags();
    }`
  },
  S054: {
    title: '날짜 선택기',
    html: `<div class="datepicker-container">
    <div class="datepicker">
      <div class="datepicker-header">
        <button onclick="changeMonth(-1)">‹</button>
        <span id="monthYear">2024년 1월</span>
        <button onclick="changeMonth(1)">›</button>
      </div>
      <div class="datepicker-days">
        <span>일</span><span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span>
      </div>
      <div class="datepicker-dates" id="dates"></div>
    </div>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-3); }
    .datepicker { max-width: 400px; width: 100%; background: white; padding: var(--spacing-4); border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
    .datepicker-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-3); }
    .datepicker-header button { background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--color-primary); padding: var(--spacing-1); transition: var(--transition); }
    .datepicker-header button:hover { background: var(--color-light); border-radius: var(--radius); }
    .datepicker-header span { font-weight: 600; color: var(--color-dark); }
    .datepicker-days { display: grid; grid-template-columns: repeat(7, 1fr); gap: var(--spacing-1); margin-bottom: var(--spacing-2); }
    .datepicker-days span { text-align: center; font-weight: 600; color: var(--color-gray); font-size: 0.875rem; padding: var(--spacing-1); }
    .datepicker-dates { display: grid; grid-template-columns: repeat(7, 1fr); gap: var(--spacing-1); }
    .date { text-align: center; padding: var(--spacing-2); border-radius: var(--radius); cursor: pointer; transition: var(--transition); }
    .date:hover { background: var(--color-light); }
    .date.today { background: var(--color-primary); color: white; font-weight: 600; }
    .date.selected { background: var(--color-secondary); color: white; }
    .date.other-month { color: #D1D5DB; }`,
    js: `    let currentDate = new Date();
    function renderCalendar() {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const lastDate = new Date(year, month + 1, 0).getDate();
      const prevLastDate = new Date(year, month, 0).getDate();
      document.getElementById('monthYear').textContent = \`\${year}년 \${month + 1}월\`;
      let html = '';
      for (let i = firstDay - 1; i >= 0; i--) {
        html += \`<div class="date other-month">\${prevLastDate - i}</div>\`;
      }
      for (let i = 1; i <= lastDate; i++) {
        const isToday = i === new Date().getDate() && month === new Date().getMonth();
        html += \`<div class="date \${isToday ? 'today' : ''}" onclick="selectDate(this)">\${i}</div>\`;
      }
      document.getElementById('dates').innerHTML = html;
    }
    function changeMonth(n) {
      currentDate.setMonth(currentDate.getMonth() + n);
      renderCalendar();
    }
    function selectDate(el) {
      document.querySelectorAll('.date').forEach(d => d.classList.remove('selected'));
      el.classList.add('selected');
    }
    renderCalendar();`
  },
  S055: {
    title: '색상 선택기',
    html: `<div class="color-picker-container">
    <div class="color-picker">
      <h2>색상 선택</h2>
      <div class="color-display" id="colorDisplay"></div>
      <div class="color-value">#4F46E5</div>
      <div class="color-presets">
        <div class="preset" style="background: #4F46E5" onclick="selectColor('#4F46E5')"></div>
        <div class="preset" style="background: #10B981" onclick="selectColor('#10B981')"></div>
        <div class="preset" style="background: #FF9800" onclick="selectColor('#FF9800')"></div>
        <div class="preset" style="background: #EF4444" onclick="selectColor('#EF4444')"></div>
        <div class="preset" style="background: #8B5CF6" onclick="selectColor('#8B5CF6')"></div>
        <div class="preset" style="background: #EC4899" onclick="selectColor('#EC4899')"></div>
      </div>
      <input type="color" id="colorInput" value="#4F46E5">
    </div>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-3); }
    .color-picker { max-width: 400px; width: 100%; background: white; padding: var(--spacing-6); border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
    .color-picker h2 { margin-bottom: var(--spacing-4); text-align: center; color: var(--color-dark); }
    .color-display { width: 100%; height: 200px; border-radius: 12px; background: #4F46E5; margin-bottom: var(--spacing-3); box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: var(--transition); }
    .color-value { text-align: center; font-size: 1.5rem; font-weight: 600; color: var(--color-dark); margin-bottom: var(--spacing-4); }
    .color-presets { display: grid; grid-template-columns: repeat(6, 1fr); gap: var(--spacing-2); margin-bottom: var(--spacing-4); }
    .preset { aspect-ratio: 1; border-radius: var(--radius); cursor: pointer; transition: var(--transition); border: 3px solid transparent; }
    .preset:hover { transform: scale(1.1); border-color: var(--color-dark); }
    #colorInput { width: 100%; height: 48px; border: none; border-radius: var(--radius); cursor: pointer; }`,
    js: `    const colorInput = document.getElementById('colorInput');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorValue = document.querySelector('.color-value');
    colorInput.addEventListener('input', (e) => {
      const color = e.target.value;
      colorDisplay.style.background = color;
      colorValue.textContent = color.toUpperCase();
    });
    function selectColor(color) {
      colorInput.value = color;
      colorDisplay.style.background = color;
      colorValue.textContent = color.toUpperCase();
    }`
  },
  S056: {
    title: '랜딩 페이지',
    html: `<div class="landing-page">
    <section class="hero">
      <h1>비즈니스를 성장시키세요</h1>
      <p>최고의 솔루션으로 당신의 목표를 달성하세요</p>
      <button class="cta-btn">시작하기</button>
    </section>
    <section class="features">
      <div class="feature">
        <div class="feature-icon">🚀</div>
        <h3>빠른 성능</h3>
        <p>초고속 로딩 속도</p>
      </div>
      <div class="feature">
        <div class="feature-icon">🔒</div>
        <h3>안전한 보안</h3>
        <p>엔터프라이즈급 보안</p>
      </div>
      <div class="feature">
        <div class="feature-icon">💎</div>
        <h3>프리미엄 품질</h3>
        <p>최상의 사용자 경험</p>
      </div>
    </section>
  </div>`,
    css: `    body { margin: 0; }
    .hero { display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center; padding: var(--spacing-6); }
    .hero h1 { font-size: 3.5rem; margin-bottom: var(--spacing-3); }
    .hero p { font-size: 1.5rem; margin-bottom: var(--spacing-6); opacity: 0.9; }
    .cta-btn { padding: 18px 48px; background: white; color: #667eea; border: none; border-radius: 32px; font-size: 1.25rem; font-weight: 600; cursor: pointer; transition: var(--transition); }
    .cta-btn:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }
    .features { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-6); padding: var(--spacing-6); background: white; }
    .feature { text-align: center; padding: var(--spacing-4); }
    .feature-icon { font-size: 4rem; margin-bottom: var(--spacing-3); }
    .feature h3 { font-size: 1.5rem; margin-bottom: var(--spacing-2); color: var(--color-dark); }
    .feature p { color: var(--color-gray); }
    @media (max-width: 768px) { .features { grid-template-columns: 1fr; } .hero h1 { font-size: 2rem; } }`
  },
  S057: {
    title: '가격 표',
    html: `<div class="pricing-container">
    <h1>요금제 선택</h1>
    <div class="pricing-cards">
      <div class="pricing-card">
        <h3>Basic</h3>
        <div class="price">₩9,900<span>/월</span></div>
        <ul>
          <li>✓ 기본 기능</li>
          <li>✓ 5GB 저장공간</li>
          <li>✓ 이메일 지원</li>
        </ul>
        <button>선택하기</button>
      </div>
      <div class="pricing-card featured">
        <div class="badge">인기</div>
        <h3>Pro</h3>
        <div class="price">₩29,900<span>/월</span></div>
        <ul>
          <li>✓ 모든 기본 기능</li>
          <li>✓ 50GB 저장공간</li>
          <li>✓ 우선 지원</li>
          <li>✓ 고급 분석</li>
        </ul>
        <button>선택하기</button>
      </div>
      <div class="pricing-card">
        <h3>Enterprise</h3>
        <div class="price">₩99,900<span>/월</span></div>
        <ul>
          <li>✓ 무제한 기능</li>
          <li>✓ 무제한 저장공간</li>
          <li>✓ 24/7 전화 지원</li>
          <li>✓ 맞춤형 솔루션</li>
        </ul>
        <button>선택하기</button>
      </div>
    </div>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-6); }
    .pricing-container { max-width: 1200px; width: 100%; }
    .pricing-container h1 { text-align: center; margin-bottom: var(--spacing-6); color: var(--color-dark); font-size: 2.5rem; }
    .pricing-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-4); }
    .pricing-card { background: white; padding: var(--spacing-6); border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: var(--transition); position: relative; }
    .pricing-card:hover { transform: translateY(-8px); box-shadow: 0 12px 32px rgba(0,0,0,0.15); }
    .pricing-card.featured { border: 3px solid var(--color-primary); }
    .badge { position: absolute; top: -12px; right: 24px; background: var(--color-primary); color: white; padding: 6px 16px; border-radius: 16px; font-size: 0.875rem; font-weight: 600; }
    .pricing-card h3 { font-size: 1.5rem; margin-bottom: var(--spacing-3); color: var(--color-dark); }
    .price { font-size: 2.5rem; font-weight: bold; color: var(--color-primary); margin-bottom: var(--spacing-4); }
    .price span { font-size: 1rem; color: var(--color-gray); }
    .pricing-card ul { list-style: none; margin-bottom: var(--spacing-4); }
    .pricing-card li { padding: var(--spacing-2) 0; color: var(--color-gray); border-bottom: 1px solid var(--color-light); }
    .pricing-card li:last-child { border-bottom: none; }
    .pricing-card button { width: 100%; padding: 14px; background: var(--color-primary); color: white; border: none; border-radius: var(--radius); font-weight: 600; cursor: pointer; transition: var(--transition); }
    .pricing-card button:hover { background: #3730a3; }
    @media (max-width: 768px) { .pricing-cards { grid-template-columns: 1fr; } }`
  },
  S058: {
    title: '팀 멤버 소개',
    html: `<div class="team-container">
    <h1>Our Team</h1>
    <div class="team-grid">
      <div class="team-member">
        <img src="https://via.placeholder.com/200" alt="Member">
        <h3>김철수</h3>
        <p class="role">CEO</p>
        <p class="bio">비즈니스 전략 전문가</p>
      </div>
      <div class="team-member">
        <img src="https://via.placeholder.com/200" alt="Member">
        <h3>이영희</h3>
        <p class="role">CTO</p>
        <p class="bio">풀스택 개발자</p>
      </div>
      <div class="team-member">
        <img src="https://via.placeholder.com/200" alt="Member">
        <h3>박민수</h3>
        <p class="role">디자이너</p>
        <p class="bio">UI/UX 전문가</p>
      </div>
      <div class="team-member">
        <img src="https://via.placeholder.com/200" alt="Member">
        <h3>최지원</h3>
        <p class="role">마케터</p>
        <p class="bio">디지털 마케팅 전문가</p>
      </div>
    </div>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-6); }
    .team-container { max-width: 1200px; width: 100%; }
    .team-container h1 { text-align: center; margin-bottom: var(--spacing-6); color: var(--color-dark); font-size: 2.5rem; }
    .team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--spacing-4); }
    .team-member { background: white; padding: var(--spacing-4); border-radius: 16px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: var(--transition); }
    .team-member:hover { transform: translateY(-8px); box-shadow: 0 12px 24px rgba(0,0,0,0.15); }
    .team-member img { width: 120px; height: 120px; border-radius: 50%; margin-bottom: var(--spacing-3); object-fit: cover; }
    .team-member h3 { margin-bottom: var(--spacing-1); color: var(--color-dark); }
    .role { color: var(--color-primary); font-weight: 600; margin-bottom: var(--spacing-2); }
    .bio { color: var(--color-gray); font-size: 0.875rem; }
    @media (max-width: 1024px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .team-grid { grid-template-columns: 1fr; } }`
  },
  S059: {
    title: '통계 대시보드',
    html: `<div class="stats-container">
    <h1>통계 대시보드</h1>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">👥</div>
        <div class="stat-value">12,543</div>
        <div class="stat-label">총 사용자</div>
        <div class="stat-change positive">+12.5%</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">💰</div>
        <div class="stat-value">₩8,432,100</div>
        <div class="stat-label">총 매출</div>
        <div class="stat-change positive">+23.1%</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📦</div>
        <div class="stat-value">1,234</div>
        <div class="stat-label">총 주문</div>
        <div class="stat-change negative">-5.4%</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">⭐</div>
        <div class="stat-value">4.8</div>
        <div class="stat-label">평균 평점</div>
        <div class="stat-change positive">+0.3</div>
      </div>
    </div>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-6); }
    .stats-container { max-width: 1200px; width: 100%; }
    .stats-container h1 { text-align: center; margin-bottom: var(--spacing-6); color: var(--color-dark); font-size: 2.5rem; }
    .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--spacing-4); }
    .stat-card { background: white; padding: var(--spacing-6); border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: var(--transition); }
    .stat-card:hover { transform: translateY(-4px); box-shadow: 0 8px 16px rgba(0,0,0,0.15); }
    .stat-icon { font-size: 3rem; margin-bottom: var(--spacing-3); }
    .stat-value { font-size: 2rem; font-weight: bold; color: var(--color-dark); margin-bottom: var(--spacing-1); }
    .stat-label { color: var(--color-gray); margin-bottom: var(--spacing-2); }
    .stat-change { font-weight: 600; font-size: 0.875rem; }
    .stat-change.positive { color: var(--color-secondary); }
    .stat-change.negative { color: #EF4444; }
    @media (max-width: 1024px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .stats-grid { grid-template-columns: 1fr; } }`
  },
  S060: {
    title: '포트폴리오 갤러리',
    html: `<div class="portfolio-container">
    <h1>Portfolio</h1>
    <div class="filter-buttons">
      <button class="filter-btn active" onclick="filterPortfolio('all')">All</button>
      <button class="filter-btn" onclick="filterPortfolio('web')">Web</button>
      <button class="filter-btn" onclick="filterPortfolio('mobile')">Mobile</button>
      <button class="filter-btn" onclick="filterPortfolio('design')">Design</button>
    </div>
    <div class="portfolio-grid">
      <div class="portfolio-item" data-category="web">
        <img src="https://via.placeholder.com/400x300" alt="Project">
        <div class="portfolio-overlay">
          <h3>웹사이트 프로젝트</h3>
          <p>Web Development</p>
        </div>
      </div>
      <div class="portfolio-item" data-category="mobile">
        <img src="https://via.placeholder.com/400x300" alt="Project">
        <div class="portfolio-overlay">
          <h3>모바일 앱</h3>
          <p>Mobile App</p>
        </div>
      </div>
      <div class="portfolio-item" data-category="design">
        <img src="https://via.placeholder.com/400x300" alt="Project">
        <div class="portfolio-overlay">
          <h3>UI/UX 디자인</h3>
          <p>Design</p>
        </div>
      </div>
      <div class="portfolio-item" data-category="web">
        <img src="https://via.placeholder.com/400x300" alt="Project">
        <div class="portfolio-overlay">
          <h3>E-commerce</h3>
          <p>Web Development</p>
        </div>
      </div>
    </div>
  </div>`,
    css: `    body { background: var(--color-light); padding: var(--spacing-6); }
    .portfolio-container { max-width: 1200px; margin: 0 auto; }
    .portfolio-container h1 { text-align: center; margin-bottom: var(--spacing-6); color: var(--color-dark); font-size: 2.5rem; }
    .filter-buttons { display: flex; justify-content: center; gap: var(--spacing-2); margin-bottom: var(--spacing-6); }
    .filter-btn { padding: 12px 24px; background: white; border: 2px solid var(--color-light); color: var(--color-dark); border-radius: var(--radius); cursor: pointer; font-weight: 500; transition: var(--transition); }
    .filter-btn:hover, .filter-btn.active { background: var(--color-primary); color: white; border-color: var(--color-primary); }
    .portfolio-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--spacing-4); }
    .portfolio-item { position: relative; overflow: hidden; border-radius: 12px; cursor: pointer; }
    .portfolio-item.hidden { display: none; }
    .portfolio-item img { width: 100%; height: 300px; object-fit: cover; transition: var(--transition); }
    .portfolio-item:hover img { transform: scale(1.1); }
    .portfolio-overlay { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), transparent); color: white; padding: var(--spacing-4); transform: translateY(100%); transition: var(--transition); }
    .portfolio-item:hover .portfolio-overlay { transform: translateY(0); }
    .portfolio-overlay h3 { margin-bottom: var(--spacing-1); }
    .portfolio-overlay p { font-size: 0.875rem; opacity: 0.9; }
    @media (max-width: 768px) { .portfolio-grid { grid-template-columns: 1fr; } }`,
    js: `    function filterPortfolio(category) {
      const items = document.querySelectorAll('.portfolio-item');
      const buttons = document.querySelectorAll('.filter-btn');
      buttons.forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
      items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
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

console.log(`\n✨ S051-S060 ${count}개 예제 수정 완료!`);
