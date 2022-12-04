import { useState } from "react";
import { HorizontalLine } from "../../components";
import { Section } from "../../components/dashboard/leftnav";
import { shortlinkCategories, shortlinkSuggest } from "../../data/shortlinks";

function LeftNav() {
  const [isFullCategory, setFullCategory] = useState(false);
  const [isFullShortLink, setFullShortLink] = useState(false);

  return (
    <div className='text-[#e1e3e8] flex flex-col flex-initial h-[100vh] max-w-[360px]  overflow-y-auto'>
      <Section
        items={shortlinkCategories}
        isfullItems={isFullCategory}
        setFullItems={setFullCategory}
        num={5}
        extend={true} />
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
  );
}

export default LeftNav;
