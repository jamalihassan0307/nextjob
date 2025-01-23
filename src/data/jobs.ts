export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  postedDate: string;
  status?: string;
}

// Add some sample job listings for static generation
export const jobListings: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "$100,000 - $130,000",
    type: "Full-time",
    description: "We are looking for a Senior Frontend Developer...",
    postedDate: "2024-03-07",
  },
  {
    id: 2,
    title: "UX Designer",
    company: "Design Studio",
    location: "New York, NY",
    salary: "$80,000 - $100,000",
    type: "Full-time",
    description: "Join our creative team as a UX Designer...",
    postedDate: "2024-03-07",
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "Tech Corp",
    location: "Remote",
    salary: "$110,000 - $140,000",
    type: "Full-time",
    description: "Looking for an experienced Backend Engineer...",
    postedDate: "2024-03-07",
  },
];

export const addJob = (job: Omit<Job, "id" | "postedDate">) => {
  const newJob = {
    ...job,
    id: jobListings.length + 1,
    postedDate: new Date().toISOString().split("T")[0],
  };
  jobListings.push(newJob);
  console.log("Job added:", newJob);
  console.log("All jobs:", jobListings);
  return newJob;
};

export const getCompanyJobs = (companyName: string) => {
  return jobListings.filter((job) => job.company === companyName);
};

export const updateJobStatus = (jobId: number, status: string) => {
  const job = jobListings.find((job) => job.id === jobId);
  if (job) {
    job.status = status;
    return true;
  }
  return false;
};
