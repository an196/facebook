import { createContext, useContext, useState, useRef, useEffect } from 'react';

//const
const VALID = 'valid';

const BOARD = {
	MENU: 'menu',
	MESSENGER: 'messenger',
	NOTIFICATION: 'notification',
	USER: 'user',
};

const initialState = {
	[BOARD.MENU]: false,
	[BOARD.MESSENGER]: false,
	[BOARD.NOTIFICATION]: false,
	[BOARD.USER]: false,
};

const Context = createContext();

export const BoardContext = ({ children }) => {
	const [stateBoard, setStateBoard] = useState(initialState);

	const [menuRef, setMenuRef] = useState();
	const [menuBoardRef, setMenuBoardRef] = useState();

	const [messengerRef, setMessengerRef] = useState();
	const [messengeBoardRef, setMessengeBoardRef] = useState();

	const [notificationRef, setNotificationRef] = useState();
	const [notificationBoardRef, setNotificationBoardRef] = useState();

	const [userRef, setUserrRef] = useState();
	const [userBoardRef, setUserBoardRef] = useState();

	function showBoard(clicked) {
		if (!clicked) return setStateBoard(initialState);

		if (stateBoard[clicked]) return setStateBoard(initialState);
		else return setStateBoard({ ...initialState, [clicked]: true });
	}

	function setElementRefs(name, btn, board) {
		if (name === BOARD.MENU) {
			setMenuBoardRef(board);
			setMenuRef(btn);
		}
		if (name === BOARD.MESSENGER) {
			setMessengerRef(btn);
			setMessengeBoardRef(board);
		}
		if (name === BOARD.NOTIFICATION) {
			setNotificationRef(btn);
			setNotificationBoardRef(board);
		}
		if (name === BOARD.USER) {
			setUserrRef(btn);
			setUserBoardRef(board);
		}
	}

	function getElement(event) {
		let _board = '';

		if (menuRef && menuRef.current.contains(event.target)) {
			return (_board = BOARD.MENU);
		}
		if (messengerRef && messengerRef.current.contains(event.target)) {
			return (_board = BOARD.MESSENGER);
		}
		if (notificationRef && notificationRef.current.contains(event.target)) {
			return (_board = BOARD.NOTIFICATION);
		}

		if (userRef && userRef.current.contains(event.target)) {
			return (_board = BOARD.USER);
		}

		if (
			menuBoardRef.current.contains(event.target) ||
			messengeBoardRef.current.contains(event.target) ||
			notificationBoardRef.current.contains(event.target) ||
			userBoardRef.current.contains(event.target)
		)
			return (_board = VALID);
	}

	/**
	 * Alert if clicked on outside of element
	 */
	function handleClick(event) {
		let _board = getElement(event);
		if (_board === VALID) return;
		new Promise((_) => showBoard(_board));
	}

	useEffect(() => {
		// Bind the event listener
		document.addEventListener('mousedown', handleClick);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClick);
		};
	}, [stateBoard.menu, stateBoard.messenger, stateBoard.notification, stateBoard.user, menuRef]);

	return (
		<Context.Provider
			value={{
				initialState,
				stateBoard,
				menuRef,
				messengerRef,
				setMenuRef,
				setMessengerRef,
				setMenuBoardRef,
				setMessengeBoardRef,
				setElementRefs,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useBoardContext = () => useContext(Context);
