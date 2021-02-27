import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	alignCenter: {
		textAlign: 'left',
		padding: '10px',
		color: 'darkblue',
	},
}));

export const StockCard = ({ specialstk }) => {
	const classes = useStyles();
	return (
		<div>
			<TableContainer>
				<Typography variant='subtitle2' className={classes.alignCenter}>
					Current Special stock level:
				</Typography>
				<Table aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell align='right'>Plant Code:</TableCell>
							<TableCell align='right'> wbs-element </TableCell>
							<TableCell align='right'>Current stock qty</TableCell>
							<TableCell align='right'>Current stock value</TableCell>
							<TableCell align='right'>Unit of measure</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{completestk.map((row) => (
							<TableRow key={row._id}>
								<TableCell align='right'>{row['plant-code']}</TableCell>
								<TableCell align='right'>{row['wbs-element']}</TableCell>
								<TableCell align='right'>{row['stock-qty']}</TableCell>
								<TableCell align='right'>{row['stock-val']}</TableCell>
								<TableCell align='right'>{row['unit-of-measure']}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
