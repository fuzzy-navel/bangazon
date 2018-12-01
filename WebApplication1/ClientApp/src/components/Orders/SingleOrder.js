import React, { Component } from 'react';

import orderRequests from '../../OrderRequests/OrderRequests';


class SingleOrder extends Component {
    state = {
        customerId: 0,
        orderStatus: false,
        canComplete: false,
        paymentTypeId: 0,
        id: 0
    }

    componentDidMount() {
        orderRequests.getOrderById()
            .then((order) => {
                this.setState({
                    customerId,
                    orderStatus,
                    canComplete,
                    paymentTypeId,
                    id
                })
                resolve(order);
            })
            .catch((error) => {
                console.error('error retrieving orders', error);
            });
    }

    render() {

        return (
            <div>
                <h2> Order: {this.state.id} </h2>
                <p>Customer Number: {this.state.customerId}</p>
                <p>Order Status: {this.state.orderStatus}</p>
                <p>Order Complete: {this.state.canComplete}</p>
                <p>Payment Type Number{this.state.paymentTypeId}</p>
            </div>
            ); 
    }
}

export default SingleOrder;