import { useRef, useState } from 'react';
import Reels from './Reels';
import LeftScrollBtn from './topfeed/LeftScrollBtn';
import RightScrollBtn from './topfeed/RightScrollBtn';

const NextReel = () => {
	return (
		<div
			className='relative w-[112.5px] h-[200px] float-left flex-none cursor-pointer group border rounded-xl border-[#393a3b]
     hover:bg-white/10 duration-300 transition-all ease-in-out'
		>
			<div className='flex flex-col h-full w-full items-center justify-center'>
				<div className='w-12 h-12 p-3 bg-[#4B4C4F] rounded-full'>
					<i className='icon-right-arrow2 filter-icon-2'></i>
				</div>
				<span className='break-words text-[15px] font-medium text-[#E4E6EB] text-center mt-3'>
					Xem thêm thước phim
				</span>
			</div>
		</div>
	);
};

function ReelsTab() {
	const rowRef = useRef();
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

			if (scrollTo >= 680) setIsMovedRight(false);
			else setIsMovedRight(true);
		}
	};

	return (
		<div className='relative w-[680px] my-4 h-[200px] flex'>
			<div
				className=' w-[680px] h-full flex flex-col overflow-x-auto hidden-scrollbar overflow-y-hidden'
				ref={rowRef}
			>
				<div className='flex flex-row relative h-[200px] space-x-2 '>
					<div className='w-2 flex-none'></div>
					<Reels />
					<Reels />
					<Reels />
					<Reels />
					<Reels />
					<Reels />
					<Reels />
					<NextReel />
					<div className='w-2 flex-none'></div>
				</div>
			</div>
			<LeftScrollBtn isMoved={isMovedLeft} hdlSlideStory={hdlSlideStory} />
			<RightScrollBtn hdlSlideStory={hdlSlideStory} isMoved={isMovedRight} />
		</div>
	);
}

export default ReelsTab;
