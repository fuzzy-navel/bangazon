import React, { Component } from 'react';
import onePayment from '../../paymentRequest/Payment';
import './OnePayment.css'

class OnePaymentType extends Component {

    state = {
        payment: [],
        title: '',
        customer_id: 0,
        active: false,
        payment_id: 0,
       

    }

    componentDidMount() {
        const paymentId = this.props.match.params.id;
        onePayment
            .getPayment(paymentId)
            .then((onePay) => {
                this.setState({ payment: onePay });
            })
            .catch((err) => {
                console.error('No payments returned', err);
            });
    }


    render() {
        const { payment } = this.state;
        const updatePayment = () => {
            this.props.history.push(`/paymenttype/${payment.id}`);
        }
        return (
            <div className="onePayContainer">
                <div className="row" key={payment.id}>

                    <h1>Selected Payment Type</h1>
                    <div className="col"> <h4>Account Number:</h4> {payment.account_number}</div>
                    <div className="w-100"></div>
                    <div className="col">Title</div>
                    <div className="col">{payment.title}</div>
                    <div className="w-100"></div>
                    <div className="col">CustomerId</div>
                    <div className="col">{payment.customer_id}</div>
                    <div className="w-100"></div>
                    <div className="col">Status</div>
                    <div className="col">{payment.active}</div>
                    <div className="w-100"></div>
                    <div className="col">Payment Id</div>
                    <div className="col">{payment.customer_id}</div>
                    <div className="w-100"></div>
                    <div className="col">Status</div>
                    <div className="col">{payment.active}</div>
                    <div className="w-100"></div>
                    <div className="col">Payment Id</div>
                    <div className="col">{payment.id}</div>
                    <a className="btn btn-success" onClick={updatePayment}> Update </a>
                  </div>
            </div>
        );
    }
}

export default OnePaymentType;
