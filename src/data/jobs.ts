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
export const jobListings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "$100,000 - $130,000",
    type: "Full-time",
    experience: "5+ years",
    department: "Engineering",
    description: `We are looking for a Senior Frontend Developer to join our growing team. You will be responsible for building and maintaining high-quality web applications.`,
    requirements: [
      "5+ years of experience with React and modern JavaScript",
      "Strong understanding of web fundamentals (HTML, CSS, JavaScript)",
      "Experience with TypeScript and Next.js",
      "Familiarity with responsive design and cross-browser compatibility",
      "Strong problem-solving skills and attention to detail",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Remote work flexibility",
      "Health, dental, and vision insurance",
      "401(k) matching",
      "Unlimited PTO",
      "Professional development budget",
    ],
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataFlow Systems",
    location: "New York, NY",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    experience: "3+ years",
    department: "Backend Development",
    description: `Join our backend team to build scalable services and APIs that power our enterprise solutions. Looking for someone passionate about system design and performance optimization.`,
    requirements: [
      "3+ years experience with Node.js/Python/Java",
      "Strong knowledge of database systems (SQL and NoSQL)",
      "Experience with microservices architecture",
      "Understanding of cloud services (AWS/GCP/Azure)",
      "Knowledge of API design and REST principles",
    ],
    benefits: [
      "Competitive compensation package",
      "Hybrid work model",
      "Full medical coverage",
      "Stock options",
      "Annual learning stipend",
      "Gym membership",
    ],
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "CloudScale",
    location: "Remote",
    salary: "$110,000 - $140,000",
    type: "Full-time",
    experience: "4+ years",
    department: "Infrastructure",
    description: `We're seeking a DevOps Engineer to help automate our infrastructure and improve our deployment processes. You'll work on maintaining and scaling our cloud infrastructure.`,
    requirements: [
      "4+ years of DevOps experience",
      "Strong knowledge of AWS/GCP",
      "Experience with Docker and Kubernetes",
      "Expertise in CI/CD pipelines",
      "Infrastructure as Code experience (Terraform)",
    ],
    benefits: [
      "Competitive salary",
      "100% remote work",
      "Health and dental insurance",
      "Company-provided equipment",
      "Conference attendance budget",
      "Flexible hours",
    ],
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Creative Solutions",
    location: "San Francisco, CA",
    salary: "$90,000 - $120,000",
    type: "Full-time",
    experience: "2+ years",
    department: "Design",
    description: `Looking for a talented UI/UX Designer to create beautiful and functional user interfaces. You'll work closely with product managers and developers to deliver exceptional user experiences.`,
    requirements: [
      "2+ years of UI/UX design experience",
      "Proficiency in Figma/Sketch",
      "Strong portfolio demonstrating web/mobile designs",
      "Understanding of user-centered design principles",
      "Experience with design systems",
    ],
    benefits: [
      "Competitive pay",
      "Flexible work arrangements",
      "Health benefits",
      "Creative software subscriptions",
      "Professional development",
      "Team events and activities",
    ],
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Boston, MA",
    salary: "$115,000 - $145,000",
    type: "Full-time",
    experience: "3+ years",
    department: "Data Science",
    description: `Join our data science team to develop and implement machine learning models and analytics solutions. You'll work on challenging problems and help drive data-driven decisions.`,
    requirements: [
      "MS/PhD in Computer Science, Statistics, or related field",
      "3+ years experience in machine learning",
      "Proficiency in Python and R",
      "Experience with deep learning frameworks",
      "Strong statistical analysis skills",
    ],
    benefits: [
      "Top-tier compensation",
      "Hybrid work model",
      "Comprehensive benefits package",
      "Research budget",
      "Conference participation",
      "Education reimbursement",
    ],
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
