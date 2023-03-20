import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import avartar from '../../../assets/images/avatar3.jpg';
import { Tooltip } from '../../../components';
import { EmojiBoard, AvatarBoard, GifBoard, StickerBoard } from '../../../components/dashboard/comment';

const icons = [
	{
		name: 'avatar',
		icon: 'img-icon-avatar ',
		lable: 'Bình luận bằng nhãn dán avatar',
		board: <AvatarBoard />,
	},
	{
		name: 'feeling',
		icon: 'img-icon-feeling ',
		lable: 'Chèn một biểu tượng cảm xúc',
		board: <EmojiBoard />,
	},
	{
		name: 'camera',
		icon: 'img-icon-camera',
		lable: 'Đính kèm một ảnh hoặc một video',
		board: <></>,
	},
	{ name: 'gif', icon: 'img-icon-gif', lable: 'Bình luận bằng file GIF', board: <GifBoard /> },
	{ name: 'lable', icon: 'img-icon-lable', lable: 'Bình luận bằng nhãn dán', board: <StickerBoard /> },
];

const IconComment = ({ icon, hdlClick, active }) => {
	return (
		<div className='cursor-pointer  relative w-max h-max'>
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

const CommentInput = ({ username, idComment, endReply, submit }) => {
	const [currentTab, setCurrentTab] = useState(null);
	const [addedSpanContent, setAddedSpanContent] = useState(false);
	const inputRef = useRef();

	function hdlClick(name) {
		if (currentTab && currentTab.name === name) {
			setCurrentTab(null);
			return;
		}

		const newTab = icons.find((icon) => icon.name === name);
		setCurrentTab(newTab);
	}

	function handleEditor() {
		var editor = document.getElementById(idComment);
		var span = document.createElement('span');
		span.spellcheck = 'true';
		span.contentEditable = 'true';
		span.textContent = '\u00A0';
		span.style.width = 'auto';
		editor.appendChild(span);
		editor.focus();

		const range = document.createRange();
		const sel = window.getSelection();
		range.setStart(editor.childNodes[1], 1);
		range.collapse(true);

		sel.removeAllRanges();
		sel.addRange(range);
		setAddedSpanContent(true);
	}

	useEffect(() => {
		const container = document.getElementById(idComment);
		const typing = function () {
			if (container.childNodes[1]) {
				const maxWith = container.offsetWidth;
				let textEle = container.childNodes[1];

				const namewidth = container.childNodes[0].offsetWidth;
				const textwidth = textEle.offsetWidth;

				if (textwidth > namewidth) {
					textEle.style.width = maxWith + 'px';
				}
			}
		};

		const getEndTyping = function (e) {
			if (e.key === 'Enter') {
				const content = document.getElementById(idComment);

				submit(container);
				endReply();
			}
		};

		const inputent = () => document.getElementById(idComment).addEventListener('input', typing);
		const endTypingEnt = () => document.getElementById(idComment).addEventListener('keydown', getEndTyping);

		if (username && !addedSpanContent) {
			handleEditor();
			inputent();
			endTypingEnt();
		}

		return () => {
			if (username) {
				document.removeEventListener('input', typing);
				document.removeEventListener('keydown', getEndTyping);
			}
		};
	}, []);

	return (
		<div className='flex flex-row grow' id='comment-input'>
			<div className='w-[32px] h-[32px] rounded-full overflow-hidden mr-[6px] flex-none'>
				<img src={avartar} alt='avatar' />
			</div>
			<form className='flex flex-wrap justify-end bg-[#3a3b3c] w-full px-[12px] rounded-[18px] clearfix relative'>
				<div className='flex cursor-text grow pointer-events-auto break-words whitespace-pre-wrap select-text py-[8px] '>
					<p
						className='flex flex-wrap w-full bg-inherit outline-none text-[15px] editor-comment badge whitespace-pre-wrap 
						text-primaryText cursor-text'
						id={idComment}
						contentEditable
						suppressContentEditableWarning={true}
						ref={inputRef}
					>
						{username && (
							<span
								spellCheck='false'
								className='bg-highlightText text-primaryText'
							>{`${username}`}</span>
						)}
					</p>
				</div>

				<div className='flex flex-row items-center'>
					{icons.map((icon, idx) => (
						<IconComment
							key={idx}
							icon={icon}
							hdlClick={hdlClick}
							active={icon.name === currentTab?.name}
						/>
					))}
				</div>
			</form>
		</div>
	);
};

export default CommentInput;
