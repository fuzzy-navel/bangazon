import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

import Requests from '../Requests/Requests';

import './AddTrainingProgram.css';

class AddTrainingProgram extends Component {
  state = {
    startdate: '',
    enddate: '',
    maxattendees: 0,
    id: 0,
  }

  clickAddNewTrainingProgram = () => {
    return new Promise((resolve, reject) => {
      Requests.Add(this.state)
        .then(response => {
          alert('Training Program saved.');
          resolve(response);
        })
        .catch(error => reject(error));
    })
  };

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  };

  render () {
    const { startdate, enddate, maxattendees } = this.state;
    return (
      <div>
        <h2>TRAINING PROGRAM</h2>
        <h3>Add New Training Program</h3>
        <Form>
          <label>Start Date: </label>
          <input
            type="text"
            name="startdate"
            value={startdate}
            onChange={this.handleChange}
          /><br/>
          <label>End Date: </label>
          <input
            type="text"
            name="enddate"
            value={enddate}
            onChange={this.handleChange}
          /><br/>
          <label>Max Attendees: </label>
          <input
            type="text"
            name="maxattendees"
            value={maxattendees}
            onChange={this.handleChange}
          /><br/>
        </Form>
        <Button
          onClick={this.clickAddNewTrainingProgram}
        >Save Changes</Button>
        <Button
          onClick={this.clickCancelAdd}
        >Cancel</Button>
      </div>
    );
  }
};

export default AddTrainingProgram;