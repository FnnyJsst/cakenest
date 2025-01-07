import React, { createContext, useState, useContext } from 'react';
import { fakeMenu2 } from '../fakeData/fakeMenu';
import apiAxios from '../../libs/axios';

// Créer un contexte pour le menu
const MenuContext = createContext();

// Créer un composant fournisseur pour le contexte du menu
export function MenuProvider({ children }) {
  const [menu, setMenu] = useState(fakeMenu2);
  const value = { menu, setMenu };

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
}

// Créer un hook personnalisé pour utiliser le contexte du menu
export function useMenu() {
  const context = useContext(MenuContext);
  return context;
}