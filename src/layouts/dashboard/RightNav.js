import avatar from '../../assets/images/avatar3.jpg';
import { CameraIcon } from '../../components/dashboard'
import { ISearch, IThreedots } from '../../theme/icons/index';

//import dummy data
import { users } from '../../data/dummy';

const actions = [
  { title: 'Phòng họp mặt mới', icon: <CameraIcon /> },
  { title: 'Tìm kiếm theo tên và nhóm', icon: <ISearch /> },
  { title: 'Tùy chọn', icon: <IThreedots /> },
]

const Action = ({ action }) => {
  return (
    <div className='w-[40px] h-[20px] flex justify-center items-center'>
      <div className='w-[30px] h-[30px] flex justify-center items-center hover:bg-[#303031] rounded-full '>
        <div className='w-[20px] h-[16px] mt-[1px]'> {action.icon}</div>
      </div>
    </div>
  )
}

function RightNav() {
  return (
    <div className='w-[360px] h-[100vh] overflow-y-auto p-2 text-[#e1e3e8] flex-initial '>
      <div className='flex flex-row justify-between  mt-[20px] w-full'>
        <span className='leading-[21px] text-[16px] font-medium text-[#e1e3e8]'>Người liên hệ</span>
        <span className='flex flex-row space-x-3 justify-center items-center pt-1'>
          {
            actions.map((action, idx) => (
              <Action action={action} key={idx} />
            ))
          }
        </span>
      </div >
      <div className='w-full space-y-[16px] mt-[16px]'>
        {
          users.map((user, idx) => (
            <div className='flex flex-row space-x-3 items-center ' key={idx}>
              <span className='relative'>
                <img src={avatar} alt='avatar' className='rounded-full' width={36} height={36} />
                <div className='h-[12px] w-[12px] bg-[#31a24c] absolute bottom-0 right-0 rounded-full border-[2px] border-[#18191a]'></div>
              </span>
              <span className='leading-[20px] text-[16px] font-medium'>{user.name}</span>
            </div>
          ))
        }
      </div>
    </div >
  );
}

export default RightNav;
