import React, { Component } from 'react';
import paymentRequest from '../../paymentRequest/Payment';
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

                    <div class="container">
                        <div class="row">
                            <div class="col">Account Number</div>
                            <div class="col">{payment.account_number}</div>
                            <div class="w-100"></div>
                            <div class="col">Customer Id</div>
                            <div class="col">{payment.customer_id}</div>
                            <div class="w-100"></div>
                            <div class="col">Status</div>
                            <div class="col">{payment.active}</div>
                            <div class="w-100"></div>
                            <div class="col">Title</div>
                            <div class="col">{payment.title}</div>
                            <div class="w-100"></div>
                            <div class="col">Payment Id</div>
                            <div class="col">{payment.id}</div>
                        </div>
                    </div>
                   
                    //<li>
                    //    <h5>Account Number</h5> : {payment.account_number}
                    //    {payment.customer_id}
                       
                    //    {payment.title}
                    //    {payment.id}
                    //</li>
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
