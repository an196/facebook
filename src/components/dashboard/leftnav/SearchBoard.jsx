import React from 'react';
import avatar from '../../../assets/images/avatar3.jpg';
import { SearchInput } from '../topnav';
import { ILeftArrow, ICancel } from '../../../theme/icons';

const items = [{}];

const RowItem = () => {
	return (
		<div className='h-[52px] p-[8px] w-[300px] hover:bg-[#303031] rounded-xl'>
			<div className='flex flex-row w-full items-center space-x-3 text-[#e1e3e8]'>
				<span className='w-[36px] h-[36px] rounded-full overflow-hidden '>
					<img src={avatar} width={36} height={36} />
				</span>

				<span className='flex flex-col h-[36px] grow justify-center'>
					<span className='text-[14px] font-semibold'>Kim Nhựt Trường</span>
					<span className='text-[12px] text-[#b0b3b8]'>Bạn bè</span>
				</span>
				<span className='w-[32px] h-[32px] p-[10px] rounded-full hover:bg-[#444445]'>
					<span className='w-[12px] h-[12px] text-[#e1e3e8]'>
						<ICancel />
					</span>
				</span>
			</div>
		</div>
	);
};

//bg-[#242526]
function SearchBoard({setShowSearchBoard}) {
	return (
		<div className='w-[320px] flex-initial top-0 bg-[#242526] absolute  text-black -ml-[16px] z-10 px-[12px]'>
			<div className='w-[36px] h-[36px] rounded-full flex-none p-[8px] mt-[4px] hover:bg-[#444445] text-[#e1e3e8] animate-move-left cursor-pointer'
				onClick={()=> setShowSearchBoard(false)}
			>
				<ILeftArrow />
			</div>
			
			<div className='mt-[16px]'>
				<span className='flex flex-row justify-between items-center  text-[#d5d7dc] mb-[12px]'>
					<span className='font-semibold text-[18px]'>Tìm kiếm gần đây</span>
					<div className=' p-[6px] rounded-sm  hover:bg-[#444445] text-center h-full leading-none cursor-pointer'>
						<span className='font-normal p-[3px] text-[16px]  leading-none  text-[#428feb] '>Chỉnh sửa</span>
					</div>
				</span>
				<div className='pb-[8px]'>
					<RowItem />
				</div>
			</div>
		</div>
	);
}

export default SearchBoard;
