import { useState } from "react";
import { IDownArrow, IUpArrow } from "../../theme/icons";

const items = [
  { title: 'Bạn bè', style: 'left-nav-icon-1 bg-img-a', type: 'icon' },
  { title: 'Đã lưu', style: 'left-nav-icon-2 bg-img-a', type: 'icon' },
  { title: 'Nhóm', style: 'left-nav-icon-3 bg-img-a', type: 'icon' },
  { title: 'Marketplace', style: 'left-nav-icon-4 bg-img-a', type: 'icon' },
  { title: 'Watch', style: 'left-nav-icon-5 bg-img-a', type: 'icon' },
  { title: 'Chiến dịch gây quỹ', style: 'left-nav-icon-6 bg-img-a', type: 'icon' },
  { title: 'Chơi game', type: 'img', src: 'https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png' },
  { title: 'Đơn đặc hàng và thanh toán', type: 'img', src: 'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png' },
  { title: 'Gần nhât', type: 'img', src: 'https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png' },
  { title: 'Hiến máu', style: 'left-nav-icon-8 bg-img-b', type: 'icon' },
  { title: 'Hoạt động quảng cáo gần đây', type: 'img', src: 'https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png' },
  { title: 'Kỷ niệm', style: 'left-nav-icon-9 bg-img-c', type: 'icon' },
  { title: 'Messenger', style: 'left-nav-icon-10 bg-img-d', type: 'icon' },
  { title: 'Messenger nhí', type: 'img', src: 'https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png' },
  { title: 'Reels', style: 'left-nav-icon-11 bg-img-e', type: 'icon' },
  { title: 'Sự kiện', style: 'left-nav-icon-12 bg-img-f', type: 'icon' },
  { title: 'Sức khỏe cảm xúc', type: 'img', src: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/vxMUnHhu6Do.png' },
  { title: 'Trang', style: 'left-nav-icon-13 bg-img-g', type: 'icon' },
  { title: 'Trình quản lý quảng cáo', type: 'img', src: 'https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png' },
  { title: 'Trung tâm khoa học khí hậu', type: 'img', src: 'https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Jr0q8qKF2-Y.png' },
  { title: 'Úng phó khẩn cấp', type: 'img', src: 'https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/fNPcDZC-2PD.png' },
  { title: 'Vật phẩm kỹ thuật số', style: 'left-nav-icon-14 bg-img-h', type: 'icon' },
  { title: 'Video chơi game', style: 'left-nav-icon-15 bg-img-g', type: 'icon' },
  { title: 'Video trực tiếp', style: 'left-nav-icon-16 bg-img-g', type: 'icon' },
  { title: 'Yêu thích', type: 'img', src: 'https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png' },
]

const ItemRow = ({ item }) => {
  return (
    <li className='flex flex-row space-x-3 items-center pl-[6px] h-[52px] hover:bg-[#7c7c7c5a] rounded-xl transition ease-in-out'>
      <span className='w-[36px] h-[36px] flex-none'>
        {item.type === 'icon' ?
          <i data-visualcompletion='css-img' className={`left-nav-icon ${item.style} `}></i>
          :
          <img src={item.src} width={36} height={36} />
        }
      </span>
      <span className="w-full flex flex-wrap font-medium">{item.title}</span>
    </li>
  )
}

function LeftNav() {
  const [isViewmore, setViewmore] = useState(false);

  const ViewMore = () => {
    return (
      <li className='flex flex-row space-x-3 items-center pl-[6px] h-[52px] hover:bg-[#7c7c7c5a] rounded-xl transition ease-in-out cursor-pointer'
        onClick={() => setViewmore(!isViewmore)}
      >
        <span className='w-[36px] h-[36px] flex-none  p-[8px] rounded-full bg-[#303031]'>
          <span className="">
            {!isViewmore ? <IDownArrow /> : <IUpArrow />}
          </span>
        </span>
        <span className="font-medium w-full">{!isViewmore ? 'Xem Thêm' : 'Ẩn bớt'}</span>
      </li>
    )
  }

  return (
    <div className='text-[#e1e3e8] flex-initial h-[100vh] w-[360px] '>
      <ul className='w-[360px] flex-initial  overflow-y-auto p-[12px] mt-[10px] h-[100vh]'>
        {
          !isViewmore ?
            items.slice(0, 5).map((item, index) => (
              <ItemRow key={index} item={item} />
            ))
            :
            items.map((item, index) => (
              <ItemRow key={index} item={item} />
            ))
        }
        <ViewMore />
      </ul>
    </div>
  );
}

export default LeftNav;
