import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  // Format date nicely if it's a valid date string
  const formatDate = (dateString) => {
    try {
      const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    } catch (e) {
      return dateString;
    }
  };

  // Extract date parts for the calendar display
  const getDateParts = () => {
    try {
      const date = new Date(event.date);
      return {
        day: date.getDate(),
        month: date.toLocaleString('default', { month: 'short' }),
        valid: true
      };
    } catch (e) {
      return { valid: false };
    }
  };

  const dateParts = getDateParts();

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-gray-100 flex flex-col">
      {/* Card Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white relative">
        {dateParts.valid ? (
          <div className="absolute right-4 top-4 bg-white text-indigo-800 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-indigo-100 text-indigo-800 px-3 py-1 text-center font-medium text-sm">
              {dateParts.month}
            </div>
            <div className="text-center font-bold text-2xl px-3 py-1">
              {dateParts.day}
            </div>
          </div>
        ) : null}
        <h3 className="text-xl font-bold pr-16">{event.name}</h3>
        <p className="text-indigo-100 text-sm mt-1">
          {dateParts.valid ? formatDate(event.date) : event.date}
        </p>
      </div>
      
      {/* Card Body */}
      <div className="p-4 flex-grow">
        <p className="text-gray-600">{event.description}</p>
      </div>
      
      {/* Card Footer */}
      <div className="p-4 pt-0 mt-auto">
        <Link 
          to={`/event/${event.id}`} 
          className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          View Details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;