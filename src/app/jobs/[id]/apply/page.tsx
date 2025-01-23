import { Metadata } from "next";
import ApplyJobForm from "./ApplyJobForm";
import { jobListings } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Apply for Job | NextJob",
  description: "Apply for your next opportunity",
};

// Add this function to generate static paths
export async function generateStaticParams() {
  // Generate paths for all job IDs
  return jobListings.map((job) => ({
    id: job.id.toString(),
  }));
}

type Props = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function ApplyJobPage({ params }: Props) {
  return <ApplyJobForm jobId={params.id} />;
}
