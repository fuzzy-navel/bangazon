import React, { Component } from 'react';
import AddOrder from '../Orders/AddOrder';
import Search from '../Orders/Search';
import { Button } from 'react-bootstrap';
import orderRequests from '../../OrderRequests/OrderRequests';
import './Orders.css';

class Orders extends Component {
    state = {
        orders: []
    };

    //******************GET & DISPLAY ALL ORDERS**********************//
    componentDidMount() {
        const apiPath = `api/order/orders`;
        return new Promise((resolve, reject) => {
            orderRequests
                .getOrders(apiPath)
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
        const orderComponents = orders.map((order) => {
            const selectedOrder = () => {
                this.props.history.push(`/orders/${order.id}`);
            };
            return (
                <div key={order.id}>
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr>
                                <td>Order Id: {order.id}</td>
                                <td>Customer Id: {order.customerId}</td>
                                <td>Order Status: {order.orderStatus.toString()}</td>
                                <td>Order Complete: {order.canComplete.toString()}</td>
                                <td>Payment Type Id: {order.paymentTypeId}</td>
                                <td>
                                    <button className="btn btn-primary" id={order.id} onClick={selectedOrder}> View Order </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        });

    
        return (
            <div className="orders">
                <div className="search">
                    <Search
                        onSearch={this.updateSearchInput}
                        searchInput={this.state.searchInput}
                    />
                    

                </div>

                
                    <Button onClick={() => this.props.history.push('orders/addOrder')}> Add Order </Button>


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
