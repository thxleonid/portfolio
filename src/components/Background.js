import './Background.css';

const Background = ({groundImage}) => {
    return (
        <>
            <div className='ground' style={{ backgroundImage: `url(${groundImage})` }}/>
        </>
    )
}

export default Background;