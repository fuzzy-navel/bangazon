import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
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
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">{customer.first_name}</Panel.Title>
            </Panel.Heading>
          </Panel>
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