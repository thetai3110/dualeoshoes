import React from 'react';
import icSearch from '../../assets/images/Home/ic_search.svg';
import icClose from '../../assets/images/Home/ic_close.svg';

import './SearchBox.scss';

interface Props {
    onClose: Function
}

export function SearchBox({ onClose }: Props) {
    const searchBoxRef = React.useRef<HTMLInputElement>(null);

    const handleClose = (e: any) => {
        if (e.target !== searchBoxRef.current) {
            onClose()
        }
    }

    return (
        <div className='VjFgZYSKee' onClick={(e) => handleClose(e)}>
            <div className='vaJmWfmWou'>
                <input ref={searchBoxRef} type='text' placeholder='Tìm kiếm..' autoComplete='off' />
                <div className="vaRCfAkLJK">
                    <img src={icSearch} alt='' />
                </div>
            </div>
            <img src={icClose} alt='' className='PmyBloLBEF' onClick={(e) => handleClose(e)}/>
        </div>
    )
}