import React, { useState, useRef } from 'react';
import { HorizontalLine, Tooltip } from '../../../components';
import avatar from '../../../assets/images/avatar3.jpg';
import { useEffect } from 'react';

const textmode = {
	size1: 'size1',
	size2: 'size2',
};

const interactions = [
	{ title: 'Ảnh/Video', icon: 'icon-img' },
	{ title: 'Gắn thẻ người khác', icon: 'icon-tag-user' },
	{ title: 'Cảm xúc hoạt động', icon: 'icon-happy-face-yellow' },
	{ title: 'Checkin', icon: 'icon-locale-red' },
	{ title: 'Sự kiện trong đời', icon: 'icon-flag-blue' },
	{ title: 'Xem thêm', icon: 'icon-threedots-2' },
];

const Interaction = ({ interaction }) => {
	return (
		<Tooltip lable={interaction.title} position={'top'}>
			<div className='w-9 h-9 relative p-2 flex items-center justify-center group'>
				<i className={`${interaction.icon} flex-none`}></i>
				<div className='absolute w-full h-full top-0 left-0 '>
					<div className='w-full h-full group-hover:bg-white/10 rounded-full cursor-pointer'></div>
				</div>
			</div>
		</Tooltip>
	);
};

function PostFeed({ setShowPostFeed }) {
	const [textMode, setTextMode] = useState('');
	const inputPost = useRef();

	useEffect(() => {
		const log = function () {
			const txtlen = inputPost?.current?.textContent.length;
			if (txtlen < 84) setTextMode('');
			if (txtlen > 84) {
				setTextMode('size1');
			}

			if (txtlen > 130) {
				setTextMode('size2');
			}
		};
		document.getElementById('editor-post').addEventListener('input', log);

		return () => {
			document.removeEventListener('input', log);
		};
	}, []);

	return (
		<div
			className='fixed w-[100vw] h-[calc(100vh-56px)] inset-0 bg-black/60 z-40 flex items-center justify-center transition-all 
            duration-300 ease-in-out'
		>
			<div className='w-[500px] bg-[#242526]  block rounded-lg'>
				<div className='h-[60px] w-full flex items-center justify-center relative'>
					<span className='text-[20px] font-bold text-[#e4e6eb]'>Tạo bài viết</span>
					<div
						className='absolute w-9 h-9 top-3 right-4 bg-white/20 rounded-full p-2 cursor-pointer'
						onClick={() => setShowPostFeed(false)}
					>
						<i className='icon-cancel filter-icon'></i>
					</div>
				</div>
				<HorizontalLine />
				<div className='mx-4'>
					{/* top */}
					<div className='h-[72px]  w-full flex flex-row relative flex-none py-4 items-center '>
						<div className='w-10 h-10 rounded-full overflow-hidden mr-[11px] cursor-pointer'>
							<img src={avatar} alt='avatar' />
						</div>

						<div className='flex flex-col space-y-1 cursor-pointer relative group'>
							<span aria-label='name' className='text-[15px] font-semibold text-[#e4e6eb]'>
								Ân Lê
							</span>
							<Tooltip lable={' Bạn bè của bạn'}>
								<span
									aria-label='relation'
									className='h-6 flex flex-row items-center justify-center space-x-1  py-1 px-2 
                                    bg-white/10 rounded-md'
								>
									<div className='w-3 h-3 flex items-center justify-center mt-[1px]'>
										<img
											src='https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/zPcex_q0TM1.png'
											alt='relation'
											className='filter-icon-2 cursor-pointer'
										/>
									</div>
									<span className='text-[13px] font-semibold text-[#e4e6eb]'>Bạn bè</span>
									<i className='icon-down-triangle w-3 h-3 filter-icon-2'></i>
								</span>
							</Tooltip>
						</div>
					</div>
					{/* content */}
					<div className={`w-full flex flex-col justify-between pb-2 ${textMode === '' && 'h-[154px]'}`}>
						<div className={`w-full  ${textMode === '' && 'h-[80px]'}`}>
							<span
								className={` font-normal focus:cursor-text outline-none text-[#E4E6EB] pointer-events-auto
                                break-words whitespace-pre-wrap select-text block badge
                                ${textMode !== '' ? 'text-[15px]' : 'text-[24px]'}
                            `}
								contentEditable
								suppressContentEditableWarning={true}
								ref={inputPost}
								id='editor-post'
							></span>
						</div>
						<div
							className={`flex flex-row relative items-center  
							${textMode === textmode.size2 && 'justify-end mt-5'}
                            ${textMode !== textmode.size2 && 'justify-between'}
                            ${textMode === textmode.size1 && 'mt-5'}
                        `}
						>
							<div
								aria-label='Hiển thị các tùy chọn phông nền'
								className={`w-[38px] h-[38px] cursor-pointer ${
									textMode === textmode.size2 && 'hidden'
								}`}
							>
								<img src='https://www.facebook.com/images/composer/SATP_Aa_square-2x.png' alt='' />
							</div>
							<span className='group relative cursor-pointer'>
								<Tooltip lable={'emoji'} position={'top'}>
									<i className='icon-happy filter-icon2'></i>
								</Tooltip>
							</span>
						</div>
					</div>
					{/* bottom */}
					<div className='w-full h-[142px] py-4'>
						<div
							className='h-[58px] border-[1px] border-[#393a3b] rounded-xl flex flex-row justify-between items-center
                            px-4'
						>
							<span className='text-[15px] font-semibold text-[#e4e6eb] cursor-pointer'>
								Thêm vào bài viết của bạn
							</span>
							<span className=' flex flex-row'>
								{interactions.map((interaction, idx) => (
									<Interaction key={idx} interaction={interaction} />
								))}
							</span>
						</div>
						{/* button */}
						<div className='mt-4 h-9 flex items-center justify-center bg-[#505151] rounded-lg cursor-not-allowed'>
							<span className='text-[15px] font-semibold'>Đăng</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PostFeed;
