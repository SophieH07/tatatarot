import React, { Component } from "react";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from "reactstrap";

export default class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
        <Navbar color="dark" dark expand="md" sticky="top">
          <NavbarBrand href="/">TATATAROT</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/description">What is TAROT?</NavLink>
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
}
