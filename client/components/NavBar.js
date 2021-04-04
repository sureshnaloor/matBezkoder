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
	IconButton,
} from '@material-ui/core';

import { Home, Description, Book, AccountBox, Shop } from '@material-ui/icons';
import AccountBalanceWalletTwoToneIcon from '@material-ui/icons/AccountBalanceWalletTwoTone';

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
						<Grid>
							{' '}
							<Link href='/'>
								<Home fontSize='small' color='secondary' />
							</Link>
						</Grid>

						<List component='nav' style={flexContainer}>
							<Grid>
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
							<Grid>
								<ListItem>
									<ListItemText inset>
										{/* <IconButton> */}
												<AccountBox fontSize='small' color='secondary' />
										{/* </IconButton> */}
										<Typography variant='button'>
											<Link href='/vendors'>
												<a>Vendors</a>
											</Link>
										</Typography>
									</ListItemText>
								</ListItem>
							</Grid>
							<Grid>
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
							<Grid>
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
							<Grid>
								<ListItem>
									<ListItemText inset>
										<AccountBalanceWalletTwoToneIcon
											fontSize='small'
											color='secondary'
										/>
										<Typography variant='button'>
											<Link href='/materialtransactions'>
												<a>Transactions</a>
											</Link>
										</Typography>
									</ListItemText>
								</ListItem>
							</Grid>
							<Grid>
								<ListItem>
									<ListItemText inset>
										<img src='https://img.icons8.com/material/24/000000/login-rounded--v1.png' />
										<Typography variant='button'>
											<Link href='/login'>
												<a>Login</a>
											</Link>
										</Typography>
									</ListItemText>
								</ListItem>
							</Grid>
							<Grid>
								<ListItem>
									<ListItemText inset>
										<img src='/images/passwordchg.png' />
										<Typography variant='button'>
											<Link href='/chgpassword'>
												<a>pw change</a>
											</Link>
										</Typography>
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
