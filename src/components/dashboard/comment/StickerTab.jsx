import React from 'react';
import DynamicSticker from '../mainfeed/DynamicSticker';

function StickerTab({ stickers, isDynamic = false }) {
	return (
		<div className='w-full'>
			<div className='block h-[313px] overscroll-contain overflow-x-hidden overflow-y-auto'>
				<div className='flex flex-wrap m-2 w-[274px] ' onDragStart={(e) => e.preventDefault()}>
					{stickers.map((sticker, idx) => (
						<div className=' p-1' key={idx}>
							<div className='w-[56.5px] h-[56.5px] hover:bg-white/10 rounded-md'>
								{isDynamic ? (
									<DynamicSticker sticker={sticker} isResize key={idx} />
								) : (
									<img src={sticker.img} width={56.5} className='object-fill' />
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default StickerTab;
