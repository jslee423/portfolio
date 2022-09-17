import SkillsIcons from '../components/SkillsIcons';
import './Skills.css';

const Skills = () => {
    return (
        <div className='Skills'>
            <h1 className='SkillHeader mb-5'>skills</h1>
            <div className='skillList'>
                <div className='skillsRow mb-3'>
                    <SkillsIcons img='html' />
                    <SkillsIcons img='css' />
                    <SkillsIcons img='js' />
                    <SkillsIcons img='bootstrap' />
                </div>
                <div className='skillsRow'>
                    <SkillsIcons img='react' />
                    <SkillsIcons img='reactnative' />
                    <SkillsIcons img='node' />
                    <SkillsIcons img='mongo' />
                </div>
            </div>
        </div>
    );
};

export default Skills;