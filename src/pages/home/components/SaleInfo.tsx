import SliderCustom from '../../../components/slider/SliderCustom';
import './SaleInfo.scss';

interface Props {
    image: string,
    label: string,
    date: string,
    desc: string,
}

// eslint-disable-next-line @typescript-eslint/no-redeclare 
function Post({ image, label, date, desc }: Props) {
    return (
        <div className='post-wrap'>
            <div className='post'>
                <div className='post-image'>
                    <img src={image} alt={label} />
                </div>
                <div className='post-info'>
                    <h5 className='title'>{label}</h5>
                    <div className='date'>{date}</div>
                    <div className='divider'></div>
                    <p className='desc'>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default function SaleInfo() {
    const posts = [
        {
            image: 'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/3-1503571730539.jpg',
            label: 'Lý do những đôi giày cao gót Christiaon Luboutin lại có đế màu đỏ độc nhất vô nhị',
            date: '7 Tháng Năm, 2019',
            desc: 'Khi bạn hỏi một cô gái đam mê thời trang rằng đâu là những món ...',
        },
        {
            image: 'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/image-5098.jpeg',
            label: 'Lộ diện đôi giày cao gót đắt nhất thế giới có giá 750 triệu đồng',
            date: '7 Tháng Năm, 2019',
            desc: 'Bạn giàu có và sở hữu số tài sản kếch xù? Bạn muốn khẳng định ...',
        },
        {
            image: 'http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/1-1503571730537.jpg',
            label: 'Có gì đặc biệt ở đôi giày vàng, đính kim cương, hột xoàn,…',
            date: '7 Tháng Năm, 2019',
            desc: 'Sau một thời gian “ém hàng”, cuối cùng, đôi giày đắt nhất thế giới có ...',
        }
    ]

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
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
        <>
            <div className='list-item sale-info container'>
                <div className='heading-wrap flex-row'>
                    <div className='heading'>
                        <div className='heading-inner'>
                            <h1 className='label'>thông tin khuyến mãi</h1>
                            <div className='divider'></div>
                        </div>
                    </div>
                </div>
                <div className='list-area'>
                    <SliderCustom settings={settings}>
                        {[...posts, ...posts].map((el, idx) => {
                            return <Post key={idx} image={el.image} label={el.label} date={el.date} desc={el.desc} />
                        })}
                    </SliderCustom>
                </div>
            </div>
        </>
    )
}