import axios from 'axios';

const getUser = (id) =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`api/customer/${id}`)
      .then((result) =>
      {
        if (result !== null)
        {
          resolve(result);
        }
      }).catch((err) => { reject(err); });
  });
};

export default { getUser }