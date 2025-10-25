// 마지막 남은 색상 문제 수정
const fs = require('fs');
const path = require('path');

const colorFixes = {
  'S067': [
    {
      description: 'rgba(0,0,0,0.3) 오버레이 추가',
      search: '.parallax-content {',
      insert: `
.parallax-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  pointer-events: none;
}

.parallax-content {`
    }
  ],
  'S076': [
    {
      description: 'TODO, DOING 컬럼 색상 추가',
      search: '.column {',
      insert: `
.column.todo {
  border-top: 4px solid #EF4444;
}

.column.doing {
  border-top: 4px solid #F59E0B;
}

.column.done {
  border-top: 4px solid var(--color-secondary);
}

.column {`
    }
  ],
  'S081': [
    {
      description: '폴더 아이콘 색상',
      search: '.file-icon {',
      insert: `
.folder .file-icon {
  color: #F59E0B;
}

.file-icon {`
    }
  ],
  'S084': [
    {
      description: '코드 하이라이트 색상',
      search: '.code-viewer {',
      insert: `
.code-keyword {
  color: #F472B6;
  font-weight: bold;
}

.code-string {
  color: #34D399;
}

.code-comment {
  color: var(--color-gray);
  font-style: italic;
}

.code-viewer {`
    }
  ],
  'S090': [
    {
      description: '캔버스 선 색상 설정',
      search: '#drawingCanvas {',
      insert: `
.drawing-context {
  stroke: #000000;
  fill: #000000;
}

#drawingCanvas {`
    }
  ],
  'S091': [
    {
      description: '비디오 오버레이',
      search: '.video-player {',
      insert: `
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.video-overlay.visible {
  opacity: 1;
}

.video-player {`
    }
  ]
};

console.log('🔧 최종 색상 추가 시작...\n');

let successCount = 0;
let failCount = 0;

Object.entries(colorFixes).forEach(([exampleId, fixes]) => {
  const filePath = path.join(__dirname, exampleId, 'C-answer.html');

  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${exampleId}: 파일 없음`);
    failCount++;
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  fixes.forEach(fix => {
    if (content.includes(fix.search)) {
      content = content.replace(fix.search, fix.insert);
      modified = true;
      console.log(`  ✓ ${fix.description}`);
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ ${exampleId}: 수정 완료\n`);
    successCount++;
  } else {
    console.log(`⚠️ ${exampleId}: 패턴을 찾을 수 없음\n`);
    failCount++;
  }
});

console.log(`\n📊 결과: 성공 ${successCount}개, 실패 ${failCount}개`);
