import React, { useState, useEffect } from 'react';

import PurchaseService from '../../../client/services/Purchaseorders';
import { PurchaseorderCard } from './PurchaseorderCard2';
import { NopurchaseorderCard } from './NopurchaseorderCard';

export const Purchaseorder = ({ vencode }) => {
	const [purchaseorder, setPurchaseorder] = useState([]);
	console.log(vencode);

	const getPurchaseorder = async () => {
		const response = await PurchaseService.getByVencode(vencode);
		await setPurchaseorder(response.data);
		console.log(purchaseorder);
	};

	useEffect(() => {
		getPurchaseorder();
	}, [vencode]);

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


