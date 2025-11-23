// context/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  sendLoginRequest,
  sendLogoutRequest,
} from "../services/businessService";
import { initApiClient, refreshToken } from "../utils/fetchWithAuth";

import type { LoginFormValues } from "../schema/LoginFormSchema";
interface AuthState {
  token: string | null;
  login: (credentials: LoginFormValues) => Promise<void>;
  logout: () => void;
  loading: boolean;
  setToken: (token: string) => void;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 🔑 Startup check: try to refresh token
  useEffect(() => {
    const initAuth = async () => {
      const loggedIn = localStorage.getItem("loggedIn");
      if (!loggedIn) {
        setLoading(false);
        return;
      }

      try {
        const accessToken = await refreshToken();
        setToken(accessToken);
      } catch (err) {
        setToken(null);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, []);

  useEffect(() => {
    initApiClient(token, setToken); // sync client with context
  }, [token, setToken]);

  async function login(credentials: LoginFormValues) {
    const accessToken = await sendLoginRequest(credentials);
    setToken(accessToken);
    localStorage.setItem("loggedIn", "true");
  }

  async function logout() {
    setToken(null);
    await sendLogoutRequest();
    localStorage.removeItem("loggedIn");
    navigate("/shop/login");
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, loading, setToken }}>
      {loading ? <div>Loading session…</div> : children}
    </AuthContext.Provider>
  );
}

// 👇 This is the hook
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
