const fs = require('fs');
const path = require('path');
const { generateDiagram } = require('./update-diagrams.js');

// 예제 데이터
const examplesData = [
  // 초급 예제 (S001-S030)
  { id: 'S001', title: '기본 3단 레이아웃', desc: 'Header, Main, Footer 구조로 시맨틱 레이아웃 구성', difficulty: 'beginner', category: 'layout' },
  { id: 'S002', title: '중앙 정렬 카드', desc: 'Flexbox를 사용한 중앙 정렬 카드 컴포넌트', difficulty: 'beginner', category: 'layout' },
  { id: 'S003', title: '2단 컬럼 레이아웃', desc: 'Sidebar와 Content 영역을 Grid로 구성', difficulty: 'beginner', category: 'layout' },
  { id: 'S004', title: '반응형 헤더', desc: 'Logo와 Navigation이 있는 반응형 헤더', difficulty: 'beginner', category: 'layout' },
  { id: 'S005', title: '카드 그리드', desc: '3x3 그리드 형태의 카드 레이아웃', difficulty: 'beginner', category: 'layout' },
  { id: 'S006', title: '기본 버튼 스타일', desc: 'Primary, Secondary, Outline 버튼 디자인', difficulty: 'beginner', category: 'component' },
  { id: 'S007', title: '프로필 카드', desc: '이미지, 이름, 설명이 포함된 프로필 카드', difficulty: 'beginner', category: 'component' },
  { id: 'S008', title: '알림 배지', desc: '다양한 상태를 표현하는 배지 컴포넌트', difficulty: 'beginner', category: 'component' },
  { id: 'S009', title: '아이콘 버튼', desc: 'SVG 아이콘이 포함된 버튼 세트', difficulty: 'beginner', category: 'component' },
  { id: 'S010', title: '간단한 네비게이션 바', desc: '수평 정렬된 메뉴 네비게이션', difficulty: 'beginner', category: 'component' },
  { id: 'S011', title: '기본 입력 폼', desc: 'Text Input, Label, Button이 있는 기본 폼', difficulty: 'beginner', category: 'form' },
  { id: 'S012', title: '로그인 폼', desc: 'Email과 Password 입력이 있는 로그인 폼', difficulty: 'beginner', category: 'form' },
  { id: 'S013', title: '검색창', desc: '돋보기 아이콘이 있는 검색 입력창', difficulty: 'beginner', category: 'form' },
  { id: 'S014', title: '체크박스와 라디오', desc: '커스텀 스타일 체크박스와 라디오 버튼', difficulty: 'beginner', category: 'form' },
  { id: 'S015', title: '선택 박스', desc: '드롭다운 스타일 선택 박스', difficulty: 'beginner', category: 'form' },
  { id: 'S016', title: '히어로 섹션', desc: '배경 이미지와 타이틀이 있는 히어로 영역', difficulty: 'beginner', category: 'visual' },
  { id: 'S017', title: '이미지 갤러리', desc: '2x3 그리드 형태의 이미지 갤러리', difficulty: 'beginner', category: 'visual' },
  { id: 'S018', title: '상품 카드', desc: '이미지, 제목, 가격이 있는 상품 카드', difficulty: 'beginner', category: 'visual' },
  { id: 'S019', title: '푸터 디자인', desc: '로고, 링크, 저작권이 있는 푸터', difficulty: 'beginner', category: 'visual' },
  { id: 'S020', title: '컬러 팔레트', desc: '브랜드 컬러를 표시하는 팔레트 UI', difficulty: 'beginner', category: 'visual' },
  { id: 'S021', title: '호버 효과 버튼', desc: 'Hover 시 색상과 그림자가 변하는 버튼', difficulty: 'beginner', category: 'animation' },
  { id: 'S022', title: '페이드 인 카드', desc: 'CSS 애니메이션으로 나타나는 카드', difficulty: 'beginner', category: 'animation' },
  { id: 'S023', title: '로딩 스피너', desc: '회전하는 원형 로딩 애니메이션', difficulty: 'beginner', category: 'animation' },
  { id: 'S024', title: '슬라이드 인 메뉴', desc: '왼쪽에서 나타나는 사이드 메뉴', difficulty: 'beginner', category: 'animation' },
  { id: 'S025', title: '펄스 효과', desc: '주기적으로 크기가 변하는 펄스 애니메이션', difficulty: 'beginner', category: 'animation' },
  { id: 'S026', title: '테이블 스타일링', desc: '깔끔한 디자인의 데이터 테이블', difficulty: 'beginner', category: 'component' },
  { id: 'S027', title: '프로그레스 바', desc: '진행률을 표시하는 바', difficulty: 'beginner', category: 'component' },
  { id: 'S028', title: '툴팁', desc: 'Hover 시 나타나는 툴팁', difficulty: 'beginner', category: 'component' },
  { id: 'S029', title: '브레드크럼', desc: '페이지 경로를 표시하는 네비게이션', difficulty: 'beginner', category: 'component' },
  { id: 'S030', title: '태그 목록', desc: '클릭 가능한 태그 칩 리스트', difficulty: 'beginner', category: 'component' },
  // 중급 예제 (S031-S070)
  { id: 'S031', title: '대시보드 레이아웃', desc: 'Sidebar, Header, 위젯이 있는 대시보드', difficulty: 'intermediate', category: 'layout' },
  { id: 'S032', title: 'Holy Grail 레이아웃', desc: '헤더, 푸터, 좌우 사이드바, 메인 영역 구조', difficulty: 'intermediate', category: 'layout' },
  { id: 'S033', title: '매거진 레이아웃', desc: '비대칭 그리드 매거진 스타일 레이아웃', difficulty: 'intermediate', category: 'layout' },
  { id: 'S034', title: 'Masonry 그리드', desc: '높이가 다른 카드의 벽돌 배치 레이아웃', difficulty: 'intermediate', category: 'layout' },
  { id: 'S035', title: '스티키 사이드바', desc: '스크롤 시 고정되는 사이드바', difficulty: 'intermediate', category: 'layout' },
  { id: 'S036', title: '탭 인터페이스', desc: '클릭 시 컨텐츠가 전환되는 탭', difficulty: 'intermediate', category: 'component' },
  { id: 'S037', title: '아코디언 메뉴', desc: '접고 펼칠 수 있는 아코디언', difficulty: 'intermediate', category: 'component' },
  { id: 'S038', title: '드롭다운 메뉴', desc: 'Hover 시 나타나는 서브 메뉴', difficulty: 'intermediate', category: 'component' },
  { id: 'S039', title: '모달 팝업', desc: '오버레이와 함께 나타나는 모달', difficulty: 'intermediate', category: 'component' },
  { id: 'S040', title: '캐러셀 슬라이더', desc: '좌우 버튼으로 이동하는 이미지 슬라이더', difficulty: 'intermediate', category: 'component' },
  { id: 'S041', title: '토스트 알림', desc: '우측 하단에 나타나는 알림 메시지', difficulty: 'intermediate', category: 'component' },
  { id: 'S042', title: '페이지네이션', desc: '페이지 번호 네비게이션', difficulty: 'intermediate', category: 'component' },
  { id: 'S043', title: '카드 플립', desc: 'Hover 시 뒤집히는 카드', difficulty: 'intermediate', category: 'component' },
  { id: 'S044', title: '멀티 스텝 인디케이터', desc: '단계를 표시하는 진행 인디케이터', difficulty: 'intermediate', category: 'component' },
  { id: 'S045', title: '타임라인', desc: '시간 순서를 표시하는 타임라인 UI', difficulty: 'intermediate', category: 'component' },
  { id: 'S046', title: '회원가입 폼', desc: '다양한 입력 필드가 있는 회원가입 폼', difficulty: 'intermediate', category: 'form' },
  { id: 'S047', title: '파일 업로드', desc: '드래그 앤 드롭 파일 업로드 인터페이스', difficulty: 'intermediate', category: 'form' },
  { id: 'S048', title: '범위 슬라이더', desc: '값을 조정하는 range 슬라이더', difficulty: 'intermediate', category: 'form' },
  { id: 'S049', title: '토글 스위치', desc: 'On/Off를 전환하는 토글 UI', difficulty: 'intermediate', category: 'form' },
  { id: 'S050', title: '별점 평가', desc: '클릭으로 별점을 매기는 인터페이스', difficulty: 'intermediate', category: 'form' },
  { id: 'S051', title: '다단계 폼', desc: '여러 단계로 구성된 입력 폼', difficulty: 'intermediate', category: 'form' },
  { id: 'S052', title: '실시간 검증 폼', desc: '입력 중 유효성 검사가 되는 폼', difficulty: 'intermediate', category: 'form' },
  { id: 'S053', title: '태그 입력', desc: '동적으로 태그를 추가/삭제하는 입력창', difficulty: 'intermediate', category: 'form' },
  { id: 'S054', title: '날짜 선택기', desc: '날짜를 선택하는 달력 UI', difficulty: 'intermediate', category: 'form' },
  { id: 'S055', title: '색상 선택기', desc: '색상을 선택하는 컬러 피커', difficulty: 'intermediate', category: 'form' },
  { id: 'S056', title: '랜딩 페이지', desc: '히어로, 기능 소개, CTA가 있는 랜딩 페이지', difficulty: 'intermediate', category: 'visual' },
  { id: 'S057', title: '가격 표 (Pricing Table)', desc: '3단 가격 플랜 비교 테이블', difficulty: 'intermediate', category: 'visual' },
  { id: 'S058', title: '팀 멤버 소개', desc: '팀원 프로필 카드 갤러리', difficulty: 'intermediate', category: 'visual' },
  { id: 'S059', title: '통계 대시보드', desc: '숫자와 차트가 있는 통계 카드', difficulty: 'intermediate', category: 'visual' },
  { id: 'S060', title: '포트폴리오 갤러리', desc: '필터링 기능이 있는 포트폴리오', difficulty: 'intermediate', category: 'visual' },
  { id: 'S061', title: '블로그 카드 목록', desc: '썸네일, 제목, 요약이 있는 블로그 카드', difficulty: 'intermediate', category: 'visual' },
  { id: 'S062', title: '이벤트 배너', desc: '화려한 비주얼의 이벤트 프로모션 배너', difficulty: 'intermediate', category: 'visual' },
  { id: 'S063', title: '상품 상세 페이지', desc: '이미지, 설명, 옵션이 있는 상품 페이지', difficulty: 'intermediate', category: 'visual' },
  { id: 'S064', title: 'FAQ 섹션', desc: '자주 묻는 질문 아코디언 리스트', difficulty: 'intermediate', category: 'visual' },
  { id: 'S065', title: '고객 후기 슬라이더', desc: '자동 재생되는 리뷰 슬라이더', difficulty: 'intermediate', category: 'visual' },
  { id: 'S066', title: '스크롤 페이드 인', desc: '스크롤 시 순차적으로 나타나는 요소', difficulty: 'intermediate', category: 'animation' },
  { id: 'S067', title: '패럴랙스 스크롤', desc: '배경이 다른 속도로 움직이는 효과', difficulty: 'intermediate', category: 'animation' },
  { id: 'S068', title: '메뉴 햄버거 애니메이션', desc: '햄버거 아이콘이 X로 변하는 애니메이션', difficulty: 'intermediate', category: 'animation' },
  { id: 'S069', title: '카운터 애니메이션', desc: '숫자가 증가하는 카운팅 효과', difficulty: 'intermediate', category: 'animation' },
  { id: 'S070', title: '타이핑 효과', desc: '텍스트가 타이핑되는 듯한 애니메이션', difficulty: 'intermediate', category: 'animation' },
  // 고급 예제 (S071-S100)
  { id: 'S071', title: '풀스크린 섹션 스크롤', desc: '섹션별 풀스크린 스냅 스크롤', difficulty: 'advanced', category: 'layout' },
  { id: 'S072', title: '분할 화면 레이아웃', desc: '좌우 분할 인터랙티브 레이아웃', difficulty: 'advanced', category: 'layout' },
  { id: 'S073', title: '그리드 라인 오버레이', desc: '디자인 그리드가 보이는 레이아웃', difficulty: 'advanced', category: 'layout' },
  { id: 'S074', title: '반응형 대시보드', desc: '완전히 반응형인 관리자 대시보드', difficulty: 'advanced', category: 'layout' },
  { id: 'S075', title: '이모션 네비게이션', desc: '창의적인 네비게이션 패턴', difficulty: 'advanced', category: 'layout' },
  { id: 'S076', title: '드래그 앤 드롭 보드', desc: 'Kanban 스타일 드래그 보드', difficulty: 'advanced', category: 'component' },
  { id: 'S077', title: '무한 스크롤', desc: '자동 로딩되는 무한 스크롤 리스트', difficulty: 'advanced', category: 'component' },
  { id: 'S078', title: '가상 스크롤', desc: '대용량 데이터의 가상화 스크롤', difficulty: 'advanced', category: 'component' },
  { id: 'S079', title: '리사이즈 가능 패널', desc: '크기를 조정할 수 있는 분할 패널', difficulty: 'advanced', category: 'component' },
  { id: 'S080', title: '컨텍스트 메뉴', desc: '우클릭 시 나타나는 커스텀 메뉴', difficulty: 'advanced', category: 'component' },
  { id: 'S081', title: '트리 뷰', desc: '폴더 구조처럼 펼쳐지는 트리 메뉴', difficulty: 'advanced', category: 'component' },
  { id: 'S082', title: '데이터 테이블', desc: '정렬, 필터, 페이징이 있는 테이블', difficulty: 'advanced', category: 'component' },
  { id: 'S083', title: '차트 컴포넌트', desc: 'Canvas로 그리는 간단한 차트', difficulty: 'advanced', category: 'component' },
  { id: 'S084', title: '코드 에디터 UI', desc: '신택스 하이라이팅이 있는 에디터', difficulty: 'advanced', category: 'component' },
  { id: 'S085', title: '이미지 크롭 도구', desc: '이미지를 자르는 인터랙티브 도구', difficulty: 'advanced', category: 'component' },
  { id: 'S086', title: '결제 폼', desc: '카드 정보 입력과 유효성 검사', difficulty: 'advanced', category: 'form' },
  { id: 'S087', title: '위지윅 에디터', desc: '텍스트 포맷팅 에디터', difficulty: 'advanced', category: 'form' },
  { id: 'S088', title: '자동완성 검색', desc: '입력 시 추천 검색어가 나타나는 검색창', difficulty: 'advanced', category: 'form' },
  { id: 'S089', title: '폼 빌더', desc: '동적으로 필드를 추가하는 폼 생성기', difficulty: 'advanced', category: 'form' },
  { id: 'S090', title: '서명 패드', desc: 'Canvas로 구현한 서명 입력', difficulty: 'advanced', category: 'form' },
  { id: 'S091', title: '비디오 랜딩 페이지', desc: '풀스크린 배경 비디오가 있는 랜딩', difficulty: 'advanced', category: 'visual' },
  { id: 'S092', title: '3D 카드 효과', desc: 'CSS 3D transform을 활용한 카드', difficulty: 'advanced', category: 'visual' },
  { id: 'S093', title: '인터랙티브 지도', desc: 'SVG로 구현한 클릭 가능한 지도', difficulty: 'advanced', category: 'visual' },
  { id: 'S094', title: '머티리얼 디자인 UI', desc: 'Material Design 스타일 전체 페이지', difficulty: 'advanced', category: 'visual' },
  { id: 'S095', title: '뉴모피즘 UI', desc: 'Neumorphism 스타일 컴포넌트 세트', difficulty: 'advanced', category: 'visual' },
  { id: 'S096', title: '파티클 배경', desc: 'Canvas로 구현한 파티클 애니메이션', difficulty: 'advanced', category: 'animation' },
  { id: 'S097', title: 'SVG 패스 애니메이션', desc: 'SVG 경로를 따라 그려지는 애니메이션', difficulty: 'advanced', category: 'animation' },
  { id: 'S098', title: '페이지 전환 효과', desc: '부드러운 페이지 전환 애니메이션', difficulty: 'advanced', category: 'animation' },
  { id: 'S099', title: '모핑 효과', desc: '도형이 변형되는 모핑 애니메이션', difficulty: 'advanced', category: 'animation' },
  { id: 'S100', title: '인터랙티브 배경', desc: '마우스에 반응하는 동적 배경', difficulty: 'advanced', category: 'animation' }
];

