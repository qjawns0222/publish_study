// S002-S005 및 주요 예제들의 검증 실패 문제 수정 스크립트
const fs = require('fs');
const path = require('path');

// 수정할 예제별 패치 정의
const patches = {
  'S003': {
    description: 'Sidebar 링크 hover 색상을 Primary 투명 배경으로 변경',
    find: 'background: rgba(255,255,255,0.1);',
    replace: 'background: rgba(79, 70, 229, 0.1);'
  },
  'S004': {
    description: 'Header border-bottom 추가',
    find: '      box-shadow: 0 2px 8px rgba(0,0,0,0.1);',
    replace: `      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-bottom: 1px solid #E5E7EB;`
  },
  'S005': {
    description: '카드 설명 색상을 #666666으로 변경',
    find: '      color: var(--color-gray);',
    replace: '      color: #666666;'
  }
};

// 각 예제 수정 실행
Object.entries(patches).forEach(([exampleId, patch]) => {
  const filePath = path.join(__dirname, exampleId, 'C-answer.html');

  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${exampleId}: 파일 없음`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  if (!content.includes(patch.find)) {
    console.log(`⚠️ ${exampleId}: 패턴을 찾을 수 없음 - "${patch.find.substring(0, 50)}..."`);
    return;
  }

  content = content.replace(patch.find, patch.replace);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✅ ${exampleId}: ${patch.description}`);
});

console.log('\n🎉 수정 완료!');
console.log('다음 명령어로 React 프로젝트에 동기화하세요:');
console.log('  node sync-to-react.js');
