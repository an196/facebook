import  { useRef } from 'react';
import NewsFeed from "./NewsFeed"

import { friendFeeds, newsFeeds} from '../../../data/dummy';
import FriendFeed from './FriendFeed';

function FeedsBoard() {

  return (
    <div>
        {
            newsFeeds.map((news, idx)=> (
                <NewsFeed key={idx} news={news} />
            ))
        }
        <FriendFeed news={friendFeeds[0]}/>
    </div>
  )
}

export default FeedsBoard