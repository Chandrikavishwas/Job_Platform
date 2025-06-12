
import { useState, useEffect } from "react"

const RecruiterPage = () => {
  const [applications, setApplications] = useState([])
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const savedApplications = localStorage.getItem("applications")
    if (savedApplications) {
      setApplications(JSON.parse(savedApplications))
    }
  }, [])

  const handleAccept = (id) => {
    const updatedApplications = applications.map((app) => (app.id === id ? { ...app, status: "accepted" } : app))
    setApplications(updatedApplications)
    localStorage.setItem("applications", JSON.stringify(updatedApplications))
  }

  const filteredApplications = applications.filter((app) => {
    if (filter === "pending") return app.status === "pending"
    if (filter === "accepted") return app.status === "accepted"
    return true
  })

  const stats = {
    total: applications.length,
    pending: applications.filter((app) => app.status === "pending").length,
    accepted: applications.filter((app) => app.status === "accepted").length,
  }

  return (
    <div className="page">
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>Recruiter Dashboard</h2>
          <div className="filter">
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All Applications</option>
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
            </select>
          </div>
        </div>

        <div className="stats">
          <div className="stat-card">
            <div className="stat-number">{stats.total}</div>
            <div className="stat-label">Total</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.pending}</div>
            <div className="stat-label">Pending</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.accepted}</div>
            <div className="stat-label">Accepted</div>
          </div>
        </div>

        <div className="applications">
          {filteredApplications.length === 0 ? (
            <div className="empty-state">
              <p>No applications found.</p>
            </div>
          ) : (
            filteredApplications.map((app) => (
              <div key={app.id} className="application-card">
                <div className="card-header">
                  <div className="applicant-info">
                    <h3>{app.name}</h3>
                    <p>{app.email}</p>
                  </div>
                  <span className={`status ${app.status}`}>{app.status}</span>
                </div>

                <div className="card-body">
                  <p>
                    <strong>Position:</strong> {app.jobTitle}
                  </p>
                  <p>
                    <strong>Applied:</strong> {app.date}
                  </p>
                </div>

                {app.status === "pending" && (
                  <div className="card-actions">
                    <button onClick={() => handleAccept(app.id)} className="btn btn-success">
                      Accept
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default RecruiterPage
