import avatar from '../../../assets/images/avatar3.jpg';
import { useState } from 'react';
import { PostFeed} from '../../dashboard';

const actions = [
	{ name: 'Video trực tiếp', icon: 'bg-img-1 action-feed-icon-1' },
	{ name: 'Ảnh/Video', icon: 'bg-img-1 action-feed-icon-2' },
	{ name: 'Feeling/activity', icon: 'bg-img-1 action-feed-icon-3' },
];

const Action = ({ action }) => {
	return (
		<span className='w-full flex flex-row justify-center items-center cursor-pointer h-[40px] rounded-md hover:bg-[#494c4e]'>
			<div style={{ width: '24px', height: '24px', marginRight: '8px' }}>
				<i data-visualcompletion='css-img' className={`${action.icon}`}></i>
			</div>
			<span className='text-[15px] font-semibold'>{action.name}</span>
		</span>
	);
};

function ActionsFeed() {
	const [showPostFeed , setShowPostFeed] = useState(false);

	return (
		<>
		<div className='w-full bg-[#242526] mt-[23px] rounded-xl h-[123px] pb-[10px] pl-[16px] pr-[16px] pt-[12px]'>
			<div className='flex flex-row space-x-4'>
				<img src={avatar} className='w-[40px] h-[40px] rounded-full mr-[8px]' />
				<div className=' bg-[#3a3b3c] text-[#a5b3b8] h-[40px] w-full hover:bg-white/20 group rounded-full flex 
					items-center p-[8px] cursor-pointer '>
					<form className='h-[23px] bg-inherit group-hover:bg-transparent rounded-full w-full m-[10px] cursor-pointer'>
						<input
							className='bg-inherit w-full  group-hover:bg-transparent outline-none cursor-pointer'
							placeholder='Ân ơi, bạn đang nghĩ gì thế?'
							onFocus={()=> setShowPostFeed(true)}
						/>
					</form>
				</div>
			</div>
			<div style={{ height: '1px', backgroundColor: '#393a3b', marginTop: '12px' }}></div>
			<div className='flex flex-row p-[8px]'>
				{actions.map((action, index) => (
					<Action key={index} action={action} />
				))}
			</div>
		</div>
		{
			showPostFeed && <PostFeed setShowPostFeed={setShowPostFeed}/>
		}
		</>
	);
}

export default ActionsFeed;
