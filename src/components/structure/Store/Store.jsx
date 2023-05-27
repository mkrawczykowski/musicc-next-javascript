import React, { createContext, useState } from 'react';

export const Context = createContext();

const initialState = {
    activeMegaMenu: [0],
    mobileMenuActive: false
};

const Store = ({ children }) => {
    const [state, setState] = useState(initialState);
    console.log(' Store state')
    console.log(state)
    return (
        <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
    )
}

export default Store;
