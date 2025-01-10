"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@/data/users";
import Cookies from "js-cookie";

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check localStorage on initial load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    // Store in both localStorage and cookie
    localStorage.setItem("user", JSON.stringify(userData));
    Cookies.set("user", JSON.stringify(userData), { expires: 7 }); // Expires in 7 days
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    Cookies.remove("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
