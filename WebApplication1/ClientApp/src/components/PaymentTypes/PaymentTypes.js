import React, { Component } from 'react';
import paymentRequest from '../../paymentRequest/Payment.js';
import './PaymentTypes.css'

class PaymentTypes extends Component {

    state = {
        payments: [],
    }


    componentDidMount() {
        paymentRequest.getPayments()
            .then((res) => {
                this.setState({ payments: res });
            })
            .catch((err) => {
                console.error('No payments returned', err);
            })
    }
        render() {
            const paymentComponents = this.state.payments.map((payment) => {
                return (
                   
                    <li>
                        {payment.account_number}
                        {payment.customer_id}
                       
                        {payment.title}
                        {payment.id}
                    </li>
                );
            });

    return (
        <div className ="AllPaymentTypes">
            <h1>Payment Types</h1>
            <ul className= "Types">
            {paymentComponents}
            </ul>
        </div>
    );
  }
}

export default PaymentTypes;
