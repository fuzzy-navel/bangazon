import React, { Component } from 'react';
import { form, label, button, FormControl } from 'react-bootstrap';
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
        this.setState({
            [name]: value
        });
    };

    render() {
        const { account_number } = this.state;
        const { title } = this.state;
        const { customer_id } = this.state;
        const { active } = this.state;
        const { id } = this.state;

        return (
            
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="account_number">Account Number</label>
                    </div>
                    <div className="form-group col-md-6">
                        <FormControl type="number" name="account_number" value={this.state.account_number} onChange={this.handleChange}/>
                    </div>
                </div>       
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Card Type</label>
                        </div>
                        <div className="form-group col-md-6">
                        <label for="inputPassword4"></label>
                        <FormControl type="name" value={this.state.title} onChange={this.handleChange} className="form-control" id="cardtype"/>
                        </div>
                  </div>       
                 <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                        <label className="form-check-label" for="gridCheck">
                            Check if all information is correct
                        </label>
                     </div>
                 </div>
                   <button type="submit" className="btn btn-primary">Save Payment</button>
               </form>
        );
    }
}

export default AddPaymentType;