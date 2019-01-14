import React, { Component } from 'react';
import employeeRequests from '../../EmployeeRequests/employeeRequests';

const defaultEmployee =
{
  department_id: 0,
  name: '',
  is_supervisor: false,
}

class AddEmployee extends Component
{
  state =
  {
     newEmployee: defaultEmployee,
  }

  formFieldStringState = (name, e) =>
  {
    const tempEmployee = { ...this.state.newEmployee };
    tempEmployee[name] = e.target.value;
    this.setState({ newEmployee: tempEmployee });
  };

  formFieldNumberState = (name, e) =>
  {
    const tempEmployee = { ...this.state.newEmployee };
    tempEmployee[name] = e.target.value * 1;
    this.setState({ newEmployee: tempEmployee });
  };

  formFieldBoolState = (name, e) =>
  {
    const tempEmployee = { ...this.state.newEmployee };
    tempEmployee[name] = (e.target.value === 'true');
    this.setState({ newEmployee: tempEmployee });
  };

  departmentIDChange = (e) =>
  {
    this.formFieldNumberState('department_id', e);
  };

  employeeNameChange = (e) =>
  {
    this.formFieldStringState('name', e);
  };


  isSupervisorChange = (e) =>
  {
    this.formFieldBoolState('is_supervisor', e);
  };

  fieldChecker = () =>
  {
    var employee = this.state.newEmployee;
    if (employee.name === "")
    {
      alert("Please include a name.");
    }
    else if (employee.department_id <= 0)
    {
      alert("The department id cannot be less than 1");
    }
    else
    {
     this.submitNewEmployee();
    }    
  }

  submitNewEmployee = () =>
  {
    employeeRequests.addEmployee(this.state.newEmployee);
    this.props.history.push(`/`)
  };


  render()
  {
    return (
      <div className="addEmployee">
        <div className="row">
          <div className="col-md-3">
            <h3>Department ID</h3>
            <input id="departmentID" type="number" onChange={this.departmentIDChange} />
          </div>
          <div className="col-md-3 col-md-offset-3">
            <h3>Employee Name</h3>
            <input id="employeeName" onChange={this.employeeNameChange}/>
          </div>
          <div className="col-md-3 col-md-offset-3">
            <h3>Is Supervisor</h3>
            <input id="isSupervisor" onChange={this.isSupervisorChange}/>
          </div>
          <div>
            <button className="btn btn-primary" onClick={this.fieldChecker}>Add Employee</button> 
          </div>
        </div>
      </div>
    )
  };
};

export default AddEmployee;