import React, {Component} from 'react';
import { Button, Form, FormControl, Label } from 'react-bootstrap';

import Requests from '../Requests/Requests';

import './ProdType.css';

class ProdType extends Component {
  state = {
    id: 0,
    category: '',
    isEditing: 0,
  }

  componentDidMount() {
    const prodTypeId = this.props.match.params.id;
    return new Promise((resolve, reject) => {
      Requests.GetSingle(prodTypeId)
      .then(prodType => {
        this.setState({
          category: prodType.data,
          id: prodTypeId,
          isEditing: 0,
        })
        resolve (prodType);
      })
      .catch(error => reject(error));
    });
  };

  clickDeleteProducType = () => {
    const prodTypeId = this.state.id;
    return new Promise((resolve, reject) => {
      Requests.Delete(prodTypeId)
      .then(response => {
        // redirect to product page
        alert('Record deleted');
        this.props.history.push(`/producttypes/`)
        resolve(response);
      })
      .catch(error => reject(error));
    });
  };

  clickUpdateProductType = () => {
    return new Promise((resolve, reject) => {
      Requests.Update(this.state, this.state.id)
      .then(response => {
        this.setState({
          isEditing: 0,
        })
        alert('Updated Product Type Successfully')
        resolve(response);
      })
      .catch(error => reject(error));
    });
  };

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  };

  render () {
    if (!this.state.isEditing) {
      return (
        <div>
          <h2>PRODUCT TYPE</h2>
          <p>Category: {this.state.category}</p>
          <p>Id: {this.state.id}</p>
          <Button
            onClick={() => this.setState({isEditing: 1})}
          >Edit This Record</Button>
          <Button
            onClick={this.clickDeleteProducType}
          >Delete Record</Button>
        </div>
      );
    } else {
      return (
        <div>
          <h2>PRODUCT TYPE</h2>
          <Form>
            <Label>Category:</Label>
            <FormControl
              type="text"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            ></FormControl><br/>
            <Label>Id:</Label>
            <FormControl
              readOnly
              disabled
              type="text"
              name="id"
              value={this.state.id}
              onChange={this.handleChange}
            ></FormControl><br/>
          </Form>
          <Button
            onClick={this.clickUpdateProductType}
          >Save Changes</Button>
          <Button
            onClick={() => this.props.history.push(`/producttypes/`)}
          >Cancel</Button>
        </div>
      );
    }
  }
};

export default ProdType;