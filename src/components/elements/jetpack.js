import jetpack from '../../img/jetpack.png'
import './jetpack.scss';

export default function Jetpack() {
    return (
        <div className='jetpack parallax-front floating' >
            <img src={jetpack} alt='jetpack pickable item' />
        </div>
    )
}