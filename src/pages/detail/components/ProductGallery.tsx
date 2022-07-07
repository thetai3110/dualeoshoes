import './ProductGallery.scss';

export default function ProductGallery() {

    const handleMove = (e: any) => {
        console.log('tai.tt');
    }

    return (
        <div className='product-gallery-wrap'>
            <div className='product-gallery'>
                <img className='bg' onMouseMove={e => handleMove(e)} src='http://mauweb.monamedia.net/dualeoshoes/wp-content/uploads/2019/05/giay-saint-laurent-1-img1-600x682.jpg' alt='' />
            </div>
        </div>
    )
}