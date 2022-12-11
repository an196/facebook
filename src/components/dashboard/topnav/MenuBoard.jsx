import React,{useRef , useEffect} from 'react';
import { Section } from '../leftnav';
import { HorizontalLine } from '../../../components';
import items from '../../../data/menu';
import { useBoardContext } from '../../../contexts/BoardContext';
import useBoardHidden from '../../../hooks/useBoardHidden';
import board from '../../../constant/board';

const itemsCreate1 = [
	{ title: 'Đăng', icon: 'icon-pencil' },
	{ title: 'Tin', icon: 'icon-book' },
	{ title: 'Phòng họp mặt', icon: 'icon-camera-plus' },
];

const itemsCreate2 = [
	{ title: 'Trang', icon: 'icon-flag' },
	{ title: 'Quảng cáo', icon: 'icon-speaker' },
	{ title: 'Nhóm', icon: 'icon-group' },
	{ title: 'Sự kiện', icon: 'icon-book-plus' },
	{ title: 'Bài niêm yết trên Marketplace', icon: 'icon-basket' },
];

const LeftMenu = () => {
	return (
		<div className='m-2 pt-0 mt-0'>
			<div className='w-[360px] bg-[#242526] rounded-md block '>
				<div className='p-4 pb-2'>
					<div className='flex flex-row items-center bg-[#3a3b3c] rounded-full'>
						<span className='h-[36px] pl-[10px] flex justify-center items-center'>
							<i className='img-icon-search bg-img-5 filter-icon'></i>
						</span>
						<form action='#' className='bg-transparent'>
							<input
								className='text-[15px] font-normal text-[#e4e6eb] bg-transparent pl-[10px] outline-none'
								type='text'
								placeholder='Tìm kiếm trong menu'
							/>
						</form>
					</div>
				</div>
				{items.map((item, idx) => (
					<div key={idx}>
						<Section items={item.element} header={item.name} subtitle={true} headerColor='#dfe1e6' />
						{items.length - 1 !== idx && (
							<div className='px-3'>
								<HorizontalLine />
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

const ItemRowRight = ({ item }) => {
	return (
		<div className='px-4 flex flex-row items-center justify-center h-[52px] relative group w-[200px] space-x-2'>
			<div className='flex w-9 h-9 items-center flex-none justify-center bg-[#3a3b3c] rounded-full'>
				<i className={`filter-icon-2 ${item.icon} flex-none`}></i>
			</div>
			<span className='text-[15px] font-medium grow'>{item.title}</span>
			<span
				className='absolute  group-hover:bg-white/20 rounded-md top-0 left-[8px]  w-[184px] h-full transition-all 
				duration-300 ease-in-out'
				style={{ margin: 0 }}
			>
				{' '}
			</span>
		</div>
	);
};

const RightMenu = () => {
	return (
		<div className='block relative flex-none '>
			<div className='block sticky top-0 '>
				<div className='flex relative m-2 mt-0 '>
					<div className=' bg-[#242526] rounded-md w-[200px] '>
						<div className='px-1 py-2'>
							<p className='text-[20px] font-bold p-[6px]'>Tạo</p>
						</div>
						<div className='py-2'>
							{itemsCreate1.map((item, idx) => (
								<ItemRowRight item={item} key={idx} />
							))}
							<div className='mx-4 my-3'>
								<HorizontalLine />
							</div>
							{itemsCreate2.map((item, idx) => (
								<ItemRowRight item={item} key={idx} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

function MenuBoard() {
	const menuRef = useRef();
	useBoardHidden(menuRef, board.menu)

	return (
		<div className='absolute right-0 top-10 z-50 flex flex-col max-w-[607px] flex-initial h-[752px] rounded-md 
			text-[#e4e6eb] bg-[#323436] pl-2'
		
			ref={menuRef}
		>
			<div className='text-[24px] font-bold  w-full py-4 px-4'>Menu</div>
			<div className='h-[752px]  w-full '>
				<div className='flex flex-col relative overflow-y-auto overscroll-y-contain overflow-x-clip h-[680px] '>
					<div className='flex flex-col relative grow'>
						<div className='block w-[592px]  '>
							<div className='flex flex-row items-stretch justify-center'>
								<LeftMenu />
								<RightMenu />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MenuBoard;
