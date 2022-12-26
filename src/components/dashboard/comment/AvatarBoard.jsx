import React from 'react';
import {avatarStickers} from '../../../data/sticker/avatarSk';
import { ITriangle } from '../../../theme/icons';

function AvatarBoard() {
	return (
		<>
			<div
				className='w-[351px] h-[431px] absolute bottom-[100%] right-[100%] translate-x-[16px] -translate-y-[10px] z-50
                 bg-cardBackground rounded-lg drop-shadow-[0_0_6px_rgba(0,0,0,0.2)]'
			>
				<div className='w-[351px] h-[416px]'>
					<div className='h-[52px] w-full px-4 py-2 flex flex-row items-center justify-between'>
						<div className='text-[20px] font-bold text-primaryText'>Avatar của bạn</div>
						<div className='text-[15px] font-semibold text-[#050505] bg-white h-9 flex items-center justify-center p-3 rounded-md'>
							<span> Chỉnh sửa avatar</span>
						</div>
					</div>
					<div className='flex flex-col h-[364px] overflow-auto overscroll-contain p-3'>
						<div className='flex flex-wrap'>
							{avatarStickers.map((avatar, idx) => (
								<div className='m-1 hover:bg-white/10 rounded-md' key={idx}>
									<img src={avatar.img} alt={avatar.title} width={96} height={96} />
								</div>
							))}
						</div>
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

export default AvatarBoard;
