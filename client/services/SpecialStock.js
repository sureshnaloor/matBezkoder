import http from '../http-common';

const getAll = () => {
	return http.get('/specialstock');
};

const getByCode = (matcode) => {
	return http.get(`/specialstock/matcode/${matcode}`);
};

const getPlantSum = () => {
	return http.get('/specialstock/plant/sum');
};

const getByWbs = (wbs) => {
	return http.get(`/specialstock/account?wbs=${wbs}`);
};

const getBySalesdoc = (salesdoc) => {
	return http.get(`/specialstock/account?salesdoc=${salesdoc}`);
};

export default {
	getAll,
	getByCode,
	getPlantSum,
	getByWbs,
	getBySalesdoc,
};
