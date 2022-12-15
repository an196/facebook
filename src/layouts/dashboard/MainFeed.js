import { TopFeed, ActionsFeed, FeedsBoard } from '../../components/dashboard';

function MainFeed() {
  return (
    <div className='flex flex-1 grow justify-center items-center'>
      <div className='w-[680px] h-[calc(100vh-56px)] text-secondaryText clearfix'>
        <TopFeed />
        <ActionsFeed />
        <FeedsBoard />
        <div className='h-4'></div>
      </div>
    </div>
  )
}

export default MainFeed