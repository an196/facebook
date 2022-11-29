import { INews, IReels, ICameraPlus, ICirclePlus } from '../../../theme/icons/index';
import storyImage from '../../../assets/images/story.png';
import avatar from '../../../assets/images/avatar3.jpg';

const LSubSec = [
	{ name: 'Tin', icon: <INews />, current: true },
	{ name: 'Reels', icon: <IReels />, current: false },
	{ name: 'Phòng họp mặt', icon: <ICameraPlus />, current: false },
];

const SubSection = ({ subSection }) => {
	return (
		<div className={`w-[210px] h-[60px] justify-center items-center flex space-x-2 ${subSection.current && 'menu-item-active'}`}>
			<div className='w-[20px] h-[20px]'>{subSection.icon}</div>
			<div> {subSection.name}</div>
		</div>
	);
};

const Story = () => {
	return (
		<div className='relative w-[112.5px] h-[200px] mr-[8px] float-left'>
			<div className='relative rounded-xl overflow-hidden'>
				<img src={storyImage} width={112.5} height={200} />
			</div>
			<div className='absolute w-[64px] h-[64px] top-0 p-[12px]'>
				<div className=' w-[40px] h-[40px] rounded-full overflow-hidden border-[4px] border-[#2374E1]'>
					<img src={avatar} width={40} height={40} />
				</div>
			</div>
			<div className='absolute bottom-0 w-full h-auto p-[12px] '>
				<div className='w-full text-[14px] leading-[16px] font-semibold tracking-tight text-[#fff]  break-normal'>
					Huy Đức Lê
				</div>
			</div>
		</div>
	);
};

const CreateStory = () => {
	return (
		<div className='float-left w-[112.5px] h-[200px] mr-[8px]'>
			<div className=' rounded-t-xl overflow-hidden !z-0'>
				<img src={avatar} className='w-[112.5px] h-[148px]' alt='avatar' />
			</div>
			<div
				className='w-[40px] h-[40px] bg-[#2e89ff] flex items-center justify-center m-auto -mt-[20px] relative !z-10 rounded-full
        border-[4px] border-[#242526]'
			>
				<div className='w-[20px] h-[20px]  text-white cursor-pointer'>
					<ICirclePlus />
				</div>
			</div>
			<div className='flex items-center justify-center'>
				<span className='font-semibold text-white text-[14px] m-auto'>Tạo tin</span>
			</div>
		</div>
	);
};

function TopFeed() {
	return (
		<div className='w-full h-[301px] bg-[#242526] mt-[23px] rounded-xl '>
			<div className='flex flex-row h-[60px] border-b-[1px] border-[#393a3b] px-[16px]'>
				{LSubSec.map((subsec, index) => (
					<SubSection subSection={subsec} key={index} />
				))}
			</div>
			<div className='mt-[16px] w-max ml-[16px]'>
				<CreateStory />
				<Story />
				<Story />
				<Story />
				<Story />
				<Story />
				<Story />
			</div>
		</div>
	);
}

export default TopFeed;
