import http from '../http-common';

const getAll = () => {
	return http.get('/purchases');
};

const getByCode = (matcode) => {
	return http.get(`/purchases?matcode=${matcode}`);
};

const getByMatdesc = (description) => {
	return http.get(`/purchases?description=${description}`);
};

const getByVencode = (vencode) => {
	return http.get(`/purchases/vendor?vencode=${vencode}`);
};

const getByVenname = (vendorname) => {
	return http.get(`/purchases/vendor?vendorname=${vendorname}`);
};

const getById = (id) => {
	return http.get(`/purchases/${id}`);
};

const getByPoNum = (ponum) => {
	return http.get(`/purchases/purchase?ponum=${ponum}`);
};

const getByDaterange = (yearreq) => {
	return http.get(`'purchases/date?yearreq=${yearreq}`);
};

const getByWbs = (wbs) => {
	return http.get(`/purchases/account?wbs=${wbs}`);
};

const getByCostcenter = (costcenter) => {
	return http.get(`/purchases/account?costcenter=${costcenter}`);
};

const getByNetwork = (network) => {
	return http.get(`/purchases/account?network=${network}`);
};

const getBySalesdoc = (salesdoc) => {
	return http.get(`/purchases/account?salesdoc=${salesdoc}`);
};

const getByOrder = (order) => {
	return http.get(`/purchases/account?order=${order}`);
};

export default {
	getAll,
	getByCode,
	getByMatdesc,
	getByVencode,
	getByVenname,
	getById,
	getByPoNum,
	getByDaterange,
	getByOrder,
	getByWbs,
	getByNetwork,
	getBySalesdoc,
	getByCostcenter,
};
