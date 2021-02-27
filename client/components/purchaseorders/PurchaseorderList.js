import React, { useState, useEffect } from 'react';

import PurchaseService from '../../../client/services/Purchaseorders';
import { PurchaseorderCard } from './PurchaseorderCard';
import { NopurchaseorderCard } from './NopurchaseorderCard';

export const Purchaseorder = ({ matcode }) => {
	const [purchaseorder, setPurchaseorder] = useState([]);
	console.log(matcode);

	const getPurchaseorder = async () => {
		const response = await PurchaseService.getByCode(matcode);
		await setPurchaseorder(response.data);
		console.log(purchaseorder);
	};

	useEffect(() => {
		getPurchaseorder();
	}, [matcode]);

	return (
		<>
			{purchaseorder.length > 0 ? (
				<PurchaseorderCard purchaseorder={purchaseorder} />
			) : (
				<div>
					<NopurchaseorderCard />
				</div>
			)}
		</>
	);
};
