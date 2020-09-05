import React from 'react';
import Link from './Link';

import {
	List,
	ListItem,
	ListItemText,
	Typography,
	Toolbar,
	AppBar,
	Grid,
} from '@material-ui/core';

import { Home, Description, Book, AccountBox, Shop } from '@material-ui/icons';

const NavBar = () => {
	const flexContainer = {
		display: 'flex',
		flexDirection: 'row',
		padding: 0,
		justifyContent: 'space-around',
	};
	return (
		<div>
			<AppBar position='static'>
				<Toolbar>
					<Grid container>
						<Grid item xs={2} md={2}>
							<Typography variant='body1' color='inherit'>
								<Home fontSize='small' color='secondary' />
								SAP MM Portal
							</Typography>
						</Grid>

						<List component='nav' style={flexContainer}>
							<Grid item xs={2} md={2}>
								<ListItem>
									<ListItemText inset>
										<Book fontSize='small' color='secondary' />
										<Typography variant='button'>
											<Link href='/materials'>
												<a>Materials</a>
											</Link>
										</Typography>
									</ListItemText>
								</ListItem>
							</Grid>
							<Grid item xs={2} md={2}>
								<ListItem>
									<ListItemText inset>
										<AccountBox fontSize='small' color='secondary' />
										<Typography variant='button'>
											<Link href='/vendors'>
												<a>Vendors</a>
											</Link>
										</Typography>
									</ListItemText>
								</ListItem>
							</Grid>
							<Grid item xs={2} md={2}>
								<ListItem>
									<ListItemText inset>
										<Description fontSize='small' color='secondary' />
										<Typography variant='button'>
											<Link href='/projects'>
												<a>Projects</a>
											</Link>
										</Typography>
									</ListItemText>
								</ListItem>
							</Grid>
							<Grid item xs={2} md={2}>
								<ListItem>
									<ListItemText inset>
										<Shop fontSize='small' color='secondary' />
										<Typography variant='button'>
											<Link href='/purchases'>
												<a>Purchases</a>
											</Link>
										</Typography>
									</ListItemText>
								</ListItem>
							</Grid>
							<Grid item xs={2} md={2}>
								<ListItem>
									<ListItemText inset>
										<img src='https://img.icons8.com/material/24/000000/login-rounded--v1.png' />
										<Typography variant='button'>Login</Typography>
									</ListItemText>
								</ListItem>
							</Grid>
						</List>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
};
export default NavBar;
