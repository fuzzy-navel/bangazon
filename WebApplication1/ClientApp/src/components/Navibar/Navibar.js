import React, { Component} from 'react'
import {Link} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './Navibar.css';

export class Navibar extends Component
{
  render()
  {
    return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand className="navbar-brand">
          <Link to ="/">Bangazon</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem componentClass='span'>
            <Link to ="/">Home</Link>
          </NavItem>
          <NavItem componentClass='span'>
            <Link to="/computers">Computers</Link>
          </NavItem>
          <NavItem componentClass='span'>
            <Link to ="/customers">Cusomters</Link>
          </NavItem>
          <NavItem componentClass='span'>
            <Link to ="/departments">Departments</Link>
          </NavItem>
          <NavItem componentClass='span'>
            <Link to ="/employees">Employees</Link>
          </NavItem>
          <NavItem componentClass='span'>
            <Link to ="/orders">Orders</Link>
          </NavItem>
          <NavItem componentClass='span'>
            <Link to ="/paymenttypes">Payment Types</Link>
          </NavItem>
          <NavItem componentClass='span'>
            <Link to ="/products">Products</Link>
          </NavItem>
          <NavItem componentClass='span'>
            <Link to ="/producttypes">Product Types</Link>
          </NavItem>
          <NavItem componentClass='span'>
            <Link to ="/trainingprograms">Training Programs</Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   )
  }
}

export default Navibar