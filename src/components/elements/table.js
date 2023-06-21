import './table.scss';
import { Slide } from "react-awesome-reveal";


export default function Table({ children, title, isHorizontal, headItems, rowItems }) {

    headItems.unshift('');
    const rowNum = rowItems.length;

    return (
    <div className={`parallax-front tableBlock ${isHorizontal ? 'horizontalTable' : 'verticalTable'}`}>
        <h1>{title}</h1>
        <div className='tableArea'>
        <table>
            <thead>
                <tr>
                    {headItems.map((item, index) => 
                        <th><span>{item}</span></th>
                    )}
                </tr>
            </thead>
            <tbody>
                {rowItems.map((item, index) => 
                    index < rowNum - 1 ? 
                    (   <tr>
                            <td>{item}</td>
                            {headItems.slice(0, headItems.length-1).map(() => <td></td>)}
                        </tr>
                    )
                    :
                    (   <tr>
                            <td>{item}</td>
                            {headItems.slice(0, headItems.length-1).map(() => <td></td>)}
                        </tr>
                    ))}
                {!isHorizontal && <tr>{headItems.map(() => <td></td>)}</tr>}    
            </tbody>
        </table>
        <div className='skillBar-container'>
            {children}
            {!isHorizontal && <div className='skillBar'></div>}
        </div>
        </div>
    </div>
    )
}
