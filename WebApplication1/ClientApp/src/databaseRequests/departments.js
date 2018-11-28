import axios from 'axios';
//import constants from '../constants';

const getAllDepartments = () => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/department`)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export default { getAllDepartments };
