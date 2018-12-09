import React, { Component } from 'react';
import {Button, Form, FormControl, Label, Panel} from 'react-bootstrap';

import Requests from '../Requests/Requests';

import './AllTrainingPrograms.css';

class AllTrainingPrograms extends Component {
  state = {
    trainingPrograms: [],
    startdate: '',
    enddate: '',
    maxattendees: 0,
    id: 0,
    isEditing: 0,
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

  deleteProductFromState = deleted => {
    this.setState({
      trainingPrograms: this.state.products.filter(tP => {
        return tP.id * 1 !== deleted * 1;
      })
    });
  };

  clickDeleteTrainingProgram = () => {
    const tpId = this.state.id;
    return new Promise((resolve, reject) => {
      Requests.Delete(tpId)
        .then(response => {
          this.deleteProductFromState(tpId);
          alert('Record deleted successfully');
          resolve(response);
        })
        .catch(error => reject(error));
    });
  };

  clickUpdateButton = e => {
    const tempTrainingProgram = this.state.products.filter(tP => {
      return tP.id * 1 === e.target.id * 1;
    });
    this.setState({
      isEditing: 1,
      startdate: tempTrainingProgram[0].startdate,
      enddate: tempTrainingProgram[0].enddate,
      maxattendees: tempTrainingProgram[0].maxattendees,
      id: tempTrainingProgram[0].id,
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
    this.setState({
      [name]: value
    });
  };

  render () {
    const { trainingPrograms } = this.state;

    const output = trainingPrograms.map(tp => {
      const {startdate, enddate, maxattendees, id} = trainingPrograms;
      return (
        <div key={id}>
          <Panel defaultExpanded={false}>
            <Panel.Heading>
              <Panel.Title toggle>
                  {id}
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              {!this.state.isEditing ?
                <Panel.Body>
                  <h5>Start Date: {startdate}</h5>
                  <h5>End Date: {enddate}</h5>
                  <h5>Max Attendees: {maxattendees}</h5>
                  <h5>Id: {id}</h5>
                </Panel.Body>
              :
                <Panel.Body>
                  <Form>
                    <Label>Start Date: </Label>
                    <FormControl
                      type="text"
                      name="startdate"
                      value={this.state.startdate}
                      onChange={this.handleChange}
                    ></FormControl><br/>
                    <Label>End Date: </Label>
                    <FormControl
                      type="text"
                      name="enddate"
                      value={this.state.enddate}
                      onChange={this.handleChange}
                    ></FormControl><br/>
                    <Label>Max Attendees: </Label>
                    <FormControl
                      type="number"
                      name="maxattendees"
                      value={this.state.maxattendees}
                      onChange={this.handleChange}
                    ></FormControl><br/>
                    <Label>Id: </Label>
                    <FormControl
                      readOnly
                      disabled
                      type="number"
                      name="id"
                      value={this.state.id}
                      onChange={this.handleChange}
                    ></FormControl><br/>
                  </Form>
                </Panel.Body>
              }
              <Panel.Footer>
                {!this.state.isEditing ?
                  <div>
                    <Button
                      onClick={this.clickUpdateButton}
                      id={id}
                    >Update</Button>
                    <Button id={id} onClick={this.clickDeleteProduct}>Delete</Button>
                  </div>
                  :
                  <div>
                    <Button
                      onClick={this.clickUpdateProduct}
                    >Save Changes</Button>
                    <Button
                      onClick={() => this.setState({isEditing: 0})}
                    >Cancel</Button>
                  </div>
                }
              </Panel.Footer>
            </Panel.Collapse>
          </Panel>
        </div>
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