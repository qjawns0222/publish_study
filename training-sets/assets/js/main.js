// 메인 JavaScript - 예제 목록 렌더링 및 필터링

// 예제 카드 HTML 생성
function createExampleCard(example) {
  const difficultyClass = `difficulty-${example.difficulty}`;
  const difficultyText = {
    beginner: '초급',
    intermediate: '중급',
    advanced: '고급'
  }[example.difficulty];

  return `
    <div class="example-card" data-difficulty="${example.difficulty}" data-category="${example.category}">
      <span class="example-id">${example.id}</span>
      <span class="difficulty-badge ${difficultyClass}">${difficultyText}</span>
      <h3 class="example-title">${example.title}</h3>
      <p class="example-desc">${example.desc}</p>
      <div class="example-links">
        <a href="${example.id}/A-guide.html" class="link-btn link-guide">📚 가이드 보기</a>
        <a href="${example.id}/B-practice.html" class="link-btn link-practice">✏️ 실습하기</a>
      </div>
    </div>
  `;
}

// 예제 목록 렌더링
function renderExamples() {
  const beginnerGrid = document.getElementById('beginner-examples');
  const intermediateGrid = document.getElementById('intermediate-examples');
  const advancedGrid = document.getElementById('advanced-examples');

  // 난이도별로 분류
  const beginnerExamples = examplesData.filter(ex => ex.difficulty === 'beginner');
  const intermediateExamples = examplesData.filter(ex => ex.difficulty === 'intermediate');
  const advancedExamples = examplesData.filter(ex => ex.difficulty === 'advanced');

  // 각 그리드에 렌더링
  beginnerGrid.innerHTML = beginnerExamples.map(createExampleCard).join('');
  intermediateGrid.innerHTML = intermediateExamples.map(createExampleCard).join('');
  advancedGrid.innerHTML = advancedExamples.map(createExampleCard).join('');
}

// 필터링 기능
function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // 활성화 상태 변경
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const allCards = document.querySelectorAll('.example-card');
      const sections = document.querySelectorAll('.category-section');

      if (filter === 'all') {
        // 모두 보기
        allCards.forEach(card => card.style.display = 'block');
        sections.forEach(section => section.style.display = 'block');
      } else if (['beginner', 'intermediate', 'advanced'].includes(filter)) {
        // 난이도별 필터
        sections.forEach(section => {
          if (section.dataset.category === filter) {
            section.style.display = 'block';
          } else {
            section.style.display = 'none';
          }
        });
        allCards.forEach(card => card.style.display = 'block');
      } else {
        // 카테고리별 필터
        sections.forEach(section => section.style.display = 'block');
        allCards.forEach(card => {
          if (card.dataset.category === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      }
    });
  });
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
  renderExamples();
  setupFilters();
});
