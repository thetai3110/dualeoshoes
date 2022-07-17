import React from 'react';
import icClose from '../../assets/images/ic_close.svg';
import SliderCustom from '../slider/SliderCustom';
import './FooterGallery.scss';

export default function FooterGallery() {
    const [isShowPopup, setShowPopup] = React.useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
    }

    const handleClosePopup = () => {
        setShowPopup(false);
    }
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    }
    const footerGallery = [
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/brand1-1.png',
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/brand2-1.png',
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/brand1.png',
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/brand2.png',
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/brand3.png',
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/brand4.png',
    ]
    const allGallery = [
        ...footerGallery,
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-ghn.jpg',
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-ghtk.jpg',
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-ninja-van.jpg',
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-shipchung.jpg',
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-viettle-post.jpg',
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-vn-post.jpg',
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-acb.jpg',
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-techcombank.jpg',
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-vib.jpg',
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-vcb.jpg',
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-paypal.jpg',
        'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-mastercard.jpg'
    ]
    return (
        <div className='JbkBqkpnEo'>
            <div className='LPdYJfmCXP'>
                {footerGallery.map((galleryImg, idx) => {
                    return (
                        <div key={`footer-gallery-${idx}`} className='GhcDbDrkde' onClick={handleOpenPopup}>
                            <div className='OQCeehNRxg'>
                                <img src={galleryImg} alt='' />
                            </div>
                            <div className="TJfvUOjrBHp"></div>
                        </div>
                    )
                })}
            </div>
            {isShowPopup &&
                <div className='YaSwZhyrmO'>
                    <div className='OtnffPDQqO'>
                        <SliderCustom settings={settings} isAlwaysShowArrow={true}>
                            {allGallery.map((galleryImg, idx) => {
                                return <div key={`img-${idx}`} className='YQhNGrJCzL'>
                                    <div className='WFFDHTKTOX'>
                                        <img src={galleryImg} alt='' />
                                        <div className='AVzvtwFxAh'>{idx+1} of {allGallery.length}</div>
                                    </div>
                                </div>
                            })}
                        </SliderCustom>
                    </div>
                    <div className='qnjAksLHtj' onClick={handleClosePopup}></div>
                    <div className='OGROvwUKiD' onClick={handleClosePopup}>
                        <img src={icClose} alt='' className='jvRsKLXlCe' />
                    </div>
                </div>
            }
        </div>
    )
}