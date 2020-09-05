import React, { useState, useEffect } from 'react';

import MatDataService from '../../services/MaterialService';
import MatgroupDataServices from '../../services/MaterialGroups';
import MaterialsList from '../../components/materials/MaterialsList';

import MaterialgroupList from '../../components/materials/MaterialgroupList';

const Materials = () => {
	const [materials, setMaterials] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [currentMaterial, setCurrentMaterial] = useState(null);
	const [matgroups, setMatgroups] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(-1);
	const [searchDescription, setSearchDescription] = useState('');
	const [matgroupSelected, setMatgroupSelected] = useState('AM01');

	const setActiveMaterial = (material, index) => {
		setCurrentMaterial(material);
		setCurrentIndex(index);
	};

	const onChangeSearchDescription = (e) => {
		const searchDescription = e.target.value;
		setSearchDescription(searchDescription);
		console.log(searchDescription);
	};

	const findByDescription = () => {
		MatDataService.findByDescription(searchDescription)
			.then((response) => {
				setMaterials(response.data);
				console.log(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	useEffect(() => {
		retrieveMatgroups();
		retrieveMaterials();
	}, [matgroupSelected]);

	const retrieveMaterials = async () => {
		await setLoading(true);
		const response = await MatDataService.getbyGroup(matgroupSelected);
		await setMaterials(response.data);
		await setLoading(false);
		console.log(materials);
	};

	const retrieveMatgroups = async () => {
		await setLoading(true);
		const response = await MatgroupDataServices.getAll();
		await setMatgroups(response.data);
		await setLoading(false);
	};

	const handleChange = (e) => {
		console.log(e.target.value);
		setMatgroupSelected(e.target.value);
	};

	if (isLoading) {
		return (
			<>
				<h5> Loading.....</h5>
			</>
		);
	} else {
		// console.log(materials);
		console.log(matgroups);
		return (
			<>
				<div>
					<MaterialgroupList
						matgroups={matgroups}
						handleChange={handleChange}
						matgroupSelected={matgroupSelected}
					/>
				</div>
				<div>
					{/* <h4> Materials List restricted to 100 records max:</h4> */}
					<MaterialsList
						materials={materials}
						setActiveMaterial={setActiveMaterial}
						currentMaterial={currentMaterial}
						searchDescription={searchDescription}
						onChangeSearchDescription={onChangeSearchDescription}
						findByDescription={findByDescription}
					/>
				</div>
			</>
		);
	}
};
export default Materials;
