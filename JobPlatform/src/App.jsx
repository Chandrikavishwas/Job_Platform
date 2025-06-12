// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navigation from './components/Navigation';
// import ApplicantPage from './pages/ApplicantPage';
// import RecruiterPage from './pages/RecruiterPage';
// import './styles/App.css';

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Navigation />
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Navigate to="/apply" replace />} />
//             <Route path="/apply" element={<ApplicantPage />} />
//             <Route path="/recruiter" element={<RecruiterPage />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;






import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Navigation from "./components/Navigation"
import ApplicantPage from "./pages/ApplicantPage"
import RecruiterPage from "./pages/RecruiterPage"
import "./styles/App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/apply" replace />} />
            <Route path="/apply" element={<ApplicantPage />} />
            <Route path="/recruiter" element={<RecruiterPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
