import { User } from "@/data/users";
import { getSystemStats } from "@/data/stats";

export default function AdminDashboard({ user }: { user: User }) {
  const stats = getSystemStats();

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Welcome back, {user.name}</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h2>Platform Statistics</h2>
            <div className="stats-grid">
              <div className="stat-box">
                <h3>Total Users</h3>
                <p className="stat-number">{stats.totalUsers}</p>
              </div>
              <div className="stat-box">
                <h3>Active Jobs</h3>
                <p className="stat-number">{stats.totalJobs}</p>
              </div>
              <div className="stat-box">
                <h3>Companies</h3>
                <p className="stat-number">{stats.activeCompanies}</p>
              </div>

              <div className="stat-box">
                <h3>Applications</h3>
                <p className="stat-number">{stats.totalApplications}</p>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              <div className="activity-item">
                <span className="activity-icon">👤</span>
                <div className="activity-content">
                  <p>New user registration</p>
                  <span className="activity-time">5 minutes ago</span>
                </div>
              </div>
              <div className="activity-item">
                <span className="activity-icon">💼</span>
                <div className="activity-content">
                  <p>New job posted by Tech Corp</p>
                  <span className="activity-time">1 hour ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
