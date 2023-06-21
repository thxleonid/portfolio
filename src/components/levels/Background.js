import { Parallax } from 'react-scroll-parallax';
import './Background.scss'

const Background = ({children, image, distance, isStretched, speed=-40, height=100}) => {
    return (
        <Parallax speed={speed} className='parallax' triggeronce={'true'} style={{height: `${height}%`}}>
            {isStretched ? 
                <div style={{ backgroundImage: `url(${image})` }}/> 
                : children
            }
        </Parallax>
    )
}

export default Background;