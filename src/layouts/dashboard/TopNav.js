import { useState } from 'react';
import {
  IHome, IWatch, IGroup, IGame, IMarketplace, IMenu, ISearch, IUser, IMessenger, INotification, ILogo2
} from '../../theme/icons/index';
import avatar from '../../assets/images/avatar3.jpg'
import {
  Tooltip,
} from 'react-tippy';
import { SearchBoard } from '../../components/dashboard/leftnav';
import { MenuBoard, ChatBoard, NotificationBoard } from '../../components/dashboard/topnav';


const menuIcon = [
  { name: 'home', title: 'Trang chủ', icon: <IHome /> },
  { name: 'watch', title: 'Watch', icon: <IWatch /> },
  { name: 'matketplace', title: 'Marketplace', icon: <IMarketplace /> },
  { name: 'group', title: 'Nhóm', icon: <IGroup /> },
  { name: 'game', title: 'Trò chơi', icon: <IGame /> },
]

const leftIcons = [
  { name: 'menu', icon: <IMenu />, board: <MenuBoard/> },
  { name: 'messenger', icon: <IMessenger />, board: <ChatBoard/> },
  { name: 'notification', icon: <INotification />, board: <NotificationBoard/> },
]

const MiddleButton = ({ item, index }) => {
  return (
    <span className={`${index === 0 && 'menu-item-active'} flex w-full h-full justify-center items-center cursor-pointer 
    `}>
      <Tooltip
        // options
        title={item.name}
      >
        <span className={`w-[130px] flex justify-center items-center h-[55px] hover:bg-[#303031] rounded-xl`} >
          <span className='menu-item'>
            {item.icon}
          </span>
        </span>
      </Tooltip>
      {item.board}
    </span>
  )
}

const RightBtn = ({ idx, icon, num }) => {
  const [show ,setShow] = useState(false);

  return (
    <Tooltip key={idx} title={icon.name}>
      <span className='left-icon-item hover:bg-[#525151] flex relative' onClick={()=> setShow(!show)}>
        <div className='h-[20px] w-[20px] '>
          {icon.icon}
        </div>
        {
          icon.name === 'notification' &&
          <div className='absolute top-0 right-0 w-[19px] h-[19px] bg-[#e41e3f] rounded-full flex items-center justify-center 
            translate-x-[25%] translate-y-[-25%]'>
            <span className='text-[12px] font-bold'>{num || 2}</span>
          </div>
        }
      </span>
      <>{show && icon.board}</>
    </Tooltip>
  )
}

function TopNav() {
  const [showSearchBoard, setShowSearchBoard] = useState(false);
  const [fisrtload, setFirstload] = useState(true);

  return (
    <div className='h-[56px] w-full bg-[#242526] justify-between flex-row flex items-center px-[16px] border-b-[1px] border-[#393a3b]
      !z-1000000 sticky top-0'>
      <div className='flex flex-row items-center w-[360px] relative' id='area1'>
        <span className='w-[45px] h-[45px] p-auto'>
          <ILogo2 />
        </span>
        <span className='w-[240px] h-[40px] bg-[#3a3b3c] text-[#a5b3b8] flex flex-row p-[12px] items-center rounded-full overflow-hidden z-20'>
          {
            (<span className={`h-[18px] w-[18px] cursor-pointer ${showSearchBoard ? 'animate-move-left-2' : (!fisrtload && 'animate-move-right')} `}>
              <ISearch />
            </span>)
          }
          <input className={`px-[8px] pt-[7px] pb-[9px] bg-inherit outline-none 
            ${showSearchBoard ? 'animate-move-left' : (!fisrtload && 'animate-move-right')}`}
            placeholder='Tìm kiếm trên Facebook'
            onFocus={() => { setShowSearchBoard(true); setFirstload(false) }}
          />
        </span>
        {showSearchBoard && <SearchBoard setShowSearchBoard={setShowSearchBoard} />}
      </div>
      <span className='w-[680px] flex flex-row h-full justify-around items-center text-[#b0b3b8]' id='area2'>
        {
          menuIcon.map((item, index) => (
            <MiddleButton key={index} item={item} index={index} />
          ))
        }
      </span>
      <span className='flex flex-row justify-end items-center space-x-2 w-[360px] cursor-pointer relative' id='area3'>
        {
          leftIcons.map((icon, idx) => (
            <RightBtn key={idx} idx={idx} icon={icon} />
          ))
        }
        <span className='cursor-pointer'>
          <img src={avatar} alt='avatar' className='rounded-full' width={40} height={40} />
        </span>
      </span>
    </div>
  )
}

export default TopNav