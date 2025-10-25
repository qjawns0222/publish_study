const fs = require('fs');
const path = require('path');

const examples = [
  {id: 'S011', title: '기본 입력 폼', needsFix: false},
  {id: 'S012', title: '로그인 폼', needsFix: false},
  {id: 'S013', title: '검색창', needsFix: false},
  {id: 'S014', title: '체크박스와 라디오', needsFix: true},
  {id: 'S015', title: '선택 박스', needsFix: true},
  {id: 'S016', title: '히어로 섹션', needsFix: true},
  {id: 'S017', title: '이미지 갤러리', needsFix: true},
  {id: 'S018', title: '상품 카드', needsFix: true},
  {id: 'S019', title: '푸터 디자인', needsFix: true},
  {id: 'S020', title: '컬러 팔레트', needsFix: false}
];

console.log('📋 S011-S020 검토 결과:\n');

examples.forEach(ex => {
  const filePath = path.join(__dirname, ex.id, 'C-answer.html');

  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const size = content.length;
    const hasContainer = content.includes('container') || content.includes('min-height: 100vh');
    const hasHover = content.includes(':hover');

    const status = hasContainer && hasHover && size > 2500 ? '✅' : '⚠️ ';

    console.log(`${status} ${ex.id} - ${ex.title}`);
    console.log(`   Size: ${size} bytes | Container: ${hasContainer} | Hover: ${hasHover}`);

    if (ex.needsFix || (!hasContainer && size < 3000)) {
      console.log(`   👉 개선 필요`);
    }
    console.log('');
  }
});

console.log('\n💡 수정 추천:');
console.log('  - S014: 체크박스/라디오 커스텀 스타일 추가');
console.log('  - S015: 선택 박스 화살표 아이콘 추가');
console.log('  - S016: 히어로 섹션 배경 이미지 + 텍스트');
console.log('  - S017: 이미지 갤러리 Grid + Hover');
console.log('  - S018: 상품 카드 완성');
console.log('  - S019: 푸터 완전한 레이아웃');
