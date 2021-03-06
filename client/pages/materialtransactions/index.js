import React, {useState, useEffect} from 'react'

import MaterialdocDataService from '../../services/MaterialDocuments';
import MaterialdocList from '../../components/materialdocuments/MaterialdocumentsAll';

const Materialtransactions = () => {
	const [materialdocs, setMaterialdocs] = useState([]);
	const [isLoading, setLoading] = useState(true);
    
	// const [searchProjectname, setSearchProjectname] = useState('');
	
    
    // const setActiveProject = (project, index) => {
	// 	setCurrentProject(project);
	// 	setCurrentIndex(index);
	// };

	// const onChangeSearchProjectname = (e) => {
	// 	const searchProjectname = e.target.value;
	// 	setSearchProjectname(searchProjectname);
	// 	console.log(searchProjectname);
	// };

	// const findByProjectname = async () => {
	// 	try {
	// 		const response = await MaterialdocDataService.findByProjectname(searchProjectname)			
	// 		setMaterialdocs(response.data);
	// 		console.log(response.data);			
	// 	} catch (error) {
	// 		console.log(error)
	// 	}		
	// };
	
	useEffect(() => {
		retrieveMaterialdocs();
	}, []);

	const retrieveMaterialdocs = async () => {
		await setLoading(true);
		const response = await MaterialdocDataService.getAll()
		await setMaterialdocs(response.data);
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
		
		<MaterialdocList 
			materialdocs = {materialdocs}
			
		
		/>
	</div>)
};
	
}

export default Materialtransactions

