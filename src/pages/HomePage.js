import NavBar from '../components/NavBar';
import Header from '../sections/Header';
import Work from '../sections/Work';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';
import { ToastContainer } from 'react-toastify';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className='homePage'>
            {/* <NavBar /> */}
                <Header />
                <Work />
                <About />
                <Skills />
                <Contact />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                />
        </div>
    );
};

export default HomePage;

