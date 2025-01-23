import { Metadata } from "next";
import ApplyJobForm from "./ApplyJobForm";

export const metadata: Metadata = {
  title: "Apply for Job | NextJob",
  description: "Apply for your next opportunity",
};

type Props = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function ApplyJobPage({ params }: Props) {
  return <ApplyJobForm jobId={params.id} />;
}
