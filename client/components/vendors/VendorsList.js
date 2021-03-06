import React, {useEffect} from 'react';
import Link from '../Link';
import Moment from 'react-moment';

import {Purchaseorder} from '../purchaseorders/PurchaseorderListbyVendor'

import { makeStyles } from '@material-ui/core/styles';
import {
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
} from '@material-ui/core';

import BallotIcon from '@material-ui/icons/Ballot';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	grid: {
		width: '100%',
		margin: '0px',
		backgroundColor: '#f2f5f7',
		paddingBottom: '10px',
		marginBottom: '10px',
	},
	margin: {
		margin: theme.spacing(1),
	},
	fontColor: {
		color: 'red',
		fontWeight: '900',
	},
	bgColor: {
		background: 'rgb(216,220,221)',
		boxShadow:
			'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',			
	},
	bgColor2: {
		background: 'rgb(245,245,186)',
		boxShadow:
			'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
	},
	
	alignRight: {
		textAlign: 'right',
	},
	alignCenter: {
		textAlign: 'center',
	},
	editBtn: {
		color: 'white',
		fontSize: '0.8rem',
	},
}));


const VendorsList = ({
    vendors,
	setActiveVendor,
	currentVendor,
    searchVendorname,    
	findByVendorname,	
	onChangeSearchVendorname,
	searchVendorcode,
	findByVendorcode,
	onChangeSearchVendorcode,
	fromVendorPage,
    
}) => {
	const classes = useStyles();
	
	useEffect(()=> {
		setActiveVendor(vendors[0])
	},[vendors])
    
    return (
        <>
           <div className={classes.materials} >
			<h5> (Please enter  part of vendor name to search (or) vendor code) </h5>	

			<TextField
				id='outlined-basic'
				label='Vendor Name'
				variant='outlined'
				className='textinput'
				size='small'
				value={searchVendorname}
				onChange={onChangeSearchVendorname}
			/>

			<Button
				size='small'
				variant='contained'
				color='primary'
				onClick={findByVendorname}
				className={classes.margin}
			>
				Search by name
			</Button>			

			<TextField
				id='outlined-basic'
				label='Vendor Code:'
				variant='outlined'
				className='textinput'
				size='small'
				value={searchVendorcode}
				onChange={onChangeSearchVendorcode}
			/>

			<Button
				size='small'
				variant='outlined'
				color='secondary'
				onClick={findByVendorcode}
				className={classes.margin}
			>
				Search by code
			</Button>
       

        <Grid container spacing={2} className={classes.grid}>
				<Grid item xs={6} md={6}>
					{vendors.map((row, index) => (
						<List component='nav' key={index}>
							<ListItem onClick={() => setActiveVendor(row, index)}>
								<ListItemIcon>
									<BallotIcon color='action' />
								</ListItemIcon>
								<ListItemText
									className={classes.fontColor}
									primary={row['vendor-code']}
									secondary={row['vendor-name']}
								/>
							</ListItem>
						</List>
					))}
				</Grid>

                <Grid item xs={6} md={6}>
					{currentVendor ? (
						<>
							<Paper
								elevation={3}
								square
								className={classes.bgColor}
								justify='center'
							>
								<div className={classes.margin}>
									<Typography
										variant='subtitle1'
										className={classes.alignCenter}
									>
										
										Vendor Code: {currentVendor['vendor-code']}
										
									</Typography>
									<Divider />
									<Typography variant='subtitle2' gutterBottom>
										
									 Vendor Name: {currentVendor['vendor-name']} <br /> 
									</Typography>
									<Typography variant='button' display='block' gutterBottom>
										Material group: {currentVendor['mat-group']} <br />
									</Typography>
									<Typography variant='button' display='block' gutterBottom>
										Remarks: {currentVendor['remarks']} <br />
									</Typography>
									<Typography variant='button' display='block' gutterBottom>
										CR Number: {currentVendor['registration-number']} <br />
									</Typography>
									
									<Typography variant='caption' display='block' gutterBottom>
										Salesperson contact: {currentVendor['salesperson']['name']}
										<br />
									</Typography>
									<Typography variant='caption' display='block' gutterBottom>
										Salesperson Mobile: {currentVendor['salesperson']['mobile']}
										<br />
									</Typography>
									<Link href={'/vendors/' + currentVendor._id}>
										<Button size='small' variant='contained' color='primary'>
											<a className={classes.editBtn}>Edit</a>
										</Button>
									</Link>
									<Divider />
									<Typography
										variant='overline'
										display='block'
										className={classes.alignRight}
									>
										Created date:{' '}
										<Moment
											format='YYYY/MM/DD'
											date={currentVendor['created-date']}
										/>
									</Typography>
									<Typography
										variant='overline'
										display='block'
										className={classes.alignRight}
									>
										Created By: {currentVendor['created-by']}
									</Typography>
									
								</div>
							</Paper>
							<br />

							{/* Purchase orders of the selected vendor */}
						
							<Paper
								elevation={3}
								square
								className={classes.bgColor}
								justify='center'
							>
								<Purchaseorder vencode={currentVendor['vendor-code']} />
							</Paper>
							<br />
							
							
						</>
					) : (
						<div>
							<br />
							<p>Please click on a Vendor to get its details...</p>
						</div>
					)}
				</Grid>

        </Grid>

                 </div>
        </>
    )
}

export default VendorsList
