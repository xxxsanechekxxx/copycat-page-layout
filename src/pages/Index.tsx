
import React from 'react';
import Header from '@/components/Header';
import TripSummary from '@/components/TripSummary';
import FlightDetails from '@/components/FlightDetails';
import SeatSelection from '@/components/SeatSelection';
import BaggageAllowance from '@/components/BaggageAllowance';
import PassengerInfo from '@/components/PassengerInfo';
import Payment from '@/components/Payment';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-red-100 border-b border-red-200 p-4">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-red-800 font-medium text-center">
            Warning: You are purchasing a ticket for another person who shared this link with you. Please be cautious.
          </p>
        </div>
      </div>
      
      <Header />
      
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-delta-blue mb-8">Review and Pay</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <FlightDetails />
            <SeatSelection />
            <BaggageAllowance />
            <PassengerInfo />
            <Payment />
          </div>
          
          <div className="w-full lg:w-1/3">
            <div className="sticky top-8">
              <TripSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
