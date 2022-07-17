import React from 'react';
import logo from '../../assets/images/logo.png';
import menuItem1 from '../../assets/images/menu_item1.png';
import menuItem2 from '../../assets/images/menu_item2.png';
import menuItem3 from '../../assets/images/menu_item3.png';
import menuItem4 from '../../assets/images/menu_item4.png';
import menuItem5 from '../../assets/images/menu_item5.png';
import menuItem6 from '../../assets/images/menu_item6.png';
import icShopping from '../../assets/images/ic_shopping.svg';
import icMenu from '../../assets/images/ic_menu.svg';
import icClose from '../../assets/images/ic_close.svg';
import icDown from '../../assets/images/ic_down.svg';
import { SearchBox } from '../searchBox/SearchBox';
import BackToTop from '../backToTop/BackToTop';
import Cart from '../cart/Cart';

import './Header.scss';

export default function Header() {
  const [active, setActive] = React.useState(0);
  const [isShowMenuPanel, setShowMenuPanel] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const menuMbRef = React.useRef<HTMLDivElement>(null);

  const menus = [
    { image: menuItem1, label: 'Trang chủ' },
    { image: menuItem2, label: 'Giới thiệu' },
    {
      image: menuItem3,
      label: 'Cửa hàng',
      children: [
        { label: 'Giày búp bê' },
        { label: 'Giày cao gót' },
        { label: 'Giày xăng đan' },
        { label: 'Giày Sneaker' }
      ]
    },
    { image: menuItem4, label: 'Tin tức' },
    { image: menuItem5, label: 'Liên hệ' },
    { image: menuItem6, label: 'Chỉ đường' }
  ]

  const handleClickItem = (idx: number) => {
    setActive(active === idx ? -1 : idx)
  }

  const handleOpenMenu = () => {
    setShowMenuPanel(true);
  }

  const handleCloseMenu = () => {
    setShowMenuPanel(false);
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

  React.useEffect(() => {
    const body = document.querySelector('body');
    if (!body) return;
    if (isShowMenuPanel) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "unset";
    }
  }, [isShowMenuPanel])

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
          <div className='LQXKHZoEqy' onClick={handleOpenMenu}>
            <img src={icMenu} alt='' />
          </div>
          <div className="IUTWXeZBzv">
            <img src={logo} alt="Dua Leo Shoes" />
          </div>
          <Cart />
          <div className={`anpeTxxJqW ${isShowMenuPanel ? 'JexEIXtxov' : ''}`}>
            {menus.map((el, idx) => {
              return <div key={idx} className={`YtDjSBWBqz ${active === idx ? 'LHdYzyimnC' : ''}`}>
                <div className='QwXBYUflnN'>
                  <img src={el.image} alt={el.label} />
                  <span>{el.label}</span>
                </div>
                {el.children && <img className='LQXKHZoEqy yUGYijuxHY' onClick={() => handleClickItem(idx)} src={icDown} alt='' />}
                {el.children &&
                  <div className='ESgyFRursg'>
                    {el.children.map((el, idx) => {
                      return <div key={`ESgyFRursg-${idx}`} className="zalfuqROxR"><div className='QwXBYUflnN'>{el.label}</div></div>
                    })}
                  </div>}
              </div>
            })}
          </div>
          {isShowMenuPanel && <div className='RBDSpJPOdl' onClick={handleCloseMenu}></div>}
          {isShowMenuPanel && <div className='LzaQxriKwQ' onClick={handleCloseMenu}>
            <img src={icClose} alt='' className='GQDzUHyXlB' />
          </div>}
          <div className="VgtrukovQK">
            <div className='THdIudfPKj pcvGDbNZiN'></div>
            <SearchBox />
            <div className='THdIudfPKj pcvGDbNZiN'></div>
            <div className='THdIudfPKj qMdxUAjtee'>
              <div className='pQDTolpXBK'>
                <div className='GNEcpjzyzm'>Giỏ hàng </div>
                <img src={icShopping} alt='' />
              </div>
              <div className='fEHXKFuHKl'><div className='dkmMsfIvBq'>Chưa có sản phẩm trong giỏ hàng.</div></div>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </header>
  )
}