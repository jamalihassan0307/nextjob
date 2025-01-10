"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { addApplication } from "@/data/applications";

interface ApplyJobProps {
  params: { id: string };
}

export default function ApplyJob({ params }: ApplyJobProps) {
  const router = useRouter();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    resume: null as File | null,
    coverLetter: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError("Please login to apply");
      return;
    }

    try {
      await addApplication({
        jobId: parseInt(params.id),
        userId: user.id,
        status: "Applied",
        appliedDate: new Date().toISOString().split("T")[0],
        resume: formData.resume?.name || "resume.pdf",
        coverLetter: formData.coverLetter,
      });

      console.log("Application submitted successfully");
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Failed to submit application. Please try again.");
    }
  };

  if (!user) {
    return (
      <div className="apply-container">
        <div className="apply-card">
          <h2>Please login to apply</h2>
          <Link href="/login" className="button button-primary">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="apply-container">
      <div className="apply-card">
        <div className="apply-header">
          <h2>Apply for Frontend Developer</h2>
          <p>at Tech Corp</p>
        </div>

        <form className="apply-form" onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              required
              className="form-input"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              required
              className="form-input"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              required
              className="form-input"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label className="form-label">Resume</label>
            <input
              type="file"
              required
              className="form-input file-input"
              accept=".pdf,.doc,.docx"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  resume: e.target.files ? e.target.files[0] : null,
                })
              }
            />
            <p className="input-help">Accepted formats: PDF, DOC, DOCX</p>
          </div>

          <div className="form-group">
            <label className="form-label">Cover Letter</label>
            <textarea
              className="form-input"
              rows={5}
              value={formData.coverLetter}
              onChange={(e) =>
                setFormData({ ...formData, coverLetter: e.target.value })
              }
              placeholder="Why are you interested in this position?"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="button button-primary">
              Submit Application
            </button>
            <Link
              href={`/jobs/${params.id}`}
              className="button button-secondary"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
