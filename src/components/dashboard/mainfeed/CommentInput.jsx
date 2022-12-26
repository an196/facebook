import React, { useState } from 'react';
import avartar from '../../../assets/images/avatar3.jpg';
import { Tooltip } from '../../../components';
import { EmojiBoard, AvatarBoard, GifBoard, StickerBoard } from '../../../components/dashboard/comment';

const icons = [
	{
		name: 'avatar',
		icon: 'bg-img-3 img-icon-avatar ',
		lable: 'Bình luận bằng nhãn dán avatar',
		board: <AvatarBoard />,
	},
	{
		name: 'feeling',
		icon: 'bg-img-3 img-icon-feeling ',
		lable: 'Chèn một biểu tượng cảm xúc',
		board: <EmojiBoard />,
	},
	{
		name: 'camera',
		icon: 'bg-img-3 img-icon-camera',
		lable: 'Đính kèm một ảnh hoặc một video',
		board: <AvatarBoard />,
	},
	{ name: 'gif', icon: 'bg-img-3 img-icon-gif', lable: 'Bình luận bằng file GIF', board: <GifBoard /> },
	{ name: 'lable', icon: 'bg-img-3 img-icon-lable', lable: 'Bình luận bằng nhãn dán', board: <StickerBoard /> },
];

const IconComment = ({ icon , hdlClick , active}) => {

	return (
		<div className='cursor-pointer  relative w-max h-max' >
			<Tooltip lable={icon.lable} position='top'>
				<div className=' flex-none w-[28px] h-[28px] rounded-full group hover:bg-white/10 flex items-center justify-center'>
					<div className='w-4 h-4 flex items-center justify-center '>
						<i
							onClick={() => hdlClick(icon.name)}
							className={`${icon.icon} 
							${active ? 'filter-icon-active' : 'filter-icon'}`}
						></i>
					</div>
				</div>
			</Tooltip>
			{active && icon.board}
		</div>
	);
};

const CommentInput = () => {
	const [ currentTab, setCurrentTab] = useState(null);

	function hdlClick(name) {
		if((currentTab && currentTab.name === name)){
			setCurrentTab(null);
			return;
		}

		const newTab = icons.find(icon => icon.name === name);
		setCurrentTab(newTab);
	}

	return (
		<div className='flex flex-row' id='comment-input'>
			<div className='w-[32px] h-[32px] rounded-full overflow-hidden mr-[6px]'>
				<img src={avartar} alt='avatar' />
			</div>
			<form className='flex flex-row bg-[#3a3b3c] h-[36px] w-full px-[12px] py-[8px] rounded-full clearfix'>
				<input className='bg-inherit outline-none text-[15px] grow' placeholder='Viết bình luận công khai...' />
				<div className='flex flex-row items-center'>
					{icons.map((icon, idx) => (
						<IconComment key={idx} icon={icon} hdlClick={hdlClick} active={icon.name === currentTab?.name} />
					))}
				</div>
			</form>
		</div>
	);
};

export default CommentInput;
