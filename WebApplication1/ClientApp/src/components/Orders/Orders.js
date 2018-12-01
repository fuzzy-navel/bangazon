import React, { Component } from 'react';
import axios from 'axios';

import orderRequests from '../../OrderRequests/OrderRequests';

import './Orders.css';

class Orders extends Component {
    state = {
        orders: []
    }

    componentDidMount() {
        orderRequests.getOrders()
            .then((orderResults) => {
                this.setState({ orders: orderResults.data });
            })
            .catch((error) => {
                console.error('error retrieving orders', error);
            });
    }

    refreshOrders = () => orderRequests
        .getOrders()
        .then((orders) => {
            this.setState({ orders });
        })
        .catch((error) => {
            console.error('error retrieving orders', error);
        });

    viewOrderEvent = (id) => {
        const target = id.target.id;
        orderRequests.getOrderById(target)
            .then(() => { })
            .catch((error) => {
                console.error('error with retrieving single order', error);
            });
    }

    render() {
        const { orders } = this.state;
        const orderComponents = orders.map((order) => (
            <div key={order.id}>
                <table className="table table-bordered table-striped">
                    <tbody>
                        <tr>
                            <td>Customer Id: {order.customerId}</td>
                            <td>Order Status: {order.orderStatus.toString()}</td>
                            <td>Order Complete: {order.canComplete.toString()}</td>
                            <td>Payment Type Id: {order.paymentTypeId}</td>
                            <td>
                                <button className="btn btn-primary" id={order.id} onClick={this.viewOrderEvent}> View Order </button>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>

        ));

        return (
            <div className="orders">
                <div className="panel panel-primary">
                    <div className="panel-heading">Order Management</div>
                    <div className="panel-body">
                        <ul className="orderComp">{orderComponents}</ul>
                    </div>
                </div>
            </div>
        );
    };
}

export default Orders; 
