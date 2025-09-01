import { useState, useEffect } from "react";
import LoginForm from "@/components/LoginForm";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for existing authentication on mount
  useEffect(() => {
    const authStatus = localStorage.getItem("rateit-auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("rateit-auth", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("rateit-auth");
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return <Dashboard onLogout={handleLogout} />;
  }

  return <LoginForm onLogin={handleLogin} />;
};

export default Index;
