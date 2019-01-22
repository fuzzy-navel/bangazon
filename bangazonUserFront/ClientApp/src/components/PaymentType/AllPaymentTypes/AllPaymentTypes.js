import React, { Component } from 'react';
import paymentRequest from '../Requests/Requests';
//import './PaymentTypes.css'
import { Button } from 'react-bootstrap';

class AllPaymentTypes extends Component {

    state = {
        payments: [],
    }

    componentDidMount() {
        paymentRequest.getCustomerWithPaymentTypes(3)
            .then((res) => {
                this.setState({ payments: res });
            })
            .catch((err) => {
                console.error('No payments returned', err);
            })
    }

    //deletePaymentClick = () => {
    //    return new Promise((resolve, reject) => {
    //        deletePayment
    //            .then(response => {
    //                resolve(response);
    //            })
    //            .catch(err => reject(err));
    //    });
    //};

    render() {
        const paymentComponents = this.state.payments.map((payment) => {
            console.log(payment);
            //const onePayment = () => {
            //    this.props.history.push(`/paymenttypes/${payment.id}`);
            //};
            return (
                <div className="paymentContainer" key={payment.id}>
                    <div className="row">
                        <div className="card col">Account Number</div>
                        <div className="col">
                            <a className="paymentAccount" >{payment.account_number}</a></div>
                        <div className="w-100"></div>
                        <div className="title col">Customer Id</div>
                        <div className="value col">{payment.customer_id}</div>
                        <div className="w-100"></div>
                        <div className="col">Card Name</div>
                        <div className="value col">{payment.title}</div>
                        <div className="w-100"></div>
                        <Button
                            onClick={this.deletePaymentClick}
                        >Delete</Button>
                        
                    </div>
                </div>
            );
        });
        return (
            <div className="AllPaymentTypes">
                <h1>Payment Types</h1>
                <ul className="types">
                    {paymentComponents}
                </ul>
            </div>
        );
    }
}

export default AllPaymentTypes;