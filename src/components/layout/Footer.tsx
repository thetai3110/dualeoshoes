import location from '../../assets/images/Home/ic_location.svg';
import mail from '../../assets/images/Home/ic_mail.svg';
import phone from '../../assets/images/Home/ic_phone.svg';

import './Footer.scss';
import FooterGallery from './FooterGallery';

export default function Footer() {
    return (
        <div className="OsPwnbCmch">
           <FooterGallery />
            <div style={{ paddingTop: '70px' }}></div>
            <div className='lZhzRlAVIC TlbZfgabaX'>
                <div className='fJdhvutuUF'>
                    <div className='mHOpmpxdoC'>
                        <h5 className='rXBRtnAddg'>liên hệ</h5>
                        <div className='LaIOTcLyhI'>Chúng tôi chuyên cung cấp các sản phẩm chính hãng chất lượng tốt đạt chuẩn quốc tế</div>
                        <div className='upwOWUKjdK'>
                            <div className='YlIyVSBsTD'><img src={location} alt='' /></div>
                            <div className='bFkIOMOiCh'>316 C19 Lý Thường Kiệt, P.15, Q.11, TP. HCM</div>
                        </div>
                        <div className='upwOWUKjdK'>
                            <div className='YlIyVSBsTD'><img src={phone} alt='' /></div>
                            <div className='bFkIOMOiCh'>1900 636 648</div>
                        </div>
                        <div className='upwOWUKjdK'>
                            <div className='YlIyVSBsTD'><img src={mail} alt='' /></div>
                            <div className='bFkIOMOiCh'>mon@mona.media</div>
                        </div>
                    </div>
                </div>
                <div className='fJdhvutuUF'>
                    <div className='mHOpmpxdoC'>
                        <h5 className='rXBRtnAddg'>hỗ trợ khách hàng</h5>
                        <div className='TNKrPIszOL'>
                            <div className='GXgpVlUboC'><div className='sXXDhkTjoF'>Tài khoản</div></div>
                            <div className='GXgpVlUboC'><div className='sXXDhkTjoF'>Giỏ hàng</div></div>
                            <div className='GXgpVlUboC'><div className='sXXDhkTjoF'>Thanh toán</div></div>
                            <div className='GXgpVlUboC'><div className='sXXDhkTjoF'>Kiểm tra đơn hàng</div></div>
                        </div>
                    </div>
                </div>
                <div className='fJdhvutuUF'>
                    <div className='mHOpmpxdoC'>
                        <h5 className='rXBRtnAddg'>danh sách menu</h5>
                        <div className='TNKrPIszOL'>
                            <div className='GXgpVlUboC MGSIHCxtMC' ><div className='sXXDhkTjoF'>Trang chủ</div></div>
                            <div className='GXgpVlUboC'><div className='sXXDhkTjoF'>Giới thiệu</div></div>
                            <div className='GXgpVlUboC'><div className='sXXDhkTjoF'>Tin tức</div></div>
                            <div className='GXgpVlUboC'><div className='sXXDhkTjoF'>Cửa hàng</div></div>
                            <div className='GXgpVlUboC'><div className='sXXDhkTjoF'>Liên hệ</div></div>
                        </div>
                    </div>
                </div>
                <div className='fJdhvutuUF'>
                    <div className='mHOpmpxdoC'>
                        <h5 className='rXBRtnAddg'>kết nối với mona</h5>
                        <div className='QrOkRrzFIn'>
                            <iframe title='fanpage' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Ffb.com%2Fthietkewebsitemonamedia&amp;tabs=timeline&amp;width=280&amp;height=190&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId" width="280" height="190" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowTransparency allow="encrypted-media"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ paddingTop: '20px' }}></div>
            <div className='IbjSsfImcO'>
                <div className='GOoPlZeBbT IduJqlyHst TlbZfgabaX'>
                    © Bản quyền thuộc về . Thiết kế website
                    <img className='StIePocWXN' src="http://mona-media.com/logo.png" alt="MonaMedia"></img>
                    <strong>Mona Media</strong>
                </div>
            </div>
        </div >
    );
}