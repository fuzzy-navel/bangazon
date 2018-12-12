import React, { Component } from 'react';
import onePayment from '../../paymentRequest/Payment';
import { Form, FormControl, Label, Button } from 'react-bootstrap';

class UpdatePay extends Component {
    state = {
        account_number: 0,
        title: '',
        customer_id: 0,
        active: false,
        id: 0,
    }

    componentDidMount() {
        const currentId = this.props.match.params.id;
        onePayment
            .getPayment(currentId)
            .then((infoToUpdate) => {
                this.setState(infoToUpdate);
            })
            .catch((err) => {
                console.error('No info!', err);
            });
    }

    updatePaymentClick = () => {
        var updatedPayment = this.state;
        onePayment.updatePayment(updatedPayment.id, updatedPayment)
            .then(() => {
                this.props.history.push(`/paymenttypes/${updatedPayment.id}`);
            })
            .catch((err) => {
                console.error(err);
            });
    };

   

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    };

    render() {
        const { title } = this.state;
        const { customer_id } = this.state;
        const { active } = this.state;
        const { id } = this.state;

        return (
            <div>
                <h2>Update</h2>
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
                    onClick={this.updatePaymentClick}
                >Save Changes</Button>
                <Button
                    onClick={() => this.props.history.push('/paymenttypes/')}
                >Cancel</Button>
            </div>

        );
    }
}

export default UpdatePay;