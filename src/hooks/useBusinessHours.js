import { useState, useEffect } from 'react';

export function useBusinessHours() {
  const [isOpen, setIsOpen] = useState(true);
  const [nextOpenTime, setNextOpenTime] = useState('');

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      
      // Open from 09:00 to 23:00 (11 PM)
      const openHour = 9;
      const closeHour = 23;

      if (hours >= openHour && hours < closeHour) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
        setNextOpenTime('09:00 AM');
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return { isOpen, nextOpenTime };
}
