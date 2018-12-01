import axios from 'axios';

const getOrders = () => {
    const apiPath = `api/order/orders/`;
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

const newOrder = () => {
    const apiPath = `api/order/addOrder`;
    return new Promise((resolve, reject) => {
        axios
            .post(apiPath)
            .then(order => resolve(order))
            .catch(error => reject(error));
    });
};

const updateOrder = (orderId, input) => {
    const apiPath = `api/order/${orderId}`;
    return new Promise((resolve, reject) => {
        axios
            .put(apiPath)

    });

};

const deleteOrder = (id) => {
    const apiPath = `api/order/${id}`;
    return new Promise((resolve, reject) => {
        axios
            .delete(apiPath)
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export default {getOrders, deleteOrder, getOrderById, newOrder};