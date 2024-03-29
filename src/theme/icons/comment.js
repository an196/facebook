import styled from 'styled-components';

const Animal = styled.div`
	background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/4MTnhTAbgns.png');
	background-repeat: no-repeat;
	background-size: auto;
	background-position: 0 -246px;
	display: block;
	height: 16px;
	width: 16px;
`;

const Apple = styled.div`
	background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/4MTnhTAbgns.png');
	background-repeat: no-repeat;
	background-size: auto;
	background-position: 0 -42px;
	display: block;
	height: 16px;
	width: 16px;
`;

const Umbrella = styled.div`
	background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/4MTnhTAbgns.png');
	background-repeat: no-repeat;
	background-size: auto;
	background-position: 0 -110px;
	display: block;
	height: 16px;
	width: 16px;
`;

const Symbol = styled.div`
	background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/4MTnhTAbgns.png');
	background-repeat: no-repeat;
	background-repeat: no-repeat;
	background-size: auto;
	background-position: 0 -76px;
	display: block;
	height: 16px;
	width: 16px;
`;

const Motion = styled.div`
	background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/4MTnhTAbgns.png');
	background-repeat: no-repeat;
	background-size: auto;
	background-position: 0 -161px;
	display: block;
	height: 16px;
	width: 16px;
`;

const LightBulb = styled.div`
	background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/4MTnhTAbgns.png');
	background-repeat: no-repeat;
	background-size: auto;
	background-position: 0 -280px;
	display: block;
	height: 16px;
	width: 16px;
`;

const Flag = styled.div`
	background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/4MTnhTAbgns.png');
	background-repeat: no-repeat;
	background-size: auto;
	background-position: 0 -212px;
	display: block;
	height: 16px;
	width: 16px;
`;

const Clock = styled.div`
	background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/4MTnhTAbgns.png');
	background-repeat: no-repeat;
	background-size: auto;
	background-position: 0 -280px;
	display: block;
	height: 16px;
	width: 16px;
`;

const Ball = styled.div`
	background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/4MTnhTAbgns.png');
	background-repeat: no-repeat;
	background-size: auto;
	background-position: 0 -314px;
	display: block;
	height: 16px;
	width: 16px;
`;

const MagnifyingGlass = styled.div`
	background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/idmUQfvfZbI.png');
	background-position: 0px -772px;
	background-size: auto;
	width: 20px;
	height: 20px;
	background-repeat: no-repeat;
	display: inline-block;
`;

const ClockCircle = styled.div`
	background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/idmUQfvfZbI.png');
	background-position: 0px -394px;
	background-size: auto;
	width: 20px;
	height: 20px;
	background-repeat: no-repeat;
	display: inline-block;
`;

const MotionViolet = styled.img`
	width: 20px;
	height: 20px;
`;

MotionViolet.defaultProps = {
	src: 'https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/zHgXExaZqRk.png',
};

const QooBeeAgapi = styled.img`
	width: 20px;
	height: 20px;
`;

QooBeeAgapi.defaultProps = {
	src: 'https://firebasestorage.googleapis.com/v0/b/facebook-a9c10.appspot.com/o/sticker%2Fbees%2F29625756_1908637042780879_1752765252870602752_n.png?alt=media&token=3c71be86-9a84-4041-9fa7-1e685259f979',
};

const DoveCity = styled.img`
	width: 20px;
	height: 20px;
`;

DoveCity.defaultProps = {
	src: 'https://firebasestorage.googleapis.com/v0/b/facebook-a9c10.appspot.com/o/sticker%2Fdove%2F69283087_2432277797048112_5900238230850109440_n.png?alt=media&token=0037cf6c-c057-4f58-adcc-163b366d2960',
};

const DownArrow = () => {
	return (
		<svg fill='currentColor' viewBox='0 0 20 20' width='16px' height='16px'>
			<path d='M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z'></path>
		</svg>
	);
};

const Plus = styled.i`
	background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/idmUQfvfZbI.png');
	background-position: 0px -940px;
	background-size: auto;
	width: 20px;
	height: 20px;
	background-repeat: no-repeat;
	display: inline-block;
`;

export default {
	Animal,
	Apple,
	Umbrella,
	Symbol,
	Motion,
	LightBulb,
	Flag,
	Clock,
	Ball,
	MagnifyingGlass,
	ClockCircle,
	MotionViolet,
	QooBeeAgapi,
	DoveCity,
	DownArrow,
	Plus,
};
