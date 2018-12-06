import React from 'react';
import orderRequests from '../../OrderRequests/OrderRequests';


class AddOrder extends React.Component {
    state = {
        order: {
            customerId: 0,
            orderStatus: false,
            canComplete: false,
            paymentTypeId: 0,
            id: 0
        },
    };

    addOrderClick = () => {
        return new Promise((resolve, reject) => {
            orderRequests
                .newOrder(this.state.order)
                .then((response) => {
                    alert('Order saved.');
                    this.props.history.push('/orders/');

                    resolve(response);
                })
                .catch(error => reject(error));
        });
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        const newOrderValue = this.state.order;
        newOrderValue[name] = value;
        this.setState({
            order: { ...newOrderValue },
        });
    };


    render() {
        const { order } = this.state;
        return (
            <div className="col-sm-4 col-med-2">
                <h2>Add an order</h2>
                <form className="form-horizontal">
                    <div className="form-group">

                        <label> Customer Number: </label>
                    </div>
                </form>

            </div>

        );
    };
}

export default AddOrder;