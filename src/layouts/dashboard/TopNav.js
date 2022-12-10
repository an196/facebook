import { useRef, useState } from 'react';
import {
  IHome, IWatch, IGroup, IGame, IMarketplace, IMenu, ISearch, IUser, IMessenger, INotification, ILogo2, ILogo3
} from '../../theme/icons/index';
import avatar from '../../assets/images/avatar3.jpg'
import { SearchBoard } from '../../components/dashboard/leftnav';
import { MenuBoard, ChatBoard, NotificationBoard, UserBoard } from '../../components/dashboard/topnav';
import { Tooltip } from '../../components';
import { useBoardContext } from '../../contexts/BoardContext';
import board from '../../constant/board';

const menuIcon = [
  { name: 'home', title: 'Trang chủ', icon: <IHome /> },
  { name: 'watch', title: 'Watch', icon: <IWatch /> },
  { name: 'matketplace', title: 'Marketplace', icon: <IMarketplace /> },
  { name: 'group', title: 'Nhóm', icon: <IGroup /> },
  { name: 'game', title: 'Trò chơi', icon: <IGame /> },
]

const rightIcons = [
  { name: board.menu, icon: <IMenu />, board: <MenuBoard /> },
  { name: board.messenger, icon: <IMessenger />, board: <ChatBoard /> },
  { name: board.notification, icon: <INotification />, board: <NotificationBoard /> },
  { name: board.user, img: avatar, board: <UserBoard /> },
]

const MiddleButton = ({ item, index }) => {
  return (
    <span className={`${index === 0 && 'menu-item-active'} flex w-full h-full justify-center items-center cursor-pointer relative group
    `}>
      <div className='h-full'>
      <span className={`w-[130px] flex justify-center items-center h-[52px] hover:bg-[#303031] rounded-xl`} >
        <span className='menu-item'>
          {item.icon}
        </span>
      </span>
      </div>
      {item.board}
      <Tooltip lable={item.name} />
    </span>
  )
}

const RightBtn = ({ icon, num }) => {
  let btnRef = useRef();
  const { currentBoard, setCurrentBoard } = useBoardContext();

  const handleClick = (icon) => {
    setCurrentBoard(icon.name);
  }

  return (
    <div>
      {
        icon?.icon ?
          <div className={`left-icon-item hover:bg-[#525151] flex relative group ${currentBoard === icon.name ? 'bg-[#2d88ff]/20' : ''}`}
            onClick={() => handleClick(icon)}
            ref={btnRef}
          >
            <div className={`h-[20px] w-[20px] ${currentBoard === icon.name ? 'text-[#2d88ff]' : ''}`}>
              {icon?.icon}
            </div>
            {
              icon.name === 'notification' &&
              <div className='absolute top-0 right-0 w-[19px] h-[19px] bg-[#e41e3f] rounded-full flex items-center justify-center 
            translate-x-[25%] translate-y-[-25%]'>
                <span className='text-[12px] font-bold'>{num || 2}</span>
              </div>
            }
            <Tooltip lable={icon.name} />
          </div> :
          <span className='cursor-pointer relative group'
            onClick={() => handleClick(icon)}
          >
            <img src={avatar} alt='avatar' className='rounded-full' width={40} height={40} />
            <Tooltip lable={icon.name} />
          </span>
      }

      <>{currentBoard === icon.name && icon?.board}</>
    </div>
  )
}

function TopNav() {
  const [showSearchBoard, setShowSearchBoard] = useState(false);
  const [fisrtload, setFirstload] = useState(true);

  return (
    <div className='h-[56px] w-full bg-[#242526] justify-between flex-row flex items-center px-[16px] border-b-[1px] border-[#393a3b]
      sticky top-0 z-10'>
      <div className='flex flex-row items-center w-[360px] relative' id='area1'>
        <span className='w-[40px] h-[40px] p-auto filt-logo mr-2'>
          <ILogo3 />
        </span>
        <span className='w-[240px] h-[40px] bg-[#3a3b3c] text-[#a5b3b8] flex flex-row p-[12px] items-center rounded-full overflow-hidden z-20'
          onBlur={() => setShowSearchBoard(false)}
        >
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
          rightIcons?.map((icon, idx) => (
            <RightBtn key={idx} icon={icon} />
          ))
        }
      </span>
    </div>
  )
}

export default TopNav