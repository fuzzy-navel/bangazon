import axios from 'axios';
import firebase from 'firebase';


const postPayment = input => {
  var user = firebase.auth().currentUser;
    return new Promise((resolve, reject) => {
        axios
            .post(`api/paymentType`, {
                account_number: input.account_number,
                customer_id: user.uid,                
                title: input.title,
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

const getCustomerWithPaymentTypes = () => {
  var user = firebase.auth().currentUser;
  return new Promise((resolve, reject) => {
    axios
      .get(`api/customer/${user.uid}?include=payments`)
      .then((res) => {
        if (res !== null) {
          resolve(res.data[0].paymentTypes);
        }
      })
      .catch((err) => reject(err));
  });
};

export default { postPayment, getPayments, getCustomerWithPaymentTypes};