import './Level2.css';
import GroundBlock from '../elements/groundBlock';
import LevelBase from './LevelBase';

    export default function Level2() {
        let obstacle = require('../../img/surfaces/seaObstacle.png')
        return (
            <LevelBase name='level2'>
                <div></div>
                <GroundBlock obstacle={obstacle}/>
            </LevelBase>
        )
}