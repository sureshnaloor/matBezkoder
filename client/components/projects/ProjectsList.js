import React, {useEffect} from 'react';
import Link from '../Link';
import Moment from 'react-moment';

import Purchaseorder from '../purchaseorders/PurchaseorderByProject'
import { SpecialStk } from '../specialstock/specialStkByProj';

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


const ProjectsList = ({
    projects,
	setActiveProject,
	currentProject,
    searchProjectname,    
	findByProjectname,	
	onChangeSearchProjectname,    
}) => {
	const classes = useStyles();
	
	useEffect(()=> {
		setActiveProject(projects[0])
	},[projects])
    
    return (
        <>
           <div className={classes.materials} >
			<h5> (Please enter  part of project name to search (or) project wbs code) </h5>	

			<TextField
				id='outlined-basic'
				label='Project Name'
				variant='outlined'
				className='textinput'
				size='small'
				value={searchProjectname}
				onChange={onChangeSearchProjectname}
			/>

			<Button
				size='small'
				variant='contained'
				color='primary'
				onClick={findByProjectname}
				className={classes.margin}
			>
				Search by name
			</Button>			

			<TextField
				id='outlined-basic'
				label='Project wbs Code:'
				variant='outlined'
				className='textinput'
				size='small'
				// value={searchProjectcode}
				// onChange={onChangeSearchProjectcode}
			/>

			<Button
				size='small'
				variant='outlined'
				color='secondary'
				// onClick={findByProjectcode}
				className={classes.margin}
			>
				Search by code
			</Button> 
       

        <Grid container spacing={2} className={classes.grid}>
				<Grid item xs={6} md={6}>
					{projects.map((row, index) => (
						<List component='nav' key={index}>
							<ListItem onClick={() => setActiveProject(row, index)}>
								<ListItemIcon>
									<BallotIcon color='action' />
								</ListItemIcon>
								<ListItemText
									className={classes.fontColor}
									primary={row['project-wbs']}
									secondary={row['project-name']}
								/>
							</ListItem>
						</List>
					))}
				</Grid>

                <Grid item xs={6} md={6}>
					{currentProject ? (
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
										
										Project wbs Code: {currentProject['project-wbs']}
										
									</Typography>
									<Divider />
									<Typography variant='subtitle2' gutterBottom>										
									 Project Name: {currentProject['project-name']} <br /> 
									</Typography>
									<Typography variant='button' display='block' gutterBottom>
										Project In-charge: {currentProject['project-incharge']} <br />
									</Typography>
									
									<Link href={'/projects/' + currentProject._id}>
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
											date={currentProject['created-date']}
										/>
									</Typography>

                                    <Typography
										variant='overline'
										display='block'
										className={classes.alignRight}
									>
										Created date:{' '}
										<Moment
											format='YYYY/MM/DD'
											date={currentProject['changed-date']}
										/>
									</Typography>									
								</div>
							</Paper>
							<br />

							 {/* Purchase orders of the selected project */}
						
							<Paper
								elevation={3}
								square
								className={classes.bgColor}
								justify='center'
							>
								<Purchaseorder projCode={currentProject['project-wbs']} />
							</Paper>
							<br /> 

							{/* special stock of selected wbs */}

							<Paper
								elevation={3}
								square
								className={classes.bgColor}
								justify='center'
							>
								<SpecialStk projCode={currentProject['project-wbs']} />
							</Paper>
							<br /> 
							 
							
						</>
					) : (
						<div>
							<br />
							<p>Please click on a Project to get its details...</p>
						</div>
					)}
				</Grid>

        </Grid>

                 </div>
        </>
    )
}

export default ProjectsList
