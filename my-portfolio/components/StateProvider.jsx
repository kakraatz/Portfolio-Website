'use client';

import { createContext, useContext, useState } from 'react';

const StateContext = createContext(undefined);

export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ children }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <StateContext.Provider value={{ loaded, setLoaded }}>
            {children}
        </StateContext.Provider>
    );
};
