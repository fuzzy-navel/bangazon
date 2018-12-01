import React, { Component } from 'react';
import './SingleCustomer.css'
import customerRequests from '../../CustomerRequests/customerRequests';

class SingleCustomer extends Component
{
  state =
  {
    customer: [],
  }

  componentDidMount()
  {
    const usrID = this.props.match.params.id;
    customerRequests.getCustomer(usrID)
      .then((res) =>
      {
        this.setState({ customer: res.data });
      })
      .catch((err) =>
      {
        console.error(err);
      });
  }

  render()
  {
    const customerComponent = this.state.customer.map((customer) =>
    {       
      return (
        <div className="row" key={customer.id}>
          <div className="col-md-3">
            <h3>{customer.first_name} {customer.last_name}</h3>
            <h4>Customer since: {customer.date_joined}</h4>
          </div>
          <div className="col-md-3 col-md-offset-3">
            <button className="btn btn-warning">Edit Account</button>
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
