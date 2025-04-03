import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";
import { useAuth } from "../context/AuthContext";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all, upcoming, past
  const { user } = useAuth();

  useEffect(() => {
    // Mock API call to fetch events
    const fetchEvents = async () => {
      try {
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockEvents = [
          {
            id: "1",
            title: "Web Development Workshop",
            date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
            location: "Tech Hub, Downtown",
            description: "Learn the basics of web development with React and Node.js",
            imageUrl: "/api/placeholder/800/400",
            attendees: 24
          },
          {
            id: "2",
            title: "AI Conference 2025",
            date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
            location: "Innovation Center",
            description: "Explore the latest trends in artificial intelligence and machine learning",
            imageUrl: "/api/placeholder/800/400",
            attendees: 156
          },
          {
            id: "3",
            title: "Design Thinking Workshop",
            date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
            location: "Creative Space",
            description: "A hands-on workshop on design thinking methodologies",
            imageUrl: "/api/placeholder/800/400",
            attendees: 45
          },
          {
            id: "4",
            title: "Startup Networking Mixer",
            date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
            location: "Business Lounge",
            description: "Connect with entrepreneurs and investors in your area",
            imageUrl: "/api/placeholder/800/400",
            attendees: 78
          },
        ];
        
        setEvents(mockEvents);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event => {
    const now = new Date();
    if (filter === "upcoming") {
      return event.date > now;
    } else if (filter === "past") {
      return event.date < now;
    }
    return true; // "all" filter
  });

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Events</h1>
          {user && (
            <Link
              to="/create-event"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
              data-testid="create-event-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Create Event
            </Link>
          )}
        </div>

        <div className="mb-6">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              All Events
            </button>
            <button
              type="button"
              onClick={() => setFilter("upcoming")}
              className={`px-4 py-2 text-sm font-medium ${
                filter === "upcoming"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Upcoming
            </button>
            <button
              type="button"
              onClick={() => setFilter("past")}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                filter === "past"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No events found</h3>
            <p className="mt-2 text-gray-500">No events match your current filter.</p>
            <button
              onClick={() => setFilter("all")}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              View all events
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="events-grid">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img className="h-48 w-full object-cover" src={event.imageUrl} alt={event.title} />
                <div className="p-6">
                  <div className="mb-2">
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                      event.date > new Date() ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}>
                      {event.date > new Date() ? "Upcoming" : "Past"}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h2>
                  <p className="text-gray-500 text-sm mb-4">{formatDate(event.date)}</p>
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">{event.location}</span>
                  </div>
                  <p className="text-gray-600 mb-6 line-clamp-2">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-gray-600">{event.attendees} attendees</span>
                    </div>
                    <Link
                      to={`/events/${event.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;