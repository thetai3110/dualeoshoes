import React from 'react';
import Slider from 'react-slick';
import icNext from '../../assets/images/Home/ic_next.svg';
import icPre from '../../assets/images/Home/ic_pre.svg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './SliderCustom.scss';

interface Props {
    onClick: Function
}

function NextArrow(props: Props) {
    const { onClick } = props;
    return (
        <div className="CXvKRWhaHx slick-next" onClick={() => onClick()}>
            <img src={icNext} alt="" />
        </div>
    );
}

function PreArrow(props: Props) {
    const { onClick } = props;
    return (
        <div className="CXvKRWhaHx slick-prev" onClick={() => onClick()}>
            <img src={icPre} alt="" />
        </div>
    );
}

interface SliderCustomProps {
    settings: {}
    children?: JSX.Element[];
}

export default function SliderCustom({ settings, children }: SliderCustomProps) {
    const sliderRef = React.useRef<Slider>(null);
    const settingsDefault = {
        ...settings,
        nextArrow: <NextArrow onClick={() => sliderRef.current?.slickNext()} />,
        prevArrow: <PreArrow onClick={() => sliderRef.current?.slickPrev()} />,
    };

    return (
        <Slider ref={sliderRef} {...settingsDefault}>
            {children}
        </Slider>
    )
}