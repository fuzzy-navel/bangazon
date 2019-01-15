import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, Checkbox, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

import './AllElements.css';

class AllElements extends Component {
  render () {
    return (
      <div className="">
        <h2>Table Name</h2>
        <Table condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mark.otto</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@jthornton</td>
            </tr>
            <tr>
            <td>3</td>
              <td>Steve</td>
              <td>O</td>
              <td>@steveo</td>
            </tr>
          </tbody>
        </Table>
        <form>
          <h3>Form Name</h3>
          <FormGroup>
            <ControlLabel>Text Label and Input</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Text"
            />
            <FormControl.Feedback />

            <ControlLabel>Number label and Input</ControlLabel>
            <FormControl
              type="number"
              placeholder="Enter Number"
            />
            <FormControl.Feedback />

            <ControlLabel>Dropdown</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                <option value="other">...</option>
                <option value="other1">...1</option>
                <option value="other2">...2</option>
                <option value="other3">...3</option>
              </FormControl>
              <FormControl.Feedback />

              <ControlLabel>Checkbox</ControlLabel>
              <Checkbox
                className="chk-box"
                name="checkbox1"
              ></Checkbox>

              <ControlLabel>Date Picker</ControlLabel>
              <FormControl
                type="date"
              ></FormControl>
            </FormGroup>
          <div className="div-btn-form">
            <Button
            className="btn-form"
            >Edit</Button>
            <Button
              className="btn-form"
            >Add</Button>
            <Button
              className="btn-form"
            >Submit</Button>
            <Button
              className="btn-form"
            >Cancel</Button>
          </div>

        </form>
      </div>
    );
  }
};

export default AllElements;