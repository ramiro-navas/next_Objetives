import { createContext } from 'react';

const Context = createContext({});

export const ContextProvider = ({children}: any)=>{

    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}

export default Context;