import './table.css';

export default function Table({ children, headItems, rowItems }) {

    headItems.unshift('');
    const rowNum = rowItems.length;

    return (
        <table className='parallax-front'>
            <thead>
                <tr>
                    {headItems.map((item, index) => 
                        <th>{item}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {rowItems.map((item, index) => 
                    index < rowNum - 1 ? 
                    (   <tr>
                            <td colSpan={rowNum}>{item}</td>
                        </tr>
                    )
                    :
                    (   <tr>
                            <td>{item}</td>
                            <td colSpan={rowNum-1}>
                                {children}
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}
