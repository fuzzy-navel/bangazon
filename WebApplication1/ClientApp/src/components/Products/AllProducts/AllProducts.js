import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

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

  clickProduct = e => {
    const id = e.target.name;
    this.props.history.push(`/products/${id}`);
  }

  render () {
    const {
      products,
    } = this.state;

    const output = products.map(product => {
      // Prints all product titles to DOM
      return (
        <Button
          name={product.id}
          key={product.id}
          onClick={this.clickProduct}
        >{product.title}</Button>
      );
    });

    return (
      <div>
        <h1>Products</h1>
        <div>
          <h2>All Products:</h2>
          <Button
            onClick={() => this.props.history.push('/products/addproduct') }
          >Add Product</Button>
          <div>
            {output}
          </div>
        </div>
      </div>
    );
  }
};

export default AllProducts;
