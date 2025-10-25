#!/usr/bin/env node

/**
 * 100개 예제 전체를 custom-guide-data-full.js 기반으로 완벽하게 수정
 */

const fs = require('fs');
const path = require('path');
const customGuideData = require('./custom-guide-data-full');

console.log('🔧 100개 예제 전체 검토 및 수정 시작...\n');

// 완성된 답안 생성 함수
function generateCompleteAnswer(exampleId, guideData, exampleInfo) {
  if (!guideData) {
    console.log(`⚠️  ${exampleId}: No custom guide data, skipping`);
    return null;
  }

  // HTML 수집
  let htmlParts = [];
  let cssParts = [];
  let jsParts = [];

  // implementation에서 코드 추출
  if (guideData.implementation && guideData.implementation.length > 0) {
    guideData.implementation.forEach(step => {
      if (!step.code) return;

      if (step.step.includes('HTML') || step.code.trim().startsWith('<')) {
        // HTML 코드 발견
        const cleanCode = step.code.replace(/^<body>|<\/body>$/g, '').trim();
        if (cleanCode) htmlParts.push(cleanCode);
      } else if (step.step.includes('JavaScript') || step.step.includes('JS')) {
        // JavaScript 코드
        jsParts.push(step.code);
      } else {
        // CSS 코드
        cssParts.push(`    /* ${step.step} */\n${step.code}`);
      }
    });
  }

  // requirements에서 추가 힌트
  const requirements = guideData.requirements || {};

  return {
    html: htmlParts.length > 0 ? htmlParts.join('\n\n  ') : null,
    css: cssParts.length > 0 ? cssParts.join('\n\n') : null,
    js: jsParts.length > 0 ? jsParts.join('\n\n') : null,
    requirements,
    colors: guideData.styles?.colors || []
  };
}

// HTML 파일 생성
function generateAnswerHTML(exampleId, example, answer) {
  if (!answer || !answer.html) {
    console.log(`❌ ${exampleId}: Insufficient data to generate answer`);
    return null;
  }

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${exampleId} - ${example.title} | 완성 예시</title>
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

${answer.css || ''}

  </style>
</head>
<body>
  <!-- ========================================
       완성 예시 HTML
       ======================================== -->
  ${answer.html}

  <!-- 안내 배너 (하단 고정) -->
  <div style="position: fixed; bottom: 24px; right: 24px; background: #10B981; color: white; padding: 16px 24px; text-align: center; font-size: 0.875rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 9999; border-radius: 12px; max-width: 400px;">
    <strong>✅ ${exampleId} 완성 예시</strong>
    <div style="margin-top: 8px;">
      <a href="A-guide.html" style="color: white; text-decoration: none; border: 1px solid white; padding: 6px 12px; border-radius: 6px; display: inline-block; margin-right: 8px;">← 가이드</a>
      <a href="B-practice.html" style="color: white; text-decoration: none; border: 1px solid white; padding: 6px 12px; border-radius: 6px; display: inline-block;">실습하기 →</a>
    </div>
  </div>

  <script>
${answer.js || ''}

    console.log('✅ ${exampleId} - ${example.title} 완성 예시');
  </script>
</body>
</html>`;
}

// 예제 데이터 로드
const examplesData = require('./generate-examples').examplesData || require('./assets/js/examples-data');

// 통계
const stats = {
  total: 0,
  fixed: 0,
  skipped: 0,
  errors: []
};

// 각 예제 처리
for (let i = 1; i <= 100; i++) {
  const exampleId = `S${String(i).padStart(3, '0')}`;
  const guideData = customGuideData[exampleId];
  const example = examplesData.find(ex => ex.id === exampleId);

  stats.total++;

  if (!example) {
    console.log(`❌ ${exampleId}: Not found in examples data`);
    stats.skipped++;
    continue;
  }

  // 답안 생성
  const answer = generateCompleteAnswer(exampleId, guideData, example);

  if (!answer || !answer.html) {
    console.log(`⚠️  ${exampleId}: ${example.title} - No HTML implementation, skipping`);
    stats.skipped++;
    continue;
  }

  // HTML 파일 생성
  const htmlContent = generateAnswerHTML(exampleId, example, answer);

  if (!htmlContent) {
    stats.skipped++;
    continue;
  }

  // 파일 쓰기
  const answerPath = path.join(__dirname, exampleId, 'C-answer.html');

  try {
    fs.writeFileSync(answerPath, htmlContent, 'utf-8');
    console.log(`✅ ${exampleId}: ${example.title} - Fixed`);
    stats.fixed++;
  } catch (err) {
    console.error(`❌ ${exampleId}: ${err.message}`);
    stats.errors.push({ id: exampleId, error: err.message });
  }
}

// 결과 출력
console.log('\n' + '='.repeat(70));
console.log('수정 완료 결과');
console.log('='.repeat(70));
console.log(`총 예제: ${stats.total}`);
console.log(`✅ 수정 완료: ${stats.fixed}`);
console.log(`⚠️  스킵됨: ${stats.skipped}`);
console.log(`❌ 오류: ${stats.errors.length}`);

if (stats.errors.length > 0) {
  console.log('\n오류 목록:');
  stats.errors.forEach(err => {
    console.log(`  - ${err.id}: ${err.error}`);
  });
}

console.log('\n다음 단계:');
console.log('  1. node sync-to-react.js   # React 프로젝트 동기화');
console.log('  2. node verify-answer-compliance.js   # 검증');
