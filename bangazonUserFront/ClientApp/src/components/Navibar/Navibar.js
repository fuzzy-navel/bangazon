﻿import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, NavItem, Button, FormGroup, FormControl, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


import './Navibar.css';

export class Navibar extends Component {
    
    render()
    {
        const { authed, runAway } = this.props;
        const signoutClickEvent = () => {
        //    authRequests.logoutUser();
        //    runAway();
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
                        authed ? (
                        <LinkContainer to="/shop">
                            <NavItem className="nav navbar-left" >View Categories</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/search">
                            <NavItem>
                            <Navbar.Form pullLeft> 
                                <FormGroup>
                                    <FormControl type="text" placeholder="search for product" />
                                </FormGroup>{' '}
                                <Button type="submit">Submit</Button>
                                </Navbar.Form>
                                </NavItem>
                        </LinkContainer>

                        <LinkContainer to="/myAccount">
                            <NavItem >My Account</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/cart">
                            <NavItem >Cart</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/" onClick={signoutClickEvent}>
                           <NavItem >Sign Out</NavItem>
                        </LinkContainer>
                        )
                        :
                        (

                        <LinkContainer to="/login">
                            <NavItem >Login</NavItem>
                        </LinkContainer>
                        )
                        </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default Navibar;