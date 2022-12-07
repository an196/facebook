import ItemRow from './ItemRow';
import ViewMore from './ViewMore';

function Section({ items, header, enableEditBtn, isfullItems, setFullItems, extend, num, subtitle, headerColor }) {
	return (
		<>
			{header && (
				<div className='max-w-[360px] flex-initial flex flex-col overflow-y-auto px-[12px] mt-[10px]'>
					<span className='flex flex-row justify-between items-center  text-[#d5d7dc] mb-[8px]'>
						<span className={`font-semibold text-[17px]  ${headerColor || 'text-[#b0b3b8]'} `}>{header}</span>
						{enableEditBtn && (
							<div className='group-hover:opacity-100 opacity-0 p-[6px] rounded-[4px] hover:bg-[#444445] text-center h-full leading-none cursor-pointer'>
								<span className='font-normal p-[3px] text-[16px] leading-none  text-[#428feb] '>Chỉnh sửa</span>
							</div>
						)}
					</span>
				</div>
			)}

			<ul className='max-w-[360px] flex flex-initial flex-col p-[12px] pt-0'>
				{!isfullItems
					? items.slice(0, num).map((item, index) => <ItemRow key={index} item={item} subtitle={subtitle} />)
					: items.map((item, index) => <ItemRow key={index} item={item} subtitle={subtitle}/>)}
				{extend && <ViewMore isViewmore={isfullItems} setViewmore={setFullItems} />}
			</ul>
		</>
	);
}

export default Section;
