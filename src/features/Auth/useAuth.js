import { useEffect, useState, useCallback } from "react";
import { loginApi, setAuthHeader } from "@/services/authApi";

// Robust useAuth hook: manages access token and user info
export default function useAuth() {
  const getInitial = () => {
    if (typeof window === "undefined") return false;
    const token = localStorage.getItem("accessToken");
    if (token) setAuthHeader(token);
    return !!token;
  };

  const [isAuthenticated, setIsAuthenticated] = useState(getInitial);
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('user');
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    const onStorage = () => {
      const token = localStorage.getItem("accessToken");
      setIsAuthenticated(!!token);
      try {
        const raw = localStorage.getItem('user');
        setUser(raw ? JSON.parse(raw) : null);
      } catch (e) {
        setUser(null);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const login = useCallback(async (credentials) => {
    // credentials: { usernameOrEmail, password }
    const data = await loginApi(credentials);
    const { accessToken, refreshToken, user: userPayload } = data;
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
      if (userPayload) localStorage.setItem('user', JSON.stringify(userPayload));
      setAuthHeader(accessToken);
      setIsAuthenticated(true);
      setUser(userPayload || null);
    }
    return data;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    setAuthHeader(null);
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  return { isAuthenticated, user, login, logout };
}
