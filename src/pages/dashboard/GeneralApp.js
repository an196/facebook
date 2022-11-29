import React from 'react'
import TopNav from '../../layouts/dashboard/TopNav';
import RightNav from '../../layouts/dashboard/RightNav';
import LeftNav from '../../layouts/dashboard/LeftNav';
import MainFeed from '../../layouts/dashboard/MainFeed';

function GeneralApp() {
  return (
    <>
      <TopNav />
      <div className='flex flex-row bg-[#18191a] justify-between relative'>
        <LeftNav />
        <MainFeed />
        <RightNav />
      </div>

    </>
  )
}

export default GeneralApp