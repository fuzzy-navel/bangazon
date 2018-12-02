import React, { Component } from 'react';

import Requests from '../Requests/Requests';

import './Computer.css';

class Computer extends Component {
  state = {
    id = 0,
    purchaseDate = '',
    decommissioned = 0,
    employeeId = 0,
    inUse: 0,
    isMalfunctioning: 0,
    isEditing: 0,
  }

  componentDidMount() {
    const compId = this.props.match.params.id;
    return new Promise((resolve, reject) => {
      Requests.GetSingle(compId)
      .then(c => {
        this.setState({
          id = c.id,
          purchaseDate = c.purchase_date,
          decommissioned = c.decommissioned,
          employeeId = c.employee_id,
          inUse: c.in_use,
          isMalfunctioning: c.is_malfunctioning,
          isEditing: 0,
        });
        resolve(c);
      })
      .catch(error => reject(error));
    });
  }

  clickDeleteComputer = () => {};

  clickUpdateComputer = () => {};

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render () {
    if (!this.state.isEditing) {
      return (
        <div>

        </div>
      );
    } else {
      return (
        <div>

        </div>
      );
    };
  }
};

export default Computer;