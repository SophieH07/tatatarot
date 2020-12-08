import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";


function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="dark" dark expand="md" sticky="top">
        <NavbarBrand href="/">TATATAROT</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/description">
                What is TAROT?
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cards">See Cards</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/generator">Pick your fortune</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default NavMenu;
