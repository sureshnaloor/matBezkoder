import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	alignCenter: {
		textAlign: 'center',
		padding: '10px',
	},
}));

export const NostockCardComplete = () => {
	const classes = useStyles();
	return (
		<div>
			<Typography variant='subtitle2' className={classes.alignCenter}>
				No stock currently for this material
			</Typography>
		</div>
	);
};
