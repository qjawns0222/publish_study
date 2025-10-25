// 초급 예제 색상 일괄 수정 스크립트
const fs = require('fs');
const path = require('path');

const fixes = [
  {
    id: 'S013',
    patches: [
      { find: 'color: var(--color-gray);', replace: 'color: #999999;' },
      { find: 'color: var(--color-gray)', replace: 'color: #999999' }
    ]
  },
  {
    id: 'S015',
    patches: [
      { find: 'color: #666;', replace: 'color: #666666;' },
      { find: '#999', replace: '#999999' }
    ]
  },
  {
    id: 'S019',
    patches: [
      { find: 'border-top: 1px solid var(--color-dark);', replace: 'border-top: 1px solid #444444;' }
    ]
  },
  {
    id: 'S029',
    patches: [
      { find: 'color: var(--color-gray);', replace: 'color: #999999;' }
    ]
  },
  {
    id: 'S030',
    patches: [
      { find: 'background: var(--color-secondary);', replace: 'background: #999999;' },
      { find: 'color: #EF4444', replace: 'color: #999999' }
    ]
  },
  {
    id: 'S017',
    patches: [
      { find: 'background: var(--color-light);', replace: 'background: #E5E7EB;' }
    ]
  }
];

let successCount = 0;
let skipCount = 0;

fixes.forEach(({ id, patches }) => {
  const filePath = path.join(__dirname, id, 'C-answer.html');

  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${id}: 파일 없음`);
    skipCount++;
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  patches.forEach(patch => {
    if (content.includes(patch.find)) {
      content = content.replace(new RegExp(patch.find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), patch.replace);
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ ${id}: 색상 수정 완료`);
    successCount++;
  } else {
    console.log(`⏭️ ${id}: 이미 수정됨 또는 패턴 불일치`);
    skipCount++;
  }
});

console.log(`\n📊 결과: 성공 ${successCount}개, 건너뜀 ${skipCount}개`);
console.log('✨ 초급 예제 색상 수정 완료!');
