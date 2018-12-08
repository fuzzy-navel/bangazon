import React, { Component } from 'react';
import { Form, FormControl, Button, Label } from 'react-bootstrap';

import Requests from '../Requests/Requests';

import './AddProduct.css';

class AddProduct extends Component {
    state = {
        category: 0,
        price: 0,
        title: "",
        description: "",
        quantity: 0,
        owner_id: 0,
    }

    clickAddNewProduct = () => {
        return new Promise((resolve, reject) => {
            Requests.Add(this.state)
                .then(response => {
                    alert('Product saved.');
                    this.props.history.push('/products/');
                    resolve(response);
                })
                .catch(error => reject(error));
        });
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        const { title, category, description, price, quantity, owner_id } = this.state;
        return (
            <div>
                <h2>PRODUCT</h2>
                <h3>Add New Product</h3>
                <Form>
                    <Label>Title: </Label>
                    <FormControl
                        type="text"
                        name="title"
                        value={title}
                        onChange={this.handleChange}
                    /><br />
                    <Label>Category: </Label>
                    <FormControl
                        type="number"
                        name="category"
                        value={category}
                        onChange={this.handleChange}
                    /><br />
                    <Label>Description: </Label>
                    <FormControl
                        type="text"
                        name="description"
                        value={description}
                        onChange={this.handleChange}
                    /><br />
                    <Label>Price: </Label>
                    <FormControl
                        type="number"
                        name="price"
                        value={price}
                        onChange={this.handleChange}
                    /><br />
                    <Label>Quantity: </Label>
                    <FormControl
                        type="number"
                        name="quantity"
                        value={quantity}
                        onChange={this.handleChange}
                    /><br />
                    <Label>Owner Id: </Label>
                    <FormControl
                        type="number"
                        name="owner_id"
                        value={owner_id}
                        onChange={this.handleChange}
                    /><br />
                </Form>
                <Button
                    onClick={this.clickAddNewProduct}
                >Save Changes</Button>
                <Button
                    onClick={() => this.props.history.push('/products/')}
                >Cancel</Button>
            </div>
        );
    }
}

export default AddProduct;