import React from 'react'
import { Navbar, Nav, NavItem} from 'react-bootstrap';

import './Header.css';

const Header = () => (
  <header>
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a className="navbar-brand" href="/">Bangazon</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/computers">Computers</NavItem>
            <NavItem href="/customers">Customers</NavItem>
            <NavItem href="/departments">Departments</NavItem>
            <NavItem href="/employees">Employees</NavItem>
            <NavItem href="/orders">Orders</NavItem>
            <NavItem href="/paymenttypes">Payment Types</NavItem>
            <NavItem href="/products">Products</NavItem>
            <NavItem href="/producttypes">Product Types</NavItem>
            <NavItem href="/trainingprograms">Training Programs</NavItem>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header