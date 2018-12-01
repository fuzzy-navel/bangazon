import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EmployeeList from '../EmployeeList/EmployeeList';

import './DepartmentSingle.css';

class DepartmentSingle extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            isEditing: 0,
            name: this.props.details.name,
            supervisor: this.props.details.supervisor_id,
            expense: this.props.details.expense_budget,
            employees: this.props.details.employees,
        };
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleUpdate() {
        if (this.state.isEditing === 0) {
            this.setState({ isEditing: 1 });
        } else {
            this.setState({ isEditing: 0 });
        }
    }

    render() {
        if (!this.state.isEditing) {
            return (
                <div className="panel panel-primary">
                    <div className="panel-heading text-center" onClick={this.handleShow}>
                        <h3>{this.state.name}</h3>
                    </div>
                    <div>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className="text-center">{this.state.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h5>Supervisor:</h5>
                                <p>{this.state.supervisor}</p>

                                <h5>Expense:</h5>
                                <p>{this.state.expense}</p>
                                <EmployeeList
                                    employees={this.state.employees.map(employee => { return employee.employee_name; })}
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.handleUpdate}>Update</Button>
                                <Button onClick={this.handleClose}>Delete</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="panel panel-primary">
                    <div className="panel-heading text-center" onClick={this.handleShow}>
                        <h3>{this.state.name}</h3>
                    </div>
                    <div>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className="text-center">{this.state.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h5>Supervisor:</h5>
                                <p>{this.state.supervisor}</p>

                                <h5>Expense:</h5>
                                <p>{this.state.expense}</p>
                                <EmployeeList
                                    employees={this.state.employees.map(employee => { return employee.employee_name; })}
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.handleUpdate}>Cancel</Button>
                                <Button onClick={this.handleClose}>Save</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            );
        }
    }
}

export default DepartmentSingle;