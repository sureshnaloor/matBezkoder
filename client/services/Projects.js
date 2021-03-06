import http from '../http-common';

const getAll = () => {
	return http.get('/projects');
};

const findByProjectname = (projectName) => {
	return http.get(`/projects?projectName=${projectName}`);
};

const get = (id) => {
	return http.get(`/projects/${id}`);
};

export default {
	getAll,	
	get,
	findByProjectname,	
};

