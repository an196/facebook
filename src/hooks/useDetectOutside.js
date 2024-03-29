import React, { useRef, useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useDetectOutside(ref) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				console.log('out');
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);
}

export default useDetectOutside;
