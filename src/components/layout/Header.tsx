import React from 'react';
import logo from '../../assets/images/Home/logo.png';
import menuItem1 from '../../assets/images/Home/menu-item1.png';
import menuItem2 from '../../assets/images/Home/menu-item2.png';
import menuItem3 from '../../assets/images/Home/menu-item3.png';
import menuItem4 from '../../assets/images/Home/menu-item4.png';
import menuItem5 from '../../assets/images/Home/menu-item5.png';
import menuItem6 from '../../assets/images/Home/menu-item6.png';
import icSearch from '../../assets/images/Home/ic_search.png';
import icCart from '../../assets/images/Home/ic_cart.png';
import icMenu from '../../assets/images/Home/ic_menu.png';
import icDown from '../../assets/images/Home/ic_down.png';
import icUp from '../../assets/images/Home/ic_up.png';
import { SearchBox } from './SearchBox';

import './Header.scss';

export default function Header() {
  const [active, setActive] = React.useState(-1);
  const [isShowSearchBox, setShowSearchBox] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const menuMbRef = React.useRef<HTMLDivElement>(null);

  const menus = [
    { image: menuItem1, label: 'Trang chủ' },
    { image: menuItem2, label: 'Giới thiệu' },
    {
      image: menuItem3,
      label: 'Cửa hàng',
      children: [
        { label: 'Giày búp bê' },
        { label: 'Giày cao gót' },
        { label: 'Giày xăng đan' },
        { label: 'Giày Sneaker' }
      ]
    },
    { image: menuItem4, label: 'Tin tức' },
    { image: menuItem5, label: 'Liên hệ' },
    { image: menuItem6, label: 'Chỉ đường' }
  ]

  const handleClickItem = (idx: number) => {
    setActive(active === idx ? -1 : idx)
  }

  const handleSearch = () => {
    setShowSearchBox(true);
  }

  const handleCloseSearchBox = ()=>{
    setShowSearchBox(false);
  }

  const handleScroll = () => {
    const menu = menuRef.current || menuMbRef.current;
    if (menu) {
      const sticky = menu.offsetTop;
      if (window.pageYOffset > sticky) {
        menu.classList.add("gpintFuWgT");
      } else {
        menu.classList.remove("gpintFuWgT");
      }
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <header className='hCdNSHZRTk'>
      <div className='drHkFhMqpm'>
        <div className='JvczItqJtI IduJqlyHst TlbZfgabaX'>
          <div className='zqQSZmLQPg'><strong>HOME: </strong>319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM</div>
          <div className="nzwhZcvFWA"><span>Đăng nhập</span></div>
        </div>
      </div>
      <div className='BRTqaxuQEe' ref={menuRef}>
        <div className='HYPKWLzIJG IduJqlyHst TlbZfgabaX'>
          <label htmlFor='cOZVZoIPpb' className='LQXKHZoEqy'><img src={icMenu} alt='' /></label>
          <div className="IUTWXeZBzv">
            <div className='rWztelACQY'><img src={logo} alt="Dua Leo Shoes" /></div>
          </div>
          <div className='LQXKHZoEqy'>
            <div className='rWztelACQY'><img src={icCart} alt='' /></div>
          </div>
          <input type='checkbox' name='cOZVZoIPpb' id='cOZVZoIPpb'/>
          <div className="anpeTxxJqW">
            {menus.map((el, idx) => {
              return <div key={idx} className={`YtDjSBWBqz ${active === idx ? 'LHdYzyimnC' : ''}`}>
                <div className='QwXBYUflnN'>
                  <img src={el.image} alt={el.label} />
                  <span>{el.label}</span>
                </div>
                {el.children && <img className='LQXKHZoEqy' onClick={() => handleClickItem(idx)} src={active === idx ? icUp : icDown} alt='' />}
                {el.children &&
                  <div className='ESgyFRursg'>
                    {el.children.map((el, idx) => {
                      return <div key={`ESgyFRursg-${idx}`} className="zalfuqROxR"><div className='QwXBYUflnN'>{el.label}</div></div>
                    })}
                  </div>}
              </div>
            })}
          </div>
          <label htmlFor='cOZVZoIPpb' className='RBDSpJPOdl'></label>
          <label htmlFor='cOZVZoIPpb' className='LzaQxriKwQ'>x</label>
          <div className="VgtrukovQK">
            <div className='pcvGDbNZiN'></div>
            <div className='NsxKxwluwx' onClick={handleSearch}>
              <div className='LGWTNhpqZl'><img src={icSearch} alt='' /></div>
            </div>
            <div className='pcvGDbNZiN'></div>
            <div className='qMdxUAjtee'>
              <div className='pQDTolpXBK'>
                <span>Giỏ hàng</span>
                <img src={icCart} alt='' />
              </div>
              <div className='fEHXKFuHKl'><div className='dkmMsfIvBq'>Chưa có sản phẩm trong giỏ hàng.</div></div>
            </div>
          </div>
        </div>
      </div>
      {isShowSearchBox && <SearchBox onClose={handleCloseSearchBox}/>}
    </header>
  )
}