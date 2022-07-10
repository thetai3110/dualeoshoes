import './ProductDetail.scss';

export default function ProductDetail() {
    const detail = {
        category: 'Giày búp bê',
        title: 'Giày Saint Laurent',
        oldPrice: '1,000,000',
        curPrice: '850,000',
        desc: 'Bảo hành 6 tháng bằng hóa đơn mua hàng Thiết kế tinh tế Kiểu dáng trẻ trung hiện đại Màu sắc bắt mắt Chất liệu cao cấp Độ bền cao …',
        sizes: [35, 36, 37, 38, 39],
        colors: [{ en: 'black', vn: 'Đen' }, { en: 'white', vn: 'Trắng' }, { en: 'yellow', vn: 'Vàng' }]
    }

    return (
        <div className='lnZMPdYpcW'>
            <div className='dPjxxzvFiM'>
                <span className='ZzLVXiWXvN'>Trang chủ</span>
                <span className='MnTtxpwjXm'>/</span>
                <span className='ZzLVXiWXvN'>{detail.category}</span>
            </div>
            <div className='bWtGHKlEBq'>{detail.title}</div>
            <div className='WYnfLEgSRO'></div>
            <div className='QwnmpUaVrG'>
                <div className='azTAgOJpfF'>
                    {detail.oldPrice &&
                        <span className='KwaNzQosZj'>
                            <span className="rgehMxBOsW">{detail.oldPrice}<span className="hNfrImnhAh">₫</span></span>
                        </span>}
                    <span className='wihqGFPCZQ'>
                        <span className="rgehMxBOsW">{detail.curPrice}<span className="hNfrImnhAh">₫</span></span>
                    </span>
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
                            <div className='xjBoNHgApk'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-ghn.jpg" alt='' />
                            </div>
                            <div className='xjBoNHgApk'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-ghtk.jpg" alt='' />
                            </div>
                            <div className='xjBoNHgApk'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-ninja-van.jpg" alt='' />
                            </div>
                            <div className='xjBoNHgApk'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-shipchung.jpg" alt='' />
                            </div>
                            <div className='xjBoNHgApk'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-viettle-post.jpg" alt='' />
                            </div>
                            <div className='xjBoNHgApk'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-vn-post.jpg" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='zNUjRKJKwT'>
                        <div className='WXQLrSFULE'><strong>Thanh toán</strong></div>
                        <div className='TbVyLYgolY'>
                            <div className='xjBoNHgApk'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-acb.jpg" alt='' />
                            </div>
                            <div className='xjBoNHgApk'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-techcombank.jpg" alt='' />
                            </div>
                            <div className='xjBoNHgApk'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-vib.jpg" alt='' />
                            </div>
                            <div className='xjBoNHgApk'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-vcb.jpg" alt='' />
                            </div>
                            <div className='xjBoNHgApk'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-paypal.jpg" alt='' />
                            </div>
                            <div className='xjBoNHgApk'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-mastercard.jpg" alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='DdRLUWorda'>
                    <div className='iqXXEYaKNE'><strong>"Hãy trở thành Affilicate của chúng tôi để tìm thêm thu nhập thụ động, kiếm tiền online"</strong></div>
                    <div className='pEiBNMftxz QEuXZVTaQU'>Đăng ký Affillicate</div>
                </div>
            </div>
            <div className='CihwvbgQfZ'>
                <span className='jUAQNbGsGQ'>Mã: <span className='MCAjdmFOkP'>N/A</span></span>
                <span className='TgfHVJzLqK'>Danh mục: <span>Giày búp bê</span>, <span>Giày cao gót</span>, <span>Giày sneaker</span>, <span>Giày xăng đan</span></span>
            </div>
        </div>
    )
}