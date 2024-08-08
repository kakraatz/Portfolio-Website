'use client';

import { createContext, useState, useContext } from 'react';

const ActiveLinkContext = createContext(undefined);

export const useActiveLink = () => useContext(ActiveLinkContext);

export const ActiveLinkProvider = ({ children }) => {
    const [activeLink, setActiveLink] = useState('/');

    return (
        <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
            {children}
        </ActiveLinkContext.Provider>
    );
};