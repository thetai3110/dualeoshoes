import React from 'react';
import icUp from '../../assets/images/ic_up.svg';
import './BackToTop.scss';

export default function BackToTop() {
    const [active, setActive] = React.useState(false);
    
    const handleBackToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
    const handleScroll = () => {
       setActive(window.pageYOffset > 300);
    }

    React.useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
  

    return (
        <div className={`fLQhqngIwv ${active ? 'IHlTiwtFLM' : ''}`} onClick={handleBackToTop}>
            <img className='YdAQQzHFwK' src={icUp} alt='' />
        </div>
    )
}