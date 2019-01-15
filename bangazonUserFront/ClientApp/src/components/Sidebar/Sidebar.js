import React, { Component } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

class Sidebar extends Component {
  state = {
    activeCategory: "All Categories"
  };

  componentDidMount() {}

  buttonClicked = e => {
    const activeCategory = e.target.id;
    this.setState({ activeCategory });
    this.props.callbackFromParent(activeCategory);
  };

  render() {
    const categories = [
      "All Categories",
      "Automotive",
      "Books",
      "Computers",
      "Food and Drink",
      "Health and Beauty",
      "Pet Supplies",
      "Sports",
      "Tools",
      "Toys"
    ];
    const output = categories.map(cat => {
      return (
        <Button bsSize="large" id={cat} block onClick={this.buttonClicked}>
          {cat}
        </Button>
      );
    });

    return (
      <div className="div-sidebar">
        <ButtonGroup vertical>{output}</ButtonGroup>
      </div>
    );
  }
}

export default Sidebar;
