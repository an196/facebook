import React, { useState } from 'react';
import TopNav from '../../layouts/dashboard/TopNav';
import RightNav from '../../layouts/dashboard/RightNav';
import LeftNav from '../../layouts/dashboard/LeftNav';
import MainFeed from '../../layouts/dashboard/MainFeed';
import { Tooltip } from '../../components';
import { WindowChat, WindowSendMessage } from '../../components/dashboard';
import { useChatContext } from '../../contexts/ChatContext';

const EditBtn = ({ setShow, show }) => {
	return (
		<div className='fixed bottom-4 right-6 ' onClick={() => setShow(!show)}>
			<div className='w-12 h-12 group relative'>
				<Tooltip lable={'Tin nhắn mới'} position='left'>
					<div
						className='w-12 h-12 rounded-full overflow-hidden bg-[#4b4c4f] hover:bg-[#4b4c4f]/80 cursor-pointer flex items-center 
            justify-center'
					>
						<i className='bg-img-6 img-icon-pencil filter-icon w-[20px] h-[20px]'></i>
					</div>
				</Tooltip>
			</div>
		</div>
	);
};

function GeneralApp() {
	const [show, setShow] = useState(false);
	const { showWindow } = useChatContext();
	return (
		<>
			<TopNav />
			<div className='flex flex-row bg-[#18191a] justify-between relative items-stretch overflow-y-auto  overscroll-contain'>
				<LeftNav />
				<MainFeed />
				<RightNav />
				<EditBtn setShow={setShow} show={show} />
			</div>
			<div className='block absolute bottom-0 right-[72px]'>
				{show && <WindowSendMessage setShow={setShow} />}
				{showWindow && <WindowChat />}
			</div>
		</>
	);
}

export default GeneralApp;
