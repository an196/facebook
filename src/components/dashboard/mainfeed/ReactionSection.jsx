import React from 'react'
import { IMessage, IShare, IThumbsUp, IThumbsUp3 } from '../../../theme/icons'
import HorizontalLine from '../../HorizontalLine'

const actions = [
	{ name: 'Thích', icon: <IThumbsUp3 /> },
	{ name: 'Bình luận', icon: <IMessage /> },
	{ name: 'Chia sẻ', icon: <IShare /> },
];

const ActionFeed = ({ action }) => {
	return (
		<div className='w-full  flex flex-row  py-[6px] px-[2px] '>
			<div className='w-full flex flex-row space-x-2 items-center justify-center hover:bg-[#3a3b3c] cursor-pointer rounded-md'>
			<div className='w-[20px] h-[20px] text-[#a8abaf] '>{action.icon}</div>
			<span className='text-[16px] font-medium tracking-tight'>{action.name}</span>
			</div>
		</div>
	);
};

function ReactionSection({news}) {
    return (
        <div className=' mx-[16px] '>
            <div className='flex flex-row justify-between py-[10px]'>
                <div className='flex flex-row items-center text-[#95979b] space-x-2'>
                    <div className='w-[18px] h-[18px] '>
                        <IThumbsUp />
                    </div>
                    <span className='font-medium text-[16px]'>{news.actions.liked}</span>
                </div>
                <div className='flex flex-row space-x-2'>
                    <div className='text-[#95979b] text-[16px] font-normal'>{news.commented} bình luận</div>
                    <div className='text-[#95979b] text-[16px] font-normal'>{news.shared} chia sẻ</div>
                </div>
            </div>
            <div className='h-[52px] p-[4px]'>
                <HorizontalLine />
                <div className=' w-full h-full flex flex-row'>
                    {actions.map((action, index) => (
                        <ActionFeed action={action} key={index} />
                    ))}
                </div>
                <HorizontalLine />
            </div>
        </div>
    )
}

export default ReactionSection