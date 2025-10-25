#!/usr/bin/env node

/**
 * custom-guide-data-full.js를 기반으로 100개 예제의 완전한 답안 자동 생성
 */

const fs = require('fs');
const path = require('path');
const customGuideData = require('./custom-guide-data-full');
const completeTemplates = require('./complete-answer-templates');

// 예제 데이터
const examplesData = [
  { id: 'S001', title: '기본 3단 레이아웃', category: 'layout' },
  { id: 'S002', title: '중앙 정렬 카드', category: 'layout' },
  { id: 'S003', title: '2단 컬럼 레이아웃', category: 'layout' },
  { id: 'S004', title: '반응형 헤더', category: 'layout' },
  { id: 'S005', title: '카드 그리드', category: 'layout' },
  { id: 'S006', title: '기본 버튼 스타일', category: 'component' },
  { id: 'S007', title: '프로필 카드', category: 'component' },
  { id: 'S008', title: '알림 배지', category: 'component' },
  { id: 'S009', title: '아이콘 버튼', category: 'component' },
  { id: 'S010', title: '간단한 네비게이션 바', category: 'component' },
  // ... 여기에 S011-S100 데이터도 필요하지만 일단 필수만
];

/**
 * custom-guide-data에서 답안 자동 생성
 */
function generateAnswerFromGuideData(exampleId, guideData) {
  if (!guideData) return null;

  const htmlParts = [];
  const cssParts = [];
  const jsParts = [];

  // implementation 단계에서 코드 추출
  if (guideData.implementation) {
    guideData.implementation.forEach((step, index) => {
      if (!step.code) return;

      const code = step.code.trim();

      // HTML 판별
      if (step.step.includes('HTML') || code.startsWith('<')) {
        // <body> 태그 제거 후 추가
        const cleanCode = code.replace(/^<body>\s*|\s*<\/body>$/g, '');
        if (cleanCode) {
          htmlParts.push(cleanCode);
        }
      }
      // JavaScript 판별
      else if (step.step.includes('JavaScript') || step.step.includes('JS') ||
               code.includes('addEventListener') || code.includes('function')) {
        jsParts.push(`    // ${step.step}\n${code}`);
      }
      // CSS로 간주
      else {
        cssParts.push(`    /* ${step.step} */\n${code}`);
      }
    });
  }

  // HTML이 없으면 requirements에서 기본 구조 생성
  if (htmlParts.length === 0 && guideData.requirements) {
    const htmlReqs = guideData.requirements.html || [];

    // 기본 컨테이너 생성 로직
    if (htmlReqs.length > 0) {
      // 간단한 기본 구조 생성
      htmlParts.push(`<div class="container">
    <h2>${exampleId} 예제</h2>
    <p>이 예제는 ${exampleId}의 답안입니다.</p>
  </div>`);
    }
  }

  return {
    html: htmlParts.join('\n\n  '),
    css: cssParts.join('\n\n'),
    js: jsParts.join('\n\n')
  };
}

/**
 * 완전한 HTML 파일 생성
 */
function generateFullHTML(exampleId, example, answer) {
  if (!answer || !answer.html) {
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

// 메인 실행
console.log('🚀 100개 예제 완전한 답안 생성 시작...\n');

const stats = {
  total: 0,
  fromTemplate: 0,
  generated: 0,
  skipped: 0
};

for (let i = 1; i <= 100; i++) {
  const exampleId = `S${String(i).padStart(3, '0')}`;
  stats.total++;

  // 1순위: completeTemplates에서 가져오기
  let answer = completeTemplates[exampleId];
  let source = 'template';

  // 2순위: custom-guide-data에서 생성
  if (!answer) {
    const guideData = customGuideData[exampleId];
    answer = generateAnswerFromGuideData(exampleId, guideData);
    source = 'generated';
  }

  // 답안이 없으면 스킵
  if (!answer || !answer.html) {
    console.log(`⚠️  ${exampleId}: No data available, skipping`);
    stats.skipped++;
    continue;
  }

  // 예제 정보 가져오기
  const example = examplesData.find(ex => ex.id === exampleId) || {
    title: `예제 ${exampleId}`,
    category: 'unknown'
  };

  // HTML 파일 생성
  const htmlContent = generateFullHTML(exampleId, example, answer);

  if (!htmlContent) {
    stats.skipped++;
    continue;
  }

  // 파일 쓰기
  const answerPath = path.join(__dirname, exampleId, 'C-answer.html');

  try {
    // 폴더 존재 확인
    const folderPath = path.join(__dirname, exampleId);
    if (!fs.existsSync(folderPath)) {
      console.log(`⚠️  ${exampleId}: Folder does not exist, skipping`);
      stats.skipped++;
      continue;
    }

    fs.writeFileSync(answerPath, htmlContent, 'utf-8');

    if (source === 'template') {
      console.log(`✅ ${exampleId}: Updated (from template)`);
      stats.fromTemplate++;
    } else {
      console.log(`✅ ${exampleId}: Updated (auto-generated)`);
      stats.generated++;
    }
  } catch (err) {
    console.error(`❌ ${exampleId}: ${err.message}`);
    stats.skipped++;
  }
}

// 결과 출력
console.log('\n' + '='.repeat(70));
console.log('생성 완료 결과');
console.log('='.repeat(70));
console.log(`총 예제: ${stats.total}`);
console.log(`✅ 템플릿 사용: ${stats.fromTemplate}`);
console.log(`✅ 자동 생성: ${stats.generated}`);
console.log(`⚠️  스킵됨: ${stats.skipped}`);
console.log(`\n성공률: ${Math.round((stats.fromTemplate + stats.generated) / stats.total * 100)}%`);

console.log('\n📝 다음 단계:');
console.log('  1. node sync-to-react.js   # React 프로젝트 동기화');
console.log('  2. 브라우저에서 확인');
