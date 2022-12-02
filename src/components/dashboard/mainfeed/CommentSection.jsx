import CommentInput from './CommentInput';
import { HorizontalLine} from '../../../components'

function CommentSection() {
	return (
		<div className='py-[5px] px-[16px]'>
      
			<div className='flex justify-end w-full h-[28px]'>
				<span  className='font-semibold tracking-tight '>Bình luận liên quan nhất</span>
			</div>

			<CommentInput />
		</div>
	);
}

export default CommentSection;
