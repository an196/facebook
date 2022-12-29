import { useState } from 'react';
import avatar from '../../../assets/images/avatar3.jpg';
import CommentInput from './CommentInput';
import DynamicSticker from './DynamicSticker';

function FriendComment({ comment, onReply, relying }) {

	return (
		<>
			<div className='flex flex-row mt-[8px] group relative w-full'>
				<div className='w-[32px] h-[32px] rounded-full flex-none overflow-hidden mr-[6px]'>
					<img src={comment.img || avatar} alt='avatar' />
				</div>
				<div className='flex flex-col w-full'>
					<div className='flex flex-row items-center'>
						<span className={` text-[#e4e6eb]  flex flex-col rounded-xl px-[12px] py-[8px] mr-[6px]  
							${relying ? 'bg-highlightText' : ' bg-[#3a3b3c]'}`}>
							<span className='text-[13px]  font-semibold cursor-pointer'>{comment.name}</span>
							<p className={`text-[15px] font-normal`}>{comment.content}</p>
						</span>
						<div
							className='w-[40px] h-[40px] p-[17px] flex items-center justify-center hover:bg-[#3a3b3c] cursor-pointer hover:opacity-60 
                        rounded-full'
						>
							<i className='bg-img-4 img-icon-threedots flex-none filter-icon group-hover:opacity-100 opacity-0'></i>
						</div>
					</div>
					{
						comment.sticker.dynamic ?
							<DynamicSticker sticker={comment.sticker} />
							: <img src={comment.sticker.img} width={80} height={80} className='object-fill' />
					}
					<div className='w-full space-x-[16px] ml-[8px]'>
						<span className='text-[12px] font-bold hover:underline cursor-pointer'>Thích</span>
						<span className='text-[12px] font-bold hover:underline cursor-pointer' onClick={onReply}>Phản hồi</span>
						<span className='text-[12px] font-normal hover:underline cursor-pointer'>
							{comment.timeComment}
						</span>
					</div>
				</div>
			</div>

		</>
	);
}

export default FriendComment;
