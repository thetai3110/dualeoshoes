import './ProductDetail.scss';

export default function ProductDetail() {
    const detail = {
        category: 'Giày búp bê',
        title: 'Giày Saint Laurent',
        oldPrice: '1,000,000₫',
        curPrice: '850,000₫',
        desc: 'Bảo hành 6 tháng bằng hóa đơn mua hàng Thiết kế tinh tế Kiểu dáng trẻ trung hiện đại Màu sắc bắt mắt Chất liệu cao cấp Độ bền cao …',
        sizes: [35, 36, 37, 38, 39],
        colors: [{ en: 'black', vn: 'Đen' }, { en: 'white', vn: 'Trắng' }, { en: 'yellow', vn: 'Vàng' }]
    }
    
    return (
        <div className='product-detail'>
            <div className='path'>
                <a href='/#'>Trang chủ</a>
                <span>/</span>
                <a href='/#'>{detail.category}</a>
            </div>
            <div className='title'>{detail.title}</div>
            <div className='divider'></div>
            <p className='price-wrap'>
                <div className='price'>
                    {detail.oldPrice && <del><span className="amount">{detail.oldPrice}<span className="symbol">₫</span></span></del>}
                    <ins><span className="amount">{detail.curPrice}<span className="symbol">₫</span></span></ins>
                </div>
            </p>
            <p className='desc'>{detail.desc}</p>
            <form className='cart-form'>
                <table className='cart'>
                    <tbody>
                        <tr>
                            <td className='label'><label>Size</label></td>
                            <td className='value'>
                                <ul className='item-wrap'>
                                    {detail.sizes.map((size,idx)=>{
                                        return <li key={`size-${idx}`} className='item'><span>{size}</span></li>
                                    })}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className='label'><label>Màu sắc</label></td>
                            <td className='value'>
                                <ul className='item-wrap'>
                                     {detail.colors.map((color,idx)=>{
                                        return  <li key={`color-${idx}`} className='item'><span style={{ backgroundColor: color.en }}></span></li>
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='quantity'>
                    <div className='quantity-modify'>
                        <input type="button" value="-" className="minus" />
                        <input type="number" value="1" className="text" />
                        <input type="button" value="+" className="plus" />
                    </div>
                    <button type='submit' className='btn btn-submit'>Thêm vào giỏ</button>
                </div>
            </form>
            <div className='payment-wrap'>
                <div className='payment'>
                    <div className='payment-info'>
                        <p><strong>Tính phí ship tự động</strong></p>
                        <div className='list-item'>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-ghn.jpg" alt='' />
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-ghtk.jpg" alt='' />
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-ninja-van.jpg" alt='' />
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-shipchung.jpg" alt='' />
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-viettle-post.jpg" alt='' />
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-vn-post.jpg" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='payment-info'>
                        <p><strong>Thanh toán</strong></p>
                        <div className='list-item'>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-acb.jpg" alt='' />
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-techcombank.jpg" alt='' />
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-vib.jpg" alt='' />
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-vcb.jpg" alt='' />
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-paypal.jpg" alt='' />
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-mastercard.jpg" alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='payment-desc'>
                    <p><strong>"Hãy trở thành Affilicate của chúng tôi để tìm thêm thu nhập thụ động, kiếm tiền online"</strong></p>
                    <a href='/#' className='btn btn-signin'>Đăng ký Affillicate</a>
                </div>
            </div>
            <div className='meta'>
                <span className='sku-wrap'>Mã: <span className='sku'>N/A</span></span>
                <span className='posted-in'>Danh mục: <a href='/#'>Giày búp bê</a>, <a href='/#'>Giày cao gót</a>, <a href='/#'>Giày sneaker</a>, <a href='/#'>Giày xăng đan</a>, </span>
            </div>
        </div>
    )
}