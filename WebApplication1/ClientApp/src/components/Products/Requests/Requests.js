import axios from 'axios';

const GetAll = () => {
  const apiPath = `api/product`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(products => resolve (products.data))
      .catch(error => reject(error));
    });
};

const GetSingle = id => {
  const apiPath = `api/product/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(product => resolve (product.data[0]))
      .catch(error => reject(error));
  });
}

const Add = input => {
  const apiPath = `api/product`;
  return new Promise((resolve, reject) => {
    axios
      .post(apiPath,input)
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

export default {GetAll, GetSingle, Add};