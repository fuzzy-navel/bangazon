import axios from 'axios';

const GetAll = () => {
  const apiPath = `api/trainingprogram`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(tp => resolve (tp.data))
      .catch(error => reject(error));
    });
};

const GetSingle = id => {
  const apiPath = `api/trainingprogram/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(tp => resolve (tp.data[0]))
      .catch(error => reject(error));
  });
}

const Add = input => {
  const apiPath = `api/trainingprogram`;
  console.log(input);
  return new Promise((resolve, reject) => {
    axios
      .post(apiPath, {
        start_date: input.startdate,
        end_date: input.enddate,
        max_attendees: input.maxattendees,
      })
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

const Delete = input => {
  const apiPath = `api/trainingprogram/${input}`;
  return new Promise((resolve, reject) => {
    axios
      .delete(apiPath)
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

const Update = (input, id) => {
  const apiPath = `api/trainingprogram/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .put(apiPath, {
        start_date: input.startdate,
        end_date: input.enddate,
        max_attendees: input.maxattendees,
      })
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

const getAttendees = (id) =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`api/trainingprogram/${id}/attendees`)
      .then((res) =>
      {
        if (res != null)
        {
          resolve(res.data);
        }
      })
      .catch((err) =>
      {
        reject(err);
      });
  })
}

export default {GetAll, GetSingle, Add, Delete, Update, getAttendees};