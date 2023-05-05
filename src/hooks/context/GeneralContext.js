import React, { createContext, useState } from 'react';

const GeneralContext = createContext();

const ProvideContext = ({ children }) => {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <GeneralContext.Provider
        value={{ menuOpen, setMenuOpen}}
    >
        {children}
    </GeneralContext.Provider>
  )
}

export { ProvideContext, GeneralContext }