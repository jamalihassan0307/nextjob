import { jobListings } from "@/data/jobs";
import JobDetailsClient from "./JobDetailsClient";

// Demo job data
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

export async function generateStaticParams() {
  return jobListings.map((job) => ({
    id: job.id.toString(),
  }));
}

export default function JobDetails({ params }: { params: { id: string } }) {
  return <JobDetailsClient id={params.id} jobDetails={jobDetails} />;
}
