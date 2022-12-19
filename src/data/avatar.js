const avatars = [
    {
        lable: "Avatar running on a soccer field lit up with multiple floodlights. They're wearing a green jersey with white soccer boots, and raising their right index finger. The soccer ball is in the goal net behind them. The word goal is written above them in gold.",
        img: 'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.1997-6/320225134_891606508868439_8471804174823321161_n.webp?stp=dst-webp_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=ac3552&_nc_ohc=D55Uuzu8udgAX9loikM&_nc_oc=AQnj-ieK62ru0ul6ywouWrSiEJCiZWYC5PD-StEyoD_FcEuGruSVRHjoMVNAJcffzVg&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfAbGgBjDqp6en_xTJ3g5VYDtGV_CxuTv6LKKMq0zDKAuw&oe=63A2DC37'
    },
    {
        lable: "Avatar with both thumbs up and a broad smile.",
        img: 'https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.1997-6/320239067_1560428307732081_6339377644271689958_n.webp?stp=dst-webp_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=ac3552&_nc_ohc=i4XsGIhB3vsAX_3b968&_nc_oc=AQnqaQ_Y9bEP_vmHG1s7ulwQMrv0lCuDtlc4C9amwDx_G54ulp5y7yc2GJlDV3ByNIU&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfC28mPMDX06zbug8h-4Wh5hxwFSaXIpZLKsNq705Ayujg&oe=63A2A770'
    },
    {
        lable: "Avatar feeling loved. They're blushing and holding their face with both hands. Multiple red hearts are flying all over.",
        img: 'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.1997-6/320259329_669924424607831_2957206756825955065_n.webp?stp=dst-webp_p100x100&_nc_cat=101&ccb=1-7&_nc_sid=ac3552&_nc_ohc=BBi8d0gYcREAX-fB9zz&tn=nXthrLtSduKSlaxw&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfAyF2tP3PD5Avw5pJ71giILrejh6JDCIea7kuMeuKZD1Q&oe=63A209D5'
    },
    {
        lable: "Avatar smiling with heart eyes.",
        img: 'https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.1997-6/320176401_2886701124808180_370164598773305501_n.webp?stp=dst-webp_p100x100&_nc_cat=103&ccb=1-7&_nc_sid=ac3552&_nc_ohc=Np_YxkVDiOAAX_oJB5h&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfBEJso7kuuboZMqcwh18B-n3Ks-yX0UV953dLIDRrIRpg&oe=63A37725'
    },
    {
        lable: "Avatar smiling and folding both hands in gratitude, while slightly tilting their head to the right. Golden stars are seen in the background.",
        img: 'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.1997-6/319888910_1381453419066891_4037004476999785671_n.webp?stp=dst-webp_p100x100&_nc_cat=101&ccb=1-7&_nc_sid=ac3552&_nc_ohc=XZkntfFS1MUAX8vusRm&_nc_oc=AQnvake9VkmmGdVGpheLLVIgC4rpWo4eHrYeuFYnmH-wj_tOGVJSsotAsh5fuFhkmQk&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfD0CDgrSiTT4Yu7P69ymeU43SLbOy5TnIzeC9ftQ9EgUg&oe=63A30A01'
    },
    {
        lable: "Avatar laughing and rolling on the floor, and holding their stomach with both hands. The words ha ha ha are written above them in shades of red, orange and yellow.",
        img: 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.1997-6/320201323_712631143776725_1869374666796266777_n.webp?stp=dst-webp_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=ac3552&_nc_ohc=AofoIwbL2T0AX9mYLXB&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfC_jh7jiG6VFGNt3tarLaxMM4EQtYatSETpgiYsGncHLg&oe=63A30527'
    },
    {
        lable: "Avatar thinking, while holding their chin with their right hand.",
        img: 'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.1997-6/320000856_861675378212607_8099509039974938769_n.webp?stp=dst-webp_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=ac3552&_nc_ohc=lLKy-wSQRnsAX_He5l7&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfCiKfuuQvKOOWBUsD416Jjwpr6rAHwHMg4yRJw_aD6fqA&oe=63A38CB2'
    },
    {
        lable: "Avatar looking confused. They're raising their left eyebrow and scratching their head with their right hand.",
        img: 'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.1997-6/320326436_541340511191884_5352636927325890000_n.webp?stp=dst-webp_p100x100&_nc_cat=107&ccb=1-7&_nc_sid=ac3552&_nc_ohc=B2qDr5pVI2AAX8X52Ll&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfDCQPLTjD9U4ionBIvPXReSny4ilZG5rEjkpdQadyYJag&oe=63A3A2E8'
    },
    {
        lable: "Avatar blowing kisses with their left hand. A red heart is seen flying.",
        img: 'https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.1997-6/320094194_685103053157983_9127014720599449347_n.webp?stp=dst-webp_p100x100&_nc_cat=103&ccb=1-7&_nc_sid=ac3552&_nc_ohc=fKq7NugSLVkAX_qlOEW&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfDxJY-MUKOL2mAbg2GjHV2xWs9Z7SDbEp024yF7j3ChvQ&oe=63A227FB'
    },
    {
        lable: "Avatar smiling and emerging from a blue postage stamp with their arms outstretched. The words sending hugs are written on the stamp in white. Two red hearts and seen beside them.",
        img: 'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.1997-6/319776574_1217852462275668_6929485107118806042_n.webp?stp=dst-webp_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=ac3552&_nc_ohc=pHOradqnRYcAX-PlAex&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfDenhM1ppflZhpU9PQ1WogkroWENWc1h1m8Thn6ol7TBg&oe=63A25034'
    },
];

export default avatars;