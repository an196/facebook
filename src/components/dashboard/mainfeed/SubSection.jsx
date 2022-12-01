function SubSection({ subSection }) {
  return (
    <div className={`w-[210px] h-[60px]  p-[4px]   ${subSection.current && 'menu-item-active'}`}>
			<span
				className={`w-full h-full  flex justify-center items-center space-x-2 ${
					!subSection.current && 'hover:bg-[#303031] rounded-xl'
				}`}
			>
				<div className='w-[20px] h-[20px]'>{subSection.icon}</div>
				<div> {subSection.name}</div>
			</span>
		</div>
  )
}

export default SubSection