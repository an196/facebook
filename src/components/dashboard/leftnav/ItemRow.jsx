import React from 'react';

function ItemRow({ item, subtitle, headerColor }) {
	return (
		<li
			className={`flex flex-row space-x-3 pl-[6px] py-2 hover:bg-[#7c7c7c5a] rounded-xl transition 
			ease-in-out cursor-pointer w-full ${!subtitle ? 'items-center': 'items-start'} `}
		>	
			
			<span className='w-[36px] h-[36px] flex-none '>
				{item.type === 'icon' ? (
					<i data-visualcompletion='css-img' className={`left-nav-icon ${item.style} `}></i>
				) : (
					<img className='rounded-lg' src={item.src} width={36} height={36} />
				)}
			</span>
			<span className='flex flex-col'>
				<span className='grow font-medium break-words'>{item.title}</span>
				{subtitle && <span className='grow font-normal text-[13px] '>{item.subtitle}</span>}
			</span>
		</li>
	);
}

export default ItemRow;
