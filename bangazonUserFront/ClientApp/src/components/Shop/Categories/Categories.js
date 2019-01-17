import React, { Component } from "react";
import { Col, Image, Panel } from "react-bootstrap";

import Requests from "../../Requests/ProductRequests";

import './Categories.css';

class Products extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.setState({
      categories: [
        "Automotive",
        "Books",
        "Computers",
        "Food and Drink",
        "Health and Beauty",
        "Pet Supplies",
        "Sports",
        "Tools",
        "Toys"
      ]
    });
  }

  render() {
    const { categories } = this.state;
    let output = categories.map(category => {
      return (
        <Col xs={4}>
          <Panel className="panel-category">
            <h3 className="h2-category">{category}</h3>
            <div className="image-category">
              <Image
                src={`https://via.placeholder.com/275&text=${category}`}
                alt={category}
                responsive
              />
            </div>
          </Panel>
        </Col>
      );
    });

    return (
      <Col xs={12}>
        <h2>All Categories</h2>
        {output};
      </Col>
    );
  }
}

export default Products;
