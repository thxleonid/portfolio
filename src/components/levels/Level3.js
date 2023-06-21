import './Level3.scss';
import GroundBlock from '../elements/groundBlock';
import LevelBase from './LevelBase';
import start from '../../img/level3/start.png';

import Jetpack from '../elements/jetpack';
import Background from './Background';
import Experience from '../elements/experience';


    export default function Level3() {
        let obstacle = require('../../img/surfaces/factoryObstacle.png');
        let bg1 = require('../../img/level3/backgrounds/3.png');
        let bg2 = require('../../img/level3/backgrounds/4.png');
        let bg3 = require('../../img/level3/backgrounds/5.png');

        return (
            <LevelBase name='level3'>

                <Background isStretched={true} speed={-300} image={bg1} />
                <Background isStretched={true} speed={-200} image={bg2} />
                <Background isStretched={true} speed={-100} image={bg3} />

                <GroundBlock obstacle={obstacle} />

                <div className='title parallax-front'>
                    <img src={start} alt="title"  />
                </div>

                <GroundBlock obstacle={obstacle} />

                <Experience text={{title: 'ITMO UNIVERSITY', 
                                   period: 'Sept 2011 - May 2015', 
                                   desc: 'Acquired skills: knowledge of coding patterns, C++/C# and deep-level programming experience, SQL-databases administration, ability to work in a team, knowledge of computer vision systems.'
                                   }}/>

                <GroundBlock obstacle={obstacle} />

                <Experience text={{title: 'MEDIA SPECIALIST', 
                                   company: 'Academic Gymnasium #56. Saint-Petersburg, Russia',
                                   period: 'Autumn 2013', 
                                   desc: '• Maintaining the official website of the Gymnasium, technical support and news content\n• Photography of School events, both internal and external\n• Newswriting about events in the Gymnasium on the official website with a wide audience'
                                   }}/>
                
                <GroundBlock obstacle={obstacle} />

                <Experience text={{title: 'HEAD OF MEDIA DEPARTMENT ', 
                                   company: 'Academic Gymnasium #56. Saint-Petersburg, Russia',
                                   period: 'Dec 2013 - Nov 2014', 
                                   desc: '• Events organization\n• News department management\n• Developing connections with other educational institutions of the city\n• SMM-marketing'
                                   }}/>

                <GroundBlock obstacle={obstacle} />

                <Experience text={{title: 'BUSINESS OWNER', 
                                   period: 'May 2014 - July 2015', 
                                   desc: '• Production line control\n• Marketing management\n• Website management (content-marketing, SEO, SEM, etc.)\n• Increasing company’s website traffic using Google Ads'
                                   }}/>
                
                <GroundBlock obstacle={obstacle} />

                <Experience text={{title: 'SEM SPECIALIST', 
                                   company: 'LLC Lumolink. Saint-Petersburg, Russia ',
                                   period: 'Oct 2015 - June 2017', 
                                   desc: '• Search Engine Marketing\n• SMM & Crowd-Marketing\n• Targeted advertising (Facebook, Instagram, LinkedIn) & Email Campaigns\n• Brand reputation improvement'
                                   }}/>
                
                <GroundBlock obstacle={obstacle} />

                <Experience text={{title: 'MARKETING DEVELOPMENT SPECIALIST', 
                                   company: 'Telia. Tallinn, Estonia',
                                   period: 'July 2017 - May 2022', 
                                   desc: '• Automating data processing with Google Ads API (JS)\n• Creating custom marketing tools in Python / VBA\n• Full list of Google Ads related marketing activities\n• Everyday cooperation with POs, Web team, Marketing Managers\n• Data analysis via Google Analytics\n• Creating automated reports with Google Data Studio, Tableau & Google Docs\n• Providing recommendations for website optimisation'
                                   }}/>

                <GroundBlock obstacle={obstacle} />

                <Jetpack />

            </LevelBase>
        )
}