import { TopFeed, ActionsFeed, FeedsBoard } from '../../components/dashboard';
import { FocusingTypingContext } from '../../contexts/FocusingTypingContext';

function MainFeed() {
	return (
		<div className='flex flex-1 grow justify-center items-center px-8'>
			<div className='w-[680px] h-[calc(100vh-56px)] text-secondaryText clearfix'>
				<TopFeed />
				<ActionsFeed />
				{/* watching typing all feedsboard*/}
				<FocusingTypingContext>
					<FeedsBoard />
				</FocusingTypingContext>
				<div className='h-4'></div>
			</div>
		</div>
	);
}

export default MainFeed;
