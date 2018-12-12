import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DepartmentSingle from '../DepartmentSingle/DepartmentSingle';
import DepartmentRequests from '../../databaseRequests/departments';

import './Departments.css';

class Departments extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.getDepartments = this.getDepartments.bind(this);

        this.state = {
            departments: [],
            addDept: {
                name: "",
                expense_budget: 0,
                supervisor_id: 0
            },
            show: false
        };
    }

  componentDidMount() {
      this.getDepartments();
    }

    getDepartments() {
        DepartmentRequests.getAllDepartments()
            .then((data) => {
                this.setState({ departments: data });
            })
            .catch((err) => {
                console.error(err, "There was a problem");
            });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleChangeName = e => {
        const addDept = { ...this.state.addDept };
        addDept.name = e.target.value;
        this.setState({ addDept });
    };

    handleChangeBudget = e => {
        const addDept = { ...this.state.addDept };
        addDept.expense_budget = e.target.value * 1;
        this.setState({ addDept });
    };

    handleChangeSupervisor = e => {
        const addDept = { ...this.state.addDept };
        addDept.supervisor_id = e.target.value * 1;
        this.setState({ addDept });
    }

    handleAdd() {
        const deptObj = this.state.addDept;

        DepartmentRequests.addDepartment(deptObj)
            .then(() => {
                alert("Added Department Successfully");

                this.setState({
                    addDept: {
                        name: "",
                        expense_budget: 0,
                        supervisor_id: 0
                    }
                });

                this.handleClose();

                this.getDepartments();
            })
            .catch((err) => {
                console.error(err, "Error Adding Department");
            });
    }

    handleDelete(e) {
        console.log(e);
        DepartmentRequests.deleteDepartment(e.target.id)
            .then(() => {
                alert("Deleted Department Successfully");
                this.getDepartments();
            })
            .catch((err) => {
                console.error(err, "Error Deleting Department");
            });
    }

    render() {

        const addDept = this.state.addDept;

        const allDepartments = this.state.departments.map(trip => {
            return (
                <DepartmentSingle
                    key={trip.id}
                    details={trip}
                    delete={this.handleDelete}
                />
            );
        });

        return (
            <div>
                <div>
                    {allDepartments}
                </div>
                <Button onClick={this.handleShow}>Add Department</Button>

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
                                    value={addDept.name}
                                    onChange={this.handleChangeName}
                                /><br />
                                <label>Budget: </label>
                                <input
                                    type="number"
                                    name="budget"
                                    value={addDept.expense_budget}
                                    onChange={this.handleChangeBudget}
                                /><br />
                                <label>Supervisor Id</label>
                                <input
                                    type="number"
                                    name="supervisor_id"
                                    value={addDept.supervisor_id}
                                    onChange={this.handleChangeSupervisor}
                                />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleAdd}>Save</Button>
                            <Button onClick={this.handleClose}>Cancel</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
  }
}

export default Departments;


