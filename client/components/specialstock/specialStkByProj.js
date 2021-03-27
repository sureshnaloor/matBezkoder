import React, { useState, useEffect } from 'react';

import SpecialstkService from '../../../client/services/SpecialStock';
import { StockCard } from './StockCard2';
import { NostockCardSpecial } from './NostockCard';

export const SpecialStk = ({ projCode}) => {
	const [specialstock, setSpecialstock] = useState([]);
	console.log(specialstock);

	const getSpecialstk = async () => {
		const response = await SpecialstkService.getByWbs(projCode);
		await setSpecialstock(response.data);
		console.log(specialstock);
	};

	useEffect(() => {
		getSpecialstk();
	}, [projCode]);

	return (
		<>  
			{specialstock.length > 0 ? (
				<StockCard specialstk={specialstock} />
                
			) : (
				<div>
					<NostockCardSpecial />
				</div>
			)}
		</>
	);
};
