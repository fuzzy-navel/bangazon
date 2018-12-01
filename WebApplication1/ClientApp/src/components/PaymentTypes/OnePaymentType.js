import React, { Component } from 'react';
import paymentRequest from '../../paymentRequest/Payment';


class OnePaymentType extends Component {

    state = {
        payments: [],
    }

    componentDidMount() {
        const paymentId = this.props.match.params.id;
        paymentRequest.getPayment(paymentId)
            .then((res) => {
                this.setState({ payment: res });
            })
            .catch((err) => {
                console.error('No payments returned', err);
            })
    }
    render() {
        const onePaymentComponent = this.state.payments.map((paymentUno) => {
            return (
                <div className="container">
                    <div className="row" key={paymentUno.id}>
                        <div className="col">Account Number: {paymentUno.account_number} </div>
                        <div className="w-100"></div>
                        <div className="col">Customer Id</div>
                        <div className="col">{paymentUno.customer_id}</div>
                        <div className="w-100"></div>
                        <div className="col">Status</div>
                        <div className="col">{paymentUno.active}</div>
                        <div className="w-100"></div>
                        <div className="col">Title</div>
                        <div className="col">{paymentUno.title}</div>
                    </div>
                </div>
            );
        });
        return (
            <div className="OnePaymentTypes">
                <h1>Selected Payment</h1>
                <ul className="singleType">
                    {onePaymentComponent}

                </ul>
            </div>
        );
    }
}

export default OnePaymentType;
