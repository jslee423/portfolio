import logo from './logo.svg';
import NavBar from './components/NavBar';
import Header from './sections/Header';
import Work from './sections/Work';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Work />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
