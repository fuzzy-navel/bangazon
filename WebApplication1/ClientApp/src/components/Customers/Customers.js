import React, { Component } from 'react';
import { Panel} from 'react-bootstrap'
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
          <div class="panel panel-primary">
            <div class="panel-heading">
              {customer.first_name}
            </div>
          </div>
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