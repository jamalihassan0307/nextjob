"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

// Demo job data - in a real app, fetch this based on the job ID
const jobDetails = {
  id: 1,
  title: "Senior Frontend Developer",
  company: "Tech Corp",
  location: "Remote",
  salary: "$100,000 - $130,000",
  type: "Full-time",
  experience: "5+ years",
  department: "Engineering",
  description: `We are looking for a Senior Frontend Developer to join our growing team. You will be responsible for building and maintaining high-quality web applications.`,
  requirements: [
    "5+ years of experience with React and modern JavaScript",
    "Strong understanding of web fundamentals (HTML, CSS, JavaScript)",
    "Experience with TypeScript and Next.js",
    "Familiarity with responsive design and cross-browser compatibility",
    "Strong problem-solving skills and attention to detail",
  ],
  benefits: [
    "Competitive salary and equity package",
    "Remote work flexibility",
    "Health, dental, and vision insurance",
    "401(k) matching",
    "Unlimited PTO",
    "Professional development budget",
  ],
};

export default function JobDetails({ params }: { params: { id: string } }) {
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
          <Link
            href={`/jobs/${params.id}/apply`}
            className="button button-primary"
          >
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
