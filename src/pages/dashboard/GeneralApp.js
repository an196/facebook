import React from 'react'
import TopNav from '../../layouts/daschboard/TopNav';
import RightNav from '../../layouts/daschboard/RightNav';
import LeftNav from '../../layouts/daschboard/LeftNav';
import MainFeed from '../../layouts/daschboard/MainFeed';

function GeneralApp() {
  return (
    <>
      <TopNav />
      <div className='flex flex-col'>
        <RightNav />
        <LeftNav />
        <MainFeed />
      </div>

    </>
  )
}

export default GeneralApp