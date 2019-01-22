import React, { Component } from 'react';
import { Form, Label, Button } from 'react-bootstrap';
import addPayment from '../Requests/Requests';

import '../PaymentType.css';

class AddPaymentType extends Component {
    state = {
        account_number: 0,
        title: '',
        customer_id: 0,
        active: false,
        id: 0,
    }

    

    handleChange = e => {
        const { name, value } = e.target;
        const newPayment = {...this.state};
        newPayment[name] = value
        this.setState(newPayment)
        console.error('new', newPayment);
    };


    addNewPaymentClick = () => {
        return new Promise((resolve, reject) => {
            addPayment
                .postPayment(this.state)
                .then(response => {
                    
                    resolve(response);
                })
                .catch(err => reject(err));
        });
    };

    render() {
        const { customer_id } = this.state;
       

        return (
            <div>
                <h2>Add New Payment</h2>
                <Form>
                    <Label>Account Number:</Label>
                    <input
                        type="number"
                        name="account_number"
                        value={this.state.account_number}
                        onChange={this.handleChange}
                    /><br />
                    <Label>Title: </Label>
                    <br/>
                    <input
                        type="name"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    /><br />
                    <Label>Customer Id: </Label>
                    <br/>
                    <input
                        type="number"
                        name="customer_id"
                        value={customer_id}
                        onChange={this.handleChange}
                    /><br />
                </Form>
                <Button
                    onClick={this.addNewPaymentClick}
                >Save Changes</Button>
            </div>
            
        );
    }
}

export default AddPaymentType;



//<form>
//    <div className="form-row">
//        <div className="form-group col-md-6">
//            <label for="account_number">Account Number</label>
//        </div>
//        <div className="form-group col-md-6">
//            <FormControl type="number" name="account_number" value={this.state.account_number} onChange={this.handleChange} />
//        </div>
//    </div>
//    <div className="form-row">
//        <div className="form-group col-md-6">
//            <label for="inputEmail4">Card Type</label>
//        </div>
//        <div className="form-group col-md-6">
//            <label for="inputPassword4"></label>
//            <FormControl type="name" value={this.state.title} onChange={this.handleChange} className="form-control" id="cardtype" />
//        </div>
//    </div>
//    <div className="form-group">
//        <div className="form-check">
//            <input className="form-check-input" type="checkbox" id="gridCheck"></input>
//            <label className="form-check-label" for="gridCheck">
//                Check if all information is correct
//                        </label>
//        </div>
//    </div>
//    <button type="submit" className="btn btn-primary">Save Payment</button>
//</form>