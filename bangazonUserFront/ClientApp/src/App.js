import React, { Component } from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'; 
import firebase from 'firebase';
import fbConnection from './firebaseRequests/connection';
import Users from './components/User/Users';
=======
import { Route } from 'react-router';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import firebase from 'firebase';
import fbConnection from './firebaseRequests/connection';

>>>>>>> master
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Navibar from './components/Navibar/Navibar';
<<<<<<< HEAD
import PaymentType from './components/PaymentType/PaymentType';

=======
import Shop from './components/Shop/Shop';
//import { Layout } from './components/Layout';
//import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';
>>>>>>> master
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
<<<<<<< HEAD
        )
        };
=======
    );
};
>>>>>>> master

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
                                <Route component={Shop} path="/shop" />
                              <PublicRoute
                                path="/register"
                                authed={this.state.authed}
                                component={Register}
                              />
                              <PublicRoute
                                path="/login"
                                authed={this.state.authed}
                                component={Login}
<<<<<<< HEAD
                              />
                              <PrivateRoute path="/user" authed={this.state.authed} component={Users} />
                              <PrivateRoute path="/paymentTypes" authed={this.state.authed} component={PaymentType} />
                            </Switch>
=======
                            />
                            <PublicRoute
                                path="/shop"
                                authed={this.state.authed}
                                component={Shop}
                            />
>>>>>>> master
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;