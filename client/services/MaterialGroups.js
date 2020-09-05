import http from '../http-common';

const getAll = () => {
	return http.get('/matgroups');
};

export default {
	getAll,
};
