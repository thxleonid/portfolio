import './Level2.css';
import GroundBlock from '../elements/groundBlock';
import LevelBase from './LevelBase';
import Table from '../elements/table';
import { Slide } from "react-awesome-reveal";
import SkillBar from '../elements/skillBar';
import Background from './Background';


    export default function Level2() {
        let obstacle = require('../../img/surfaces/seaObstacle.png');
        let fish1 = require('../../img/level2/fish1.png');
        let fish2 = require('../../img/level2/fish2.png');

        let bg1 = require('../../img/level2/backgrounds/1.png');
        let bg2 = require('../../img/level2/backgrounds/2.png');
        let bg3 = require('../../img/level2/backgrounds/3.png');

        return (
            <LevelBase name='level2'>
                <Background isStretched={true} speed={-100} image={bg1} />
                <Background isStretched={true} speed={-20} image={bg2} />
                <Background isStretched={true} speed={-50} image={bg3} />

                <div></div>
                <GroundBlock obstacle={obstacle}/>

                <Table 
                    title='Development Skills'
                    isHorizontal={false}
                    headItems={['BEGINNER', 'ELEMENTARY', 'INTERMEDIATE', 'ADVANCED', 'EXPERT']} 
                    rowItems={['Python', 'JavaScript', 'VBA', 'React.JS']}
                >
                    <Slide className='skill-bar' delay={500} direction='right' cascade triggerOnce={true} >
                        <SkillBar image={fish1} number={5} />
                        <SkillBar image={fish1} number={3} />
                        <SkillBar image={fish1} number={4} />
                        <SkillBar image={fish1} number={4} />
                    </Slide>
                </Table>

                <GroundBlock obstacle={obstacle}/>

                <Table 
                    title='Marketing Skills'
                    isHorizontal={false}
                    headItems={['BEGINNER', 'ELEMENTARY', 'INTERMEDIATE', 'ADVANCED', 'EXPERT']} 
                    rowItems={['Analytics', 'Creativity', 'Strategy', 'SEM']}
                >
                    <Slide className='skill-bar' delay={500} direction='right' cascade triggerOnce={true} fraction={0.75}>
                        <SkillBar image={fish2} number={5} />
                        <SkillBar image={fish2} number={3} />
                        <SkillBar image={fish2} number={4} />
                        <SkillBar image={fish2} number={4} />
                    </Slide>
                </Table>

                <GroundBlock obstacle={obstacle}/>

            </LevelBase>
        )
}