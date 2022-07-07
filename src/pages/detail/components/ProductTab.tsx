import React from 'react';
import icStar from '../../../assets/images/Detail/ic_star.png';

import './ProductTab.scss';

export default function ProductTab() {
    const TAB_TITLE = {
        DESC: 'DESC',
        MORE_INFO: 'MORE_INFO',
        REVIEW: 'RATE'
    }
    const [activeTab, setActiveTab] = React.useState(TAB_TITLE.DESC);

    const handleClick = (e: any, tabId: any) => {
        e.preventDefault();
        setActiveTab(tabId);
    }

    return (
        <div className='product-tab'>
            <ul className='tabs'>
                <li className={`tab-title ${activeTab === TAB_TITLE.DESC ? 'active' : ''}`} onClick={(e) => handleClick(e, TAB_TITLE.DESC)}><a href='/#'>Mô tả</a></li>
                <li className={`tab-title ${activeTab === TAB_TITLE.MORE_INFO ? 'active' : ''}`} onClick={(e) => handleClick(e, TAB_TITLE.MORE_INFO)}><a href='/#'>Thông tin bổ sung</a></li>
                <li className={`tab-title ${activeTab === TAB_TITLE.REVIEW ? 'active' : ''}`} onClick={(e) => handleClick(e, TAB_TITLE.REVIEW)}><a href='/#'>Dánh giá (0)</a></li>
            </ul>
            <div className='tab-panels'>
                <div className={`tab-content ${activeTab === TAB_TITLE.DESC ? 'active' : ''}`}>
                    <p>– Giày búp bê mũi nhọn đính nơ thanh lịch</p>
                    <p>– Giày dế bằng, thiết kế mũi nhọn tinh tế, mặt tiếp xúc êm ái</p>
                    <p>– Chất liệu da tổng hợp đẹp, đường may chắc chắn, bền bỉ</p>
                    <p>– Thiết kế gồm nhiều size cho bạn lựa chọn.</p>
                    <p>– Nhiều gam màu nhã nhặn vô cùng dễ phối trang phục</p>
                </div>
                <div className={`tab-content ${activeTab === TAB_TITLE.MORE_INFO ? 'active' : ''}`}>
                    <table className="attributes">
                        <tbody><tr className="attributes-item">
                            <th className="attributes-item-label">Size</th>
                            <td className="attributes-item-value"><p>35, 36, 37, 38, 39</p>
                            </td>
                        </tr>
                            <tr className="attributes-item">
                                <th className="attributes-item-label">Màu sắc</th>
                                <td className="attributes-item-value"><p>Đen, Trắng, Xám</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={`tab-content ${activeTab === TAB_TITLE.REVIEW ? 'active' : ''}`}>
                    <div className='reviews'>
                        <div className='comments'>
                            <h3>Đánh giá</h3>
                            <p>Chưa có đánh giá nào.</p>
                        </div>
                        <div className='review-form-wrap'>
                            <div className='review-form'>
                                <h3>Hãy là người đầu tiên nhận xét “Giày búp bê xu hướng oxford mũi nhọn”</h3>
                                <form>
                                    <div className="review-form-rating">
                                        <label htmlFor="rating">Đánh giá của bạn</label>
                                        <p className="stars">
                                            <span>
                                                <a className="star-1" href="/#">{[1].map((el, idx) => { return <img key={idx} className='ic-star' src={icStar} alt="" /> })}</a>
                                                <a className="star-2" href="/#">{[1, 2].map((el, idx) => { return <img key={idx} className='ic-star' src={icStar} alt="" /> })}</a>
                                                <a className="star-3" href="/#">{[1, 2, 3].map((el, idx) => { return <img key={idx} className='ic-star' src={icStar} alt="" /> })}</a>
                                                <a className="star-4" href="/#">{[1, 2, 3, 4].map((el, idx) => { return <img key={idx} className='ic-star' src={icStar} alt="" /> })}</a>
                                                <a className="star-5" href="/#">{[1, 2, 3, 4, 5].map((el, idx) => { return <img key={idx} className='ic-star' src={icStar} alt="" /> })}</a>
                                            </span>
                                        </p>
                                    </div>
                                    <p className="review-form-comment">
                                        <label htmlFor="comment">Nhận xét của bạn *</label>
                                        <textarea id='comment' name='comment' cols={45} rows={8} required />
                                    </p>
                                    <p className="review-form-author">
                                        <label htmlFor="author">Tên *</label>
                                        <input id="author" name="author" type="text" value="" size={30} required />
                                    </p>
                                    <p className="review-form-email">
                                        <label htmlFor="email">Email *</label>
                                        <input id="email" name="email" type="text" value="" size={30} required />
                                    </p>
                                    <p className="review-form-submit">
                                        <input name="submit" type="submit" id="submit" className="btn btn-submit" value="Gửi đi" />
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}