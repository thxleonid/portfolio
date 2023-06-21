import './achievement.scss';
import board from '../../img/level4/board.png'
import { Slide } from 'react-awesome-reveal';

const Achievement = ({text}) => {
    const lines = text.desc.split('\n');

    return (
        <Slide direction='down' className='achievementBlock'>
            < >
                <img src={board} alt="hanging board"  />

                <text>
                    {lines.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </text>
            </>
            
        </Slide>
            
    )
}

export default Achievement;