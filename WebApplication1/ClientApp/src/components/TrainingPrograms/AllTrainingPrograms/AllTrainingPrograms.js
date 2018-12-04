import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

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
        <Button
          name={tp.id}
          key={tp.id}
          onClick={this.clickTrainingProgram}
        >{tp.id}</Button>
      );
    });


    return (
      <div>
        <h1>Training Programs</h1>
        <div>
          <h2>All Training Programs:</h2>
          <Button
            onClick={() => this.props.history.push('/trainingprograms/addtrainingprogram')}
          >Add Training Program</Button>
        </div>
        <div>
          {output}
        </div>
      </div>
    );
  }
};

export default AllTrainingPrograms;