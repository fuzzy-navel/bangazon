import React, { Component } from "react";
import { Checkbox, Col, Label } from "react-bootstrap";

import "./FilterProducts.css";
class FilterProducts extends Component {
  state = {
    inUse: false
  };

  toggleCheckbox = e => {
    const { name } = e.target;
    this.props.callbackFromParent(!this.state.inUse);
    this.setState({ [name]: !this.state[name] });
  };

  render() {
    return (
      <Col xs={12} className="checkbox-instock reset-margin-padding">
        <Label className="reset-margin-padding checkbox-label">
          In Stock Only?{" "}
        </Label>
        <Checkbox
          name="inUse"
          className="reset-margin-padding checkbox"
          checked={this.state.inUse}
          onChange={this.toggleCheckbox}
        />
        <br />
      </Col>
    );
  }
}

export default FilterProducts;
