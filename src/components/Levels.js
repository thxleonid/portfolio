import Level1 from './levels/Level1'
import Level2 from './levels/Level2'
import Level3 from './levels/Level3'
import Level4 from './levels/Level4'
import Level5 from './levels/Level5'
import './Levels.css';

export default function Levels() {

    return (
        <div className='levels'>
            <Level1 />
            <Level2 />
            <Level3 />
            <Level4 />
            <Level5 />
        </div>
        
    )
}