import React, { useState } from 'react';
import { useEffect } from 'react';
import { useFocusingTypingContext } from '../../../contexts/FocusingTypingContext';
import { useSingleTyping } from '../../../contexts/SingleTypingContext';
import CommentInput from './CommentInput';
import FriendComment from './FriendComment';

const Reply = ({ comment, onReply, replying, child }) => {
	return (
		<li className='flex flex-col relative'>
			<div className='flex flex-row relative'>
				<div className='w-[26px] h-[22px] mr-[6px] rounded-bl-[10px] flex-none'></div>
				<FriendComment comment={comment} onReply={onReply} replying={replying} child={child} />
			</div>
			{comment?.reply && <FriendReply comments={comment.reply} child={true} />}
		</li>
	);
};

function FriendReply({ comments, child = false }) {
	const [_replying, setReplying] = useState(false); //just handle for chilren from 2
	const [_comments, setComments] = useState(comments);
	const [_replyFor, setReplyFor] = useState(null);

	const { isTyping, changeTyping, replyFor } = useSingleTyping(); //just handle for first comment and first child
	const { changeFocus } = useFocusingTypingContext();

	function hdlReply(comment) {
		setReplyFor(comment);
		changeFocus(comment);
		setReplying(true);
	}

	function hdlEndReply() {
		setReplying(false);
	}
	function hdlContent(e) {
		console.log('day');
	}

	return (
		<ul className={`${!child ? 'pl-[16px]' : 'pl-[48px]'} `}>
			{comments?.map((comment, idx) => (
				<Reply key={idx} comment={comment} onReply={hdlReply} replying={_replying} child={child} />
			))}
			{/* for first reply or comment */}
			{isTyping && !child && (
				<div className='flex flex-row relative w-full'>
					<div className='w-[26px] h-[22px] mr-[6px] rounded-bl-[10px] flex-none'></div>
					<CommentInput
						username={replyFor?.name}
						idComment={replyFor?._id}
						endReply={hdlEndReply}
						submit={hdlContent}
					/>
				</div>
			)}
			{/* for child from 2 */}
			{child && _replying && (
				<div className='flex flex-row relative w-full mt-1'>
					<div className='w-[26px] h-[22px] mr-[6px] rounded-bl-[10px] flex-none'></div>
					<CommentInput
						username={_replyFor?.name}
						idComment={_replyFor?._id}
						endReply={hdlEndReply}
						submit={hdlContent}
					/>
				</div>
			)}
		</ul>
	);
}

export default FriendReply;
