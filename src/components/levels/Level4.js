import './Level4.scss';
import GroundBlock from '../elements/groundBlock';
import LevelBase from './LevelBase';
import start from '../../img/level3/start.png';

import Background from './Background';
import Experience from '../elements/experience';
import Achievement from '../elements/achievement';


    export default function Level4() {
        let obstacle = require('../../img/surfaces/factoryObstacle.png');
        let bg1 = require('../../img/level2/backgrounds/1.png');
        let bg2 = require('../../img/level2/backgrounds/2.png');

        return (
            <LevelBase name='level4'>

                <Background isStretched={true} speed={-60} image={bg1} height={20}/>
                <Background isStretched={true} speed={-30} image={bg2} height={15}/>

                <Achievement text={{desc: 'Sample achievement\nSample description'}}/>

                <Achievement text={{desc: 'Sample achievement\nSample description'}}/>

                <Achievement text={{desc: 'Sample achievement\nSample description'}}/>

            </LevelBase>
        )
}