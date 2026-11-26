import { useState, useEffect } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "INSTRUCTOR" | "ADMIN";
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("admin_user");
    return saved ? JSON.parse(saved) : { id: "1", name: "Instructor Demo", email: "demo@platform.com", role: "INSTRUCTOR" };
  });

  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("admin_token") || "mock_jwt_token";
  });

  const login = (newUser: User, newToken: string) => {
    setUser(newUser);
    setToken(newToken);
    localStorage.setItem("admin_user", JSON.stringify(newUser));
    localStorage.setItem("admin_token", newToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("admin_user");
    localStorage.removeItem("admin_token");
  };

  return { user, token, isAuthenticated: !!token, login, logout };
}
