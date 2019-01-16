import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css';

class Navibar extends Component
{
  render()
  {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand className="navbar-brand">
            <Link to="/">Bangazon</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/">
              <NavItem href="/">Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/user">
              <NavItem href="/customers">User</NavItem>
            </LinkContainer>
            <LinkContainer to="/orders">
              <NavItem href="/orders">Basket</NavItem>
            </LinkContainer>
            <LinkContainer to="/products">
              <NavItem href="/products">Products</NavItem>
            </LinkContainer>
            <LinkContainer to="/producttypes">
              <NavItem href="/producttypes">Product Types</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
};

export default Navibar