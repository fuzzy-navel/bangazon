import React, { Component } from "react";
import { Checkbox, Col, Label } from "react-bootstrap";

import "./FilterProducts.css";
class FilterProducts extends Component {
  state = {
    inStock: false,
    mostRecent: false,
  };

  toggleInStockCheckbox = e => {
    const { name } = e.target;
    this.props.callbackFromParent(!this.state.inStock);
    this.setState({ [name]: !this.state[name] });
  };

  toggleMostRecentCheckbox = e => {
    if (this.state.mostRecent === false) {
      // this will now show the 20 latest products
      this.setState({mostRecent: true})
      this.props.callbackFromParent(true);
    }
    else {
      // this will show ALL products
      this.setState({mostRecent: false})
      this.props.callbackFromParentRecentProducts(false);
    }

    const { name } = e.target;
    this.props.callbackFromParentRecentProducts(!this.state.inStock);
    this.setState({ [name]: !this.state[name] });
  };

  render() {
    return (
      <Col xs={12} className="checkbox-instock reset-margin-padding">
        <Label className="reset-margin-padding checkbox-label">
          In Stock Only?
        </Label>
        <Checkbox
          name="inStock"
          className="reset-margin-padding checkbox"
          checked={this.state.inStock}
          onChange={this.toggleInStockCheckbox}
        />
        <Label className="reset-margin-padding checkbox-label">
          20 Newest Products?
        </Label>
        <Checkbox
          name="mostRecent"
          className="reset-margin-padding checkbox"
          checked={this.state.mostRecent}
          onChange={this.toggleMostRecentCheckbox}
        />
      </Col>
    );
  }
}

export default FilterProducts;
