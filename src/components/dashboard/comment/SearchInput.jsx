import React from 'react';

function SearchInput() {
	return (
		<div>
			<div className='flex flex-row items-center bg-[#3a3b3c] rounded-full'>
				<span className='h-[36px] pl-[10px] flex justify-center items-center'>
					<i className='img-icon-search bg-img-5 filter-icon'></i>
				</span>
				<div action='#' className='bg-transparent'>
					<input
						className='text-[15px] font-normal text-[#e4e6eb] bg-transparent pl-[10px] outline-none'
						type='text'
						placeholder='Tìm kiếm'
					/>
				</div>
			</div>
		</div>
	);
}

export default SearchInput;
