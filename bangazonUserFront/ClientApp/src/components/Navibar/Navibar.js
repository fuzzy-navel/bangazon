import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, NavItem, Button, FormGroup, FormControl } from 'react-bootstrap';
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
                        <LinkContainer to="/products">
                            <NavItem className="nav navbar-left" href="/products">View Categories</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/search">
                            <Navbar.Form pullLeft> 
                                <FormGroup>
                                    <FormControl type="text" placeholder="search for product" />
                                </FormGroup>{' '}
                                <Button type="submit">Submit</Button>
                                </Navbar.Form>
                        </LinkContainer>

                        <LinkContainer to="/myAccount">
                            <NavItem href="/myAccount">My Account</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/cart">
                            <NavItem href="/cart">Cart</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/" onClick={signoutClickEvent}>
                           <NavItem href="/signout">Sign Out</NavItem>
                        </LinkContainer>
                        )
                        :
                        (

                        <LinkContainer to="/login">
                            <NavItem href="/login">Login</NavItem>
                        </LinkContainer>
                        )
                        </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default Navibar;