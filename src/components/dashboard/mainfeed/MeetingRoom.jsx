import React from 'react'
import avatar from '../../../assets/images/avatar3.jpg';

function MeetingRoom() {
  return (
    <div className='flex-none w-[192px] h-[200px] cursor-pointer relative group border rounded-xl border-[#393a3b] box-border'>
      <div className='flex flex-col justify-between items-center h-full w-full'>
        <div className='flex flex-col items-center justify-center p-3 pb-0'>
          <span className='relative w-[62px] h-[62px] '>
            <img src={avatar} alt="" className='w-[62px] h-[62px] rounded-full overflow-hidden' />
            <div className='absolute right-0 bottom-0 w-4 h-4 bg-[#31A24C] rounded-full border-[2px] border-[#242526]'></div>
          </span>

        </div>
        <div className='h-[47px] w-full text-center flex-none p-3 pb-0'>
          <span className='text-[15px] font-semibold text-[#E4E6EB] text-center'>Bùi Hồng Ân</span>
        </div>

        <div className=' w-full h-full flex items-center justify-center p-2 pb-0 '>
          <div className='h-9 w-full flex items-center justify-center border-[#2d88ff]/20 border-[2px] text-center rounded-md'>
            <span className='text-[15px] font-semibold text-[#4599FF]'>
              Gửi lời chào
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MeetingRoom