import React, { Component } from 'react';

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
    return (
      <div>
        <h2>TRAINING PROGRAM</h2>
        <h3>Add New Training Program</h3>
        <form>
          <label>Start Date: </label>
          <input
            type="text"
            name="startdate"
            value={this.state.startdate}
            onChange={this.handleChange}
          /><br/>
          <label>End Date: </label>
          <input
            type="text"
            name="enddate"
            value={this.state.enddate}
            onChange={this.handleChange}
          /><br/>
          <label>Max Attendees: </label>
          <input
            type="text"
            name="maxattendees"
            value={this.state.maxattendees}
            onChange={this.handleChange}
          /><br/>
        </form>
        <input
          type="button"
          value="Save Changes"
          onClick={this.clickAddNewTrainingProgram}
          />
        <input
          type="button"
          value="Cancel"
          onClick={this.clickCancelAdd}
        />
      </div>
    );
  }
};

export default AddTrainingProgram;