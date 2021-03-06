import http from '../http-common';

const getAll = () => {
	return http.get('/materials');
};

const getbyGroup = (matgroup) => {
	return http.get(`/materials/mg/${matgroup}`);
};

const findByDescription = (description) => {
	return http.get(`/materials?description=${description}`);
};

const findByMatcode = (matcode) => {
	return http.get(`/materials?matcode=${matcode}`);
};

const get = (id) => {
	return http.get(`/materials/${id}`);
};

const create = (data) => {
	return http.post('/materials', data);
};

const update = (id, data) => {
	return http.put(`/materials/${id}`, data);
};

const remove = (id) => {
	return http.delete(`/materials/${id}`);
};

export default {
	getAll,
	getbyGroup,
	get,
	create,
	update,
	remove,
	findByDescription,
	findByMatcode,
};
