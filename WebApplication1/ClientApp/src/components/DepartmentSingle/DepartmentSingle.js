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
            show: false
        };
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleClose() {
        this.setState({ show: false });
    }

    render() {
        const details = this.props.details;
        return (
            <div className="panel panel-primary">
                <div className="panel-heading text-center" onClick={this.handleShow}>
                    <h3>{details.name}</h3>
                </div>
                <div>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="text-center">{details.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Supervisor:</h5>
                            <p>{details.supervisor_id}</p>

                            <h5>Expense:</h5>
                            <p>{details.expense_budget}</p>
                            <EmployeeList
                                employees={details.employees.map(employee => { return employee.employee_name; })}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default DepartmentSingle;