import React, { Component } from "react";
import { Col, Image, Panel } from "react-bootstrap";

import Requests from "../../Requests/ProductTypeRequests";

import './Categories.css';

class Products extends Component {
  state = {
    categories: [],
    lastProducts: [],
    activeCategory: "All Categories",
    activeId: 0,
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
    const incomingIdOrCategory = e.target.id;
    // if incoming is a number, set the id and pass back the id
    if (incomingIdOrCategory * 1 > 0) {
      this.setState({ activeId: (incomingIdOrCategory * 1)});
      this.props.callbackFromParentProduct((incomingIdOrCategory * 1))
    } // else, its a category, set in state and pass back category
    else {
      this.setState({ activeCategory: incomingIdOrCategory});
      this.props.callbackFromParentCategory(incomingIdOrCategory);
    };
  };

  render() {
    const { categories, lastProducts } = this.state;
    let output = categories.map(category => {
      let title1 = "";
      let title2 = "";
      let title3 = "";
      let id1 = 0;
      let id2 = 0;
      let id3 = 0;
      for (let i = 0; i < lastProducts.length; i++) {
        if (lastProducts[i].category === category.category) {
          title1 += `${lastProducts[i].title}`;
          title2 += `${lastProducts[i+1].title}`;
          title3 += `${lastProducts[i+2].title}`;
          id1 = lastProducts[i].prodId;
          id2 = lastProducts[i + 1].prodId;
          id3 = lastProducts[i + 2].prodId;
          break;
        }
      }
      return (
        <Col
          xs={4}
          key={category.category} >
          <Panel
            className="panel-category" >
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
            <p id={id1} onClick={this.buttonClicked} >{title1}</p>
            <p id={id2} onClick={this.buttonClicked} >{title2}</p>
            <p id={id3} onClick={this.buttonClicked} >{title3}</p>
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
