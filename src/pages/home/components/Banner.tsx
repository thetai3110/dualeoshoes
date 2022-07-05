import SliderCustom from "../../../components/slider/SliderCustom";

import './Banner.scss';

export default function Banner() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="banner">
            <SliderCustom settings={settings}>
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
            </SliderCustom>
        </div>
    );
}