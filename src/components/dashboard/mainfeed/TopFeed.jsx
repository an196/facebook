import { useRef, useEffect, useState } from 'react';
import { INews, IReels, ICameraPlus, } from '../../../theme/icons/index';
import HorizontalLine from '../../HorizontalLine';
import SubSection from './SubSection';
import StoryTab from './StoryTab';

const LSubSec = [
	{ name: 'Tin', icon: <INews />, current: true },
	{ name: 'Reels', icon: <IReels />, current: false },
	{ name: 'Phòng họp mặt', icon: <ICameraPlus />, current: false },
];

function TopFeed() {

	return (
		<div className='w-full pb-[1px] bg-[#242526] mt-[23px] rounded-xl '>
			<div className='flex flex-row h-[60px]  px-[16px] '>
				{LSubSec.map((subsec, index) => (
					<SubSection subSection={subsec} key={index} />
				))}
			</div>
			<HorizontalLine />
			<StoryTab/>
			
		</div>
	);
}

export default TopFeed;
