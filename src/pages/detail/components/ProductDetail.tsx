import './ProductDetail.scss';

export default function ProductDetail() {
    const detail = {
        category: 'GIÀY BÚP BÊ',
        title: 'Giày cao gót Midnight Black Kenneson 01',
        oldPrice: '990,000',
        curPrice: '690,000',
        desc: 'Bảo hành 6 tháng bằng hóa đơn mua hàng Thiết kế tinh tế Kiểu dáng trẻ trung hiện đại Màu sắc bắt mắt Chất liệu cao cấp Độ bền cao…',
        sizes: [35, 36, 37, 38, 39],
        colors: [{ en: 'black', vn: 'Đen' }, { en: 'white', vn: 'Trắng' }, { en: 'yellow', vn: 'Vàng' }]
    }

    return (
        <div className='lnZMPdYpcW'>
            <div className='dPjxxzvFiM'>
                <span className='ZzLVXiWXvN'>TRANG CHỦ</span>
                <span className='MnTtxpwjXm'>/</span>
                <span className='ZzLVXiWXvN'>{detail.category}</span>
            </div>
            <div className='bWtGHKlEBq'>{detail.title}</div>
            <div className='WYnfLEgSRO'></div>
            <div className='QwnmpUaVrG'>
                <div className='azTAgOJpfF'>
                    {detail.oldPrice &&
                        <div className="LbKkidejMq">{detail.oldPrice}<div className="hNfrImnhAh">₫</div></div>
                    }
                    <div className="SLlMzdnKri">{detail.curPrice}<div className="hNfrImnhAh">₫</div></div>
                </div>
            </div>
            <div className='YHBRYIdvCS'>{detail.desc}</div>
            <div className='ZmrSsWBUxt'>
                <div className='ZvxOnaABoO'>
                    <div className='SZajlHSbZb'>Size</div>
                    {detail.sizes.map((size, idx) => {
                        return <div key={`bNFTlhgoza-${idx}`} className='bNFTlhgoza'><span>{size}</span></div>
                    })}
                </div>
                <div className='ZvxOnaABoO'>
                    <div className='SZajlHSbZb'>Màu sắc</div>
                    {detail.colors.map((color, idx) => {
                        return <div key={`bNFTlhgoza-${idx}`} className='bNFTlhgoza'><span style={{ backgroundColor: color.en }}></span></div>
                    })}
                </div>
                <div className='ohpLRlpXXt'>
                    <div className='jJeKJaOxQo'>
                        <input type="button" value="-" className="boAxyRhDbp" />
                        <input type="number" value="1" className="WYMcfZRHMg" />
                        <input type="button" value="+" className="oTxPZkFzHr" />
                    </div>
                    <button type='button' className='pEiBNMftxz NHvsGDTzhM'>Thêm vào giỏ</button>
                </div>
            </div>
            <div className='WWMIRbUFxq'>
                <div className='UnGcLBjKNH'>
                    <div className='zNUjRKJKwT'>
                        <div className='WXQLrSFULE'><strong>Tính phí ship tự động</strong></div>
                        <div className='TbVyLYgolY'>
                            <img className='xjBoNHgApk' src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-ghn.jpg" alt='' />
                            <img className='xjBoNHgApk' src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-ghtk.jpg" alt='' />
                            <img className='xjBoNHgApk' src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-ninja-van.jpg" alt='' />
                            <img className='xjBoNHgApk' src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-shipchung.jpg" alt='' />
                            <img className='xjBoNHgApk' src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-viettle-post.jpg" alt='' />
                            <img className='xjBoNHgApk' src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-vn-post.jpg" alt='' />
                        </div>
                    </div>
                    <div className='zNUjRKJKwT'>
                        <div className='WXQLrSFULE'><strong>Thanh toán</strong></div>
                        <div className='TbVyLYgolY'>
                            <img className='xjBoNHgApk' src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-acb.jpg" alt='' />
                            <img className='xjBoNHgApk' src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-techcombank.jpg" alt='' />
                            <img className='xjBoNHgApk' src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-vib.jpg" alt='' />
                            <img className='xjBoNHgApk' src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-vcb.jpg" alt='' />
                            <img className='xjBoNHgApk' src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-paypal.jpg" alt='' />
                            <img className='xjBoNHgApk' src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-mastercard.jpg" alt='' />
                        </div>
                    </div>
                </div>
                <div className='DdRLUWorda'>
                    <div className='iqXXEYaKNE'><strong>"Hãy trở thành Affilicate của chúng tôi để tìm thêm thu nhập thụ động, kiếm tiền online"</strong></div>
                    <div className='pEiBNMftxz QEuXZVTaQU'>Đăng ký Affilicate</div>
                </div>
            </div>
            <div className='CihwvbgQfZ'>
                <span className='jUAQNbGsGQ'>Mã: <span className='MCAjdmFOkP'>N/A</span></span>
                <span className='TgfHVJzLqK'>Danh mục: <span>Giày búp bê</span>, <span>Giày cao gót</span>, <span>Giày sneaker</span>, <span>Giày xăng đan</span></span>
            </div>
        </div>
    )
}