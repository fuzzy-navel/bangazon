import React, { Component} from 'react'
import { Navbar, Nav,  NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import './Navibar.css';

export class Navibar extends Component
{
  render()
  {
    return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a className="navbar-brand" href="/">Bangazon</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/">
            <NavItem href="/">Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/computers">
            <NavItem href="/computers">Computers</NavItem>
          </LinkContainer>
          <LinkContainer to="/customers">
            <NavItem href="/customers">Customers</NavItem>
          </LinkContainer>
          <LinkContainer to="/departments">
            <NavItem href="/departments">Departments</NavItem>
          </LinkContainer>
          <LinkContainer to="/employees">
            <NavItem href="/employees">Employees</NavItem>
          </LinkContainer>
          <LinkContainer to="/orders">
            <NavItem href="/orders">Orders</NavItem>
          </LinkContainer>
          <LinkContainer to="/paymenttypes">
            <NavItem href="/paymenttypes">Payment Types</NavItem>
          </LinkContainer>
          <LinkContainer to="/products">
            <NavItem href="/products">Products</NavItem>
          </LinkContainer>
          <LinkContainer to="/producttypes">
            <NavItem href="/producttypes">Product Types</NavItem>
          </LinkContainer>
          <LinkContainer to="/trainingprograms">
              <NavItem href="/trainingprograms">Training Programs</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar> 
   )
  }
}

export default Navibar