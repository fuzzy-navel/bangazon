import React, {Component} from 'react';

import Requests from '../Requests/Requests';

import './Product.css';

class Product extends Component {
  state = {
    category: 0,
    price: 0,
    title: "",
    description: "",
    quantity: 0,
    owner_id: 0,
    id: 0,
    isEditing: 0,
  }

  componentDidMount() {
    const productId = this.props.match.params.id;
    return new Promise((resolve, reject) => {
      Requests.GetSingle(productId)
      .then(product => {
        // sets state with product
        this.setState({
          category: product.category,
          price: product.price,
          title: product.title,
          description: product.description,
          quantity: product.quantity,
          owner_id: product.owner_Id,
          id: product.id,
          isEditing: 0,
        })
        resolve (product);
      })
      .catch(error => reject(error));
    });
  };

  clickEditProductNow = () => {
    this.setState({
      isEditing: 1
    })
  };

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

  clickUpdateProduct = () => {
    return new Promise((resolve, reject) => {
      Requests.Update(this.state, this.state.id)
      .then(response => {
        this.setState({
          isEditing: 0,
        })
        alert('Updated Product Successfully')
        resolve(response);
      })
      .catch(error => reject(error));
    });
  };

  clickCancelUpdate = () => {
    this.props.history.push(`/products/`);
  };

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  render () {
    if (!this.state.isEditing) {
      return (
        <div>
          <h2>PRODUCT</h2>
          <p>Title: {this.state.title}</p>
          <p>Category: {this.state.category}</p>
          <p>Description: {this.state.description}</p>
          <p>Price: {this.state.price}</p>
          <p>Quantity: {this.state.quantity}</p>
          <p>Owner Id: {this.state.owner_id}</p>
          <p>Id: {this.state.id}</p>
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
          <label>Id: </label>
            <input
              readOnly
              type="number"
              name="id"
              value={this.state.id}
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