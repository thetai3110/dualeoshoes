import React from 'react';
import icSearch from '../../assets/images/Home/ic_search.svg';
import icClose from '../../assets/images/Home/ic_close.svg';

import './SearchBox.scss';

export function SearchBox() {
    const [isShowSearchBox, setShowSearchBox] = React.useState(false);
    const searchBoxRef = React.useRef<HTMLInputElement>(null);

    const handleCloseSearchBox = (e: any) => {
        if (e.target !== searchBoxRef.current) {
            setShowSearchBox(false);
        }
    }

    const handleOpenSearchBox = () => {
        setShowSearchBox(true);
    }

    React.useEffect(() => {
        const body = document.querySelector('body');
        if (!body) return;
        if (isShowSearchBox) {
            body.style.overflow = "hidden";
            body.style.marginRight = "17px";
        } else {
            body.style.overflow = "unset";
            body.style.marginRight = "unset";
        }
    }, [isShowSearchBox])

    return (
        <>
            <div className='THdIudfPKj NsxKxwluwx' onClick={handleOpenSearchBox}>
                <div className='LGWTNhpqZl'><img className={`${isShowSearchBox ? 'CcWsLQkNWL' : ''}`} src={icSearch} alt='' /></div>
            </div>
            {isShowSearchBox && <div className='VjFgZYSKee' onClick={(e) => handleCloseSearchBox(e)}>
                <div className='vaJmWfmWou'>
                    <input ref={searchBoxRef} type='text' placeholder='Tìm kiếm..' autoComplete='off' />
                    <div className="vaRCfAkLJK">
                        <img src={icSearch} alt='' />
                    </div>
                </div>
                <img src={icClose} alt='' className='PmyBloLBEF' onClick={(e) => handleCloseSearchBox(e)} />
            </div>}
        </>
    )
}