import React, { Component } from "react";
import { Checkbox, Col, Label } from "react-bootstrap";

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
      <Col xs={12}>
        <Label>In Stock Only? </Label>
        <Checkbox
          name="inUse"
          checked={this.state.inUse}
          onChange={this.toggleCheckbox}
        />
        <br />
      </Col>
    );
  }
}

export default FilterProducts;
