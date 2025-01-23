"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

interface JobDetailsProps {
  id: string;
  jobDetails: {
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
    experience: string;
    department: string;
    description: string;
    requirements: string[];
    benefits: string[];
  };
}

export default function JobDetailsClient({ id, jobDetails }: JobDetailsProps) {
  const { user } = useAuth();

  return (
    <div className="job-details-container">
      <div className="job-header">
        <h1>{jobDetails.title}</h1>
        <p className="job-company">{jobDetails.company}</p>
        <div className="job-highlights">
          <div className="highlight-item">
            <p className="highlight-label">Location</p>
            <p className="highlight-value">{jobDetails.location}</p>
          </div>
          <div className="highlight-item">
            <p className="highlight-label">Salary</p>
            <p className="highlight-value">{jobDetails.salary}</p>
          </div>
          <div className="highlight-item">
            <p className="highlight-label">Type</p>
            <p className="highlight-value">{jobDetails.type}</p>
          </div>
          <div className="highlight-item">
            <p className="highlight-label">Experience</p>
            <p className="highlight-value">{jobDetails.experience}</p>
          </div>
        </div>
      </div>

      <div className="job-content">
        <div className="content-section">
          <h2>About the Role</h2>
          <p>{jobDetails.description}</p>
        </div>

        <div className="content-section">
          <h2>Requirements</h2>
          <ul className="requirements-list">
            {jobDetails.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="content-section">
          <h2>Benefits</h2>
          <ul className="benefits-list">
            {jobDetails.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="apply-section">
        <h2>Interested in this position?</h2>
        <p>Submit your application now and we'll get back to you soon!</p>
        <div className="action-buttons">
          <Link href={`/jobs/${id}/apply`} className="button button-primary">
            Apply Now
          </Link>
          <Link href="/jobs" className="button button-secondary">
            Back to Jobs
          </Link>
        </div>
      </div>
    </div>
  );
}
