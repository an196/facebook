import React from 'react';
import { ICanCel2 } from '../../../theme/icons';
import HorizontalLine from '../../HorizontalLine';

const Sugesstion = () => {
  return (
    <div className='h-[60px] block'>
      <div className='h-full w-full flex flex-row'>
        <div className='h-full w-full flex flex-1 items-center justify-center border-b-[3px] border-accent cursor-pointer'>
          <span className='text-accent text-[15px] font-semibold'>
            Gợi ý
          </span>
        </div>
        <div className='flex-1'></div>
      </div>

    </div>
  )
}

function WindowSendMessage({setShow}) {
  return (
    <div className=' w-[338px] h-[455px] rounded-t-lg overflow-hidden float-right  mr-4'>
      <div className='w-full h-full bg-messageCardBackground flex-col'>
        <div className='h-12 p-2 flex flex-row items-center justify-between text-primaryText text-[15px] font-medium'>
          <span>Tin nhắn mới</span>
          <div className='w-[24px] h-[24px] hover:bg-white/10 rounded-full cursor-pointer' onClick={()=> setShow(false)}>
            <ICanCel2 />
          </div>
        </div>
        <div className='h-12 flex flex-row items-center text-primaryText'>
          <span className='h-full text-[15px] font-normal mt-2 ml-4'>Đến:</span>
          <div className='h-full flex items-center'>
            <input type='text' autoComplete='off'
              className='h-full m-2 pt-[1px] px-[2px] pb-[18px] outline-none bg-inherit'
            />
          </div>
        </div>
        <HorizontalLine />
        <Sugesstion />
      </div>
    </div>
  );
}

export default WindowSendMessage;
