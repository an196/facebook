import React, { useEffect, useRef, memo, useMemo } from 'react';
import { useState } from 'react';
import useSticker from '../../../hooks/useSticker';

function DynamicSticker({ sticker, isResize = false }) {
	const stickerRef = useRef();
	const { setFrame, wf, hf, stop, play } = useSticker();
	const [instance, setInstance] = useState(null);

	function getIntance(sticker, isResize) {
		let width, height, img;
		if (isResize) {
			width = sticker?.resize.width;
			height = sticker?.resize.height;
			img = sticker?.resize.img;
		} else {
			width = sticker?.size.width;
			height = sticker?.size.height;
			img = sticker?.size.img;
		}

		return setInstance({ width, height, img });
	}

	const init = useMemo(() => {
		getIntance(sticker, isResize);
	}, [sticker]);

	function hdlMouseOver() {
		play(sticker);
	}

	useEffect(() => {
		if (sticker) {
			setFrame(stickerRef, isResize);
		}

		return stop();
	}, []);

	return (
		<>
			{instance && (
				<div className='block flex-none' onMouseEnter={hdlMouseOver}>
					<div
						className={`ticker-frame overflow-hidden ${hf && 'h-[' + hf + 'px]'}`}
						style={{ width: wf && wf + 'px' }}
					>
						<img
							className={` ${instance.width && instance.height ? `` : 'max-w-none'}`}
							style={{ maxWidth: instance.width + 'px', maxHeight: instance.height + 'px' }}
							src={isResize ? instance?.img : sticker.img}
							ref={stickerRef}
						/>
					</div>
				</div>
			)}
		</>
	);
}

export default memo(DynamicSticker);
