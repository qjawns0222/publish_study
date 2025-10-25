// 누락된 CSS를 requirements 기반으로 생성
const fs = require('fs');
const path = require('path');
const customGuideData = require('./custom-guide-data-full.js');

// 수동으로 CSS 작성이 필요한 예제들
const manualFixes = {
  'S063': {
    css: `
    /* 상품 상세 레이아웃 */
    .product-detail {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      max-width: 1200px;
      margin: 48px auto;
      padding: 24px;
    }

    /* 이미지 섹션 */
    .product-images {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .main-image {
      width: 100%;
      border-radius: 12px;
      border: 1px solid var(--color-light);
    }

    .thumbnails {
      display: flex;
      gap: 8px;
    }

    .thumb {
      width: 80px;
      height: 80px;
      border-radius: 8px;
      cursor: pointer;
      border: 2px solid transparent;
      transition: var(--transition);
    }

    .thumb.active {
      border-color: var(--color-primary);
    }

    /* 상품 정보 */
    .product-info h1 {
      font-size: 2rem;
      margin-bottom: 16px;
    }

    .price {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
    }

    .original {
      color: #9CA3AF;
      text-decoration: line-through;
      font-size: 1.125rem;
    }

    .sale {
      color: #EF4444;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .discount {
      background: var(--color-accent);
      color: white;
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 0.875rem;
    }

    .description {
      color: var(--color-gray);
      margin-bottom: 32px;
      line-height: 1.6;
    }

    /* 옵션 */
    .options {
      margin-bottom: 32px;
    }

    .options label {
      display: block;
      font-weight: 500;
      margin: 16px 0 8px;
    }

    .color-options {
      display: flex;
      gap: 8px;
    }

    .color-option {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid var(--color-light);
      cursor: pointer;
    }

    .size-select {
      width: 100%;
      padding: 12px;
      border: 1px solid var(--color-light);
      border-radius: 8px;
      font-size: 1rem;
    }

    .quantity {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .quantity button {
      width: 40px;
      height: 40px;
      border: 1px solid var(--color-light);
      background: white;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1.25rem;
    }

    .quantity button:hover {
      background: var(--color-light);
    }

    /* 액션 버튼 */
    .action-buttons {
      display: flex;
      gap: 12px;
    }

    .btn-cart,
    .btn-buy {
      flex: 1;
      padding: 16px;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: var(--transition);
    }

    .btn-cart {
      background: white;
      border: 2px solid var(--color-primary);
      color: var(--color-primary);
    }

    .btn-cart:hover {
      background: var(--color-primary);
      color: white;
    }

    .btn-buy {
      background: var(--color-primary);
      color: white;
    }

    .btn-buy:hover {
      background: #3730a3;
    }

    /* 반응형 */
    @media (max-width: 768px) {
      .product-detail {
        grid-template-columns: 1fr;
      }
    }
    `
  },
  'S082': {
    css: `
    /* 테이블 컨테이너 */
    .data-table-container {
      max-width: 1200px;
      margin: 48px auto;
      padding: 24px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .data-table-container h2 {
      margin-bottom: 24px;
      font-size: 1.5rem;
    }

    /* 검색 및 필터 */
    .table-controls {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    .search-box {
      padding: 12px;
      border: 1px solid var(--color-light);
      border-radius: 8px;
      width: 300px;
    }

    .filter-select {
      padding: 12px;
      border: 1px solid var(--color-light);
      border-radius: 8px;
    }

    /* 테이블 */
    table {
      width: 100%;
      border-collapse: collapse;
    }

    thead {
      background: var(--color-light);
    }

    th {
      padding: 16px;
      text-align: left;
      font-weight: 600;
      color: var(--color-dark);
    }

    tbody tr {
      border-bottom: 1px solid var(--color-light);
    }

    tbody tr:nth-child(odd) {
      background: #F9FAFB;
    }

    tbody tr:hover {
      background: #EEF2FF;
    }

    td {
      padding: 16px;
    }

    /* 상태 뱃지 */
    .status-badge {
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .status-active {
      background: #D1FAE5;
      color: var(--color-secondary);
    }

    .status-inactive {
      background: #FEE2E2;
      color: #EF4444;
    }

    /* 액션 버튼 */
    .action-btn {
      padding: 8px 16px;
      border: none;
      border-radius: 6px;
      background: var(--color-primary);
      color: white;
      cursor: pointer;
      transition: var(--transition);
    }

    .action-btn:hover {
      background: #3730a3;
    }

    /* 페이지네이션 */
    .pagination {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-top: 24px;
    }

    .page-btn {
      padding: 8px 12px;
      border: 1px solid var(--color-light);
      background: white;
      border-radius: 6px;
      cursor: pointer;
    }

    .page-btn.active {
      background: var(--color-primary);
      color: white;
      border-color: var(--color-primary);
    }
    `
  },
  'S085': {
    css: `
    /* 이미지 뷰어 */
    body {
      background: var(--color-light);
    }

    .image-viewer {
      max-width: 1200px;
      margin: 48px auto;
      padding: 24px;
    }

    .viewer-controls {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    .viewer-controls button {
      padding: 12px 24px;
      background: var(--color-primary);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    /* 이미지 그리드 */
    .image-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }

    .image-item {
      position: relative;
      cursor: pointer;
      border-radius: 8px;
      overflow: hidden;
    }

    .image-item img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: var(--transition);
    }

    .image-item:hover img {
      transform: scale(1.05);
    }

    /* 라이트박스 오버레이 */
    .lightbox {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      z-index: 1000;
      justify-content: center;
      align-items: center;
    }

    .lightbox.active {
      display: flex;
    }

    .lightbox-content {
      position: relative;
      max-width: 90%;
      max-height: 90%;
    }

    .lightbox-content img {
      max-width: 100%;
      max-height: 90vh;
      border-radius: 8px;
    }

    .close-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      background: white;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 1.5rem;
    }

    @media (max-width: 768px) {
      .image-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    `
  },
  'S086': {
    css: `
    /* 로그인 폼 */
    body {
      background: linear-gradient(135deg, #667eea, #764ba2);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .login-card {
      background: white;
      padding: 48px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      max-width: 400px;
      width: 100%;
    }

    .login-card h2 {
      text-align: center;
      margin-bottom: 32px;
      font-size: 1.75rem;
    }

    .form-group {
      margin-bottom: 24px;
    }

    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
    }

    .form-group input {
      width: 100%;
      padding: 12px;
      border: 1px solid #D1D5DB;
      border-radius: 8px;
      font-size: 1rem;
    }

    .form-group input:focus {
      outline: none;
      border-color: var(--color-primary);
    }

    .error {
      color: #EF4444;
      font-size: 0.875rem;
      margin-top: 4px;
    }

    .remember-me {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 24px;
    }

    .submit-btn {
      width: 100%;
      padding: 14px;
      background: var(--color-primary);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: var(--transition);
    }

    .submit-btn:hover {
      background: #3730a3;
    }

    .forgot-password {
      text-align: center;
      margin-top: 16px;
    }

    .forgot-password a {
      color: var(--color-primary);
      text-decoration: none;
    }
    `
  },
  'S088': {
    css: `
    /* 자동완성 검색 */
    .autocomplete-container {
      max-width: 600px;
      margin: 100px auto;
      padding: 24px;
    }

    .search-wrapper {
      position: relative;
    }

    .search-input {
      width: 100%;
      padding: 16px;
      border: 2px solid var(--color-light);
      border-radius: 12px;
      font-size: 1rem;
    }

    .search-input:focus {
      outline: none;
      border-color: var(--color-primary);
    }

    /* 자동완성 드롭다운 */
    .autocomplete-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid var(--color-light);
      border-radius: 8px;
      margin-top: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      max-height: 300px;
      overflow-y: auto;
      display: none;
    }

    .autocomplete-dropdown.active {
      display: block;
    }

    .autocomplete-item {
      padding: 12px 16px;
      cursor: pointer;
      transition: var(--transition);
    }

    .autocomplete-item:hover {
      background: var(--color-light);
    }

    .autocomplete-item.selected {
      background: #EEF2FF;
      color: var(--color-primary);
    }

    .no-results {
      padding: 16px;
      text-align: center;
      color: var(--color-gray);
    }

    /* 하이라이트 */
    .highlight {
      font-weight: bold;
      color: var(--color-primary);
    }
    `
  },
  'S089': {
    css: `
    /* 동적 폼 빌더 */
    .form-builder {
      max-width: 1200px;
      margin: 48px auto;
      padding: 24px;
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 32px;
    }

    /* 컴포넌트 팔레트 */
    .component-palette {
      background: white;
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .component-palette h3 {
      margin-bottom: 16px;
    }

    .component-item {
      padding: 12px;
      background: var(--color-light);
      margin-bottom: 8px;
      border-radius: 8px;
      cursor: grab;
    }

    .component-item:active {
      cursor: grabbing;
    }

    /* 폼 캔버스 */
    .form-canvas {
      background: white;
      padding: 32px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      min-height: 600px;
    }

    .form-canvas h2 {
      margin-bottom: 24px;
    }

    .drop-zone {
      min-height: 200px;
      border: 2px dashed var(--color-light);
      border-radius: 8px;
      padding: 24px;
    }

    .form-element {
      position: relative;
      padding: 16px;
      margin-bottom: 16px;
      background: var(--color-light);
      border-radius: 8px;
      border: 2px solid transparent;
    }

    .form-element.selected {
      border-color: var(--color-primary);
    }

    .delete-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      background: #EF4444;
      color: white;
      border: none;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 0.75rem;
    }
    `
  },
  'S090': {
    css: `
    /* 드로잉 캔버스 */
    body {
      background: var(--color-light);
      margin: 0;
      padding: 0;
    }

    .drawing-app {
      max-width: 1200px;
      margin: 24px auto;
      padding: 24px;
    }

    /* 툴바 */
    .toolbar {
      background: white;
      padding: 16px;
      border-radius: 12px;
      margin-bottom: 16px;
      display: flex;
      gap: 16px;
      align-items: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .tool-group {
      display: flex;
      gap: 8px;
    }

    .tool-btn {
      padding: 8px 16px;
      border: 1px solid var(--color-light);
      background: white;
      border-radius: 6px;
      cursor: pointer;
      transition: var(--transition);
    }

    .tool-btn.active {
      background: var(--color-primary);
      color: white;
      border-color: var(--color-primary);
    }

    .color-picker {
      width: 50px;
      height: 40px;
      border: 1px solid var(--color-light);
      border-radius: 6px;
      cursor: pointer;
    }

    .size-slider {
      width: 150px;
    }

    /* 캔버스 */
    .canvas-container {
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      padding: 16px;
    }

    #drawingCanvas {
      border: 1px solid var(--color-light);
      cursor: crosshair;
      display: block;
      background: white;
    }

    /* 컨트롤 */
    .controls {
      margin-top: 16px;
      display: flex;
      gap: 12px;
    }

    .control-btn {
      padding: 12px 24px;
      background: var(--color-primary);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    .control-btn:hover {
      background: #3730a3;
    }

    .clear-btn {
      background: #EF4444;
    }

    .clear-btn:hover {
      background: #DC2626;
    }
    `
  },
  'S096': {
    css: `
    /* 인터랙티브 3D 카드 */
    body {
      background: #0A0E27;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      perspective: 1000px;
    }

    .card-3d {
      width: 400px;
      height: 500px;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.6s;
    }

    .card-3d:hover {
      transform: rotateY(10deg) rotateX(10deg);
    }

    .card-face {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 20px;
      padding: 40px;
      color: white;
      box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    }

    .card-face h2 {
      font-size: 2rem;
      margin-bottom: 24px;
    }

    .card-face p {
      font-size: 1.125rem;
      line-height: 1.6;
      margin-bottom: 32px;
    }

    .glow {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s;
    }

    .card-3d:hover .glow {
      opacity: 1;
    }

    .feature-list {
      list-style: none;
      padding: 0;
    }

    .feature-list li {
      padding: 12px 0;
      border-bottom: 1px solid rgba(255,255,255,0.2);
    }

    .feature-list li:last-child {
      border-bottom: none;
    }
    `
  }
};

console.log('🔧 누락된 CSS 추가 시작...\n');

Object.entries(manualFixes).forEach(([exampleId, { css }]) => {
  const filePath = path.join(__dirname, exampleId, 'C-answer.html');

  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${exampleId}: 파일 없음`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // CSS 섹션 교체
  content = content.replace(
    /\/\* ={40}\s+완성 예시 CSS\s+={40} \*\/\s*\n+/,
    `/* ========================================
       완성 예시 CSS
       ======================================== */
${css}

`
  );

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✅ ${exampleId}: CSS 추가 완료`);
});

console.log('\n✨ CSS 추가 완료!');
