﻿import React, { Component } from 'react';
import requests from '../Requests/Requests';
import './User.css';

class User extends Component
{
  state =
    {
      user: [],
    }

  //componentDidMount()
  //{
  //  requests.getUser(3).then((res) =>
  //  {
  //    this.setState({ user: res });
  //  }).catch((err) =>
  //  {
  //  console.error(err);
  //  });
  //}

  render()
  {
    return (
      <div className="container-fluid user">
        <h3>User Page</h3>
        <div className="row">
          <div className="col-md-3">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title userName">User Name</h3>
              </div>
              <div class="panel-body">
                <h4>Customer Since: </h4>
                <h4>Id: </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default User;