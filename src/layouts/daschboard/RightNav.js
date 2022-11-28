import { useRef, useEffect } from 'react';
import avatar from '../../assets/images/avatar3.jpg';
import { CameraIcon } from '../../components/dashboard'
import { ISearch, IThreedots } from '../../theme/icons/index';

function RightNav() {


  return (
    <div className='w-[360px] p-2 text-[#e1e3e8] sticky'>
      <div className='flex flex-row justify-between  mt-[20px] w-full'>
        <span className='leading-[21px] text-[16px] font-medium text-[#e1e3e8]'>Người liên hệ</span>
        <span className='flex flex-row space-x-3 justify-center items-center pt-1'>
          <div className='w-[40px] h-[20px] flex justify-center items-center'>
            <div className='w-[30px] h-[30px] flex justify-center items-center hover:bg-[#303031] rounded-full'>
              <div className='w-[20px] h-[16px] mt-[1px]'> <CameraIcon /></div>
            </div>
          </div>
          <div className='w-[40px] h-[20px]  flex justify-center items-center'>
            <div className='w-[30px] h-[30px] flex justify-center items-center hover:bg-[#303031] rounded-full'>
              <div className='w-[16px] h-[16px]'> <ISearch /></div>
            </div>
          </div>
          <div className='w-[40px] h-[20px] flex justify-center items-center'>
            <div className='w-[30px] h-[30px] flex justify-center items-center hover:bg-[#303031] rounded-full'>
              <div className='w-[16px] h-[16px]'> <IThreedots /></div>
            </div>
          </div>
        </span>
      </div >

      <div className='w-full space-y-[16px] mt-[16px]'>
        <div className='flex flex-row space-x-3 items-center '>
          <img src={avatar} alt='avatar' className='rounded-full' width={36} height={36}/>
          <span className='leading-[20px] text-[16px] font-medium'>Nguyễn Tiến Thành</span>
        </div>
        <div className='flex flex-row space-x-3 items-center '>
          <img src={avatar} alt='avatar' className='rounded-full' width={36} height={36}/>
          <span className='leading-[20px] text-[16px] font-medium'>Nguyễn Tiến Thành</span>
        </div>
        <div className='flex flex-row space-x-3 items-center '>
          <img src={avatar} alt='avatar' className='rounded-full' width={36} height={36}/>
          <span className='leading-[20px] text-[16px] font-medium'>Nguyễn Tiến Thành</span>
        </div>
      </div>
    </div >
  );
}

export default RightNav;
