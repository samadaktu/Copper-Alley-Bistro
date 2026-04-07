import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch orders from Supabase
  useEffect(() => {
    async function fetchOrders() {
      if (!supabase) {
        console.warn("Supabase client not initialized. Falling back to local/memory order state.");
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setOrders(data || []);
      } catch (err) {
        console.error("Error fetching orders:", err.message);
      } finally {
        setLoading(false);
      }
    }


    fetchOrders();

    // Subscribe to realtime updates
    const subscription = supabase
      .channel('public:orders')
      .on('postgres_changes', { event: '*', table: 'orders' }, fetchOrders)
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const placeOrder = async (orderData) => {
    if (supabase) {
      const { data, error } = await supabase
        .from('orders')
        .insert([orderData])
        .select()
        .single();

      if (error) {
        console.error("Error placing order:", error);
        throw error;
      }
      
      setOrders(prev => [data, ...prev]);
      return data;
    } else {
      const localOrder = { ...orderData, id: `local_${Date.now()}`, status: 'pending', created_at: new Date().toISOString() };
      setOrders(prev => [localOrder, ...prev]);
      return localOrder;
    }
  };

  const updateOrderStatus = async (id, status) => {
    if (supabase) {
      const { error } = await supabase
        .from('orders')
        .update({ status })
        .eq('id', id);

      if (error) {
        console.error("Error updating order status:", error);
        return;
      }
    }

    setOrders(prev => prev.map(order => 
      order.id === id ? { ...order, status } : order
    ));
  };

  const deleteOrder = async (id) => {
    if (supabase) {
      const { error } = await supabase
        .from('orders')
        .delete()
        .eq('id', id);

      if (error) {
        console.error("Error deleting order:", error);
        return;
      }
    }

    setOrders(prev => prev.filter(order => order.id !== id));
  };


  return (
    <OrderContext.Provider value={{
      orders,
      loading,
      placeOrder,
      updateOrderStatus,
      deleteOrder
    }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
}

