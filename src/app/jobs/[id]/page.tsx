import { jobListings } from "@/data/jobs";
import JobDetailsClient from "./JobDetailsClient";

// Function to get job by ID
const getJobById = (id: number) => {
  return jobListings.find((job) => job.id === id) || jobListings[0];
};

export async function generateStaticParams() {
  return jobListings.map((job) => ({
    id: job.id.toString(),
  }));
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function JobPage({ params }: PageProps) {
  const jobDetails = getJobById(parseInt(params.id));
  return <JobDetailsClient id={params.id} jobDetails={jobDetails} />;
}
