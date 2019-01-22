import axios from 'axios';


const postPayment = input => {
    return new Promise((resolve, reject) => {
        axios
            .post(`api/paymentType`, {
                account_number: input.account_number,
                customer_id: input.customer_id,
                title: input.title,

            })
            .then(res =>
                resolve(res))
            .catch(err =>
                reject(err))
    });
}



const getCustomerWithPaymentTypes = (id) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`api/customer/${id}?include=payments`)
            .then((res) => {
                if (res !== null) {
                    resolve(res.data[0].paymentTypes);
                }
            })
            .catch((err) => reject(err));
    });
};

export default { postPayment, getCustomerWithPaymentTypes};