import './ProductDetail.scss';

export default function ProductDetail() {

    return (
        <div className='product-detail'>
            <div className='path'>
                <a href='/#'>Trang chủ</a>
                <span>/</span>
                <a href='/#'>Giày búp bê</a>
            </div>
            <div className='title'>Giày Saint Laurent</div>
            <div className='divider'></div>
            <p className='price-wrap'>
                <div className='price'>
                    <del><span className="amount">1,000,000<span className="symbol">₫</span></span></del>
                    <ins><span className="amount">850,000<span className="symbol">₫</span></span></ins>
                </div>
            </p>
            <p className='desc'>Bảo hành 6 tháng bằng hóa đơn mua hàng Thiết kế tinh tế Kiểu dáng trẻ trung hiện đại Màu sắc bắt mắt Chất liệu cao cấp Độ bền cao …</p>
            <form className='cart-form'>
                <table className='cart'>
                    <tbody>
                        <tr>
                            <td className='label'><label>Size</label></td>
                            <td className='value'>
                                <ul className='item-wrap'>
                                    <li className='item'><span>35</span></li>
                                    <li className='item'><span>36</span></li>
                                    <li className='item'><span>37</span></li>
                                    <li className='item'><span>38</span></li>
                                    <li className='item'><span>39</span></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className='label'><label>Màu sắc</label></td>
                            <td className='value'>
                                <ul className='item-wrap'>
                                    <li className='item'><span style={{ backgroundColor: 'black' }}></span></li>
                                    <li className='item'><span style={{ backgroundColor: 'white' }}></span></li>
                                    <li className='item'><span style={{ backgroundColor: 'yellow' }}></span></li>
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
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-ghn.jpg" alt=''/>
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-ghtk.jpg" alt=''/>
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-ninja-van.jpg" alt=''/>
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-shipchung.jpg" alt=''/>
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-viettle-post.jpg" alt=''/>
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-vn-post.jpg" alt=''/>
                            </div>
                        </div>
                    </div>
                    <div className='payment-info'>
                        <p><strong>Thanh toán</strong></p>
                        <div className='list-item'>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-acb.jpg" alt=''/>
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-techcombank.jpg" alt=''/>
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-vib.jpg" alt=''/>
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-vcb.jpg" alt=''/>
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-paypal.jpg" alt=''/>
                            </div>
                            <div className='item'>
                                <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2018/10/logo-mastercard.jpg" alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='payment-desc'>
                    <p>"Hãy trở thành Affilicate của chúng tôi để tìm thêm thu nhập thụ động, kiếm tiền online"</p>
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