function Tooltip({ lable, position = 'bottom', children }) {
	return (
		<div className='tooltip w-max flex h-full'>
			{children}
			<span
				className={`tooltiptext bg-white/90 text-black text-[13px] flex px-2 py-1 rounded-md w-max ease-in-out 
			 	${position === 'bottom' && 'top-[100%] left-[50%] -translate-x-[50%]'}
			 	${position === 'top' && '-top-[100%] left-[50%] -translate-x-[50%]'}
			 	${position === 'left' && 'top-[50%] right-[100%] -translate-y-[50%]'}
			 	${position === 'right' && 'top-[50%] left-[100%] -translate-y-[50%]'}
			`}
			>
				{lable}
			</span>
		</div>
	);
}

export default Tooltip;
