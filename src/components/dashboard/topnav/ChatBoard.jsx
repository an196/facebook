import React, { useRef} from 'react';
import { ISearch, ITicket } from '../../../theme/icons/index';
import board from '../../../constant/board';
import { useBoardContext } from '../../../contexts/BoardContext';
import useBoardHidden from '../../../hooks/useBoardHidden';
import { messages } from '../../../data/dummy';

const iconsTopLeft = [
	{ icon: 'icon-threedots' },
	{ icon: 'icon-four-arrows' },
	{ icon: 'icon-camera-plus' },
	{ icon: 'icon-pencil-2' },
];

const Bottom = () => {
	return (
		<div className='py-[9.5px] px-[16px] text-center border-t-[1px] border-[#393a3b] w-full h-[44px]'>
			<span className='h-[20px] text-[15px] font-semibold text-[#4599ff] break-words text-center hover:underline'>
				Xem tất cả trong Messenger
			</span>
		</div>
	);
};

const UserMessages = ({ message }) => {
	return (
		<div className='h-[72px] w-full flex flex-row items-center justify-between space-x-3 px-4 relative group'>
			<div className='w-[56px] h-[56px] flex items-center justify-center bg-[#3a3b3c] rounded-full overflow-hidden'>
				<img src={message.img} className=''></img>
			</div>
			<div className='text-[#e4e6eb] text-[15px] font-medium grow flex flex-col'>
				<span>{message.name}</span>
				<span className='text-[13px] font-normal text-[#b0b3b8]'>{message.submessage}</span>
			</div>
			{getStatusMessage(message)}
			<div className='absolute w-full h-full top-0 -left-3 px-2 '>
				<div className='w-full h-full group-hover:bg-white/10 rounded-md transition-all duration-75 ease-in'> </div>
			</div>
		</div>
	);
};

const Top = () => {
	return (
		<div className='flex w-full '>
			<div className='block h-[757px] w-full overflow-y-auto '>
				<div className='flex h-full w-full'>
					<div className='w-[360px] box-border block  relative '>
						<div className='flex flex-row px-4 pt-3 pb-1 items-center justify-between'>
							<span className='text-[24px] w-full font-bold text-[#e4e6eb]'>Chat</span>
							<span className='flex flex-row items-center justify-center'>
								{iconsTopLeft.map((icon, idx) => (
									<div className='w-10 h-10 flex items-center justify-center cursor-pointer' key={idx}>
										<div
											className='w-8 h-8 flex items-center justify-center  rounded-full hover:bg-white/10 transition-all duration-100 
                      						ease-in'
										>
											<i className={`${icon.icon} filter-icon`}></i>
										</div>
									</div>
								))}
							</span>
						</div>
						{/* Search input */}
						<SearchInput />

						{/* tab comminity */}
						<div className='h-[52px] flex items-center px-4'>
							<span className='h-9 flex flex-row items-center space-x-2 text-[15px] font-semibold'>
								<span className='align-middle px-3 flex items-center bg-[#2d88ff]/30 h-9 rounded-full text-[#2d88ff]'>
									Hộp thư
								</span>
								<span
									className='text-[#e4e6eb] px-3 hover:bg-[#e4e6eb]/20 rounded-full h-9 flex items-center transition-all
                    				duration-100 ease-in'
								>
									Cộng đồng
								</span>
							</span>
						</div>
						{/* message queue */}
						<div className='h-[72px] w-full flex flex-row items-center justify-between space-x-3 px-4'>
							<div className='w-[56px] h-[56px] flex items-center justify-center bg-[#3a3b3c] rounded-full'>
								<i className='icon-double-messages filter-icon-2'></i>
							</div>
							<div className='text-[#e4e6eb] text-[15px] font-medium grow flex flex-col'>
								<span>Tinh nhắn đang chờ mới</span>
								<span className='text-[13px] font-semibold text-[#2e89ff]'>Từ Messi</span>
							</div>
							<div className='w-4 h-4'>
								<i className='icon-right-arrow filter-icon'></i>
							</div>
						</div>
						{/* User */}
						{messages.map((message, idx) => (
							<UserMessages key={idx} message={message} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const SearchInput = () => {
	return (
		<div className='h-[52px]'>
			<div className='my-4 px-4'>
				<span className='w-full flex flex-row h-9 bg-[#3a3b3c] rounded-full items-center'>
					<span className='text-[#b0b3b8] pl-[10px]'>
						<div className='w-4 h-9'>
							<ISearch />
						</div>
					</span>
					<form action='#' className='pt-[7px] px-[6px] pb-[9px] grow shrink'>
						<span className='text-[#b0b3b8] text-[15px] font-normal bg-[#3a3b3c]'>Tìm kiếm trên Messenger</span>
					</form>
				</span>
			</div>
		</div>
	);
};

function getStatusMessage(message) {
	
	if (message) {
		let { status, img } = message;

		if (status === 'seen')
			return (
				<div className='w-4 h-4 rounded-full overflow-hidden'>
					<img src={img} className=''></img>
				</div>
			);
		if (status === 'sent')
			return (
				<i className='text-[#b0b3b8] w-3 h-3'>
					<ITicket />
				</i>
			);
	}
}

function ChatBoard() {
	const boardRef = useRef();
	const { setCurrentBoard } = useBoardContext();
	useBoardHidden(boardRef, board.messenger)
	
	return (
		<div className='absolute w-[360px] h-[801px]  right-0 bg-[#242526] rounded-md z-40'
			onBlur={() => setCurrentBoard('')}
			ref={boardRef}
		>
			<div className='w-[360px] h-full flex flex-col'>
				<Top />
				<Bottom />
			</div>
		</div>
	);
}

export default ChatBoard;
