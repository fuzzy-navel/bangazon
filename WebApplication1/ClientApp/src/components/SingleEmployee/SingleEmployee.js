import React, { Component } from 'react';

import employeeRequests from '../../components/Employees/AddEmployee'

class SingleEmployee extends Component
{
  state =
    {
      employee: [],
    }
  render()
  {
    return (
      <h3>Employee</h3>  
    )
  }
}

export default SingleEmployee;