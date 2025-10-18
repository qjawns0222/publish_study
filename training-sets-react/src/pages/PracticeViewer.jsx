import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import examplesData from '../data/examplesData'
import './Viewer.css'

function PracticeViewer() {
  const { id } = useParams()
  const example = examplesData.find(e => e.id === id)
  const [activeTab, setActiveTab] = useState('practice') // 'practice' or 'answer'

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

  const practiceUrl = `/${id}/B-practice.html`
  const answerUrl = `/${id}/C-answer.html`
  const currentUrl = activeTab === 'practice' ? practiceUrl : answerUrl

  return (
    <div className="viewer-container">
      <div className="viewer-header">
        <div className="viewer-nav">
          <Link to={`/guide/${id}`} className="btn btn-back">← 가이드</Link>
          <h2>{id} - {example.title}</h2>
          <Link to="/" className="btn">목록 보기</Link>
        </div>

        {/* 탭 네비게이션 */}
        <div className="viewer-tabs">
          <button
            className={`tab-btn ${activeTab === 'practice' ? 'active' : ''}`}
            onClick={() => setActiveTab('practice')}
          >
            📝 실습
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
        title={`${id} ${activeTab === 'practice' ? '실습' : '완성 예시'}`}
      />
    </div>
  )
}

export default PracticeViewer
