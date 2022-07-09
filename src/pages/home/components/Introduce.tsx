import icVideo from '../../../assets/images/Home/ic_video.png';

import './Introduce.scss';

export default function Introduce() {
    return (
        <div className='introduce-wrap'>
            <div className='introduce flex-row container'>
                <div className='introduce-inner'>
                    <h1 className='introduce-title'>Xem video giới thiệu về MONA <span>Shoes</span></h1>
                    <div className='introduce-video'>
                        <a href="https://www.youtube.com/watch?v=Xb9FXJy4SYU" className='introduce-video-link'>
                            <img src={icVideo} alt='' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}