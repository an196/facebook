import React from 'react';
import { Section } from '../leftnav';
import { HorizontalLine } from '../../../components';
import items from '../../../data/menu';
import CreateBoard from './CreateBoard';

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
		<div className='m-2 pt-0'>
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
		<div className='px-3 flex flex-row items-center h-[52px] relative group'>
			<div className='flex w-9 h-9 items-center flex-none justify-center bg-[#3a3b3c] mr-3 rounded-full'>
				<i className={`filter-icon-2 ${item.icon} flex-none`}></i>
			</div>
			<span className='text-[15px] font-medium'>{item.title}</span>
			<div className='absolute p-2 group-hover:bg-white/20 rounded-md top-0 right-0  w-full h-full transition-all duration-300 ease-in-out'></div>
		</div>
	);
};

const RightMenu = () => {
	return (
		<div className='block relative w-[200px] grow shrink'>
			<div className='block sticky top-0'>
				<div className='flex relative m-2'>
					<div className='px-3 py-4 w-full bg-[#242526] rounded-md'>
						<p className='text-[20px] font-bold p-[6px]'>Tạo</p>
						{itemsCreate1.map((item, idx) => (
							<ItemRowRight item={item} key={idx} />
						))}
						<div className='mx-4 my-3'><HorizontalLine/></div>
						{itemsCreate2.map((item, idx) => (
							<ItemRowRight item={item} key={idx} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

function MenuBoard() {
	return (
		<div className='absolute right-0 top-12 z-50 flex flex-col w-[620px] flex-initial rounded-md text-[#e4e6eb] bg-[#323436]'>
			<div className='text-[24px] font-bold  w-full py-4 px-4'>Menu</div>
			<div className='flex flex-col relative overflow-y-auto overscroll-contain h-[752px] '>
				<div className='flex flex-col relative grow'>
					<div className='block'>
						<div className='flex flex-row items-stretch relative flex-wrap justify-center'>
							<LeftMenu />
							<RightMenu />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MenuBoard;
