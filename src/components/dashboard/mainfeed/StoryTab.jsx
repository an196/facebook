import React, { useRef, useState } from 'react'
import Story from './Story';
import avatar from '../../../assets/images/avatar3.jpg';
import { ICirclePlus, ILeftArrow2, IRightArrow } from '../../../theme/icons';

const CrtStoryBtn = () => {
	return (
		<div className='ml-[16px] float-left flex-none w-[112.5px] h-[200px] mr-[8px]'>
			<div className='rounded-t-xl overflow-hidden !z-0 relative'>
				<img
					src={avatar}
					className='w-[112.5px] h-[148px] hover:scale-105 transition-all duration-500 ease-linear'
					alt='avatar'
				/>
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

function StoryTab() {
    const rowRef = useRef();
	const [isMoved, setIsMoved] = useState(false);

    const RightButton = () => {
		return (
			<div className='absolute top-[76px] right-[24px] z-10 cursor-pointer' onClick={() => hdlSlideStory('right')}>
				<div className='w-[48px] h-[48px] p-[12px] rounded-full bg-[#3e4042] hover:bg-[#494c4e] overflow-hidden
					active:bg-[#3e4042] active:w-[46px] active:h-[46px] active:p-[11px]  active:translate-x-[-1px] active:translate-y-[1px]'
				>
					<div className='w-[24px] h-[24px] text-[#b0b3b8]'>
						<IRightArrow />
					</div>
				</div>
			</div>
		);
	};

	const LeftButton = () => {
		return (
			<div className={`absolute top-[76px] left-[24px] z-10 cursor-pointer ${!isMoved ? 'opacity-0' : 'opacity-1'} `} 
				onClick={() => hdlSlideStory('left')}
			>
				<div className='w-[48px] h-[48px] p-[12px] rounded-full bg-[#3e4042] hover:bg-[#494c4e] overflow-hidden active:bg-[#3e4042]
					active:w-[46px] active:h-[46px] active:p-[11px]  active:translate-x-[1px] active:translate-y-[1px]'
				>
					<div className='w-[24px] h-[24px] text-[#b0b3b8]'>
						<ILeftArrow2 />
					</div>
				</div>
			</div>
		);
	};
    
    const hdlSlideStory = (direction) => {
		setIsMoved(true)
		if (rowRef.current) {
			const { scrollLeft, clientWidth } = rowRef.current;
			
			const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
			
			rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });

			if(scrollTo < 0) setIsMoved(false);
		}
	};

    return (
        <div className='relative w-[680px] my-4 h-[200px] flex'>
            <div className=' w-[680px] h-full flex flex-col overflow-x-auto hidden-scrollbar overflow-y-hidden' ref={rowRef}>
                <div className='flex flex-row relative h-[200px] space-x-2 ' >
                    <CrtStoryBtn />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <div className='w-2 flex-none'></div>
                </div>
            </div>
            <RightButton />
            <LeftButton />
        </div>
    )
}

export default StoryTab