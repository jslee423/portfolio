import Wave from '../components/Wave';
import manOnLaptop from '../assets/images/manOnLaptop.jpg';
import SocialIcons from '../components/SocialIcons';
import './About.css';

const About = () => {
    return (
        <div className='About'>
            <h1 className='header'>about me</h1>
            <div className='AboutContent mt-5'>
                <div className='AboutText'>
                    <p>I am a recent graduate of the Nucamp Coding Bootcamp Full Stack Web & Mobile Development course where we focused on basic web dev (HTML, CSS, JS) and various frameworks such as React, React Native, MongoDB, Node and Express JS. Previously I worked as a system analyst at Credit Agricole CIB performing app support, devOps tasks, as well as SQL dev and shell scripting.</p>
                    <div className='AboutSocial mt-4'>
                        <SocialIcons link='https://www.linkedin.com/in/jasonlee90/' icon='linkedIn' />
                        <SocialIcons link='https://github.com/jslee423' icon='github' />
                    </div>
                </div>
                <img src={manOnLaptop} alt='man on laptop' className='aboutJpg' />
            </div>
            <Wave color />
        </div>
    );
};

export default About;