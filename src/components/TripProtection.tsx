
import React from 'react';

const TripProtection = () => {
  return (
    <div className="mt-8 animate-fadeIn">
      <div className="flex items-center">
        <div className="step-number bg-delta-blue text-white mr-3">2</div>
        <h2 className="text-xl font-semibold text-delta-blue">Trip Protection</h2>
      </div>
      
      <div className="mt-6 border border-gray-200 rounded-md p-6">
        <h3 className="text-lg font-medium text-delta-blue">Protect your $1,908.61 trip to Barcelona.</h3>
        
        <p className="mt-2 text-delta-blue font-medium">* Required: Select Yes or No to continue</p>
        
        <div className="mt-6 border border-gray-200 rounded-md p-4 relative">
          <div className="absolute right-0 -top-6">
            <div className="bg-green-600 text-white text-xs font-bold py-1 px-3 rounded-t-md uppercase">
              Recommended
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1 mr-3">
              <div className="input-circle"></div>
            </div>
            <div>
              <p className="font-medium">Yes, protect my trip for $152.69 total.</p>
              
              <div className="mt-4 space-y-4">
                <div className="flex">
                  <div className="text-delta-blue mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 2l4 4 4-4"></path>
                      <path d="M12 6v16"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Peace of mind: <span className="font-normal">Emergency medical care and transportation benefits</span> <span className="text-delta-blue">(up to $50,000 each)</span> in case of a covered illness or injury</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="text-delta-blue mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Compensation: <span className="font-normal">Up to 100% reimbursement for a covered trip cancellation or interruption</span></p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="text-delta-blue mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Reimbursement: <span className="font-normal">Cash back for eligible lost, pre-paid trip expenses, meals, accommodations, or transportation expenses due to a covered delay</span></p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="text-delta-blue mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="8" width="18" height="12" rx="2"></rect>
                      <path d="M7 8v1"></path>
                      <path d="M17 8v1"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Protection: <span className="font-normal">Insurance for lost, stolen, damaged or delayed baggage</span></p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="text-delta-blue mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 8v4"></path>
                      <path d="M12 16h.01"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Help when you need it: <span className="font-normal">24/7 live, award-winning assistance services</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 border border-gray-200 rounded-md p-4">
          <div className="flex items-start">
            <div className="mt-1 mr-3">
              <div className="input-circle active"></div>
            </div>
            <div>
              <p className="font-medium">No, do not protect my trip.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex items-center">
          <div className="text-delta-blue mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <p className="text-sm font-medium">
            <span className="text-delta-blue">Frequently Added:</span> 42,259 Delta customers protected their trip in the last 3 days
          </p>
        </div>
        
        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-md p-4">
          <div className="flex items-start">
            <div className="text-delta-blue mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v4"></path>
                <path d="M12 16h.01"></path>
              </svg>
            </div>
            <div>
              <p className="font-medium text-delta-blue">Important Travel Tip</p>
              <p className="mt-1 text-sm">
                "When traveling outside of the country, travel insurance becomes even more important as there's a good chance your U.S. health insurance won't work internationally, and Medicare generally isn't accepted in foreign countries." – <span className="italic">USAToday.com, May 2023</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-xs text-gray-600">
          <p>
            Recommended/offered/sold by Allianz Global Assistance. Underwriter: Jefferson Insurance Company or BCS Insurance Company. Plan incl. insurance & assistance services. Terms & exclusions (incl. for pre-existing conditions) apply. 
            <a href="#" className="text-delta-lightblue hover:underline">Plan & Pricing details, disclosures, Coverage Alerts</a>
          </p>
          
          <div className="mt-4 flex justify-end">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Allianz_logo.svg/2560px-Allianz_logo.svg.png" alt="Allianz" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripProtection;
