import SocialIcons from "../components/SocialIcons";
import resume from '../assets/resume.pdf'
// import Wave from "../components/Wave";
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            {/* <img className='headShot' src={self} alt='head shot' /> */}
            <h1 className='my-2 text-gray-700 app-head'>
                Hi, I'm <span className='name'>Jason</span>
            </h1>
            <h2 className='app-head mb-3'>A Full Stack Developer</h2>
            <p className='app-p mb-5'>I’m focused on building responsive fullstack web applications while learning & exploring other technologies.</p>
            <div className='social-btns'>
                <SocialIcons link='https://www.linkedin.com/in/jasonlee90/' icon='linkedIn' />
                <SocialIcons link='https://github.com/jslee423' icon='github' />
                <SocialIcons link='#Contact' icon='mail' />
                <SocialIcons link={resume} icon='resume' />
            </div>
            {/* <Wave color top />
            <Wave color rev /> */}
        </div>
    );
};

export default Header;