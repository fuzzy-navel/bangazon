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
          <li>{customer.first_name}</li>
        </div>
      );
    });

    return (
      <div>
        <h3>Customers</h3>
        {customerList}
      </div>
    );
  }
};

export default Customers;