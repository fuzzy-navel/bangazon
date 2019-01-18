import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'; 
import firebase from 'firebase';
import fbConnection from './firebaseRequests/connection';
import Users from './components/User/Users';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Navibar from './components/Navibar/Navibar';
import PaymentType from './components/PaymentType/PaymentType';

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
                authed === false ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{ pathname: '/orders', state: { from: props.location } }}
                        />
                    )
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
                            <PrivateRoute path="/user" authed={this.state.authed} component={Users} />
                            <PublicRoute path="/paymentTypes" authed={this.state.authed} component={PaymentType}/>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;