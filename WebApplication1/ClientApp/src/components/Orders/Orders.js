import React, { Component } from 'react';
import axios from 'axios';

import './Orders.css';

class Orders extends Component {
    state = {
        orders: []
    };

    componentDidMount() {
        const apiPath = `api/order/orders/`;
        return new Promise((resolve, reject) => {
            axios
                .get(apiPath)
                .then(orders => {
                    this.setState({
                        orders: orders.data
                    })
                    resolve(orders);
                })
                .catch(error => reject(error));
        });
    };

    render() {
        const { orders } = this.state;
        const orderComponents = orders.map((order) => (
            <div key={order.id}>
                <table className="table table-bordered table-striped">
                    <tbody>
                        <tr>
                            <td>{order.customerId}</td>
                            <td>{order.orderStatus}</td>
                            <td>{order.canComplete}</td>
                            <td>{order.paymentTypeId}</td>
                            <td>
                                <button className="btn btn-primary"> Placeholder </button>  
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
