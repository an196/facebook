import { useState } from 'react';
import sticker from '../constant/sticker';

const FULL_SIZE = sticker.primaryFrame;
const RESIZE = sticker.secondaryFrame;
const MAX_LOOP = 3;

const useSticker = () => {
	const [wf, setWf] = useState();
	const [hf, setHf] = useState();
	const [isPlaying, setIsPlaying] = useState(false);
	const [imgElm, setImgElm] = useState();
	let timer = 0;

	const sleep = (ms) => new Promise((res) => setTimeout(() => res(), ms));

	const setFrame = async (imgRef, isResize = false) => {
		setImgElm(imgRef.current);
		let sizeFrame = getSizeFrame(isResize);

		setHf(sizeFrame);
		setWf(sizeFrame);
	};

	async function play(sticker) {
		if (!isPlaying) {
			setIsPlaying(true);
			for (let loop = 0; loop < MAX_LOOP; loop++) {
				let count = 0;
				for (let y = 0; y < sticker.y; y++) {
					for (let x = 0; x < sticker.x; x++) {
						const percentY = 100 * (y / sticker.y);
						const percentX = 100 * (x / sticker.x);
						imgElm.style.transform = `translate(-${percentX}%, -${percentY}%)`;
						timer = await sleep(100);
						count++;
						if (count++ > sticker.frame) {
							break;
						}
					}
				}
			}

			setIsPlaying(false);
		}
	}

	function stop() {
		if (timer) {
			clearTimeout(timer);
			timer = 0;
		}
	}

	function getSizeFrame(isResize) {
		if (isResize) return RESIZE;

		return FULL_SIZE;
	}

	return { setFrame, wf, setWf, hf, setHf, stop, play };
};

export default useSticker;
