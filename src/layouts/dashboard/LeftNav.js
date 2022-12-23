import { useState } from 'react';
import { Contact, HorizontalLine } from '../../components';
import { Section } from '../../components/dashboard/leftnav';
import { shortlinkCategories, shortlinkSuggest } from '../../data/shortlinks';

function LeftNav() {
	const [isFullCategory, setFullCategory] = useState(false);
	const [isFullShortLink, setFullShortLink] = useState(false);

	return (
		<div className='block sticky top-0 '>
			<div className='h-[calc(100vh-56px)] max-w-[360px] grow flex flex-col visible sticky'>
				<div className='flex h-full visible overflow-hidden overflow-y-auto hide-scrollbar'>
					<div className='text-[#e1e3e8] h-full w-full  group flex flex-col justify-between'>
						<div className='max-w-[360px] block  grow '>
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
		</div>
	);
}

export default LeftNav;
