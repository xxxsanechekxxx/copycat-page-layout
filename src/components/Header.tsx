
import React from 'react';

const Header = () => {
  return (
    <header className="py-4 px-8 border-b border-gray-200 flex justify-between items-center bg-white animate-fadeIn">
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="w-11 h-11 rounded-full bg-delta-blue flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12L3 20l3.5-8L3 4l19 8z" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-lg font-semibold text-delta-blue">Book Better. Fly Better.</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <div className="step-number bg-delta-blue text-white">
            <span>1</span>
          </div>
          <span className="ml-2 text-sm font-medium">Start Over</span>
        </div>
        
        <div className="flex items-center">
          <div className="step-number bg-delta-blue text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span className="ml-2 text-sm font-medium">Trip Summary</span>
        </div>
        
        <div className="flex items-center">
          <div className="step-number bg-delta-blue text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span className="ml-2 text-sm font-medium">Review & Pay</span>
        </div>
        
        <div className="flex items-center">
          <div className="step-number bg-gray-200 text-gray-600">
            <span>3</span>
          </div>
          <span className="ml-2 text-sm font-medium">Confirmation</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
