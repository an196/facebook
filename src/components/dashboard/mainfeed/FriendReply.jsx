import React from 'react'
import FriendComment from './FriendComment';

function FriendReply({ comments, child = false }) {
    return (
		<ul className={`${!child ? 'pl-[16px]' : 'pl-[48px]'} `}>
			{comments?.map((comment, idx) => (
				<li className='flex flex-col relative' key={idx}>
					<div className='flex flex-row relative'>
						<div className='w-[26px] h-[22px]   mr-[6px] rounded-bl-[10px]'></div>
						<FriendComment comment={comment} />
					</div>
					{comment?.reply && <FriendReply comments={comment.reply} child={true} />}
				</li>
			))}
		</ul>
	);
}

export default FriendReply