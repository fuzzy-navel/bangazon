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
            <div className="panel-heading">
              <a className="employeeName" onClick={singleEmployee}>{employee.employee_name}</a>
            </div>
          </div>
        </div>
      );

    });

    const addEmployeeBtn = () =>
    {
      this.props.history.push(`/addEmployee/`);
    }

    return (
      <div className="row">
        <h3>Employees</h3>
        <div className="col-md-3">
          {employeeList}
        </div>
        <div className="col-md-3 col-md-offset-3">
          <button className="btn btn-primary" onClick={addEmployeeBtn}>Add an Employee</button>
        </div>
      </div>
    );
  }
};

export default Employees;
