import NavBar from './components/NavBar';
import Header from './sections/Header';
import Work from './sections/Work';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const showToastMessage = () => {
    toast.success('Message Sent!');
  };

  return (
    <div className="App">
      <NavBar />
      <Header />
      <Work />
      <About />
      <Skills />
      <Contact toast={showToastMessage} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
