import {
  IHome, IWatch, IGroup, IGame, IMarketplace, IMenu, ISearch, IUser, IMessenger, INotification, ILogo2
} from '../../theme/icons/index';
import avatar from '../../assets/images/avatar3.jpg'
import { Tooltip } from '../../components';

const menuIcon = [
  { name: 'home', title: 'Trang chủ', icon: <IHome /> },
  { name: 'watch', title: 'Watch', icon: <IWatch /> },
  { name: 'matketplace', title: 'Marketplace', icon: <IMarketplace /> },
  { name: 'group', title: 'Nhóm', icon: <IGroup /> },
  { name: 'game', title: 'Trò chơi', icon: <IGame /> },
]

const leftIcons = [
  { name: 'menu', icon: <IMenu /> },
  { name: 'messenger', icon: <IMessenger /> },
  { name: 'notification', icon: <INotification /> },
]

function TopNav() {
  return (
    <div className='h-[56px] w-full bg-[#242526] justify-between flex-row flex items-center px-[16px] border-b-[1px] border-[#393a3b]
      !z-1000000 sticky top-0'>
      <div className='flex flex-row items-center w-[360px]' id='area1'>
        <span className='w-[45px] h-[45px] p-auto'>
          <ILogo2 />
        </span>
        <span className='w-[240px] h-[40px] bg-[#3a3b3c] text-[#a5b3b8] flex flex-row p-[12px] items-center rounded-full '>
          <span className='h-[18px] w-[18px]'>
            <ISearch />
          </span>
          <input className='px-[8px] pt-[7px] pb-[9px] bg-inherit outline-none' placeholder='Tìm kiếm trên Facebook' />
        </span>
      </div>
      <span className='w-[680px] flex flex-row h-full justify-around items-center text-[#b0b3b8]' id='area2'>
        {
          menuIcon.map((item, index) => (
            <span key={index} className={`${index === 0 && 'menu-item-active'} flex w-full h-full justify-center items-center cursor-pointer 
            `}>
              <Tooltip
                // options
                message={item.title}
                position="bottom"
                distance={55}
              >
                <span className={`w-[130px] flex justify-center items-center h-full hover:bg-[#303031] rounded-xl`} >
                  <span className='menu-item'>
                    {item.icon}
                  </span>
                </span>
              </Tooltip>
            </span>
          ))
        }
      </span>
      <span className='flex flex-row justify-end items-center space-x-2 w-[360px]' id='area3'>
        {
          leftIcons.map((icon, idx) => (
            <Tooltip key={idx} message={icon.name} position="bottom" distance={55}>
              <span className='left-icon-item hover:bg-[#525151]' >
                {icon.icon}
              </span>
            </Tooltip>
          ))
        }
        <span className=''>
          <img src={avatar} alt='avatar' className='rounded-full' width={40} height={40} />
        </span>
      </span>
    </div>
  )
}

export default TopNav