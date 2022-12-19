import React from 'react';
import storyImage from '../../../assets/images/story.png';

function Reels() {
	return (
		<div className='relative w-[112.5px] h-[200px] float-left flex-none cursor-pointer group'>
			<div className='relative rounded-xl overflow-hidden '>
				<img
					className='group-hover:scale-105 transition-all duration-500 ease-linear w-[112.5px] h-[200px]'
					src={storyImage}
					width={112.5}
					height={200}
				/>
			</div>
			<div className='absolute bottom-0 w-full h-auto p-[12px] '>
				<div className='flex flex-row items-center space-x-2'>
					<i className='icon-right-triangle filter-icon-2'></i>
					<div className='w-full text-[14px] leading-[16px] font-semibold tracking-tight text-[#fff]  break-normal'>
						1,2 triệu
					</div>
				</div>
			</div>
			<div className='absolute w-full h-full group-hover:bg-black/10 top-0 left-0'></div>
		</div>
	);
}

export default Reels;
