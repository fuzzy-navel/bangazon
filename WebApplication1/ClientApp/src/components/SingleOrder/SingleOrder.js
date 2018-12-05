import React, { Component } from 'react';
import Orders from '../Orders/Orders';
import orderRequests from '../../OrderRequests/OrderRequests';


class SingleOrder extends Component {
    state = {
        showEditForm: false,
        order: {
            customerId: 0,
            orderStatus: false,
            canComplete: false,
            paymentTypeId: 0,
            id: 0
        },
    };

    componentDidMount() {
        const orderId = this.props.match.params.id;
        orderRequests
            .getOrderById(orderId)
            .then(order => {
                this.setState({
                    order: order.data[0]
                })

            })
            .catch(error => console.error(error));
    };


    //**************CAPTURES NEW USER INPUT WITHIN THE EDIT FORM************//
    handleInputChange = (e) => {
        const { name, value } = e.target;
        const defaultOrderValue = this.state.order;
        defaultOrderValue[name] = value;
        this.setState({
            order: { ...defaultOrderValue },
        });
    };


    //********************SHOW THE EDIT FORM ON BUTTON CLICK**************//
    toggleShowEditForm = () => {
        this.setState({
            showEditForm: !this.state.showEditForm,
            order: { ...this.state.order },
        });
    }

    UpdateOrderClick = () => {
        return new Promise((resolve, reject) => {
            orderRequests
                .updateOrder(this.state.order.id, this.state.order)

                .then((response) => {
                    this.setState({
                        showEditForm: 0
                    })
                    resolve(response)
                })
                .catch(error => reject(error));
        });
    }

    render() {
        const { order } = this.state;

        return (
            <div className="col-sm-4 col-med-2">
                <div className="thumbnail">
                    <div className="caption">
                        <h3> Order Number: {this.state.order.id}</h3>
                        <p>Customer Number: {this.state.order.customerId}</p>
                        <p>Order Status: {this.state.order.orderStatus ?
                             this.state.order.orderStatus.toString() : "Null" }</p>
                        <p>Order Complete: {this.state.order.canComplete.toString()}</p>
                        <p>Payment Type Number: {this.state.order.paymentTypeId}</p>
                        <p><button type="button" className="btn btn-primary" id={this.state.order.id} onClick={this.toggleShowEditForm}>Edit Details</button></p>
                    </div>
                    <div className={this.state.showEditForm ? '' : 'hide'}>
                        <label> Order Status: </label>
                        <input
                            type="text"
                            name="orderStatus"
                            onChange={this.handleInputChange}
                            value={this.state.orderStatus}
                            className="form-control"
                        />
                        <label> Order Complete: </label>

                        <input
                            type="text"
                            name="canComplete"
                            onChange={this.handleInputChange}
                            value={this.state.canComplete}
                            className="form-control"
                        />
                        <label> Payment Type Id: </label>

                        <input
                            type="text"
                            name="paymentTypeId"
                            onChange={this.handleInputChange}
                            value={this.state.paymentTypeId}
                            className="form-control"
                        />
                        <button className="btn btn-default" type="button" onClick={this.UpdateOrderClick}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default SingleOrder;