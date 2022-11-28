import avatar from '../../../assets/images/avatar3.jpg';

const actions = [
	{ name: 'Video trực tiếp', icon: 'bg-img-1 action-feed-icon-1' },
	{ name: 'Ảnh/Video', icon: 'bg-img-1 action-feed-icon-2' },
	{ name: 'Feeling/activity', icon: 'bg-img-1 action-feed-icon-3' },
];

const Action = ({action}) => {
	return (
		<span className='w-full flex flex-row justify-center items-center'>
			<div style={{ width: '24px', height: '24px', marginRight: '8px' }}>
				<i data-visualcompletion='css-img' className={`${action.icon}`}></i>
			</div>
			<span>{action.name}</span>
		</span>
	);
};

function ActionsFeed() {
	return (
		<div
			className='w-full bg-[#242526] mt-[23px] rounded-xl'
			style={{ height: '123px', paddingTop: '12px', paddingBottom: '10px', paddingLeft: '16px', paddingRight: '16px' }}
		>
			<div className='flex flex-row space-x-4'>
				<img src={avatar} className='w-[40px] h-[40px] rounded-full mr-[8px]' />
				<div className=' bg-[#3a3b3c] text-[#a5b3b8] h-[40px] w-full  rounded-full flex items-center p-[8px]'>
					<form className='h-[23px] bg-inherit rounded-full w-full' style={{ margin: '10px' }}>
						<input className='bg-inherit w-full outline-none' placeholder='Ân ơi, bạn đang nghĩ gì thế?' />
					</form>
				</div>
			</div>
			<div style={{ height: '1px', backgroundColor: '#393a3b', marginTop: '12px' }}></div>
			<div className='flex flex-row h-[40px]' style={{padding: '8px', marginTop: '8px'}}>
			{actions.map((action, index)=> (
				<Action key={index} action={action}/>
			))}
			</div>
		</div>
	);
}

export default ActionsFeed;
