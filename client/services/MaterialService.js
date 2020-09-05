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

const get = (id) => {
	return http.get(`/materials/${id}`);
};

const create = (data) => {
	return http.post('/tutorials', data);
};

const update = (id, data) => {
	return http.put(`/materials/${id}`, data);
};

const remove = (id) => {
	return http.delete(`/tutorials/${id}`);
};

export default {
	getAll,
	getbyGroup,
	get,
	create,
	update,
	remove,
	findByDescription,
};
