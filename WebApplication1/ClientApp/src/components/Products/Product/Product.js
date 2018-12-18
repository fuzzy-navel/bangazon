import React, {Component} from 'react';
import {Button, Form, FormControl, Label} from 'react-bootstrap';

import Requests from '../../../Requests/Product';

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

  clickDeleteProduct = () => {
    const productId = this.state.id;
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

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  render () {
    const {isEditing, title, category, description, price, quantity, owner_id, id} = this.state;
    if (!isEditing) {
      return (
        <div>
          <h2>PRODUCT</h2>
          <p>Title: {title}</p>
          <p>Category: {category}</p>
          <p>Description: {description}</p>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          <p>Owner Id: {owner_id}</p>
          <p>Id: {id}</p>
          <Button
            onClick={() => this.setState({isEditing: 1})}
          >Edit This Record</Button>
          <Button
            onClick={this.clickDeleteProduct}
          >Delete Record</Button>
        </div>
      );
    } else {
      return (
        <div>
          <h2>PRODUCT</h2>
          <Form>
            <Label>Title: </Label>
            <FormControl
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            ></FormControl><br/>
            <Label>Category: </Label>
            <FormControl
              type="number"
              name="category"
              value={category}
              onChange={this.handleChange}
            ></FormControl><br/>
            <Label>Description: </Label>
            <FormControl
              type="text"
              name="description"
              value={description}
              onChange={this.handleChange}
            ></FormControl><br/>
            <Label>Price: </Label>
            <FormControl
              type="number"
              name="price"
              value={price}
              onChange={this.handleChange}
            ></FormControl><br/>
          <Label>Quantity: </Label>
            <FormControl
              type="number"
              name="quantity"
              value={quantity}
              onChange={this.handleChange}
            ></FormControl><br/>
          <Label>Owner Id: </Label>
            <FormControl
              type="number"
              name="owner_id"
              value={owner_id}
              onChange={this.handleChange}
            ></FormControl><br/>
          <Label>Id: </Label>
            <FormControl
              readOnly
              type="number"
              name="id"
              value={id}
            ></FormControl><br/>
          </Form>
          <Button
            onClick={this.clickUpdateProduct}
          >Save Changes</Button>
          <Button
            onClick={() => this.props.history.push(`/products/`)}
          >Cancel</Button>
        </div>
      );
    }
  }
};

export default Product;