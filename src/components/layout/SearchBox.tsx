import React from 'react';
import './SearchBox.scss';

interface Props {
    onClose: Function
}

export function SearchBox({ onClose }: Props) {
    const searchBoxRef = React.useRef<HTMLInputElement>(null);

    const handleClose = (e: any) => {
        if(e.target !== searchBoxRef.current){
            onClose()
        }
    }

    return (
        <div className='search-box-wrap' onClick={(e) => handleClose(e)}>
            <div className='search-box'>
                <input ref={searchBoxRef} type='search' placeholder='Tìm kiếm..' autoComplete='off' />
            </div>
        </div>
    )
}