import { TopFeed, ActionsFeed, NewsFeed } from '../../components/dashboard';

function MainFeed() {
  return (
    <div className='w-[680px] text-[#b0b3b8] overflow-hidden '>
      <TopFeed/>
      <ActionsFeed/>
      <NewsFeed/>
    </div>
  )
}

export default MainFeed