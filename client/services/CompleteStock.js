import http from '../http-common';

const getAll = () => {
	return http.get('/completestock');
};

const getByCode = (matcode) => {
	return http.get(`/completestock/matcode/${matcode}`);
};

const getPlantSum = () => {
	return http.get('/completestock/plant/sum');
};

export default {
	getAll,
	getByCode,
	getPlantSum,
};
