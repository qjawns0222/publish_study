#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const sourceBase = path.join(__dirname, 'training-sets');
const destBase = path.join(__dirname, 'training-sets-react', 'public');

console.log('📁 C-answer.html 파일 복사 시작...\n');

let copied = 0;
let failed = 0;

for (let i = 1; i <= 100; i++) {
  const id = `S${String(i).padStart(3, '0')}`;
  const sourceFile = path.join(sourceBase, id, 'C-answer.html');
  const destFolder = path.join(destBase, id);
  const destFile = path.join(destFolder, 'C-answer.html');

  if (fs.existsSync(sourceFile)) {
    try {
      // 대상 폴더가 없으면 생성
      if (!fs.existsSync(destFolder)) {
        fs.mkdirSync(destFolder, { recursive: true });
      }

      // 파일 복사
      fs.copyFileSync(sourceFile, destFile);
      copied++;

      if (i <= 5 || i % 20 === 0) {
        console.log(`✅ ${id}/C-answer.html 복사 완료`);
      }
    } catch (error) {
      console.error(`❌ ${id} 복사 실패:`, error.message);
      failed++;
    }
  }
}

console.log(`\n✨ 복사 완료! 성공: ${copied}, 실패: ${failed}`);
