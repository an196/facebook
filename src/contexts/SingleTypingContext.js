import { createContext, useContext, useState } from 'react';
import { useFocusingTypingContext } from './FocusingTypingContext';

const Context = createContext();

export const SingleTypingContext = ({ children }) => {
	const { changeFocus } = useFocusingTypingContext();

	const [isTyping, setTyping] = useState(false);
	const [replyFor, setReplyFor] = useState(); 	// reply for comment in current

	function changeTyping(child, comment) {
		if (child) return;

		if (!isTyping) setTyping(true);
		changeFocus(comment);
		setReplyFor(comment);
	}

	function ChangeReplyFor(comment) {
		setReplyFor(comment);
	}

	return (
		<Context.Provider
			value={{
				isTyping,
				changeTyping,
				replyFor,
				ChangeReplyFor,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useSingleTyping = () => useContext(Context);
