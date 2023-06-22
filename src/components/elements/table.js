import './table.scss';
import { Slide } from "react-awesome-reveal";


export default function Table({ children, title, isHorizontal, headItems, rowItems }) {

    const rowNum = rowItems.length;
    const colNum = headItems.length

    return (
        <div className='table-block'>
            <h1><span>{title}</span></h1>
            <div className={`table__main-area ${isHorizontal ? 'horizontalTable' : 'verticalTable'} parallax-front` } >
                <div className='table__head'>
                    <div className='first--column' />
                    <div className='main--part' >
                        {headItems.map((item, index) => <div className='table__cell'><span>{item}</span></div>)}
                    </div>
                </div>
                <div className='table__body'>
                    <div className='first--column' >
                        {rowItems.map((item, index) => <div className='table__cell'>{item}</div>)}
                        {!isHorizontal && <div className='table__cell' />}
                    </div>
                    <div className='main--part' >
                        {isHorizontal ? 
                            rowItems.map(() => 
                                <div className='table__cell' />
                            )
                            :
                            headItems.map(() => 
                                <div className='table__cell' />
                            )
                        }
                        <div className='skill-bar__container'>
                            {children}
                            {!isHorizontal && <div className='skill-bar'></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
