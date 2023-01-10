import React from 'react';
import UserComment from './UserComment';

function CommentReply({ comments, child = false }) {
	return (
		<ul className={`${!child ? 'pl-[16px]' : 'pl-[48px]'} `}>
			{comments?.map((comment, idx) => (
				<li className='flex flex-col relative' key={idx}>
					<div className='flex flex-row relative'>
						<div className='w-[26px] h-[22px] border-l-2 border-b-2 border-[#3a3b3c] mr-[6px] rounded-bl-[10px]'></div>
						<UserComment comment={comment} />
						{idx > 0 && <div className='absolute w-[2px] bg-[#3a3b3c] h-full left-0 -top-[100%]'></div>}
					</div>
					{comment?.reply && <CommentReply comments={comment.reply} child={true} />}
					{comment?.reply && !child && (
						<div className='absolute w-[2px] bg-[#3a3b3c] h-full left-0 top-[16px]'> </div>
					)}
				</li>
			))}
		</ul>
	);
}

export default CommentReply;
