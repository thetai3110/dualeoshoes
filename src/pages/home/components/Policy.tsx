import policy1 from '../../../assets/images/Home/policy_1.png';
import policy2 from '../../../assets/images/Home/policy_2.png';
import policy3 from '../../../assets/images/Home/policy_3.png';
import policy4 from '../../../assets/images/Home/policy_4.png';

import './Policy.scss';

export default function Policy() {

    return (
        <div className="XSjSHEKvvK IduJqlyHst TlbZfgabaX">
            <div className="MoYzeJfDbL">
                <div className='YakgGGrAre'>
                    <div className="UAVXgloAdy">
                        <img src={policy1} alt='' />
                    </div>
                    <div className="ezMLsDouur">
                        <h5>Miễn phí vận chuyển</h5>
                        <h5>Cho đơn hàng &gt; 500.000đ</h5>
                    </div>
                </div>
            </div>
            <div className="MoYzeJfDbL">
                <div className='YakgGGrAre'>
                    <div className="UAVXgloAdy">
                        <img src={policy2} alt='' />
                    </div>
                    <div className="ezMLsDouur">
                        <h5>Mua 2 được giảm giá</h5>
                        <h5>10% cho đơn hàng tiếp</h5>
                    </div>
                </div>
            </div>
            <div className="MoYzeJfDbL">
                <div className='YakgGGrAre'>
                    <div className="UAVXgloAdy">
                        <img src={policy3} alt='' />
                    </div>
                    <div className="ezMLsDouur">
                        <h5>Chứng nhận chất lượng</h5>
                        <h5>Sản phẩm chất lượng</h5>
                    </div>
                </div>
            </div>
            <div className="MoYzeJfDbL">
                <div className='YakgGGrAre'>
                    <div className="UAVXgloAdy">
                        <img src={policy4} alt='' />
                    </div>
                    <div className="ezMLsDouur">
                        <h5>Hotline : <span className='eUkxgtadaP'>1900 636 648</span></h5>
                        <h5>Hỗ trợ tực tiếp nhanh chóng</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}