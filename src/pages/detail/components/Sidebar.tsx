import Policy from '../../home/components/Policy';

import './Sidebar.scss';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-item'>
                <div className='sidebar-item-inner'>
                    <Policy />
                </div>
            </div>
            <div className='sidebar-item'>
                <span className="title">Sản phẩm</span>
                <div className='divider'></div>
                <ul className='product-list'>
                    <li className='product-item old'>
                        <a href="http://mauweb.monamedia.net/dualeoshoes/san-pham/giay-sophia-webster-01/">
                            <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/giay-sophia-webster-01-img1-100x100.jpg" alt=''/>
                            <span className="product-title">Giầy Sophia Webster 01</span>
                        </a>
                        <span className="amount">1,350,000<span className="symbol">₫</span></span>
                    </li>
                    <li className='product-item even'>
                        <a href="http://mauweb.monamedia.net/dualeoshoes/san-pham/giay-sophia-webster-01/">
                            <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/giay-sophia-webster-01-img1-100x100.jpg" alt=''/>
                            <span className="product-title">Giầy Sophia Webster 01</span>
                        </a>
                        <span className="amount">1,350,000<span className="symbol">₫</span></span>
                    </li>
                    <li className='product-item old'>
                        <a href="http://mauweb.monamedia.net/dualeoshoes/san-pham/giay-sophia-webster-01/">
                            <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/giay-sophia-webster-01-img1-100x100.jpg" alt=''/>
                            <span className="product-title">Giầy Sophia Webster 01</span>
                        </a>
                        <span className="amount">1,350,000<span className="symbol">₫</span></span>
                    </li>
                    <li className='product-item even'>
                        <a href="http://mauweb.monamedia.net/dualeoshoes/san-pham/giay-sophia-webster-01/">
                            <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/giay-sophia-webster-01-img1-100x100.jpg" alt=''/>
                            <span className="product-title">Giầy Sophia Webster 01</span>
                        </a>
                        <span className="amount">1,350,000<span className="symbol">₫</span></span>
                    </li>
                    <li className='product-item old'>
                        <a href="http://mauweb.monamedia.net/dualeoshoes/san-pham/giay-sophia-webster-01/">
                            <img src="http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/giay-sophia-webster-01-img1-100x100.jpg" alt=''/>
                            <span className="product-title">Giầy Sophia Webster 01</span>
                        </a>
                        <span className="amount">1,350,000<span className="symbol">₫</span></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}