import React from 'react'
import { INews, IReels, ICameraPlus } from '../../theme/icons'



const LSubSec = [
  { name: 'Tin', icon: <INews /> },
  { name: 'Reels', icon: <IReels /> },
  { name: 'Phòng họp mặt', icon: <ICameraPlus /> },
]

const SubSection = ({ subSection }) => {
  return (
    <div className='w-[210px] h-[60px] justify-center items-center flex space-x-2'>
      <div className='w-[20px] h-[20px]'>
        {subSection.icon}
      </div>
      <div> {subSection.name}</div>
    </div>
  )
}

function MainFeed() {
  return (
    <div className='w-[680px] h-[1000px] text-[#b0b3b8]'>
      <div className='w-full h-[301px] bg-[#242526] mt-[23px] rounded-xl'>
        <div className='flex flex-row h-[60px] border-b-[1px] border-[#393a3b]'>
          {
            LSubSec.map((subsec, index) => (
              <SubSection subSection={subsec} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default MainFeed