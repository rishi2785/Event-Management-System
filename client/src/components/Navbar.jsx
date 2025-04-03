import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Event Manager
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/events" 
              className="hover:text-blue-200 transition-colors"
              data-discover="true"
            >
              Events
            </Link>
            <Link 
              to="/calendar" 
              className="hover:text-blue-200 transition-colors"
              data-discover="true"
            >
              Calendar
            </Link>
            
            {user ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                data-discover="true"
              >
                Logout
              </button>
            ) : (
              <div className="flex items-center space-x-2">
                <Link 
                  to="/login" 
                  className="px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  data-discover="true"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="px-4 py-2 rounded-md bg-white text-blue-700 hover:bg-blue-100 transition-colors"
                  data-discover="true"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;