import { createContext, useContext, useState, useRef } from "react";

const Context = createContext();

export const BoardContext = ({ children }) => {
    const [currentBoard, setCurrentBoard] = useState('');
   
    return (
        <Context.Provider value={{
            currentBoard,
            setCurrentBoard,
        }}>
            {children}
        </Context.Provider>
    )
}

export const useBoardContext = () => useContext(Context);