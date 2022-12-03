import React from 'react';
import { ITriangle } from '../../../theme/icons';

const items = [
	{ title: 'Bình luận liên quan nhất', subtitle: 'Hiển thị bình luận có nhiều lượt tương tác nhất trước.' },
	{ title: 'Gần đây nhất', subtitle: 'Hiển thị bình luận từ mới nhất đến cũ nhất.' },
	{
		title: 'Tất cả bình luận',
		subtitle: 'Hiển thị tất cả bình luận theo thứ tự thời gian, kể cả bình luận có khả năng là spam.',
	},
];

const FilterItem = ({ item, show }) => {
	return (
		<div className=' px-[8px] flex flex-col py-[12px] mx-[8px] text-[#e4e6eb] relative group'
            onClick={()=>show(false)}
        >
			<span className='text-[15px] font-medium leading-[20px]'>{item.title}</span>
			<span className='text-[12px] font-normal leading-[16px] text-[#b0b3b8]'>{item.subtitle}</span>
            <div className='hover:bg-[#e4e6eb]/10 w-full h-full absolute top-0 left-0 p-2 rounded-lg'></div>
		</div>
	);
};

function FiltCommentBoard({show}) {
	return (
		<>
			<div className='absolute top-[36px] right-[50%] w-[344px] h-auto flex flex-col bg-[#242526] shadow-lg py-[8px] rounded-lg overflow-hidden shadow-black/50 z-40'>
				{items.map((item, idx) => (
					<FilterItem key={idx} item={item} show={show} />
				))}
			</div>
			<div className='w-[21px] h-[12px] rotate-180 absolute top-[28px] right-[50%] text-[#242526] z-40'>
				<ITriangle />
			</div>
		</>
	);
}

export default FiltCommentBoard;
