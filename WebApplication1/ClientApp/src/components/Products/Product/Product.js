import React, {Component} from 'react';
import axios from 'axios';

import './Product.css';

class Product extends Component {
  state = {
    product: [],
    isEditing: 0,
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const apiPath = `api/product/${id}`;
    return new Promise((resolve, reject) => {
      axios
      .get(apiPath)
      .then(product => {
        // sets state with single product
        this.setState({
          product: product.data[0],
          isEditing: 0
        })
        resolve (product);
      })
      .catch(error => reject(error));
    });
  };

  clickEditProductNow = e => {
    this.setState({
      isEditing: 1
    })
  }

  render () {
    const {product} = this.state;
    if (!this.state.isEditing) {
      return (
        <div>
          <h2>PRODUCT</h2>
          <p>Title: {product.title}</p>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Owner Id: {product.owner_id}</p>
          <p>Id: {product.id}</p>
          <input
            type="button"
            value="Edit This Record"
            onClick={this.clickEditProductNow}
          />
          <input
            type="button"
            value="Delete Record"
            onClick={this.clickDeleteProduct}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h2>PRODUCT</h2>
          <form>
            <label>Title: </label>
            <input
              type="text"
              name="product-name"
              value={product.title}
            /><br/>
            <label>Category: </label>
            <input
              type="number"
              name="product-category"
              value={product.category}
            /><br/>
            <label>Description: </label>
            <input
              type="text"
              name="product-description"
              value={product.description}
            /><br/>
            <label>Price: </label>
            <input
              type="number"
              name="product-price"
              value={product.price}
            /><br/>
          <label>Quantity: </label>
            <input
              type="number"
              name="product-quantity"
              value={product.quantity}
              /><br/>
          <label>Owner Id: </label>
            <input
              type="number"
              name="product-owner-id"
              value={product.owner_id}
            /><br/>
          <label>Id: </label>
            <input
              type="number"
              name="product-id"
              value={product.id}
            /><br/>
          </form>
        </div>
      );
    }
  }
};

export default Product;