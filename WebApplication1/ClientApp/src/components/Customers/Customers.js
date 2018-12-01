import React, { Component } from 'react';
import customerRequests from '../../CustomerRequests/customerRequests';
import './Customers.css'

class Customers extends Component {
  state =
    {
      customers: [],
      query: '',
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
      const singleCustomer = () =>   //Button routes to single customer page
      {
        this.props.history.push(`/customers/${customer.id}`);
      };

      return (
        <div key={customer.id}>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <a className="customerName" onClick={singleCustomer}>{customer.first_name} {customer.last_name}</a>
              <p>Customer since: {customer.date_joined}</p>
            </div>
          </div>
        </div>
      );
    });

    const addCustomerBtn = () =>
    {
      this.props.history.push(`/addCustomer/`);
    }

    const searchCustomers = () =>
    {
      var query = this.state.query.query;
      console.log(query)
      customerRequests.queryCustomer(query)
        .then((res) =>
        {
          console.log(res)
          this.setState({customers: res})
        })
        .catch((err) =>
        {
          console.error(err);
        });
    }

    const customerFieldStringState = (field, e) =>
    {
      const tempQuery = { ...this.state.query };
      tempQuery[field] = e.target.value;
      this.setState({ query: tempQuery });
    };

    const queryChange = (e) =>
    {
      customerFieldStringState('query', e);
    } 

    const handleKeys = (e) =>
    {
      if (e.key === 'Enter')
      {
        var query = this.state.query.query;
        console.log(query)
        customerRequests.queryCustomer(query)
          .then((res) => {
            console.log(res)
            this.setState({ customers: res })
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }

    return (
      <div>
        <h3>Customers</h3>
        <div className="row">
          <div className="col-md-3 col-md-offset-3">
            <div className="input-group">
              <input type="text" className="form-control" id="customerSearchBar" onChange={queryChange} onKeyPress={handleKeys} placeholder="Search customers..." />
              <span className="input-group-btn">
                <button className="btn btn-default" onClick={searchCustomers}>Go!</button>
              </span>
            </div>
          </div>
        </div>
        <button className="btn btn-primary" onClick={addCustomerBtn}>Add Customer</button>
          <div className="col-md-3 col-md-offset-3">
            {customerList}
          </div>
      </div>
    );
  }
};

export default Customers;