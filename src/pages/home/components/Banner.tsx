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
        <div className="mVRCVburWF">
            <SliderCustom settings={settings}>
                <div className="Lqljwgamrg">
                    <div className="EiVSamPmXD">
                        <h2 className="wOkPBbAYBn">mona <span>shoes</span></h2>
                        <div className="aGnOSZKqfE">Cá tính hơn – Sành điệu hơn – Yêu đời hơn</div>
                        <div className="eqJuoeFRqt"><span>Xem ngay</span></div>
                    </div>
                </div>
                <div className="VVizaVcQXW">
                    <div className="EiVSamPmXD">
                        <h2 className="wOkPBbAYBn">mona <span>shoes</span></h2>
                        <div className="aGnOSZKqfE">Cá tính hơn – Sành điệu hơn – Yêu đời hơn</div>
                        <div className="eqJuoeFRqt"><span>Xem ngay</span></div>
                    </div>
                </div>
            </SliderCustom>
        </div>
    );
}