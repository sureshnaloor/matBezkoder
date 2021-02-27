import React, {useEffect} from 'react';
import Link from '../Link';
import Moment from 'react-moment';

import {Purchaseorder} from '../purchaseorders/PurchaseorderList'
import {Materialdocuments} from '../materialdocuments/MaterialdocumentsList'
import { Completestk } from '../completestock/CompleteStk';
import {SpecialStk} from '../specialstock/SpecialStk'

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

const MaterialsList = ({
	materials,
	setActiveMaterial,
	currentMaterial,
	searchDescription,
	onChangeSearchDescription,
	findByDescription,
}) => {
	const classes = useStyles();

	useEffect(()=> {
		setActiveMaterial(materials[0])
	},[materials])

	return (
		<div className='materials'>
			<TextField
				id='outlined-basic'
				label='Enter Mat desc to search'
				variant='outlined'
				className='textinput'
				size='small'
				value={searchDescription}
				onChange={onChangeSearchDescription}
			/>

			<Button
				size='small'
				variant='contained'
				color='secondary'
				onClick={findByDescription}
				className={classes.margin}
			>
				Search
			</Button>

			<Grid container spacing={2} className={classes.grid}>
				<Grid item xs={6} md={6}>
					{materials.map((mat, index) => (
						<List component='nav' key={index}>
							<ListItem onClick={() => setActiveMaterial(mat, index)}>
								<ListItemIcon>
									<BallotIcon color='action' />
								</ListItemIcon>
								<ListItemText
									className={classes.fontColor}
									primary={mat['material-code']}
									secondary={mat['Mat-description']}
								/>
							</ListItem>
						</List>
					))}
				</Grid>
				<Grid item xs={6} md={6}>
					{currentMaterial ? (
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
										Mat Code: {currentMaterial['material-code']}
									</Typography>
									<Divider />
									<Typography variant='subtitle2' gutterBottom>
										Mat Description: {currentMaterial['Mat-description']} <br />
									</Typography>
									<Typography variant='button' display='block' gutterBottom>
										Mat Type: {currentMaterial['mat-type']} <br />
									</Typography>
									<Typography variant='button' display='block' gutterBottom>
										Mat Group: {currentMaterial['material-group']} <br />
									</Typography>
									<Typography variant='button' display='block' gutterBottom>
										Unit Measure: {currentMaterial['unit-measure']} <br />
									</Typography>
									<Typography variant='caption' display='block' gutterBottom>
										Mat Industry: {currentMaterial['material-industry']} <br />
									</Typography>
									<Typography variant='caption' display='block' gutterBottom>
										Old Mat Number: {currentMaterial['old-material-number']}{' '}
										<br />
									</Typography>
									<Link href={'/materials/' + currentMaterial._id}>
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
											date={currentMaterial['created-date']}
										/>
									</Typography>
									<Typography
										variant='overline'
										display='block'
										className={classes.alignRight}
									>
										Created By: {currentMaterial['created-by']}
									</Typography>
									<Typography
										variant='overline'
										display='block'
										className={classes.alignRight}
									>
										Changed date:
										<Moment
											format='YYYY/MM/DD'
											date={currentMaterial['changed-date']}
										/>
									</Typography>
									<Typography
										variant='overline'
										display='block'
										className={classes.alignRight}
									>
										Changed By: {currentMaterial['changed-by']} <br />
									</Typography>
								</div>
							</Paper>
							<br />
							<Paper
								elevation={3}
								square
								className={classes.bgColor2}
								justify='center'
							>
								<SpecialStk matcode={currentMaterial['material-code']} />
								<br/> <hr />
								<Completestk matcode={currentMaterial['material-code']} />
								<br/>
							</Paper>
							<br />
							<Paper
								elevation={3}
								square
								className={classes.bgColor}
								justify='center'
							>
								<Purchaseorder matcode={currentMaterial['material-code']} />
							</Paper>
							<br />

							<Paper
								elevation={3}
								square
								className={classes.bgColor2}
								justify='center'
							>
								<Materialdocuments matcode={currentMaterial['material-code']} />
							</Paper>
							<br />
						</>
					) : (
						<div>
							<br />
							<p>Please click on a Material to get its details...</p>
						</div>
					)}
				</Grid>
			</Grid>
		</div>
	);
};

export default MaterialsList;
