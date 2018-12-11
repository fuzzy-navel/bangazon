import axios from 'axios';

const getEmployees = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios
      .get(`api/employee`)
      .then((res) =>
      {
        if (res !== null)
        {
          resolve(res.data);
        }
      })
      .catch((err) =>
      {
        reject(err);
      });
  });
};

const getEmployee = (id) =>
{
  return new Promise((resolve, reject) =>
  {
    axios
      .get(`api/employee/${id}`)
      .then((res) =>
      {
        if (res !== null)
        {
          resolve(res.data);
        }
      })
      .catch((err) =>
      {
        reject(err);
      });
  });
};

const addEmployee = (employee) =>
{
  return new Promise((resolve, reject) =>
  {
    axios
      .post(`api/employee`, employee)
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

const updateEmployee = (id, employee) =>
{
  return new Promise((resolve, reject) =>
  {
    axios
      .put(`api/employee/${id}`, employee)
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

export default {addEmployee, getEmployees, getEmployee, updateEmployee}
