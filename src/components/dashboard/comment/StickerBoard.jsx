import React, { useState, memo } from 'react';
import { ITriangle } from '../../../theme/icons';
import icons from '../../../theme/icons/comment';
import SearchInput from './SearchInput';
import { topics } from '../../../data/sticker';
import { avatarStickers } from '../../../data/sticker/avatarSk';
import { beeStickers } from '../../../data/sticker/beeSk';
import { doveStickers } from '../../../data/sticker/doveSk';
import { historyStickers } from '../../../data/dummy';
import StickerTab from './StickerTab';

const TopicTab = () => {
	return (
		<>
			<div className='py-2 px-4'>
				<SearchInput />
			</div>
			<div className='flex flex-wrap '>
				{topics.map((topic, idx) => (
					<Topic key={idx} topic={topic} />
				))}
			</div>
		</>
	);
};

const Topic = ({ topic }) => {
	return (
		<div className='block w-[137px] h-12 p-1'>
			<div
				className={`flex items-center justify-center rounded-full ' }`}
				style={{ backgroundColor: topic.bgColor }}
			>
				<div className='w-[133px] h-10 flex flex-row items-center justify-center py-2 px-3 '>
					<div className='w-7 h-7 flex-none'>
						<img className='object-fill ' src={topic.img} alt='' width={24} height={24} />
					</div>
					<span className='w-full text-[15px] font-semibold break-words limit-line-1 text-white'>
						{topic.title}
					</span>
				</div>
			</div>
		</div>
	);
};

const TabBtn = ({ tab, onClick }) => {
	return (
		<div
			className={`${tab.filter && 'filter-icon'} w-[39px] flex justify-center items-center hover:bg-white/20`}
			onClick={() => onClick(tab.name)}
		>
			{tab.icon}
		</div>
	);
};

function StickerBoard() {
	// element tab
	const { MagnifyingGlass, ClockCircle, MotionViolet, QooBeeAgapi, DoveCity, DownArrow, Plus } = icons;

	const tabs = [
		{ name: 'lookup', icon: <MagnifyingGlass />, element: <TopicTab />, filter: true },
		{ name: 'history', icon: <ClockCircle />, element: <></>, filter: true },
		{
			name: 'avatar',
			icon: <MotionViolet />,
			element: <StickerTab stickers={avatarStickers} />,
			filter: false,
			stickers: avatarStickers,
		},
		{ name: 'bee', icon: <QooBeeAgapi />, element: <StickerTab stickers={beeStickers} isDynamic />, filter: false },
		{
			name: 'dove',
			icon: <DoveCity />,
			element: <StickerTab stickers={doveStickers} isDynamic />,
			filter: false,
			stickers: doveStickers,
		},
		{ name: 'more', icon: <DownArrow />, element: <></>, filter: true },
		{ name: 'store', icon: <Plus />, element: <></>, filter: true },
	];

	//state
	const [currentTab, setCurrentTab] = useState(tabs[0]);

	const hdlTabClick = async (name) => {
		if (name !== currentTab.name) {
			const newTab = tabs.find((tab) => tab.name === name);

			const changeTab = (ms) =>
				new Promise((res) => setTimeout(() => setCurrentTab((state) => (state = newTab)), ms));
			setCurrentTab(null);
			await changeTab(0);
		}
	};

	return (
		<>
			<div
				className='absolute w-[274px] h-[352px] bottom-[100%] right-[100%] translate-x-[16px] -translate-y-[10px] z-50
			bg-cardBackground rounded-lg drop-shadow-[0_0_6px_rgba(0,0,0,0.2)] shadow-2xl'
			>
				<div className='h-[39px] flex flex-row'>
					{tabs.map((tab, idx) => (
						<TabBtn tab={tab} key={idx} onClick={hdlTabClick} />
					))}
				</div>
				{currentTab && currentTab.element}
			</div>
			<div
				className='w-[21px] h-[12px] transform -scale-x-100 scale-y-100 absolute bottom-[100%] right-[100%] translate-x-[16px] 
          text-cardBackground z-40'
			>
				<ITriangle />
			</div>
		</>
	);
}

export default StickerBoard;
