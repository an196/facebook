import React, { useState } from 'react';
import CommentInput from './CommentInput';
import { friendComments } from '../../../data/dummy';
import FriendComment from './FriendComment';
import FriendReply from './FriendReply';
import { useEffect } from 'react';

const user = {
	_idUser: '01234567891',
	name: 'Ng.Trần Lê Dương',
	img: 'https://firebasestorage.googleapis.com/v0/b/facebook-a9c10.appspot.com/o/michael-dam-mEZ3PoFGs_k-unsplash.jpg?alt=media&token=1f6e25a3-9158-4a36-bef9-2a43c48a12a0',
};

const DisplayComment = ({ comment }) => {
	const [replying, setReplying] = useState(false);
	const [_comment, setComment] = useState(comment);

	function hdlReply() {
		setReplying(true);
	}

	function hdlEndReply() {
		setReplying(false);
	}

	function hdlContent(e) {
		const content = e.childNodes[1].textContent;
		console.log('content', content);
		console.log(_comment, '_comment');

		const newReplyId = (Math.max(..._comment.reply.map((rep) => rep._id)) + 1).toString();
		const newComment = {
			..._comment,
			reply: [..._comment.reply, { ...user, content, _id: newReplyId, timeComment: '9 giờ' }],
		};
		console.log('newComment', newComment);
		setComment(newComment);
	}

	return (
		<li>
			{_comment && (
				<>
					<FriendComment comment={_comment} onReply={hdlReply} relying={replying} />
					{_comment?.reply && <FriendReply comments={_comment.reply} />}
					<div className='pl-[48px] mt-1'>
						{replying && (
							<CommentInput
								username={_comment.name}
								idComment={_comment._id}
								endReply={hdlEndReply}
								submit={hdlContent}
							/>
						)}
					</div>
				</>
			)}
		</li>
	);
};

function FriendCommentSection() {
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
			<div className='mt-3'>
				<CommentInput />
			</div>
		</div>
	);
}

export default FriendCommentSection;
