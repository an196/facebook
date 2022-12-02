import CommentInput from './CommentInput';
import UserComment from './UserComment';
import CommentReply from './CommentReply';
import { userComments } from '../../../data/dummy';

function CommentSection() {

	return (
		<div className='py-[5px] px-[16px]'>
			<div className='flex justify-end w-full h-[28px]'>
				<span className='font-semibold tracking-tight '>Bình luận liên quan nhất</span>
			</div>
			<CommentInput />
			{userComments.map((comment, idx) => (
				<div key={idx} >
					<UserComment comment={comment} />
					{comment?.reply && (
						// <ul className='pl-[16px]'>
						// 	{comment?.reply.map((comment1, idx) => (
						// 		<li className='flex flex-col relative' key={idx}>
						// 			<div className='flex flex-row relative'>
						// 				<div className='w-[26px] h-[22px] border-l-2 border-b-2 border-[#3a3b3c] mr-[6px] rounded-bl-[10px]'></div>
						// 				<UserComment comment={comment1} />
						// 				{idx > 0 && <div className='absolute w-[2px] bg-[#3a3b3c] h-full left-0 -top-[100%]'></div>}
						// 			</div>
						// 			{/* <ul className='pl-[48px]'>
						// 				{comment1 &&
						// 					comment1?.reply.map((comment2, idx2) => (
						// 						<li className='flex flex-row relative' key={idx2}>
						// 							{console.log(comment1)}
						// 							<div className='w-[26px] h-[22px] border-l-2 border-b-2 border-[#3a3b3c] mr-[6px] rounded-bl-[10px]'></div>
						// 							<UserComment comment={comment2} />
						// 							{idx2 > 0 && <div className='absolute w-[2px] bg-[#3a3b3c] h-full left-0 -top-[100%]'></div>}
						// 						</li>
						// 					))}
						// 			</ul> */}
						// 		</li>
						// 	))}
						// </ul>
						 <CommentReply comments={comment.reply}/>
					)}
				</div>
			))}
		</div>
	);
}

export default CommentSection;
