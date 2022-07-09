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
        menu.classList.add("sticky");
      } else {
        menu.classList.remove("sticky");
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
    <header className='header'>
      <div className='top-bar-wrap'>
        <div className='top-bar flex-row container'>
          <p className='top-bar-address'><strong>HOME: </strong>319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM</p>
          <a className="top-bar-login" href="/#" ><span>Đăng nhập</span></a>
        </div>
      </div>
      <div className='menu-wrap' ref={menuRef}>
        <div className='menu flex-row container'>
          <label htmlFor='ck-menu-left' className='menu-mobile-icon'><img src={icMenu} alt='' /></label>
          <div className="menu-logo">
            <a href='/#'><img src={logo} alt="Dua Leo Shoes" /></a>
          </div>
          <div className='menu-mobile-icon'>
            <a href="/#" title="Giỏ hàng">
              <img src={icCart} alt='' />
            </a>
          </div>
          <input type='checkbox' name='ck-menu-left' id='ck-menu-left'/>
          <ul className="menu-left">
            {menus.map((el, idx) => {
              return <li key={idx} className={`menu-left-item ${active === idx ? 'active' : ''}`}>
                <a href='/#' className='link'>
                  <img src={el.image} alt={el.label} />
                  <span>{el.label}</span>
                </a>
                {el.children && <img className='menu-mobile-icon' onClick={() => handleClickItem(idx)} src={active === idx ? icUp : icDown} alt='' />}
                {el.children &&
                  <ul className='menu-child'>
                    {el.children.map((el, idx) => {
                      return <li key={`menu-child-${idx}`} className="menu-child-item"><a href='/#' className='link'>{el.label}</a></li>
                    })}
                  </ul>}
              </li>
            })}
          </ul>
          <label htmlFor='ck-menu-left' className='overlap'></label>
          <label htmlFor='ck-menu-left' className='menu-close'>x</label>
          <ul className="menu-right">
            <li className='menu-right-divider'></li>
            <li className='menu-right-search' onClick={handleSearch}>
              <a href='/#'><img src={icSearch} alt='' /></a>
            </li>
            <li className='menu-right-divider'></li>
            <li className='menu-right-cart'>
              <a href="/#" title="Giỏ hàng">
                <span>Giỏ hàng</span>
                <img src={icCart} alt='' />
              </a>
              <div className='notify'><p>Chưa có sản phẩm trong giỏ hàng.</p></div>
            </li>
          </ul>
        </div>
      </div>
      {isShowSearchBox && <SearchBox onClose={handleCloseSearchBox}/>}
    </header>
  )
}