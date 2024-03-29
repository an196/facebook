import avatar from '../../assets/images/avatar3.jpg';
import { ISearch, IThreedots, ICameraPlus2 } from '../../theme/icons/index';

//import dummy data
import { users } from '../../data/dummy';
import { useChatContext } from '../../contexts/ChatContext';

const actions = [
	{ title: 'Phòng họp mặt mới', icon: <ICameraPlus2 /> },
	{ title: 'Tìm kiếm theo tên và nhóm', icon: <ISearch /> },
	{ title: 'Tùy chọn', icon: <IThreedots /> },
];

const Action = ({ action }) => {
	return (
		<div className='w-[40px] h-[20px] flex justify-center items-center cursor-pointer'>
			<div className='w-[30px] h-[30px] flex justify-center items-center hover:bg-[#303031] rounded-full '>
				<div className='w-[20px] h-[15px] '> {action.icon}</div>
			</div>
		</div>
	);
};
function RightNav() {
	const { setShowWindow } = useChatContext();
	return (
		<div className='block sticky top-0 grow max-w-[360px] min-w-[280px] overflow-hidden  overflow-y-visible overscroll-contain hide-scrollbar'>
			<div className=' max-w-[360px] h-[calc(100vh-56px)] p-1 text-[#e1e3e8]'>
				<div className='flex flex-row justify-between  mt-[20px]'>
					<span className='leading-[21px] text-[17px] font-semibold text-secondaryText'>Người liên hệ</span>
					<span className='flex flex-row space-x-3 justify-center items-center'>
						{actions.map((action, idx) => (
							<Action action={action} key={idx} />
						))}
					</span>
				</div>
				<div className='w-full mt-2'>
					{users.map((user, idx) => (
						<div
							className='h-[56px] flex items-center hover:bg-white/10 rounded-md px-2 duration-300 transition-all ease-in-out'
							onClick={() => setShowWindow(true)}
							key={idx}
						>
							<div className='flex flex-row space-x-3 items-center cursor-pointer' key={idx}>
								<span className='relative flex-none'>
									<img src={avatar} alt='avatar' className='rounded-full' width={36} height={36} />
									<div className='h-[12px] w-[12px] bg-[#31a24c] absolute bottom-0 right-0 rounded-full border-[2px] border-[#18191a]'></div>
								</span>
								<span className='leading-[20px] text-[15px] font-medium text-primaryText'>
									{user.name}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default RightNav;
