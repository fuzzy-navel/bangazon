import React, {Component} from 'react';
import {Button, Panel} from 'react-bootstrap';

import Requests from '../Requests/Requests';

import './AllProducts.css';

class AllProducts extends Component {
  state = {
    products: [],
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



  deleteProductFromState = () => {

  };

  clickDeleteProduct = () => {
    const productId = this.state.id;
    return new Promise((resolve, reject) => {
      Requests.Delete(productId)
      .then(response => {
        // redirect to product page
        // this.props.history.push(`/products/`);
        alert('Record deleted');
        resolve(response);
      })
      .catch(error => reject(error));
    });
  };

  // clickUpdateProduct = () => {
  //   return new Promise((resolve, reject) => {
  //     Requests.Update(this.state, this.state.id)
  //     .then(response => {
  //       this.setState({
  //         isEditing: 0,
  //       })
  //       alert('Updated Product Successfully')
  //       resolve(response);
  //     })
  //     .catch(error => reject(error));
  //   });
  // };

  // handleChange = e => {
  //   const {name, value} = e.target;
  //   this.setState({
  //     [name]: value
  //   });
  //   console.log(this.state);
  // };

  render () {
    const {
      products,
    } = this.state;

    const output = products.map(product => {
      // Prints all product titles to DOM
      const {title, description, price, quantity, owner_Id, id } = product;
      return (
        <div key={id}>
          <Panel defaultExpanded={false}>
            <Panel.Heading>
              <Panel.Title toggle>
                  {title}
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                <h5>Description: {description}</h5>
                <h5>Price: {price}</h5>
                <h5>Quantity: {quantity}</h5>
                <h5>Owner Id: {owner_Id}</h5>
                <h5>Product Id: {id}</h5>
              </Panel.Body>
              <Panel.Footer>
                <Button onClick={this.handleUpdate}>Update</Button>
                <Button id={id} onClick={this.props.delete}>Delete</Button>
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
