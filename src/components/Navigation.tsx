"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav className="nav">
      <div className="nav-content">
        <Link href="/" className="nav-brand">
          NextJob
        </Link>
        <div className="nav-links">
          {user ? (
            <>
              <Link href="/jobs" className="nav-link">
                Browse Jobs
              </Link>
              <Link href="/dashboard" className="nav-link">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="nav-link">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="nav-link">
                Login
              </Link>
              <Link href="/signup" className="nav-link">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
