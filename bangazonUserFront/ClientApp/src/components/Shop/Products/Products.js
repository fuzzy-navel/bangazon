import React, { Component } from "react";
import { Col, Table } from "react-bootstrap";

import Requests from "../../Requests/ProductRequests";

class Products extends Component {
  state = {
    products: [],
    activeProduct: "",
    sidebar: "",
    showInStockOnly: false,
    title: "",
    category: 0,
    description: "",
    price: 0,
    quantity: 0,
    owner_id: 0,
    id: 0
  };

  componentDidMount() {
    return new Promise((resolve, reject) => {
      Requests.GetAll()
      .then(products => {
        // sets state with all products
        this.setState({
          products: products
        })
        this.setState({
          sidebar: this.props.sidebar,
          showInStockOnly: this.props.showInStockOnly
        });
        resolve (products);
      })
      .catch(error => reject(error));
    });
  }

  componentWillReceiveProps() {
    this.setState((state, props) => ({
      sidebar: props.sidebar,
      showInStockOnly: props.showInStockOnly
    }));
  }

  btnClick = e => {
    const activeProduct = e.target.id;
    this.setState({ activeProduct });
    this.props.callbackFromParent(activeProduct);
  };

  render() {
    const { products } = this.state;
    let output = products
      .filter(product => {
        if (this.state.showInStockOnly) {
          return product.quantity > 0;
        } else {
          return product;
        }
      })
      .filter(product => {
        return (
          product.category === this.state.sidebar ||
          this.state.sidebar === "All Products"
        );
      })
      .map(product => {
        const { title, category, description, price, quantity, id } = product;
        return (
          <tr>
            <td id={id} onClick={this.btnClick}>
              {category}
            </td>
            <td id={id} onClick={this.btnClick}>
              {title}
            </td>
            <td id={id} onClick={this.btnClick}>
              {description}
            </td>
            <td id={id} onClick={this.btnClick}>
              ${price}
            </td>
            {quantity ? (
              <td id={id} onClick={this.btnClick}>
                {quantity}
              </td>
            ) : (
              <td className="red-text" id={id} onClick={this.btnClick}>
                {quantity}
              </td>
            )}
          </tr>
        );
      });

    return (
      <Col xs={12}>
        <h2>{this.state.sidebar}</h2>
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
    );
  }
}

export default Products;
