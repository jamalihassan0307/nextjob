"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { addJob } from "@/data/jobs";

export default function CreateJob() {
  const router = useRouter();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    salary: "",
    type: "Full-time",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || user.role !== "company") {
      return;
    }

    const newJob = addJob({
      ...formData,
      company: user.name,
    });

    router.push("/dashboard");
  };

  if (!user || user.role !== "company") {
    return (
      <div className="container">
        <h1>Unauthorized Access</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="job-form-container">
        <h1>Post a New Job</h1>
        <form onSubmit={handleSubmit} className="job-form">
          <div className="form-group">
            <label className="form-label">Job Title</label>
            <input
              type="text"
              required
              className="form-input"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label className="form-label">Location</label>
            <input
              type="text"
              required
              className="form-input"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label className="form-label">Salary Range</label>
            <input
              type="text"
              required
              className="form-input"
              value={formData.salary}
              onChange={(e) =>
                setFormData({ ...formData, salary: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label className="form-label">Job Type</label>
            <select
              className="form-input"
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Job Description</label>
            <textarea
              required
              className="form-input"
              rows={5}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          <button type="submit" className="button button-primary">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
}
