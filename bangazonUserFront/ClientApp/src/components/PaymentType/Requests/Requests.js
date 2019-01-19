import axios from 'axios';


const postPayment = input => {
    return new Promise((resolve, reject) => {
        axios
            .post(`api/paymentType`, {
                account_number: input.account_number,
                customer_id: input.customer_id,
                
                title: input.price,

            })
            .then(res =>
                resolve(res))
            .catch(err =>
                reject(err))
    });
}

//const getPayment = id => {
//    return new Promise((resolve, reject) => {
//        axios
//            .get(`api/paymentType/${id}`)
//            .then(payment => resolve(payment.data[0]))
//            .catch(error => reject(error));
//    });
//}

const getPayments = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/api/paymentType/`)
            .then(payment => resolve(payment.data))
            .catch(error => reject(error));
    });
}

export default { postPayment, getPayments};