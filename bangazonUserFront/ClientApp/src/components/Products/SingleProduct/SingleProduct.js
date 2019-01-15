import React, { Component } from 'react';

import './SingleElement.css';

class SingleElement extends Component {
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
      <div>
        <h2>{title}</h2>
          <img src="https://via.placeholder.com/150&text=NSS+E7" alt={title}/>
          <p>Description: {description}</p>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          <p>Category: {category}</p>
          <p>Id: {id}</p>
          {quantity ?
            <Button onClick={() => this.setState({})}>Add to Cart</Button>
          :
            <Button>Out of Stock</Button>
          }
      </div>
    );
  }
};

export default SingleElement;