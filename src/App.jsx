import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ResponsibilityModel from './pages/ResponsibilityModel';
import StudyGuide from './pages/StudyGuide';
import ExamSimulation from './pages/ExamSimulation';
import ResourcesPage from './pages/ResourcesPage';

function App() {
  return (
    <Router future={{ v7_startTransition: true }}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/responsibility-model" element={<ResponsibilityModel />} />
            <Route path="/study-guide" element={<StudyGuide />} />
            <Route path="/exam-simulation" element={<ExamSimulation />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;