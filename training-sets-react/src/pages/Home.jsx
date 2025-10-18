import { useState } from 'react'
import { Link } from 'react-router-dom'
import examplesData from '../data/examplesData'
import './Home.css'

const difficultyInfo = {
  beginner: { label: '초급', emoji: '🌱', class: 'beginner' },
  intermediate: { label: '중급', emoji: '🚀', class: 'intermediate' },
  advanced: { label: '고급', emoji: '⚡', class: 'advanced' }
}

const categoryInfo = {
  layout: { icon: '📐', name: '레이아웃' },
  component: { icon: '🧩', name: '컴포넌트' },
  form: { icon: '📝', name: '폼' },
  visual: { icon: '🎨', name: '비주얼' },
  animation: { icon: '✨', name: '애니메이션' }
}

function Home() {
  const [filter, setFilter] = useState('all')

  const filteredExamples = examplesData.filter(example => {
    if (filter === 'all') return true
    if (['beginner', 'intermediate', 'advanced'].includes(filter)) {
      return example.difficulty === filter
    }
    return example.category === filter
  })

  const stats = {
    total: examplesData.length,
    beginner: examplesData.filter(e => e.difficulty === 'beginner').length,
    intermediate: examplesData.filter(e => e.difficulty === 'intermediate').length,
    advanced: examplesData.filter(e => e.difficulty === 'advanced').length
  }

  return (
    <div className="home">
      <div className="hero">
        <h1>퍼블리싱 훈련 예제 100선</h1>
        <p>HTML5, CSS3, Vanilla JavaScript로 마스터하는 UI 퍼블리싱</p>
      </div>

      <div className="stats">
        <div className="stat-card">
          <div className="stat-number">{stats.total}</div>
          <div className="stat-label">훈련 예제</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.beginner}</div>
          <div className="stat-label">초급 레벨</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.intermediate}</div>
          <div className="stat-label">중급 레벨</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.advanced}</div>
          <div className="stat-label">고급 레벨</div>
        </div>
      </div>

      <div className="filter-bar">
        <button className={filter === 'all' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('all')}>전체보기</button>
        <button className={filter === 'beginner' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('beginner')}>초급</button>
        <button className={filter === 'intermediate' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('intermediate')}>중급</button>
        <button className={filter === 'advanced' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('advanced')}>고급</button>
        <button className={filter === 'layout' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('layout')}>레이아웃</button>
        <button className={filter === 'component' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('component')}>컴포넌트</button>
        <button className={filter === 'form' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('form')}>폼</button>
        <button className={filter === 'visual' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('visual')}>비주얼</button>
        <button className={filter === 'animation' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('animation')}>애니메이션</button>
      </div>

      <div className="examples-grid">
        {filteredExamples.map(example => (
          <div key={example.id} className="example-card">
            <div className="card-header">
              <span className="example-id">{example.id}</span>
              <span className={`difficulty-badge ${difficultyInfo[example.difficulty].class}`}>
                {difficultyInfo[example.difficulty].emoji} {difficultyInfo[example.difficulty].label}
              </span>
            </div>
            <div className="card-category">{categoryInfo[example.category].icon} {categoryInfo[example.category].name}</div>
            <h3 className="card-title">{example.title}</h3>
            <p className="card-desc">{example.desc}</p>
            <div className="card-actions">
              <Link to={`/guide/${example.id}`} className="btn btn-guide">📚 가이드</Link>
              <Link to={`/practice/${example.id}`} className="btn btn-practice">✏️ 실습</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
