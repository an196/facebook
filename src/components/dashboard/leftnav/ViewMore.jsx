import { IDownArrow, IUpArrow } from '../../../theme/icons/index';

function ViewMore({ isViewmore, setViewmore }) {
	return (
		<li
			className='flex flex-row space-x-3 items-center pl-[6px] h-[52px] hover:bg-[#7c7c7c5a] rounded-xl cursor-pointer'
			onClick={() => setViewmore(!isViewmore)}
		>
			<span className='w-[36px] h-[36px] flex-none  p-[8px] rounded-full bg-[#303031]'>
				<span className=''>{!isViewmore ? <IDownArrow /> : <IUpArrow />}</span>
			</span>
			<span className='font-medium w-full'>{!isViewmore ? 'Xem Thêm' : 'Ẩn bớt'}</span>
		</li>
	);
}

export default ViewMore;
