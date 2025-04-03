import React, { useState } from "react";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";

const Dashboard = () => {
  const [events, setEvents] = useState([
    { id: 1, name: "Tech Conference", date: "2025-01-20", description: "Explore the latest in tech." },
    { id: 2, name: "Art Expo", date: "2025-02-15", description: "Showcasing modern art pieces." },
  ]);

  const addEvent = (newEvent) => {
    const eventWithId = { ...newEvent, id: events.length + 1 };
    setEvents([eventWithId, ...events]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Event Dashboard</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
          + New Event
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Create Event</h2>
        <EventForm addEvent={addEvent} />
      </div>
      
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;