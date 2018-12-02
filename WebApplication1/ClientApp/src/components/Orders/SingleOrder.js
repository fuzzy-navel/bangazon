﻿import React, { Component } from 'react';

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

    //**************CAPTURES NEW USER INPUT WITHIN THE EDIT FORM************//
    handleInputChange = (e) => {
        const orderStatus = e.target.value;
        const canComplete = e.target.value;
        const paymentTypeId = e.target.value;
        this.setState({
            order: {
                ...this.state.order,
                orderStatus,
                canComplete,
                paymentTypeId
            }
        });
    }

    //********************SHOW THE EDIT FORM ON BUTTON CLICK**************//
    toggleShowEditForm = () => {
        this.setState({
            showEditForm: !this.state.showEditForm,
            order: { ...this.props.order },
        });
    }

    handleSave = () => {
        this.props.handleSaveClickEvent(this.props.order.id, this.state.order)
            .then(() => {
                this.toggleShowEditForm();
            });
    }
    
    render() {
        const { order } = this.props;

        return (
            <div className="col-sm-4 col-med-2" key={order.id}>
                <div className="thumbnail">
                    <div className="caption">
                        <h3> Order Number: {this.order.id}</h3>
                        <p>Customer Number: {this.order.customerId}</p>
                        <p>Order Status: {this.order.orderStatus}</p>
                        <p>Order Complete: {this.order.canComplete}</p>
                        <p>Payment Type Number: {this.order.paymentTypeId}</p>
                        <p><button type="button" className="btn btn-primary" id={order.id} onClick={this.toggleShowEditForm}>Edit Details</button></p>
                    </div>
                    <div className={this.state.showEditForm ? '' : 'hide'}>
                        <input
                            type="text"
                            onChange={this.handleInputChange}
                            value={this.state.order.orderStatus}
                            className="form-control"
                        />
                        <input
                            type="text"
                            onChange={this.handleInputChange}
                            value={this.state.order.canComplete}
                            className="form-control"
                        />
                        <input
                            type="text"
                            onChange={this.handleInputChange}
                            value={this.state.order.paymentTypeId}
                            className="form-control"
                        />
                        <button className="btn btn-default" type="button" onClick={this.handleSave}>Save</button>
                    </div>
                </div>
            </div>
         ); 
    }
}

export default SingleOrder;