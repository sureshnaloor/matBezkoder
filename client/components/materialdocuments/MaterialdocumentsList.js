import React, { useState, useEffect } from 'react';

import MatdocService from '../../../client/services/MaterialDocuments';
import { MatdocCard } from './MatdocCard';
import { NomaterialdocumentCard } from './NomaterialdocumentCard';

export const Materialdocuments = ({ matcode }) => {
	const [matdocs, setMatdocs] = useState([]);
	// console.log(matdocs);

	const getMatdocs = async () => {
		const response = await MatdocService.getByMatcode(matcode);
		await setMatdocs(response.data);
		console.log(matdocs);
	};

	useEffect(() => {
		getMatdocs();
	}, [matcode]);

	return (
		<>
			{matdocs.length > 0 ? (
				<MatdocCard matdocs={matdocs} />
			) : (
				<div>
					<NomaterialdocumentCard />
				</div>
			)}
		</>
	);
};
