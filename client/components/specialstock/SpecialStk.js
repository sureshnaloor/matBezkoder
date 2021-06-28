import React, { useState, useEffect } from 'react';

import SpecialstkService from '../../../client/services/SpecialStock';
import { StockCard } from './StockCard';
import { NostockCardSpecial } from './NostockCard';

export const SpecialStk = ({ matcode }) => {
	const [specialstock, setSpecialstock] = useState([]);
	console.log(matcode);

	const getSpecialstk = async () => {
		const response = await SpecialstkService.getByCode(matcode);
		await setSpecialstock(response.data);
		console.log(specialstock);
		console.log(response.data)
	};

	useEffect(() => {
		getSpecialstk();
	}, [matcode]);

	return (
		<>
			{specialstock.length > 0 ? (
				<StockCard specialstock={specialstock} />
				
			) : (
				<div>
					<NostockCardSpecial />
				</div>
			)}
		</>
	);
};
