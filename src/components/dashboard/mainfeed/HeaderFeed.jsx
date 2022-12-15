import React from 'react'
import { IEarth, IThreedots } from '../../../theme/icons'

function HeaderFeed({news}) {
    return (
        <div className='pt-[12px] p-[16px] pb-0 flex flex-row mb-[12px]'>
            <div className='w-[40px] h-[40px] rounded-full overflow-hidden mr-4'>
                <img src={news?.imgProfile} width={40} height={40} className='object-cover' />
            </div>
            <div className='flex flex-col grow'>
                <span className='h-[20px]'>
                    <strong className='text-[16px] text-primaryText'>{news?.name}</strong>
                </span>
                <div className='flex flex-row items-center space-x-1 mt-[4px]'>
                    <span className='text-[12px] text-[#efefef]'>1 giờ</span>
                    <span className='-mt-[8px]'> . </span>
                    <span className='w-[12px] h-[12px] '>
                        <IEarth />
                    </span>
                </div>
            </div>
            <div className='w-[36px] h-[36px] flex items-center justify-center '>
                <div className='w-[20px] h-[20px] cursor-pointer'>
                    <IThreedots />
                </div>
            </div>
        </div>
    )
}

export default HeaderFeed