import { Metadata } from "next";
import ApplyJobForm from "./ApplyJobForm";

export const metadata: Metadata = {
  title: "Apply for Job | NextJob",
  description: "Apply for your next opportunity",
};

type PageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Make it async and return Promise<JSX.Element>
export default async function ApplyJobPage({
  params,
}: PageProps): Promise<JSX.Element> {
  // Simulate async operation to satisfy type requirements
  await Promise.resolve();

  return <ApplyJobForm jobId={params.id} />;
}
