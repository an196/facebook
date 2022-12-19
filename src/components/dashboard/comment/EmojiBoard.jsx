import React from 'react';
import { ITriangle } from '../../../theme/icons';
import emojis from '../../../data/emoji';
import HorizontalLine from '../../HorizontalLine';
import icons from '../../../theme/icons/comment';

const Section = ({ title, emojis }) => {
	return (
		<div>
			<h3 className='text-[13px] font-normal text-[#8d949e] mx-2 mb-1 mt-0'>{title}</h3>
			<div className='flex flex-wrap'>
				{emojis.map((emoji, idx) => (
					<div className='m-1.5' key={idx}>
						<img src={emoji.img} alt='' width={28} height={28} className='object-none' />
					</div>
				))}
			</div>
		</div>
	);
};

function EmojiBoard() {
	const { Animal, Apple, Umbrella, Symbol, Motion, LightBulb, Flag, Clock, Ball } = icons;

	return (
		<>
			<div
				className='w-[320px]  absolute bottom-[100%] right-[100%] translate-x-[16px] -translate-y-[10px] z-50
    bg-cardBackground rounded-lg shadow-2xl'
			>
				<div
					className='block w-[320px] overflow-y-auto overscroll-contain overflow-x-hidden scroll-smooth mb-1'
					id='emoji-board'
				>
					<div className='flex flex-col w-[320px] h-[282px] '>
						<Section title={'Đã dùng gần đây'} emojis={emojis.slice(0, 8)} />
						<Section title={'Mặt cười & hình người'} emojis={emojis} />
						<Section title={'Động vật & thiên nhiên'} emojis={emojis} />
						<Section title={'Ẩm thực'} emojis={emojis} />
					</div>
				</div>
				<HorizontalLine />
				<div>
					<div className='flex flex-row items-center justify-center py-[7px] space-x-[14px] h-[31px]'>
						<Clock />
						<Motion />
						<Animal />
						<Apple />
						<Ball />
						<Umbrella />
						<LightBulb />
						<Symbol />
						<Flag />
					</div>
				</div>
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

export default EmojiBoard;
