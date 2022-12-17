import React, { useState } from 'react'
import CommentInput from './CommentInput'
import { friendComments } from '../../../data/dummy'
import FriendComment from './FriendComment'
import FriendReply from './FriendReply'
function FriendCommentSection() {
    return (
        <div className='py-[5px] px-[16px]'>
            <div className='flex justify-between items-center w-full h-[28px] cursor-pointer mb-[5px] '>

                <span className='text-[15px] font-semibold text-secondaryText hover:underline'>Xem 9 bình luận trước</span>

                <div className='relative flex items-center space-x-1'>
                    <span className='font-semibold tracking-tight '>Bình luận liên quan nhất</span>
                    <i className='bg-img-5 img-icon-downarrow filter-icon w-[16px] h-[16px] mt-1'
                    > </i>
                </div>
            </div>
            <CommentInput />
            {friendComments.map((comment, idx) => (
				<div key={idx}>
					<FriendComment comment={comment} />
					{comment?.reply && <FriendReply comments={comment.reply} />}
				</div>
			))}
        
        </div>
    )
}

export default FriendCommentSection