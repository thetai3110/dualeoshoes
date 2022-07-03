import './ListItem.scss';

interface Item {
    image: string,
    label: string,
    oldPrice?: string,
    curPrice: string,
    colors: string[],
}

interface ListItem {
    label: string,
    items: Item[],
    children?: JSX.Element;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare 
function Product({ image, label, oldPrice, curPrice, colors }: Item) {
    return (
        <div className='item-wrap'>
            <div className='item'>
                <div className='item-badge'>-11%</div>
                <div className='item-content'>
                    <div className='item-content-image'>
                        <img src={image} alt={label} />
                    </div>
                    <div className='item-content-info'>
                        <div className='title'>{label}</div>
                        <div className='price'>{oldPrice && <del>{oldPrice}</del>} <ins>{curPrice}</ins></div>
                        <ul className='color'>
                            {(colors || []).map((el, idx) => {
                                return <li key={idx} className={`color-item ${el}`} style={{ backgroundColor: el }}>
                                    <span className="tooltip">{el}</span>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

// eslint-disable-next-line @typescript-eslint/no-redeclare 
export default function ListItem({ label, items, children }: ListItem) {
    return (
        <div className='list-item flex-col container'>
            <div className='heading-wrap flex-row'>
                <div className='heading'>
                    <div className='heading-inner'>
                        <h1 className='label'>{label}</h1>
                        <div className='divider'></div>
                        {children}
                    </div>
                </div>
            </div>
            <div className='list-area flex-col'>
                <div className='list'>
                    {items.map((el, idx) => {
                        return (
                            <Product key={idx} image={el.image} label={el.label} oldPrice={el.oldPrice} curPrice={el.curPrice} colors={el.colors} />
                        )
                    })}
                </div>
                <div style={{ paddingTop: '10px' }}></div>
                <a href="/#" className='btn-view-all'>
                    <span>Xem tất cả</span>
                </a>
            </div>
        </div>

    )
}