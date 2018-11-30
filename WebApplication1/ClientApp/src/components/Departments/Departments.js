import React, { Component } from 'react';
import DepartmentSingle from '../DepartmentSingle/DepartmentSingle';
import DepartmentRequests from '../../databaseRequests/departments';

import './Departments.css';

class Departments extends Component {
    state = {
        departments: []
    }

  componentDidMount() {
      DepartmentRequests.getAllDepartments()
          .then((data) => {
              this.setState({ departments: data });
          })
          .catch((err) => {
              console.error(err, "There was a problem");
          });
  }

    render() {

        const allDepartments = this.state.departments.map(trip => {
            return (
                <DepartmentSingle
                    key={trip.id}
                    details={trip}
                />
            );
        });

        return (
            <div>
                <div>
                    {allDepartments}
                </div>
            </div>
        );
  }
};

export default Departments;
