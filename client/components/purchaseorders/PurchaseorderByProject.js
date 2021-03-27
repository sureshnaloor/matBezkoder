import React, { useState, useEffect } from 'react';

import PurchaseService from '../../../client/services/Purchaseorders';
import { PurchaseorderCard } from './PurchaseorderCard3';
import { NopurchaseorderCard } from './NopurchaseorderCard';

const Purchaseorder = ({ projCode }) => {
	const [purchaseorder, setPurchaseorder] = useState([]);
	console.log(projCode);

	const getPurchaseorder = async () => {
		const response = await PurchaseService.getByWbs(projCode);
		await setPurchaseorder(response.data);
		console.log(purchaseorder);
	};

	useEffect(() => {
		getPurchaseorder();
	}, [projCode]);

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

export default Purchaseorder


