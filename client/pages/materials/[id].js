import React, { useState, useEffect } from 'react';
import MatDataService from '../../services/MaterialService';
import { useRouter } from 'next/router';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Moment from 'react-moment';
import { Typography } from '@material-ui/core';

export default () => {
	const router = useRouter();

	const initMaterialState = {
		id: null,
		'created-date': '',
		'changed-date': '',
		'material-code': '',
		'material-industry': '',
		'material-group': '',
		'unit-measure': '',
		'old-material-number': '',
		'Mat-description': '',
		'Mat-description2': '',
		'created-by': 'suresh',
		'updated-by': 'suresh',
		'changed-by': 'suresh',
		'close-flag': '',
		'mat-type': '',
		'long-matdescription': '',
	};

	const [currentMaterial, setCurrentMaterial] = useState(initMaterialState);
	const [message, setMessage] = useState('');

	const getMaterial = (id) => {
		id
			? MatDataService.get(id)
					.then((response) => {
						setCurrentMaterial(response.data);
						console.log(response.data);
					})
					.catch((e) => console.log(e))
			: null;
	};

	useEffect(() => {
		getMaterial(router.query.id);
	}, [router.query.id]);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		console.log(name, value);
		setCurrentMaterial({ ...currentMaterial, [name]: value });
	};

	const updateMaterial = () => {
		MatDataService.update(currentMaterial._id, currentMaterial)
			.then((response) => {
				console.log(response.data);
				setMessage('The material was updated successfully!');
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<>
			<Typography
				variant='h6'
				color='secondary'
				style={{ marginBottom: '20px', marginTop: '20px' }}
			>
				{' '}
				Disabled fields cannot be edited
			</Typography>

			<div>
				{currentMaterial ? (
					<div>
						<form>
							<TextField
								id='material-code'
								label='material code'
								name='material-code'
								value={currentMaterial['material-code']}
								readOnly
								disabled
								style={{ marginBottom: '40px' }}
							/>
							<TextField
								id='material-industry'
								label='material industry'
								name='material-industry'
								value={currentMaterial['material-industry']}
								readOnly
								disabled
							/>
							<TextField
								id='unit-measure'
								label='Unit of Measure'
								name='unit-measure'
								value={currentMaterial['unit-measure']}
								readOnly
								disabled
							/>
							<TextField
								id='mat-type'
								label='Material Type'
								name='mat-type'
								value={currentMaterial['mat-type']}
								readOnly
								disabled
							/>{' '}
							<br />
							<TextField
								id='material-group'
								label='material group'
								name='material-group'
								value={currentMaterial['material-group']}
								onChange={handleInputChange}
							/>
							<br />
							<Grid container spacing={2}>
								<Grid item xs={6} md={6}>
									<TextField
										id='old-material-number'
										label='Old material number'
										name='old-material-number'
										value={currentMaterial['old-material-number']}
										readOnly
										disabled
										style={{ marginBottom: '40px' }}
									/>
								</Grid>
								<Grid item xs={6} md={6}>
									<TextField
										id='Mat-description'
										label='Material description-existing'
										name='Mat-description'
										value={currentMaterial['Mat-description']}
										fullWidth
										readOnly
										disabled
										style={{ marginBottom: '40px' }}
									/>
								</Grid>
							</Grid>
							<br />
							<TextField
								id='Mat-description2'
								label='Material description update'
								name='Mat-description2'
								value={currentMaterial['Mat-description2']}
								fullWidth
								onChange={handleInputChange}
								style={{ marginBottom: '40px' }}
							/>
							<br />
							<TextField
								id='long-matdescription'
								label='Long Material Description'
								name='long-matdescription'
								value={currentMaterial['long-matdescription']}
								onChange={handleInputChange}
								multiline
								rows={3}
								variant='filled'
								fullWidth
								style={{ marginBottom: '40px' }}
							/>
							<Grid container>
								<Grid item xs={6} md={6}>
									<Typography color='textPrimary' variant='subtitle1'>
										Created date:{' '}
										<Moment
											format='YYYY/MM/DD'
											date={currentMaterial['created-date']}
										/>
									</Typography>
								</Grid>
								<Grid item xs={6} md={6}>
									<Typography color='textPrimary' variant='subtitle1'>
										Created by: {currentMaterial['created-by']}
									</Typography>
								</Grid>
							</Grid>
							<br />
							<Grid container>
								<Grid item xs={6} md={6}>
									<Typography color='textPrimary' variant='subtitle1'>
										Changed date:
										<Moment
											format='YYYY/MM/DD'
											date={currentMaterial['changed-date']}
										/>
									</Typography>
								</Grid>
								<Grid item xs={6} md={6}>
									<Typography color='textPrimary' variant='subtitle1'>
										Changed by: {currentMaterial['changed-by']}
									</Typography>
								</Grid>
							</Grid>
							<br />
							<TextField
								id='close-flag'
								label='Closed Material? '
								name='close-flag'
								value={!currentMaterial['close-flag'] ? 'Open' : 'Closed'}
								style={{ width: 200 }}
								readOnly
								disabled
								style={{ marginBottom: '40px' }}
							/>
						</form>

						<button type='submit' onClick={updateMaterial}>
							Update
						</button>
						<p>{message}</p>
					</div>
				) : (
					<div>
						<br />
						<p>Please click on a Material...</p>
					</div>
				)}
			</div>
		</>
	);
};
