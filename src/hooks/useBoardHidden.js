import { useEffect } from "react";
import { useBoardContext } from "../contexts/BoardContext";

const useBoardHidden = (ref, board) => {
    const { currentBoard,setCurrentBoard } = useBoardContext();

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if(board === currentBoard)
                    return
                setCurrentBoard('');
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref])

    return
}

export default useBoardHidden