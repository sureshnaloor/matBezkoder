import React, { useState, useEffect } from 'react';

import VendorDataService from '../../services/VendorService';
import VendorsList from '../../components/vendors/VendorsList';

const Vendors = () => {
	const [vendors, setVendors] = useState([]);
	const [isLoading, setLoading] = useState(true);
    const [currentVendor, setCurrentVendor] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
	const [searchVendorname, setSearchVendorname] = useState('');
	const [searchVendorcode, setSearchVendorcode] = useState("");
	
    
    const setActiveVendor = (vendor, index) => {
		setCurrentVendor(vendor);
		setCurrentIndex(index);
	};

	const onChangeSearchVendorname = (e) => {
		const searchVendorname = e.target.value;
		setSearchVendorname(searchVendorname);
		console.log(searchVendorname);
	};
	
	const findByVendorname = async () => {
		try {
			const response = await VendorDataService.findByVendorname(searchVendorname)			
			setVendors(response.data);
			console.log(response.data);			
		} catch (error) {
			console.log(error)
		}		
	};	

	const onChangeSearchVendorcode = (e) => {
		const searchVendorcode = e.target.value;
		setSearchVendorcode(searchVendorcode);
		console.log(searchVendorcode);
	};
	
	const findByVendorcode = async () => {
		try {
			const response = await VendorDataService.findByVendorcode(searchVendorcode)			
			setVendors(response.data);
			console.log(response.data);			
		} catch (error) {
			console.log(error)
		}		
	};	

	useEffect(() => {
		retrieveVendors();
	}, []);

	const retrieveVendors = async () => {
		await setLoading(true);
		const response = await VendorDataService.getAll()
		await setVendors(response.data);
		await setLoading(false);
		console.log(response);
	};

	if (isLoading) {
		return (
			<>
				<h5> Loading.....</h5>
			</>
		);
	} else {

	return(
	<div className='minhtcont'>
		
		<VendorsList 	vendors={vendors}
						setActiveVendor={setActiveVendor}
						currentVendor={currentVendor}
						searchVendorname={searchVendorname}						
						findByVendorname={findByVendorname}						
						onChangeSearchVendorname= {onChangeSearchVendorname}
						searchVendorcode = {searchVendorcode} 
						findByVendorcode = {findByVendorcode} 
						onChangeSearchVendorcode= {onChangeSearchVendorcode}
						fromVendorPage={true} />
	</div>)
};
}

export default Vendors
