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
    const employeeList = this.state.employees.map((employee) =>
    {
      const singleEmployee = () =>
      {
        this.props.history.push(`/employees/${employee.id}`)
      };
      return (
        <div key={employee.id}>
          <div className="panel panel-primary">

          </div>
        </div>
      )

    });

    return (
      <div></div>
    );
  }
};

export default Employees;
