"use client";
import { useState } from "react";
import { User } from "@/data/users";
import Link from "next/link";
import {
  getCompanyApplications,
  updateApplicationStatus,
} from "@/data/applications";
import { getCompanyJobs } from "@/data/jobs";
import { users } from "@/data/users";

export default function CompanyDashboard({ user }: { user: User }) {
  const [refreshKey, setRefreshKey] = useState(0); // For forcing refresh
  const companyJobs = getCompanyJobs(user.name);
  const jobIds = companyJobs.map((job) => job.id);
  const applications = getCompanyApplications(jobIds);

  const handleStatusUpdate = (applicationId: number, newStatus: string) => {
    updateApplicationStatus(applicationId, newStatus as any);
    setRefreshKey((prev) => prev + 1); // Force refresh
  };

  const getApplicantDetails = (userId: number) => {
    return users.find((u) => u.id === userId);
  };

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>Welcome, {user.name}</h1>
          <p>Manage your job postings and applications</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Your Job Postings</h2>
              <Link href="/jobs/create" className="button button-primary">
                Post New Job
              </Link>
            </div>
            <div className="job-list">
              {companyJobs.map((job) => (
                <div key={job.id} className="job-item">
                  <div>
                    <h3>{job.title}</h3>
                    <p className="job-meta">Posted: {job.postedDate}</p>
                  </div>
                  <div className="job-stats">
                    <span className="stat-badge">
                      {
                        applications.filter((app) => app.jobId === job.id)
                          .length
                      }{" "}
                      Applications
                    </span>
                  </div>
                </div>
              ))}
              {companyJobs.length === 0 && (
                <p className="empty-state">No jobs posted yet</p>
              )}
            </div>
          </div>

          <div className="dashboard-card">
            <h2>Recent Applications</h2>
            <div className="applications-list">
              {applications.map((app) => {
                const job = companyJobs.find((j) => j.id === app.jobId);
                const applicant = getApplicantDetails(app.userId);
                return (
                  <div key={app.id} className="application-item">
                    <div>
                      <h3>{job?.title}</h3>
                      <p className="job-meta">Applicant: {applicant?.name}</p>
                      <p className="job-meta">Email: {applicant?.email}</p>
                      <p className="job-meta">Applied: {app.appliedDate}</p>
                    </div>
                    <div className="application-actions">
                      <select
                        value={app.status}
                        onChange={(e) =>
                          handleStatusUpdate(app.id, e.target.value)
                        }
                        className="status-select"
                      >
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Accepted">Accepted</option>
                      </select>
                    </div>
                  </div>
                );
              })}
              {applications.length === 0 && (
                <p className="empty-state">No applications received yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
