import { useState } from 'react';

const useSticker = () => {
	const [wf, setWf] = useState();
	const [hf, setHf] = useState();

	const sizeFrame = 80;

	const doAnimate = (imgRef) => {
		const imgElm = imgRef.current;

		// input
		const Xcount = imgElm.offsetWidth / sizeFrame;
		const Ycount = imgElm.offsetHeight / sizeFrame;

		setHf(sizeFrame);
		setWf(sizeFrame);

		const sleep = (ms) => new Promise((res) => setTimeout(() => res(), ms));

		async function animate() {
			for (let y = 0; y < Ycount; y++) {
				for (let x = 0; x < Xcount; x++) {
					const percentY = 100 * (y / Ycount);
					const percentX = 100 * (x / Xcount);
					imgElm.style.transform = `translate(-${percentX}%, -${percentY}%)`;
					await sleep(100);
				}
			}
			setTimeout(animate);
		}
		animate();
	};

	return { doAnimate, wf, setWf, hf, setHf };
};

export default useSticker;
