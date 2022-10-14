// import Wave from '../components/Wave';
import onimortetGif from '../assets/images/onimortet.gif';
import pbjGif from '../assets/images/pbj.gif';
import cafewalnutGif from '../assets/images/cafewalnut.gif';
import formGenGif from '../assets/images/formGenerator.gif';
import parleyGif from '../assets/images/parley.gif';
import './Work.css';

const Work = () => {
    return (
        <div className='Project'>
            <h1 className='ProjectHeader mb-4 mt-5'>creative portfolio</h1>
            <div className='projectPreviews mt-4'>
                <a href="https://github.com/jslee423/onimortet" target='_blank' rel='noreferrer' className='projectLinks'>
                    <div className='mobileProject'>
                        <img src={onimortetGif} alt='onimortet gif' className='projectGif' id='onimortetGif' />
                        <h6 className='mobileLabel mt-2'>ONIMORTET</h6>
                        <p className='mobileDesc'>Tetris clone</p>
                    </div>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.pickleBallJunkies" target='_blank' rel='noreferrer' className='projectLinks'>
                    <div className='mobileProject'>
                        <img src={pbjGif} alt='onimortet gif' className='projectGif' id='pbjGif' />
                        <h6 className='mobileLabel mt-2'>PICKLE BALL JUNKIES</h6>
                        <p className='mobileDesc'>Pickle ball score tracker</p>
                    </div>
                </a>
                <a href="https://cafewalnut.netlify.app" target='_blank' rel='noreferrer' className='projectLinks'>
                    <div className='mobileProject'>
                        <img src={cafewalnutGif} alt='cafe walnut gif' className='projectGif' id='cafewalnutGif' />
                        <h6 className='mobileLabel mt-2'>CAFE WALNUT</h6>
                        <p className='mobileDesc'>Website for a friend's cafe</p>
                    </div>
                </a>
            </div>
            <div className='projectPreviews rowTwo mb-5'>
                <a href="https://parleyy.netlify.app" target='_blank' rel='noreferrer' className='projectLinks'>
                    <div className='mobileProject'>
                        <img src={parleyGif} alt='parley gif' className='projectGif' id='parleyGif' />
                        <h6 className='mobileLabel mt-2'>Parley</h6>
                        <p className='mobileDesc'>Simple chat app</p>
                    </div>
                </a>
                <a href="https://cedarbeautymembership.netlify.app" target='_blank' rel='noreferrer' className='projectLinks'>
                    <div className='mobileProject'>
                        <img src={formGenGif} alt='form generator gif' className='projectGif' id='formGif' />
                        <h6 className='mobileLabel mt-2'>MEMBERSHIP FORM GENERATOR</h6>
                        <p className='mobileDesc'>App to generate membership forms</p>
                    </div>
                </a>
            </div>
            {/* <a href='/projects' className='mt-3 projectBtnA'>
                <button type='button' className='mb-3 projectBtn'>See More</button>
            </a> */}
            {/* <Wave /> */}
        </div>
    );
};

export default Work;