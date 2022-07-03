import React from "react";
import Slider from "react-slick";
import icNext from '../../../assets/images/Home/ic_next.png';
import icPre from '../../../assets/images/Home/ic_pre.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.scss';

interface Props {
    onClick: Function
}
function NextArrow(props: Props) {
    const { onClick } = props;
    return (
        <div className="slider-arrow slick-next" onClick={() => onClick()}>
            <img src={icNext} alt="" />
        </div>
    );
}

function PreArrow(props: Props) {
    const { onClick } = props;
    return (
        <div className="slider-arrow slick-prev" onClick={() => onClick()}>
            <img src={icPre} alt="" />
        </div>
    );
}

export default function Banner() {
    const sliderRef = React.useRef<Slider>(null);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow onClick={()=> sliderRef.current?.slickNext()}/>,
        prevArrow: <PreArrow onClick={()=> sliderRef.current?.slickPrev()}/>
    };
    return (
        <div className="banner">
            <Slider ref={sliderRef} {...settings}>
                <div className="banner-bg1">
                    <div className="banner-box">
                        <h2 className="banner-box-title">mona <span>shoes</span></h2>
                        <p className="banner-box-text">Cá tính hơn – Sành điệu hơn – Yêu đời hơn</p>
                        <a className="banner-box-link" href="/#"><span>Xem ngay</span></a>
                    </div>
                </div>
                <div className="banner-bg2">
                    <div className="banner-box">
                        <h2 className="banner-box-title">mona <span>shoes</span></h2>
                        <p className="banner-box-text">Cá tính hơn – Sành điệu hơn – Yêu đời hơn</p>
                        <a className="banner-box-link" href="/#"><span>Xem ngay</span></a>
                    </div>
                </div>
            </Slider>
        </div>
    );
}