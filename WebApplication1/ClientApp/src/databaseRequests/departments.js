import axios from 'axios';
//import constants from '../constants';

const getAllDepartments = () => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/department?includes=employees`)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const addDepartment = (deptObj) => {
    return new Promise((resolve, reject) => {
        axios.post(`/api/department`, deptObj)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const deleteDepartment = (id) => {
    return new Promise((resolve, reject) => {
        axios.delete(`/api/delete/${id}`)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export default {
    getAllDepartments,
    addDepartment,
    deleteDepartment
};
