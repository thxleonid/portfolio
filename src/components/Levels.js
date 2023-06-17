import Level1 from './levels/Level1'
import Level2 from './levels/Level2'
import './Levels.css';

export default function Levels() {

    return (
        <div className='levels'>
            <Level1 />
            <Level2 />
        </div>
        
    )
}