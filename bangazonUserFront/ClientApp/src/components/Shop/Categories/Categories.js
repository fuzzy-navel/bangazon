import React, { Component } from "react";
import { Col, Image, Panel } from "react-bootstrap";

import Requests from "../../Requests/ProductTypeRequests";

import './Categories.css';

class Products extends Component {
  state = {
    categories: [],
    lastProducts: [],
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
        console.log('lastProducts',lastProducts);
        console.log('lastProducts state',this.state.lastProducts);
        console.log('categ',this.state.categories);
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

  render() {
    const { categories, lastProducts } = this.state;
    // console.log('render catg',this.state.categories);
    // console.log('render last',this.state.lastProducts);
    let output = categories.map(category => {
      // console.log('map category', category);
      let title1 = "";
      let title2 = "";
      let title3 = "";
      for (let i = 0; i < lastProducts.length; i++) {
        if (lastProducts[i].category == category.category) {
          // console.log('test',lastProducts[i].category);
          title1 += `${lastProducts[i].title}`;
          title2 += `${lastProducts[i+1].title}`;
          title3 += `${lastProducts[i+2].title}`;
          break;
        }
      }
      return (
        <Col xs={4} key={category.category}>
          <Panel className="panel-category">
            <h3 className="h2-category">{category.category}</h3>
            <div className="image-category">
              <Image
                src={`https://via.placeholder.com/275&text=${category.count}`}
                alt={category.category}
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
      <Col xs={12}>
        <h2>All Categories</h2>
        {output};
      </Col>
    );
  }
}

export default Products;
