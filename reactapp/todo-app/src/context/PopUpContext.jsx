import React, { createContext, useContext, useState } from 'react';

const PopUpContext = createContext();

export const PopUpProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <PopUpContext.Provider value={{ isOpen: isPopupOpen, openPopup, closePopup }}>
      {children}
    </PopUpContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopUpContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopUpProvider');
  }
  return context;
};