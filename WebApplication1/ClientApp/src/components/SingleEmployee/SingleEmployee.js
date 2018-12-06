import React, { Component } from 'react';

import employeeRequests from '../../EmployeeRequests/employeeRequests'

class SingleEmployee extends Component
{
  state =
    {
      employee: [],
      class: 'hidden',
    }

  componentDidMount()
  {
    const usrID = this.props.match.params.id;
    employeeRequests.getEmployee(usrID)
      .then((res) =>
      {
        this.setState({ employee: res });
      })
      .catch((err) =>
      {
        console.error(err);
      })
  }
  render()
  {

    const showEditor = () =>
    {
      if (this.state.class === 'hidden')
      {
        this.setState({ class: '' });
      }
      else
      {
        this.setState({ class: 'hidden' });
      }
    };

    const employeeNameChange = (e) =>
    {
      const field = 'employee_name';
      const tempEmp = { ...this.state.employee };
      tempEmp[0][field] = e.target.value;
      this.setState({ updatedEmployee: tempEmp });
    };

    const employeeDepIdChange = (e) =>
    {
      const field = 'department_id';
      const tempEmp = { ...this.state.employee };
      tempEmp[0][field] = (e.target.value * 1);
      this.setState({ updatedEmployee: tempEmp });
    };

    const employeeSupervisorChange = (e) =>
    {
      const field = 'supervisor';
      const tempEmp = { ...this.state.employee };
      tempEmp[0][field] = e.target.value;
      this.setState({ updatedEmployee: tempEmp });
    };

    const fieldCheckr = () =>
    {
      const updatedEmp = this.state.employee[0];
      const empName = updatedEmp.employee_name;
      const depId = updatedEmp.department_id;
      const isSup = updatedEmp.supervisor;
      var fieldsOk = 0;
      switch (empName)
      {
        case "":
          alert("The employee name field is empty.");
          break;
        default:
          fieldsOk++
      }
      switch (depId)
      {
        case 0:
          alert("The department id cannot be 0.");
          break;
        default:
          fieldsOk++
      }
      switch (isSup)
      {
        case "true":
        case "false":
          fieldsOk++;
          break;
        default:
          alert("Is supervisor field must be either true or false (lowercase).");
      }
      if (fieldsOk === 3)
      {
        updateEmployee();
      }
    };

    const updateEmployee = () =>
    {
      const updatedEmp = this.state.employee[0];
      const id = this.state.employee[0].employee_id;
      updatedEmp.is_supervisor = updatedEmp.supervisor;
      updatedEmp.name = updatedEmp.employee_name
      employeeRequests.updateEmployee(id, updatedEmp)
        .then(() =>
        {
          alert("Employee successfully updated!")
          this.props.history.push(`/`);
        })
        .catch((err) =>
        {
          console.error(err);
        });

    };

    const employeeComponent = this.state.employee.map((employee) =>
    {

      return (
        <div key={employee.employee_id}>
          <div className='col-md-4' >
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h2 className="panel-title">{employee.employee_name} </h2>
              </div>
              <div className="panel-body">
                <p>Department: {employee.department_name}</p>
                <p>Department ID: {employee.department_id}</p>
                <p>ID : {employee.employee_id}</p>
                <p>Supervisor: {employee.is_supervisor.toString()}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-3" >
            <h3 className={this.state.class === 'hidden' ? 'hidden' : ''} >Name</h3>
            <input className={this.state.class === 'hidden' ? 'hidden' : ''} id="employeeName" onChange={employeeNameChange} value={employee.employee_name} />
            <h3 className={this.state.class === 'hidden' ? 'hidden' : ''}>Department ID</h3>
            <input className={this.state.class === 'hidden' ? 'hidden' : ''} id="departmentId" onChange={employeeDepIdChange} value={employee.department_id} />
            <h3 className={this.state.class === 'hidden' ? 'hidden' : ''}>Is Supervisor?</h3>
            <input className={this.state.class === 'hidden' ? 'hidden' : ''} id="isSupervisor" onChange={employeeSupervisorChange} placeholder={employee.is_supervisor.toString()}/>
            <h3> </h3>
            <button className={this.state.class === 'hidden' ? 'hidden btn btn-primary' : 'btn btn-primary'} onClick={fieldCheckr}>Submit</button>
          </div>
        </div>
      )
    });

    return (
      <div className="row">
        <h3>Employee</h3>
        {employeeComponent}
        <button className="btn btn-warning" onClick={showEditor}>Edit Emplyee</button>
      </div>
    )
  }
}

export default SingleEmployee;