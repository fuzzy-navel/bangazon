import React, { Component } from 'react';
import { Button, Checkbox, Modal } from 'react-bootstrap';
import SingleComputer from '../Computer/Computer';

import Requests from '../Requests/Requests';


import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from 'react-dates';

import './AllComputers.css';

class AllComputers extends Component {
  state = {
      allComputers: [],
      addComp: {
          purchaseDate: null,
          decommissioned: null,
          employeeId: 0,
          inUse: false,
          isMalfunctioning: false,
        },
        focusedPurchase: null,
        focusedDecomm: null,

      show: false,
  }

  componentDidMount() {
    return new Promise((resolve, reject) => {
      Requests.GetAll()
      .then(computer => {
        this.setState({
          allComputers: computer,
        });
        resolve(computer);
      })
      .catch(error => reject(error));
    });
    };

    handleClose = () => {
        this.setState({ show: false });
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            addComp: {
                ...prevState.addComp,
                [name]: value
            }
        }));
    }

    toggleCheckbox = e => {
        const { name } = e.target;
        this.setState(prevState => ({
            addComp: {
                ...prevState.addComp,
                [name]: !this.state.addComp[name]
            }
        }));
    }

    handleSave = () => {
        return new Promise((resolve, reject) => {
            Requests.Add(this.state.addComp)
                .then(response => {
                    alert('Computer saved');
                    this.setState({
                        addComp: {
                            purchaseDate: "",
                            decommissioned: "",
                            employeeId: 0,
                            inUse: false,
                            isMalfunctioning: false,
                        }
                    });
                    this.handleClose();
                    resolve(response);
                })
                .catch(error => reject(error));
        });
    }

    handleCancel = () => {
        this.setState({
            addComp: {
                purchaseDate: "",
                decommissioned: "",
                employeeId: 0,
                inUse: false,
                isMalfunctioning: false,
            }
        });
        this.handleClose();
    }

    handleDateChange = () => {

    }

    handleFocusChange = () => {
        // onFocusChange={({ focused }) =>
        //   this.setState({ addComp: {focused }})
        // }
    }

  render () {
    const { allComputers, addComp } = this.state;

    const output = allComputers.map(c => {
      return (
          <SingleComputer
              key={c.id}
              details={c}
          />
      );
    });

    return (
      <div>
        <h1>COMPUTERS</h1>
        <div>
          <h2>All Computers</h2>
          <Button
              onClick={() => this.setState({ show: true })}
          >Add Computer</Button>

                <div>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="text-center">Add Computer</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label>Purchase Date: </label>
                            <SingleDatePicker
                                id={"abc"}
                                isOutsideRange={() => false}
                                inputIconPosition="after"
                                small={true}
                                block={false}
                                numberOfMonths={1}
                                date={this.state.addComp.purchaseDate}
                                onDateChange={this.handleDateChange}
                                focused={this.state.focusedPurchase}
                                onFocusChange={({ focused: focusedPurchase }) => this.setState({ focusedPurchase })}
                                openDirection="down"
                                hideKeyboardShortcutsPanel={true}
                            /><br/>
                            <label>Decomissioned Date: </label>
                            <SingleDatePicker
                                id={"def"}
                                isOutsideRange={() => false}
                                inputIconPosition="after"
                                small={true}
                                block={false}
                                numberOfMonths={1}
                                date={this.state.addComp.decommissioned}
                                onDateChange={this.handleDateChange}
                                focused={this.state.focusedDecomm}
                                onFocusChange={({ focused: focusedDecomm }) => this.setState({ focusedDecomm })}
                                openDirection="down"
                                hideKeyboardShortcutsPanel={true}
                            /><br/>
                            <label>Employee Id: </label>
                            <input
                                type="number"
                                name="employeeId"
                                value={addComp.employeeId}
                                onChange={this.handleChange}
                            /><br />
                            <label>In Use: </label>
                            <Checkbox
                                name="inUse"
                                checked={!!addComp.inUse || false}
                                onChange={this.toggleCheckbox}
                            ></Checkbox><br />
                            <label>Is Malfunctioning: </label>
                            <Checkbox
                                name="isMalfunctioning"
                                checked={!!addComp.isMalfunctioning || false}
                                onChange={this.toggleCheckbox}
                            ></Checkbox><br />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleSave}>Save</Button>
                            <Button onClick={this.handleCancel}>Cancel</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        <div>
          {output}
        </div>
      </div>
    );
  }
};

export default AllComputers;