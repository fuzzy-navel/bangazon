//import React from 'react';

//import orderRequests from '../../OrderRequests/OrderRequests';

//import Orders from '../Orders/Orders';
//import Search from '../Orders/Search';
//import SingleOrder from '../Orders/SingleOrder';

//class EditOrder extends React.Component {
//    state = {
//        showEditForm: false,
//        orderDeets: {},
//        orders: [],
//        searchInput: 0,
//    };

//    //****************SHOW/HIDE THE ORDER FORM WHEN EDIT ORDER IS CLICKED************//
//    toggleShowOrderForm = () => {
//        this.setState({ showOrderForm: !this.state.showOrderForm });
//    }

//    //****************TAKES INPUT AND UPDATES ORDER IN DATABASE*********************//
//    formSubmitEvent = (updateOrder) => {
//        const { orderDeets } = this.state;
//        orderRequests.putOrder(updateOrder, orderDeets)
//            .then(() => {
//                orderRequests.getOrders()
//                    .then((orders) => {
//                        this.setState({ orders: orders.data });
//                        //this.props.history('/Orders');
//                    });
//            })
//            .catch((error) => {
//                console.error('error in updating order', error);
//            });
//    }

//    //**************GRABS SEARCH INPUT FROM ORDERS & SETS STATE********************//
//    updateSearchInput = (searchInput) => {
//        this.setState({ searchInput });
//    }

//    //**************GRABS ORDERDEETS FROM ORDER FORM & SETS STATE******************//
//    updateOrderDeets = orderDeets => this.setState({ orderDeets })

//    componentDidMount() {
//        const apiPath = `api/order/orderById/${id}`;
//        return new Promise((resolve, reject) => {
//            orderRequests
//                .getOrderById(apiPath)
//                .then(orders => {
//                    this.setState({
//                        orders: orders.data
//                    })
//                    resolve(orders);
//                })
//                .catch(error => reject(error));
//        });
//    };

//    render() {
//        return (
//            <div className="EditOrder">
//                <Search
//                    onSearch={this.updateSearchInput}
//                    searchInput={this.state.searchInput}
//                />
//                <div className="col-sm-6">
//                    <Orders
//                        toggleShowOrderForm={this.toggleShowOrderForm}
//                        updateOrderDeets={this.updateOrderDeets}
//                        searchInput={this.state.searchInput}
//                    />
//                </div>
                
//            </div>
//        );
//    }
//}

//export default EditOrder;

