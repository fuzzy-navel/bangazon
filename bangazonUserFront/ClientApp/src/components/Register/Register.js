import React from 'react';
import { Link } from 'react-router-dom';

import authRequests from '../../firebaseRequests/auth';
import customerRequests from '../User/Requests/Requests';


class Register extends React.Component {
    state = {
        user: {
            email: '',
            password: ''
        },
        customer: {
            first_name: '',
            last_name: '',
            id: ''
        }
    };

    registerClickEvent = e => {
        const { user, customer } = this.state;
        e.preventDefault();
        authRequests
            .registerUser(user)
            .then((data) => {
                let newCustomer = customer;
                newCustomer.id = data.user.uid;
                newCustomer.date_joined = new Date().toISOString();
                newCustomer.active = true;
                console.log(newCustomer);
                customerRequests.setAuthStuff()
                    .then(() => {
                        customerRequests.addCustomer(newCustomer);
                    });
                this.props.history.push('/');
            })
            .catch(error => {
                console.error('there was an error in registering', error);
            });
    };

    emailChange = e => {
        const tempUser = { ...this.state.user };
        tempUser.email = e.target.value;
        this.setState({ user: tempUser });
    };

    passwordChange = e => {
        const tempUser = { ...this.state.user };
        tempUser.password = e.target.value;
        this.setState({ user: tempUser });
    };

    firstNameChange = e => {
        const tempCust = { ...this.state.customer };
        tempCust.first_name = e.target.value;
        this.setState({ customer: tempCust });
    };

    lastNameChange = e => {
        const tempCust = { ...this.state.customer };
        tempCust.last_name = e.target.value;
        this.setState({ customer: tempCust });
    };

    customerIdChange = (uid) => {
        const tempCust = { ...this.state.customer };
        tempCust.id = uid;
        this.setState({ customer: tempCust });
    };

    render() {
        const { user, customer } = this.state;
        return (
            <div className="Register">
                <div id="login-form">
                    <h1 className="text-center">Register</h1>
                    <form className="form-horizontal col-sm-6 col-sm-offset-3">
                        <div className="form-group">
                            <label htmlFor="inputFirstName" className="col-sm-4 control-label">
                                First Name:
              </label>
                            <div className="col-sm-8">
                                <input
                                    type="first_name"
                                    className="form-control"
                                    id="inputFirstName"
                                    placeholder="First Name"
                                    value={customer.first_name}
                                    onChange={this.firstNameChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputLastName" className="col-sm-4 control-label">
                                Last Name:
              </label>
                            <div className="col-sm-8">
                                <input
                                    type="last_name"
                                    className="form-control"
                                    id="inputLastName"
                                    placeholder="Last Name"
                                    value={customer.last_name}
                                    onChange={this.lastNameChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail" className="col-sm-4 control-label">
                                Email:
              </label>
                            <div className="col-sm-8">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmail"
                                    placeholder="Email"
                                    value={user.email}
                                    onChange={this.emailChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword" className="col-sm-4 control-label">
                                Password:
              </label>
                            <div className="col-sm-8">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    placeholder="Password"
                                    value={user.password}
                                    onChange={this.passwordChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12 text-center">
                                <Link to="/login">Need to Login?</Link>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <button
                                    type="submit"
                                    className="btn btn-default col-xs-12"
                                    onClick={this.registerClickEvent}
                                >
                                    Register
                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;