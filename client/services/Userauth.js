import http from '../http-common';

const create = (data) => {
	return http.post('/auth/register', data);
};

const loginAndGetToken = (data) => {
	return http.post('/auth/login', data);
};

const getUser = () => {
	return http.get('/auth', {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});
};

export default {
	create,
	loginAndGetToken,
	getUser,
};
