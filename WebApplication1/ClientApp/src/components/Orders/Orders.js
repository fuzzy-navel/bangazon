import React, { Component } from 'react';
import Search from '../Orders/Search';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';
import orderRequests from '../../OrderRequests/OrderRequests';
import './Orders.css';
import OrderRequests from '../../OrderRequests/OrderRequests';

class Orders extends Component {
    constructor(props, context) {
        super(props, context);

        this.orderTypeSelection = this.orderTypeSelection.bind(this);
    }

    state = {
        orders: []
    };

    //******************GET & DISPLAY ALL ORDERS**********************//
    componentDidMount() {
        orderRequests
            .getOrders('')
            .then(orders => {
                this.setState({
                    orders: orders.data
                });
            })
            .catch(error => console.log(error));
    }

    orderTypeSelection = (eventKey) => {
        
        switch (eventKey.target.id) {
            case "1":
                OrderRequests.getOrders('').then(
                    orders => {
                        this.setState({
                            orders: orders.data
                        });
                    });
                
                break;
            case "2":
                OrderRequests.getOrders(false).then(
                    orders => {
                        this.setState({
                            orders: orders.data
                        });
                    });

                break;
            case "3":
                OrderRequests.getOrders(true).then(
                    orders => {
                        this.setState({
                            orders: orders.data
                        });
                    });

                break;
            default: OrderRequests.getOrders('').then(
                orders => {
                    this.setState({
                        orders: orders.data
                    });
                });

                break;

            

        }


    }

    render() {
        const { orders } = this.state;
        const addNewOrder = () => {
            this.props.history.push('/orders/addOrder');
        };


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
                                <td>Closed Order: {order.orderStatus.toString()}</td>
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
                    <DropdownButton
                        id=''
                        title="Make a Selection"
                        
                    >
                        <MenuItem eventKey="1" id="1" onClick={this.orderTypeSelection}> All Orders </MenuItem>
                        <MenuItem eventKey="2" id="2" onClick={this.orderTypeSelection}> Open Orders </MenuItem>
                        <MenuItem eventKey="3" id="3" onClick={this.orderTypeSelection}> Closed Orders </MenuItem>
                        <MenuItem divider />
                    </DropdownButton>

                </div>
                <Button onClick={addNewOrder}> Add Order </Button>


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
