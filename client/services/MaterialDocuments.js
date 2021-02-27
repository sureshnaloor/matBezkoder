import http from '../http-common';

const getAll = () => {
	return http.get('/materialdocs/material/all');
};

const getAllReceipts = () => {
	return http.get('/materialdocs/material');
};

const getById = (id) => {
	return http.get(`/materialdocs/matdoc/${id}`);
};

const getByMatcode = (matcode) => {
	return http.get(`/materialdocs/material?matcode=${matcode}`);
};

const getByMatdescription = (description) => {
	return http.get(`/materialdocs/material?description=${description}`);
};

const getAllByMatcode = (matcode) => {
	return http.get(`/materialdocs/material/all?matcode=${matcode}`);
};

const getAllByMatdescription = (description) => {
	return http.get(`/materialdocs/material/all?description=${description}`);
};

const getByWbs = (wbsnumber) => {
	return http.get(`/materialdocs/accounts?wbsnumber=${wbsnumber}`);
};

const getByNetwork = (network) => {
	return http.get(`/materialdocs/accounts?network=${network}`);
};

const getByCostcenter = (costcenter) => {
	return http.get(`/materialdocs/accounts?costcenter=${costcenter}`);
};

const getBySalesorder = (saleorder) => {
	return http.get(`/materialdocs/accounts?saleorder=${saleorder}`);
};

export default {
	getAll,
	getById,
	getAllReceipts,
	getByMatcode,
	getByMatdescription,
	getAllByMatcode,
	getAllByMatdescription,
	getByWbs,
	getByNetwork,
	getBySalesorder,
	getByCostcenter,
};
