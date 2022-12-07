import { useState } from "react";
import { HorizontalLine } from "../../components";
import { Section } from "../../components/dashboard/leftnav";
import { shortlinkCategories, shortlinkSuggest } from "../../data/shortlinks";

function LeftNav() {
  const [isFullCategory, setFullCategory] = useState(false);
  const [isFullShortLink, setFullShortLink] = useState(false);

  return (
    <div className="h-[100vh] w-[360px]  hover:overscroll-contain ">
      <div className='text-[#e1e3e8] h-full w-full overflow-hidden hover:overflow-y-auto pr-2 group'>
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
    </div>
  );
}

export default LeftNav;
