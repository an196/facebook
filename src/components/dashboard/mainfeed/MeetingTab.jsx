import React, { useRef, useState } from 'react';
import LeftScrollBtn from './topfeed/LeftScrollBtn';
import RightScrollBtn from './topfeed/RightScrollBtn';
import MeetingRoom from './MeetingRoom';

const meetingrooms = [
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
	<MeetingRoom />,
];

const CreatRoom = () => {
	return (
		<div className='flex-none w-[192px] h-[200px] cursor-pointer relative group border rounded-xl border-[#393a3b]'>
			<div className='flex flex-col justify-between items-center h-full w-full'>
				<div className='flex flex-col items-center justify-center p-3 pb-0'>
					<div className='relative w-[60px] h-[60px] flex items-center justify-center rounded-full border border-[#2d88ff]/10'>
						{/* <img src={''} alt="" className='w-[60px] h-[60px] rounded-full overflow-hidden' /> */}
						<i className='icon-camera-plus-violet w-6 h-6'></i>
					</div>
				</div>
				<div className='h-[47px] w-full text-center flex-none p-3 pb-0 break-words'>
					<span className='text-[15px] font-semibold text-[#E4E6EB] text-center w-full block'>
						Phòng họp mặt của Ân
					</span>
					<span className='text-[13px] font-medium  w-full block'>Bắt đầu</span>
				</div>

				<div className=' w-full h-full flex items-center justify-center p-2 pb-0 '>
					<div className='h-9 w-full flex items-center justify-center border-[#2d88ff]/20 border-[2px] text-center rounded-md'>
						<span className='text-[15px] font-semibold text-[#4599FF]'>Tạo</span>
					</div>
				</div>
			</div>
		</div>
	);
};

function MeetingTab() {
	const rowRef = useRef();
	const roomtab = useRef();
	const [isMovedLeft, setIsMovedLeft] = useState(false);
	const [isMovedRight, setIsMovedRight] = useState(true);

	const hdlSlideStory = (direction) => {
		setIsMovedLeft(true);
		if (rowRef.current) {
			const { scrollLeft, clientWidth } = rowRef.current;

			const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;

			rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });

			console.log(scrollTo);
			if (scrollTo < 0) setIsMovedLeft(false);

			if (scrollTo >= 4760) setIsMovedRight(false);
			else setIsMovedRight(true);
		}
	};

	return (
		<div className='relative w-[680px] my-4 h-[200px] flex'>
			<div className=' w-[680px] h-full flex flex-col overflow-x-auto hidden-scrollbar overflow-y-hidden' ref={rowRef}>
				<div className='flex flex-row relative h-[200px] space-x-2 ' ref={roomtab}>
					<div className='w-2 flex-none'></div>
					<CreatRoom />
					{meetingrooms.map((room, idx) => (
						<div key={idx}>{room}</div>
					))}
					<div className='w-2 flex-none'></div>
				</div>
			</div>
			<LeftScrollBtn isMoved={isMovedLeft} hdlSlideStory={hdlSlideStory} />
			<RightScrollBtn hdlSlideStory={hdlSlideStory} isMoved={isMovedRight} />
		</div>
	);
}

export default MeetingTab;
