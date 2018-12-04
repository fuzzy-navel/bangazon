import axios from 'axios';


const getPayments = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/paymentType/`)
            .then(res => {
                const paymentTypes = [];
                if (res.data !== null) {
                    Object.keys(res.data).forEach(payKey => {
                        res.data[payKey].id = payKey;
                        paymentTypes.push(res.data[payKey]);
                    });
                }
                resolve(paymentTypes);
            })
            .catch((err) => {
                reject(err);
            });
    });
};


//const getPayment = (id) => {
//    return new Promise((resolve, reject) => {
//        axios
//            .get(`/api/PaymentType/${id}`)
//            .then((res) => {
//                resolve(res.data);
//            })
//            .catch((err) => {
//                reject(err);
//            });
//    });
//};
const getPayment = id => {
    const apiPath = `api/paymentType/${id}`;
    return new Promise((resolve, reject) => {
        axios
            .get(apiPath)
            .then(payment => resolve(payment.data[0]))
            .catch(error => reject(error));
    });
}

//const postPayment = (newPayment) => {
//    return new Promise((resolve, reject) => {
//        axios
//            .post(`/api/paymentType`, newPayment)
//            .then(res => {
//                resolve(res);
//            })
//            .catch(err => {
//                reject(err);
//            });
//    });
//};



export default { getPayments, getPayment};
