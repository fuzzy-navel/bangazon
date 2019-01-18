import React, { Component } from "react";
import { Col } from "react-bootstrap";

import Sidebar from "../../Sidebar/Sidebar";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import SingleProduct from "../SingleProduct/SingleProduct";
import FilterProducts from "../FilterProducts/FilterProducts";

import "./ProductsAndCategories.css";

class ProductsAndCategories extends Component {
  state = {
    products: [],
    sidebar: "All Categories",
    showInStockOnly: false,
    activeProduct: 0,
    productId: null,
    displaySingleProduct: false,
    displayProducts: false,
    displayCategories: true,
    displayCart: false
  };

  determineDisplayedComponent = a => {
    if (a === "All Categories") {
      this.setState({
        displaySingleProduct: false,
        displayProducts: false,
        displayCategories: true
      });
    } else if (a === "All Products") {
      this.setState({
        displaySingleProduct: false,
        displayProducts: true,
        displayCategories: false
      });
    } else if (a > 0) {
      this.setState({
        displaySingleProduct: true,
        displayProducts: false,
        displayCategories: false
      });
    } else {
      this.setState({
        displaySingleProduct: false,
        displayProducts: true,
        displayCategories: false
      });
    }
  };

  sidebarCallback = category => {
    this.determineDisplayedComponent(category);
    this.setState({ sidebar: category });
  };

  productsCallback = productId => {
    console.log("products callback", productId);
    this.determineDisplayedComponent(productId);
    this.setState({ productId });
  };

  filterCallback = showInStockOnly => {
    this.setState({ showInStockOnly });
  };

  render() {
    return (
      <div>
        <Col xs={12}>
          <Col xs={12} sm={3} className="sidebar-menu">
            <Sidebar callbackFromParent={this.sidebarCallback} />
          </Col>
          <Col xs={12} sm={9}>
          {this.state.displaySingleProduct ? (
              <SingleProduct
                sidebar={this.state.sidebar}
                productId={this.state.productId}
              />
            ) : null}
            {this.state.displayProducts ? (
              <div>
                <FilterProducts callbackFromParent={this.filterCallback} />
                <Products
                  sidebar={this.state.sidebar}
                  showInStockOnly={this.state.showInStockOnly}
                  callbackFromParent={this.productsCallback}
                />
              </div>
            ) : null}
            {this.state.displayCategories ? (
              <Categories sidebar={this.state.sidebar} />
            ) : null}
          </Col>
        </Col>
      </div>
    );
  }
}

export default ProductsAndCategories;
