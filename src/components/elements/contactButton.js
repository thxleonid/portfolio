import './contactButton.scss';
import button from '../../img/level5/button.png'
import email from '../../img/level5/icons/email.png'
import linked from '../../img/level5/icons/linked.png'
import git from '../../img/level5/icons/git.png'

const ContactButton = ({social='email'}) => {
    let icon, link;

    if (social === 'git') {
        icon = git;
        link = 'https://github.com/thxleonid';
    } else if ( social === 'linked' ) {
        icon = linked;
        link = 'https://www.linkedin.com/in/leonidstarkov/';
    } else {
        icon = email;
        link = 'mailto:leo78spb@gmail.com';
    }

    return (
        <a href={link} className='contactButton' target="_blank" rel="noreferrer" >
            <img src={button} className='button-bg' alt='Wooden button' />
            <img src={icon} className='icon' alt='Social media icon' />
        </a>
    )
}

export default ContactButton;