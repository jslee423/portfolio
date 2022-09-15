import { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import './NavBar.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar sticky='top' expand='md' className='NavBar'>
            {/* <NavbarBrand href='/' className='me-auto'>JL</NavbarBrand> */}
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} className='me-2' />
            <Collapse isOpen={menuOpen} navbar>
                <Nav navbar className='m-auto'>
                    <NavItem>
                        <NavLink href='/'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/'>Work</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/'>Skills</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/'>Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default NavBar;