import React, { Component } from 'react';

import Requests from '../Requests/Requests';

import './AllTrainingPrograms.css';

class AllTrainingPrograms extends Component {
  state = {
    trainingPrograms: [],
  }

  componentDidMount() {
    return new Promise((resolve, reject) => {
      Requests.GetAll()
      .then(tp => {
        this.setState({
          trainingPrograms: tp,
        });
        resolve(tp)
      })
      .catch(error => reject(error));
    });
  };

  clickTrainingProgram = e => {
    const id = e.target.name;
    this.props.history.push(`/trainingprograms/${id}`);
  };

  render () {
    const { trainingPrograms } = this.state;

    const output = trainingPrograms.map(tp => {
      return (
        <input
          type="button"
          name={tp.id}
          key={tp.id}
          value={tp.id}
          onClick={this.clickTrainingProgram}
        ></input>
      );
    });


    return (
      <div>
        <h1>Training Programs</h1>
        <div>
          <h2>All Training Programs:</h2>
          <input
            type="button"
            value="Add Training Program"
            onClick={() => this.props.history.push('/trainingprograms/addtrainingprogram')}
          ></input>
        </div>
        <div>
          {output}
        </div>
      </div>
    );
  }
};

export default AllTrainingPrograms;