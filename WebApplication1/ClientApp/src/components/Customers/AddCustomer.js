import React, { Component } from 'react';
import customerRequests from '../../CustomerRequests/customerRequests';

const today = new Date();
const dateTime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const defaultCustomer =
{
  first_name: '',
  last_name: '',
  date_joined: dateTime,
  active: true
}

class AddCustomer extends Component
{
  state =
  {
    newCustomer: defaultCustomer,
  }

  formFieldStringState = (name, e) =>
  {
    const tempCustomer = { ...this.state.newCustomer };
    tempCustomer[name] = e.target.value;
    this.setState({ newCustomer: tempCustomer });
  }

  firstNameChange = (e) =>
  {
    this.formFieldStringState('first_name', e);
  };

  lastNameChange = (e) =>
  {
    this.formFieldStringState('last_name', e);
  };

  submitNewCustomer = (e) => {
    e.preventDefault();
    customerRequests.addCustomer(this.state.newCustomer);
    this.props.history.push(`/`);
  };



  render()
  {
    return (
      <div className="AddCustomer">
        <div className="row">
          <div className="col-md-3">
            <h3>First Name</h3>
            <input id="first_name" onChange={this.firstNameChange}/>
          </div>
          <div className="col-md-3">
            <h3>Last Name</h3>
            <input id="last_name" onChange={this.lastNameChange}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <button className="btn btn-primary" onClick={this.submitNewCustomer}>Submit</button>
          </div>
        </div>
      </div>  
    )
  };
}; 

export default AddCustomer;