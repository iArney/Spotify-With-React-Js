import React from "react";
// import { CalendarIcon } from "@heroicons";

function ReleaseCalendar() {
  return (
    <div className="bg-gray-50 w-3/4 shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto my-6 px-4">
          <h2 className="text-2xl font-bold ">New and Notable</h2>
          {/* <CalendarIcon className="h-6 w-6 text-gray-600" /> */}
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center space-x-4">
          <div className="bg-red-500 rounded-full h-2 w-2"></div>
          <div className="text-gray-600">Album Release</div>
          <div className="text-gray-500">March 15, 2023</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500 rounded-full h-2 w-2"></div>
          <div className="text-gray-600">Single Release</div>
          <div className="text-gray-500">April 1, 2023</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500 rounded-full h-2 w-2"></div>
          <div className="text-gray-600">Concert</div>
          <div className="text-gray-500">May 12, 2023</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-500 rounded-full h-2 w-2"></div>
          <div className="text-gray-600">Radio Play</div>
          <div className="text-gray-500">June 5, 2023</div>
        </div>
      </div>
    </div>
  );
}

export default ReleaseCalendar;
