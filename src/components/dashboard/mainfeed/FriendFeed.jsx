import React from 'react';
import { FocusingTypingContext } from '../../../contexts/FocusingTypingContext';
import FriendCommentSection from './FriendCommentSection';
import HeaderFeed from './HeaderFeed';
import ReactionSection from './ReactionSection';

const Image = ({ image, idx }) => {
	return (
		<>
			<div className={`flex relative cursor-pointer ${idx % 2 === 1 ? 'mt-[20px]' : ' mb-[20px]'}`}>
				<img src={image} alt='' className='object-cover rounded-xl' />
				{idx === 3 && (
					<div className='w-full h-full bg-[#385898]/10 absolute top-0 left-0 !z-10 flex items-center justify-center'>
						<span className='text-[28px] font-bold text-primaryText'>+19</span>
					</div>
				)}
			</div>
		</>
	);
};

function FriendFeed({ news }) {
	return (
		<div className='w-full bg-[#242526] mt-[23px] rounded-xl flex flex-col h-min overscroll-auto'>
			<HeaderFeed news={news} />
			<div className='p-[16px] pt-0'>
				<div className='m-[5px] mt-0 text-[#e1e3e4] font-normal'>{news?.message}</div>
			</div>
			<div aria-label='images w-full'>
				<div className='w-full h-[468px] flex flex-row p-4 space-x-2.5'>
					{news.images.map((image, idx) => (
						<Image image={image} key={idx} idx={idx} />
					))}
				</div>
			</div>
			<ReactionSection news={news} />
			<FocusingTypingContext>
				<FriendCommentSection />
			</FocusingTypingContext>
		</div>
	);
}

export default FriendFeed;
