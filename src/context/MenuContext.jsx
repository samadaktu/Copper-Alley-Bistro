import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { menuData as initialMenu } from '../data/menuData';

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch menu from Supabase
  useEffect(() => {
    async function fetchMenu() {
      if (!supabase) {
        console.warn("Supabase client not initialized. Falling back to local menu data.");
        setMenuItems(initialMenu);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('menu')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) throw error;


        if (data && data.length > 0) {
          setMenuItems(data);
        } else {
          // If empty, seed with initial data
          const seededMenu = initialMenu.map(item => ({
            ...item,
            price: parseFloat(item.price)
          }));
          const { error: seedError } = await supabase.from('menu').insert(seededMenu);
          if (seedError) console.error("Error seeding menu:", seedError);
          setMenuItems(seededMenu);
        }
      } catch (err) {
        console.error("Error fetching menu:", err.message);
        // Fallback to initial menu if Supabase fails
        setMenuItems(initialMenu);
      } finally {
        setLoading(false);
      }
    }

    fetchMenu();
  }, []);

  const addMenuItem = async (item) => {
    const newItem = {
      ...item,
      id: `custom_${Date.now()}`,
      price: parseFloat(item.price)
    };
    
    if (supabase) {
      const { error } = await supabase.from('menu').insert([newItem]);
      if (error) {
        console.error("Error adding menu item:", error);
        return;
      }
    }
    setMenuItems(prev => [...prev, newItem]);
  };

  const updateMenuItem = async (id, updatedItem) => {
    const formattedItem = { 
      ...updatedItem, 
      price: parseFloat(updatedItem.price) 
    };

    if (supabase) {
      const { error } = await supabase
        .from('menu')
        .update(formattedItem)
        .eq('id', id);

      if (error) {
        console.error("Error updating menu item:", error);
        return;
      }
    }

    setMenuItems(prev => prev.map(item => 
      item.id === id ? { ...item, ...formattedItem } : item
    ));
  };

  const deleteMenuItem = async (id) => {
    if (supabase) {
      const { error } = await supabase
        .from('menu')
        .delete()
        .eq('id', id);

      if (error) {
        console.error("Error deleting menu item:", error);
        return;
      }
    }

    setMenuItems(prev => prev.filter(item => item.id !== id));
  };


  return (
    <MenuContext.Provider value={{
      menuItems,
      loading,
      addMenuItem,
      updateMenuItem,
      deleteMenuItem
    }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}

