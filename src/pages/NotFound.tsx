import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <div className="mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center glow-effect mb-6">
          <span className="text-3xl font-bold text-primary-foreground">?</span>
        </div>
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg smooth-transition hover:glow-effect font-medium"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
