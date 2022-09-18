import Wave from "../components/Wave";
import './ProjectPage.css';

const ProjectPage = () => {
    return (
        <div className='projects'>
            {/* <div className='projects'> */}
                <h1 className='projectHeader'>creative portfolio</h1>
                <Wave color top />
                <Wave color />
            {/* </div> */}
        </div>
    )
};

export default ProjectPage;