import { Metadata } from "next";
import ApplyJobForm from "./ApplyJobForm";

export const metadata: Metadata = {
  title: "Apply for Job | NextJob",
  description: "Apply for your next opportunity",
};

export default async function ApplyJobPage({
  params,
}: {
  params: { id: string };
}) {
  return <ApplyJobForm jobId={params.id} />;
}
