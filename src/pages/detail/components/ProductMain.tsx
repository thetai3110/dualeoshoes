import ProductDetail from './ProductDetail';
import ProductGallery from './ProductGallery';
import Sidebar from './Sidebar';

import './ProductMain.scss';

export default function ProductMain() {
    return (
        <div className='product-main'>
            <div className='container'>
                <ProductGallery />
                <ProductDetail/>
                <Sidebar />
            </div>
        </div>
    )
}