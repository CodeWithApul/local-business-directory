import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      await logout(); // Call the logout method from useAuth
      navigate("/shop/login"); // Redirect to the login page
    };

    performLogout();
  }, [logout, navigate]);

  return null; // No UI needed for the logout route
}
