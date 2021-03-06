import React, {useState, useEffect} from 'react'

import PurchaseDataService from '../../services/Purchaseorders';
import {Purchaseorder} from '../../components/purchaseorders/AllPurchaseorderList';

const Purchases = () => {
	const [purchases, setPurchases] = useState([]);
	const [isLoading, setLoading] = useState(true);
    
	const [searchProjectname, setSearchProjectname] = useState('');
	const [searchVendorname, setSearchVendorname] = useState('')    
	const [projects, setProjects] = useState([])
	const [vendors, setVendors] = useState([])
    
	const onChangeSearchProjectname = (e) => {
		const searchProjectname = e.target.value;
		setSearchProjectname(searchProjectname);
		console.log(searchProjectname);
	};

	const onChangeSearchVendorname = (e) => {
		const searchVendorname = e.target.value;
		setSearchVendorname(searchVendorname);
		console.log(searchVendorname);
	};

	const findByProjectname = async () => {
		try {
			const response = await ProjectDataService.findByProjectname(searchProjectname)			
			setProjects(response.data);
			console.log(projects);			
		} catch (error) {
			console.log(error)
		}		
	};

	const findByVendorname = async () => {
		try {
			const response = await VendorDataService.findByVendorname(searchVendorname)			
			setVendors(response.data);
			console.log(vendors);			
		} catch (error) {
			console.log(error)
		}		
	};

	useEffect(() => {
		retrievePurchases();
	}, []);

	const retrievePurchases = async () => {
		await setLoading(true);
		const response = await PurchaseDataService.getAll()
		await setPurchases(response.data);
		await setLoading(false);
		console.log(purchases);
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
		
		<Purchaseorder
			purchases = {purchases}
			
			searchProjectname = {searchProjectname}
			findByProjectname = {findByProjectname}	
			findByVendorname = {findByVendorname}
			onChangeSearchProjectname= {onChangeSearchProjectname}
			onChangeSearchVendorname= {onChangeSearchVendorname}		
		/>
	</div>)
};
	
}

export default Purchases 

