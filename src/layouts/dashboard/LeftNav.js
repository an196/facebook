import { useState } from 'react';
import { Contact, HorizontalLine } from '../../components';
import { Section } from '../../components/dashboard/leftnav';
import { shortlinkCategories, shortlinkSuggest } from '../../data/shortlinks';

function LeftNav() {
  const [isFullCategory, setFullCategory] = useState(false);
  const [isFullShortLink, setFullShortLink] = useState(false);

  return (
    <div className='h-[calc(100vh-56px)] w-[360px] flex flex-col visible'>
      <div className='flex h-full visible overflow-hidden hover:overflow-y-auto '>
        <div className='text-[#e1e3e8] h-full w-full  group flex flex-col justify-between'>
          <div className='w-[360px] block'>
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
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default LeftNav;
