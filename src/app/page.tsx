import Link from "next/link";
import { jobListings } from "@/data/jobs";

// Get the latest 3 jobs
const latestJobs = jobListings.slice(0, 3);

export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <h1>Welcome to NextJob</h1>
        <p>Find your dream job today</p>
      </div>

      <div className="job-grid">
        {latestJobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-info">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <div className="job-meta">
                <p>📍 {job.location}</p>
                <p>💰 {job.salary}</p>
                <p>⏰ {job.type}</p>
              </div>
            </div>
            <Link href={`/jobs/${job.id}`} className="button button-primary">
              Apply Now
            </Link>
          </div>
        ))}
        {latestJobs.length === 0 && (
          <p className="empty-state">No jobs available at the moment</p>
        )}
      </div>
    </main>
  );
}
