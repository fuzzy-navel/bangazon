import React, { Component } from "react";
import { Col, Image, Panel } from "react-bootstrap";

import Requests from "../../Requests/ProductTypeRequests";

import './Categories.css';

class Products extends Component {
  state = {
    categories: [],
    lastProducts: [],
    activeCategory: "All Categories"
  };

  componentDidMount() {
    return new Promise((resolve, reject) => {
      Requests.GetAll()
      .then(producttypes => {
        this.setState({ categories: producttypes });
        resolve (producttypes);
      });
      Requests.GetLastThreeProductsByCategory()
      .then(lastProducts => {
        this.setState({ lastProducts });
        resolve (lastProducts);
      })
      .catch(error => reject(error));
    });
  }
  // componentDidMount() {
  //   this.setState({
  //     categories: [
  //       "Automotive",
  //       "Books",
  //       "Computers",
  //       "Food and Drink",
  //       "Health and Beauty",
  //       "Pet Supplies",
  //       "Sports",
  //       "Tools",
  //       "Toys"
  //     ]
  //   });
  // }
  buttonClicked = e => {
    const activeCategory = e.target.id;
    console.log('buttonclicked',e.target.id);
    this.setState({ activeCategory });
    this.props.callbackFromParent(activeCategory);
  };

  render() {
    const { categories, lastProducts } = this.state;
    let output = categories.map(category => {
      let title1 = "";
      let title2 = "";
      let title3 = "";
      for (let i = 0; i < lastProducts.length; i++) {
        if (lastProducts[i].category === category.category) {
          title1 += `${lastProducts[i].title}`;
          title2 += `${lastProducts[i+1].title}`;
          title3 += `${lastProducts[i+2].title}`;
          break;
        }
      }
      return (
        <Col
          xs={4}
          key={category.category}
          id={category.category}
          onClick={this.buttonClicked} >
          <Panel
            className="panel-category"
            id={category.category}
            onClick={this.buttonClicked} >
            <h3 className="h2-category">{category.category}</h3>
            <div className="image-category">
              <Image
                src={`https://via.placeholder.com/275&text=${category.count}`}
                alt={category.category}
                id={category.category}
                onClick={this.buttonClicked}
                responsive
              />
            </div>
            <p>{title1}</p>
            <p>{title2}</p>
            <p>{title3}</p>
          </Panel>
        </Col>
      );
    });

    return (
      <Col xs={12} className="categories">
        <h2>All Categories</h2>
        {output};
      </Col>
    );
  }
}

export default Products;
