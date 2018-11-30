import React, {Component} from 'react';

import Requests from '../Requests/Requests';

import './AddProduct.css';

class AddProduct extends Component {
  state = {
    category: 0,
    price: 0,
    title: "",
    description: "",
    quantity: 0,
    owner_id: 0,
  }

  clickAddNewProduct = () => {
    return new Promise((resolve, reject) => {
      Requests.Add(this.state)
        .then(response => {
          alert('Product saved.')
          resolve(response);
        })
        .catch(error => reject(error));
    });
  };

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  };

  render () {
    return (
      <div>
        <h2>PRODUCT</h2>
        <h3>Add New Product</h3>
        <form>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          /><br/>
          <label>Category: </label>
          <input
            type="number"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          /><br/>
          <label>Description: </label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          /><br/>
          <label>Price: </label>
          <input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          /><br/>
        <label>Quantity: </label>
          <input
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
            /><br/>
        <label>Owner Id: </label>
          <input
            type="number"
            name="owner_id"
            value={this.state.owner_id}
            onChange={this.handleChange}
          /><br/>
        </form>
        <input
          type="button"
          value="Save Changes"
          onClick={this.clickAddNewProduct}
        />
        <input
          type="button"
          value="Cancel"
          onClick={this.clickCancelAdd}
        />
      </div>
    );
  }
}

export default AddProduct;