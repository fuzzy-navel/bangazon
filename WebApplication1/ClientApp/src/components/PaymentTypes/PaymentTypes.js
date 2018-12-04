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

    //updatePaymentClick = () => {
    //    return new Promise((resolve, reject) => {
            //paymentRequest
    //            .updateRequest(this.state, this.state.id)
    //            .then(response => {
    //                this.setState({
    //                    isAvailable: 0,
    //                })
    //                alert('Sucessfully Updated')
    //                resolve(response);
    //            })
    //            .catch(error => reject(error));
    //    });
    //};


        render() {
            const paymentComponents = this.state.payments.map((payment) => {

                const onePayment = () =>   //Button routes to single customer page
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
                            <button className="btn btn-success" onClick={this.updatePaymentClick}>Update</button>
                        </div>
                    </div>
                );
            });
    return (
        <div className="AllPaymentTypes">
            <h1>Payment Types</h1>
            <ul className= "Types">
                {paymentComponents}
            </ul>
        </div>
    );
  }
}

export default PaymentTypes;
