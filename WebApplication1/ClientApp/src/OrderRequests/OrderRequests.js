import axios from 'axios';

const getOrders = (completed) => {
    const apiPath = `api/order/orders?completed=${completed}`;
    return new Promise((resolve, reject) => {
        axios
            .get(apiPath)
            .then(orders => resolve(orders))
            .catch(error => reject(error));
    });
};

const getOrderById = (id) => {
    const apiPath = `api/order/orderById/${id}`;
    return new Promise((resolve, reject) => {
        axios
            .get(apiPath)
            .then(order => resolve(order))
            .catch(error => reject(error));
    });
};

const newOrder = (input) => {
    const apiPath = `api/order/addOrder/`;
    return new Promise((resolve, reject) => {
        axios
            .post(apiPath, input)
            .then(order => resolve(order))
            .catch(error => reject(error));
    });
};

const updateOrder = (orderId, input) => {
    const apiPath = `api/order/${orderId}`;
    return new Promise((resolve, reject) => {
        axios
            .put(apiPath, input)
            .then(order => resolve(order))
            .catch(error => reject(error));
    });

};


export default {getOrders, getOrderById, newOrder, updateOrder};