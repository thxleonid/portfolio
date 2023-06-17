import './groundBlock.css';

const GroundBlock = ({obstacle}) => {
    return (
        <div className='groundBlock' style={{ backgroundImage: `url(${obstacle})` }} />
    )
}

export default GroundBlock;