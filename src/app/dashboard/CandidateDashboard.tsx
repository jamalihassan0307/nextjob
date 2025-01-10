import { User } from "@/data/users";
import Link from "next/link";
import { getUserApplications } from "@/data/applications";
import { jobListings } from "@/data/jobs"; // Create this file with job listings data

export default function CandidateDashboard({ user }: { user: User }) {
  const applications = getUserApplications(user.id);
  const appliedJobs = applications
    .map((app) => {
      const job = jobListings.find((j) => j.id === app.jobId);
      if (!job) return null; // Skip if job not found
      return {
        ...app,
        title: job.title,
        company: job.company,
      };
    })
    .filter((job): job is NonNullable<typeof job> => job !== null); // Remove null entries

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>Welcome, {user.name}</h1>
          <p>Manage your job applications and profile</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h2>Your Applications</h2>
            <div className="application-list">
              {appliedJobs.map((job) => (
                <div key={job.id} className="application-item">
                  <div>
                    <h3>{job.title}</h3>
                    <p className="job-meta">{job.company}</p>
                    <p className="job-meta">Applied: {job.appliedDate}</p>
                  </div>
                  <div>
                    <span
                      className={`status-badge status-${job.status.toLowerCase()}`}
                    >
                      {job.status}
                    </span>
                  </div>
                </div>
              ))}
              {appliedJobs.length === 0 && (
                <p className="empty-state">No applications yet</p>
              )}
            </div>
          </div>

          <div className="dashboard-card">
            <h2>Recommended Jobs</h2>
            <Link href="/jobs" className="button button-primary">
              Browse all jobs →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
