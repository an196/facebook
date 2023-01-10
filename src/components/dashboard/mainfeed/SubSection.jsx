function SubSection({ subSection, activeTab, setActiveTab }) {
	return (
		<div
			className={`flex-1 h-[60px]  p-[4px] cursor-pointer ${subSection.name === activeTab && 'menu-item-active'}`}
			onClick={() => setActiveTab(subSection.name)}
		>
			<span
				className={`w-full h-full  flex justify-center items-center space-x-2 ${
					subSection.name !== activeTab && 'hover:bg-[#303031] rounded-xl'
				}`}
			>
				<div className='w-[20px] h-[20px]'>{subSection.icon}</div>
				<div className='text-[15px] font-semibold'> {subSection.label}</div>
			</span>
		</div>
	);
}

export default SubSection;
