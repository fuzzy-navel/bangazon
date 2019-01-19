import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//import authRequests from '';

import './Navibar.css';

export class Navibar extends Component {

    render()
    {
        //const { authed, unAuthed } = this.props;
        //const signoutClickEvent = () => {
        //    authRequests.signoutUser();
        //    unAuthed();
        //};
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
                        authed ? (
                        <LinkContainer to="/myAccount">
                            <NavItem href="/myAccount">My Account</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/cart">
                            <NavItem href="/cart">Cart</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/signout">
                            <NavItem href="/signout">Sign Out</NavItem>
                        </LinkContainer>
                        )
                        :
                        (
                        <LinkContainer to="/products">
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

                        )
                        </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default Navibar;