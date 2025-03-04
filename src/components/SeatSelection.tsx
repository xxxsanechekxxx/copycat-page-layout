
import React from 'react';

const SeatSelection = () => {
  return (
    <div className="mt-8 border border-gray-200 rounded-md p-6 animate-fadeIn">
      <div className="flex items-center">
        <div className="text-delta-blue">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 18v-9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9"></path>
            <path d="M1 22h22"></path>
            <path d="M6 14h12"></path>
            <path d="M6 10h12"></path>
          </svg>
        </div>
        <p className="ml-3 text-lg font-semibold text-delta-blue">View Seats</p>
      </div>
      
      <div className="mt-6 flex justify-between items-center">
        <p className="text-delta-blue">View a map of the plane and select your seats</p>
        
        <button className="outline-button uppercase text-sm font-medium">
          Select Seats
        </button>
      </div>
    </div>
  );
};

export default SeatSelection;
