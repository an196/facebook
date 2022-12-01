import { useState } from "react";
import { HorizontalLine } from "../../components";
import { Section } from "../../components/dashboard/leftnav";
import { shortlinkCategories, shortlinkSuggest } from "../../data/shortlinks";

function LeftNav() {
  const [ isFullCategory, setFullCategory] = useState(false);
  const [ isFullShortLink, setFullShortLink] = useState(false);

  return (
    <div className='text-[#e1e3e8] flex-initial h-[100vh] w-[360px]  overflow-y-auto'>
      <Section items={shortlinkCategories} isfullItems={isFullCategory} setFullItems={setFullCategory} num={5}/>
      <HorizontalLine />
      <div className='w-[360px] flex-initial  overflow-y-auto px-[12px] mt-[10px]'>
        <span className='flex flex-row justify-between items-center  text-[#d5d7dc] mb-[12px]'>
          <span className='font-semibold text-[18px] text-[#b0b3b8]'>Lối tắt của bạn</span>
          <div className=' p-[6px] rounded-[4px] hover:bg-[#444445] text-center h-full leading-none cursor-pointer'>
            <span className='font-normal p-[3px] text-[16px] leading-none  text-[#428feb] '>Chỉnh sửa</span>
          </div>
        </span>
      </div>
      <Section items={shortlinkSuggest} isfullItems={isFullShortLink} setFullItems={setFullShortLink} num={5}/>
    </div>
  );
}

export default LeftNav;
