import React, { createContext, useState } from 'react';

export const Context = createContext(null);

const initialState = {
    activeMegaMenu: [0],
    mobileMenuActive: false
};

// const ContextProvider: FC<ReactNode> = ({ children }) => {
//     const [state, setState] = useState(initialState);
// }

const Store = ({ children }) => {
    const [state, setState] = useState(initialState);
    return (
        <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
        // { children }
    )
}

export default Store;

// const initialState = {
//     activeMegaMenu: [1, 2],
//     mobileMenuActive: false
// };

// export const Context = createContext({
//     activeMegaMenu: [1, 2],
//     mobileMenuActive: false
// });

// const Store = ({ children }) => {
//     const [state, setState] = useState(initialState);
//     return (
//         <Context.Provider value={[state, setState]}>{children}</Context.Provider>
//         // { children }
//     )
// }

// export default Store;