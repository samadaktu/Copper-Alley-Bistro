import { useState, useEffect } from 'react';

export function useBusinessHours() {
  const [isOpen, setIsOpen] = useState(true);
  const [nextOpenTime, setNextOpenTime] = useState('');

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      // Get current hour in Dublin
      const dublinHour = parseInt(new Intl.DateTimeFormat('en-GB', {
        hour: 'numeric',
        hour12: false,
        timeZone: 'Europe/Dublin'
      }).format(now));
      
      const day = new Intl.DateTimeFormat('en-GB', {
        weekday: 'long',
        timeZone: 'Europe/Dublin'
      }).format(now);

      // Dublin Opening Hours (Requested: 8am to 9pm):
      const openHour = 8;
      const closeHour = 22;

      // current time in hours (with decimal minutes for accuracy)
      const dublinMinutes = now.getMinutes() / 60;
      const currentTime = dublinHour + dublinMinutes;

      if (currentTime >= openHour && currentTime < closeHour) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
        setNextOpenTime('08:00 AM');
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return { isOpen, nextOpenTime };
}
