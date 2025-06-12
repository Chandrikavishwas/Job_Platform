// import React, { useState } from 'react';
// import { ref, push } from 'firebase/database';
// import { database } from '../firebase/config';

// const ApplicantPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     jobTitle: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const jobTitles = [
//     'Frontend Developer',
//     'Backend Developer',
//     'Full Stack Developer',
//     'UI/UX Designer',
//     'Product Manager',
//     'Data Scientist',
//     'DevOps Engineer',
//     'Marketing Specialist'
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const interviewRequestsRef = ref(database, 'interview-requests');
//       await push(interviewRequestsRef, {
//         ...formData,
//         status: 'pending',
//         createdAt: new Date().toISOString()
//       });

//       setIsSubmitted(true);
//       setFormData({ name: '', email: '', jobTitle: '' });
//     } catch (error) {
//       console.error('Error submitting request:', error);
//       alert('Failed to submit request. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (isSubmitted) {
//     return (
//       <div className="page-container">
//         <div className="success-container">
//           <h1 className="success-title">Request Submitted Successfully!</h1>
//           <p className="success-message">
//             Thank you for your interest! Our recruitment team will review your request and get back to you soon.
//           </p>
//           <button 
//             className="btn btn-primary"
//             onClick={() => setIsSubmitted(false)}
//           >
//             Submit Another Request
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="page-container">
//       <div className="form-container">
//         <div className="form-header">
//           <h1 className="form-title">Request an Interview</h1>
          
//         </div>

//         <form onSubmit={handleSubmit} className="application-form">
//           <div className="form-group">
//             <label className="form-label">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="form-input"
//               placeholder="Enter your full name"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label className="form-label">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="form-input"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label className="form-label">
//               Job Title
//             </label>
//             <select name="jobTitle"
//               value={formData.jobTitle}
//               onChange={handleInputChange}
//               className="form-select"
//               required
//             >
//               <option value="">Select a position</option>
//               {jobTitles.map((title) => (
//                 <option key={title} value={title}>
//                   {title}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button 
//             type="submit" 
//             className="btn btn-primary btn-submit"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? 'Submitting...' : 'Submit Request'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ApplicantPage;







"use client"

import { useState } from "react"

const ApplicantPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobTitle: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const jobTitles = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Designer", "Product Manager"]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

   
    const applications = JSON.parse(localStorage.getItem("applications") || "[]")
    const newApplication = {
      ...formData,
      id: Date.now(),
      status: "pending",
      date: new Date().toLocaleDateString(),
    }

    applications.push(newApplication)
    localStorage.setItem("applications", JSON.stringify(applications))

    setSubmitted(true)
    setFormData({ name: "", email: "", jobTitle: "" })
  }

  if (submitted) {
    return (
      <div className="page">
        <div className="success-box">
          <h2>Application Submitted!</h2>
          <p>Thank you for applying. We will contact you soon.</p>
          <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
            Submit Another Application
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="form-container">
        <h2>Apply for Job</h2>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Job Position</label>
            <select name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} required>
              <option value="">Select a position</option>
              {jobTitles.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary btn-submit">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  )
}

export default ApplicantPage
