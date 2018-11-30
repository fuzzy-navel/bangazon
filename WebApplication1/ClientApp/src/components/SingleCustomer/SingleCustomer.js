import React, { Component } from 'react';
import './SingleCustomer.css'
import customerRequests from '../../CustomerRequests/customerRequests';

class SingleCustomer extends Component
{
  state =
  {
      customer: [],
      class: 'hidden',
  }

  componentDidMount()
  {
    const usrID = this.props.match.params.id;
    customerRequests.getCustomer(usrID)
      .then((res) =>
      {
        this.setState({ customer: res });
        this.setState({ updatedCustomer: res });
      })
      .catch((err) =>
      {
        console.error(err);
      });

  }

  showEditor = () => 
  {
    if (this.state.class === 'hidden')
    {
      this.setState({ class: '' });
    }
    else
    {
      this.setState({ class: 'hidden' });
    }
  } 


  updateCustomer = () =>
  {
    const updatedCustomer = this.state.customer[0]
    const id = this.state.customer[0].id
    customerRequests.updateCustomer(id, updatedCustomer);
    this.props.history.push('/');
  }

  render()
  {

    
    const customerFieldStringState = (field, e) => {
      const tempCustomer = { ...this.state.customer };
      tempCustomer[0][field] = e.target.value;
      this.setState({ updatedCustomer: tempCustomer });
    };

    const firstNameChange = (e) => {
      customerFieldStringState('first_name', e);
    };

    const lastNameChange = (e) => {
      customerFieldStringState('last_name', e);
    };

    const customerComponent = this.state.customer.map((customer) =>
    {       
      return (
        <div className="row" key={customer.id}>
          <div className="col-md-3">
            <h3>{customer.first_name} {customer.last_name}</h3>
            <h4>Customer since: {customer.date_joined}</h4>
            <h4>Active: {customer.active.toString()}</h4>
          </div>
          <div className="col-md-3 col-md-offset-3">
            <button className="btn btn-warning" onClick={this.showEditor}>Edit Account</button>
            <h3 className={this.state.class === 'hidden' ? 'hidden' : ''} >First Name</h3>
            <input className={this.state.class === 'hidden' ? 'hidden' : ''} id="first_name" onChange={firstNameChange} value={customer.first_name}/>
            <h3 className={this.state.class === 'hidden' ? 'hidden' : ''}>Last Name</h3>
            <input className={this.state.class === 'hidden' ? 'hidden' : ''} id="last_name" onChange={lastNameChange} value={customer.last_name} />
            <h3> </h3>
            <button className={this.state.class === 'hidden' ? 'hidden btn btn-primary' : 'btn btn-primary'} onClick={this.updateCustomer}>Submit</button>
          </div>
        </div>
      );
    });

    return (
      <div className="singleCustomer">
        {customerComponent}
      </div>
    )
  }
}

export default SingleCustomer;
