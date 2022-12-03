import React, { useRef, useState } from 'react';

import CommentInput from './CommentInput';
import UserComment from './UserComment';
import CommentReply from './CommentReply';
import FiltCommentBoard from './FiltCommentBoard';

import { userComments } from '../../../data/dummy';

const CommentViewMore = ({ scrollTo }) => {
	return (
		<div className='pb-[8px]'>
			<span className='h-[32px] w-full'>
				<div className='text-[15px] font-medium hover:underline cursor-pointer'>Xem thêm bình luận</div>
			</span>
			<div className='text-[15px] font-medium hover:underline cursor-pointer' onClick={() => scrollTo('top')}>
				Viết bình luận...
			</div>
		</div>
	);
};

const CommentSection = React.forwardRef(({ props, ref }) => {
	const [showFilterComment , setShowFilterComment] = useState(false);

	return (
		<div className='py-[5px] px-[16px]' ref={ref}>
			<div className='flex justify-end items-center w-full h-[28px] cursor-pointer mb-[5px] '>
				<div className='relative flex items-center space-x-1'>
					<span className='font-semibold tracking-tight '>Bình luận liên quan nhất</span>
					<i className='bg-img-5 img-icon-downarrow filter-icon w-[16px] h-[16px] mt-1' 
						onClick={() => setShowFilterComment(!showFilterComment)}
					>
					</i>
					{showFilterComment && <FiltCommentBoard show={setShowFilterComment}/>}
				</div>
			</div>
			<CommentInput />
			{userComments.map((comment, idx) => (
				<div key={idx}>
					<UserComment comment={comment} />
					{comment?.reply && <CommentReply comments={comment.reply} />}
				</div>
			))}
			<CommentViewMore />
		</div>
	);
});

export default CommentSection;
