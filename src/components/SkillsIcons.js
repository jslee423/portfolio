import './SkillsIcons.css';

const SkillsIcons = ({ img, label }) => {
    return (
        <div className='skillsContainer'>
            <div className='skillsIcon'>
                <img src={img} alt='html 5 logo' />
            </div>
            <p className='skillLabel mt-2'>{label}</p>
        </div>
    );
};

export default SkillsIcons;