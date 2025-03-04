
import React from 'react';

const PassengerInfo = () => {
  return (
    <div className="mt-8 animate-fadeIn">
      <div className="flex items-center">
        <div className="step-number bg-delta-blue text-white mr-3">1</div>
        <h2 className="text-xl font-semibold text-delta-blue">Passenger Info</h2>
      </div>
      
      <div className="mt-6 border border-gray-200 rounded-md p-6">
        <p className="text-sm text-gray-700">
          Please make sure your full name is entered exactly as it appears on your government-issued identification. When booking a reservation, this Secure Flight Passenger Data is required for compliance with U.S. and foreign government regulatory programs, including TSA Secure Flight.
        </p>
        
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Passenger 1</h3>
          </div>
          <p className="text-sm text-gray-600 mt-1">All fields required unless noted</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center">
                  <div className="circle-icon">R</div>
                </span>
                <input type="text" placeholder="First Name" className="input-field pl-10" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Middle Name (optional)</label>
              <input type="text" placeholder="Middle Name (optional)" className="input-field" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center">
                  <div className="circle-icon">R</div>
                </span>
                <input type="text" placeholder="Last Name" className="input-field pl-10" />
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Frequent Flyer Program(optional)</label>
              <div className="relative">
                <select className="input-field appearance-none pr-10">
                  <option>Delta Air Lines/SkyMiles</option>
                </select>
                <span className="absolute inset-y-0 right-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Frequent Flyer Number (optional)</label>
              <input type="text" placeholder="Frequent Flyer # (opt.)" className="input-field" />
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-delta-red mb-1">Date of Birth</label>
              <div className="flex space-x-2">
                <div className="relative w-full">
                  <span className="absolute inset-y-0 left-3 flex items-center">
                    <div className="circle-icon">R</div>
                  </span>
                  <select className="input-field appearance-none pl-10 pr-10">
                    <option>MM</option>
                  </select>
                  <span className="absolute inset-y-0 right-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div>
                
                <div className="relative w-full">
                  <span className="absolute inset-y-0 left-3 flex items-center">
                    <div className="circle-icon">R</div>
                  </span>
                  <select className="input-field appearance-none pl-10 pr-10">
                    <option>DD</option>
                  </select>
                  <span className="absolute inset-y-0 right-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div>
                
                <div className="relative w-full">
                  <span className="absolute inset-y-0 left-3 flex items-center">
                    <div className="circle-icon">R</div>
                  </span>
                  <select className="input-field appearance-none pl-10 pr-10">
                    <option>YYYY</option>
                  </select>
                  <span className="absolute inset-y-0 right-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center">
                  <div className="circle-icon">R</div>
                </span>
                <select className="input-field appearance-none pl-10 pr-10">
                  <option>Select</option>
                </select>
                <span className="absolute inset-y-0 right-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-medium text-delta-blue">Earn 8,995 miles for this trip when you sign up for SkyMiles after completing your purchase.</h3>
            
            <div className="mt-4 flex items-center">
              <input type="checkbox" id="use-info" className="w-5 h-5 border-gray-300 rounded text-delta-blue focus:ring-delta-blue" />
              <label htmlFor="use-info" className="ml-2 text-sm text-gray-700">
                Use my Passenger Info above to sign up for SkyMiles and earn miles.
              </label>
            </div>
            
            <p className="mt-2 text-sm text-gray-600">
              All SkyMiles Program Rules apply. Visit <a href="https://delta.com/memberguide" className="text-delta-lightblue hover:underline">delta.com/memberguide</a>
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t">
            <div className="flex items-center">
              <h3 className="font-semibold text-delta-blue">Secure Flight Info</h3>
              <button className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-delta-blue">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </button>
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Known Traveler #(optional)</label>
                <input type="text" placeholder="" className="input-field" />
                <p className="mt-1 text-xs text-gray-600">TSA Pre™, Global Entry, NEXUS, SENTRI</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Redress # (optional)</label>
                <input type="text" placeholder="" className="input-field" />
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t">
            <div className="flex items-center">
              <input type="checkbox" id="corporate-rewards" className="w-5 h-5 border-gray-300 rounded text-delta-blue focus:ring-delta-blue" />
              <label htmlFor="corporate-rewards" className="ml-2 text-sm font-medium text-gray-700">
                My company is a corporate rewards program member
              </label>
            </div>
            
            <p className="mt-4 text-sm text-gray-600">
              Learn more on eligible corporate rewards programs, Delta SkyBonus®/SkyMiles for Business, Air France/KLM BlueBiz® or 
              <a href="#" className="text-delta-lightblue hover:underline"> Aeromexico Club Premier Corporate</a>.
            </p>
          </div>
          
          <div className="mt-8">
            <div className="flex items-center">
              <input type="checkbox" id="emergency-contact" className="w-5 h-5 border-gray-300 rounded text-delta-blue focus:ring-delta-blue" checked />
              <label htmlFor="emergency-contact" className="ml-2 text-sm font-medium text-gray-700">
                Add an Emergency Contact
              </label>
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium">Emergency Contact</h3>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-delta-red mb-1">First Name</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center">
                      <div className="circle-icon">R</div>
                    </span>
                    <input type="text" className="input-field pl-10" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-delta-red mb-1">Last Name</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center">
                      <div className="circle-icon">R</div>
                    </span>
                    <input type="text" className="input-field pl-10" />
                  </div>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country Code/ Region</label>
                  <div className="relative">
                    <select className="input-field appearance-none pr-10">
                      <option>United States (1)</option>
                    </select>
                    <span className="absolute inset-y-0 right-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-delta-red mb-1">Phone#</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center">
                      <div className="circle-icon">R</div>
                    </span>
                    <input type="text" className="input-field pl-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerInfo;
