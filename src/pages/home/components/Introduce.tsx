import React from 'react';
import icPlay from '../../../assets/images/Home/ic_play.svg';

import './Introduce.scss';

export default function Introduce() {
    const bgRef = React.useRef<HTMLDivElement>(null);
    
    const handleScroll = () => {
        // transform: translate3d(0px, 179.34px, 0px);
        const bg = bgRef.current;
        console.log(bg?.getBoundingClientRect().top)
        if(bg){
            // bg.style.transform = `translate3d(0px, ${179}px, 0px)`
        }
    }

    React.useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className='OfeNcTkpVP'>
            <div className='TyHrUZtJJH' ref={bgRef}>
                <div className="jKuofsbLSd"></div>
            </div>
            <div className='SYKXMSMCip'>
                <div className='IduJqlyHst TlbZfgabaX'>
                    <div className='hrfBLAUcyF'>
                        <div className='CzcQGWncKO'>
                            <h1 className='iROmSoxAeJG'>Xem video giới thiệu về MONA <span>Shoes</span></h1>
                            <div className='atAQmFOtDW'>
                                <a href="https://www.youtube.com/watch?v=Xb9FXJy4SYU" className='ELASDXMlxe'>
                                    <img src={icPlay} alt='' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}