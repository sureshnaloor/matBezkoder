import http from '../http-common';

const getAll = () => {
	return http.get('/vendors');
};

const findByVendorname = (vendorName) => {
	return http.get(`/vendors?vendorName=${vendorName}`);
};

const findByVendorcode = (vendorCode) => {
	return http.get(`/vendors?vendorCode=${vendorCode}`);
};

const get = (id) => {
	return http.get(`/vendors/${id}`);
};

export default {
	getAll,	
	get,
	findByVendorname,
	findByVendorcode,
};

