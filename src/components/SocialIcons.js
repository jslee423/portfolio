import { FaLinkedinIn, FaGithub, FaGit } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import './SocialIcons.css';

const SocialIcons = ({ link, icon }) => {
    let iconTag = '';
    if (icon === 'linkedIn') {
        iconTag = <FaLinkedinIn style={{color: '#495867', fontSize: '20px'}} />;
    } else if (icon === 'github') {
        iconTag = <FaGithub style={{color: '#495867', fontSize: '20px'}} />;
    } else if (icon === 'mail') {
        iconTag = <AiOutlineMail style={{color: '#495867', fontSize: '20px'}} />
    } else if (icon === 'resume') {
        iconTag = <BsFillPersonLinesFill style={{color: '#495867', fontSize: '20px'}} />
    }

    return (
        <div className='icon'>
            <a href={link} target='_blank' rel='noreferrer'>
                {iconTag}
            </a>
        </div>
    );
};

export default SocialIcons;