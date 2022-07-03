import location from '../../assets/images/Home/ic_location.png';
import mail from '../../assets/images/Home/ic_mail.png';
import phone from '../../assets/images/Home/ic_phone.png';

import './Footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <div className='footer-gallery-wrap'>
                <div className='footer-gallery'>
                    <div className='footer-gallery-box'>
                        <div className='gallery-box-image'>
                            <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/brand1-1.png" alt='' />
                            <div className="gallery-box-text"></div>
                        </div>
                    </div>
                    <div className='footer-gallery-box'>
                        <div className='gallery-box-image'>
                            <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/brand2-1.png" alt='' />
                            <div className="gallery-box-text"></div>
                        </div>
                    </div>
                    <div className='footer-gallery-box'>
                        <div className='gallery-box-image'>
                            <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/brand1.png" alt='' />
                            <div className="gallery-box-text"></div>
                        </div>
                    </div>
                    <div className='footer-gallery-box'>
                        <div className='gallery-box-image'>
                            <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/brand2.png" alt='' />
                            <div className="gallery-box-text"></div>
                        </div>
                    </div>
                    <div className='footer-gallery-box'>
                        <div className='gallery-box-image'>
                            <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/brand3.png" alt='' />
                            <div className="gallery-box-text"></div>
                        </div>
                    </div>
                    <div className='footer-gallery-box'>
                        <div className='gallery-box-image'>
                            <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/brand4.png" alt='' />
                            <div className="gallery-box-text"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ paddingTop: '70px' }}></div>
            <div className='footer-main container'>
                <div className='footer-item-wrap'>
                    <div className='footer-item'>
                        <h5>liên hệ</h5>
                        <p>Chúng tôi chuyên cung cấp các sản phẩm chính hãng chất lượng tốt đạt chuẩn quốc tế</p>
                        <div className='footer-item-icon'>
                            <div className='img'><img src={location} alt='' /></div>
                            <div className='text'>316 C19 Lý Thường Kiệt, P.15, Q.11, TP. HCM</div>
                        </div>
                        <div className='footer-item-icon'>
                            <div className='img'><img src={phone} alt='' /></div>
                            <div className='text'>1900 636 648</div>
                        </div>
                        <div className='footer-item-icon'>
                            <div className='img'><img src={mail} alt='' /></div>
                            <div className='text'>mon@mona.media</div>
                        </div>
                    </div>
                </div>
                <div className='footer-item-wrap'>
                    <div className='footer-item'>
                        <h5>hỗ trợ khách hàng</h5>
                        <ul className='footer-item-menu'>
                            <li className='menu-item'><a href='/#'>Tài khoản</a></li>
                            <li className='menu-item'><a href='/#'>Giỏ hàng</a></li>
                            <li className='menu-item'><a href='/#'>Thanh toán</a></li>
                            <li className='menu-item'><a href='/#'>Kiểm tra đơn hàng</a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-item-wrap'>
                    <div className='footer-item'>
                        <h5>danh sách menu</h5>
                        <ul className='footer-item-menu'>
                            <li className='menu-item active' ><a href='/#'>Trang chủ</a></li>
                            <li className='menu-item'><a href='/#'>Giới thiệu</a></li>
                            <li className='menu-item'><a href='/#'>Tin tức</a></li>
                            <li className='menu-item'><a href='/#'>Cửa hàng</a></li>
                            <li className='menu-item'><a href='/#'>Liên hệ</a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-item-wrap'>
                    <div className='footer-item'>
                        <h5>kết nối với mona</h5>
                        <iframe title="1" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fthietkewebsitemonamedia%2F&tabs=timeline&width=280&height=180&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="280" height="180" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
            <div style={{ paddingTop: '20px' }}></div>
            <div className='footer-copy-right'>
                <div className='copy-right-text flex-row container'>
                    © Bản quyền thuộc về . Thiết kế website MonaMedia Mona Media
                </div>
            </div>
        </div >
    );
}