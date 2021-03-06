import './ListItem.scss';

interface Item {
    image: string,
    label: string,
    sale?: number,
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
export function Product({ image, label, sale, oldPrice, curPrice, colors }: Item) {
    return (
        <div className='SfjdvLeEVc'>
            <div className='lBAxYrpfjt'>
                {sale && <div className='DnBoIJuupY'>{`${-sale}%`}</div>}
                <div className='NjOaAYokUY'>
                    <div className='yuLyapYuml'>
                        <img src={image} alt={label} />
                    </div>
                    <div className='albeCSDVsS'>
                        <div className='XXBFOLEOTd'>{label}</div>
                        <div className='hIvKYupObV'>
                            <div className='oSeDDXoauN'>{oldPrice && <span className='QwGHQHriAp'>{oldPrice}</span>} <span className='JRfWXIIWiM'>{curPrice}</span></div>
                            <ul className='jadaCkzyvH'>
                                {(colors || []).map((el, idx) => {
                                    return <li key={idx} className='DvBUPDqxun' style={{ backgroundColor: el }}>
                                        <div className="NqUaeMLTuW">{el}</div>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// eslint-disable-next-line @typescript-eslint/no-redeclare 
export default function ListItem({ label, items, children }: ListItem) {
    return (
        <div className='qFrOmPmAPB cZStNOGTjf TlbZfgabaX'>
            <div className='GMEliOrZJA IduJqlyHst'>
                <div className='zyfltpEFsT'>
                    <div className='KNxqRBUeOK'>
                        <h1 className='NZnEBNDEjt'>{label}</h1>
                        <div className='WuQaTowAis'></div>
                        {children}
                    </div>
                </div>
            </div>
            <div className='ymFGhSoODA cZStNOGTjf'>
                <div className='MfnjEGvPmu'>
                    {items.map((el, idx) => {
                        return (
                            <Product key={idx} image={el.image} label={el.label} sale={el.sale} oldPrice={el.oldPrice} curPrice={el.curPrice} colors={el.colors} />
                        )
                    })}
                </div>
                <div style={{ paddingTop: '25px' }}></div>
                <div className='pEiBNMftxz wZqhjjdIIW'>
                    <span>Xem t???t c???</span>
                </div>
            </div>
        </div>

    )
}