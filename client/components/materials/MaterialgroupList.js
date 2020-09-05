import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	select: {
		color: 'blue',
		fontWeight: '900',
		fontSize: '0.8rem',
	},
	label: {
		color: 'brown',
		fontWeight: '600',
		fontSize: '1rem',
	},
	mgroup: {
		color: 'darkblue',
		fontWeight: '300',
		fontSize: '0.8rem',
	},
	mgprimary: {
		color: 'green',
		fontWeight: '600',
		fontSize: '0.7rem',
		fontStyle: 'italic',
		paddingRight: '0.5rem',
	},
	mgsecondary: {
		color: 'darkblue',
		fontWeight: '300',
		fontSize: '0.7rem',
		fontStyle: 'bold',
	},
}));

const MaterialgroupList = ({ matgroups, matgroupSelected, handleChange }) => {
	const classes = useStyles();
	return (
		<div>
			<InputLabel id='select-label' className={classes.label}>
				Material Group:
			</InputLabel>

			<Select
				className={classes.select}
				labelId='select-label'
				id='simple-select'
				value={matgroupSelected}
				onChange={handleChange}
			>
				{matgroups.map((element) => (
					<MenuItem value={element['material-group']} key={element._id}>
						<span className={classes.mgroup}>{element['material-group']} </span>
						:
						<span className={classes.mgprimary}>
							{element['matgroup-primary-desc']}
						</span>
						<span className={classes.mgsecondary}>
							{element['matgroup-secondary-desc']}
						</span>
					</MenuItem>
				))}
			</Select>
		</div>
	);
};

export default MaterialgroupList;
