import React from "react";

const Button = ({ label, onClick, type = "button", variant = "primary", size = "md", className = "", isLoading = false, icon = null }) => {
  // Button style variants
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    success: "bg-emerald-600 hover:bg-emerald-700 text-white",
    danger: "bg-rose-600 hover:bg-rose-700 text-white",
    warning: "bg-amber-500 hover:bg-amber-600 text-white",
    info: "bg-sky-500 hover:bg-sky-600 text-white",
    outline: "bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    text: "bg-transparent hover:bg-gray-100 text-indigo-600",
  };

  // Button sizes
  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "px-4 py-2",
    lg: "text-lg px-6 py-2.5",
    xl: "text-xl px-8 py-3",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`
        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.md}
        font-medium rounded-lg transition-all duration-200 
        focus:ring-4 focus:ring-opacity-50 focus:outline-none
        ${variant === 'primary' ? 'focus:ring-indigo-300' : ''}
        ${variant === 'success' ? 'focus:ring-emerald-300' : ''}
        ${variant === 'danger' ? 'focus:ring-rose-300' : ''}
        ${variant === 'warning' ? 'focus:ring-amber-300' : ''}
        ${variant === 'info' ? 'focus:ring-sky-300' : ''}
        ${variant === 'outline' ? 'focus:ring-indigo-200' : ''}
        ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}
        flex items-center justify-center gap-2
        ${className}
      `}
    >
      {isLoading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          ></circle>
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {icon && !isLoading && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;