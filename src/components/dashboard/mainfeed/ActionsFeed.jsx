import avatar from '../../../assets/images/avatar3.jpg';
import { useState } from 'react';
import { PostFeed } from '../../dashboard';

const actions = [
	{ name: 'Video trực tiếp', icon: 'https://firebasestorage.googleapis.com/v0/b/facebook-a9c10.appspot.com/o/red-camera.png?alt=media&token=dbe7186f-df17-4177-8789-ae7a3b90015c' },
	{ name: 'Ảnh/Video', icon: 'https://firebasestorage.googleapis.com/v0/b/facebook-a9c10.appspot.com/o/green-image.png?alt=media&token=9e229931-dc23-44c9-89fb-6d4626fb998c' },
	{ name: 'Feeling/activity', icon: 'https://firebasestorage.googleapis.com/v0/b/facebook-a9c10.appspot.com/o/yellow-face.png?alt=media&token=08b36d5e-5bff-44b3-bcc6-6d5060c7c6b2' },
];

const Action = ({ action }) => {
	return (
		<span className='w-full flex flex-row justify-center items-center cursor-pointer h-[40px] rounded-md hover:bg-[#494c4e]'>
			<div style={{ width: '24px', height: '24px', marginRight: '8px' }}>
				<img data-visualcompletion='css-img' src={action.icon}></img>
			</div>
			<span className='text-[15px] font-semibold'>{action.name}</span>
		</span>
	);
};

function ActionsFeed() {
	const [showPostFeed, setShowPostFeed] = useState(false);

	return (
		<>
			<div className='w-full bg-[#242526] mt-[23px] rounded-xl h-[123px] pb-[10px] pl-[16px] pr-[16px] pt-[12px]'>
				<div className='flex flex-row space-x-4'>
					<img src={avatar} className='w-[40px] h-[40px] rounded-full mr-[8px]' />
					<div
						className=' bg-[#3a3b3c] text-[#a5b3b8] h-[40px] w-full hover:bg-white/20 group rounded-full flex 
					items-center p-[8px] cursor-pointer '
					>
						<form className='h-[23px] bg-inherit group-hover:bg-transparent rounded-full w-full m-[10px] cursor-pointer'>
							<input
								className='bg-inherit w-full  group-hover:bg-transparent outline-none cursor-pointer'
								placeholder='Ân ơi, bạn đang nghĩ gì thế?'
								onFocus={() => setShowPostFeed(true)}
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
			{showPostFeed && <PostFeed setShowPostFeed={setShowPostFeed} />}
		</>
	);
}

export default ActionsFeed;
