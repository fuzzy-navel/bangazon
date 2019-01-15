import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import Requests from '../../Requests/ProductRequests';

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

  render () {
    const { products } = this.state;
    const output = products.map(product => {
      // Prints all product titles to DOM
      const {title, category, description, price, quantity, id} = product;
      return (
        <tr id={id} onClick={() => this.props.history.push(`/products/${id}`)}>
          <td>{category}</td>
          <td>{title}</td>
          <td>{description}</td>
          <td>{price}</td>
          {quantity ?
            <td>{quantity}</td>
            :
            <td className="red-text">{quantity}</td>
          }
        </tr>
      );
    });

    return (
      <div className="div-productsAll">
        <h2>All Products</h2>
        <Table condensed hover>
          <thead>
            <tr>
              <th>Category</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {output}
          </tbody>
        </Table>
      </div>
    );
  }
};

export default AllProducts;