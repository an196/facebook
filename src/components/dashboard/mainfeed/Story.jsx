import avatar from '../../../assets/images/avatar3.jpg';
import storyImage from '../../../assets/images/story.png';

function Story() {
	return (
		<div className='relative w-[112.5px] h-[200px] float-left flex-none cursor-pointer group'>
			<div className='relative rounded-xl overflow-hidden '>
				<img
					className='group-hover:scale-105 transition-all duration-500 ease-linear w-[112.5px] h-[200px]'
					src={storyImage}
					width={112.5}
					height={200}
				/>
			</div>
			<div className='absolute w-[64px] h-[64px] top-0 p-[12px]'>
				<div className=' w-[40px] h-[40px] rounded-full overflow-hidden border-[4px] border-accent'>
					<img src={avatar} width={40} height={40} />
				</div>
			</div>
			<div className='absolute bottom-0 w-full h-auto p-[12px] '>
				<div className='w-full text-[14px] leading-[16px] font-semibold tracking-tight text-[#fff]  break-normal'>
					Huy Đức Lê
				</div>
			</div>
			<div className='absolute w-full h-full group-hover:bg-black/10 top-0 left-0'></div>
		</div>
	);
}

export default Story;
