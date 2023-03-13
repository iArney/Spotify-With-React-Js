import React from "react";

function Events() {
  return (
    <div
      className={`bg-music-bg relative bg-cover bg-center h-64 md:h-80 text-white`}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8 md:px-12 md:py-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          Upcoming Events
        </h2>
        <p className="text-lg md:text-xl text-center max-w-md">
          Join us for an unforgettable night of live music and entertainment.
        </p>
        <button className="mt-8 bg-white text-gray-900 py-2 px-4 rounded-full font-medium hover:bg-gray-300 hover:text-gray-900 transition duration-200">
          Buy Tickets
        </button>
      </div>
    </div>
  );
}

export default Events;
