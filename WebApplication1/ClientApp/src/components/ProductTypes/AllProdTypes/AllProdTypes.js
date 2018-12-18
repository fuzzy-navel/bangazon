import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

import Requests from '../ProdRequests/Requests';

import './AllProdTypes.css';


class AllProdTypes extends Component {
  state = {
    prodTypes: [],
  }

  componentDidMount() {
    return new Promise((resolve, reject) => {
      Requests.GetAll()
      .then(prodType => {
        // sets state with all products
        this.setState({
          prodTypes: prodType
        });
        resolve (prodType);
      })
      .catch(error => reject(error));
    });
  };

  clickProdType = e => {
    const id = e.target.name;
    this.props.history.push(`/producttypes/${id}`);
  }

  render () {
    const {
      prodTypes,
    } = this.state;

    const output = prodTypes.map(p => {
      return (
        <Button
          name={p.id}
          key={p.id}
          value={p.category}
          onClick={this.clickProdType}
        >{p.category}</Button>
      );
    });

    return (
      <div>
        <h1>Product Types</h1>
        <div>
          <h2>All Product Types:</h2>
          <Button
            onClick={() => this.props.history.push('/producttypes/addproducttype') }
          >Add Product Type</Button>
        </div>
        <div>
          {output}
        </div>
      </div>
    );
  }
};

export default AllProdTypes;