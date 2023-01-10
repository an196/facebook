import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const FocusingTypingContext = ({ children }) => {
	const [focusingFor, setFocusingFor] = useState(); // current focsing in global scope feed

	function changeFocus(comment) {
		setFocusingFor(comment);
	}

	return (
		<Context.Provider
			value={{
				focusingFor,
				changeFocus,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useFocusingTypingContext = () => useContext(Context);
