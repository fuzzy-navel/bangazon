import React, { Component } from 'react';
import update from 'react-addons-update';
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

  clickAllComputers = e => {
    const id = e.target.name;
    this.props.history.push(`/computers/${id}`);
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
                addComp: update(this.state.addComp, { [name]: { value } })
        });
        console.log(this.state);
    }

  render () {
    const { allComputers, addComp } = this.state;

    const output = allComputers.map(c => {
      return (
        //<Button
        //  name={c.id}
        //  key={c.id}
        //  value={c.id}
        //  onClick={this.clickAllComputers}
        //>{c.id}</Button>
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
                            <Modal.Title className="text-center">Add Department</Modal.Title>
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
                                type="number"
                                name="budget"
                                value={addComp.decomissioned}
                                onChange={this.handleChange}
                            /><br />
                            <label>Employee Id: </label>
                            <input
                                type="number"
                                name="budget"
                            //value={addComp.employeeId}
                            //onChange={this.handleChangeBudget}
                            /><br />
                            <label>In Use: </label>
                            <input
                                type="number"
                                name="budget"
                            //value={addComp.inUse}
                            //onChange={this.handleChangeBudget}
                            /><br />
                            <label>Is Malfunctioning: </label>
                            <input
                                type="number"
                                name="budget"
                            //value={addComp.isMalfunctioning}
                            //onChange={this.handleChangeBudget}
                            /><br />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button >Save</Button>
                            <Button >Cancel</Button>
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