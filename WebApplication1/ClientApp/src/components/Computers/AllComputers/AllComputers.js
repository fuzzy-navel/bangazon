import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
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
          model: ""
      },
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

    handleShow = () => {
        this.setState({ show: true });
    }

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
        console.log(this.state);
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
                            make: "",
                            model: ""
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
                make: "",
                model: ""
            }
        });
        this.handleClose();
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
              onClick={this.handleShow}
          >Add Computer</Button>

                <div>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="text-center">Add Computer</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label>Purchase Date: </label>
                            <input
                                type="text"
                                name="purchaseDate"
                                value={addComp.purchaseDate}
                                onChange={this.handleChange}
                            /><br />
                            <label>Decomissioned: </label>
                            <input
                                type="text"
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
                            <input
                                type="text"
                                name="inUse"
                                value={addComp.inUse}
                                onChange={this.handleChange}
                            /><br />
                            <label>Is Malfunctioning: </label>
                            <input
                                type="text"
                                name="isMalfunctioning"
                                value={addComp.isMalfunctioning}
                                onChange={this.handleChange}
                            /><br />
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