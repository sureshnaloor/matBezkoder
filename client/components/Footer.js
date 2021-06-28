import React from 'react';
import {
	AppBar,
	Toolbar,
	Container,
	Typography,
	Grid,
} from '@material-ui/core';

const Footer = () => {
	return (
		<div className="footer">
			<AppBar position="sticky" style={{ background: 'rgb(150,230,240)' }}>
				<Container maxWidth="md">
					<Toolbar>
						<Grid container>
							<Grid item xs={6} md={6}>
								{' '}
								<Typography variant="body2" color="secondary">
									&copy; 2021 JAL International Co Ltd
								</Typography>
							</Grid>
							<Grid item xs={6} md={6}>
								<Typography variant="caption" color="textPrimary">
									Designed and developed by JAL, data: offline SAP.						
									
								</Typography>
							</Grid>
						</Grid>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
};
export default Footer;
