import React, {Component} from 'react';
import axios from 'axios';

import './Product.css';

class Product extends Component {
  state = {
    product: {}
  }

  componentDidMount() {
    // grabs the id from the URL
    const id = (this.props.match.params.number) * 1;
    const apiPath = `api/product/${id}`;
    return new Promise((resolve, reject) => {
      axios
      .get(apiPath)
      .then(product => {
        this.setState({
          product: product
        })
      })
      .then(product => {
        resolve(product);
      })
      .catch(error => reject(error));
    });
  };

  render () {
    return (
      <div>
        <p>hi</p>
      </div>
    );
  }

};

export default Product;