import { ISearch } from '../../../theme/icons/index';

function SearchInput() {
	return (
		<span className='w-[240px] h-[40px] bg-[#3a3b3c] text-[#a5b3b8] flex flex-row p-[12px] items-center rounded-full'>
			<span className='h-[18px] w-[18px]'>
				<ISearch />
			</span>
			<input className='px-[8px] pt-[7px] pb-[9px] bg-inherit outline-none' placeholder='Tìm kiếm trên Facebook' />
		</span>
	);
}

export default SearchInput;
