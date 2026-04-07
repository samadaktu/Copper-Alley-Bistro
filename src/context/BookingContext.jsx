import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch bookings from Supabase
  useEffect(() => {
    async function fetchBookings() {
      if (!supabase) {
        console.warn("Supabase client not initialized. Falling back to local/memory booking state.");
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setBookings(data || []);
      } catch (err) {
        console.error("Error fetching bookings:", err.message);
      } finally {
        setLoading(false);
      }
    }


    fetchBookings();

    // Subscribe to realtime updates
    const subscription = supabase
      .channel('public:bookings')
      .on('postgres_changes', { event: '*', table: 'bookings' }, fetchBookings)
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const addBooking = async (bookingData) => {
    // Map camcelCase to snake_case for the database
    const dbBooking = {
      full_name: bookingData.fullName,
      email: bookingData.email,
      phone: bookingData.phone,
      date: bookingData.date,
      time: bookingData.time,
      guests: bookingData.guests,
      requests: bookingData.requests,
      status: 'pending'
    };

    if (supabase) {
      const { data, error } = await supabase
        .from('bookings')
        .insert([dbBooking])
        .select()
        .single();

      if (error) {
        console.error("Error adding booking:", error);
        throw error;
      }
      
      setBookings(prev => [data, ...prev]);
      return data;
    } else {
      const localBooking = { ...dbBooking, id: `local_${Date.now()}`, created_at: new Date().toISOString() };
      setBookings(prev => [localBooking, ...prev]);
      return localBooking;
    }
  };

  const updateBookingStatus = async (id, status) => {
    if (supabase) {
      const { error } = await supabase
        .from('bookings')
        .update({ status })
        .eq('id', id);

      if (error) {
        console.error("Error updating booking status:", error);
        return;
      }
    }

    setBookings(prev => prev.map(booking => 
      booking.id === id ? { ...booking, status } : booking
    ));
  };

  const deleteBooking = async (id) => {
    if (supabase) {
      const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', id);

      if (error) {
        console.error("Error deleting booking:", error);
        return;
      }
    }

    setBookings(prev => prev.filter(booking => booking.id !== id));
  };


  return (
    <BookingContext.Provider value={{
      bookings,
      loading,
      addBooking,
      updateBookingStatus,
      deleteBooking
    }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBookings() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookings must be used within a BookingProvider');
  }
  return context;
}

