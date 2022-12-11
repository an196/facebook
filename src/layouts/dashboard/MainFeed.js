import { TopFeed, ActionsFeed, FeedsBoard } from '../../components/dashboard';

function MainFeed() {
  return (
    <div className='flex flex-1 grow justify-center items-center overflow-y-auto  hidden-scrollbar'>
      <div className='w-[680px] h-[calc(100vh-56px)] text-[#b0b3b8] clearfix'>
        <TopFeed />
        <ActionsFeed />
        <FeedsBoard />
      </div>
    </div>
  )
}

export default MainFeed