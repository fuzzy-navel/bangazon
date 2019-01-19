import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import authRequests from '../../firebaseRequests/auth';

import './Navibar.css';

export class Navibar extends Component {
    render()
    {
        const { authed, runAway } = this.props;

        const signoutClickEvent = () => {
            authRequests.logoutUser();
            runAway();
        };
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
                        <LinkContainer to="/myAccount">
                            <NavItem href="/myAccount">My Account</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/cart">
                            <NavItem href="/cart">Cart</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/" onClick={signoutClickEvent}>
                            <NavItem href="/">Sign Out</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/shop">
                            <NavItem className="nav navbar-left" href="/shop">View Categories</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/login">
                            <NavItem href="/login">Login</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/search">
                            <form className="navbar-form" action="">
                                <input type="text" placeholder="search for product" />
                            </form>
                        </LinkContainer>

                        </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default Navibar;