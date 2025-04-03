import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Add a small delay for loading animation
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading || isAnimating) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // if (!user) {
  //   // Store the location the user was trying to visit
  //   return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  // }

  // Apply a fade-in animation to the protected content
  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
};

export default ProtectedRoute;