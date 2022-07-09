import policy1 from '../../../assets/images/Home/policy_1.png';
import policy2 from '../../../assets/images/Home/policy_2.png';
import policy3 from '../../../assets/images/Home/policy_3.png';
import policy4 from '../../../assets/images/Home/policy_4.png';

import './Sidebar.scss';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-item'>
                <div className="policy-wrap">
                    <div className="policy">
                        <div className='policy-inner'>
                            <div className="icon">
                                <img src={policy1} alt='' />
                            </div>
                            <div className="text">
                                <h5>Miễn phí vận chuyển</h5>
                                <h5>Cho đơn hàng &gt; 500.000đ</h5>
                            </div>
                        </div>
                    </div>
                    <div className="policy">
                        <div className='policy-inner'>
                            <div className="icon">
                                <img src={policy2} alt='' />
                            </div>
                            <div className="text">
                                <h5>Mua 2 được giảm giá</h5>
                                <h5>Chứng nhận chất lượng</h5>
                            </div>
                        </div>
                    </div>
                    <div className="policy">
                        <div className='policy-inner'>
                            <div className="icon">
                                <img src={policy3} alt='' />
                            </div>
                            <div className="text">
                                <h5>Chứng nhận chất lượng</h5>
                                <h5>Sản phẩm chất lượng</h5>
                            </div>
                        </div>
                    </div>
                    <div className="policy">
                        <div className='policy-inner'>
                            <div className="icon">
                                <img src={policy4} alt='' />
                            </div>
                            <div className="text">
                                <h5>Hotline : <a href='/#' className='hotline'>1900 636 648</a></h5>
                                <h5>Hỗ trợ tực tiếp nhanh chóng</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sidebar-item'>
                <span className="sidebar-item-title">Sản phẩm</span>
                <div className='sidebar-item-divider'></div>
                <ul className='product-list'>
                    <li className='product-item old'>
                        <a className='product-item-link' href="http://mauweb.monamedia.net/dualeoshoes/san-pham/giay-sophia-webster-01/">
                            <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/giay-sophia-webster-01-img1-100x100.jpg" alt='' />
                            <span className="product-title">Giầy Sophia Webster 01</span>
                        </a>
                        <span className="amount">1,350,000<span className="symbol">₫</span></span>
                    </li>
                    <li className='product-item even'>
                        <a className='product-item-link' href="http://mauweb.monamedia.net/dualeoshoes/san-pham/giay-sophia-webster-01/">
                            <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/giay-sophia-webster-01-img1-100x100.jpg" alt='' />
                            <span className="product-title">Giầy Sophia Webster 01</span>
                        </a>
                        <span className="amount">1,350,000<span className="symbol">₫</span></span>
                    </li>
                    <li className='product-item old'>
                        <a className='product-item-link' href="http://mauweb.monamedia.net/dualeoshoes/san-pham/giay-sophia-webster-01/">
                            <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/giay-sophia-webster-01-img1-100x100.jpg" alt='' />
                            <span className="product-title">Giầy Sophia Webster 01</span>
                        </a>
                        <del><span className="amount">1,350,000<span className="symbol">₫</span></span></del>
                        <ins><span className="amount">1,000,000<span className="symbol">₫</span></span></ins>
                    </li>
                    <li className='product-item even'>
                        <a className='product-item-link' href="http://mauweb.monamedia.net/dualeoshoes/san-pham/giay-sophia-webster-01/">
                            <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/giay-sophia-webster-01-img1-100x100.jpg" alt='' />
                            <span className="product-title">Giầy Sophia Webster 01</span>
                        </a>
                        <span className="amount">1,350,000<span className="symbol">₫</span></span>
                    </li>
                    <li className='product-item old'>
                        <a className='product-item-link' href="http://mauweb.monamedia.net/dualeoshoes/san-pham/giay-sophia-webster-01/">
                            <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/giay-sophia-webster-01-img1-100x100.jpg" alt='' />
                            <span className="product-title">Giầy Sophia Webster 01</span>
                        </a>
                        <span className="amount">1,350,000<span className="symbol">₫</span></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}