import { useRef, useEffect, useState } from 'react';
import { INews, IReels, ICameraPlus } from '../../../theme/icons/index';
import HorizontalLine from '../../HorizontalLine';
import SubSection from './SubSection';
import StoryTab from './StoryTab';
import MeetingTab from './MeetingTab';
import ReelsTab from './ReelsTab';

const LSubSec = [
	{ label: 'Tin', name: 'news', icon: <INews />, current: true },
	{ label: 'Reels', name: 'reels', icon: <IReels />, current: false },
	{ label: 'Phòng họp mặt', name: 'meetingroom', icon: <ICameraPlus />, current: false },
];

function TopFeed() {
	const [activeTab, setActiveTab] = useState('news');

	const getTab = (tab) => {
		switch (tab) {
			case 'news':
				return <StoryTab />;
			case 'reels':
				return <ReelsTab />;
			case 'meetingroom':
				return <MeetingTab />;
			default:
				return <></>;
		}
	};

	return (
		<div className='w-full pb-[1px] bg-[#242526] mt-[23px] rounded-xl '>
			<div className='flex flex-row h-[60px] px-[16px] '>
				{LSubSec.map((subsec, index) => (
					<SubSection subSection={subsec} key={index} activeTab={activeTab} setActiveTab={setActiveTab} />
				))}
			</div>
			<HorizontalLine />
			{getTab(activeTab)}
		</div>
	);
}

export default TopFeed;
