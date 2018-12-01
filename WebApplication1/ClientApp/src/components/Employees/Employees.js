import React, {Component} from 'react';
import employeeRequests from '../../EmployeeRequests/employeeRequests';
import './Employees.css'

class Employees extends Component
{
  state =
  {
    employees: [],
  }

  componentDidMount()
  {
    employeeRequests.getEmployees()
      .then((res) =>
      {
        this.setState({employees: res})
      })
      .catch((err) =>
      {
        console.error(err);
      });
  };

  render()
  {
    return (
      <div></div>
    );
  }
};

export default Employees;
