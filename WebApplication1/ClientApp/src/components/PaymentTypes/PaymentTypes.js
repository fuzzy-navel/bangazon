import React, { Component } from 'react';
import paymentRequest from '../../paymentRequest/Payment';
import './PaymentTypes.css'
import { Button } from 'react-bootstrap';

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

                const onePayment = () =>   
                {
                    this.props.history.push(`/paymenttypes/${payment.id}`);
                };
                return (
                    <div className="container" key={payment.id}>
                        <div className="row">
                            <div className="col">Account Number</div>
                            <div className="col">
                            <a className="paymentAccount" onClick={onePayment}>{payment.account_number}</a></div>
                            <div className="w-100"></div>
                            <div className="col">Customer Id</div>
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
                            <div className="w-100"></div>
                        </div>
                    </div>
                );
            });
    return (
        <div className="AllPaymentTypes">
            <h1>Payment Types</h1>
            <Button onClick={() => this.props.history.push('/paymenttype')}>Add Payment Type</Button>
            <ul className= "Types">
                {paymentComponents}
            </ul>
        </div>
    );
  }
}

export default PaymentTypes;
