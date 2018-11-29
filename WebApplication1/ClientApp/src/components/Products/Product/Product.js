import React, {Component} from 'react';
import axios from 'axios';

import './Product.css';

class Product extends Component {
  state = {
    product: []
  }

  componentDidMount() {
    const id = this.props.match.params;
    const apiPath = `api/product/${id.id}`;
    return new Promise((resolve, reject) => {
      axios
      .get(apiPath)
      .then(product => {
        // sets state with single product
        this.setState({
          product: product.data[0]
        })
        resolve (product);
      })
      .catch(error => reject(error));
    });
  };

  render () {
    const {product} = this.state;
    return (
      <div>
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
};

export default Product;