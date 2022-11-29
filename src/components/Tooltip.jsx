function Tooltip({ message, position, distance, children  }) {
	const getPositon = (position) => {
		switch (position) {
			case 'top':
				return '';
			case 'bottom':
				return `-bottom-[${distance}px]`;
			case 'left':
				return '';
			case 'right':
				return '';
			default:
				return 0;
		}
	};

	return (
		<div className='relative flex flex-col items-center group h-full ' >
			{children}
			<div className={`absolute flex flex-col items-center hidden mb-6 group-hover:flex ${getPositon(position)}`}>
				<span
					className='relative z-10 p-2 text-xs leading-none text-[#3a3b3c] whitespace-no-wrap font-normal bg-[#e1e3e8] shadow-lg 
					rounded-md'
				>
					{message}
				</span>
				{/* <div className='w-3 h-3 -mt-2 rotate-45  bg-[#e1e3e8] '></div> */}
			</div>
		</div>
	);
}

export default Tooltip;
