import { Product } from '../../../components/layout/ListItem';
import SliderCustom from '../../../components/slider/SliderCustom';

import './ProductRelated.scss';

export default function ProductRelated() {
    const products = [
        {
            image: 'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/kem-cg05055-1-grande-1.jpg',
            label: 'Giày Chunky heels gót phối viền kim loại',
            curPrice: '340,000đ',
            colors: ['pink']
        },
        {
            image: 'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/xam-9-c51956f3-235d-43d3-9dd3-327cc0a9d60b.jpg',
            label: 'Giày búp bê xu hướng oxford mũi nhọn',
            sale: 11,
            oldPrice: '350,000₫',
            curPrice: '310,000₫',
            colors: ['black', 'gray']
        },
        {
            image: 'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/do-do-cg07070-1-eb68aca2af3f405b87ca5900f448fe0d-grande.jpg',
            label: 'Giày Pumps mũi nhọn phối nơ đính đinh tán',
            curPrice: '340,000₫',
            colors: ['black', 'red', 'gray']
        },
        {
            image: 'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/do-01-ralidien-65-rg-6bd5e8ac14064de5894325a665997e71.jpg',
            label: 'Giày cao gót Heels Ralidien',
            sale: 20,
            oldPrice: '700,000₫',
            curPrice: '550,000₫',
            colors: ['black', 'gray', 'pink']
        },
        {
            image: 'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/xam-2-86c62056-d94f-4d6b-42ee-8693e7de353c-1.jpg',
            label: 'Giày búp bê mũi nhọn đính nơ thanh lịch',
            sale: 11,
            oldPrice: '350,000₫',
            curPrice: '295,000₫',
            colors: ['black', 'pink', 'gray']
        }
    ]

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div className='pVbvpUFUGI'>
            <div className='qFrOmPmAPB TlbZfgabaX'>
                <h3 className='vjRIqYnoPt'>sản phẩm tương tự</h3>
                <div className='ymFGhSoODA'>
                    <SliderCustom settings={settings}>
                        {[...products, ...products].map((el, idx) => {
                            return <Product key={idx} image={el.image} label={el.label} sale={el.sale} oldPrice={el.oldPrice} curPrice={el.curPrice} colors={el.colors} />
                        })}
                    </SliderCustom>
                </div>
            </div>
        </div>
    )
}