import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  DropdownToggle,
  DropdownMenu,
  Dropdown
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [isMenOpen, setIsMenOpen] = useState(false);
  const [isWomenOpen, setIsWomenOpen] = useState(false);

  const [stick, setStick] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setStick(window.scrollY >= 350);
    })
  },[stick]);

  return (
    <Navbar id="navArea" light expand="md" className={stick ? "is-sticky" : null}>
        <NavbarBrand href="/home">
            <img src="../logo.png" alt="BetterSight" width="50px" height="30px" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="mx-md-auto">
                <NavItem className="itemHover">
                <Link to="/home" className="nav-link navItem">Home</Link>
                </NavItem>
                <Dropdown className="itemHover" {...props}
                        onMouseOver={() => setIsMenOpen(true)}
                        onFocus={() => setIsMenOpen(true)}
                        onMouseLeave={() => setIsMenOpen(false)}
                        onBlur={() => setIsMenOpen(true)}
                        toggle={() => setIsMenOpen(!isMenOpen)}
                        isOpen={isMenOpen}>
                    <DropdownToggle className="navItem dropdownItem">
                      <Link to="/men" className="dropdownToggleLink"> Men </Link>
                    </DropdownToggle>
                    <DropdownMenu className="dropdownMenu">
                        <Link to="/men" className="dropdown-item">Shop All Glasses</Link>
                        <Link to="/men/sunglasses" className="dropdown-item">Sunglasses</Link>
                        <Link to="/men/eyeglasses" className="dropdown-item">Eyeglasses</Link>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown className="itemHover" {...props}
                        onMouseOver={() => setIsWomenOpen(true)}
                        onFocus={() => setIsWomenOpen(true)}
                        onMouseLeave={() => setIsWomenOpen(false)}
                        onBlur={() => setIsWomenOpen(true)}
                        toggle={() => setIsWomenOpen(!isWomenOpen)}
                        isOpen={isWomenOpen}>
                    <DropdownToggle className="navItem dropdownItem">
                        <Link to="/women" className="dropdownToggleLink"> Women </Link>
                    </DropdownToggle>
                    <DropdownMenu className="dropdownMenu">
                        <Link to="/women" className="dropdown-item">Shop All Glasses</Link>
                        <Link to="/women/sunglasses" className="dropdown-item">Sunglasses</Link>
                        <Link to="/women/eyeglasses" className="dropdown-item">Eyeglasses</Link>
                    </DropdownMenu>
                </Dropdown>

                <NavItem className="itemHover">
                    <Link to="/about" className="nav-link navItem">About Us</Link>
                </NavItem>
                <NavItem className="itemHover">
                    <Link to="/contact" className="nav-link navItem">Contact Us</Link>
                </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Header;