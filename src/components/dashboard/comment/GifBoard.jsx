import React from 'react';
import { ITriangle } from '../../../theme/icons';
import SearchInput from './SearchInput';
import gifs from '../../../data/gif';

function GifBoard() {
	return (
		<>
			<div
				className='absolute w-[274px] h-[352px] bottom-[100%] right-[100%] translate-x-[16px] -translate-y-[10px] z-50
        bg-cardBackground rounded-lg'
			>
				<div className='h-[52px] py-2 px-4'>
					<SearchInput />
				</div>
				<div className='h-[300px] overflow-hidden overscroll-contain overflow-x-hidden overflow-y-auto hidden-scrollbar'>
					<div className='flex flex-col w-full max-h-fit '>
						{gifs.map((gif, idx) => (
							<div key={idx}>
								<img src={gif.img} alt={gif.label} className='max-h-max' />
							</div>
						))}
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

export default GifBoard;
