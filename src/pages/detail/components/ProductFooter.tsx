import ProductRelated from './ProductRelated';
import ProductTab from './ProductTab';

import './ProductFooter.scss';

export default function ProductFooter() {
    return (
        <div className='product-footer'>
            <div className='container' style={{padding: '0 15px'}}>
                <ProductTab />
                <ProductRelated />
            </div>
        </div>
    )
}