"use client";
import { useState } from "react";
import Link from "next/link";
import { jobListings } from "@/data/jobs"; // Import jobListings

export default function Jobs() {
  const [filter, setFilter] = useState("all");

  const filteredJobs = jobListings.filter((job) => {
    if (filter === "remote") return job.location === "Remote";
    if (filter === "onsite") return job.location !== "Remote";
    return true;
  });

  return (
    <div className="container">
      <div className="jobs-header">
        <h1>Browse Jobs</h1>
        <p>Find your next opportunity</p>
      </div>

      <div className="filters">
        <button
          className={`button ${
            filter === "all" ? "button-primary" : "button-secondary"
          }`}
          onClick={() => setFilter("all")}
        >
          All Jobs
        </button>
        <button
          className={`button ${
            filter === "remote" ? "button-primary" : "button-secondary"
          }`}
          onClick={() => setFilter("remote")}
        >
          Remote
        </button>
        <button
          className={`button ${
            filter === "onsite" ? "button-primary" : "button-secondary"
          }`}
          onClick={() => setFilter("onsite")}
        >
          Onsite
        </button>
      </div>

      <div className="job-grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-info">
                <h3>{job.title}</h3>
                <p className="company-name">{job.company}</p>
                <div className="job-meta">
                  <p>📍 {job.location}</p>
                  <p>💰 {job.salary}</p>
                  <p>⏰ {job.type}</p>
                </div>
                <p className="job-description">{job.description}</p>
              </div>
              <div className="job-actions">
                <Link
                  href={`/jobs/${job.id}`}
                  className="button button-primary"
                >
                  View Details
                </Link>
                <span className="posted-date">Posted: {job.postedDate}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-state">No jobs found matching your criteria</p>
        )}
      </div>
    </div>
  );
}
