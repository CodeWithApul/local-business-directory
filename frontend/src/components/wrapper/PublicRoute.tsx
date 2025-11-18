// src/components/PublicRoute.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchWithAuth from "../../utils/fetchWithAuth";

type Props = { children: React.ReactNode };

export default function PublicRoute({ children }: Props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetchWithAuth(
          `${import.meta.env.VITE_BACKEND_URL}/api}/business/auth/check`,
          {
            method: "GET",
            credentials: "include",
          },
        );

        // if fetchWithAuth retried and returned a 200 => user is authenticated
        if (!mounted) return;
        if (res.ok) {
          navigate("/shop", { replace: true });
        } else {
          setLoading(false);
        }
      } catch (error) {
        // network or refresh-failed → treat as unauthenticated
        console.error(error);
        if (!mounted) return;
        setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [navigate]);

  if (loading) {
    // simple placeholder — replace with your loading UI
    return <div className="p-8 text-center">Checking session…</div>;
  }

  return <>{children}</>;
}
