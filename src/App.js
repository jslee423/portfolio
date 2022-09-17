import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Header from './sections/Header';
// import Work from './sections/Work';
// import About from './sections/About';
// import Skills from './sections/Skills';
// import Contact from './sections/Contact';
// import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/projects' element={<ProjectPage/>} />
            </Routes>
      </div>
    );
}

export default App;
