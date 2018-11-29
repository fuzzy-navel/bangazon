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
        <div className="col-md-3 col-md-offset-3"key={customer.id}>
          <div class="panel panel-primary">
            <div class="panel-heading">
              <a className="customerName">{customer.first_name} +" "+ {customer.last_name}</a>
              <p>{customer.date_joined}</p>
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