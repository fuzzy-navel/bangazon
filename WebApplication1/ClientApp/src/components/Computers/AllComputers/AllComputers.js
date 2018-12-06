import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import SingleComputer from '../Computer/Computer';

import Requests from '../Requests/Requests';

import './AllComputers.css';

class AllComputers extends Component {
  state = {
      allComputers: [],
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

  render () {
    const { allComputers } = this.state;

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
                            <label>Department Name: </label>
                            <input
                                type="text"
                                name="name"
                                //value={addDept.name}
                                //onChange={this.handleChangeName}
                            /><br />
                            <label>Budget: </label>
                            <input
                                type="number"
                                name="budget"
                                //value={addDept.expense_budget}
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