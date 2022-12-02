import avatar from '../../../assets/images/avatar3.jpg';

const userComments = [
    {
        name: 'Ng.Trần Lê Dương',
        img: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/315418083_177437744872747_8232011748455814230_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=LlQGPtbI4PMAX-UDOa7&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfCIUqiFktpnvJHPEekIuXcQvvp1XIGfJsNvuZqcsl9qiA&oe=638F577F',
        timeComment: '9 giờ',
        content: 'Vào rạng sáng nay, Apple tiếp tục phát hành bản beta thứ tư của iOS 16.2 và iPadOS 16.2 cho cả nhà phát triển và người dùng đăng ký tham gia chương trình thử nghiệm công khai. Với bản cập nhật này, phần lớn những thay đổi sẽ tập',
    },
    {
        name: 'Ng.Trần Lê Dương',
        img: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/315418083_177437744872747_8232011748455814230_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=LlQGPtbI4PMAX-UDOa7&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfCIUqiFktpnvJHPEekIuXcQvvp1XIGfJsNvuZqcsl9qiA&oe=638F577F',
        timeComment: '9 giờ',
        content: 'Vào rạng sáng nay, Apple tiếp tục phát hành bản beta thứ tư của iOS 16.2 và iPadOS 16.2 cho cả nhà phát triển và người dùng đăng ký tham gia chương trình thử nghiệm công khai. Với bản cập nhật này, phần lớn những thay đổi sẽ tập',
    },
]

function UserComment({comment}) {
	return (
		<div className='flex flex-row mt-[8px] group relative'>
			<div className='w-[32px] h-[32px] rounded-full flex-none overflow-hidden mr-[6px]'>
				<img src={avatar} alt='avatar' />
			</div>
			<div className='flex flex-col'>
				<div className='flex flex-row items-center'>
					<span className='bg-[#3a3b3c] text-[#e4e6eb]  flex flex-col rounded-xl px-[12px] py-[8px] mr-[6px]'>
						<span className='text-[13px]  font-semibold cursor-pointer'>{comment.name}</span>
						<p className='text-[15px] font-normal'>
                            {comment.content}
						</p>
					</span>
					<div
						className='w-[40px] h-[40px] p-[17px] flex items-center justify-center hover:bg-[#3a3b3c] cursor-pointer hover:opacity-60 
                rounded-full'
					>
						<i className='bg-img-4 img-icon-threedots flex-none filter-icon group-hover:opacity-100 opacity-0'></i>
					</div>
				</div>
				<div className='w-full space-x-[16px] ml-[8px]'>
					<span className='text-[12px] font-bold hover:underline cursor-pointer'>Thích</span>
					<span className='text-[12px] font-bold hover:underline cursor-pointer'>Phản hồi</span>
					<span className='text-[12px] font-normal hover:underline cursor-pointer'>{comment.timeComment}</span>
				</div>
			</div>
            {
                comment?.reply &&   <div className='absolute w-[2px] bg-[#3a3b3c] h-full left-[16px] top-[16px]'> </div>
            }
		</div>
	);
}

export default UserComment;
