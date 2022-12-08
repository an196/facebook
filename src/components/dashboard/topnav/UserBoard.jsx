import React from 'react';
import avatar from '../../../assets/images/avatar3.jpg';

const items = [
    { title: 'Cài đặt & quyền riêng tư', icon: 'icon-settings' },
    { title: 'Trợ giúp & hỗ trợ', icon: 'icon-questions' },
    { title: 'Màn hình & trợ năng', icon: 'icon-half-moon' },
    { title: 'Đóng góp ý kiến', icon: 'icon-exclamation-message' },
    { title: 'Đăng xuất', icon: 'icon-logout' },
]

const contentinfo = [
    { content: 'Quyền riêng tư', link: 'https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0' },
    { content: 'Điều khoản', link: 'https://www.facebook.com/policies_center/' },
    { content: 'Quảng cáo', link: 'https://www.facebook.com/business' },
    { content: 'Lựa chọn quảng cáo', link: 'https://www.facebook.com/help/568137493302217' },
    { content: 'Cookie', link: 'https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0' },
    { content: 'Xem thêm', link: '#' },
    { content: 'Meta © 2022', link: '#' },
]

const RowItem = ({ item }) => {
    return (
        <div className='h-[52px] px-2 w-full transition duration-300 ease-in-out'>
            <div className='flex flex-row space-x-3 items-center px-2 hover:bg-white/10 h-full rounded-md '>
                <div className='w-9 h-9 bg-white/10  rounded-full p-2'>
                    <i className={`${item.icon} filter-icon-2`}></i>
                </div>
                <div className='flex flex-row w-full'>
                    <span className='text-[15px] font-medium grow'>{item.title}</span>
                    <i className='icon-right-arrow filter-icon'></i>
                </div>
            </div>
        </div>
    )
}

const Top = () => {
    return (
        <div className='pt-2 flex flex-col  m-4 mt-1'>
            <div className='w-[328px] bg-[#242526] relative p-1 rounded-md shadow-2xl flex flex-col'>
                <span className='h-[60px] flex flex-row items-center  px-1 py-2 mb-1
                    hover:bg-white/10 rounded-md'>
                    <div className='w-11 h-11 p-1'>
                        <div className='w-9 h-9 overflow-hidden rounded-full'>
                            <img src={avatar} alt="" width={36} height={36} />
                        </div>
                    </div>
                    <span className='text-[17px] font-semibold p-1'>Ân Lê</span>
                </span>
                <div className=' h-[1px] bg-[#393a3b] mx-2'></div>
                <span className='px-2 py-1  hover:bg-white/10 rounded-md w-full mt-1'>
                    <span className='text-[#4599ff] text-[15px] font-medium p-2'>Xem tất cả trang các nhân</span>
                </span>
            </div>
        </div>
    )
}

const Bottom = () => {
    return (
        <div className='p-4'>
            <ul className='inline space-x-1'>
                {contentinfo.map((item, idx) => (
                    <li className='text-[13px] font-normal inline text-[#b0b3b8]'>
                        <a href={item.link} className={` ${item.link !== '#' && 'hover:underline'}`}>{item.content}</a>
                        {
                            idx !== contentinfo.length &&
                            <div className='w-1 h-full inline p-1 relative'>
                                <div className='w-1 h-1 absolute top-0 right-0' >.</div>
                            </div>
                        }

                    </li>
                ))}
            </ul>
        </div>
    )
}
function UserBoard() {
    return (
        <div className='absolute right-0 top-12 z-40 flex flex-col w-[360px] bg-[#242526] text-white  flex-initial rounded-md'>
            <Top />
            <div className='w-full'>
                {items.map((item, idx) => <RowItem key={idx} item={item} />)}
            </div>
            <Bottom />
        </div>
    )
}

export default UserBoard;