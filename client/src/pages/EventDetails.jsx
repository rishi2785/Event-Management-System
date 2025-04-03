import React from "react";
import { useParams, Link } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  
  // This would typically be replaced with actual data fetching
  const mockEvent = {
    id,
    name: "Sample Event",
    date: "2025-04-15",
    time: "14:00",
    location: "Virtual Conference",
    description: "This is a detailed description of the event that would be fetched from the backend.",
    attendees: 42,
    organizer: "Event Planning Team"
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/dashboard" className="text-indigo-600 hover:text-indigo-800 flex items-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Dashboard
      </Link>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
          <h1 className="text-3xl font-bold text-white">{mockEvent.name}</h1>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Date</h3>
              <p className="mt-1 font-semibold">{mockEvent.date}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Time</h3>
              <p className="mt-1 font-semibold">{mockEvent.time}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Location</h3>
              <p className="mt-1 font-semibold">{mockEvent.location}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">About This Event</h2>
            <p className="text-gray-600">{mockEvent.description}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-gray-200">
            <div className="mb-4 sm:mb-0">
              <span className="text-sm text-gray-500">Organized by</span>
              <p className="font-medium">{mockEvent.organizer}</p>
            </div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;