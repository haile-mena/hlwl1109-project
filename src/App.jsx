import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Rights from './pages/Rights'
import Resources from './pages/Resources'
import FAQ from './pages/FAQ'

function App() {
  return (
    <Router basename="/hlwl1109-project">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rights" element={<Rights />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm">
              © 2026 Student Health & Wellness Resource for International Students at GWU
            </p>
            <p className="text-xs text-gray-400 mt-2">
              This website provides educational information and should not replace professional medical or legal advice.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
