import { Metadata } from "next";
import ApplyJobForm from "./ApplyJobForm";

type Props = {
  params: { id: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export const metadata: Metadata = {
  title: "Apply for Job | NextJob",
  description: "Apply for your next opportunity",
};

export default function ApplyJobPage(props: Props) {
  return <ApplyJobForm jobId={props.params.id} />;
}
