import React, { createContext } from 'react';
import info from '../../data/data.json'


export const Context = createContext();

export const ContextProvider = ({children}) => {

    const initialState = {
        users: info
    }

        return (
            <ContextProvider 
                value={initialState}>
                    {children}
            </ContextProvider>
        )
}

