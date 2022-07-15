import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import icExpand from '../../../assets/images/Home/ic_expand.svg';
import icClose from '../../../assets/images/Home/ic_close.svg';
import './ProductGallery.scss';

export default function ProductGallery() {
    const [isShowPopup, setShowPopup] = React.useState(false);
    const [isZoomIn, setZoomIn] = React.useState(false);
    const imgRef = React.useRef<HTMLImageElement>(null);

    const handleZoom = () => {
        const img = imgRef.current;
        if (!img) return;
        if (isZoomIn) img.style.transform = 'scale(1)';
        else img.style.transform = 'scale(1.2)';
        setZoomIn(!isZoomIn);
    }

    const handleOpenPopup = () => {
        setShowPopup(true);
    }

    const handleClosePopup = () => {
        setShowPopup(false);
    }


    return (
        <div className='JjvPrOKfJS'>
            <div className='QPSktAXiwL'>-30%</div>
            <div className='kWQuzjEwDs' onClick={handleOpenPopup}>
                <ReactImageMagnify {...{
                    enlargedImagePosition: 'over',
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: 'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/do-01-kenneson-65-rg.jpg'
                    },
                    largeImage: {
                        src: 'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/do-01-kenneson-65-rg.jpg',
                        width: 1000,
                        height: 1500
                    }
                }} />
                <div className='OLQXojnAZz'>
                    <div className='vCNTICcVMU' onClick={handleOpenPopup}>
                        <img src={icExpand} alt='' />
                    </div>
                </div>
            </div>
            {isShowPopup &&
                <div className='UIHalZxcDB'>
                    <img ref={imgRef} src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/do-01-kenneson-65-rg.jpg" alt='' onClick={handleZoom} />
                </div>}
            {isShowPopup && <div className='SzpQjRssxV'>do-01-kenneson-65-rg</div>}    
            {isShowPopup && <div className='RBDSpJPOdl' onClick={handleClosePopup}></div>}
            {isShowPopup && <div className='LzaQxriKwQ' onClick={handleClosePopup}>
                <img src={icClose} alt='' className='GQDzUHyXlB' />
            </div>}
        </div>
    )
}