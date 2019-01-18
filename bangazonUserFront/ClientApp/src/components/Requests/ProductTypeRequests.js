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

const GetLastThreeProductsByCategory = () => {
  const apiPath = `api/producttype/lastproducts`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(producttypes => resolve (producttypes.data))
      .catch(error => reject(error));
    });
};

const MashData = () => {
  let getAll = "";
  let lastThree = "";
  return new Promise((resolve, reject) => {
    GetAll()
    .then(a => {
      getAll = a;
      console.log(getAll);
      resolve(getAll);
    })
    GetLastThreeProductsByCategory()
    .then(b => {
      lastThree = b;
      console.log(lastThree);
      resolve(lastThree);
    })
    .catch(error => reject(error));
  });
};

export default {MashData, GetAll, GetLastThreeProductsByCategory};