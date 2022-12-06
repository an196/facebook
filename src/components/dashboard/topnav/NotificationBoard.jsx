import React from 'react';
import { notifications } from '../../../data/dummy';

const status = {
	seen: 'seen',
	unseen: 'unseen'
}

const typeNotificaiton ={
	notification: 'notification',
	group: 'group'
}

const ItemRow = ({ notification }) => {
	return (
		<div className='w-full flex flex-row justify-between space-x-3 px-4 items-stretch relative p-2'>
			<div className='w-[56px] h-[56px]  flex-none relative'>
				<img src={notification.img}
					className='w-[56px] h-[56px] rounded-full'>
				</img>
				<div className={`absolute bottom-0 right-0 z-20  ${notification.type === typeNotificaiton.group ? 'icon-group-blue': 'icon-message-news'}`}></div>
			</div>
			<div className='text-[#e4e6eb] text-[15px] font-normal grow flex flex-col  flex-wrap overflow-hidden'>
				<span className={`break-words limit-line decoration-auto ${notification.status === status.unseen ? 'text-[#e4e6eb]': 'text-[#b0b3b8]'}`}>{notification.message}</span>
				<span className={`text-[13px] font-semibold ${notification.status === status.unseen ? 'text-[#2e89ff]': 'text-[#b0b3b8]'}`}>{notification.time}</span>
			</div>
			<div className='flex items-center justify-center'>
				<div className={`w-3 h-3 rounded-full bg-[#2e89ff]  ${notification.status === status.unseen ? 'opacity-100': 'opacity-0'}`}>
				</div>
			</div>

			<div className='absolute w-full h-full top-0 -left-3 px-2 group'>
				<div className='relative w-full h-full  rounded-md group-hover:bg-white/10 transition-all duration-75 ease-in-out'></div>
			</div>
		</div>
	)
}

function NotificationBoard() {
	return (
		<div className='absolute right-0 w-[360px] max-h-[801px] bg-[#242526] text-[#e4e6eb] rounded-md'>
			<div className='flex flex-col w-full h-full overflow-hidden'>
				<div className='flex flex-col overflow-y-auto max-h-[801px] pb-4 scroll-smooth'>
					<span className='relative mt-5  px-4 flex justify-between items-center'>
						<span className='text-[24px] font-bold'>Thông báo</span>
						<div className='w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full'>
							<i className='icon-threedots w-5 h-5 filter-icon'></i>
						</div>
					</span>
					{/* message tab */}
					<div className='h-[52px] flex items-center px-4 py-2'>
						<span className='h-9 flex flex-row items-center space-x-2 text-[15px] font-semibold'>
							<span className='align-middle px-3 flex items-center bg-[#2d88ff]/30 hover:bg-[#2d88ff]/20 h-9 rounded-full 
                  				text-[#2d88ff]'>
								Tất cả
							</span>
							<span
								className='text-[#e4e6eb] px-3 hover:bg-[#e4e6eb]/20 rounded-full h-9 flex items-center transition-all
                    				duration-100 ease-in'
							>
								Chưa đọc
							</span>
						</span>
					</div>
					{/* new notifications */}
					<div className='max-w-[360px] flex-initial flex flex-col overflow-y-auto px-4 mt-1'>
						<span className='flex flex-row justify-between items-center  text-[#d5d7dc] mb-[8px]'>
							<span className={`font-semibold text-[17px] `}>Mới</span>

							<div className=' p-[6px] rounded-[4px] hover:bg-[#444445] text-center h-full leading-none cursor-pointer'>
								<span className='font-normal p-[3px] text-[16px] leading-none  text-[#428feb] '>Xem tất cả</span>
							</div>
						</span>
					</div>
					<div className=''>
						{notifications.map((notification, idx) => (
							<ItemRow notification={notification} key={idx} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default NotificationBoard;
