import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	alignCenter: {
		textAlign: 'center',
		padding: '10px',
	},
}));

export const NopurchaseorderCard = () => {
	const classes = useStyles();
	return (
		<div>
			<Typography variant='subtitle2' className={classes.alignCenter}>
				No purchase orders so far for this material
			</Typography>
		</div>
	);
};
