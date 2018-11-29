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
        const resHoldr = [];
        if (result !== null)
        {
          Object.keys(result.data).forEach(customer =>
          {
            result.data[customer].id = customer;
            resHoldr.push(result.data[customer]);
          })
          resolve(result);
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
        const resHoldr = [];
        if (result !== null)
        {
          Object.keys(result.data).forEach(customer => 
          {
            result.data[customer].id = customer;
            resHoldr.push(result.data[customer]);
          })
          resolve(result)
        }
      })
      .catch((err) => reject(err))
  });
}

export default {getCustomers, getCustomer, getCustomerWithProducts}