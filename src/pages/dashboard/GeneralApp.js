import React from 'react'
import TopNav from '../../layouts/dashboard/TopNav';
import RightNav from '../../layouts/dashboard/RightNav';
import LeftNav from '../../layouts/dashboard/LeftNav';
import MainFeed from '../../layouts/dashboard/MainFeed';
import { Tooltip } from '../../components';

const EditBtn = () => {
  return (
    <div className='fixed bottom-4 right-4 '>
      <div className='w-12 h-12 group relative'>
        <Tooltip lable={'Tin nhắn mới'} position='left'>
        <div className='w-12 h-12 rounded-full overflow-hidden bg-[#4b4c4f] hover:bg-[#4b4c4f]/80 cursor-pointer flex items-center 
        justify-center'>
          <i className='bg-img-6 img-icon-pencil filter-icon w-[20px] h-[20px]'></i>
        </div>
        </Tooltip>
      </div>
    </div>
  )
}

function GeneralApp() {
  return (
    <>
      <TopNav />
      <div className='flex flex-row bg-[#18191a] justify-between relative'>
        <LeftNav />
        <MainFeed />
        <RightNav />
        <EditBtn />
      </div>
    </>
  )
}

export default GeneralApp