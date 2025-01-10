import { User } from "./users";

export interface JobApplication {
  id: number;
  jobId: number;
  userId: number;
  status: "Applied" | "Interview" | "Rejected" | "Accepted";
  appliedDate: string;
  resume: string;
  coverLetter: string;
}

// Initialize with empty array - no demo data
export const applications: JobApplication[] = [];

// Helper functions
export const addApplication = (application: Omit<JobApplication, "id">) => {
  const newApplication = {
    ...application,
    id: applications.length + 1,
  };
  applications.push(newApplication);
  return newApplication;
};

export const getUserApplications = (userId: number) => {
  return applications.filter((app) => app.userId === userId);
};

export const getCompanyApplications = (jobIds: number[]) => {
  // Sort by date to show newest first
  return applications
    .filter((app) => jobIds.includes(app.jobId))
    .sort(
      (a, b) =>
        new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime()
    );
};

export const updateApplicationStatus = (
  id: number,
  status: JobApplication["status"]
) => {
  const application = applications.find((app) => app.id === id);
  if (application) {
    application.status = status;
    return true;
  }
  return false;
};
