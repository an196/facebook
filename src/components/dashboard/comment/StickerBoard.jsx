import React from 'react';
import { ITriangle } from '../../../theme/icons';
import icons from '../../../theme/icons/comment';
import SearchInput from './SearchInput';
import { topics } from '../../../data/sticker';

const Topic = ({topic}) => {
	return(
		<div className='block w-[137px] h-12 p-1'> 
			<div className={`flex items-center justify-center rounded-full ' }`} style={{backgroundColor:  topic.bgColor}}>
				<div className='w-[133px] h-10 flex flex-row items-center justify-center py-2 px-3 '>
					<div className='w-7 h-7 flex-none'>
						<img className='object-fill ' src={topic.img} alt="" width={24} height={24} />
					</div>
					<span className='w-full text-[15px] font-semibold break-words limit-line-1 text-white'>{topic.title}</span>
				</div>
			</div>
		</div>
	)
}

function StickerBoard() {
	const { MagnifyingGlass,
		ClockCircle,
		MotionViolet,
		QooBeeAgapi,
		DoveCity,
		DownArrow,
		Plus,
	} = icons;

	return (
		<>
			<div className='absolute w-[274px] h-[352px] bottom-[100%] right-[100%] translate-x-[16px] -translate-y-[10px] z-50
			bg-cardBackground rounded-lg drop-shadow-[0_0_6px_rgba(0,0,0,0.2)]'>
				<div className='h-[39px] flex flex-row'>
					<div className='filter-icon w-[39px] flex justify-center items-center hover:bg-white/20'><MagnifyingGlass /></div>
					<div className='filter-icon w-[39px] flex justify-center items-center hover:bg-white/20'><ClockCircle /></div>
					<div className='w-[39px] flex justify-center items-center hover:bg-white/20'><MotionViolet /></div>
					<div className='w-[39px] flex justify-center items-center hover:bg-white/20'><QooBeeAgapi /></div>
					<div className='w-[39px] flex justify-center items-center hover:bg-white/20'><DoveCity /></div>
					<div className='filter-icon w-[39px] flex justify-center items-center hover:bg-white/20'><DownArrow/></div>
					<div className='filter-icon w-[39px] flex justify-center items-center hover:bg-white/20'><Plus/></div>
				</div>
				<div className='py-2 px-4'><SearchInput/></div>
				<div className='flex flex-wrap '>
					{
						topics.map((topic, idx)=> <Topic key={idx} topic={topic}/>)
					}
					
				</div>
			</div>
			<div
				className='w-[21px] h-[12px] transform -scale-x-100 scale-y-100 absolute bottom-[100%] right-[100%] translate-x-[16px] 
          text-cardBackground z-40'
			>
				<ITriangle />
			</div>
		</>
	)
}

export default StickerBoard;
