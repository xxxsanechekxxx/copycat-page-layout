
import React from 'react';

const TripSummary = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-fadeIn">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-delta-blue">Trip Total</h2>
        <button className="text-sm text-delta-lightblue hover:underline">Currency Calculator</button>
      </div>
      
      <div className="mt-4">
        <p className="font-medium">1 Passenger</p>
        
        <div className="mt-4 flex justify-between">
          <p className="text-delta-blue">Flights</p>
          <p className="font-medium">$1,460.00</p>
        </div>
        
        <div className="mt-2 flex justify-between">
          <p className="text-delta-blue">Taxes, Fees & Charges</p>
          <p className="font-medium">$109.61</p>
        </div>
        
        <div className="mt-6 pt-4 border-t flex justify-between items-center">
          <p className="text-delta-blue">Amount Due</p>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold">$1,569</span>
            <span className="text-sm font-semibold mr-2">.61</span>
            <span className="text-sm">USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripSummary;
