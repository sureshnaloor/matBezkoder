import React, { useState, useEffect } from 'react';

import CompletestkService from '../../../client/services/CompleteStock';
import { StockCard } from './StockCard';
import { NostockCardComplete } from './NostockCard';

export const Completestk = ({ matcode }) => {
	const [completestk, setCompletestk] = useState([]);
	console.log(matcode);

	const getCompletestk = async () => {
		const response = await CompletestkService.getByCode(matcode);
		await setCompletestk(response.data);
		console.log(completestk);
		console.log(response.data);
	};

	useEffect(() => {
		getCompletestk();
	}, [matcode]);

	return (
		<>
			{completestk.length > 0 ? (
				<StockCard completestk={completestk} />
			) : (
				<div>
					<NostockCardComplete />
				</div>
			)}
		</>
	);
};
