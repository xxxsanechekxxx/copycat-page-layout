
import React from 'react';

interface FlightProps {
  type: 'Outbound' | 'Return';
  from: string;
  to: string;
  date: string;
  departTime: string;
  arriveTime: string;
  duration: string;
  flightCodes: string;
}

const Flight: React.FC<FlightProps> = ({ 
  type, from, to, date, departTime, arriveTime, duration, flightCodes 
}) => {
  return (
    <div className="border border-gray-200 rounded-md mb-6 overflow-hidden animate-slideUp">
      <div className="flex">
        <div className="w-1 bg-delta-blue"></div>
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center">
                <p className="font-semibold text-delta-blue">{type}</p>
              </div>
              <div className="mt-3 flex items-center">
                <p className="text-xl font-medium">{from} • {to}</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <p>{flightCodes}</p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-between">
            <div>
              <p className="text-lg font-medium">{date}</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold">{departTime} - {arriveTime}</p>
              <p className="text-sm text-gray-600">{duration} <span className="ml-2 px-2 py-0.5 bg-gray-100 rounded text-xs">Main</span></p>
            </div>
            <div className="flex items-center">
              <button className="text-delta-red">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FlightDetails = () => {
  return (
    <div className="mt-4">
      <Flight 
        type="Outbound"
        from="AGS"
        to="BCN"
        date="Wed, Mar 12"
        departTime="2:20pm" 
        arriveTime="7:40am"
        duration="Direct"
        flightCodes="DL5288*, DL194"
      />
      
      <Flight 
        type="Return"
        from="BCN"
        to="AGS"
        date="Wed, Mar 26"
        departTime="9:45am" 
        arriveTime="6:40pm"
        duration="1 stop, 13h 55m"
        flightCodes="DL195, DL5282*"
      />
      
      <div className="text-sm text-delta-blue">
        <span>Changeable / Nonrefundable</span>
      </div>
    </div>
  );
};

export default FlightDetails;
