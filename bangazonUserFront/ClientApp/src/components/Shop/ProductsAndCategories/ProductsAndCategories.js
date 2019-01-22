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
    activeProduct: 0,
    productId: null,
    displaySingleProduct: false,
    displayProducts: false,
    displayCategories: true,
    displayCart: false,
    // product display filters:
    showInStockOnly: false,
    showMostRecentProducts: false,
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
    this.setState({ productId });
    this.determineDisplayedComponent(productId);
  };

  filterInStockCallback = showInStockOnly => {
    this.setState({ showInStockOnly });
  };

  filterMostRecentProducts = showMostRecentProducts => {
    this.setState({ showMostRecentProducts });
  };

  render() {
    return (
      <Col xs={12} className="col-container reset-margin-padding">
        <Col xs={12} sm={3} className="col-sidebar reset-margin-padding">
          <Sidebar
            callbackFromParent={this.sidebarCallback} />
        </Col>
        <Col
          xs={12}
          sm={9}
          className="col-products-categories reset-margin-padding"
        >
          {this.state.displaySingleProduct ? (
            <SingleProduct
              className="reset-margin-padding"
              sidebar={this.state.sidebar}
              productId={this.state.productId}
            />
          ) : null}
          {this.state.displayProducts ? (
            <div>
              <FilterProducts
                className="reset-margin-padding"
                callbackFromParent={this.filterInStockCallback}
                callbackFromParentRecentProducts={this.filterMostRecentProducts}
              />
              <Products
                className="reset-margin-padding"
                sidebar={this.state.sidebar}
                showInStockOnly={this.state.showInStockOnly}
                showMostRecentProducts={this.state.showMostRecentProducts}
                callbackFromParent={this.productsCallback}
              />
            </div>
          ) : null}
          {this.state.displayCategories ? (
            <Categories
              className="reset-margin-padding"
              sidebar={this.state.sidebar}
              callbackFromParentCategory={this.sidebarCallback}
              callbackFromParentProduct={this.productsCallback}
            />
          ) : null}
        </Col>
      </Col>
    );
  }
}

export default ProductsAndCategories;
