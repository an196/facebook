import { useEffect } from "react";
import { useBoardContext } from "../contexts/BoardContext";

const useBoardHidden = (ref) => {
    const { setCurrentBoard } = useBoardContext();

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
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