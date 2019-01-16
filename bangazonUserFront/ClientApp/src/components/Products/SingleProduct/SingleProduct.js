import React, { Component } from 'react';
import { Button, Col, Image, Panel } from 'react-bootstrap';
import Requests from '../../Requests/ProductRequests';

import './SingleProduct.css';

class SingleProduct extends Component {
  state = {
    category: 0,
    price: 0,
    title: "",
    description: "",
    quantity: 0,
    id: 0,
  }

  componentDidMount() {
    const productId = this.props.match.params.id;
    return new Promise((resolve, reject) => {
      Requests.GetSingle(productId)
      .then(product => {
        // sets state with product
        console.log('singleee',product);
        this.setState({
          category: product.category,
          price: product.price,
          title: product.title,
          description: product.description,
          quantity: product.quantity,
          id: product.id,
        })
        resolve (product);
      })
      .catch(error => reject(error));
    });
  };

  render () {
    const {title, category, description, price, quantity, id} = this.state;

    return (
      <Col xs={6} xsOffset={3}>
        <Panel className="panel-product">
          <h2 className="h2-product">{title}</h2>
            <div className="image-product">
              <Image src="https://via.placeholder.com/500&text=Bangazon" alt={title} responsive/>
            </div>
            <p>Description: {description}</p>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
            <p>Id: {id}</p>
            {quantity ?
              <Button bsStyle="primary" className="pull-right" onClick={() => this.setState({})}>Add to Cart</Button>
            :
              <Button bsStyle="danger" className="pull-right" disabled>Out of Stock</Button>
            }
        </Panel>
      </Col>
    );
  }
};

export default SingleProduct;