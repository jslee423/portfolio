import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import './SocialIcons.css';

const SocialIcons = ({ link, icon }) => {
    let iconTag = '';
    let target = true;
    if (icon === 'linkedIn') {
        iconTag = <FaLinkedinIn />;
    } else if (icon === 'github') {
        iconTag = <FaGithub />;
    } else if (icon === 'mail') {
        iconTag = <AiOutlineMail />
        target = false;
    } else if (icon === 'resume') {
        iconTag = <BsFillPersonLinesFill />
    }

    return (
        <div className='icon'>
            {!target ?
                <a href={link}>
                    <IconContext.Provider value={{ className: 'react-icons' }}>
                        {iconTag}
                    </IconContext.Provider>
                </a>
            :
                <a href={link} target='_blank' rel='noreferrer'>
                    <IconContext.Provider value={{ className: 'react-icons' }}>
                        {iconTag}
                    </IconContext.Provider>
                </a>
            }
        </div>
    );
};

export default SocialIcons;