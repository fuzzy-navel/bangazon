import React, {Component} from 'react';
import { Button, Form, FormControl, Label } from 'react-bootstrap';

import Requests from '../Requests/Requests';

import './AddProdType.css';

class AddProdType extends Component {
  state = {
    category: '',
  }

clickAddNewProdType = () => {
  return new Promise((resolve, reject) => {
    Requests.Add(this.state)
      .then(res => {
        alert('Product Type saved')
        resolve(res);
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
  return (
    <div>
      <h2>PRODUCT TYPE</h2>
      <h3>Add New Product</h3>
      <Form>
        <Label>Category Type:</Label>
        <FormControl
          name="category"
          value={this.state.category}
          onChange={this.handleChange}
        ></FormControl><br/>
      </Form>
      <Button
        onClick={this.clickAddNewProdType}
      >Save Changes</Button>
      <Button
        onClick={() => this.props.history.push('/producttypes/')}
      >Cancel</Button>
    </div>
    );
  }
};

export default AddProdType;