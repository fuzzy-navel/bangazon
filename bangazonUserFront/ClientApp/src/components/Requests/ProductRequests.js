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
      // .then(product => resolve (product.data[0]))
      .then(product => {
        console.log('REQUEST', product)
        resolve(product.data[0]);
      })
      .catch(error => reject(error));
  });
}

const Add = input => {
  const apiPath = `api/product`;
  return new Promise((resolve, reject) => {
    axios
      .post(apiPath, {
        category: input.category,
        price: input.price,
        title: input.title,
        description: input.description,
        quantity: input.quantity,
        owner_id: input.owner_id,
      })
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

const Delete = input => {
  const apiPath = `api/product/${input}`;
  return new Promise((resolve, reject) => {
    axios
      .delete(apiPath)
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

const Update = (input, id) => {
  const apiPath = `api/product/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .put(apiPath, {
        category: input.category,
        price: input.price,
        title: input.title,
        description: input.description,
        quantity: input.quantity,
        owner_id: input.owner_id,
      })
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

export default {GetAll, GetSingle, Add, Delete, Update};
