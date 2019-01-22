import axios from 'axios';
import firebase from 'firebase';
import constants from '../../../constants';

const setAuthStuff = () =>
{
  var user = firebase.auth().currentUser;
  var header = { 'Content-Type': 'application/x-www-form-urlencoded'};
  var dataString = 'grant_type=refresh_token&refresh_token=' + user.refreshToken;
  var key = constants.firebaseConfig.apiKey;
  var url = constants.refreshConfig.url + key;
  var authToken = sessionStorage.getItem('token');
  const instance = axios.create(); // Creates an instance of axios
  instance.defaults.headers.common['Authorization'] = authToken // Sets the auth token to be sent with the request
  return new Promise((resolve, reject) =>     //Gets a new authtoken by 
  {
    axios(
      {
        method: 'post',
        url: url,
        data: dataString,
        header: header,
        auth: authToken
      }).then((res) => {
        var response = res.data.id_token;
        sessionStorage.setItem('token', response)
        resolve(res.data.id_token);
      }).catch((err) =>
      {
        reject(err);
      });
  });
};

const getUser = (id) =>
{
  setAuthStuff();
  return new Promise((resolve, reject) =>
  {
    axios.get(`api/customer/${id}`)
      .then((result) =>
      {
        if (result !== null)
        {
          resolve(result.data[0]);
        }
      }).catch((err) => { reject(err); });
  });
};

const addCustomer = (customer) => {
    setAuthStuff();
    return new Promise((resolve, reject) => {
        axios.post(`api/customer`, customer)
            .then((result) => {
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export default { getUser, addCustomer, setAuthStuff }