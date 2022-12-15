import CommentSection from './CommentSection';
import HeaderFeed from './HeaderFeed';
import ReactionSection from './ReactionSection';

function NewsFeed({news}) {
	return (
		<div className='w-full bg-[#242526] mt-[23px] rounded-xl flex flex-col h-min overscroll-auto'>
			<HeaderFeed news={news} />
			<div className='p-[16px] pt-0'>
				<div className='m-[5px] mt-0 text-[#e1e3e4] font-normal'>
					{news.message}
				</div>
			</div>
			<div >
				<img
					src={news.messageLink.img}
					alt={news.title}
					className='object-cover w-full h-[355px]'
				/>
			</div>
			<div className='h-[78px] w-full bg-[#3a3b3c] p-[2px] px-[12px]'>
				<span className='uppercase text-[#e1e3e8] text-[13px] leading-[17px]'>{news.messageLink.original}</span>
				<span className='w-full flex flex-wrap leading-[22px] text-[18px] text-[#e1e3e8] font-semibold'>
					{news.messageLink.title}
				</span>
				<span className='leading-[20px] text-[14px] text-[#95979b] truncate-news-shared '>
					{ news.messageLink.abbreviation}
				</span>
			</div>
			<ReactionSection news={news}/>

			{/* Comment Section */}
			<CommentSection/>
		</div>
	);
}

export default NewsFeed;
