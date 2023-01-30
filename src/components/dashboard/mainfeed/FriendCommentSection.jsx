import React, { useEffect, useState } from 'react';
import CommentInput from './CommentInput';
// import { friendComments } from '../../../data/dummy';
import FriendComment from './FriendComment';
import FriendReply from './FriendReply';
import { useDispatch, useSelector } from 'react-redux';
import { SingleTypingContext } from '../../../contexts/SingleTypingContext';
import { getFriendComments, selectFriendComments } from '../../../features/Friend/commentSlice';

const DisplayComment = ({ comment }) => {
	const [_comment, setComment] = useState(comment);

	return (
		<li>
			{_comment && (
				<>
					<SingleTypingContext>
						<FriendComment comment={_comment} />
						{_comment?.reply && <FriendReply comments={_comment.reply} />}
					</SingleTypingContext>
				</>
			)}
		</li>
	);
};

function FriendCommentSection() {
	const dispach = useDispatch();

	const friendComments = useSelector(selectFriendComments);

	useEffect(() => {
		dispach(getFriendComments());
	}, [dispach]);

	return (
		<div className='py-[5px] px-[16px]'>
			<div className='flex justify-between items-center w-full h-[28px] cursor-pointer mb-[5px] '>
				<span className='text-[15px] font-semibold text-secondaryText hover:underline'>
					Xem 9 bình luận trước
				</span>

				<div className='relative flex items-center space-x-1'>
					<span className='font-semibold tracking-tight '>Bình luận liên quan nhất</span>
					<i className='bg-img-5 img-icon-downarrow filter-icon w-[16px] h-[16px] mt-1'> </i>
				</div>
			</div>
			<ul>
				{friendComments.map((comment, idx) => (
					<DisplayComment key={idx} comment={comment} />
				))}
			</ul>
			<div className='mt-3 mb-2'>
				<CommentInput />
			</div>
		</div>
	);
}

export default FriendCommentSection;
