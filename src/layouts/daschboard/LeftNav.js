import React from 'react';
import '../../styles/leftNav.css';

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

function LeftNav() {
  return (
    <div className='text-[#e1e3e8] overflow-y-auto p-[18px] mt-[10px]'>
      <ul className='w-[344px]'>
        {items.map((item, index) => (
          <li className='flex flex-row space-x-3 items-center h-[52px]'>
            <span className='w-[36px] h-[36px]'>
              {item.type === 'icon' ?
                <i data-visualcompletion='css-img' className={`left-nav-icon ${item.style} `}></i>
                :
                <img src={item.src} width={36} height={36} />
              }
            </span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftNav;
