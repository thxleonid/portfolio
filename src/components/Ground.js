import './Ground.css';

const Ground = ({groundImage, height}) => {
    console.log(`height: ${height}`)
    return (
        <>
            <div className='ground' style={{ height: `${height}vh`, backgroundImage: `url(${groundImage})` }}/>
        </>
    )
}

export default Ground;