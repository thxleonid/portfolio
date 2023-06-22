import './Level1.scss';
import title from '../../img/level1/hero-banner.png';
import start from '../../img/level1/start.png';
import Cloud from '../elements/cloud';
import Pyramid from '../elements/pyramid';
import GroundBlock from '../elements/groundBlock';
import Table from '../elements/table';

import church from '../../img/level1/Tallinn/church.png';
import hall from '../../img/level1/Tallinn/hall.png';
import tower from '../../img/level1/Tallinn/tower.png';

import LevelBase from './LevelBase';

import { Slide, Fade } from "react-awesome-reveal";
import { Parallax } from 'react-scroll-parallax';
import SkillBar from '../elements/skillBar';
import Background from './Background';

import LevelOptions from '../../levelOptions';


export default function Level1() {
    let obstacle = require('../../img/surfaces/groundObstacle.png')
    let cactus = require('../../img/cactus.png')
    return (
        <LevelBase name='level1'>
            <Background isStretched={false} speed={-40}>
                <Cloud />
                <Cloud />
                <Cloud />
            </Background>

            <Background isStretched={false} speed={-20}>
                <Pyramid />
            </Background>
            

            <div className='title parallax-front'>
                <img src={title} alt="title"  />
            </div>

            <div className='start parallax-front'>
                <img src={start} alt="title"  />
            </div>

            <GroundBlock obstacle={obstacle} />

            <Table 
                title='Marketing Development Expert'
                isHorizontal={true}
                headItems={['Development', 'Analytics', 'Online marketing']} 
                rowItems={['EXPERT', 'ADVANCED', 'INTERMEDIATE', 'ELEMENTARY', 'BEGINNER']}
            >
                <Slide className='skill-bar' delay={500} direction='up' >
                    <SkillBar image={cactus} level={100} />
                    <SkillBar image={cactus} level={80} />
                    <SkillBar image={cactus} level={90} />
                </Slide>
            </Table>
            
            <GroundBlock obstacle={obstacle} />

            <div className='city parallax-front'>
                <div>
                    <h2>Live, Work & Chill in Tallinn</h2>
                </div>
                <div className='visuals'>
                    <Slide delay={100} direction='right' className='visual' triggerOnce={true}>
                        <img src={church} alt="Church in Tallinn" id='city-church' />
                        <img src={hall} alt="Town hall in Tallinn" id='city-hall' />
                        <img src={tower} alt="TV Tower in Tallinn" id='city-tower' />
                    </Slide>
                </div>
            </div>

            <GroundBlock obstacle={obstacle} />
            
        </LevelBase>
    );
}