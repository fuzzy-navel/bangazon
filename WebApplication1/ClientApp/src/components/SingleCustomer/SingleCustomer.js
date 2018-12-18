import React, { Component } from 'react';
import './SingleCustomer.css'
import customerRequests from '../../Requests/customerRequests';

class SingleCustomer extends Component
{
  state =
  {
      customer: [],
      payments: [],
      products: [],
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
        customerRequests.getCustomerWithPaymentTypes(usrID)
          .then((res) =>
          {
            this.setState({ payments: res });
            customerRequests.getCustomerWithProducts(usrID)
              .then((res) =>
              {
                this.setState({ products: res });
              })
          });
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

    const paymentsComponent = this.state.payments.map((payment) =>
    {
      return (
        <div key={payment.id}>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <p>{payment.title}</p>               
            </div>
            <div className="panel-body">
              <p>{payment.account_number}</p>
            </div>
          </div>
        </div>
      )
    })

    const productsComponent = this.state.products.map((product) =>
    {
      return (
        <div key={product.id}>
          <div className="panel panel-warning">
            <div className="panel-heading">
              {product.title}
            </div>
            <div className="panel-body">
              <p>Description: {product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity Available: {product.quantity}</p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="singleCustomer">
        {customerComponent}
        <div className="row">
          <div className="col-md-3">
            <h3>Payment Types</h3>
            {paymentsComponent}
          </div>
          <div className="col-md-3">
            <h3>Products</h3>
            {productsComponent}
          </div>
        </div>
      </div>
    )
  }
}

export default SingleCustomer;
