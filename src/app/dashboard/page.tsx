"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CandidateDashboard from "./CandidateDashboard";
import CompanyDashboard from "./CompanyDashboard";
import AdminDashboard from "./AdminDashboard";

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null;

  switch (user.role) {
    case "candidate":
      return <CandidateDashboard user={user} />;
    case "company":
      return <CompanyDashboard user={user} />;
    case "admin":
      return <AdminDashboard user={user} />;
    default:
      return null;
  }
}
