import React from 'react';
import Slider from 'react-slick';
import icNext from '../../assets/images/ic_next.svg';
import icPre from '../../assets/images/ic_pre.svg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './SliderCustom.scss';

interface Props {
    isAlwaysShowArrow?: boolean,
    onClick: Function
}

function NextArrow(props: Props) {
    const { onClick, isAlwaysShowArrow } = props;
    return (
        <div className={`CXvKRWhaHx slick-next ${isAlwaysShowArrow ? 'cRPhDKmTQw' : ''}`}onClick={() => onClick()}>
            <img src={icNext} alt="" />
        </div>
    );
}

function PreArrow(props: Props) {
    const { onClick, isAlwaysShowArrow } = props;
    console.log(isAlwaysShowArrow)
    return (
        <div className={`CXvKRWhaHx slick-prev ${isAlwaysShowArrow ? 'cRPhDKmTQw' : ''}`} onClick={() => onClick()}>
            <img src={icPre} alt="" />
        </div>
    );
}

interface SliderCustomProps {
    settings: {}
    isAlwaysShowArrow?: boolean,
    children?: JSX.Element[];
}

export default function SliderCustom({ settings, isAlwaysShowArrow, children }: SliderCustomProps) {
    const sliderRef = React.useRef<Slider>(null);
    const settingsDefault = {
        ...settings,
        nextArrow: <NextArrow onClick={() => sliderRef.current?.slickNext()} isAlwaysShowArrow={isAlwaysShowArrow}/>,
        prevArrow: <PreArrow onClick={() => sliderRef.current?.slickPrev()} isAlwaysShowArrow={isAlwaysShowArrow}/>,
    };

    return (
        <Slider ref={sliderRef} {...settingsDefault}>
            {children}
        </Slider>
    )
}