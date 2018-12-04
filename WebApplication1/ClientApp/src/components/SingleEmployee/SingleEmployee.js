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
    }

    const employeeComponent = this.state.employee.map((employee) => {

      return (
        <div className='col-md-4'>
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h2 class="panel-title">{employee.employee_name} </h2>
            </div>
            <div class="panel-body">
              <p>Department: {employee.department_name}</p>
              <p>Department ID: {employee.department_id}</p>
              <p>ID : {employee.employee_id}</p>
              <p>Supervisor: {employee.is_supervisor.toString()}</p>
            </div>
          </div>
        </div>
      )
    });

    const editEmployee = this.state.employee.map((employee) =>
    {
      return (
        <div className="col-md-3 col-md-offset-3">
          <h3 className={this.state.class === 'hidden' ? 'hidden' : ''} >First Name</h3>
          <input className={this.state.class === 'hidden' ? 'hidden' : ''} id="first_name"  value={employee.name} />
          <h3 className={this.state.class === 'hidden' ? 'hidden' : ''}>Last Name</h3>
          <input className={this.state.class === 'hidden' ? 'hidden' : ''} id="last_name"/>
          <h3> </h3>
          <button className={this.state.class === 'hidden' ? 'hidden btn btn-primary' : 'btn btn-primary'} onClick={this.updateCustomer}>Submit</button>
        </div>   
      )
    });

    return (
      <div className="row">
        <h3>Employee</h3>
        {employeeComponent}
        <button className="btn btn-warning" onClick={showEditor}>Edit Emplyee</button>
        {editEmployee}
      </div>
    )
  }
}

export default SingleEmployee;