console.log('🔄 100개 예제의 다이어그램 업데이트 시작...\n');

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

examplesData.forEach((example) => {
  const { id } = example;
  const guidePath = path.join(__dirname, id, 'A-guide.html');

  if (!fs.existsSync(guidePath)) {
    console.log(`⚠️  ${id}: A-guide.html 파일 없음 (스킵)`);
    skipCount++;
    return;
  }

  try {
    let content = fs.readFileSync(guidePath, 'utf-8');

    // 기존 다이어그램 영역 찾기
    const diagramRegex = /<div style="font-family: monospace[^>]*>[\s\S]*?<pre[^>]*>([\s\S]*?)<\/pre>[\s\S]*?<\/div>/;

    if (!diagramRegex.test(content)) {
      console.log(`⚠️  ${id}: 다이어그램 영역을 찾을 수 없음 (스킵)`);
      skipCount++;
      return;
    }

    // 새로운 다이어그램 생성
    const newDiagram = generateDiagram(example);

    // 새로운 다이어그램 HTML 생성
    const newDiagramHTML = `<div style="font-family: monospace; background: #F3F4F6; padding: 24px; border-radius: 8px; margin: 16px 0;">
      <pre style="margin: 0; line-height: 1.8; color: #222;">
${newDiagram}
      </pre>
    </div>`;

    // 다이어그램 교체
    content = content.replace(diagramRegex, newDiagramHTML);

    // 파일 저장
    fs.writeFileSync(guidePath, content, 'utf-8');

    successCount++;
    if (successCount % 10 === 0) {
      console.log(`✅ ${id} 업데이트 완료 (${successCount}/100)`);
    }

  } catch (err) {
    console.error(`❌ ${id} 실패:`, err.message);
    errorCount++;
  }
});

console.log('\n' + '='.repeat(60));
console.log('다이어그램 업데이트 완료');
console.log('='.repeat(60));
console.log(`✅ 성공: ${successCount}개`);
console.log(`⚠️  스킵: ${skipCount}개`);
console.log(`❌ 실패: ${errorCount}개`);
console.log('\n🎉 모든 가이드 파일이 맞춤형 다이어그램으로 업데이트되었습니다!');
