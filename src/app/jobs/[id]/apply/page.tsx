import ApplyJobForm from "./ApplyJobForm";

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ApplyJobPage({ params }: PageProps) {
  return <ApplyJobForm jobId={params.id} />;
}
