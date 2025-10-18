import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import GuideViewer from './pages/GuideViewer'
import PracticeViewer from './pages/PracticeViewer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide/:id" element={<GuideViewer />} />
        <Route path="/practice/:id" element={<PracticeViewer />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
