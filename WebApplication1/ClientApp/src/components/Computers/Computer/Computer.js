import React, { Component } from 'react';
import { Panel, Button, Form, Label, FormControl } from 'react-bootstrap';

import Requests from '../Requests/Requests';

import './Computer.css';

class Computer extends Component {
  state = {
      id: this.props.details.id,
      purchaseDate: this.props.details.purchase_date,
      decommissioned: this.props.details.decommissioned,
      employeeId: this.props.details.employee_id,
      inUse: this.props.details.in_use,
      isMalfunctioning: this.props.details.is_malfunctioning,
      make: this.props.details.make,
      model: this.props.details.model,
      isEditing: false
  }

  clickDeleteComputer = () => {
    const compId = this.state.id;
    return new Promise((resolve, reject) => {
      Requests.Delete(compId)
      .then(c => {
        alert('Record deleted successfully');
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

    clickCancelUpdate = () => {
        Requests.GetSingle(this.state.id)
            .then((res) => {
                console.log(res);
                this.setState({
                    id: res.id,
                    purchaseDate: res.purchase_date,
                    decommissioned: res.decommissioned,
                    employeeId: res.employee_id,
                    inUse: res.in_use,
                    isMalfunctioning: res.is_malfunctioning,
                    make: res.make,
                    model: res.model,
                    isEditing: false
                });
            })
            .catch((err) => {
                console.error(err, "Error retrieving single department data")
            });
    }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    };

    render() {
        const { id, purchaseDate, decommissioned, employeeId, inUse, isMalfunctioning, make, model, isEditing } = this.state;


        if (!isEditing) {
            return (
                <div>
                    <Panel id="collapsible-panel-example-2" defaultExpanded={false}>
                        <Panel.Heading>
                            <Panel.Title toggle>
                                {this.state.id}
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Collapse>
                            <Panel.Body>
                                <p>Id: {id}</p>
                                <p>Purchase Date: {purchaseDate}</p>
                                <p>Decommissioned:
                            {decommissioned ?
                                        decommissioned.toString() :
                                        " Null"}
                                </p>
                                <p>Employee Id: {employeeId}</p>
                                <p>In Use: {inUse.toString()}</p>
                                <p>Is Malfunctioning: {isMalfunctioning.toString()}</p>
                                <p>Make: {make}</p>
                                <p>Model: {model}</p>
                            </Panel.Body>
                            <Panel.Footer>
                                <Button onClick={() => this.setState({ isEditing: true })}>Update</Button>
                                <Button id={this.state.id} onClick={this.clickDeleteComputer}>Delete</Button>
                            </Panel.Footer>
                        </Panel.Collapse>
                    </Panel>
                </div>
            );
        } else {
            return (
                <div>
                    <Panel id="collapsible-panel-example-2" defaultExpanded={false}>
                        <Panel.Heading>
                            <Panel.Title toggle>
                                {this.state.id}
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Collapse>
                            <Panel.Body>
                            <Form>
                                <Label>Purchase Date: </Label>
                                <FormControl
                                  name="purchaseDate"
                                  value={purchaseDate}
                                  onChange={this.handleChange}
                                /><br/>
                                <Label>Decommissioned: </Label>
                                <FormControl
                                    name="decommissioned"
                                    value={decommissioned ?
                                    decommissioned.toString() :
                                    "Null"}
                                    onChange={this.handleChange}
                                /><br/>
                                <Label>Employee Id: </Label>
                                <FormControl
                                  name="employeeId"
                                  value={employeeId}
                                  onChange={this.handleChange}
                                /><br/>
                                <Label>In Use: </Label>
                                <FormControl
                                  name="inUse"
                                  value={inUse.toString()}
                                  onChange={this.handleChange}
                                /><br/>
                                <Label>Malfunctioning: </Label>
                                <FormControl
                                  name="isMalfunctioning"
                                  value={isMalfunctioning.toString()}
                                  onChange={this.handleChange}
                                /><br/>
                                <Label>Make: </Label>
                                <FormControl
                                  name="make"
                                  value={make}
                                  onChange={this.handleChange}
                                /><br/>
                                <Label>Model: </Label>
                                <FormControl
                                  name="model"
                                  value={model}
                                  onChange={this.handleChange}
                                /><br/>
                                <Label>Id: </Label>
                                <FormControl
                                  disabled
                                  readOnly
                                  value={id}
                                /><br/>
                              </Form>
                            </Panel.Body>
                            <Panel.Footer>
                                <Button
                                    onClick={this.clickUpdateComputer}
                                >Save Changes</Button>
                                <Button
                                    onClick={this.clickCancelUpdate}
                                >Cancel</Button>
                            </Panel.Footer>
                        </Panel.Collapse>
                    </Panel>
                </div>
            );
        }
    }

  //render () {
  //  const {id, purchaseDate, decommissioned, employeeId, inUse, isMalfunctioning} = this.state;
  //  if (!this.state.isEditing) {
  //    return (
  //      <div>
  //        <h2>COMPUTERS</h2>
  //        <p>Id: {id}</p>
  //        <p>Purchase Date: {purchaseDate}</p>
  //        <p>Decommissioned?
  //          {decommissioned ?
  //            decommissioned.toString() :
  //            " Null" }
  //        </p>
  //        <p>Employee Id: {employeeId}</p>
  //        <p>In Use? {inUse.toString()}</p>
  //        <p>Is Malfunctioning? {isMalfunctioning.toString()}</p>
  //        <Button
  //          onClick={() => this.setState({isEditing: 1})}
  //        >Edit This Record</Button>
  //        <Button
  //          onClick={this.clickDeleteComputer}
  //        >Delete Record</Button>
  //      </div>
  //    );
  //  } else {
  //    return (
  //      <div>
  //        <h2>COMPUTERS</h2>
  //        <Form>
  //          <Label>Purchase Date: </Label>
  //          <FormControl
  //            name="purchaseDate"
  //            value={purchaseDate}
  //            onChange={this.handleChange}
  //          ></FormControl><br/>
  //          <Label>Decommissioned? </Label>
  //          <FormControl
  //            name="decommissioned"
  //            value={decommissioned ?
  //              decommissioned.toString() :
  //              "Null" }
  //            onChange={this.handleChange}
  //          ></FormControl><br/>
  //          <Label>Employee Id: </Label>
  //          <FormControl
  //            name="employeeId"
  //            value={employeeId}
  //            onChange={this.handleChange}
  //          ></FormControl><br/>
  //          <Label>In Use? </Label>
  //          <FormControl
  //            name="inUse"
  //            value={inUse.toString()}
  //            onChange={this.handleChange}
  //          ></FormControl><br/>
  //          <Label>Malfunctioning? </Label>
  //          <FormControl
  //            name="isMalfunctioning"
  //            value={isMalfunctioning.toString()}
  //            onChange={this.handleChange}
  //          ></FormControl><br/><br/>
  //          <Label>Id: </Label>
  //          <FormControl
  //            disabled
  //            readOnly
  //            value={id}
  //          ></FormControl><br/>
  //        </Form>
  //        <Button
  //          onClick={this.clickUpdateComputer}
  //        >Save Changes</Button>
  //        <Button
  //          onClick={() => this.props.history.push(`/computers/`)}
  //        >Cancel</Button>
  //      </div>
  //    );
  //  }
}

export default Computer;