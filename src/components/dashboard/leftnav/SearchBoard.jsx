import React from 'react';
import { ILeftArrow, ICancel, IClock } from '../../../theme/icons';
import { searchHistory, suggestPage } from '../../../data/dummy';
import typeDefined from '../../../constant/type';

const Section = ({ item, title, editable, enableDelete }) => {
	return (
		<>
			<span className='flex flex-row justify-between items-center  text-[#d5d7dc] mb-[12px]'>
				<span className='font-semibold text-[18px]'>{title}</span>
				{editable && (
					<div className=' p-[6px] rounded-sm  hover:bg-[#444445] text-center h-full leading-none cursor-pointer'>
						<span className='font-normal p-[3px] text-[16px]  leading-none  text-[#428feb] '>Chỉnh sửa</span>
					</div>
				)}
			</span>
			<div className='pb-[8px]'>
				{item.map((history, idx) => (
					<RowItem history={history} key={idx} enableDelete={enableDelete} />
				))}
			</div>
		</>
	);
};

const RowItem = ({ history, enableDelete }) => {
	return (
		<div className=' p-[8px] w-[300px] hover:bg-[#303031] rounded-xl'>
			<div className='flex flex-row w-full items-center space-x-3 text-[#e1e3e8] cursor-pointer'>
				<div className={`w-[36px]  rounded-full overflow-hidden bg-[#18191a]`}>
					{history.type && history.type === typeDefined.lastSearch ? (
						<div className='w-[20px] h-[20px] m-[8px]'>
							<IClock />
						</div>
					) : (
						<img src={history.img} width={36} height={36} />
					)}
				</div>
				<span className='flex flex-col grow justify-center'>
					<span className='text-[14px] font-semibold'>{history.name}</span>
					{history.relation && <span className='text-[12px] text-[#b0b3b8]'>{history.relation}</span>}
				</span>
				<span
					className={`w-[32px] h-[32px] p-[10px] rounded-full hover:bg-[#444445] ${
						enableDelete ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<span className='w-[12px] h-[12px] text-[#e1e3e8]'>
						<ICancel />
					</span>
				</span>
			</div>
		</div>
	);
};

//bg-[#242526]
function SearchBoard({ setShowSearchBoard }) {
	return (
		<div className='w-[320px] flex-initial top-0 bg-[#242526] absolute  text-black -ml-[16px] z-10 px-[12px]'>
			<div
				className='w-[36px] h-[36px] rounded-full flex-none p-[8px] mt-[4px] hover:bg-[#444445] text-[#e1e3e8] animate-move-left cursor-pointer'
				onClick={() => setShowSearchBoard(false)}
			>
				<ILeftArrow />
			</div>
			<div className='mt-[10px]'></div>
			<Section item={searchHistory} editable={true} title={'Tìm kiếm gần đây'} enableDelete={true} />
			<Section item={suggestPage} editable={false} title={'Gợi ý cho bạn'} enableDelete={false} />
		</div>
	);
}

export default SearchBoard;
