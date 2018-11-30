import axios from 'axios';

const getCustomers = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios
      .get(`api/customer`)
      .then((result) =>
      {
        if (result !== null)
        {
          resolve(result);
        }
      })
      .catch((err) =>
      {
        reject(err);
      });
  });
};

const getCustomer = (id) =>
{
  return new Promise((resolve, reject) =>
  {
    axios
      .get(`api/customer/${id}`)
      .then((result) =>
      {
        if (result !== null)
        {
          resolve(result.data);
        }
      }).catch((err) => reject(err));
  });
};

const getInactiveCustomers = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios
      .get(`api/customer/activeOrders=false`)
      .then((result) =>
      {
        if (result !== null)
        {
          resolve(result);
        }
      })
      .catch((err) => reject(err));
  });
};

const getCustomerWithProducts = (id) =>
{
  return new Promise((resolve, reject) =>
  {
    axios
      .get(`api/customer/${id}?include=products`)
      .then((result) =>
      {
        if (result !== null)
        {
          resolve(result)
        }
      })
      .catch((err) => reject(err))
  });
}

const getCustomerWithPaymentTypes = (id) =>
{
  return new Promise((resolve, reject) =>
  {
    axios
      .get(`api/customer/${id}?include=payments`)
      .then((res) =>
      {
        if (res !== null)
        {
          resolve(res);
        }
      })
      .catch((err) => reject(err));
  });
};

const addCustomer = (customer) =>
{
  return new Promise((resolve, reject) =>
  {
    axios
      .post(`api/customer`, customer)
      .then((res) =>
      {
        resolve(res);
      })
      .catch((err) =>
      {
        reject(err);
      });
  });
};

const updateCustomer = (id, customer) =>
{
  return new Promise((resolve, reject) =>
  {
    axios
      .put(`api/customer/${id}`, customer)
      .then((res) =>
      {
        resolve(res);
      })
      .catch((err) =>
      {
        reject(err);
      });
  });
}; 

export default {addCustomer, getCustomers, getCustomer, getCustomerWithPaymentTypes, getCustomerWithProducts, getInactiveCustomers, updateCustomer}