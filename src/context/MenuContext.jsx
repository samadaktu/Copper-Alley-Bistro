import React, { createContext, useContext, useState, useEffect } from 'react';
import { menuData as initialMenu } from '../data/menuData';

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menuItems, setMenuItems] = useState(() => {
    const savedMenu = localStorage.getItem('bistro_menu');
    return savedMenu ? JSON.parse(savedMenu) : initialMenu;
  });

  useEffect(() => {
    localStorage.setItem('bistro_menu', JSON.stringify(menuItems));
  }, [menuItems]);

  const addMenuItem = (item) => {
    const newItem = {
      ...item,
      id: `custom_${Date.now()}`,
      price: parseFloat(item.price)
    };
    setMenuItems(prev => [...prev, newItem]);
  };

  const updateMenuItem = (id, updatedItem) => {
    setMenuItems(prev => prev.map(item => 
      item.id === id ? { ...item, ...updatedItem, price: parseFloat(updatedItem.price) } : item
    ));
  };

  const deleteMenuItem = (id) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <MenuContext.Provider value={{
      menuItems,
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
