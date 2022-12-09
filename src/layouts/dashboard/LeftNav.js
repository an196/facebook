import { useState } from 'react';
import { HorizontalLine } from '../../components';
import { Section } from '../../components/dashboard/leftnav';
import { shortlinkCategories, shortlinkSuggest, contentinfo } from '../../data/shortlinks';

function LeftNav() {
  const [isFullCategory, setFullCategory] = useState(false);
  const [isFullShortLink, setFullShortLink] = useState(false);

  return (
    <div className='h-[94vh] max-w-[360px]   '>
      <div className='flex flex-col  h-full w-full overflow-hidden '>
        <div className='text-[#e1e3e8] h-full w-full pr-2 group flex flex-col hover:overflow-y-auto justify-between'>
          <div className='grow'>
            <Section
              items={shortlinkCategories}
              isfullItems={isFullCategory}
              setFullItems={setFullCategory}
              num={5}
              extend={true}
            />
            <HorizontalLine />
            <Section
              items={shortlinkSuggest}
              isfullItems={isFullShortLink}
              setFullItems={setFullShortLink}
              num={5}
              header='Lối tắt của bạn'
              enableEditBtn={true}
              extend={true}
            />
          </div>

          <div className='p-4'>
            <ul className='inline space-x-1'>
              {contentinfo.map((item, idx) => (
                <li className='text-[13px] font-normal inline text-[#b0b3b8]' key={idx}>
                  <a href={item.link} className={` ${item.link !== '#' && 'hover:underline'}`}>
                    {item.content}
                  </a>
                  {idx < contentinfo.length - 1 && (
                    <div className='w-1 h-full inline p-1 relative'>
                      <div className='w-1 h-1 absolute top-0 right-0'>.</div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftNav;
