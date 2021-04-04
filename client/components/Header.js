import React from 'react';
import Typography from '@material-ui/core/Typography';

import { Grid } from '@material-ui/core';

export default function Header() {	
	return (
		<>
			<div className='topbanner header'>
				<img src='/images/JALLogo.png' alt='JAL Logo' />
			</div>

			<Grid container alignItems='flex-start' spacing={2}>
				<Grid item xs={9}>
					<Typography
						variant='h6'
						align='center'
						color='textSecondary'
						gutterBottom
					>
						MM PORTAL-SAP Data for internal use
					</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography
						variant='h6'
						align='center'
						color='textSecondary'
						gutterBottom
					>
						Welcome User.
					</Typography>
				</Grid>
			</Grid>
		</>
	);
}
