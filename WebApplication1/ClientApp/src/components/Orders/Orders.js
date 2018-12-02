import React, { Component } from 'react';

import orderRequests from '../../OrderRequests/OrderRequests';

import './Orders.css';

class Orders extends Component {
    state = {
        orders: [],
        view: {},
        originalOrders: [],
    };

    //*************SEARCHES DATABASE FOR USER INPUT AND COLLECTS MATCHES***//
    componentDidMount() {
        const keepers = [];
        orderRequests
            .getOrders()
            .then((orders) => {
                this.setState({ originalOrders: orders.data });
                const copyOfOriginal = [...orders];
                copyOfOriginal.forEach((order) => {
                    const foundOrder = keepers.find((keepOrder) => {
                        return keepOrder === order;
                    });
                    if (foundOrder === undefined) {
                        keepers.push(order);
                    }
                });
                this.setState({ orders: keepers });
            })
            .catch((error) => {
                console.error('error retrieving orders', error);
            });
    }

    componentWillReceiveProps() {
        const searchInput = this.props.searchInput;
        const orders = [...this.state.originalOrders];
        const filterOrders = orders.filter(order => order.id.toString().includes(searchInput.toString()));
        this.setState({ orders: filterOrders });
    }

    //**************IDENTIFIES WHICH ORDER IS SELECTED************//
    selectedOrder = (order) => {
        const { toggleShowOrderForm, updateOrderDeets } = this.props;
        this.setState({ view: { ...order } });
        updateOrderDeets(order);
        toggleShowOrderForm();
    }

    render() {
        const { orders } = this.state;
        const orderComponents = orders.map((order) => (
            <div key={order.id}>
                <table className="table table-bordered table-striped">
                    <tbody>
                        <tr>
                            <td>Order Id: {order.orderId}</td>
                            <td>Customer Id: {order.customerId}</td>
                            <td>Order Status: {order.orderStatus.toString()}</td>
                            <td>Order Complete: {order.canComplete.toString()}</td>
                            <td>Payment Type Id: {order.paymentTypeId}</td>
                            <td>
                                <button className="btn btn-primary" id={order.id} onClick={this.selectedOrder}> Edit Order </button>
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
