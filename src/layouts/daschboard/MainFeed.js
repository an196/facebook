import { TopFeed, ActionsFeed, NewsFeed } from '../../components/dashboard';

function MainFeed() {
  return (
    <div className='flex flex-1 grow justify-center items-center'>
      <div className='w-[680px] h-[100vh] overflow-y-auto text-[#b0b3b8] overflow-hidden '>
        <TopFeed />
        <ActionsFeed />
        <NewsFeed />
      </div>
    </div>
  )
}

export default MainFeed