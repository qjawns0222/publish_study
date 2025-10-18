import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import examplesData from '../data/examplesData'
import './Viewer.css'

function GuideViewer() {
  const { id } = useParams()
  const example = examplesData.find(e => e.id === id)
  const [activeTab, setActiveTab] = useState('guide') // 'guide' or 'answer'

  if (!example) {
    return (
      <div className="viewer-container">
        <div className="error">
          <h2>예제를 찾을 수 없습니다</h2>
          <Link to="/" className="btn">← 목록으로</Link>
        </div>
      </div>
    )
  }

  const guideUrl = `/${id}/A-guide.html`
  const answerUrl = `/${id}/C-answer.html`
  const currentUrl = activeTab === 'guide' ? guideUrl : answerUrl

  return (
    <div className="viewer-container">
      <div className="viewer-header">
        <div className="viewer-nav">
          <Link to="/" className="btn btn-back">← 목록</Link>
          <h2>{id} - {example.title}</h2>
          <Link to={`/practice/${id}`} className="btn btn-primary">실습하기 →</Link>
        </div>

        {/* 탭 네비게이션 */}
        <div className="viewer-tabs">
          <button
            className={`tab-btn ${activeTab === 'guide' ? 'active' : ''}`}
            onClick={() => setActiveTab('guide')}
          >
            📋 가이드
          </button>
          <button
            className={`tab-btn ${activeTab === 'answer' ? 'active' : ''}`}
            onClick={() => setActiveTab('answer')}
          >
            ✅ 완성 예시
          </button>
        </div>
      </div>
      <iframe
        key={currentUrl}
        src={currentUrl}
        className="viewer-frame"
        title={`${id} ${activeTab === 'guide' ? '가이드' : '완성 예시'}`}
      />
    </div>
  )
}

export default GuideViewer
