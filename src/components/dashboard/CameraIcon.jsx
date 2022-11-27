import { useEffect, useRef } from 'react';

function CameraIcon() {
	const rect = useRef();
	const triangle = useRef();
	const verRect = useRef();
    const horRect = useRef();

	let ctx = null;

	//draw rectangle
	useEffect(() => {
		const canvasEle = rect.current;
		canvasEle.width = 16;
		canvasEle.height = 12;

		// get context of the canvas
		ctx = canvasEle.getContext('2d');
		ctx.fillStyle = ' #b0b3b8';
		ctx.fillRect(0, 0, 100, 100);

        canvasEle.parentElement.style = 'border-radius: 3px; overflow: hidden'

	}, []);

	// //draw triangle
	useEffect(() => {
		const canvasEle = triangle.current;
		canvasEle.width = 10;
		canvasEle.height = 10;

		// get context of the canvas
		ctx = canvasEle.getContext('2d');
		ctx.fillStyle = ' #b0b3b8';
		ctx.beginPath();
		ctx.moveTo(0, 5);
		ctx.lineTo(10, 10);
		ctx.lineTo(10, 0);
		ctx.fill();
		canvasEle.parentElement.style = 'margin-left: -5px; margin-top: 1px';
	}, []);


    //draw verRect
	useEffect(() => {
		const canvasEle = verRect.current;
		canvasEle.width = 2;
		canvasEle.height = 8;

		// get context of the canvas
		ctx = canvasEle.getContext('2d');
		// ctx.fillStyle = '#18191a';
		ctx.fillStyle = '#18191a';
        ctx.fillRect(0, 0, 100, 100);

        canvasEle.parentElement.style = 'margin-left: -14px; margin-top: 2px '
	}, []);

     //draw horRect
	useEffect(() => {
		const canvasEle = horRect.current;
		canvasEle.width = 8;
		canvasEle.height = 2;

		// get context of the canvas
		ctx = canvasEle.getContext('2d');
		// ctx.fillStyle = '#18191a';
		ctx.fillStyle = '#18191a';
        ctx.fillRect(0, 0, 100, 100);

        canvasEle.parentElement.style = 'margin-left: -5px; margin-top: 5px '
	}, []);

	return (
		<>
			<div className='flex flex-row w-[16px] h-[16px]'>
				<div>
					<canvas ref={rect}></canvas>
				</div>
				<div>
					<canvas ref={triangle}></canvas>
				</div>
                <div>
					<canvas ref={verRect}></canvas>
				</div>
                <div>
					<canvas ref={horRect}></canvas>
				</div>
			</div>
		</>
	);
}

export default CameraIcon;
