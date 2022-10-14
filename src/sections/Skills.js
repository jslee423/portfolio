import SkillsIcons from '../components/SkillsIcons';
// import Wave from '../components/Wave';
import html5Img from '../assets/images/html5.png';
import css3Img from '../assets/images/css.png';
import jsImg from '../assets/images/js.png';
import bootstrapImg from '../assets/images/bootstrap.png';
import reactImg from '../assets/images/react.png';
import nodeImg from '../assets/images/node.png';
import mongoImg from '../assets/images/mongodb.png';
import reactnatImg from '../assets/images/reactnative.svg';
import sqlImg from '../assets/images/sql.png';
import bashImg from '../assets/images/bash.png';
import gitImg from '../assets/images/git.png';
import resume from '../assets/resume.pdf';
import expressImg from '../assets/images/Expressjs.png';
import './Skills.css';

const Skills = () => {
    return (
        <div className='Skills'>
            <h1 className='SkillHeader mb-5 mt-5'>skills & experience</h1>
            <div className='skillsExp mt-2 mb-5'>
                <div className='skillList'>
                    <div className='skillsRow mb-3'>
                        <SkillsIcons img={html5Img} label='HTML' />
                        <SkillsIcons img={css3Img} label='CSS' />
                        <SkillsIcons img={jsImg} label='JS' />
                        <SkillsIcons img={bootstrapImg} label='BOOTSTRAP' />
                    </div>
                    <div className='skillsRow mb-3'>
                        <SkillsIcons img={reactImg} label='REACT JS' />
                        <SkillsIcons img={reactnatImg} label='NATIVE' />
                        <SkillsIcons img={nodeImg} label='NODE JS' />
                        <SkillsIcons img={expressImg} label='EXPRESS JS' />
                    </div>
                    <div className='skillsRow mb-3'>
                        <SkillsIcons img={mongoImg} label='MONGO DB' />
                        <SkillsIcons img={sqlImg} label='T-SQL' />
                        <SkillsIcons img={bashImg} label='BASH' />
                        <SkillsIcons img={gitImg} label='GIT' />
                    </div>
                </div>
                <div className='expList'>
                    <div className='expItem mb-3'>
                        <p className='expYear'>2022</p>
                        <div className='expHeader'>
                            <h4 className='expName'>Nucamp Coding Bootcamp</h4>
                            <p className='expTitle'>Full Stack Web & Mobile Development</p>
                        </div>
                    </div>
                    <div className='expItem mb-3'>
                        <p className='expYear'>2020</p>
                        <div className='expHeader'>
                            <h4 className='expName'>Credit Agricole CIB</h4>
                            <p className='expTitle'>System Analyst - Treasury IT Support</p>
                        </div>
                    </div>
                    <div className='expItem mb-5'>
                        <p className='expYear'>2015</p>
                        <div className='expHeader'>
                            <h4 className='expName'>FDM Group</h4>
                            <p className='expTitle'>Technical Graduate Program</p>
                        </div>
                    </div>
                    <a href={resume} target='_blank' rel='noreferrer'>
                        <button type='button' className='mb-3 resumeBtn'>Resume</button>
                    </a>
                </div>
            </div>
            {/* <Wave rev /> */}
        </div>
    );
};

export default Skills;