import { users } from "./users";
import { jobListings } from "./jobs";
import { applications } from "./applications";

export const getSystemStats = () => {
  return {
    totalUsers: users.length,
    totalJobs: jobListings.length,
    activeCompanies: users.filter((user) => user.role === "company").length,
    totalApplications: applications.length,
  };
};
