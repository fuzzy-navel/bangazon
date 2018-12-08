import axios from 'axios';

const GetAll = () => {
  const apiPath = `api/producttype`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(pt => resolve (pt.data))
      .catch(error => reject(error));
    });
};

const GetSingle = id => {
  const apiPath = `api/producttype/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(pt => resolve (pt))
      .catch(error => reject(error));
  });
}

const Add = input => {
  const apiPath = `api/producttype`;
  console.log(input.category);
  return new Promise((resolve, reject) => {
    axios
      .post(apiPath, {
        category: input.category,
      })
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

const Delete = input => {
  const apiPath = `api/producttype/${input}`;
  return new Promise((resolve, reject) => {
    axios
      .delete(apiPath)
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

const Update = (input, id) => {
  const apiPath = `api/producttype/${id}`;
  console.log('input.category', input.category);
  console.log('id', id);
  return new Promise((resolve, reject) => {
    axios
      .put(apiPath, {
        category: input.category
      })
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

export default {GetAll, GetSingle, Add, Delete, Update};