import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import firebase from 'firebase';
import fbConnection from './firebaseRequests/connection';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Navibar from './components/Navibar/Navibar';
import Shop from './components/Shop/Shop';
import BrowseCategories from './components/Browse/BrowseCategories';
//import { Layout } from './components/Layout';
//import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';
fbConnection();

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                authed === true ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{ pathname: '/login', state: { from: props.location } }}
                        />
                    )
            }
        />
    );
};

const PublicRoute = ({ component: Component, authed, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                <Component {...props} />
            }
        />
    );
};

class App extends Component {
    displayName = App.name

    state = {
        authed: false
    }

    componentDidMount() {
        this.removeListener = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ authed: true });
            } else {
                this.setState({ authed: false });
            }
        });
    }

    componentWillUnmount() {
        this.removeListener();
    }

    runAway = () => {
        this.setState({ authed: false });
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Navibar
                            authed={this.state.authed}
                            runAway={this.runAway}
                        />
                        <div>
                            <Switch>
                                <Route path="/" exact component={Home} />
                            </Switch>
                            <PublicRoute
                                path="/register"
                                authed={this.state.authed}
                                component={Register}
                            />
                            <PublicRoute
                                path="/login"
                                authed={this.state.authed}
                                component={Login}
                            />
                            <PublicRoute
                                path="/shop"
                                authed={this.state.authed}
                                component={Shop}
                            />

                            <PublicRoute
                                path="/browseCategories"
                                authed={this.state.authed}
                                component={BrowseCategories}
                            />

                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;