import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const ChatContext = ({ children }) => {
	const [showWindow, setShowWindow] = useState(false);

	return (
		<Context.Provider
			value={{
				showWindow,
				setShowWindow,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useChatContext = () => useContext(Context);
