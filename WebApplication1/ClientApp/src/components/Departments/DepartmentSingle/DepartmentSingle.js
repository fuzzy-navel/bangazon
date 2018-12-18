import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';
import EmployeeList from '../../EmployeeList/EmployeeList';
import DatabaseRequests from '../../../Requests/departments';

import './DepartmentSingle.css';

class DepartmentSingle extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.cancelUpdate = this.cancelUpdate.bind(this);
        this.saveUpdate = this.saveUpdate.bind(this);

        this.state = {
            show: false,
            open: false,
            isEditing: false,
            name: this.props.details.name,
            supervisor: this.props.details.supervisor_id,
            expense: this.props.details.expense_budget,
            employees: this.props.details.employees,
            id: this.props.details.id
        };
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleUpdate() {
        this.setState({ isEditing: true });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    cancelUpdate() {
        DatabaseRequests.getSingleDepartment(this.state.id)
            .then((res) => {
                this.setState({
                    name: res[0].name,
                    supervisor: res[0].supervisor_id,
                    expense: res[0].expense_budget,
                    isEditing: false
                });
            })
            .catch((err) => {
                console.error(err, "Error retrieving single department data")
            });
    }

    saveUpdate() {
        const deptObj = {
            name: this.state.name,
            supervisor_id: this.state.supervisor,
            expense_budget: this.state.expense,
            id: this.state.id
        };

        DatabaseRequests.updateDepartment(this.state.id, deptObj)
            .then(() => {
                this.setState({ isEditing: false });
                this.handleClose();
                alert("Update Successful");
            })
            .catch((err) => {
                console.erro(err, "Error updating department");
            });
    }

    handleDelete() {
        DatabaseRequests.deleteDepartment(this.state.id)
            .then(() => {
                alert("Deleted Department Successfully");
                this.handleClose();
            })
            .catch ((err) => {
                console.error(err, "Error Deleting Department");
            });
    }

    render() {
        if (!this.state.isEditing) {
            return (
                <div>
                    <Panel id="collapsible-panel-example-2" defaultExpanded={false}>
                        <Panel.Heading>
                            <Panel.Title toggle>
                                {this.state.name}
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Collapse>
                            <Panel.Body>
                                <h5>Budget: {this.state.expense}</h5>
                                
                                <h5>Supervisor: {this.state.supervisor}</h5>
                                <EmployeeList
                                    employees={this.state.employees.map(employee => { return employee.employee_name; })}
                                />
                            </Panel.Body>
                            <Panel.Footer>
                                <Button onClick={this.handleUpdate}>Update</Button>
                                <Button id={this.state.id} onClick={this.props.delete}>Delete</Button>
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
                            {this.state.name}
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                                <h5>Supervisor:</h5>
                                <input
                                    type="text"
                                    name="supervisor"
                                    value={this.state.supervisor}
                                    onChange={this.handleChange}
                                />

                                <h5>Expense:</h5>
                                <input
                                    type="text"
                                    name="expense"
                                    value={this.state.expense}
                                    onChange={this.handleChange}
                                />
                        </Panel.Body>
                        <Panel.Footer>
                                <Button onClick={this.cancelUpdate}>Cancel</Button>
                                <Button onClick={this.saveUpdate}>Save</Button>
                        </Panel.Footer>
                    </Panel.Collapse>
                </Panel>
            </div>
            );
        }
    }
}

export default DepartmentSingle;