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
  S041: {
    title: '토스트 알림',
    html: `<div class="toast-demo">
    <button class="show-toast-btn" onclick="showToast('success', '성공!', '작업이 완료되었습니다.')">성공 토스트</button>
    <button class="show-toast-btn" onclick="showToast('error', '오류!', '문제가 발생했습니다.')">오류 토스트</button>
    <button class="show-toast-btn" onclick="showToast('info', '알림', '새 메시지가 있습니다.')">정보 토스트</button>
  </div>
  <div class="toast-container" id="toastContainer"></div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); }
    .toast-demo { display: flex; gap: var(--spacing-2); flex-wrap: wrap; }
    .show-toast-btn { padding: 12px 24px; background: var(--color-primary); color: white; border: none; border-radius: var(--radius); cursor: pointer; font-weight: 500; transition: var(--transition); }
    .show-toast-btn:hover { background: #3730a3; transform: translateY(-2px); }
    .toast-container { position: fixed; bottom: 24px; right: 24px; display: flex; flex-direction: column; gap: var(--spacing-2); z-index: 10000; }
    .toast { background: white; padding: var(--spacing-3); border-radius: var(--radius); box-shadow: 0 4px 16px rgba(0,0,0,0.15); min-width: 300px; display: flex; align-items: center; gap: var(--spacing-2); animation: slideIn 0.3s ease; }
    .toast.success { border-left: 4px solid var(--color-secondary); }
    .toast.error { border-left: 4px solid #EF4444; }
    .toast.info { border-left: 4px solid var(--color-primary); }
    .toast-icon { font-size: 1.5rem; }
    .toast-content { flex: 1; }
    .toast-title { font-weight: 600; color: var(--color-dark); margin-bottom: 4px; }
    .toast-message { font-size: 0.875rem; color: var(--color-gray); }
    .toast-close { background: none; border: none; font-size: 1.25rem; cursor: pointer; color: var(--color-gray); transition: var(--transition); }
    .toast-close:hover { color: var(--color-dark); }
    @keyframes slideIn { from { transform: translateX(400px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`,
    js: `    function showToast(type, title, message) {
      const container = document.getElementById('toastContainer');
      const toast = document.createElement('div');
      toast.className = \`toast \${type}\`;
      const icons = { success: '✅', error: '❌', info: 'ℹ️' };
      toast.innerHTML = \`
        <span class="toast-icon">\${icons[type]}</span>
        <div class="toast-content">
          <div class="toast-title">\${title}</div>
          <div class="toast-message">\${message}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
      \`;
      container.appendChild(toast);
      setTimeout(() => toast.remove(), 4000);
    }`
  },
  S042: {
    title: '페이지네이션',
    html: `<div class="pagination-demo">
    <div class="pagination">
      <button class="page-btn" onclick="changePage('prev')">‹</button>
      <button class="page-num active" onclick="changePage(1)">1</button>
      <button class="page-num" onclick="changePage(2)">2</button>
      <button class="page-num" onclick="changePage(3)">3</button>
      <button class="page-num" onclick="changePage(4)">4</button>
      <button class="page-num" onclick="changePage(5)">5</button>
      <button class="page-btn" onclick="changePage('next')">›</button>
    </div>
    <p class="page-info">Page <span id="currentPage">1</span> of 5</p>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); flex-direction: column; }
    .pagination-demo { text-align: center; }
    .pagination { display: flex; gap: var(--spacing-1); margin-bottom: var(--spacing-3); }
    .page-btn, .page-num { padding: 12px 16px; background: white; border: 2px solid var(--color-light); color: var(--color-dark); cursor: pointer; font-weight: 500; transition: var(--transition); }
    .page-btn:first-child { border-radius: var(--radius) 0 0 var(--radius); }
    .page-btn:last-child { border-radius: 0 var(--radius) var(--radius) 0; }
    .page-num { border-radius: var(--radius); min-width: 48px; }
    .page-btn:hover, .page-num:hover { background: var(--color-light); border-color: var(--color-primary); }
    .page-num.active { background: var(--color-primary); color: white; border-color: var(--color-primary); }
    .page-info { color: var(--color-gray); font-size: 0.875rem; }`,
    js: `    let current = 1;
    function changePage(page) {
      if (page === 'prev') current = Math.max(1, current - 1);
      else if (page === 'next') current = Math.min(5, current + 1);
      else current = page;
      document.querySelectorAll('.page-num').forEach((btn, i) => {
        btn.classList.toggle('active', i + 1 === current);
      });
      document.getElementById('currentPage').textContent = current;
    }`
  },
  S043: {
    title: '카드 플립',
    html: `<div class="flip-container">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h2>Front</h2>
          <p>Hover to flip</p>
        </div>
        <div class="flip-card-back">
          <h2>Back</h2>
          <p>Card flipped!</p>
        </div>
      </div>
    </div>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-3); }
    .flip-card { width: 300px; height: 400px; perspective: 1000px; }
    .flip-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; }
    .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
    .flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 16px; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: var(--spacing-6); box-shadow: 0 8px 24px rgba(0,0,0,0.15); }
    .flip-card-front { background: linear-gradient(135deg, var(--color-primary), #6366f1); color: white; }
    .flip-card-back { background: linear-gradient(135deg, var(--color-secondary), #34d399); color: white; transform: rotateY(180deg); }
    .flip-card-front h2, .flip-card-back h2 { font-size: 2rem; margin-bottom: var(--spacing-3); }
    .flip-card-front p, .flip-card-back p { font-size: 1.125rem; opacity: 0.9; }`
  },
  S044: {
    title: '멀티 스텝 인디케이터',
    html: `<div class="stepper-container">
    <div class="stepper">
      <div class="step active completed">
        <div class="step-circle">1</div>
        <div class="step-label">개인정보</div>
      </div>
      <div class="step-line completed"></div>
      <div class="step active">
        <div class="step-circle">2</div>
        <div class="step-label">계정설정</div>
      </div>
      <div class="step-line"></div>
      <div class="step">
        <div class="step-circle">3</div>
        <div class="step-label">완료</div>
      </div>
    </div>
    <div class="stepper-actions">
      <button onclick="prevStep()">이전</button>
      <button onclick="nextStep()">다음</button>
    </div>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-3); }
    .stepper-container { max-width: 600px; width: 100%; background: white; padding: var(--spacing-6); border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
    .stepper { display: flex; align-items: center; margin-bottom: var(--spacing-6); }
    .step { display: flex; flex-direction: column; align-items: center; flex: 1; position: relative; }
    .step-circle { width: 48px; height: 48px; border-radius: 50%; border: 3px solid #D1D5DB; background: white; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #D1D5DB; transition: var(--transition); z-index: 1; }
    .step.active .step-circle { border-color: var(--color-primary); color: var(--color-primary); }
    .step.completed .step-circle { border-color: var(--color-primary); background: var(--color-primary); color: white; }
    .step-label { margin-top: var(--spacing-2); font-size: 0.875rem; color: var(--color-gray); font-weight: 500; }
    .step.active .step-label { color: var(--color-primary); }
    .step-line { height: 3px; flex: 1; background: #D1D5DB; margin: 0 -16px; }
    .step-line.completed { background: var(--color-primary); }
    .stepper-actions { display: flex; gap: var(--spacing-2); justify-content: center; }
    .stepper-actions button { padding: 12px 32px; border: none; border-radius: var(--radius); font-weight: 500; cursor: pointer; transition: var(--transition); }
    .stepper-actions button:first-child { background: var(--color-light); color: var(--color-dark); }
    .stepper-actions button:last-child { background: var(--color-primary); color: white; }
    .stepper-actions button:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }`,
    js: `    let currentStep = 2;
    function nextStep() {
      if (currentStep < 3) {
        currentStep++;
        updateStepper();
      }
    }
    function prevStep() {
      if (currentStep > 1) {
        currentStep--;
        updateStepper();
      }
    }
    function updateStepper() {
      const steps = document.querySelectorAll('.step');
      const lines = document.querySelectorAll('.step-line');
      steps.forEach((step, i) => {
        step.classList.toggle('active', i + 1 === currentStep);
        step.classList.toggle('completed', i + 1 < currentStep);
      });
      lines.forEach((line, i) => {
        line.classList.toggle('completed', i + 1 < currentStep);
      });
    }`
  },
  S045: {
    title: '타임라인',
    html: `<div class="timeline-container">
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>2024년 1월</h3>
          <p>프로젝트 시작</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>2024년 3월</h3>
          <p>베타 버전 출시</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>2024년 6월</h3>
          <p>정식 버전 1.0 출시</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>2024년 12월</h3>
          <p>버전 2.0 출시 예정</p>
        </div>
      </div>
    </div>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-6); }
    .timeline-container { max-width: 600px; width: 100%; }
    .timeline { position: relative; padding-left: 40px; }
    .timeline::before { content: ''; position: absolute; left: 15px; top: 0; bottom: 0; width: 3px; background: var(--color-primary); }
    .timeline-item { position: relative; margin-bottom: var(--spacing-6); }
    .timeline-dot { position: absolute; left: -33px; top: 0; width: 16px; height: 16px; border-radius: 50%; background: var(--color-primary); border: 3px solid white; box-shadow: 0 0 0 3px var(--color-primary); }
    .timeline-content { background: white; padding: var(--spacing-4); border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: var(--transition); }
    .timeline-content:hover { transform: translateX(8px); box-shadow: 0 4px 16px rgba(0,0,0,0.15); }
    .timeline-content h3 { color: var(--color-primary); margin-bottom: var(--spacing-2); font-size: 1.125rem; }
    .timeline-content p { color: var(--color-gray); line-height: 1.6; }`
  },
  S046: {
    title: '회원가입 폼',
    html: `<div class="signup-container">
    <form class="signup-form">
      <h2>회원가입</h2>
      <div class="form-row">
        <div class="form-group">
          <label>이름</label>
          <input type="text" placeholder="홍길동" required>
        </div>
        <div class="form-group">
          <label>성별</label>
          <select required>
            <option value="">선택</option>
            <option>남성</option>
            <option>여성</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>이메일</label>
        <input type="email" placeholder="example@email.com" required>
      </div>
      <div class="form-group">
        <label>비밀번호</label>
        <input type="password" placeholder="8자 이상" required>
      </div>
      <div class="form-group">
        <label>비밀번호 확인</label>
        <input type="password" placeholder="비밀번호 재입력" required>
      </div>
      <div class="form-group checkbox">
        <input type="checkbox" id="agree" required>
        <label for="agree">이용약관 및 개인정보처리방침에 동의합니다</label>
      </div>
      <button type="submit" class="submit-btn">가입하기</button>
    </form>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: var(--spacing-3); }
    .signup-form { max-width: 500px; width: 100%; background: white; padding: var(--spacing-6); border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.2); }
    .signup-form h2 { text-align: center; margin-bottom: var(--spacing-4); color: var(--color-dark); }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-3); }
    .form-group { margin-bottom: var(--spacing-3); }
    .form-group label { display: block; margin-bottom: var(--spacing-1); font-weight: 500; color: var(--color-dark); font-size: 0.875rem; }
    .form-group input, .form-group select { width: 100%; padding: 12px; border: 2px solid var(--color-light); border-radius: var(--radius); font-size: 1rem; transition: var(--transition); }
    .form-group input:focus, .form-group select:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(79,70,229,0.1); }
    .form-group.checkbox { display: flex; align-items: center; gap: var(--spacing-2); }
    .form-group.checkbox input { width: auto; }
    .form-group.checkbox label { margin: 0; font-size: 0.875rem; }
    .submit-btn { width: 100%; padding: 14px; background: var(--color-primary); color: white; border: none; border-radius: var(--radius); font-size: 1rem; font-weight: 600; cursor: pointer; transition: var(--transition); }
    .submit-btn:hover { background: #3730a3; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(79,70,229,0.3); }`
  },
  S047: {
    title: '파일 업로드',
    html: `<div class="upload-container">
    <div class="upload-area" id="uploadArea">
      <div class="upload-icon">📁</div>
      <h3>파일을 드래그하거나 클릭하세요</h3>
      <p>PNG, JPG, PDF (최대 10MB)</p>
      <input type="file" id="fileInput" multiple hidden>
    </div>
    <div class="file-list" id="fileList"></div>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); padding: var(--spacing-3); }
    .upload-container { max-width: 600px; width: 100%; }
    .upload-area { border: 3px dashed var(--color-primary); border-radius: 16px; padding: var(--spacing-6); text-align: center; cursor: pointer; transition: var(--transition); background: white; }
    .upload-area:hover, .upload-area.drag-over { background: rgba(79,70,229,0.05); border-color: #3730a3; }
    .upload-icon { font-size: 4rem; margin-bottom: var(--spacing-3); }
    .upload-area h3 { color: var(--color-dark); margin-bottom: var(--spacing-2); }
    .upload-area p { color: var(--color-gray); font-size: 0.875rem; }
    .file-list { margin-top: var(--spacing-4); }
    .file-item { background: white; padding: var(--spacing-3); border-radius: var(--radius); margin-bottom: var(--spacing-2); display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .file-name { color: var(--color-dark); font-weight: 500; }
    .file-remove { background: #EF4444; color: white; border: none; padding: 6px 12px; border-radius: var(--radius); cursor: pointer; font-size: 0.875rem; }`,
    js: `    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    uploadArea.addEventListener('click', () => fileInput.click());
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
      handleFiles(e.dataTransfer.files);
    });
    fileInput.addEventListener('change', (e) => {
      handleFiles(e.target.files);
    });
    function handleFiles(files) {
      Array.from(files).forEach(file => {
        const item = document.createElement('div');
        item.className = 'file-item';
        item.innerHTML = \`
          <span class="file-name">\${file.name}</span>
          <button class="file-remove" onclick="this.parentElement.remove()">삭제</button>
        \`;
        fileList.appendChild(item);
      });
    }`
  },
  S048: {
    title: '범위 슬라이더',
    html: `<div class="slider-container">
    <div class="slider-box">
      <h3>가격 범위</h3>
      <div class="slider-value">₩<span id="sliderValue">50</span>만원</div>
      <input type="range" id="priceSlider" min="0" max="100" value="50" class="slider">
      <div class="slider-labels">
        <span>0만원</span>
        <span>100만원</span>
      </div>
    </div>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); }
    .slider-box { max-width: 400px; width: 100%; background: white; padding: var(--spacing-6); border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
    .slider-box h3 { text-align: center; margin-bottom: var(--spacing-3); color: var(--color-dark); }
    .slider-value { text-align: center; font-size: 2rem; font-weight: bold; color: var(--color-primary); margin-bottom: var(--spacing-4); }
    .slider { width: 100%; height: 8px; border-radius: 4px; background: var(--color-light); outline: none; -webkit-appearance: none; margin-bottom: var(--spacing-2); }
    .slider::-webkit-slider-thumb { -webkit-appearance: none; width: 24px; height: 24px; border-radius: 50%; background: var(--color-primary); cursor: pointer; box-shadow: 0 2px 8px rgba(79,70,229,0.3); transition: var(--transition); }
    .slider::-webkit-slider-thumb:hover { transform: scale(1.2); }
    .slider::-moz-range-thumb { width: 24px; height: 24px; border-radius: 50%; background: var(--color-primary); cursor: pointer; border: none; }
    .slider-labels { display: flex; justify-content: space-between; font-size: 0.875rem; color: var(--color-gray); }`,
    js: `    const slider = document.getElementById('priceSlider');
    const value = document.getElementById('sliderValue');
    slider.addEventListener('input', (e) => {
      value.textContent = e.target.value;
    });`
  },
  S049: {
    title: '토글 스위치',
    html: `<div class="toggle-container">
    <div class="toggle-group">
      <div class="toggle-item">
        <span class="toggle-label">알림 받기</span>
        <label class="toggle-switch">
          <input type="checkbox" checked>
          <span class="toggle-slider"></span>
        </label>
      </div>
      <div class="toggle-item">
        <span class="toggle-label">다크 모드</span>
        <label class="toggle-switch">
          <input type="checkbox">
          <span class="toggle-slider"></span>
        </label>
      </div>
      <div class="toggle-item">
        <span class="toggle-label">자동 재생</span>
        <label class="toggle-switch">
          <input type="checkbox" checked>
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); }
    .toggle-group { max-width: 400px; width: 100%; background: white; padding: var(--spacing-4); border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .toggle-item { display: flex; justify-content: space-between; align-items: center; padding: var(--spacing-3); border-bottom: 1px solid var(--color-light); }
    .toggle-item:last-child { border-bottom: none; }
    .toggle-label { font-weight: 500; color: var(--color-dark); }
    .toggle-switch { position: relative; display: inline-block; width: 56px; height: 28px; }
    .toggle-switch input { opacity: 0; width: 0; height: 0; }
    .toggle-slider { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: #ccc; border-radius: 28px; transition: var(--transition); cursor: pointer; }
    .toggle-slider::before { content: ''; position: absolute; height: 20px; width: 20px; left: 4px; bottom: 4px; background: white; border-radius: 50%; transition: var(--transition); }
    .toggle-switch input:checked + .toggle-slider { background: var(--color-primary); }
    .toggle-switch input:checked + .toggle-slider::before { transform: translateX(28px); }`
  },
  S050: {
    title: '별점 평가',
    html: `<div class="rating-container">
    <div class="rating-box">
      <h2>상품 평가</h2>
      <div class="stars" id="stars">
        <span class="star" data-rating="1">★</span>
        <span class="star" data-rating="2">★</span>
        <span class="star" data-rating="3">★</span>
        <span class="star" data-rating="4">★</span>
        <span class="star" data-rating="5">★</span>
      </div>
      <p class="rating-text"><span id="ratingValue">0</span> / 5</p>
    </div>
  </div>`,
    css: `    body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: var(--color-light); }
    .rating-box { max-width: 400px; width: 100%; background: white; padding: var(--spacing-6); border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); text-align: center; }
    .rating-box h2 { margin-bottom: var(--spacing-4); color: var(--color-dark); }
    .stars { display: flex; justify-content: center; gap: var(--spacing-2); margin-bottom: var(--spacing-3); }
    .star { font-size: 3rem; color: #D1D5DB; cursor: pointer; transition: var(--transition); user-select: none; }
    .star:hover, .star.active { color: #FFB800; transform: scale(1.2); }
    .rating-text { font-size: 1.25rem; color: var(--color-gray); font-weight: 500; }
    .rating-text span { color: var(--color-primary); font-weight: bold; font-size: 1.5rem; }`,
    js: `    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('ratingValue');
    let rating = 0;
    stars.forEach(star => {
      star.addEventListener('click', () => {
        rating = parseInt(star.dataset.rating);
        ratingValue.textContent = rating;
        stars.forEach((s, i) => {
          s.classList.toggle('active', i < rating);
        });
      });
      star.addEventListener('mouseenter', () => {
        const hoverRating = parseInt(star.dataset.rating);
        stars.forEach((s, i) => {
          s.classList.toggle('active', i < hoverRating);
        });
      });
    });
    document.querySelector('.stars').addEventListener('mouseleave', () => {
      stars.forEach((s, i) => {
        s.classList.toggle('active', i < rating);
      });
    });`
  }
};

let count = 0;
Object.entries(examples).forEach(([id, data]) => {
  const html = template(id, data.title, data.html, data.css, data.js || '');
  fs.writeFileSync(path.join(__dirname, id, 'C-answer.html'), html, 'utf-8');
  console.log(`✅ ${id} - ${data.title}`);
  count++;
});

console.log(`\n✨ S041-S050 ${count}개 예제 수정 완료!`);
