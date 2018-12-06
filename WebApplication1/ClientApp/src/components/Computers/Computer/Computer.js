import React, { Component } from 'react';
import { Form, Label, Button, FormControl } from 'react-bootstrap';

import Requests from '../Requests/Requests';

import './Computer.css';

class Computer extends Component {
  state = {
    id: 0,
    purchaseDate: '',
    decommissioned: 0,
    employeeId: 0,
    inUse: 0,
    isMalfunctioning: 0,
    isEditing: 0,
  }

  componentDidMount() {
    const compId = this.props.match.params.id;
    return new Promise((resolve, reject) => {
      Requests.GetSingle(compId)
      .then(c => {
        this.setState({
          id: c.id,
          purchaseDate: c.purchase_date,
          decommissioned: c.decommissioned,
          employeeId: c.employee_id,
          inUse: c.in_use,
          isMalfunctioning: c.is_malfunctioning,
          isEditing: 0,
        });
        resolve(c);
      })
      .catch(error => reject(error));
    });
  }

  clickDeleteComputer = () => {
    const compId = this.state.id;
    return new Promise((resolve, reject) => {
      Requests.Delete(compId)
      .then(c => {
        alert('Record deleted successfully');
        this.props.history.push(`/computers/`);
        resolve(c);
      })
      .catch(error => reject(error));
    });
  };

  clickUpdateComputer = () => {
    return new Promise((resolve, reject) => {
      Requests.Update(this.state, this.state.id)
      .then(c => {
        this.setState({ isEditing:0 });
        alert('Updated Computer Record Successfully');
        resolve(c);
      })
      .catch(error => reject(error));
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render () {
    const {id, purchaseDate, decommissioned, employeeId, inUse, isMalfunctioning} = this.state;
    if (!this.state.isEditing) {
      return (
        <div>
          <h2>COMPUTERS</h2>
          <p>Id: {id}</p>
          <p>Purchase Date: {purchaseDate}</p>
          <p>Decommissioned?
            {decommissioned ?
              decommissioned.toString() :
              " Null" }
          </p>
          <p>Employee Id: {employeeId}</p>
          <p>In Use? {inUse.toString()}</p>
          <p>Is Malfunctioning? {isMalfunctioning.toString()}</p>
          <Button
            onClick={() => this.setState({isEditing: 1})}
          >Edit This Record</Button>
          <Button
            onClick={this.clickDeleteComputer}
          >Delete Record</Button>
        </div>
      );
    } else {
      return (
        <div>
          <h2>COMPUTERS</h2>
          <Form>
            <Label>Purchase Date: </Label>
            <FormControl
              name="purchaseDate"
              value={purchaseDate}
              onChange={this.handleChange}
            ></FormControl><br/>
            <Label>Decommissioned? </Label>
            <FormControl
              name="decommissioned"
              value={decommissioned ?
                decommissioned.toString() :
                "Null" }
              onChange={this.handleChange}
            ></FormControl><br/>
            <Label>Employee Id: </Label>
            <FormControl
              name="employeeId"
              value={employeeId}
              onChange={this.handleChange}
            ></FormControl><br/>
            <Label>In Use? </Label>
            <FormControl
              name="inUse"
              value={inUse.toString()}
              onChange={this.handleChange}
            ></FormControl><br/>
            <Label>Malfunctioning? </Label>
            <FormControl
              name="isMalfunctioning"
              value={isMalfunctioning.toString()}
              onChange={this.handleChange}
            ></FormControl><br/><br/>
            <Label>Id: </Label>
            <FormControl
              disabled
              readOnly
              value={id}
            ></FormControl><br/>
          </Form>
          <Button
            onClick={this.clickUpdateComputer}
          >Save Changes</Button>
          <Button
            onClick={() => this.props.history.push(`/computers/`)}
          >Cancel</Button>
        </div>
      );
    }
  }
};

export default Computer;