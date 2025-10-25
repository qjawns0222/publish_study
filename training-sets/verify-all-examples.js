// 100개 예제 전수 검증 스크립트
const fs = require('fs');
const path = require('path');

const customGuideData = require('./custom-guide-data-full');

console.log('🔍 100개 예제 전수 검증 시작...\n');

const issues = [];
let totalChecked = 0;
let withImplementation = 0;
let withoutImplementation = 0;
let withHTML = 0;
let withoutHTML = 0;

for (let i = 1; i <= 100; i++) {
  const id = `S${String(i).padStart(3, '0')}`;
  const answerPath = path.join(__dirname, id, 'C-answer.html');

  totalChecked++;

  if (!fs.existsSync(answerPath)) {
    issues.push({
      id,
      type: 'MISSING_FILE',
      message: 'C-answer.html 파일 없음'
    });
    continue;
  }

  const answerContent = fs.readFileSync(answerPath, 'utf-8');
  const customData = customGuideData[id];

  // Implementation 데이터 확인
  if (customData && customData.implementation && customData.implementation.length > 0) {
    withImplementation++;

    const htmlStep = customData.implementation.find(step => step.step.includes('HTML') && step.code);
    const cssSteps = customData.implementation.filter(step =>
      step.code &&
      !step.step.includes('HTML') &&
      !step.step.includes('JavaScript')
    );
    const jsStep = customData.implementation.find(step => step.step.includes('JavaScript') && step.code);

    if (htmlStep) {
      withHTML++;
    } else {
      withoutHTML++;
      issues.push({
        id,
        type: 'NO_HTML_STEP',
        message: 'Implementation에 HTML 단계 없음',
        cssSteps: cssSteps.length,
        jsStep: !!jsStep
      });
    }

    // HTML 검증
    if (htmlStep && !answerContent.includes(htmlStep.code.trim().split('\n')[0])) {
      issues.push({
        id,
        type: 'HTML_MISMATCH',
        message: 'Custom HTML이 C-answer.html에 반영되지 않음'
      });
    }

    // CSS 검증 (첫 번째 CSS 클래스 확인)
    if (cssSteps.length > 0) {
      const firstCssClass = cssSteps[0].code.match(/\.([a-zA-Z][a-zA-Z0-9_-]*)/);
      if (firstCssClass && !answerContent.includes(`.${firstCssClass[1]}`)) {
        issues.push({
          id,
          type: 'CSS_MISMATCH',
          message: `CSS 클래스 .${firstCssClass[1]}가 반영되지 않음`
        });
      }
    }
  } else {
    withoutImplementation++;
    issues.push({
      id,
      type: 'NO_IMPLEMENTATION',
      message: 'custom-guide-data-full.js에 implementation 없음'
    });
  }

  // 기본 생성기 사용 여부 확인 (visual 카테고리 기본 패턴)
  if (answerContent.includes('linear-gradient(135deg') &&
      customData &&
      customData.learningPoints &&
      !customData.learningPoints.join(' ').includes('그라데이션') &&
      !customData.learningPoints.join(' ').includes('gradient')) {
    issues.push({
      id,
      type: 'USING_DEFAULT_GENERATOR',
      message: '기본 생성기 패턴 사용 (gradient) - 가이드와 불일치 가능성'
    });
  }

  // fadeInUp 애니메이션 사용 확인 (animation 기본 패턴)
  if (answerContent.includes('@keyframes fadeInUp') &&
      customData &&
      customData.learningPoints &&
      !customData.learningPoints.join(' ').includes('fadeInUp') &&
      !customData.learningPoints.join(' ').includes('페이드')) {
    issues.push({
      id,
      type: 'USING_DEFAULT_ANIMATION',
      message: '기본 fadeInUp 애니메이션 사용 - 가이드와 불일치 가능성'
    });
  }

  // 잘못된 클래스명 확인 (숫자로 시작)
  const invalidClasses = answerContent.match(/class="(\d[^"]*?)"/g);
  if (invalidClasses) {
    issues.push({
      id,
      type: 'INVALID_CLASS',
      message: `잘못된 클래스명: ${invalidClasses.join(', ')}`
    });
  }

  // 구현 예시 플레이스홀더 확인
  if (answerContent.includes('구현 예시')) {
    issues.push({
      id,
      type: 'PLACEHOLDER_HTML',
      message: '플레이스홀더 HTML 사용 (구현 예시)'
    });
  }
}

// 결과 출력
console.log('📊 통계:');
console.log(`총 검증: ${totalChecked}개`);
console.log(`Implementation 있음: ${withImplementation}개`);
console.log(`Implementation 없음: ${withoutImplementation}개`);
console.log(`HTML 단계 있음: ${withHTML}개`);
console.log(`HTML 단계 없음: ${withoutHTML}개`);
console.log(`\n❌ 발견된 문제: ${issues.length}건\n`);

// 문제 유형별 분류
const issuesByType = {};
issues.forEach(issue => {
  if (!issuesByType[issue.type]) {
    issuesByType[issue.type] = [];
  }
  issuesByType[issue.type].push(issue);
});

// 유형별 출력
Object.keys(issuesByType).sort().forEach(type => {
  const typeIssues = issuesByType[type];
  console.log(`\n🔴 ${type} (${typeIssues.length}건):`);
  typeIssues.forEach(issue => {
    console.log(`  ${issue.id}: ${issue.message}`);
    if (issue.cssSteps !== undefined) {
      console.log(`    → CSS 단계: ${issue.cssSteps}개, JS: ${issue.jsStep ? '있음' : '없음'}`);
    }
  });
});

// JSON 파일로 저장
fs.writeFileSync(
  path.join(__dirname, 'verification-report.json'),
  JSON.stringify({
    timestamp: new Date().toISOString(),
    stats: {
      totalChecked,
      withImplementation,
      withoutImplementation,
      withHTML,
      withoutHTML,
      totalIssues: issues.length
    },
    issues,
    issuesByType: Object.keys(issuesByType).map(type => ({
      type,
      count: issuesByType[type].length,
      examples: issuesByType[type].map(i => i.id)
    }))
  }, null, 2)
);

console.log(`\n\n✅ 검증 보고서가 verification-report.json에 저장되었습니다.`);

// 심각한 문제가 있는 예제 목록
const criticalIssues = issues.filter(i =>
  i.type === 'PLACEHOLDER_HTML' ||
  i.type === 'INVALID_CLASS' ||
  i.type === 'HTML_MISMATCH' ||
  i.type === 'CSS_MISMATCH'
);

if (criticalIssues.length > 0) {
  console.log(`\n\n⚠️  즉시 수정 필요한 예제 (${criticalIssues.length}개):`);
  criticalIssues.forEach(issue => {
    console.log(`  ${issue.id} - ${issue.type}`);
  });
}
