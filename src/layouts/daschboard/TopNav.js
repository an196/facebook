import {
  IHome, IWatch, IGroup, IGame, IMarketplace, IMenu, ISearch, IUser, IMessenger, INotification, ILogo
} from '../../theme/icons/index';
import avatar from '../../assets/images/avatar3.jpg'

const menuIcon = [
  { name: 'home', icon: <IHome /> },
  { name: 'watch', icon: <IWatch /> },
  { name: 'group', icon: <IGroup /> },
  { name: 'game', icon: <IGame /> },
  { name: 'matketplace', icon: <IMarketplace /> },
]

function TopNav() {
  return (
    <div className='h-[56px] w-full bg-[#242526] justify-between flex-row flex items-center px-[16px] border-b-[1px] border-[#393a3b]
      !z-1000000 sticky top-0'>
      <div className='flex flex-row space-x-[10px] items-center' id='area1'>
        <span className='w-[45px] h-[45px] m-auto p-auto'>
          <ILogo />
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
          menuIcon.map((item, index )=> (
            <span key={index} className={`flex w-full h-full justify-center items-center ${index === 0 && 'menu-item-active'}`}>
              <span className='menu-item'>
                {item.icon}
              </span>
            </span>
          ))
        }


      </span>
      <span className='flex flex-row justify-between items-center space-x-2' id='area3'>
        <span className='left-icon-item'>
          <IMenu />
        </span>
        <span className='left-icon-item'>
          <IMessenger />
        </span>
        <span className='left-icon-item'>
          <INotification />
        </span>
        <span className=''>
          <img src={avatar} alt='avatar' className='rounded-full' width={40} height={40}/>
        </span>
      </span>
    </div>
  )
}

export default TopNav