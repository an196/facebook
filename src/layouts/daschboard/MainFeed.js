import { TopFeed, ActionsFeed } from '../../components/dashboard';

function MainFeed() {
  return (
    <div className='w-[680px] h-[1000px] text-[#b0b3b8] overflow-hidden '>
      <TopFeed/>
      <ActionsFeed/>
    </div>
  )
}

export default MainFeed