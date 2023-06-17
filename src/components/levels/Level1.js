import './Level1.scss';
import title from '../../img/level1/hero-banner.png';
import start from '../../img/level1/start.png';
import Cloud from '../elements/cloud';
import Pyramid from '../elements/pyramid';
import GroundBlock from '../elements/groundBlock';

import church from '../../img/level1/Tallinn/church.png';
import hall from '../../img/level1/Tallinn/hall.png';
import tower from '../../img/level1/Tallinn/tower.png';

import LevelBase from './LevelBase';

import { Slide, Fade } from "react-awesome-reveal";
import { Parallax } from 'react-scroll-parallax';

import LevelOptions from '../../levelOptions';


export default function Level1() {
    let obstacle = require('../../img/surfaces/groundObstacle.png')
    return (
        <LevelBase name='level1'>
            <Parallax speed={-40} className='parallax-1' triggeronce={'true'}>
                <Cloud />
                <Cloud />
                <Cloud />
            </Parallax>

            <Parallax speed={-20} className='parallax-1' triggeronce={'true'}>
                <Pyramid />
            </Parallax>
            

            <div className='title parallax-front'>
                <img src={title} alt="title"  />
            </div>

            <div className='start parallax-front'>
                <img src={start} alt="title"  />
            </div>

            <GroundBlock obstacle={obstacle} />

            <div className='city parallax-front'>
                <div>
                    <h2>Live, Work & Chill in Tallinn</h2>
                </div>
                <div className='visuals'>
                    <Slide delay={100} direction='right' className='visual' cascade triggeronce={true}>
                        <img src={church} alt="Church in Tallinn" id='city-church' />
                        <img src={hall} alt="Town hall in Tallinn" id='city-hall' />
                        <img src={tower} alt="TV Tower in Tallinn" id='city-tower' />
                    </Slide>
                </div>
            </div>

            <GroundBlock obstacle={obstacle} />
            
            <table className='parallax-front'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Development</th>
                        <th>Analytics</th>
                        <th>Online marketing</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="4">EXPERT</td>
                    </tr>
                    <tr>
                        <td colSpan="4">ADVANCED</td>
                    </tr>
                    <tr>
                        <td colSpan="4">INTERMEDIATE</td>
                    </tr>
                    <tr>
                        <td colSpan="4">ELEMENTARY</td>
                    </tr>
                    <tr>
                        <td>BEGINNER</td>
                        <td colSpan="3">
                            <div className='skillBar-container'>
                                <Slide className='skillBar' delay={500} direction='up' >
                                    <div style={{'height' : '60%'}}/>
                                    <div style={{'height' : '90%'}}/>
                                    <div style={{'height' : '85%'}}/>
                                </Slide>
                            </div>

                        </td>
                    </tr>
                    
                    
                </tbody>
                
            </table>
        </LevelBase>
    );
}