import React, {Component} from 'react';
import {Button, Form, FormControl, Label, Panel} from 'react-bootstrap';

import Requests from '../../../Requests/Product';

import './AllProducts.css';

class AllProducts extends Component {
  state = {
    products: [],
    title: '',
    category: 0,
    description: '',
    price: 0,
    quantity: 0,
    owner_id: 0,
    id: 0,
    isEditing: 0,
  }

  componentDidMount() {
    return new Promise((resolve, reject) => {
      Requests.GetAll()
      .then(products => {
        // sets state with all products
        this.setState({
          products: products
        })
        resolve (products);
      })
      .catch(error => reject(error));
    });
  };

  deleteProductFromState = deleted => {
    this.setState({
      products: this.state.products.filter(p => {
        return p.id * 1 !== deleted * 1;
      })
    });
  };

  clickDeleteProduct = e => {
    const productId = e.target.id;
    return new Promise((resolve, reject) => {
      Requests.Delete(productId)
      .then(response => {
        this.deleteProductFromState(productId);
        alert('Record deleted');
        resolve(response);
      })
      .catch(error => reject(error));
    });
  };

  clickUpdateButton = e => {
    const tempProduct = this.state.products.filter(p => {
      return p.id * 1 === e.target.id * 1;
    });
    console.log('temp product ',tempProduct);
    this.setState({
      isEditing: 1,
      title: tempProduct[0].title,
      category: tempProduct[0].category,
      description: tempProduct[0].description,
      price: tempProduct[0].price,
      quantity: tempProduct[0].quantity,
      owner_id: tempProduct[0].owner_Id,
      id: tempProduct[0].id,
    });
    console.log(this.state);
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
    const { products } = this.state;

    const output = products.map(product => {
      // Prints all product titles to DOM
      const {title, category, description, price, quantity, owner_id, id} = product;
      return (
        <div key={id}>
          <Panel defaultExpanded={false}>
            <Panel.Heading>
              <Panel.Title toggle>
                  {title}
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              {!this.state.isEditing ?
                <Panel.Body>
                  <h5>Title: {title}</h5>
                  <h5>Category: {category}</h5>
                  <h5>Description: {description}</h5>
                  <h5>Price: {price}</h5>
                  <h5>Quantity: {quantity}</h5>
                  <h5>Owner Id: {owner_id}</h5>
                  <h5>Product Id: {id}</h5>
                </Panel.Body>
              :
                <Panel.Body>
                  <Form>
                    <Label>Title: </Label>
                    <FormControl
                      type="text"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    ></FormControl><br/>
                    <Label>Category: </Label>
                    <FormControl
                      type="number"
                      name="category"
                      value={this.state.category}
                      onChange={this.handleChange}
                    ></FormControl><br/>
                    <Label>Description: </Label>
                    <FormControl
                      type="text"
                      name="description"
                      value={this.state.description}
                      onChange={this.handleChange}
                    ></FormControl><br/>
                    <Label>Price: </Label>
                    <FormControl
                      type="number"
                      name="price"
                      value={this.state.price}
                      onChange={this.handleChange}
                    ></FormControl><br/>
                  <Label>Quantity: </Label>
                    <FormControl
                      type="number"
                      name="quantity"
                      value={this.state.quantity}
                      onChange={this.handleChange}
                    ></FormControl><br/>
                  <Label>Owner Id: </Label>
                    <FormControl
                      type="number"
                      name="owner_id"
                      value={this.state.owner_id}
                      onChange={this.handleChange}
                    ></FormControl><br/>
                  <Label>Id: </Label>
                    <FormControl
                      disabled
                      readOnly
                      type="number"
                      name="id"
                      value={this.state.id}
                    ></FormControl><br/>
                  </Form>
                </Panel.Body>
              }
              <Panel.Footer>
                {!this.state.isEditing ?
                  <div>
                    <Button
                      onClick={this.clickUpdateButton}
                      id={id}
                    >Update</Button>
                    <Button id={id} onClick={this.clickDeleteProduct}>Delete</Button>
                  </div>
                  :
                  <div>
                    <Button
                      onClick={this.clickUpdateProduct}
                    >Save Changes</Button>
                    <Button
                      onClick={() => this.setState({isEditing: 0})}
                    >Cancel</Button>
                  </div>
                }
              </Panel.Footer>
            </Panel.Collapse>
          </Panel>
        </div>
      );
    });

    return (
      <div>
        <h1>Products</h1>
        <div>
          <h2>All Products:</h2>
          <Button
            onClick={() => this.props.history.push('/products/addproduct')}
            bsStyle="primary"
          >Add New Product</Button>
          <div>
            {output}
          </div>
        </div>
      </div>
    );
  }
};

export default AllProducts;
