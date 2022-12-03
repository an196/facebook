import React from 'react';

function ItemRow({item}) {
	return (
		<li className='flex flex-row space-x-3 items-center pl-[6px] h-[52px] hover:bg-[#7c7c7c5a] rounded-xl transition 
			ease-in-out cursor-pointer w-full '>
			<span className='w-[36px] h-[36px] flex-none'>
				{item.type === 'icon' ? (
					<i data-visualcompletion='css-img' className={`left-nav-icon ${item.style} `}></i>
				) : (
					<img className='rounded-lg' src={item.src} width={36} height={36} />
				)}
			</span>
			<span className=' grow font-medium break-words'>{item.title}</span>
		</li>
	);
}

export default ItemRow;
