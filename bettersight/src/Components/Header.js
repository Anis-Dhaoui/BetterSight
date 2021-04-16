import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [isMenOpen, setIsMenOpen] = useState(false);
  const [isWomenOpen, setIsWomenOpen] = useState(false);

  return (
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/home">
            <img src="logo.png" alt="BetterSight" width="50px" height="30px" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} style={{background:"red", color:"black"}}/>
        <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar className="mx-auto">
                <NavItem className="itemHover">
                <NavLink className="navItem" href="/home">Home</NavLink>
                </NavItem>
                <Dropdown className="itemHover" {...props}
                        onMouseOver={() => setIsMenOpen(true)}
                        onFocus={() => setIsMenOpen(true)}
                        onMouseLeave={() => setIsMenOpen(false)}
                        onBlur={() => setIsMenOpen(false)}
                        toggle={() => setIsMenOpen(!isMenOpen)}
                        isOpen={isMenOpen}>
                    <DropdownToggle className="navItem dropdownItem">
                        Men
                    </DropdownToggle>
                    <DropdownMenu className="dropdownMenu">
                        <DropdownItem>Shop All Glasses</DropdownItem>
                        <DropdownItem>Sunglasses</DropdownItem>
                        <DropdownItem>Eyeglasses</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown className="itemHover" {...props}
                        onMouseOver={() => setIsWomenOpen(true)}
                        onFocus={() => setIsWomenOpen(true)}
                        onMouseLeave={() => setIsWomenOpen(false)}
                        onBlur={() => setIsWomenOpen(false)}
                        toggle={() => setIsWomenOpen(!isWomenOpen)}
                        isOpen={isWomenOpen}>
                    <DropdownToggle className="navItem dropdownItem">
                        Women
                    </DropdownToggle>
                    <DropdownMenu className="dropdownMenu">
                        <DropdownItem>Shop All Glasses</DropdownItem>
                        <DropdownItem>Sunglasses</DropdownItem>
                        <DropdownItem>Eyeglasses</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <NavItem className="itemHover">
                    <NavLink className="navItem" href="/">About Us</NavLink>
                </NavItem>
                <NavItem className="itemHover">
                    <NavLink className="navItem" href="/">Contact Us</NavLink>
                </NavItem>
            </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
  );
}

export default Header;