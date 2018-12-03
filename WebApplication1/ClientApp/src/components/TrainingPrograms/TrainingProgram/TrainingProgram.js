import React, { Component } from 'react';

import Requests from '../Requests/Requests';

import './TrainingProgram.css';

class TrainingProgram extends Component {
  state = {
    startdate: '',
    enddate: '',
    maxattendees: 0,
    id: 0,
    isEditing: 0,
  }

  componentDidMount() {
    const tpId = this.props.match.params.id;
    return new Promise((resolve, reject) => {
      Requests.GetSingle(tpId)
      .then(tp => {
        this.setState({
          startdate: tp.start_Date,
          enddate: tp.end_Date,
          maxattendees: tp.max_Attendees,
          id: tp.id,
          isEditing: 0,
        });
        resolve(tp);
      })
      .catch(error => reject(error));
    });
  };

  clickDeleteTrainingProgram = () => {
    const tpId = this.state.id;
    return new Promise((resolve, reject) => {
      Requests.Delete(tpId)
        .then(response => {
          alert('Record deleted successfully');
          this.props.history.push(`/trainingprograms/`);
          resolve(response);
        })
        .catch(error => reject(error));
    });
  };

  clickUpdateTrainingProgram = () => {
    return new Promise((resolve, reject) => {
      Requests.Update(this.state, this.state.id)
      .then(response => {
        this.setState({isEditing: 0});
        alert('Updated Training Program Successfully');
        resolve(response);
      })
      .catch(error => reject(error));
    });
  };

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  };

  render () {
    if (!this.state.isEditing) {
      return (
        <div>
          <h2>TRAINING PROGRAM</h2>
          <p>Start Date: {this.state.startdate}</p>
          <p>End Date: {this.state.enddate}</p>
          <p>Max Attendees: {this.state.maxattendees}</p>
          <p>Id: {this.state.id}</p>
          <input
            type="button"
            value="Edit This Record"
            onClick={() => this.setState({isEditing: 1})}
          ></input>
          <input
            type="button"
            value="Delete Record"
            onClick={this.clickDeleteTrainingProgram}
          ></input>
        </div>
      );
    }
    else {
      return (
        <div>
          <h2>TRAINING PROGRAM</h2>
          <form>
            <label>Start Date: </label>
            <input
              type="text"
              name="startdate"
              value={this.state.startdate}
              onChange={this.handleChange}
            /><br />
            <label>End Date: </label>
            <input
              type="text"
              name="enddate"
              value={this.state.enddate}
              onChange={this.handleChange}
            /><br />
            <label>Max Attendees: </label>
            <input
              type="number"
              name="maxattendees"
              value={this.state.maxattendees}
              onChange={this.handleChange}
            /><br />
            <label>Id: </label>
            <input
              readOnly
              type="number"
              name="id"
              value={this.state.id}
              onChange={this.handleChange}
            /><br />
          </form>
          <input
            type="button"
            value="Save Changes"
            onClick={this.clickUpdateTrainingProgram}
          />
          <input
            type="button"
            value="Cancel"
            onClick={() => this.props.history.push(`/trainingprograms/`)}
          />
        </div>
      );
    }
  }
};

export default TrainingProgram;