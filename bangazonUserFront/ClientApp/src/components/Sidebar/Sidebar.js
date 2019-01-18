import React, { Component } from "react";
import { ButtonGroup } from "react-bootstrap";

import "./Sidebar.css";

class Sidebar extends Component {
  state = {
    activeCategory: "All Categories"
  };

  buttonClicked = e => {
    const activeCategory = e.target.id;
    this.setState({ activeCategory });
    this.props.callbackFromParent(activeCategory);
  };

  render() {
    const categories = [
      "All Categories",
      "All Products",
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
      // determines if this sidebar item is active or not
      let classNamesToUse = "";
      if (cat === this.state.activeCategory) {
        classNamesToUse = "sidebar-button sidebar-active";
      } else {
        classNamesToUse = "sidebar-button";
      }

      return (
        <button
          id={cat}
          key={cat}
          onClick={this.buttonClicked}
          className={classNamesToUse}
        >
          {cat}
        </button>
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
