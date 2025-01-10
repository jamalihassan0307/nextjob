"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { findUser, UserRole } from "@/data/users";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [selectedRole, setSelectedRole] = useState<UserRole>("candidate");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = findUser(formData.email, formData.password);

    if (user && user.role === selectedRole) {
      login(user);
      router.push("/dashboard");
    } else {
      setError("Invalid credentials or role mismatch");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Sign in to your account</h2>
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
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <button type="submit" className="button button-primary">
            Sign in as {selectedRole}
          </button>
        </form>

        <div className="auth-footer">
          <Link href="/signup">Don't have an account? Sign up</Link>
        </div>
      </div>
    </div>
  );
}
