function Tooltip({ lable, position = 'bottom'}) {
	return (
		<div className={`absolute  w-max flex 
			${position === 'bottom' && 'top-[100%] left-[50%] -translate-x-[50%]'}
			${position === 'top' && '-top-[100%] left-[50%] -translate-x-[50%]'}
			${position === 'left' && 'top-[50%] right-[100%] -translate-y-[50%]'}
			${position === 'right' && 'top-[50%] left-[100%] -translate-y-[50%]'}
		`}>
			<span
				className='group-hover:opacity-100  opacity-0 flex w-max text-black text-[13px] bg-white/90 
                py-1 px-2 rounded-md transition-all duration-300 ease-in-out'
			>
				{lable}
			</span>
		</div>
	);
}

export default Tooltip;
