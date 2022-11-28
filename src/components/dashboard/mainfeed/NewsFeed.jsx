import avatar from '../../../assets/images/avatar1.png';
import { IEarth, IThreedots } from '../../../theme/icons/index';

function NewsFeed() {
	const truncate = (des) => {
		return des.slice(0, 97) + '...';
	};

	return (
		<div className='w-full bg-[#242526] mt-[23px] rounded-xl '>
			<div className='pt-[12px] p-[16px] pb-0 flex flex-row mb-[12px]'>
				<div className='w-[40px] h-[40px] rounded-full overflow-hidden mr-4'>
					<img src={avatar} width={40} height={40} />
				</div>
				<div className='flex flex-col grow'>
					<span className='h-[20px]'>
						<strong className='text-[16px] text-[##efefef]'>Techrum.vn</strong>
					</span>
					<div className='flex flex-row items-center space-x-1 mt-[4px]'>
						<span className='text-[12px] text-[##efefef]'>1 giờ</span>
						<span className='-mt-[8px]'> . </span>
						<span className='w-[12px] h-[12px] '>
							<IEarth />
						</span>
					</div>
				</div>
				<div className='w-[36px] h-[36px] flex items-center justify-center '>
					<div className='w-[20px] h-[20px]'>
						<IThreedots />
					</div>
				</div>
			</div>
			<div className='p-[16px] pt-0'>
				<div className='m-[5px] mt-0 text-[#e1e3e4] font-normal'>
					Lightning tụt hậu quá rồi, đã đến lúc để Apple chuyển sang cổng sạc USB-C cho kịp với thế giới 👍
				</div>
			</div>
			<div>
				<img
					src='https://external.fsgn5-9.fna.fbcdn.net/emg1/v/t13/11927337956530456587?url=https%3A%2F%2Fphoto.techrum.vn%2Fimages%2F2022%2F11%2F28%2Fthong-tin-moi-nhat-ve-iphone-su-dung-cong-usb-c-TECHRUM-covera507d3a61dd8ac98.jpg&fb_obo=1&utld=techrum.vn&stp=c0.5000x0.5000f_dst-jpg_flffffff_p1280x668_q75&ccb=13-1&oh=06_AbGcgaORz2aUnpV6SCJifEx-HrldJwmmraphh1m6X1kL0w&oe=638647BE&_nc_sid=aeaded'
					alt='image'
				/>
			</div>
			<div className='h-[78px] w-full bg-[#3a3b3c] p-[2px] px-[12px]'>
				<span className='uppercase text-[#95979b] text-[13px] leading-[17px]'>techrum.vn</span>
				<span className='w-full flex flex-wrap leading-[22px] text-[18px] text-[#d2d4d8] font-semibold'>
					Thông tin mới nhất về mẫu iPhone sử dụng cổng sạc "USB-C" của Apple
				</span>
				<span className='leading-[20px] text-[14px] text-[#95979b]'>
					{truncate(
						'Trước đây, việc iPhone chuyển sang sử dụng cổng sạc USB-C dường như là "một điều không thể sảy ra" nhưng theo bối cảnh hiện tại cùng với sức ép từ Liên minh châu Âu thì điều đó lại đang dần trở thành hiện thực, mặc dù sẽ',
					)}
				</span>
			</div>
		</div>
	);
}

export default NewsFeed;
