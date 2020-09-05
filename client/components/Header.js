import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Header() {
	return (
		<>
			<div className='topbanner header'>
				<img src='/images/JALLogo.png' alt='JAL Logo' />
			</div>

			<Typography
				variant='h6'
				align='center'
				color='textSecondary'
				gutterBottom
			>
				MM PORTAL-SAP Data for internal use
			</Typography>
		</>
	);
}
