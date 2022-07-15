import React from 'react';
import icPlay from '../../../assets/images/Home/ic_play.svg';

import './Introduce.scss';

export default function Introduce() {
    const bgRef = React.useRef<HTMLDivElement>(null);
    const boxRef = React.useRef<HTMLDivElement>(null);
    
    const handleScroll = () => {
        const bg = bgRef.current;
        const box = boxRef.current;
        if(bg && boxRef){
            const dist = -Number(box?.getBoundingClientRect().top || 0);
            bg.style.transform = `translate3d(0px, ${dist}px, 0px)`;
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
            <div className='SYKXMSMCip' ref={boxRef}>
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