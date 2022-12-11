import React from 'react'
import { IRightArrow } from '../../../../theme/icons'

function RightScrollBtn({hdlSlideStory, isMoved}) {
    return (
        <div className={`absolute top-[76px] right-[24px] z-10 cursor-pointer  ${!isMoved ? 'opacity-0' : 'opacity-1'} `}
             onClick={() => hdlSlideStory('right')}>
            <div className='w-[48px] h-[48px] p-[12px] rounded-full bg-[#3e4042] hover:bg-[#494c4e] overflow-hidden
					active:bg-[#3e4042] active:w-[46px] active:h-[46px] active:p-[11px]  active:translate-x-[-1px] active:translate-y-[1px]'
            >
                <div className='w-[24px] h-[24px] text-[#b0b3b8]'>
                    <IRightArrow />
                </div>
            </div>
        </div>
    )
}

export default RightScrollBtn