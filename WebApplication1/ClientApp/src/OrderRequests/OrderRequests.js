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

export default {getOrders};