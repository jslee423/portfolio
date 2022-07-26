import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/resume.pdf';
import './NavBar.css';

const NavBar = () => {
    const [elem, setElem] = useState();
    const [elemH, setElemH] = useState();
    const [elemW, setElemW] = useState();
    const [toggleBtn, setToggleBtn] = useState();
    const [open, setOpen] = useState(true);

    let scale = undefined;
    let offsetX = undefined;
    let offsetY = undefined;

    const navBg = useRef();
    const toggleButton = useRef();

    useEffect(() => {
        setElem(navBg.current);
        setElemH(navBg.current.clientHeight);
        setElemW(navBg.current.clientWidth);
        setToggleBtn(toggleButton.current);
    }, []);

    const calculateValues = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // const offsetValue = Number(getComputedStyle(elem).getPropertyValue('--offset-value'));
        const offsetValue = Number(30);

        //  Offsets to center the circle
        offsetX = (width / 2 - elemW / 2 - offsetValue);
        offsetY = (height / 2 - elemH / 2 - offsetValue);

        // Good old pythagoras
        var radius = Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2));
        scale = radius / (elemW / 2) / 2 + .1; // Add '.1' to compensate for Safari sub pixel blur issue
        return scale;
    };

    const openMenu = () => {
        elem.style.setProperty("--translate-x", '-' + offsetX + 'px');
        elem.style.setProperty("--translate-y", '-' + offsetY + 'px');
        elem.style.setProperty("--scale", scale);
    };

    const closeMenu =  () => {
        elem.style.setProperty("--scale", 1);
        elem.style.setProperty("--translate-x", 0);
        elem.style.setProperty("--translate-y", 0);
    };
      
    const animateMenu = () => {
        open ? openMenu() : closeMenu();
    };
      
    const toggleMenu = () => {
        // open = !open;
        setOpen(!open);
        animateMenu();
        toggleBtn.classList.toggle('shown');
    };
      
    const resizeHandler = () => {
        window.requestAnimationFrame(function () {
            calculateValues();
            // animateMenu();
        });
    };
      
    calculateValues();
      
    //   toggleBtn.onclick = toggleMenu;
    //   toggleBtn.addEventListener('click', toggleMenu, false);
    window.addEventListener("resize", resizeHandler, false);
    

    return (
        <>
            <div id="nav-bg" className="btn" ref={navBg}></div>
            <div id="toggle-btn" className="btn" ref={toggleButton} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav>
                <ul>
                    <li><Link to='/' className='link' onClick={toggleMenu}>home</Link></li>
                    {/* <li><Link to="/projects" className='link' onClick={toggleMenu}>portfolio</Link></li> */}
                    {/* <li><a className="link" href="#Contact" onClick={toggleMenu}>contact</a></li> */}
                    <li><a href='https://www.linkedin.com/in/jasonlee90/' target='_blank' rel='noreferrer' className='link'>linkedIn</a></li>
                    <li><a href='https://github.com/jslee423' target='_blank' rel='noreferrer' className='link'>github</a></li>
                    <li><Link to={resume} className='link' target='_blank' rel='noreferrer'>resume</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;