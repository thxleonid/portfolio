import './skillBar.scss';

const SkillBar = ({image, number=1, level=100}) => {
    const elements = [];

    console.log(image)
    for (let i = 0; i < 5; i++) {
        elements.push(
            i > number-1 ? <div /> :
            <div key={i} style={{ backgroundImage: `url(${image})`, height: `${level}%`}} />
        );
    }

    return (
        <>
            {elements}
        </>
    );
}

export default SkillBar;