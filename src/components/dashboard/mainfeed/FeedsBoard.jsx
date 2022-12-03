import  { useRef } from 'react';
import NewsFeed from "./NewsFeed"

import { newsFeeds} from '../../../data/dummy';

function FeedsBoard() {

  return (
    <div>
        {
            newsFeeds.map((news, idx)=> (
                <NewsFeed key={idx} news={news} />
            ))
        }
       
    </div>
  )
}

export default FeedsBoard