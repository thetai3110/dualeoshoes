import React from 'react';
import icShopping from '../../assets/images/Home/ic_shopping.svg';
import icClose from '../../assets/images/Home/ic_close.svg';

import './Cart.scss';

export default function Cart() {
    const [isShowCartPanel, setShowCartPanel] = React.useState(false);

    const handleOpenCart = () => {
        setShowCartPanel(true);
    }

    const handleCloseMenu = () => {
        setShowCartPanel(false);
    }

    React.useEffect(() => {
        const body = document.querySelector('body');
        if (!body) return;
        if (isShowCartPanel) {
            body.style.overflow = "hidden";
            body.style.marginRight = "17px";
        } else {
            body.style.overflow = "unset";
            body.style.marginRight = "unset";
        }
    }, [isShowCartPanel])
      
    return (
        <>
            <div className='LQXKHZoEqy' onClick={handleOpenCart}>
                <img src={icShopping} alt='' />
            </div>
            {isShowCartPanel && <div className='qHSbPBzIjq'>
                <div className='MvaqtyPOsz'>
                    <div className='jwenSjGihb'>
                        <h4 className='uRTtTXIzCl'>GIỎ HÀNG</h4>
                        <div className='OVPCXEkKoO'></div>
                    </div>
                    <div className='MllpaMxlUv'>Chưa có sản phẩm trong giỏ hàng.</div>
                </div>
            </div>}
            {isShowCartPanel && <div className='RBDSpJPOdl' onClick={handleCloseMenu}></div>}
            {isShowCartPanel && <div className='LzaQxriKwQ' onClick={handleCloseMenu}>
            <img src={icClose} alt='' className='GQDzUHyXlB aQCWApFChu' />
          </div>}
        </>
    )
}