import React, { Component } from 'react';
import onePayment from '../../paymentRequest/Payment';


class OnePaymentType extends Component {

    state = {
        payment: [],
    }

    componentDidMount() {
        const paymentId = this.props.match.params.id;
        onePayment
            .getPayment(paymentId)
            .then((onePay) => {
                console.error('payment', onePay)
                this.setState({ payment: onePay });
            })
            .catch((err) => {
                console.error('No payments returned', err);
            });
    }


    render() {
        const { payment } = this.state;
        console.error('OneType', this.state);
        return (
                <div className="container">
                <div className="row" key={payment.id}>

                    <h1>Selected Payment Type</h1>
                        <div className="col"> <h4>Account Number:</h4> {payment.account_number}</div>
                    <div className="w-100"></div>
                    <div className="col">Customer Id{payment.customer_id}</div>
                        <div className="col">{payment.customer_id}</div>
                        <div className="w-100"></div>
                        <div className="col">Status</div>
                        <div className="col">{payment.active}</div>
                        <div className="w-100"></div>
                        <div className="col">Title</div>
                        <div className="col">{payment.title}</div>
                        <div className="w-100"></div>
                        <div className="col">Payment Id</div>
                        <div className="col">{payment.id}</div>
                    </div>
                </div>
            );
    }
}

export default OnePaymentType;
