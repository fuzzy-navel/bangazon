import React, { Component } from 'react';
import addPayment from '../../../Requests/Payment';
import { Form, FormControl, Label, Button } from 'react-bootstrap';

class AddPaymentType extends Component {
    state = {
        account_number: 0,
        title: '',
        customer_id: 0,
        active: false,
        id: 0,
    }

    addNewPaymentClick = () => {
        return new Promise((resolve, reject) => {
            addPayment
                .postPayment(this.state)
                .then(response => {
                    this.props.history.push('/paymenttype/');
                    resolve(response);
                })
                .catch(err => reject(err));
        });
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        const { title } = this.state;
        const { customer_id} = this.state;
        const { active } = this.state;
        const { id } = this.state;

        return (
            <div>
                <h2>Add New Payment Type</h2>
                <Form>
                    <Label>Account Number: </Label>
                    <FormControl
                        type="number"
                        name="account_number"
                        value={this.state.account_number}
                        onChange={this.handleChange}
                    /><br />
                    <Label>Title: </Label>
                    <FormControl
                        type="name"
                        name="title"
                        value={title}
                        onChange={this.handleChange}
                    /><br />
                    <Label>Customer Id: </Label>
                    <FormControl
                        type="number"
                        name="customer_id"
                        value={customer_id}
                        onChange={this.handleChange}
                    /><br />
                    <Label>Status: </Label>
                    <FormControl
                        type="name"
                        name="active"
                        value={active}
                        onChange={this.handleChange}
                    /><br />
                    <Label>Payment Type Id: </Label>
                    <FormControl
                        type="number"
                        name="id"
                        value={id}
                        onChange={this.handleChange}
                    /><br />
                </Form>
                <Button
                    onClick={this.addNewPaymentClick}
                >Save Changes</Button>
                <Button
                    onClick={() => this.props.history.push('/paymenttypes/')}
                >View Updated List</Button>
            </div>

        );
    }
}

export default AddPaymentType;