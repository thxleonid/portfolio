import './Level5.scss';
import LevelBase from './LevelBase';
import Jetpack from '../elements/jetpack';
import ContactForm from '../ContactForm';
import ContactButton from '../elements/contactButton';
import { Slide } from "react-awesome-reveal";





export default function Level5() {

    return (
        <LevelBase name='level5'>

            <Jetpack />

            <Slide className='contactInfo' direction='down' delay={1000}>
                <>
                    <ContactButton social='git' />
                    <ContactButton social='linked' />
                    <ContactButton social='email' />
                </>
            </Slide>

            <ContactForm />

        </LevelBase>
    )
}