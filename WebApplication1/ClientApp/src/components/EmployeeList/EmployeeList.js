import React, { Component } from 'react';

import './EmployeeList.css';

class EmployeeList extends Component {
    render() {
        const employeesInDepartment = this.props.employees;
        const listItems = employeesInDepartment.map((employee, i) => {
            return <li key={i}>{employee}</li>;
        });

        return (
            <div>
                <h5>Employees In This Department: </h5>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default EmployeeList;