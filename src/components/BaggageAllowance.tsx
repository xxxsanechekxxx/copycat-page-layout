
import React from 'react';

const BaggageItem = ({ route, carryOn, firstBag, secondBag, secondBagCost, currency, miles }) => {
  return (
    <div className="mb-6">
      <div className="text-sm font-medium text-gray-600">
        {route === 'Outbound' ? 'Outbound' : 'Return'}
      </div>
      <div className="flex mt-1">
        <div className="w-1/4">
          <p className="text-lg font-medium">{route === 'Outbound' ? 'AGS - BCN' : 'BCN - AGS'}</p>
        </div>
        <div className="w-1/4">
          <div className="text-lg font-medium text-delta-blue">Free <span className="text-sm text-gray-500">({carryOn} pieces)</span></div>
        </div>
        <div className="w-1/4">
          <div className="text-lg font-medium text-delta-blue">Free <span className="text-sm text-gray-500">(50lbs/23kg)</span></div>
        </div>
        <div className="w-1/4">
          <div className="text-lg">
            <span className="font-medium text-delta-blue">${secondBagCost}.00</span>
            <span className="ml-1 text-sm text-gray-600">{currency}</span>
          </div>
          <p className="text-sm text-gray-600">or 10,000 miles</p>
          <p className="text-sm text-gray-600">(50lbs/23kg)</p>
        </div>
      </div>
    </div>
  );
};

const BaggageAllowance = () => {
  return (
    <div className="mt-8 border border-gray-200 rounded-md p-6 animate-fadeIn">
      <div className="flex items-center">
        <div className="text-delta-blue">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="1" width="6" height="16" rx="2"></rect>
            <rect x="3" y="8" width="18" height="12" rx="2"></rect>
            <path d="M7 8v1"></path>
            <path d="M17 8v1"></path>
            <path d="M7 16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1H7v1z"></path>
          </svg>
        </div>
        <p className="ml-3 text-lg font-semibold text-delta-blue">Baggage Allowance (Per Passenger)</p>
      </div>
      
      <div className="mt-6">
        <div className="grid grid-cols-4 mb-2">
          <div></div>
          <div className="text-delta-blue font-medium">Carry-On</div>
          <div className="text-delta-blue font-medium">1st Bag</div>
          <div className="text-delta-blue font-medium">2nd Bag</div>
        </div>
        
        <BaggageItem 
          route="Outbound"
          carryOn="1"
          firstBag="50lbs/23kg"
          secondBag="50lbs/23kg"
          secondBagCost="100"
          currency="USD"
          miles="10,000"
        />
        
        <BaggageItem 
          route="Return"
          carryOn="1"
          firstBag="50lbs/23kg"
          secondBag="50lbs/23kg"
          secondBagCost="96"
          currency="EUR"
          miles="10,000"
        />
        
        <div className="flex items-start mt-4 pb-4 border-b border-gray-200">
          <div className="p-1 border border-gray-300 rounded mr-3 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </div>
          <p className="text-delta-blue">
            Traveling with multiple bags or have special items like golf clubs or overweight/oversized baggage?
          </p>
          <div className="ml-auto">
            <button className="outline-button uppercase text-sm font-medium">
              Calculate Estimate
            </button>
          </div>
        </div>
        
        <div className="mt-6 text-sm">
          <p>
            See what's classified as a <a href="#" className="text-delta-lightblue hover:underline">Special Item</a> and how <a href="#" className="text-delta-lightblue hover:underline">Modifying Medallion/Credit Card Status</a> or how your baggage allowance is affected by an <a href="#" className="text-delta-lightblue hover:underline">Active Military Status</a>.
          </p>
          
          <p className="mt-4 text-gray-600">
            Checked baggage must not exceed 62 inches (157cm) when you add total Length + Width + Height. Your allowance is based on the highest Medallion® Status AND/OR Delta SkyMiles® Amex Card Membership within your reservation plus up to 8 travel companions when traveling on a Delta operated flight and is subject to change based on Status or Card Membership at check in. Additional allowance details are available in our 
            <a href="#" className="text-delta-lightblue hover:underline"> Baggage and Travel Fees</a> and <a href="#" className="text-delta-lightblue hover:underline">First Checked Bag Terms & Conditions</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BaggageAllowance;
