import React, { Component} from 'react'
import { Navbar, Nav, MenuItem } from 'react-bootstrap';

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
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/computers">Computers</MenuItem>
          <MenuItem href="/customers">Customers</MenuItem>
          <MenuItem href="/departments">Departments</MenuItem>
          <MenuItem href="/employees">Employees</MenuItem>
          <MenuItem href="/orders">Orders</MenuItem>
          <MenuItem href="/paymenttypes">Payment Types</MenuItem>
          <MenuItem href="/products">Products</MenuItem>
          <MenuItem href="/producttypes">Product Types</MenuItem>
          <MenuItem href="/trainingprograms">Training Programs</MenuItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar> 
   )
  }
}

export default Navibar