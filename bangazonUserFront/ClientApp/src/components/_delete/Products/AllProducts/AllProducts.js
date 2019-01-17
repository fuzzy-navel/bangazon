import React, { Component } from 'react';
import { Col, Table } from 'react-bootstrap';

import Sidebar from '../../Sidebar/Sidebar';
import Requests from '../../Requests/ProductRequests';

import './AllProducts.css';

class AllProducts extends Component {
  state = {
    products: [],
    currentCategory: "All Categories",
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

  sidebarCallback = category => {
    this.setState({
      currentCategory: category
    });
  };

  render() {
    const { products } = this.state;
    let output = products
      .filter(product => {
        return (
          product.category === this.state.currentCategory ||
          this.state.currentCategory === "All Categories"
        );
      })
      .map(product => {
        const { title, category, description, price, quantity, id } = product;
        return (
          <tr
            id={id}
            onClick={() => this.props.history.push(`/products/${id}`)}
          >
            <td>{category}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>${price}</td>
            {quantity ? (
              <td>{quantity}</td>
            ) : (
              <td className="red-text">{quantity}</td>
            )}
          </tr>
        );
      });

    return (
      <Col xs={12}>
        <Col xs={12} sm={3} className="sidebar-menu">
          <Sidebar callbackFromParent={this.sidebarCallback} />
        </Col>
        <Col xs={12} sm={9}>
          <h2>{this.state.currentCategory}</h2>
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
            <tbody>{output}</tbody>
          </Table>
        </Col>
      </Col>
    );
  }
};

export default AllProducts;