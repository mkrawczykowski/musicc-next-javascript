import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const initialState = {
        activeMegaMenu: undefined,
        mobileMenuActive: false
    };
    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={{ state, setState }}>
            {children}
        </Context.Provider>
    );
};
