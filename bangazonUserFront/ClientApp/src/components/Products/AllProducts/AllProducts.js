import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, Checkbox, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

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
  render () {
    return (
      <div className="">
        <h2>All Products</h2>
        <Table condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mark.otto</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@jthornton</td>
            </tr>
            <tr>
            <td>3</td>
              <td>Steve</td>
              <td>O</td>
              <td>@steveo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
};

export default AllProducts;