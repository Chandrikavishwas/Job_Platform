// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Navigation = () => {
//   const location = useLocation();

//   return (
//     <nav className="navigation">
//       <div className="nav-container">
//         <div className="nav-brand">
//           <span className="nav-title">JobPlatform</span>
//         </div>
        
//         <div className="nav-links">
//           <Link 
//             to="/apply" 
//             className={`nav-link ${location.pathname === '/apply' ? 'active' : ''}`}
//           >
//             Apply for Job
//           </Link>
//           <Link 
//             to="/recruiter" 
//             className={`nav-link ${location.pathname === '/recruiter' ? 'active' : ''}`}
//           >
//             Recruiter Dashboard
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;









import { Link, useLocation } from "react-router-dom"

const Navigation = () => {
  const location = useLocation()

  return (
    <nav className="nav">
      <div className="nav-container">
        <h1 className="nav-title">Job Platform</h1>
        <div className="nav-links">
          <Link to="/apply" className={location.pathname === "/apply" ? "nav-link active" : "nav-link"}>
            Apply for Job
          </Link>
          <Link to="/recruiter" className={location.pathname === "/recruiter" ? "nav-link active" : "nav-link"}>
            Recruiter Dashboard
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
