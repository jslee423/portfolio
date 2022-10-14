import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFileEarmarkPerson } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
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
        iconTag = <BsFileEarmarkPerson />
    }

    return (
        <div className='icon'>
            {!target ?
                <Link to={link} className='iconAnchor'>
                    <IconContext.Provider value={{ className: 'react-icons' }}>
                        {iconTag}
                    </IconContext.Provider>
                </Link>
            :
                <Link to={link} target='_blank' rel='noreferrer' className='iconAnchor'>
                    <IconContext.Provider value={{ className: 'react-icons' }}>
                        {iconTag}
                    </IconContext.Provider>
                </Link>
            }
        </div>
    );
};

export default SocialIcons;