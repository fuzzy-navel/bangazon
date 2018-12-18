import React, { Component } from 'react';
import { Button, Checkbox, Modal } from 'react-bootstrap';
import SingleComputer from '../Computer/Computer';

import Requests from '../Requests/Requests';

import './AllComputers.css';

class AllComputers extends Component {
  state = {
      allComputers: [],
      addComp: {
          purchaseDate: "",
          decommissioned: "",
          employeeId: 0,
          inUse: false,
          isMalfunctioning: false,
          make: "",
          model: "",
      },
      isValidPurchase: false,
      isValidDecomm: true,
      isValidInUse: false,
      isValidIsMalfunctioning: true,
      isValidMake: false,
      isValidModel: false,
      show: false
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

    handleDateChange = e => {
        let chosenDate = moment(e._d,'YYYY-MM-DD');
        chosenDate = chosenDate.format('YYYY-MM-DD');
        console.log(chosenDate);
        console.log(e.target.id);
        const {id} = e.target;
        this.setState(prevState => ({
            addComp: {
                ...prevState.addComp,
                [id]: chosenDate
            }
        }));
        console.log(this.state.addComp.purchaseDate);
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
                            <input
                                type="date"
                                id="purchaseDate"
                                name="purchaseDate"
                                value={addComp.purchaseDate}
                                onChange={this.handleChange}
                            /><br />
                            <label>Decomissioned Date: </label>
                            <input
                                type="date"
                                id="decommissioned"
                                name="decommissioned"
                                value={addComp.decommissioned}
                                onChange={this.handleChange}
                            /><br />
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
                            <label>Make: (I.E., Dell)</label>
                            <input
                                type="text"
                                id="make"
                                name="make"
                                value={addComp.make}
                                onChange={this.handleChange}
                            /><br />
                            <label>Model: (I.E., XPS 15)</label>
                            <input
                                type="text"
                                id="model"
                                name="model"
                                value={addComp.model}
                                onChange={this.handleChange}
                            /><br />
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