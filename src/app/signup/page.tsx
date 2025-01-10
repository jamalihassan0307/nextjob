"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { addUser, UserRole } from "@/data/users";
import { useAuth } from "@/context/AuthContext";

export default function Signup() {
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [selectedRole, setSelectedRole] = useState<UserRole>("candidate");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newUser = addUser({
        ...formData,
        role: selectedRole,
      });
      login(newUser);
      router.push("/dashboard");
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Create your account</h2>
          <div className="role-selector">
            <button
              className={`role-button ${
                selectedRole === "candidate" ? "active" : ""
              }`}
              onClick={() => setSelectedRole("candidate")}
            >
              Job Seeker
            </button>
            <button
              className={`role-button ${
                selectedRole === "company" ? "active" : ""
              }`}
              onClick={() => setSelectedRole("company")}
            >
              Employer
            </button>
            <button
              className={`role-button ${
                selectedRole === "admin" ? "active" : ""
              }`}
              onClick={() => setSelectedRole("admin")}
            >
              Admin
            </button>
          </div>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          <div>
            <label className="form-label">Full Name</label>
            <input
              type="text"
              required
              className="form-input"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="form-label">Email</label>
            <input
              type="email"
              required
              className="form-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="form-label">Password</label>
            <input
              type="password"
              required
              className="form-input"
              placeholder="Create a password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <button type="submit" className="button button-primary">
            Sign up as {selectedRole}
          </button>
        </form>

        <div className="auth-footer">
          <Link href="/login">Already have an account? Sign in</Link>
        </div>
      </div>
    </div>
  );
}
