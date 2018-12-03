import React, { Component } from 'react';
import { Button, Form, FormControl, Label } from 'react-bootstrap';

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
          this.props.history.push('/trainingprograms/');
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
          <Label>Start Date: </Label>
          <FormControl
            type="text"
            name="startdate"
            value={startdate}
            onChange={this.handleChange}
          ></FormControl><br/>
          <Label>End Date: </Label>
          <FormControl
            type="text"
            name="enddate"
            value={enddate}
            onChange={this.handleChange}
          ></FormControl><br/>
          <Label>Max Attendees: </Label>
          <FormControl
            type="text"
            name="maxattendees"
            value={maxattendees}
            onChange={this.handleChange}
          ></FormControl><br/>
        </Form>
        <Button
          onClick={this.clickAddNewTrainingProgram}
        >Save Changes</Button>
        <Button
          onClick={() => this.props.history.push('/trainingprograms/')}
        >Cancel</Button>
      </div>
    );
  }
};

export default AddTrainingProgram;