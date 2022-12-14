import { createContext, useContext, useState} from "react";

const Context = createContext();

export const ChatContext = ({ children }) => {
   
   
    return (
        <Context.Provider value={{
          
        }}>
            {children}
        </Context.Provider>
    )
}

export const useChatContext = () => useContext(Context);