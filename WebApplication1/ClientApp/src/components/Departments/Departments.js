import React, { Component } from 'react';
import DepartmentSingle from '../DepartmentSingle/DepartmentSingle';

import './Departments.css';

class Departments extends Component {
  render () {
    return (
        <div>
            <h1>Hey There I am the departments page</h1>
            <DepartmentSingle />
        </div>
    );
  }
};

export default Departments;
