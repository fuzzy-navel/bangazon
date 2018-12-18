import axios from 'axios';

const GetAll = () => {
  const apiPath = `api/computer`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(c => resolve (c.data))
      .catch(error => reject(error));
    });
};

const GetSingle = id => {
  const apiPath = `api/computer/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(c => resolve (c.data[0]))
      .catch(error => reject(error));
  });
}

const Add = input => {
  const apiPath = `api/computer`;
  return new Promise((resolve, reject) => {
    axios
      .post(apiPath, {
        purchase_date: input.purchaseDate,
        decommissioned: (
          input.decommissioned ?
          input.decommissioned.toString() :
          null
        ),
        employee_id: input.employeeId,
        in_use: JSON.parse(input.inUse),
        is_malfunctioning: JSON.parse(input.isMalfunctioning),
        make: input.make,
        model: input.model,
      })
      .then(response => resolve (response))
      .catch(error => {
        console.log("Error during the HTTP POST method, ", error);
        reject(error);
      });
  });
}

const Delete = input => {
  const apiPath = `api/computer/${input}`;
  return new Promise((resolve, reject) => {
    axios
      .delete(apiPath)
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

const Update = (input, id) => {
  const apiPath = `api/computer/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .put(apiPath, {
        purchase_date: input.purchaseDate,
        decommissioned: (
          input.decommissioned ?
          input.decommissioned.toString() :
          null
        ),
        employee_id: input.employeeId,
        in_use: JSON.parse(input.inUse),
        is_malfunctioning: JSON.parse(input.isMalfunctioning),
        make: input.make,
        model: input.model
      })
      .then(response => resolve (response))
      .catch(error => {
        console.log("Error during the HTTP PUT method, ", error);
        reject(error);
      });
  });
}

export default {GetAll, GetSingle, Add, Delete, Update};