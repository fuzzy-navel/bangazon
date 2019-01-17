import axios from 'axios';
import firebase from 'firebase';



const getUser = (id) =>
{
  var user = firebase.auth().currentUser;
  var authToken = user.ra;
  const instance = axios.create(); // Creates an instance of axios
  instance.defaults.headers.common['Authorization'] = authToken // Sets the auth token to be sent with the request
  return new Promise((resolve, reject) =>
  {
    axios.get(`api/customer/${id}`)
      .then((result) =>
      {
        if (result !== null)
        {
          resolve(result);
        }
      }).catch((err) => { reject(err); });
  });
};

export default { getUser }