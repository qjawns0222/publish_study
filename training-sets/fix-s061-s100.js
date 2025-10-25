// S061-S100 중 실패한 13개 예제 수정 스크립트
const fs = require('fs');
const path = require('path');

// custom-guide-data에서 implementation 코드 추출
const customGuideData = require('./custom-guide-data-full.js');

// 수정이 필요한 예제 목록
const failedExamples = [
  'S063', 'S067', 'S076', 'S081', 'S082',
  'S084', 'S085', 'S086', 'S088', 'S089',
  'S090', 'S091', 'S096'
];

console.log('🔧 S061-S100 예제 수정 시작...\n');

failedExamples.forEach(exampleId => {
  const filePath = path.join(__dirname, exampleId, 'C-answer.html');

  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${exampleId}: 파일 없음`);
    return;
  }

  const guideData = customGuideData[exampleId];
  if (!guideData || !guideData.implementation) {
    console.log(`⚠️ ${exampleId}: custom-guide-data 없음`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // CSS 섹션이 비어있는지 확인
  const cssSection = content.match(/\/\* ={40}\s+완성 예시 CSS\s+={40} \*\/\s*\n\n/);

  if (cssSection) {
    // CSS가 비어있으면 implementation에서 추출
    const cssCode = guideData.implementation
      .filter(step => !step.code.includes('<') && !step.code.includes('function') && !step.code.includes('addEventListener'))
      .map(step => step.code)
      .join('\n\n');

    if (cssCode.trim()) {
      content = content.replace(
        /\/\* ={40}\s+완성 예시 CSS\s+={40} \*\/\s*\n\n/,
        `/* ========================================
       완성 예시 CSS
       ======================================== */

${cssCode}

`
      );

      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✅ ${exampleId}: CSS 추가 완료`);
    } else {
      console.log(`⚠️ ${exampleId}: CSS 코드 추출 실패`);
    }
  } else {
    console.log(`⏭️ ${exampleId}: 이미 CSS 있음 - 색상만 확인 필요`);
  }
});

console.log('\n✨ 수정 완료!');
