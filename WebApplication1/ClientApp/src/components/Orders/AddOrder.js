import React from 'react';

import { Form, FormControl, Button, Label } from 'react-bootstrap';

import orderRequests from '../../OrderRequests/OrderRequests';



class AddOrder extends React.Component {
    state = {
            customerId: 0,
            orderStatus: false,
            canComplete: false,
            paymentTypeId: 0,
            id: 0
    };

    addOrderClick = () => {
        return new Promise((resolve, reject) => {
            orderRequests
                .newOrder(this.state)
                .then((response) => {
                    alert('Order saved.');
                    this.props.history.push('/orders/');

                    resolve(response);
                })
                .catch(error => reject(error));
        });
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        const newOrderValue = this.state;
        newOrderValue[name] = value;
        this.setState({
             ...newOrderValue 
        });
    };


    render() {
        return (
            <div className="col-xs-8 col-xs-offset-2">
                <h2>Add an order</h2>
                <Form>
                    <Label> Customer Number: </Label>
                    <FormControl
                        type="number"
                        name="customerId"
                        value={this.state.customerId}
                        onChange={this.handleInputChange}
                        className="form-control"
                    />
                    <Label> Order Status: </Label>
                    <FormControl
                        type="text"
                        name="orderStatus"
                        value={this.state.orderStatus}
                        onChange={this.handleInputChange}
                    />
                    <Label> Order Complete: </Label>
                    <FormControl
                        type="text"
                        name="canComplete"
                        value={this.state.canComplete}
                        onChange={this.handleInputChange}
                    />
                    <Label> Payment Type Number </Label>
                    <FormControl
                        type="number"
                        name="paymentTypeId"
                        value={this.state.paymentTypeId}
                        onChange={this.handleInputChange}
                    />
                </Form>
                <Button onClick={this.addOrderClick}> Save Order </Button>
                <Button onClick={() => this.props.history.push('/orders/')}> Back </Button>
                   
            </div>

        );
    };
}

export default AddOrder;