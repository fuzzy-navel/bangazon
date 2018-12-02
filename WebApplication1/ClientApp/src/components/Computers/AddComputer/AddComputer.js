import React, { Component } from 'react';

import Requests from '../Requests/Requests';

import './AddComputer.css';

class AddComputer extends Component {
  state = {
    purchaseDate: '',
    decommissioned: 0,
    employeeId: 0,
    inUse: 0,
    isMalfunctioning: 0,
  };

  clickAddNewComputer = () => {

  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2>COMPUTER</h2>
        <h3>Add New Computer</h3>
        <Form>
          <Label>Purchase Date: </Label>
          <Input
            type="text"
            name="purchaseDate"
            onChange={this.handleChange}
            value={this.state.purchaseDate}
          ></Input><br/>
          <Label>Decommissioned? </Label>
          <Input
            type="text"
            name="decommissioned"
            onChange={this.handleChange}
            value={this.state.decommissioned}
          ></Input><br/>
          <Label>Employee Id</Label>
          <Input
            type="text"
            name="employeeId"
            value={this.state.employeeId}
            onChange={this.handleChange}
          ></Input><br/>
          <Label>In Use? </Label>
          <Input
            type="text"
            name="inUse"
            value={this.state.inUse}
            onChange={this.handleChange}
          ></Input><br/>
          <Label>Is Malfunctioning? </Label>
          <Input
            type="text"
            name="isMalfunctioning"
            value={this.state.isMalfunctioning}
            onChange={this.handleChange}
          ></Input><br/>
        </Form>
        <Button
          {}
        >Save Changes</Button>
      </div>
    );
  }
};

export default AddComputer;