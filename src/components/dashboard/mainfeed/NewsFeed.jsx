import avatar from '../../../assets/images/avatar1.png';
import { IEarth, IThreedots, IThumbsUp, IThumbsUp3, IMessage, IShare } from '../../../theme/icons/index';
import truncateString from '../../../utils/truncate';
import  HorizontalLine from '../../HorizontalLine';

const actions = [
	{ name: 'Thích', icon: <IThumbsUp3 /> },
	{ name: 'Bình Luận', icon: <IMessage /> },
	{ name: 'Chia sẽ', icon: <IShare /> },
];

const ActionFeed = ({ action }) => {
	return (
		<div className='w-full space-x-2 flex flex-row items-center justify-center'>
			<div className='w-[20px] h-[20px] text-[#a8abaf] '>{action.icon}</div>
			<span className='text-[16px] font-medium'>{action.name}</span>
		</div>
	);
};

function NewsFeed({news}) {
	return (
		<div className='w-full bg-[#242526] mt-[23px] rounded-xl overflow-hidden'>
			<div className='pt-[12px] p-[16px] pb-0 flex flex-row mb-[12px]'>
				<div className='w-[40px] h-[40px] rounded-full overflow-hidden mr-4'>
					<img src={news.imgProfile} width={40} height={40} />
				</div>
				<div className='flex flex-col grow'>
					<span className='h-[20px]'>
						<strong className='text-[16px] text-[##efefef]'>{news.name}</strong>
					</span>
					<div className='flex flex-row items-center space-x-1 mt-[4px]'>
						<span className='text-[12px] text-[#efefef]'>1 giờ</span>
						<span className='-mt-[8px]'> . </span>
						<span className='w-[12px] h-[12px] '>
							<IEarth />
						</span>
					</div>
				</div>
				<div className='w-[36px] h-[36px] flex items-center justify-center '>
					<div className='w-[20px] h-[20px]'>
						<IThreedots />
					</div>
				</div>
			</div>
			<div className='p-[16px] pt-0'>
				<div className='m-[5px] mt-0 text-[#e1e3e4] font-normal'>
					{news.message}
				</div>
			</div>
			<div>
				<img
					src={news.messageLink.img}
					alt={news.title}
				/>
			</div>
			<div className='h-[78px] w-full bg-[#3a3b3c] p-[2px] px-[12px]'>
				<span className='uppercase text-[#e1e3e8] text-[13px] leading-[17px]'>{news.messageLink.original}</span>
				<span className='w-full flex flex-wrap leading-[22px] text-[18px] text-[#e1e3e8] font-semibold'>
					{news.messageLink.title}
				</span>
				<span className='leading-[20px] text-[14px] text-[#95979b]'>
					{truncateString( news.messageLink.abbreviation ,92)}
				</span>
			</div>
			<div className=' mx-[16px] '>
				<div className='flex flex-row justify-between py-[10px]'>
					<div className='flex flex-row items-center text-[#95979b] space-x-2'>
						<div className='w-[18px] h-[18px] '>
							<IThumbsUp />
						</div>
						<span className='font-medium text-[16px]'>{news.actions.liked}</span>
					</div>
					<div className='flex flex-row space-x-2'>
						<div className='text-[#95979b] text-[16px] font-normal'>{news.commented} bình luận</div>
						<div className='text-[#95979b] text-[16px] font-normal'>{news.shared} chia sẻ</div>
					</div>
				</div>
				<HorizontalLine/>
				<div className='h-[52px] w-full flex flex-row'>
					{actions.map((action, index) => (
						<ActionFeed action={action} key={index} />
					))}
				</div>
			</div>
		</div>
	);
}

export default NewsFeed;
