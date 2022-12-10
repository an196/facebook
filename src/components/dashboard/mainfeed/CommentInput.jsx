import React from 'react';
import avartar from '../../../assets/images/avatar3.jpg';
import { Tooltip } from '../../../components';

const icons = [
	{ name: 'avatar', icon: 'bg-img-3 img-icon-avatar', lable: 'Bình luận bằng nhãn dán avatar' },
	{ name: 'feeling', icon: 'bg-img-3 img-icon-feeling', lable: 'Chèn một biểu tượng cảm xúc' },
	{ name: 'camera', icon: 'bg-img-3 img-icon-camera', lable: 'Đính kèm một ảnh hoặc một video' },
	{ name: 'gif', icon: 'bg-img-3 img-icon-gif', lable: 'Bình luận bằng file GIF' },
	{ name: 'lable', icon: 'bg-img-3 img-icon-lable', lable: 'Bình luận bằng nhãn dán' },
];

const IconComment = ({ icon }) => {
	return (
		<span className=' cursor-pointer group relative'>
			<Tooltip lable={icon.lable} position='top'>
			<div className='filter-icon flex-none w-[28px] h-[28px] rounded-full group-hover:bg-black/20 flex items-center justify-center'>
				<div className='w-4 h-4 flex items-center justify-center'>
					<i className={icon.icon}></i>
				</div>
			</div>
			</Tooltip>
		</span>
	);
};

const CommentInput = () => {
	return (
		<div className='flex flex-row' id='comment-input' >
			<div className='w-[32px] h-[32px] rounded-full overflow-hidden mr-[6px]'>
				<img src={avartar} alt='avatar' />
			</div>
			<form className='flex flex-row bg-[#3a3b3c] h-[36px] w-full px-[12px] py-[8px] rounded-full clearfix'>
				<input className='bg-inherit outline-none text-[15px] grow' placeholder='Viết bình luận công khai...' />
				<div className='flex flex-row items-center'>
					{icons.map((icon, idx) => (
						<IconComment key={idx} icon={icon} />
					))}
				</div>
			</form>
		</div>
	);
}

export default CommentInput;
