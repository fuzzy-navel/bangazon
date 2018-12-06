import axios from 'axios';

//const getpayment = (id) => {
//    return new Promise((resolve, reject) => {
//        axios
//            .get(`/api/paymentType/${id}`)
//            .then(res => {
//                const paymentTypes = [];
//                if (res.data !== null) {
//                    Object.keys(res.data).forEach(payKey => {
//                        res.data[payKey].id = payKey;
//                        paymentTypes.push(res.data[payKey]);
//                    });
//                }
//                resolve(paymentTypes);
//            })
//            .catch(err => {
//                reject(err);
//            });
//    });
//};

//const postSelectedPayment = (selectedPayment) => {
//    return new Promise((resolve, reject) => {
//        axios
//            .post(`/api/paymentType/${id}`, selectedPayment)
//            .then((res) => {
//                resolve(res);
//            })
//            .catch((err) => {
//                reject(err);
//            });
//    });
//};

//const updatePayment = (paymentId, updatedPayment) => {
//    return new Promise((resolve, reject) => {
//        axios
//            .put(` /api/paymentType/ ${ id }`, updatePayment)
//            .then(res => {
//                resolve(res);
//            })
//            .catch((error) => {
//                reject(error.message);
//            });
//    });
//};


export default { getpayment, postSelectedPayment };
