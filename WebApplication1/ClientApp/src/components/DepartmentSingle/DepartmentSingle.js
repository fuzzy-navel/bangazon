import React, { Component } from 'react';

import './DepartmentSingle.css';

class DepartmentSingle extends Component {
    render() {
        const details = this.props.details;
        return (
            <div>
                <h3>{details.name}</h3>
                <p>{details.expense_budget}</p>
                <p>{details.supervisor_id}</p>
            </div>
        );
    }
}

export default DepartmentSingle;