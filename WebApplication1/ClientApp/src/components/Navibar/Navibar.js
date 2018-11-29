import React, { Component } from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';

export class Navibar extends Component
{
  render()
  {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a Link to="/home">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/customers">
            Customers
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}