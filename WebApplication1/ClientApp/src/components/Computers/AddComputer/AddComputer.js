import React, { Component } from 'react';
import { Form, Label, Button } from 'react-bootstrap';

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
    return new Promise((resolve, reject) => {
      Requests.Add(this.state)
      .then(response => {
        alert('Computer saved');
        resolve(response);
      })
      .catch(error => reject(error));
    });
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
          <input
            type="text"
            name="purchaseDate"
            onChange={this.handleChange}
            value={this.state.purchaseDate}
          ></input><br/>
          <Label>Decommissioned? </Label>
          <input
            type="text"
            name="decommissioned"
            onChange={this.handleChange}
            value={this.state.decommissioned}
          ></input><br/>
          <Label>Employee Id</Label>
          <input
            type="text"
            name="employeeId"
            value={this.state.employeeId}
            onChange={this.handleChange}
          ></input><br/>
          <Label>In Use? </Label>
          <input
            type="text"
            name="inUse"
            value={this.state.inUse}
            onChange={this.handleChange}
          ></input><br/>
          <Label>Is Malfunctioning? </Label>
          <input
            type="text"
            name="isMalfunctioning"
            value={this.state.isMalfunctioning}
            onChange={this.handleChange}
          ></input><br/>
        </Form>
        <Button
          onClick={this.clickAddNewComputer}
        >Save Changes</Button>
        <Button
          onClick={() => this.props.history.push('/computers/')}
        >Cancel</Button>
      </div>
    );
  }
};

export default AddComputer;