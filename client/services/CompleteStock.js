import http from '../http-common';

const getAll = (page) => {
	let limit=100
	return http.get(`/completestock?page=${page}&limit=${limit}`);
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
