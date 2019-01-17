import axios from 'axios';

const GetAll = () => {
  const apiPath = `api/producttype`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(producttypes => resolve (producttypes.data))
      .catch(error => reject(error));
    });
};



export default {GetAll, };