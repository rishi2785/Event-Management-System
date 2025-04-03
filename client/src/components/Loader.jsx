import React from "react";

const Loader = ({ size = "medium", color = "indigo", fullPage = false }) => {
  // Size variants
  const sizes = {
    small: "w-6 h-6",
    medium: "w-10 h-10",
    large: "w-16 h-16",
  };

  // Color variants
  const colors = {
    indigo: "border-indigo-500",
    purple: "border-purple-500",
    blue: "border-blue-500",
    emerald: "border-emerald-500",
    gray: "border-gray-500",
    white: "border-white",
  };

  const selectedSize = sizes[size] || sizes.medium;
  const selectedColor = colors[color] || colors.indigo;

  if (fullPage) {
    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center">
          <div className={`${selectedSize} border-4 ${selectedColor} border-t-transparent rounded-full animate-spin`}></div>
          <p className="mt-4 text-gray-700 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className={`${selectedSize} border-4 ${selectedColor} border-t-transparent rounded-full animate-spin`}></div>
      <p className="mt-3 text-gray-600 font-medium text-sm">Loading...</p>
    </div>
  );
};

export default Loader;