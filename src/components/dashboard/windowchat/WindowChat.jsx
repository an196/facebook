import React from 'react'
import { useState } from 'react'
import avatar from '../../../assets/images/avatar3.jpg'
import { ICanCel2, IDownArrow2, } from '../../../theme/icons'
import { IEmotion, IGIF, IHappyLable, IImage, IPlusCircle, IThumbUp, ICamera, IHLine, IPhone, ICanCel } from '../../../theme/icons/windowchat'
import HorizontalLine from '../../HorizontalLine'
import Tooltip from '../../Tooltip'



const HeaderChat = ({ focus}) => {

  const topicons = [
    { icon: <IPhone active={focus}/>, title: 'Bất đầu gọi thoại' },
    { icon: <ICamera active={focus}/>, title: 'Bắt đầu gọi video' },
    { icon: <IHLine active={focus}/>, title: 'Thu nhỏ đoạn chat' },
    { icon: <ICanCel active={focus}/>, title: 'Đóng đoạn chat' },
  ]

  const IconButton = ({ icon }) => {
    return (
      <Tooltip lable={icon.title} position={'top'}>
        <div className='w-[24px] h-[24px] hover:bg-white/10 rounded-full cursor-pointer '>
          {icon.icon}
        </div>
      </Tooltip>
    )
  }

  return (
    <div className='flex  flex-row p-2 h-12 items-center justify-between '>
      <Tooltip lable={'Cài đặt chat'} position='top'>
        <div className='flex flex-row items-center space-x-2 relative group'>
          <span className='relative flex-none'>
            <img src={avatar} alt='avatar' className='rounded-full' width={32} height={32} />
            <div className='h-[14px] w-[14px] bg-[#31a24c] absolute bottom-0 right-0 rounded-full border-[2px] border-[#18191a]'></div>
          </span>
          <div className='flex flex-col space-y-1 '>
            <span className='text-primaryText font-semibold leading-3 text-[15px]'>Trần Mạnh Hùng</span>
            <span className='text-secondaryText font-normal leading-3 text-[13px]'>Đang hoạt động</span>
          </div>
          <div className='h-[16px] w-[16px]'><IDownArrow2 /></div>
          <div className='absolute top-0 left-0 w-[calc(100%+10px)] h-11 group-hover:bg-white/10 rounded-md -translate-x-4 
          -translate-y-[6px] cursor-pointer'></div>
        </div>
      </Tooltip>
      <div className='flex flex-row '>
        {
          topicons.map((icon, idx) => (
            <IconButton icon={icon} key={idx} />
          ))
        }
      </div>
    </div>
  )
}

const NotChat = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex mt-10 mb-3'>
        <span className='relative flex-none'>
          <img src={avatar} alt='avatar' className='rounded-full' width={60} height={60} />
          <div className='h-[14px] w-[14px] bg-[#31a24c] absolute bottom-0 right-0 rounded-full border-[2px] border-[#18191a]'></div>
        </span>
      </div>
      <span className='text-[15px] font-semibold text-primaryText mb-2 leading-5'>Trần Mạnh Hùng</span>
      <span className='text-[13px] font-normal text-secondaryText mb-1 leading-4'>Facebook</span>
      <span className='text-[13px] font-normal text-secondaryText mb-1 leading-4'>Các bạn là bạn bè trên Facebook</span>
      <span className='text-[13px] font-normal text-secondaryText mb-1 leading-4'>Sống tại Hồ Chí Minh</span>

    </div>
  )
}

const ContentChat = () => {
  return (
    <div className='flex grow w-full '>
      <div className='block h-full w-full overflow-y-scroll'>
        <div>
          <NotChat />
        </div>
      </div>
    </div>
  )
}

const BottomChat = ({ focus, setFocus }) => {
  const iconButtons = [
    { icon: <IPlusCircle active={focus} />, title: 'Mở hành động khác' },
    { icon: <IImage active={focus} />, title: 'Đính kèm file' },
    { icon: <IHappyLable active={focus} />, title: 'Chọn nhãn dán' },
    { icon: <IGIF active={focus} />, title: 'Chọn file gif' },
  ]

  const IconButton = ({ icon }) => {
    return (
      <Tooltip lable={icon.title} position={'top'}>
        <div className='w-[28px] h-[28px] hover:bg-white/10 rounded-full cursor-pointer text-[white/10] p-1'>
          {icon.icon}
        </div>
      </Tooltip>
    )
  }
  return (
    <div className='flex h-[60px]  flex-row items-center py-3'>
      <div className='flex flex-row space-x-1 px-1 ml-1'>
        {
          iconButtons.map((icon, idx) => (
            <IconButton icon={icon} key={idx} />
          ))
        }
      </div>
      <div className='w-[148px] bg-commentBackground h-9 flex flex-none items-center rounded-full ml-1'>
        <div className='w-full flex flex-row justify-between items-center my-2 mx-3'>
          <div className='w-[104px] text-[15px] text-secondaryText outline-none badge'
            contentEditable='true'
            id='editor-chat'
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          ></div>
          <div className='cursor-pointer'><IEmotion active={focus}/></div>
        </div>
      </div>
      <Tooltip lable={'Gửi lượt thích'} position='top'>
        <div className='w-9 h-9 p-2 mx-1 cursor-pointer relative group'>
          <IThumbUp active={focus}/>
          <div className='absolute top-0 left-0 w-full h-full group-hover:bg-white/10 rounded-full'></div>
        </div>
      </Tooltip>
    </div>
  )
}

function WindowChat() {
  const [focus, setFocus] = useState();

  return (
    <div className='w-[338px] h-[455px] rounded-t-lg clearfix float-right border-t-[1px] border-[#393a3b] mr-4 shadow-sm'>
      <div className='w-full h-full bg-messageCardBackground flex-col flex'>
        <HeaderChat focus={focus}/>
        <HorizontalLine />
        <div className='flex flex-col justify-between h-full'>
          <ContentChat />
          <BottomChat setFocus={setFocus} focus={focus} />
        </div>
      </div>
    </div>
  )
}

export default WindowChat