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
        <div className='BjiwvBwbMY'>
            <div className='OUVCTptezU'>
                <div className={`WgEiSIYEMI ${activeTab === TAB_TITLE.DESC ? 'MWfiRyTvxc' : ''}`} onClick={(e) => handleClick(e, TAB_TITLE.DESC)}>Mô tả</div>
                <div className={`WgEiSIYEMI ${activeTab === TAB_TITLE.MORE_INFO ? 'MWfiRyTvxc' : ''}`} onClick={(e) => handleClick(e, TAB_TITLE.MORE_INFO)}>Thông tin bổ sung</div>
                <div className={`WgEiSIYEMI ${activeTab === TAB_TITLE.REVIEW ? 'MWfiRyTvxc' : ''}`} onClick={(e) => handleClick(e, TAB_TITLE.REVIEW)}>Dánh giá (0)</div>
            </div>
            <div className='FcfrJUvsja'>
                <div className={`KoEhwPVRQM ${activeTab === TAB_TITLE.DESC ? 'MWfiRyTvxc' : ''}`}>
                    <p>– Giày búp bê mũi nhọn đính nơ thanh lịch</p>
                    <p>– Giày dế bằng, thiết kế mũi nhọn tinh tế, mặt tiếp xúc êm ái</p>
                    <p>– Chất liệu da tổng hợp đẹp, đường may chắc chắn, bền bỉ</p>
                    <p>– Thiết kế gồm nhiều size cho bạn lựa chọn.</p>
                    <p>– Nhiều gam màu nhã nhặn vô cùng dễ phối trang phục</p>
                </div>
                <div className={`KoEhwPVRQM ${activeTab === TAB_TITLE.MORE_INFO ? 'MWfiRyTvxc' : ''}`}>
                    <div className="wIpHznnjhK">
                        <div className="SXZyMKGRGC">Size</div>
                        <div className="immUkzsadZ">35, 36, 37, 38, 39</div>
                    </div>
                    <div className="wIpHznnjhK">
                        <div className="SXZyMKGRGC">Màu sắc</div>
                        <div className="immUkzsadZ">Đen, Trắng, Vàng</div>
                    </div>
                </div>
                <div className={`KoEhwPVRQM ${activeTab === TAB_TITLE.REVIEW ? 'MWfiRyTvxc' : ''}`}>
                    <div className='AlPrOKHHpM'>
                        <div className='IiVUvqsTIE'>
                            <h3>Đánh giá</h3>
                            <div className='hHtjzVVAQm'>Chưa có đánh giá nào.</div>
                        </div>
                        <div className='vPUjoZxCjH'>
                            <div className='uqSLWicrFA'>
                                <h3>Hãy là người đầu tiên nhận xét “Giày búp bê xu hướng oxford mũi nhọn”</h3>
                                <form>
                                    <div className="OlLvUOwTHn">
                                        <label htmlFor="PYritpBTxy">Đánh giá của bạn</label>
                                        <div className="MsfxKoZQMC">
                                            <div className='fsWmuHVTxO'>{[1].map((el, idx) => { return <img key={idx} className='YwJjDqcRuv' src={icStar} alt="" /> })}</div>
                                            <div className='fsWmuHVTxO'>{[1, 2].map((el, idx) => { return <img key={idx} className='YwJjDqcRuv' src={icStar} alt="" /> })}</div>
                                            <div className='fsWmuHVTxO'>{[1, 2, 3].map((el, idx) => { return <img key={idx} className='YwJjDqcRuv' src={icStar} alt="" /> })}</div>
                                            <div className='fsWmuHVTxO'>{[1, 2, 3, 4].map((el, idx) => { return <img key={idx} className='YwJjDqcRuv' src={icStar} alt="" /> })}</div>
                                            <div className='fsWmuHVTxO'>{[1, 2, 3, 4, 5].map((el, idx) => { return <img key={idx} className='YwJjDqcRuv' src={icStar} alt="" /> })}</div>
                                        </div>
                                    </div>
                                    <div className="eJGdJPTaKH">
                                        <label htmlFor="JoUvnNuTAO">Nhận xét của bạn *</label>
                                        <textarea id='JoUvnNuTAO' name='JoUvnNuTAO' cols={45} rows={8} required />
                                    </div>
                                    <div className="dxbsuqebvu">
                                        <label htmlFor="uBnLFKTKsN">Tên *</label>
                                        <input id="uBnLFKTKsN" name="uBnLFKTKsN" type="text" value="" size={30} required />
                                    </div>
                                    <div className="GIiytsJUSk">
                                        <label htmlFor="VjjVyfpsQa">Email *</label>
                                        <input id="VjjVyfpsQa" name="VjjVyfpsQa" type="text" value="" size={30} required />
                                    </div>
                                    <div className="wlqWeiVFkk">
                                        <input name="xVMBUeoivh" type="submit" id="xVMBUeoivh" className="pEiBNMftxz IRupnxYoCn" value="Gửi đi" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}