import { Col, Row } from "reactstrap";
import self from '../assets/images/self_pic.jpeg';
import SocialIcons from "../components/SocialIcons";
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            {/* <img className='headShot' src={self} alt='head shot' /> */}
            <h1 className='py-2 text-gray-700 app-head'>
                Jason Lee
            </h1>
            <h2 className='pb-5 app-head'>Full Stack Developer</h2>
            <div className='social-btns'>
                <SocialIcons link='https://www.linkedin.com/in/jasonlee90/' icon='linkedIn' />
                <SocialIcons link='https://github.com/jslee423' icon='github' />
                <SocialIcons link='' icon='mail' />
                <SocialIcons link='' icon='resume' />
            </div>
        </div>
    );
};

export default Header;