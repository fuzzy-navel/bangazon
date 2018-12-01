import React, { Component } from 'react';
import customerRequests from '../../CustomerRequests/customerRequests';
import './Customers.css'

class Customers extends Component {
  state =
    {
      customers: [],
    }

  componentDidMount() {
    customerRequests.getCustomers()
      .then((res) => {
        this.setState({ customers: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }


  render()
  {

    const customerList = this.state.customers.map((customer) =>
    {
      return (
        <div key={customer.id}>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <a className="customerName">{customer.first_name} {customer.last_name}</a>
              <p>Customer since: {customer.date_joined}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h3>Customers</h3>
          <div className="col-md-3 col-md-offset-3">
            {customerList}
          </div>
      </div>
    );
  }
};

export default Customers;