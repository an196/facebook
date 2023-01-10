import React from 'react';
import { contentinfo } from '../data/shortlinks';

function Contact() {
	return (
		<div className='p-4'>
			<ul className='inline space-x-1 list-none'>
				{contentinfo.map((item, idx) => (
					<li className='text-[13px] font-normal inline  text-secondaryText' key={idx}>
						<a
							href={item.link}
							className={`leading-none h-full  ${item.link !== '#' && 'hover:underline'}`}
						>
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
	);
}

export default Contact;
