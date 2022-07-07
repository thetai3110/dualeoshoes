import React from 'react';
import icVideo from '../../../assets/images/Home/ic_video.png';

import './Introduce.scss';

export default function Introduce() {

    // const handleScroll = () => {
    //     const bg = document.querySelector('.introduce-wrap') as HTMLDivElement;
    //     const position = - bg.getBoundingClientRect().top;

    //     bg.style.transform =  `translate3d(0px, ${position}px, 0px)`;
    //     bg.style.backfaceVisibility =  'backface-visibility: hidden';
    // }

    // React.useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     }
    // }, [])

    return (
        <div className='introduce-wrap'>
            <div className='introduce flex-row row'>
                <div className='introduce-inner'>
                    <h1>Xem video giới thiệu về MONA <span>Shoes</span></h1>
                    <div className='video'>
                        <a href="https://www.youtube.com/watch?v=Xb9FXJy4SYU">
                            <img src={icVideo} alt='' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}