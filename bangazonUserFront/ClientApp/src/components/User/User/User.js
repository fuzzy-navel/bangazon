import React, { Component } from 'react';
import requests from '../Requests/Requests';
import AllPaymentTypes from '../../PaymentType/AllPaymentTypes/AllPaymentTypes';
import AddPaymentTypes from '../../PaymentType/AddPaymentType/AddPaymentType';
import SinglePaymentType from '../../PaymentType/SinglePaymentType/SinglePaymentType';
import './User.css';

class User extends Component
{
  state =
    {
      user: [],
    }

  componentDidMount()
  { 
    requests.setAuthStuff();

    requests.getUser().then((res) =>
    {
      this.setState({ user: res });
    }).catch((err) =>
    {
    console.error(err);
    });
  }

  render()
  {
    return (
      <div className="container-fluid user">
        <h3>User Page</h3>
        <div className="row">
          <div className="col-md-3">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title userName">{this.state.user.first_name} {this.state.user.last_name}</h3>
              </div>
              <div className="panel-body">
                <h4>Customer Since: {this.state.user.date_joined}</h4>
                <h4>Id: {this.state.user.id}</h4>
              </div>
            </div>
            <AllPaymentTypes />
            <AddPaymentTypes />
          </div>
        </div>
      </div>
    );
  };
};

export default User;