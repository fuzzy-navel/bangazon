import React, { Component } from 'react';
<<<<<<< HEAD
import { Route } from 'react-router';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import firebase from 'firebase';
import fbConnection from './firebaseRequests/connection';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
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
=======
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navibar from './components/Navibar/Navibar';

//import { Layout } from './components/Layout';
//import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';

export default class App extends Component {
  //displayName = App.name

  render() {
      return (
          <BrowserRouter>
              <div>
                  <Navibar />
                  <div className="container">
                      <div className="row">
                          <Switch>
                          </Switch>
                      </div>
                  </div>
              </div>
          </BrowserRouter>

      //<Layout>
      //  <Route exact path='/' component={Home} />
      //  <Route path='/counter' component={Counter} />
      //  <Route path='/fetchdata' component={FetchData} />
      //</Layout>
>>>>>>> master
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
                        <h1>Hello World</h1>
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
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;