import html5Img from '../assets/images/html5.png';
import css3Img from '../assets/images/css.png';
import jsImg from '../assets/images/js.png';
import bootstrapImg from '../assets/images/bootstrap.png';
import reactImg from '../assets/images/react.png';
import nodeImg from '../assets/images/node.png';
import mongoImg from '../assets/images/mongodb.png';
import reactnatImg from '../assets/images/reactnative.svg';
import './SkillsIcons.css';

const SkillsIcons = ({ img }) => {
    let imgTag;
    let imgLabel = '';
    if (img === 'html') {
        imgTag = html5Img;
        imgLabel = 'HTML';
    } else if (img === 'css') {
        imgTag = css3Img;
        imgLabel = 'CSS';
    } else if (img === 'js') {
        imgTag = jsImg;
        imgLabel = 'JS';
    } else if (img === 'bootstrap') {
        imgTag = bootstrapImg;
        imgLabel = 'BOOTSTRAP';
    } else if (img === 'react') {
        imgTag = reactImg;
        imgLabel = 'REACT JS';
    } else if (img === 'node') {
        imgTag = nodeImg;
        imgLabel = 'NODE JS';
    } else if (img === 'mongo') {
        imgTag = mongoImg;
        imgLabel = 'MONGO DB';
    } else if (img === 'reactnative') {
        imgTag = reactnatImg;
        imgLabel = 'NATIVE';
    }

    return (
        <div className='skillsContainer'>
            <div className='skillsIcon'>
                <img src={imgTag} alt='html 5 logo' />
            </div>
            <p className='skillLabel mt-2'>{imgLabel}</p>
        </div>
    );
};

export default SkillsIcons;