import './experience.scss';
import crane from '../../img/level3/crane.png'
import stamp from '../../img/level3/stamp.png'
/*

            
*/

const Experience = ({text}) => {
    const lines = text.desc.split('\n');

    return (
        <div className='experienceBlock' >
            <img src={crane} alt="title"  />
            
            <text>
                <h3>{text.title}</h3>
                <h5>{text.company}</h5>
                
                {lines.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </text>
            
            <div className='stamp'>
                <img src={stamp} alt="title"  />
                <p>{text.period}</p>
            </div>
        </div>
    )
}

export default Experience;