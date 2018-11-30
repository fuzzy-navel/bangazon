import React, {Component} from 'react';

import Requests from '../Requests/Requests';

import './Product.css';

class Product extends Component {
  state = {
    product: [],
    isEditing: 0,
  }

  componentDidMount() {
    const productId = this.props.match.params.id;
    return new Promise((resolve, reject) => {
      Requests.GetSingle(productId)
      .then(product => {
        // sets state with all products
        this.setState({
          product: product,
          isEditing: 0,
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

  clickDeleteProduct = () => {
    const productId = this.state.product.id;
    return new Promise((resolve, reject) => {
      Requests.Delete(productId)
        .then(response => {
          // redirect to product page
          this.props.history.push(`/products/`)
          resolve(response);
        })
        .catch(error => reject(error));
    });
  };

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
          <input
            type="button"
            value="Save Changes"
            onClick={this.clickUpdateProduct}
          />
          <input
            type="button"
            value="Cancel"
            onClick={this.clickCancelUpdate}
          />
        </div>
      );
    }
  }
};

export default Product;